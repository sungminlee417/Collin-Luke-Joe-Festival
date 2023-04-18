// installed `npm i react-mailchimp-subscribe`
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { useState } from "react";
import backgroundImage from "../images/newsletter_photo.jpg";

const Newsletter = () => {
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     email &&
  //     firstName &&
  //     lastName &&
  //     email.indexOf("@") > -1 &&
  //     onValidated({
  //         EMAIL: email,
  //         MERGE1: firstName,
  //         MERGE2: lastName,
  //     });
  // }
  // useEffect(() => {
  //     if(status === "success") clearFields();
  // }, [status])
  // const clearFields = () => {
  //     setFirstName('');
  //     setLastName('');
  //     setEmail('');
  // };
  return (
    <section
      className="newsletter-section h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full flex text-white bg-[#284b63] md:m-28 md:absolute md:h-208 lg:h-208 lg:w-208 justify-center md:p-20 p-12 md:bg-opacity-95 bg-opacity-60">
        <div className="opacity-100 text-6xl font-playfair lg:text-start text-center">
          Join Our Newsletter!
          <div className="mc__form-container">
            <form>
              {/* <h3 className="mc__title">
                  {status === "success"
                    ? "Success!"
                    : "Join our email list for future updates."}
                </h3>

                {status === "sending" && (
                  <div className="mc__alert mc__alert--sending">sending...</div>
                )}
                {status === "error" && (
                  <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}

                {status !== "success" ? (
                  <div className="mc__field-container">
                    <input
                      label="First Name"
                      onChangeHandler={setFirstName}
                      type="text"
                      value={firstName}
                      placeholder="Jane"
                      isRequired
                    />

                    <input
                      label="Last Name"
                      onChangeHandler={setLastName}
                      type="text"
                      value={lastName}
                      placeholder="Doe"
                      isRequired
                    />

                    <input
                      label="Email"
                      onChangeHandler={setEmail}
                      type="email"
                      value={email}
                      placeholder="your@email.com"
                      isRequired
                    />
                  </div>
                ) : null} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// const MailchimpForm = () => {
//     const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
//     return (

//         <div className="mc__form-container">
//             <MailchimpSubscribe
//                 url={url}
//                 render={({ subscribe, status, message }) => (
//                     <Newsletter
//                         status={status}
//                         message={message}
//                         onValidated={formData => subscribe(formData)}
//                     />
//                 )}
//             />
//         </div>

//     )
// }

export default Newsletter;
