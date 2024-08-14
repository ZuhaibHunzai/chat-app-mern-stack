import { useFormik } from "formik";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Login() {
  const auth = useAuth();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: true,
  };

  const { handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const promiseSignin = new Promise((resolve, reject) => {
        auth.login(
          { ...values },
          // error callback
          () => {
            reject("Email or Password is invalid");
          },
          // success callback
          () => {
            resolve("");
          }
        );
      });

      toast.promise(promiseSignin, {
        loading: "Authenticating...",
        success: "Signed in successfully",
        error: (err) => err,
      });
    },
  });
  return (
    <section>
      <form className="mt-28 w-full max-w-md m-auto" onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Login</h2>
          <div className="mb-4">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                name="rememberMe"
                type="checkbox"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label className="ml-2 cursor-pointer">Remember Me</label>
            </div>
            <div className="text-right">
              <Link to="/" className="text-blue-500 underline">
                Forget Password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 block text-white py-2 px-4 rounded-md w-full mt-4 h-10"
          >
            Login
          </button>
          <p className="text-center p-2">or</p>
          <Link
            to="/register"
            className="text-center block bg-gray-800 text-white py-2 px-4 rounded-md w-full"
          >
            REGISTER
          </Link>
        </div>
      </form>
    </section>
  );
}
