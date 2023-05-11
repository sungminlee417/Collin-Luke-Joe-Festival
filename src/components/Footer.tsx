const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10 px-4 flex items-center justify-between">
        <a
          className="flex items-center o"
          href="https://instagram.com/offthedockchamber?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-2xl mr-2" />
          <p className="text-xl font-semibold hover:underline">
            Follow us on Instagram
          </p>
        </a>

        <div className="text-right">
          <p className="text-xl font-semibold">
            &copy; {currentYear} Off The Dock Chamber Festival
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
