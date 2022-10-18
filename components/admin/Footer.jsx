import React from 'react'
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footerSchema";

const Footer = () => {

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit:(values) => {
        console.log(values)
      },
      validationSchema: footerSchema,
    });

  return (
    <form onSubmit={handleSubmit} className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Footer Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
      <Input
          iLabel="Your Location"
          iType="text"
          value={values.location}
          onChange={handleChange("location")}
          error={errors.location}
          onBlur={handleBlur("location")}
          touched={touched.location}
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
          iLabel="Write a Day"
          iType="text"
          value={values.day}
          onChange={handleChange("day")}
          error={errors.day}
          onBlur={handleBlur("day")}
          touched={touched.day}
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
          iLabel="Write a Description"
          iType="text"
          value={values.desc}
          onChange={handleChange("desc")}
          error={errors.desc}
          onBlur={handleBlur("desc")}
          touched={touched.desc}
        />
        <Input
          iLabel="Write a Time"
          iType="text"
          value={values.time}
          onChange={handleChange("time")}
          error={errors.time}
          onBlur={handleBlur("time")}
          touched={touched.time}
        />
      </div>
      <button type='submit' className="btn-primary mt-4">Update</button>
    </form>
  )
}

export default Footer