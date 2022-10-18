import React from 'react'
import Title from '../../components/ui/Title';
import Input from '../../components/form/Input';
import Link from 'next/link';
import axios from 'axios'
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/registerSchema';
import {toast} from 'react-toastify'

const Register = () => {

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: async (values,{resetForm}) => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,values).then(response => {
          toast.success(response.data.message)
        }).catch(err=> {
          toast.error(err.response.data.message)
        })
      },
      validationSchema: registerSchema,
    });

  return (
    <div className="container mx-auto sm:px-40 px-4">
      <form
        className="flex flex-col items-center my-16 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Register</Title>
        <div className="flex flex-col gap-y-3 w-full">
        <Input
            iLabel={"Your full name"}
            iType="text"
            value={values.fullName}
            onChange={handleChange("fullName")}
            error={errors.fullName}
            onBlur={handleBlur('fullName')}
            touched={touched.fullName}
          />
        <Input
            iLabel={"Your Email Address"}
            iType="text"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
            onBlur={handleBlur('email')}
            touched={touched.email}
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
          <Input
            iLabel={"Your confirm password"}
            iType="password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={errors.confirmPassword}
            onBlur={handleBlur('confirmPassword')}
            touched={touched.confirmPassword}
          />
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type='submit'>REGISTER</button>
          <Link href="/auth/login" passHref>
            <span className="text-sm underline cursor-pointer text-secondary">
              Do you have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register