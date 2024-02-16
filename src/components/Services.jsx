import React, { useRef, useEffect } from "react";

function Services() {
  const textStyle = {
    fontFamily: "Bebas Neue, sans-serif",
  };
  const fadeIns = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      fadeIns.current.forEach((fadeIn) => {
        const fadeInPosition = fadeIn.offsetTop;

        if (scrollPosition > fadeInPosition - windowHeight / 1) {
          fadeIn.classList.add("active");
        } else {
          fadeIn.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col p-2 my-4 justify-center items-center gap-8 overflow-hidden">
      <div>
        <h1 className="text-2xl font-semibold lg:text-3xl text-mainColor">
          Our services
        </h1>
      </div>
      <div
        className="fade-in flex flex-wrap p-4 border-2 rounded-lg gap-2"
        ref={(el) => (fadeIns.current[0] = el)}
      >
        <div className="flex flex-col">
          <h2
            className="text-2xl font-bold text-[#414141] tracking-wide"
            style={textStyle}
          >
            BRANDING & GRAPHICS
          </h2>
          <h4 className="text-lg font-normal" style={textStyle}>
            Brand Identity | Branding | LogoDesign | Stationery Design |
            PrintDesign | Packaging Design
          </h4>
          <p>
            In the 21st century, brands are abundant and diverse. We create
            custom brand identities, logos, and designs to match each brand's
            unique character and target audience, whether they offer products or
            services.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-64 flex-1 rounded-lg"
        />
      </div>
      {/* <div
        className="page3-card card-2 fade-in"
        ref={(el) => (fadeIns.current[1] = el)}
      >
        <div className="page3-text">
          <h2>Connect with your community</h2>
          <p>
            Lewach helps with you connect with your local community by
            exchanging items with people nearby. Support small businesses and
            meet new people without leaving the comfort of your own home
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div
        className="page3-card card-3 fade-in"
        ref={(el) => (fadeIns.current[2] = el)}
      >
        <div className="page3-text">
          <h2>REDUCE WASTE</h2>
          <p>
            By exchanging items with others, you can reduce waste and help the
            environment. Lewach encourages sustainability and supports the
            sharing economy.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div
        className="page3-card card-4 fade-in"
        ref={(el) => (fadeIns.current[3] = el)}
      >
        <div className="page3-text">
          <h2>Convenient delivery service</h2>
          <p>
            Our delivery service makes it easy to exchange items with others in
            your community. You can arrange for pick-up and delivery of items,
            saving you time and hassle.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div
        className="page3-card card-5 fade-in"
        ref={(el) => (fadeIns.current[4] = el)}
      >
        <div className="page3-text">
          <h2>increase variety in your life</h2>
          <p>
            Find new items to enjoy and explore through item exchange, including
            unique and interesting pieces that might not have otherwise
            discovered.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div> */}
    </div>
  );
}

export default Services;
