import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Adminlogin = () => {
  const [view, setView] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Minimum 3 characters"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 characters"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    alert("Login Successful");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-cyan-100 p-5 rounded-full">
            <FaLock className="text-4xl text-cyan-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Portfolio Management Portal
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-cyan-500">
                <FaUser className="text-gray-400 mr-3" />

                <Field
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="w-full outline-none"
                />
              </div>

              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-black font-medium mb-2">
                Password
              </label>

              <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-3 focus-within:border-cyan-500">
                <Field
                  type={view ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  className="w-full outline-none"
                />

                <button
                  type="button"
                  onClick={() => setView(!view)}
                  className="text-gray-500 ml-2"
                >
                  {view ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>

              <button
                type="button"
                className="text-cyan-500 hover:text-cyan-600"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
           <Link to = "/admindashboard">
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Sign In
            </button>
            </Link>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Adminlogin; 