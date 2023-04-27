const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="text-right">
          <p className="text-xl font-semibold">
            &copy; {currentYear} Long Lake Musical Festival
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
