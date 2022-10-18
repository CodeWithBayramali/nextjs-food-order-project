import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik'
import {newPasswordSchema} from '../../schema/newPasswordSchema'

const Password = () => {

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit:(values) => {
        console.log(values)
      },
      validationSchema: newPasswordSchema,
    });

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
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
      <button className="btn-primary mt-4" type="submit">
        Update
      </button>
    </form>
  )
}

export default Password