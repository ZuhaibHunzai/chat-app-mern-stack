import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

function Register(props) {
  const auth = useAuth();

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const { handleChange, handleSubmit, handleBlur, values } = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: async (values) => {
      console.log(values, "form values");
      const promiseSignup = new Promise((resolve, reject) => {
        // Create a new object with the dateOfBirthString
        const formData = {
          ...values,
        };
        auth.signup(
          { ...formData },
          // error callback
          (reply) => {
            console.log({ reply });

            if (
              reply.response?.status === 400 ||
              reply.response?.status === 409
            ) {
              const message =
                reply.response?.data?.error ||
                reply.message ||
                "Something went wrong";
              return reject(message);
            }
          },
          // success callback
          () => {
            resolve("Registered account successfully");
          }
        );
      });

      toast.promise(promiseSignup, {
        loading: "Registering new account",
        success: (response) => response,
        error: (err) => err,
      });
    },
  });

  return (
    <div className="overflow-hidden w-full">
      <section className="py-16">
        <form
          className="mt-5 max-w-md mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 bg-white shadow-md rounded p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Register</h2>
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <input
              placeholder="username"
              name="username"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
            />
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            <div className="w-full mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md w-full h-10"
              >
                Register
              </button>
            </div>
            <div className="w-full flex justify-center items-center text-center mt-4">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login" className="text-blue-400">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
