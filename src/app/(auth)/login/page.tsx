'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { FacebookRounded, Google, PhoneIphone } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';

import { Copyright } from '@components/Layout';
import { useFormik } from 'formik';
import { LoginSchema } from 'validate/auth.validate';
import { LoginModel } from 'models';
import { useAppDispatch } from '@store/store';
import { logIn } from '@store/slices/authSlice';
import { ForgotPassword } from '../forgotpassword/FromForgotPassword';

const Login = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [openForgotPassword, setOpenForgotPassword] = useState(false);

    useEffect(() => {
        document.title = `Đăng Nhập`;
    }, []);

    const formik = useFormik({
        initialValues: new LoginModel(),
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const response = await dispatch(logIn(values));
            if (response.meta.requestStatus === 'fulfilled') {
                console.log(response.meta);
                toast.success('Đăng nhập thành công', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                const timeout = setTimeout(() => {
                    router.replace('/');
                }, 5000);
                return () => {
                    clearTimeout(timeout);
                };
                
            } else {
                return toast.error('Đăng nhập thất bại !!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        },
    });

    return (
        <>

            <ToastContainer />

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ mg: 1, bgcolor: '#ee4949' }}>
                        <PhoneIphone />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="emailOrUsername"
                            label="Email hoặc SĐT"
                            name="emailOrUsername"
                            autoFocus
                            value={formik.values.emailOrUsername}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.emailOrUsername &&
                                Boolean(formik.errors.emailOrUsername)
                            }
                            helperText={
                                formik.touched.emailOrUsername && formik.errors.emailOrUsername
                            }
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" sx={{ color: '#ee4949' }} />}
                            label="Nhớ mật khẩu"
                            sx={{
                                '& .Mui-checked': {
                                    color: '#ee4949',
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#ee4949' }}
                        >
                            Đăng nhập
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Typography
                                    variant="body2"
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => setOpenForgotPassword(true)}
                                >
                                    Quên mật khẩu
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link href="/register">
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            '& span': {
                                                textDecoration: 'underline',
                                                color: '#ee4949',
                                            },
                                        }}
                                    >
                                        Chưa có tài khoản ? <span>Đăng ký</span>
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Typography component="h1" variant="h6" sx={{ mt: 3 }}>
                        Hoặc Đăng nhập với
                    </Typography>
                    <Stack spacing={3} direction="row">
                        <Link href="#">
                            <IconButton size="large" sx={{ color: '#ee4949' }}>
                                <FacebookRounded />
                            </IconButton>
                        </Link>
                        <Link href="#">
                            <IconButton size="large" sx={{ color: '#ee4949' }}>
                                <Google />
                            </IconButton>
                        </Link>
                    </Stack>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            {openForgotPassword && (
                <ForgotPassword
                    isOpen={openForgotPassword}
                    handleClose={() => setOpenForgotPassword(false)}
                />
            )}
        </>
    );
};

export default Login;
