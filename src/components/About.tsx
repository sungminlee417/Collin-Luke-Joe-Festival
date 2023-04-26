const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <p className="text-lg">
          At our organization, we are dedicated to promoting the arts and
          providing a platform for artists to showcase their work. We believe
          that the arts play a vital role in our society and have the power to
          inspire, challenge, and bring people together.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Staff/Founders</h2>

        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 lg:w-1/4 mb-8">
            <img
              src="joe-hagen.jpg"
              alt="Joe Hagen"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">Joe Hagen</h3>
            <p className="text-base">Executive Director</p>
          </div>

          <div className="w-1/2 lg:w-1/4 mb-8">
            <img
              src="natalie-pang.jpg"
              alt="Natalie Pang"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">Natalie Pang</h3>
            <p className="text-base">Co-Artistic Director</p>
          </div>

          <div className="w-1/2 lg:w-1/4 mb-8">
            <img
              src="collin-holloway.jpg"
              alt="Collin Holloway"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">Collin Holloway</h3>
            <p className="text-base">Co-Artistic Director</p>
          </div>

          <div className="w-1/2 lg:w-1/4 mb-8">
            <img
              src="luke-benedict.jpg"
              alt="Luke Benedict"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">Luke Benedict</h3>
            <p className="text-base">Co-Artistic Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
