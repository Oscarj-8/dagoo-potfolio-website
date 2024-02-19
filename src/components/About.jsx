import Vector from "../images/Vector.png";
import design from "../images/design.png";

function About() {
  const textStyle = {
    fontFamily: "Bebas Neue, sans-serif",
  };
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover -mt-[5em] flex items-center justify-center"
      style={{ backgroundImage: `url(${Vector}` }}
    >
      <marquee
        className="absolute top-[6em] lg:top-[2em] xl:top-[5em] text-[3em] lg:text-[5em] font-bold z-0 text-white/15"
        scrollamount="5"
        direction="right"
      >
        Dagoo.inc
      </marquee>
      <div className="mt-[15em] flex flex-col p-4 gap-2 lg:flex-row xl:w-[70em] items-center max-w-[400px] lg:max-w-full text-white z-10">
        <div className="flex flex-col gap-4 xl lg:w-[60]">
          <h2 className="text-2xl font-bold tracking-wide xl:text-3xl border-b-4 w-fit border-secondaryColor font-rubik  2xl:text-2xl">
            Who We Are
          </h2>
          <h4
            className="text-2xl font-bold
           xl:text-2xl 2xl:text-3xl font-rubik"
          >
            Your Digital Future, Our Expertise: Digimax Delivers Excellence.
          </h4>
          <p className=" font-light">
            In the 21st century, brands are abundant and diverse. We create
            custom brand identities, logos, and designs to match each brand's
            unique character and target audience, whether they offer products or
            services.
          </p>
          <button className="reflect bg-gradient-to-r from-mainColor to-secondaryColor w-[9em] p-[10px] rounded-3xl drop-shadow-[0px_5px_2px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out hover:drop-shadow-none ">
            Contact us
          </button>
        </div>
        <img
          src={design}
          className="hidden lg:inline-block flex-1 rounded-lg border p-2 border-secondaryColor"
        />
      </div>
    </div>
  );
}
export default About;
