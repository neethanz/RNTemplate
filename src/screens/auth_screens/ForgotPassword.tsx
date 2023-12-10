// import React from "react";
// import { ScrollView, View } from "react-native";
// import CustomButton from "../../components/atoms/CustomButton";
// import CustomReactHookFormField from "../../components/molecules/CustomReactHookFormField";
// import useAuth from "../../hooks/useAuth";
// import common_styles from "../../style_sheet/common_styles";
// import VSpacer from "../../components/atoms/VSpacer";
// import ActivityLoader from "../../components/atoms/ActivityIndicator";

// export default function ForgotPassword({ navigation }) {
//   const {
//     forgotPasswordControl,
//     forgotPasswordErrors,
//     handleForgotPassword,
//     isResetPasswordLoading,
//   } = useAuth();

//   if (isResetPasswordLoading) {
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
//             control={forgotPasswordControl}
//             errors={forgotPasswordErrors.email}
//             placeHolder={"Abdi@gmail.com"}
//             name={"email"}
//             label={"Email"}
//           />
//           <VSpacer />
//           <CustomButton
//             title={"Send Reset Link"}
//             onPress={handleForgotPassword}
//             fullWidth={true}
//             type="Primary"
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
