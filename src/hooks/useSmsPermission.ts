// import useToast from "./useToast";

// const useSmsPermission = async () => {
//   const { showErrorToast } = useToast();
//   const checkSmsPermission = async () => {
//     const result = await requestSMSPermission();
//     if (result) {
//       if (result === "granted") {
//       } else if (result === "unavailable") {
//         showErrorToast("SMS Service not available on your device");
//       } else if (result === "denied") {
//         showErrorToast("SMS permission is mandatory");
//       } else if (result === "blocked") {
//         showErrorToast("Please enable sms permission in setting");
//       }
//     }
//   };

//   return { useSmsPermission };
// };

// export default useSmsPermission;
