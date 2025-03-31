const AuthImagePattern = ({ image, title, subtitle }) => {
    return (
      <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12 text-center">
        <div className="flex flex-col items-center justify-center mb-6 w-full">
          {image}
        </div>
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  