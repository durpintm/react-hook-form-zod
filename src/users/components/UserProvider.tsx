import { useForm, FormProvider } from "react-hook-form";
import Users from "./Users";
import { userSchema, UserSchema, defaultValues } from "../types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

const UserProvider = () => {
  const methods = useForm<UserSchema>({
    mode: "all",
    resolver: zodResolver(userSchema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <Users />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default UserProvider;
