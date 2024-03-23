const Loader = ({ className = "" }) => {
  return (
    <div className="flex justify-center">
      <img src="/loader.gif" alt="Loading" className="object-center" height={100} width={100} />
    </div>
  );
};

export default Loader;
