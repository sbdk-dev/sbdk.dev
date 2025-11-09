import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json(
      { error: 'Missing slug parameter' },
      { status: 400 }
    )
  }

  try {
    // Wiki files are mostly in uppercase format, except for Home.md
    // Convert slug to uppercase for all pages except Home
    const wikiSlug = slug === 'Home' ? 'Home' : slug.toUpperCase()

    // Fetch from GitHub Wiki raw URL
    const url = `https://raw.githubusercontent.com/wiki/sbdk-dev/sbdk-dev/${wikiSlug}.md`
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SBDK.dev Documentation Viewer',
      },
      // Cache for 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch documentation: ${response.statusText}` },
        { status: response.status }
      )
    }

    const content = await response.text()

    return NextResponse.json(
      { content },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching documentation:', error)
    return NextResponse.json(
      { error: 'Failed to fetch documentation' },
      { status: 500 }
    )
  }
}
