const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section>
      <div className="md:p-10 p-4 text-right">
        <div className="md:text-2xl text-lg">
          &copy; {year} Long Lake Musical Festival
        </div>
      </div>
    </section>
  );
};

export default Footer;
