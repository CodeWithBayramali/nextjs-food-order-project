import React from 'react'
import Input from '../form/Input'
import Title from '../ui/Title'
import { useFormik } from 'formik'
import {profileSchema} from '../../schema/profileSchema'

const Account = () => {

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: profileSchema,
    });

  return (
    <div className="lg:p-8 py-8 w-full transition-all">
    <Title addClass="text-4xl font-bold">Account Settings</Title>
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-6">
        <Input
          iLabel="Your Full Name"
          iType="text"
          value={values.fullName}
          onChange={handleChange("fullName")}
          error={errors.fullName}
          onBlur={handleBlur("fullName")}
          touched={touched.fullName}
        />
        <Input
          iLabel="Your Phone Number"
          iType="text"
          value={values.phoneNumber}
          onChange={handleChange("phoneNumber")}
          error={errors.phoneNumber}
          onBlur={handleBlur("phoneNumber")}
          touched={touched.phoneNumber}
        />
        <Input
          iLabel="Your Job"
          iType="text"
          value={values.job}
          onChange={handleChange("job")}
          error={errors.job}
          onBlur={handleBlur("job")}
          touched={touched.job}
        />
        <Input
          iLabel="Your Email"
          iType="text"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
          onBlur={handleBlur("email")}
          touched={touched.email}
        />
        <Input
          iLabel="Your Address"
          iType="text"
          value={values.address}
          onChange={handleChange("address")}
          error={errors.address}
          onBlur={handleBlur("address")}
          touched={touched.address}
        />
        <Input
          iLabel="Your Bio"
          iType="text"
          value={values.bio}
          onChange={handleChange("bio")}
          error={errors.bio}
          onBlur={handleBlur("bio")}
          touched={touched.bio}
        />
      </div>
      <button type='submit' className="btn-primary mt-3">Update</button>
    </form>
  </div>
  )
}

export default Account