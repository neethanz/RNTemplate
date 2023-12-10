// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import CustomReactHookFormField from "../../components/molecules/CustomReactHookFormField";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import CustomButton from "../../components/atoms/CustomButton";
// import common_styles from "../../style_sheet/common_styles";
// import { devModeSchema } from "../../validators/input_validations";
// import { useNavigation } from "@react-navigation/native";

// export default function DeveloperOptions() {
//   const navigation = useNavigation();
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       password: "",
//     },
//     resolver: yupResolver(devModeSchema),
//   });

//   return (
//     <View style={[common_styles.container, { justifyContent: "center" }]}>
//       <CustomReactHookFormField
//         control={control}
//         errors={errors.password}
//         placeHolder={"Enter Dev Password"}
//         name={"password"}
//         label={"Dev Password"}
//       />

//       <CustomButton
//         title={"Continue"}
//         onPress={handleSubmit(() => navigation.navigate("ChangeBaseUrl"))}
//         type={"Primary"}
//         fullWidth={true}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
