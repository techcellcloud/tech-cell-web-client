export interface ILogin {
    emailOrUsername?: string | null;
    password?: string | null;
}

export interface IRegister {
    email?: string | null;
    userName?: string | null;
    password?: string | null;
    re_password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}

export interface IVerifyEmail {
    email: string | null;
    otpCode: string | null;
}

export interface IUser {
    _id?: string | null;
    email?: string | null;
    emailVerified?: boolean;
    address?: string[] | null;
    role?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}

export interface IAuthSlice {
    item:[];
    status:null;
    user: IUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    isError: boolean;
    message: string | null;
}

export interface ICart{
    id:number;
}