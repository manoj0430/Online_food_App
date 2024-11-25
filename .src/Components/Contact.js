const Contact = () => {
  return (
    <div className="w-1/2 mx-auto my-6 p-4">
      <h1 className="text-center font-bold text-xl m-4"> Contact US</h1>
      <div className="flex flex-col text-center border border-gray-300 h-[300px] pt-12 shadow-xl rounded-lg">
        <label>Enter Your Name</label>
        <input
          className="border border-black w-1/3 rounded-lg p-1 mx-auto my-2 shadow-lg"
          type="text"
          placeholder="Name"
        />
        <label>Enter Your Email</label>
        <input
          className="border border-black w-1/3 rounded-lg p-1 mx-auto my-2 shadow-lg"
          type="email"
          placeholder="Email"
        />
        <button className="border border-black rounded-lg bg-gray-500 w-32 mx-auto my-2 shadow-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
