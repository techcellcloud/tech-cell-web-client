export class LoginModel {
    emailOrUsername ?: string ;
    password?: string | null = null;
}

export class RegisterModel {
    userName?: string | null = null;
    password?: string | null = null;
    re_password?: string | null = null;
    email?: string | null = null;
    firstName?: string | null = null;
    lastName?: string | null = null;
}

export class ProfileModel {
    userName?: string | null = null;
    email?: string | null = null;
    phoneNumber?: string | null = null;
    referralCode?: string | null = null;
}

export class VerifyEmailModel {
    email?: string = "";
    otpCode?: string = "";
}

export class ForgotPasswordModel {
    email?: string | null = null;
    otpCode?: string | null = null;
    password?: string | null = null;
    re_password?: string | null = null;
}