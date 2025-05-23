import {
  clerkMiddleware,
  ClerkMiddlewareAuth,
  createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

const handleRedirectAfterAuth = async (
  auth: ClerkMiddlewareAuth,
  req: NextRequest
): Promise<NextResponse | undefined> => {
  const { userId, orgId } = await auth();

  if (!userId) return;

  // If user has no organization, redirect to /select-org
  if (userId && isPublicRoute(req)) {
    let path = '/select-org';
    // If the user has an organization, redirect to /organization/:id
    if (orgId) {
      path = `/organization/${orgId}`;
    }

    const redirectUrl = new URL(path, req.url);
    return NextResponse.redirect(redirectUrl);
  }
};
export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  return handleRedirectAfterAuth(auth, req) ?? NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
