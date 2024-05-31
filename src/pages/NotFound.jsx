import NavBar from "../components/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-2 lg:mx-auto">
        <img
        className="h-[90vh] mx-auto"
          src="/images/error.jpg"
          alt="NOT FOUND"
        />
      </div>
    </>
  );
};

export default NotFound;
