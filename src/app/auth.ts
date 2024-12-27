import { User } from "@/types/mainTypes";
import Credentials from "next-auth/providers/credentials"
import NextAuth, { type DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string
            /**
             * Homma: https://authjs.dev/getting-started/typescript
             */
        } & DefaultSession["user"]
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const res = await fetch("http://localhost:5069/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const user = await res.json();
                if (user.status == 401) {
                    throw new Error("Invalid credentials.")
                }
                return user
            },
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user };
            }
            return token;
        },

        session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    accessToken: token.accessToken,
                },
            }
        },
    }
})