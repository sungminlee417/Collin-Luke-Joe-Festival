const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 flex items-center justify-between">
        <a
          className="flex items-center"
          href="https://instagram.com/offthedockchamber?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-sm mr-2" />
          <p className="text-sm font-semibold hover:underline">
            Follow us on Instagram
          </p>
        </a>

        <div className="text-right">
          <p className="text-sm font-semibold">
            &copy; {currentYear} Off The Dock Chamber Festival
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
