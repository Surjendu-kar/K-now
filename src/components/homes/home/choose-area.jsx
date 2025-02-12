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
  des: "Our institution is committed to fostering academic excellence, innovation, and character development in a supportive learning environment.",

  choose_list: [
    { title: "Excellence in Academic Standards" },
    { title: "Holistic Student Development" },
    { title: "Innovation in Teaching Methods" },
  ],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
  choose_data;
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
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    height: "750px",
                    width: "550px",
                  }}
                >
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
                      <p>NAAC Accredited</p>
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
                  <p>{des}</p>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul>
                    {choose_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
