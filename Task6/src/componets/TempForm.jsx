 import { ErrorMessage, Field, Form, Formik } from 'formik';
 import * as Yup from "yup";

 const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function TempForm() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold'>Signup Up</h1>
      <Formik
        initialValues={{email:"",password:""}}
        validationSchema={LoginSchema}
        onSubmit={(input)=>{
            console.log(input);
        }}
      >

      <Form  className='border rounded-2xl w-[20%] p-3 flex flex-col justify-center items-start gap-1 bg-blue-200'>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" placeholder="Email" className="w-full" />
         <ErrorMessage name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" placeholder="Password" className="w-full" />
        <ErrorMessage name="password" />
        <br />
        <button type="submit" className='bg-black text-white rounded-full p-2'>Submit</button>
      </Form>

    </Formik>
    </div>
  )
}
