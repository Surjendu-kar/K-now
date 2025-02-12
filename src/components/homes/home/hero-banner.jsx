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
                  <span>Unlock Your Potential with Expert Training</span>
                  <h2 className="hero-title mb-35">
                    Education That Shapes <i>Future</i>.
                  </h2>
                  <p>
                    Transform your career with industry-leading courses designed
                    <br />
                    to empower professionals at every level.
                  </p>
                  <div className="tp-banner-btn">
                    <Link href="/course-list" className="tp-btn">
                      Browse Programs
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
