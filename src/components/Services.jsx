import design from "../images/design.png";
import marketingStrategy from "../images/marketingStrategy.png";
import contentMarketing from "../images/contentMarketing.png";
import motionGraphics from "../images/motionGraphics.png";
import photography from "../images/photography.png";
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
        <div className="flex flex-col gap-2">
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
        <img src={design} className="w-64 flex-1 rounded-lg" />
      </div>
      <div
        className="fade-inn flex flex-wrap p-4 border-2 rounded-lg gap-2"
        ref={(el) => (fadeIns.current[1] = el)}
      >
        <div className="flex flex-col gap-2">
          <h2
            className="text-2xl font-bold text-[#414141] tracking-wide"
            style={textStyle}
          >
            MARKETING STRATEGY
          </h2>
          <h4 className="text-lg font-normal" style={textStyle}>
            Marketing Planning | Marketing Management Brand Strategy | Market
            Research| Communications and Public Relation
          </h4>
          <p>
            Success hinges on a strong marketing strategy, especially in today's
            dynamic digital landscape. At Dagoo, we ease the burden by
            seamlessly integrating tailored digital marketing strategies into
            our services, aligning with your business goals and budget.
          </p>
        </div>
        <img src={marketingStrategy} className="w-64 flex-1 rounded-lg" />
      </div>
      <div
        className="fade-in flex flex-wrap p-4 border-2 rounded-lg gap-2"
        ref={(el) => (fadeIns.current[2] = el)}
      >
        <div className="flex flex-col gap-2">
          <h2
            className="text-2xl font-bold text-[#414141] tracking-wide"
            style={textStyle}
          >
            CONTENT MARKETING
          </h2>
          <p>
            We specialize in content marketing that captivates audiences,
            leveraging emotions and experiences to attract and convert
            prospects. Our expert team crafts compelling copy that seamlessly
            integrates with your content strategy, ensuring it resonates with
            your target audience.
          </p>
        </div>
        <img src={contentMarketing} className="w-64 flex-1 rounded-lg" />
      </div>
      <div
        className="fade-inn flex flex-wrap p-4 border-2 rounded-lg gap-2"
        ref={(el) => (fadeIns.current[3] = el)}
      >
        <div className="flex flex-col gap-2">
          <h2
            className="text-2xl font-bold text-[#414141] tracking-wide"
            style={textStyle}
          >
            MOTION GRAPHICS
          </h2>
          <p>
            For brands with extensive information to convey, animated videos are
            the ideal medium. Our comprehensive video production services
            effectively showcase your myriad services, brand features, and
            intricate details, ensuring your unique selling points resonate with
            the audience.
          </p>
        </div>
        <img src={motionGraphics} className="w-64 flex-1 rounded-lg" />
      </div>
      <div
        className="fade-in flex flex-wrap p-4 border-2 rounded-lg gap-2"
        ref={(el) => (fadeIns.current[2] = el)}
      >
        <div className="flex flex-col gap-2">
          <h2
            className="text-2xl font-bold text-[#414141] tracking-wide"
            style={textStyle}
          >
            PHOTOGRAPHY
          </h2>
          <p>
            Photography isn't merely an image, it's the narrative it conveys."
            We go beyond logos, assisting clients in enhancing their brand
            identities with tailored photography that accentuates their
            competitive edge. Aligned with the overall corporate identity, our
            photography ensures a cohesive and compelling brand presence
          </p>
        </div>
        <img src={photography} className="w-64 flex-1 rounded-lg" />
      </div>
    </div>
  );
}

export default Services;
