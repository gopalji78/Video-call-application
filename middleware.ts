import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// add those routes which you want only authorised persons can see 
const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/about',
    '/meeting(.*)'
]);

export default clerkMiddleware((auth, req) => {
    if (protectedRoutes(req)) auth().protect();
});


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};