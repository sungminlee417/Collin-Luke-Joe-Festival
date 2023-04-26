import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  subject: string;
  message: string;
}

const validationSchema = Yup.object({
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const initialValues: FormValues = { subject: "", message: "" };

  const handleSubmit = (values: FormValues, actions: any) => {
    const { subject, message } = values;
    window.location.href = `mailto:${"offthedockchamber@gmail.com"}?subject=${
      subject || ""
    }&body=${message || ""}`;
    actions.setSubmitting(false);
  };

  return (
    <div className="contact-section flex flex-col md:m-20 m-12 md:gap-10 gap-16 items-center">
      <h3 className="md:text-7xl text-6xl font-thin tracking-wide text-center">
        Contact Us
      </h3>
      <h4 className="italic text-xl text-center">
        For questions or additional information about the Off the Dock Chamber
        Festival, fill out the form below
      </h4>
      <div className="w-full md:w-2/3 mt-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6 text-[#353535] text-lg">
              <Field
                id="subject"
                name="subject"
                placeholder="Subject"
                className="p-4 rounded-md border outline-none text-lg"
              />
              <ErrorMessage name="subject" className="text-red-500" />

              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                className="p-4 rounded-md border outline-none resize-none h-80 text-lg"
              />
              <ErrorMessage name="message" className="text-red-500" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#A0937D] hover:bg-[#988a72] text-white p-6 tracking-wide rounded-md"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
