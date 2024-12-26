"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

const ContactInfo = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state for the form submission
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state when form is being submitted

    emailjs
      .sendForm(
        "service_qo1r6jo",
        "template_0h2ytja",
        form.current,
        "pbLzIm3Ta3Mtb_nbp"
      )
      .then(
        (result) => {
          setIsLoading(false); // Set loading state to false when the email is sent
          if (result) {
            toast.success("Email sent successfully!");
            form.current.reset(); // Reset the form fields after successful submission
          }
        },
        (error) => {
          setIsLoading(false); // Set loading state to false if there was an error
          console.log(error.text);
          toast.error("Error sending email.");
        }
      );
  };

  return (
    <div className="min-h-[60vh]">
      <div className="style max-w-7xl mx-auto">
        <div className="pt-20 md:h-[100vh] items-center">
          <h1 className="text-4xl text-center font-bold py-12">
            Contact Information
          </h1>
          <div className="grid md:grid-cols-2 gap-4  max-w-3xl mx-auto">
            {/* Address Section */}
            <div className="bg-default-100 shadow-lg rounded-md p-5 flex items-center gap-5">
              <div className="btn rounded-full text-xl">
                <FaLocationDot />
              </div>
              <div>
                <h2 className="text-xl font-bold">My Address</h2>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social Profiles Section */}
            <div className="p-5 flex items-center gap-5 bg-default-100 shadow-lg rounded-md">
              <div className="btn rounded-full text-xl">
                <IoShareSocialOutline />
              </div>
              <div>
                <h2 className="text-xl font-bold">Social Profiles</h2>
                <div className="flex items-center gap-1">
                  <a
                    href="https://www.linkedin.com/in/anamul-haque-772264299/"
                    target="blank"
                    rel="noopener noreferrer"
                    className="btn glass rounded-full btn-sm text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Anamul9901"
                    target="blank"
                    rel="noopener noreferrer"
                    className="btn glass rounded-full btn-sm text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.facebook.com/Anamul114"
                    target="blank"
                    rel="noopener noreferrer"
                    className="btn glass rounded-full btn-sm text-white"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-default-100 shadow-lg rounded-md p-5 flex items-center gap-5">
              <div className="btn rounded-full text-xl">
                <MdOutlineMail />
              </div>
              <div>
                <h2 className="text-xl font-bold">Email Me</h2>
                <p>anamulhaque9901@gmail.com</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="bg-default-100 shadow-lg rounded-md p-5 flex items-center gap-5">
              <div className="btn rounded-full text-xl">
                <IoMdCall />
              </div>
              <div>
                <h2 className="text-xl font-bold">Call Me</h2>
                <p>+8809696668089</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pt-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-lg mx-auto bg-default-100 p-6 rounded-lg shadow-lg "
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                Email Me
              </h2>

              <div className="flex justify-center items-center">
                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input border input-bordered w-full md:w-96 py-3 px-4 rounded-md "
                      name="from_name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input border input-bordered w-full md:w-96 py-3 px-4 rounded-md "
                      name="from_email"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="input border input-bordered w-full md:w-96 py-3 px-4 rounded-md  h-32"
                      name="message"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <input
                      className="btn btn-primary bg-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-800 transition-colors"
                      type="submit"
                      value={isLoading ? "Sending..." : "Send Message"} // Display loading text while submitting
                      disabled={isLoading} // Disable the submit button when loading
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;