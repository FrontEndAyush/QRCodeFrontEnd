function App() {
  return (
    <>
      <div className="main w-full h-screen  flex items-center justify-center">
        {/* div for making items center vertically and horizontally */}
        <div className="sec-main w-[700px] h-[500px] bg-white rounded-3xl flex justify-evenly">
          {/* first for text  */}
          <div>
            <div>
              <h1 className="text-4xl mb-5 mt-14 ml-16 font-bold">
                Stay updated!
              </h1>
              <p className="  ml-10">
                Join 60,000+ product managers receiving monthly updates on:{" "}
              </p>
              <img
                src="/images/tick.svg"
                className="relative top-6 ml-4"
                alt=""
              />{" "}
              <p className="ml-11">
                {" "}
                Product discovery and building what matters
              </p>
              <img
                src="/images/tick.svg"
                className="relative top-6 ml-4"
                alt=""
              />{" "}
              <p className="ml-11">
                {" "}
                Measuring to ensure updates are a successl
              </p>
              <img
                src="/images/tick.svg"
                className="relative top-6 ml-4"
                alt=""
              />{" "}
              <p className="ml-11">And much more!</p>
            </div>

            {/* div for form ----> starts  */}
            <div>
              <form>
                <label htmlFor="email">Email address</label>
                <br />
                <input type="email" name="" id="email" />
                <br />
                <button type="submit">Subscrbe to monthly newsletter</button>
              </form>
            </div>
            {/* div for form ----> ends  */}
          </div>

          {/* second div for img  */}
          <div className="px-5 py-4">
            <img src="/images/illustration.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
