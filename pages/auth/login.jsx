import React, { useEffect } from "react";
import { loginSchema } from "../../schema/loginSchema";
import { useFormik } from "formik";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {toast} from 'react-toastify'

const Login = () => {
  const { push } = useRouter();

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values, { resetForm }) => {
        try {
          const { email, password } = values;
          let options = { redirect: false, email, password };
          const res = await signIn("credentials", options);
          if(res.status === 200){
            toast.success("Login Successfull")
          }
          resetForm();
          push("/profile")
        } catch (error) {
          toast.error("An unexpected error has occurred !")
        }
      },
      validationSchema: loginSchema,
    });

  return (
    <div className="container mx-auto sm:px-40 px-4 sm:mb-0 mb-6 sm:h-[calc(100vh_-_489px)]">
      <form
        className="flex flex-col items-center mt-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-y-2 w-full">
          <Input
            iLabel={"Your Email Address"}
            iType="text"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
            onBlur={handleBlur("email")}
            touched={touched.email}
          />
          <Input
            iLabel={"Your Password"}
            iType="password"
            value={values.password}
            onChange={handleChange("password")}
            error={errors.password}
            onBlur={handleBlur("password")}
            touched={touched.password}
          />
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            LOGIN
          </button>
          <button
            className="btn-primary flex items-center justify-center !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
          >
            <AiFillGithub className="inline mx-4" />
            GITHUB
          </button>
          <Link href="/auth/register" passHref>
            <span className="text-sm underline cursor-pointer text-secondary">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(session){
    return {
      redirect: {
        destination: "/profile",
        permanent: false
      }
    }
  }

  return {
    props:{}
  }
}

export default Login;
