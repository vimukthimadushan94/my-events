import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

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

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    }
})