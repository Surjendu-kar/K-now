import Link from "next/link";
import React from "react";

const choose_data = {
  bg_img: "/assets/img/bg/choose-img.jpg",
  experiences_years: "25",
  title: "Vision & Mission",
  sub_title: (
    <>
      Empowering Futures Through
      <br />
      Quality Education
    </>
  ),
  vision:
    "To be a premier institution that transforms students into leaders who shape tomorrow through excellence in education, innovation, and character.",
  mission: "Our institution is committed to:",
  mission_list: [
    {
      title:
        "Excellence in Academic Standards through innovative teaching and research",
    },
    {
      title:
        "Holistic Student Development focusing on character, creativity, and critical thinking",
    },
    {
      title:
        "Creating a supportive learning environment that nurtures growth and innovation",
    },
  ],
};

const {
  bg_img,
  experiences_years,
  title,
  sub_title,
  vision,
  mission,
  mission_list,
} = choose_data;

const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 ml-25">
                <div className="image-container choose-image-container">
                  <img
                    src={bg_img}
                    alt="choose-img"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 80%)",
                    }}
                  />
                </div>
                <div className="tpchoose-img-text d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p>Years Experiences</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>CBSE Affiliated</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title mb-25">{title}</span>
                  <h2 className="tp-section-title mb-20">{sub_title}</h2>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                    }}
                  >
                    {/* Vision Section */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 className="vision-title">Vision</h4>
                      <p>{vision}</p>
                    </div>

                    {/* Mission Section */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 className="mission-title">Mission</h4>
                      <p>{mission}</p>
                    </div>
                  </div>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul>
                    {mission_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .choose-image-container {
          position: relative;
        }

        @media (min-width: 992px) {
          .choose-image-container {
            height: 750px;
            width: 550px;
          }
        }

        .vision-title,
        .mission-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #232323;
        }
      `}</style>
    </>
  );
};

export default ChooseArea;
