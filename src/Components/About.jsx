import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.01"
      className="bg-[#ceeb67] w-full rounded-3xl -mt-4"
    >
      <div className="row-1 px-16 py-20 border-b-2 border-zinc-500">
        <h1 className="text-[3.8vw] leading-none">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>
      </div>
      <div className="row-2 px-16 py-5 flex justify-between text-xl font-sans  border-b-2 border-zinc-500 pb-24">
        <div className="w-1/2">What you can expect:</div>
        <div className="w-1/2 flex justify-around">
          <p className="w-[20vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
            <br />
            <br />
            <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
          <div className=" self-end">
            S: <br /> <br /> <u>Instagram</u> <br /> <u>Behance</u> <br />
            <u>Facebook</u> <br /> <u>Linkedin</u>
          </div>
        </div>
      </div>
      <div className="row-3 px-16 py-4 flex justify-between font-sans">
        <div className="text-zinc-800">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="uppercase flex gap-5 mt-10 items-center bg-zinc-900 px-5 py-4 rounded-full text-white text-base hover:bg-zinc-950">
            Read more
            <div className="h-2 w-2 bg-white rounded-full"> </div>
          </button>
        </div>
        <div>
          <img
            className="w-[50vw] rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
