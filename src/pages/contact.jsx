import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .required("Password is required"),
});

export default function SignupForm() {
  const serviceId = "service_0ka3h3m";
  const templateId = "template_ly3z5h5";
  const publicKey = "tK5UalH1AusEHleA4";

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Sign Up
        </h2>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const templateParams = {
              name: values.username,
              email: values.email,
              password: values.password,
              title: "Portfolio Signup Form",
            };

            emailjs
              .send(
                serviceId,
                templateId,
                templateParams,
                publicKey
              )
              .then((response) => {
                console.log(
                  "Success!",
                  response.status,
                  response.text
                );
                alert("Email sent successfully!");
              })
              .catch((err) => {
                console.error("Failed to send email:", err);
                alert("Failed to send email.");
              });

            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Username
                </label>

                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>

                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>

                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}