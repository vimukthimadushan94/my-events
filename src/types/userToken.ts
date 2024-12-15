export interface UserSession {
    user: {
        sub: string;
        tokenType: string;
        accessToken: string;
        expiresIn: number;
        refreshToken: string;
        id: string;
        iat: number;
        exp: number;
        jti: string;
    };
    expires: string;
}
