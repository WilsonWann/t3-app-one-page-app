import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
// import SubmitButton from "../components/SubmitButton";
import FormInput from "../../components/FormInput";

const Form = styled.form`
  width: "100%";
`;

const ErrorMessage = styled.div`
  margin-bottom: 0.5rem;
  color: red;
  font-size: medium;
`;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormInput
        label="姓名"
        required={true}
        inputProps={register("firstName", { required: true })}
        error={errors.firstName?.toString()}
      />
      {errors.firstName && <ErrorMessage>必須填寫</ErrorMessage>}
      <FormInput
        label={"Email"}
        required={true}
        inputProps={register("email", { required: true })}
        error={errors.email?.toString()}
      />
      {errors.email && <ErrorMessage>必須填寫</ErrorMessage>}
      <FormInput
        label="密碼"
        type="password"
        required={true}
        inputProps={register("password", { required: true })}
        error={errors.password?.toString()}
      />
      {errors.password && <ErrorMessage>必須填寫</ErrorMessage>}
      {/* <SubmitButton text={"立即註冊"} /> */}
    </Form>
  );
};

export default RegisterForm;
