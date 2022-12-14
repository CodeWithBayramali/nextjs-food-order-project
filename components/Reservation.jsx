import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservationSchema";

const Reservation = () => {
  const {values,handleChange,handleSubmit,errors,touched,handleBlur} = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit: values => {
        console.log(values)
    },
    validationSchema:reservationSchema
  });


  return (
    <div className="container mx-auto py-12 sm:px-40 px-4">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="lg:flex-1 w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
              <Input
                iLabel="Your Full Name"
                iType="text"
                value={values.fullName}
                onChange={handleChange('fullName')}
                error={errors.fullName}
                onBlur={handleBlur('fullName')}
                touched={touched.fullName}
              />
              <Input
                iLabel="Your Phone Number"
                iType="text"
                value={values.phoneNumber}
                onChange={handleChange('phoneNumber')}
                error={errors.phoneNumber}
                onBlur={handleBlur('phoneNumber')}
                touched={touched.phoneNumber}
              />
              <Input
                iLabel="Your Email Address"
                iType="email"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
                onBlur={handleBlur('email')}
                touched={touched.email}
              />
              <Input
                iLabel="How Many Persons ?"
                iMin={1}
                iType="number"
                value={values.persons}
                onChange={handleChange('persons')}
                error={errors.persons}
                onBlur={handleBlur('persons')}
                touched={touched.persons}
              />
              <Input
                iType="datetime-local"
                value={values.date}
                onChange={handleChange('date')}
                error={errors.date}
                onBlur={handleBlur('date')}
                touched={touched.date}
              />
            </div>
            <button type="submit" className="btn-primary mt-4">
            BOOK NOW
          </button>
          </form>
          
        </div>
        <div className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
