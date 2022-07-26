import { useEffect } from "react";
import "./HeroSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Tilt from "react-vanilla-tilt";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  subHeadline,
  description,
  formLabel,
  listDesc,
  subPhotos,
  img,
  alt,
  imgClass,
  imgStart,
  emImg,
  imgEmbed,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className={topLine ? "top-line" : "none"}>{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <h4 className={lightText ? "sub-heading" : "sub-heading dark"}>
                  {subHeadline}
                </h4>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <ul className={lightText ? "list" : "list dark"}>
                  {listDesc &&
                    listDesc.map((listItem, index) => (
                      <li key={index} data-aos="fade-right">
                        {listItem}
                      </li>
                    ))}
                </ul>
                <div className="home__sub-photo">
                  {subPhotos &&
                    subPhotos.map((pic) => <img src={pic.src} alt={pic.alt} />)}
                </div>
                {formLabel && (
                  <div className="form-container">
                    <form>
                      <input type="text" placeholder="Enter email address" />
                      <input
                        type="submit"
                        className="blue"
                        value="Get early access"
                      />
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
                <div className="home__img-embed-container">
                  {imgEmbed ? (
                    <>
                      <Tilt id="card" options={{ scale: 2 }}>
                        <img src={emImg} alt="img-embed" className={imgClass} />
                      </Tilt>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
