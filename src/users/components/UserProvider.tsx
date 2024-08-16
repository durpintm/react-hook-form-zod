import { useForm, FormProvider } from "react-hook-form";
import Users from "./Users";
import { userSchema, UserSchema, defaultValues } from "../types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const UserProvider = () => {
  const methods = useForm<UserSchema>({
    mode: "all",
    resolver: zodResolver(userSchema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};

export default UserProvider;
