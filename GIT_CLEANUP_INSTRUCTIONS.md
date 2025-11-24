# Git Cleanup Instructions

## ⚠️ Important Warning

**Rewriting git history is a destructive operation.** Only do this if:
- The repository hasn't been widely shared yet
- You're comfortable with force-pushing
- You've backed up your repository

**If the repo is already public and in use, skip this and accept the mixed authorship.**

## Current Situation

Your git history has commits from three authors:
1. **Matt Strautmann** (167921793+matt-strautmann@users.noreply.github.com) - GitHub identity
2. **matt-strautmann** (matt.strautmann@gmail.com) - Personal email
3. **Claude** (noreply@anthropic.com) - AI assistant commits

## Option 1: Rewrite All Commits to Single Author (Destructive)

This will rewrite **all** commits to use a single author identity.

### Step 1: Choose Your Identity

Decide which identity you want to use:

**Option A: GitHub Identity (Recommended)**
```bash
git config user.name "matt-strautmann"
git config user.email "167921793+matt-strautmann@users.noreply.github.com"
```

**Option B: Personal Email**
```bash
git config user.name "Matt Strautmann"
git config user.email "matt.strautmann@gmail.com"
```

### Step 2: Backup Your Repository

```bash
# Create a backup branch
git branch backup-before-rewrite

# Or create a complete backup
cd ..
cp -r sbdk.dev sbdk.dev-backup
cd sbdk.dev
```

### Step 3: Rewrite History

```bash
# Rewrite all commits to use current git config
git filter-branch --env-filter '
CORRECT_NAME="matt-strautmann"
CORRECT_EMAIL="167921793+matt-strautmann@users.noreply.github.com"

export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
' --tag-name-filter cat -- --branches --tags
```

Or use `git-filter-repo` (faster, recommended):

```bash
# Install git-filter-repo
# macOS: brew install git-filter-repo
# Other: pip install git-filter-repo

# Create mailmap file
cat > mailmap.txt <<EOF
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> Claude <noreply@anthropic.com>
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> matt-strautmann <matt.strautmann@gmail.com>
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> Matt Strautmann <167921793+matt-strautmann@users.noreply.github.com>
EOF

# Apply mailmap
git filter-repo --mailmap mailmap.txt --force
```

### Step 4: Force Push

```bash
# DANGER: This will rewrite history on GitHub
git push origin main --force

# If you have other branches, push them too
git push origin --all --force
git push origin --tags --force
```

### Step 5: Notify Collaborators

Anyone who has cloned the repository will need to:
```bash
cd sbdk.dev
git fetch origin
git reset --hard origin/main
```

## Option 2: Keep History, Fix Future Commits (Non-Destructive)

If you don't want to rewrite history, just ensure future commits use the correct identity:

```bash
# Set local repository config
git config user.name "matt-strautmann"
git config user.email "167921793+matt-strautmann@users.noreply.github.com"

# Or set global config for all repos
git config --global user.name "matt-strautmann"
git config --global user.email "167921793+matt-strautmann@users.noreply.github.com"
```

This won't change existing commits but ensures all new commits use the correct identity.

## Option 3: Use .mailmap (GitHub Display Only)

GitHub supports `.mailmap` to consolidate author identities for display purposes (doesn't rewrite history):

```bash
# Create .mailmap file in repo root
cat > .mailmap <<EOF
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> Claude <noreply@anthropic.com>
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> matt-strautmann <matt.strautmann@gmail.com>
matt-strautmann <167921793+matt-strautmann@users.noreply.github.com> Matt Strautmann <167921793+matt-strautmann@users.noreply.github.com>
EOF

# Commit the mailmap
git add .mailmap
git commit -m "chore: add mailmap to consolidate author identities"
git push origin main
```

This will make GitHub show all commits as from `matt-strautmann` in the UI, but the actual git history remains unchanged.

## Branch Cleanup

### List All Branches

```bash
# Local branches
git branch -a

# Remote branches
git branch -r
```

### Delete Unnecessary Branches

```bash
# Delete local branch
git branch -d branch-name

# Force delete local branch
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name
```

### Recommended: Keep Only Main

```bash
# List remote branches (excluding main)
git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD'

# Delete all remote branches except main (careful!)
git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | xargs -I {} git push origin --delete {}
```

## Commit Message Cleanup

If you want to update recent commit messages (last few commits only):

```bash
# Interactive rebase for last 5 commits
git rebase -i HEAD~5

# In the editor, change 'pick' to 'reword' for commits you want to update
# Save and close, then edit each commit message as prompted
```

After rebasing:
```bash
git push origin main --force
```

## Recommended Approach

For a public reference implementation repository, I recommend:

**Option 3: Use .mailmap** (simplest, non-destructive)
- Add .mailmap file to consolidate identities
- This only affects GitHub's display
- No history rewrite needed
- Safe for public repositories

Then commit your current changes:
```bash
git add .
git commit -m "chore: prepare repository for public archive (November 2025)

- Remove sensitive keys and tokens
- Update documentation for archived status
- Fix repository URLs
- Add GitHub setup documentation"

git push origin main
```

## Verification

After cleanup, verify:

```bash
# Check recent commits
git log --pretty=format:"%an <%ae>" -10 | sort | uniq

# Check all unique authors in history
git log --all --format='%aN <%aE>' | sort | uniq

# Check contributor stats
git shortlog -sn --all
```

## Post-Cleanup Checklist

- [ ] Verified all commits have desired author
- [ ] Backed up repository before rewrite
- [ ] Force pushed to GitHub (if rewrote history)
- [ ] Notified collaborators to reset their clones
- [ ] Tested repository builds successfully
- [ ] Updated .mailmap if using Option 3
- [ ] Deleted unnecessary branches
- [ ] Verified GitHub displays authors correctly
