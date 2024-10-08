const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center pt-60"
    >
      <h1 className="text-slate-300 underline text-4xl mb-5">Get In Touch</h1>
      <p className="text-slate-400 mb-6 mx-5 text-center">
        Connect with me over email.
      </p>
      <a
        className="border-solid border-2 border-green-200 text-green-200 text-center py-2 px-5 hover:bg-green-200 hover:bg-opacity-50 cursor-pointer transition-all duration-300 ease-in-out"
        href="mailto:jrv1295@gmail.com"
      >
        Contact
      </a>
    </div>
  );
};

export default Contact;
