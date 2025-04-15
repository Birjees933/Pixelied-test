const Spinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-10 max-md:py-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
    </div>
  );
};

export default Spinner;
