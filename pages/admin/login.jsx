import React from "react";
import { useFormik } from "formik";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'
import { adminSchema } from "../../schema/adminLoginSchema";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useRouter } from "next/router";

const login = () => {

  const router= useRouter()

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: async (values,{resetForm}) => {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`,values)
            .then(response => {
              resetForm()
              router.push("/admin/profile")
              toast.success(response.data.message)
            }).catch(err=> toast.error(err.response.data.message))
      },
      validationSchema: adminSchema,
    });



  return (
    <div className="container mx-auto sm:px-40 px-4 h-screen">
      <form
        className="flex flex-col items-center mt-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-y-2 w-full">
          <Input
            iLabel={"Username"}
            iType="text"
            value={values.username}
            onChange={handleChange("username")}
            error={errors.username}
            onBlur={handleBlur('username')}
            touched={touched.username}
          />
          <Input
            iLabel={"Your Password"}
            iType="password"
            value={values.password}
            onChange={handleChange("password")}
            error={errors.password}
            onBlur={handleBlur('password')}
            touched={touched.password}
          />
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary">LOGIN</button>
          <button className="btn-primary flex items-center justify-center !bg-secondary">
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

export const getServerSideProps = (ctx)=> {
  const myCookie = ctx.req?.cookies || "";
  if(myCookie.token === process.env.ADMIN_TOKEN)
  {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent:false
      }
    }
  }
  return {
    props:{}
  }
}

export default login;
