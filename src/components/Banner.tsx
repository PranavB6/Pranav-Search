const Banner: React.FC = () => {
  const name = "Bob";

  return (
    <>
      <div className="banner-text font-google font-medium">
        {name.split("").map((letter: string, index: number) => (
          <h1 key={index}>{letter}</h1>
        ))}
      </div>
    </>
  );
};

export default Banner;
