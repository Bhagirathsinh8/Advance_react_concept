import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),

  Yup.object({
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),

  Yup.object({
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      country: "",
      password: "",
    },
    validationSchema: validationSchemas[step],
    onSubmit: (values,formikHelpers) => {
      const { resetForm } = formikHelpers
      if (step < 2) {
        setStep(step + 1);
      } else {
        console.log("Final Submit", values);

        alert("Form Submitted! check Console...");
         resetForm();     // ✅ clear all fields
    setStep(0);  
      }
    },
  });

  return (
    <div>
      <div className="mx-auto w-full text-center my-5">
        <h1 className="font-bold text-2xl">MultiStep Form Using Formik:-</h1>
      </div>
      <div className="max-w-md mx-auto my-5 shadow-lg border border-gray-200 rounded">
        <form onSubmit={formik.handleSubmit} className="p-3 w-50% mx-auto rounded">
          <h3 className="text-center mb-4 font-bold">Step {step + 1}</h3>

          {/* STEP 1 */}
          {step === 0 && (
            <>
              <div className=" w-full h-full flex justify-between items-center my-2">
                <label htmlFor="name" className="font-bold">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1"
                  />
                  </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-center">{formik.errors.name}</p>
                )}
              <div className=" w-full h-full flex justify-between items-center my-2">
                <label htmlFor="email" className="font-bold">
                  Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                     className="w-[90%]  mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1"
                  />
                    </div>

                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-center">{formik.errors.email}</p>
                  )}
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <div className=" w-full h-full flex justify-between items-center my-2">
                <label htmlFor="city" className="font-bold">City:</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={formik.handleChange}
                value={formik.values.city}
                 className="w-[90%] ml-10 mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1"
                />
                </div>
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-center">{formik.errors.city}</p>
              )}

              <div className=" w-full h-full flex justify-between items-center my-2">
                <label htmlFor="country" className="font-bold">Country:</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={formik.handleChange}
                value={formik.values.country}
                 className="w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1"
                />
                </div>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-center">{formik.errors.country}</p>
              )}
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
            <div className=" w-full h-full flex justify-between items-center my-2">
              <label htmlFor="password" className="font-bold">Password:</label>

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                 className="w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1"
                />
                </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-center">{formik.errors.password}</p>
              )}
            </>
          )}

          {/* BUTTONS */}
          <div className="mt-5 flex justify-around items-center my-3">
            {step > 0 && (
              <button type="button"  className="bg-gray-400 text-black text-md rounded-xl w-25 h-10" onClick={() => setStep(step - 1)}>
                Back
              </button>
            )}
            <button type="submit" className="bg-blue-400 text-black text-md rounded-xl w-25 h-10">{step === 2 ? "Submit" : "Next"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
