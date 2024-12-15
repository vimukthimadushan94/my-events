export interface User {
    id: string;
    firstName: string;
    lastName: string;
    events: Event[];
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash: string;
    securityStamp: string;
    concurrencyStamp: string;
    phoneNumber: string | null;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd: string | null;
    lockoutEnabled: boolean;
    accessFailedCount: number;
}

export interface Event {
    id: number;
    name: string;
    color: string;
    description: string;
    createdByUserId: string;
    createdByUser: User;
    users: User[];
}