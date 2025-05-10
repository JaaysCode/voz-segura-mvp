import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Handle redirects for old auth routes
  const { pathname } = request.nextUrl;

  // Redirect old auth paths to the new unified auth page
  if (pathname === '/sign-in') {
    const url = request.nextUrl.clone();
    url.pathname = '/auth';
    url.searchParams.set('mode', 'signin');
    return NextResponse.redirect(url);
  }

  if (pathname === '/sign-up') {
    const url = request.nextUrl.clone();
    url.pathname = '/auth';
    url.searchParams.set('mode', 'signup');
    return NextResponse.redirect(url);
  }

  // Continue with the normal session update for all other routes
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
