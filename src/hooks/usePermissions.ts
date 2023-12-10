// import { PERMISSIONS, request } from "react-native-permissions";
// import useToast from "./useToast";

// const usePermissions = () => {
//   const { showErrorToast } = useToast();

//   const requestSMSPermission = async () => {
//     try {
//       const result = await request(PERMISSIONS.ANDROID.READ_SMS);
//       if (result === "unavailable") {
//         showErrorToast("SMS Service not available on your device");
//       } else if (result === "denied") {
//         showErrorToast("SMS permission is mandatory");
//       } else if (result === "blocked") {
//         showErrorToast("Please enable sms permission in setting");
//       }
//       return result;
//     } catch (error) {
//       return false;
//     }
//   };

//   return { requestSMSPermission };
// };

// export default usePermissions;
