import { useState } from "react";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    window.location.href = `mailto:${"offthedockchamber@gmail.com"}?subject=${
      subject || ""
    }&body=${message || ""}`;
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-gray-800">
          Contact Us!
        </h1>

        <p className="mt-4 text-gray-500">
          For questions or additional information about the Off the Dock Chamber
          Festival, fill out the form below.
        </p>
      </div>

      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Subject
          </label>

          <div className="relative">
            <input
              type="subject"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <textarea
              rows={8}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm resize-none"
              placeholder="Enter message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div></div>
          <button
            type="submit"
            className="inline-block rounded-lg px-5 py-3 text-sm font-medium text-white bg-[#579BB1] hover:bg-[#4e8b9f] active:bg-[#75AFC1]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
