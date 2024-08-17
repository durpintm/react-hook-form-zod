import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { UserSchema } from "../types/userSchema";
import RHFAutoComplete from "../../components/RHFAutoComplete";
import { useEffect } from "react";
import { useStates } from "../services/queries";

const Users = () => {
  const statesQuery = useStates();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<UserSchema>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <>
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Stack>
      <RHFAutoComplete<UserSchema>
        name="states"
        label="States"
        options={statesQuery.data}
      />
    </>
  );
};

export default Users;
