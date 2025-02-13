import co_curricular_activities from "@/src/data/co_curricular_activities.json";
import Link from "next/link";
import React from "react";
import sameImg from "@/public/assets/img/blog/blog-big-1.jpg";

const CurricularActivityArea = () => {
  const activitiesData = Array.isArray(co_curricular_activities)
    ? co_curricular_activities
    : co_curricular_activities.coCurricularActivities || [];

  return (
    <>
      <section
        className="course-list-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title-box mb-15">
                  Curricular Activity
                </span>
                <h2 className="tp-section-title">
                  Explore Our Curricular Activities
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-lg-4 col-md-12 courser-list-width mb-60">
              <div className="course-sidebar">
                <div className="course-sidebar__widget mb-50">
                  <div className="course-sidebar__info c-info-list">
                    <h4 className="course-sidebar__title mb-35">
                      Sort Activities
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Sort by (default)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Name (A-Z)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked3"
                      >
                        Name (Z-A)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 course-item-width ml-30">
              {activitiesData.map((item, i) => (
                <div key={i} className="tpcourse tp-list-course mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 course-thumb-width">
                      <div className="tpcourse__thumb p-relative w-img fix">
                        {/* cuurently same image is used for all activities */}
                        <Link href="/course-details">
                          <img src={sameImg} alt="course-thumb" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8  course-text-width">
                      <div className="course-list-content">
                        <div className="tpcourse__category mb-10">
                          <ul className="tpcourse__price-list d-flex align-items-center">
                            <li>
                              <Link
                                // className={item.ct_color}
                                href="/course-details"
                              >
                                {item.category}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__ava-title mb-15">
                          <h4 className="tpcourse__title tp-cours-title-color">
                            <Link href="/course-details">
                              {item.activityName}
                            </Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            {/* coordinator */}
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>{item.coordinator}</span>
                            </li>
                            {/* duration */}
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>{item.duration}</span>
                            </li>
                            {/* max participants */}
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>{item.maxParticipants}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                          <div className="tpcourse__rating-icon">
                            <span>{item.date}</span>
                          </div>
                          <div className="tpcourse__pricing">
                            <h5 className="price-title">{item.venue}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* pagination */}
          <div className="basic-pagination text-center">
            <nav>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurricularActivityArea;
