import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user; // Check if the user is logged in
            const publicRoutes = ['/', '/login', '/register']; // Define public routes
            const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

            if (!isLoggedIn) {
                // Allow access to public routes for unauthenticated users
                if (isPublicRoute) {
                    return true;
                }
                // Redirect unauthenticated users to login page
                return Response.redirect(new URL('/login', nextUrl));
            } else {
                // Prevent logged-in users from accessing /login or /register
                const restrictedForLoggedIn = ['/login', '/register'];
                if (restrictedForLoggedIn.includes(nextUrl.pathname)) {
                    return Response.redirect(new URL('/event/create', nextUrl)); // Redirect logged-in users to dashboard
                }
                return true; // Allow logged-in users to access other routes
            }
        },
    },
    providers: [Credentials({})], // Add providers with an empty array for now
} satisfies NextAuthConfig;
