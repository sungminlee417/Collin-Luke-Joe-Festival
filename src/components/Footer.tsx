const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-6">
        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-6">
          <div className="text-xs">
            <p className="text-gray-500">
              &copy; {currentYear} Off The Dock Chamber Festival
            </p>
          </div>
          <a
            className="flex gap-1 items-center text-xs text-gray-700 transition hover:opacity-75"
            href="https://instagram.com/offthedockchamber?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
            <p>Follow us on Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
