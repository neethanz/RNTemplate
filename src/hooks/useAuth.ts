// import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigation } from "@react-navigation/native";
// import { useForm } from "react-hook-form";
// import BackgroundService from "react-native-background-actions";
// import { useDispatch } from "react-redux";
// import {
//   flushAuth,
//   setLoginResponse,
// } from "../redux_tool_kit/features/auth/auth_slice";
// import { persistor } from "../redux_tool_kit/store/store";
// import {
//   useForgotPasswordMutation,
//   useLoginMutation,
//   useLogoutMutation,
//   useOTPVerifyMutation,
//   useResendOTPMutation,
// } from "../services/auth_service";
// import {
//   MFASchema,
//   forgotPasswordSchema,
//   loginSchema,
// } from "../validators/input_validations";
// import useAutoSync from "./useAutoSync";
// import useToast from "./useToast";

// const useAuth = () => {
//   const { showSuccessToast, showErrorToast } = useToast();
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   const [requestLogin, { isLoading: isLoginLoading }] = useLoginMutation();
//   const [OTPVerify, { isLoading: isOTPVerifyLoading }] = useOTPVerifyMutation();
//   const [resetPassword, { isLoading: isResetPasswordLoading }] =
//     useForgotPasswordMutation();
//   const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();
//   const [resendOTP, { isLoading: isResendOTPLoading }] = useResendOTPMutation();

//   const { stopBackgroundSyncService } = useAutoSync();

//   //form controls
//   const {
//     control: loginControl,
//     handleSubmit: handleLoginSubmit,
//     formState: { errors: loginErrors },
//   } = useForm({
//     defaultValues: {
//       email: "admin@gmail.com",
//       password: "admin@gmail.com",
//     },
//     resolver: yupResolver(loginSchema),
//   });

//   const {
//     control: MFAControl,
//     handleSubmit: handleMFASubmit,
//     formState: { errors: MFAErrors },
//   } = useForm({
//     defaultValues: {
//       otp: "",
//     },
//     resolver: yupResolver(MFASchema),
//   });

//   const {
//     control: forgotPasswordControl,
//     handleSubmit: handleForgotPasswordSubmit,
//     formState: { errors: forgotPasswordErrors },
//   } = useForm({
//     defaultValues: {
//       email: "",
//     },
//     resolver: yupResolver(forgotPasswordSchema),
//   });

//   const handleForgotPassword = handleForgotPasswordSubmit(({ email }) =>
//     resetPassword({ email })
//       .unwrap()
//       .then((res) => {
//         showSuccessToast(res.status);
//         setTimeout(() => {
//           navigation.goBack();
//         }, 1000);
//       })
//       .catch((err) => showErrorToast(err.data.message))
//   );

//   const handleLogin = handleLoginSubmit(({ email, password }) => {
//     requestLogin({ email, password })
//       .unwrap()
//       .then((res) => {
//         navigation.navigate("MFA", { user_id: res.user_id });
//       })
//       .catch((err) => {
//         // showErrorToast(err.data.message);
//       });
//   });

//   const handleLogout = () => {
//     logout()
//       .unwrap()
//       .then(async (res) => {
//         if (res.status === "success") {
//           dispatch(flushAuth());
//           if (BackgroundService.isRunning()) {
//             stopBackgroundSyncService();
//           }
//           await persistor.purge();
//           showSuccessToast(res.message);
//         }
//       })
//       .catch((err) => {
//         showErrorToast(err.data.message);
//       });
//   };

//   const handleResendOTP = ({ user_id }) => {
//     resendOTP({ user_id })
//       .unwrap()
//       .then((res) => {
//         if (res.status === "success") {
//           showSuccessToast(res.message);
//         }
//       })
//       .catch((err) => showErrorToast(err.data.message));
//   };

//   const handleMFA = ({ user_id }) =>
//     handleMFASubmit(({ otp }) => {
//       OTPVerify({
//         user_id,
//         code: otp,
//       })
//         .unwrap()
//         .then(async ({ access_token, user }) => {
//           dispatch(setLoginResponse({ access_token, user }));
//         })
//         .catch((err) => {
//           showErrorToast(err.data.message);
//         });
//     })();

//   return {
//     isLoginLoading,
//     loginControl,
//     loginErrors,
//     handleLogin,
//     isOTPVerifyLoading,
//     MFAControl,
//     MFAErrors,
//     handleMFA,
//     handleForgotPassword,
//     forgotPasswordControl,
//     forgotPasswordErrors,
//     isResetPasswordLoading,
//     handleLogout,
//     isLogoutLoading,
//     isResendOTPLoading,
//     handleResendOTP,
//   };
// };

// export default useAuth;
