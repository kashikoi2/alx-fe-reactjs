import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">User Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          alert("Registration successful!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="block mb-1">Username</label>
              <Field name="username" className="w-full border p-2 rounded" />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
