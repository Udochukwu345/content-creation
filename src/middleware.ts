// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createServerClient(
    'https://zqlaohmrnnzqgryvcvky.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxbGFvaG1ybm56cWdyeXZjdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MjgzMzEsImV4cCI6MjA2NDAwNDMzMX0.lOpSRPkT-AEc6EYYcFHWao9hTEOPYCikOjtiSTcMBWA',
    {
      cookies: {
        getAll() {
          return req.cookies.getAll().map(({ name, value }) => ({
            name,
            value,
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Refresh session if expired - required for Server Components
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    console.error('Auth session error:', error)
  }

  return res
}

// Limit middleware to relevant routes
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
}
