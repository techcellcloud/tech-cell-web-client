import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    emailOrUsername: yup.string().required('Bạn cần nhập email hoặc username đã đăng ký'),
    password: yup
        .string()
        .min(8, 'Mật khẩu cần ít nhất 8 kí tự')
        .max(24, 'Mật khẩu có nhiều nhất 24 kí tự')
        .required('Bạn cần nhập mật khẩu'),
});

export const SignupSchema = yup.object({
    firstName: yup.string().required('Bạn cần điền tên'),
    lastName: yup.string().required('Bạn cần điền họ'),
    userName: yup.string().required('Bạn cần điền tên đăng nhập'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    //mobile: yup.string().required('Bạn cần nhập sdt'),
    password: yup.string().min(8, 'Mật khẩu cần ít nhất 8 kí tự').required('Bạn cần nhập mật khẩu'),
    re_password: yup
        .string()
        .oneOf([yup.ref('password')], 'Mật khẩu chưa khớp')
        .required('Bạn cần nhập lại mật khẩu!'),
});

export const VerifyEmailSchema = yup.object({
    email: yup.string().email('Bạn cần điền đúng định dạng email').required('Bạn cần nhập email'),
    otpCode: yup.string().matches(/^\d+$/, "Code OTP chỉ bao gồm chữ số").required("Bạn cần nhập OTP code được gửi tới email cần xác minh"),
});