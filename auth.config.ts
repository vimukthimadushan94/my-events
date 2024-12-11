import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const publicRoutes = ['/', '/login', '/register'];
            const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

            if (!isLoggedIn) {
                if (isPublicRoute) {
                    return true;
                }
                return Response.redirect(new URL('/login', nextUrl));
            } else {
                const restrictedForLoggedIn = ['/login', '/register'];
                if (restrictedForLoggedIn.includes(nextUrl.pathname)) {
                    return Response.redirect(new URL('/event/list', nextUrl));
                }
                return true;
            }
        },
    },
    providers: [Credentials({})],
} satisfies NextAuthConfig;
