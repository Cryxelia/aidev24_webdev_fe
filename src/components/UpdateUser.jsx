import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { updateUsername } from "../services/userApi";
import TextInput from "./TextInput";
import Button from "./Button";
import UserContext from '../contexts/UserContextBase'

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [serverMessage, setServerMessage] = useState("");
  const { setUser } = useContext(UserContext)

  const onSubmit = async (data) => {
    try {
      const response = await updateUsername(data);
      setUser({ username: data.new_username })
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
    <div className="primary-form-container">
      {serverMessage && (
        <p style={{ color: serverMessage.type === "error" ? "red" : "green" }}>
          {serverMessage.text}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="new_username"
          label="New Username"
          register={register}
          registerOptions={{ required: "A new username is required" }}
          error={errors.username}
          className="primary-user-input" // 💡 ny klass här
        />
        <Button text="Update username" type="submit" />
      </form>
    </div>
  );
};

export default UpdateUser;