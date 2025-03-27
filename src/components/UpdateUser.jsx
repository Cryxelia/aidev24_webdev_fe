import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateUsername } from "../services/userApi";
import TextInput from "./TextInput";
import Button from "./Button";

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [serverMessage, setServerMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await updateUsername(data);
      setServerMessage({ type: "success", text: response.message });
      reset();
    } catch (error) {
      setServerMessage({
        type: "error",
        text: error.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div>
      {serverMessage && <p>{serverMessage.text}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="new_username"
          label="New Username"
          register={register}
          registerOptions={{ required: "A new username is required" }}
          error={errors.username}
        />
        <Button text={"Update username"} onClick={onSubmit} />
      </form>
    </div>
  );
};

export default UpdateUser;
