// import React from "react";
// import { ScrollView, View } from "react-native";
// import ActivityLoader from "../../components/atoms/ActivityIndicator";
// import CustomButton from "../../components/atoms/CustomButton";
// import VSpacer from "../../components/atoms/VSpacer";
// import CustomReactHookFormField from "../../components/molecules/CustomReactHookFormField";
// import useAuth from "../../hooks/useAuth";
// import common_styles from "../../style_sheet/common_styles";

// export default function MFA({ route }) {
//   const { user_id } = route.params;
//   const {
//     handleMFA,
//     MFAControl,
//     MFAErrors,
//     isOTPVerifyLoading,
//     isResendOTPLoading,
//     handleResendOTP,
//   } = useAuth();

//   if (isOTPVerifyLoading || isResendOTPLoading) {
//     return <ActivityLoader />;
//   }

//   return (
//     <View style={common_styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={[
//           common_styles.scrollContainer,
//           { justifyContent: "center" },
//         ]}
//       >
//         <View style={common_styles.cardContainer}>
//           <CustomReactHookFormField
//             control={MFAControl}
//             errors={MFAErrors.otp}
//             placeHolder={"000000"}
//             name={"otp"}
//             label={"OTP"}
//             keyboardType="numeric"
//           />
//           <VSpacer />
//           <CustomButton
//             title={"Verify"}
//             onPress={() => handleMFA({ user_id })}
//             fullWidth={true}
//             type="Primary"
//           />

//           <CustomButton
//             title={"Resend OTP"}
//             onPress={() => handleResendOTP({ user_id })}
//             fullWidth={true}
//             type="Secondary"
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
