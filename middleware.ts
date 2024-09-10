import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)",  // Match all routes except static files and _next/*
    "/",  // Match the root URL
    "/(api|trpc)(.*)",], // Match API and TRPC routes]
};
