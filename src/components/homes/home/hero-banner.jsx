import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <section className="banner-area fix p-relative">
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(/assets/img/banner/banner-01.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="hero-content">
                  <span>CBSE Affiliated School</span>
                  <h2 className="hero-title mb-35">
                    Education That Shapes <i>Future</i>.
                  </h2>
                  <p>
                    Experience quality education with our holistic curriculum,
                    modern facilities, and experienced teachers dedicated to
                    bringing out the best in every student.
                  </p>
                  <div className="tp-banner-btn">
                    <Link href="/co-curricular-activities" className="tp-btn">
                      Explore Programs
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-info d-none">
                  <ul>
                    <li>
                      <span>500K</span>Active Learners
                    </li>
                    <li>
                      <span>4.2K</span>Premium Courses
                    </li>
                    <li>
                      <span>
                        4.9<i className="fi fi-rr-star "></i>
                      </span>
                      Student Success Rate
                    </li>
                  </ul>
                </div>
              </div>
              <div className="banner-shape d-none d-lg-block">
                <img
                  src="/assets/img/banner/human-3.png"
                  alt="banner-shape"
                  className="b-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
