# Security Policy

## Reporting a Vulnerability

The SBDK team takes the security of our software and services seriously. If you believe you have found a security vulnerability in the SBDK.dev website, we encourage you to let us know right away.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**security@sbdk.dev**

If you prefer, you can also report via:
- Opening a [private security advisory](https://github.com/sbdk-dev/sbdk.dev/security/advisories/new) on GitHub
- Direct message to project maintainers

### What to Include

To help us better understand and resolve the issue, please include as much of the following information as possible:

- **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, authentication bypass)
- **Full path of source file(s)** related to the vulnerability
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue** - what an attacker could do
- **Your contact information** (if you'd like credit)

### What to Expect

After you submit a vulnerability report:

1. **Acknowledgment** - We'll acknowledge receipt within 48 hours
2. **Assessment** - We'll investigate and assess the severity within 5 business days
3. **Updates** - We'll keep you informed about our progress
4. **Resolution** - We'll work to resolve critical issues as quickly as possible
5. **Credit** - We'll credit you in the security advisory (unless you prefer to remain anonymous)

### Response Timeline

- **Critical vulnerabilities**: Patched within 7 days
- **High severity**: Patched within 14 days
- **Medium severity**: Patched within 30 days
- **Low severity**: Addressed in next regular release

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| Older   | ❌ No              |

The SBDK.dev website is continuously deployed from the main branch. We recommend always using the latest version.

## Security Best Practices

When deploying or contributing to SBDK.dev:

### For Developers

- **Dependencies**: Keep all npm packages up to date
- **Environment Variables**: Never commit sensitive data
- **Authentication**: Use secure authentication mechanisms
- **Input Validation**: Validate and sanitize all user inputs
- **HTTPS**: Always use HTTPS in production
- **CSP**: Content Security Policy headers are configured
- **CORS**: Cross-Origin Resource Sharing is properly configured

### For Deployments

- **Secrets Management**: Use environment variables for sensitive data
- **HTTPS Only**: Enforce HTTPS in production
- **Regular Updates**: Keep Node.js and dependencies updated
- **Access Control**: Limit who can deploy to production
- **Monitoring**: Set up security monitoring and alerts

## Known Security Considerations

This website is a static Next.js application with the following security characteristics:

### What We Do

✅ **No user authentication** - No passwords or user data stored
✅ **No database** - No SQL injection risks
✅ **Static content** - Minimal attack surface
✅ **CSP headers** - Content Security Policy enabled
✅ **HTTPS only** - All traffic encrypted
✅ **Dependency scanning** - Automated via GitHub Dependabot

### What to Watch

⚠️ **Third-party scripts** - Analytics, CDNs (carefully vetted)
⚠️ **Client-side code** - XSS prevention in React components
⚠️ **Dependencies** - Regular updates required

## Security Disclosure Policy

### Public Disclosure

- Security issues will be disclosed publicly after a fix is released
- We aim for responsible disclosure within 90 days of initial report
- Critical issues may be disclosed sooner if actively exploited
- We'll coordinate disclosure timing with the reporter

### Hall of Fame

We recognize security researchers who help keep SBDK.dev secure:

<!-- Security researchers will be listed here -->
*No vulnerabilities reported yet*

## Contact

- **Security Issues**: security@sbdk.dev
- **General Questions**: Open a [GitHub Discussion](https://github.com/sbdk-dev/sbdk.dev/discussions)
- **Main Project**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev)

## Related Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [GitHub Security Features](https://docs.github.com/en/code-security)

---

Thank you for helping keep SBDK.dev secure! 🔒
