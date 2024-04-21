function App() {
  return (
    <>
      {/* starting qr code  */}
      <div className="mainqr h-screen flex  mx-auto items-center  ">
        <div className="qr w-[320px] bg-white rounded-xl h-[497px] border m-auto px-4 py-4">
          <div className="w-[288px] rounded-xl flex h-[288px] bg-[#3685FF] mx-auto">
            <img src="qr.png" className="w-[200px] m-auto " alt="" />
          </div>
          <h1 className="text-center text-xl font-bold mt-3">
            Improve your front-end skills by building projects
          </h1>
          <p
            className="text-center
          mt-4 text-grey-100"
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
