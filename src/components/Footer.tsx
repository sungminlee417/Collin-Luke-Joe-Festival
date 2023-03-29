const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section>
      <div className="p-10 text-right">
        <div className="text-2xl">&copy; {year} Long Lake Musical Festival</div>
      </div>
    </section>
  );
};

export default Footer;
