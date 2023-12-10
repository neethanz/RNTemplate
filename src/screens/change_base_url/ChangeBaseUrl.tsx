// import { StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import common_styles from "../../style_sheet/common_styles";
// import CustomButton from "../../components/atoms/CustomButton";
// import CustomReactHookFormField from "../../components/molecules/CustomReactHookFormField";
// import { useNavigation } from "@react-navigation/native";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { baseUrlSchema } from "../../validators/input_validations";
// import { useDispatch, useSelector } from "react-redux";
// import { setBaseUrl } from "../../redux_tool_kit/features/base_url/base_url_slice";
// import useToast from "../../hooks/useToast";

// export default function ChangeBaseUrl() {
//   const dispatch = useDispatch();
//   const { showSuccessToast } = useToast();
//   const navigation = useNavigation();
//   const baseUrl = useSelector((state) => state.baseUrl.base_url);

//   const saveCustomUrl = ({ baseUrl }) => {
//     try {
//       dispatch(setBaseUrl(baseUrl));
//       showSuccessToast(`URL changed to ${baseUrl}`);
//       setTimeout(() => {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: "AuthNavigator", params: { screen: "Login" } }],
//         });
//       }, 1000);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       baseUrl: "",
//     },
//     resolver: yupResolver(baseUrlSchema),
//   });
//   return (
//     <View style={[common_styles.container, { justifyContent: "center" }]}>
//       <CustomReactHookFormField
//         control={control}
//         errors={errors.baseUrl}
//         placeHolder={"Enter Base Url"}
//         name={"baseUrl"}
//         label={"Base Url"}
//       />

//       <CustomButton
//         title={"Change"}
//         onPress={handleSubmit(saveCustomUrl)}
//         type={"Primary"}
//         fullWidth={true}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
