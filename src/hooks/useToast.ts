import Toast from "react-native-root-toast";

const useToast = () => {
  const toast = ({ message, type }: { message: string; type: string }) =>
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      // backgroundColor: type === "error" ? "red" : "green",
    });

  const showErrorToast = (message: string) => toast({ message, type: "error" });
  const showSuccessToast = (message: string) =>
    toast({ message, type: "success" });
  const showWarningToast = (message: string) =>
    toast({ message, type: "warning" });

  return { showErrorToast, showSuccessToast, showWarningToast };
};

export default useToast;
