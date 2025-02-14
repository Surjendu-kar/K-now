import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import { staffMembers } from "@/src/data/staff_data.json";
import Link from "next/link";
import ChooseArea from "../homes/home/choose-area";

const About = () => {
  const topStaff = staffMembers.slice(0, 3);

  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" isDbbl="Pages" />
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {/* Sidebar content */}
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src="/assets/img/about/school-img-1.jpg"
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content">
                    <h4
                      className="side-instructor-title mb-15"
                      style={{ textTransform: "uppercase" }}
                    >
                      Abc school
                    </h4>
                    <p>
                      Empowering young minds through quality education since
                      1960. A leading institution committed to academic
                      excellence and holistic development.
                    </p>
                  </div>
                </div>
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src="/assets/img/about/school-img-2.jpg"
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content">
                    <h5 className="side-instructor-title mb-15">Quick Facts</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong>Founded:</strong> 1960
                      </li>
                      <li className="mb-2">
                        <strong>Campus:</strong> 10 Acres
                      </li>
                      <li className="mb-2">
                        <strong>Student Body:</strong> 1,900+
                      </li>
                      <li className="mb-2">
                        <strong>Faculty:</strong> 150+ Qualified Teachers
                      </li>
                      <li className="mb-2">
                        <strong>Class Size:</strong> Maximum 30 Students
                      </li>
                      <li className="mb-2">
                        <strong>Programs:</strong> ICSE, ISC, IGCSE, IBDP
                      </li>
                    </ul>

                    <h5 className="side-instructor-title mb-15 mt-4">
                      Contact Info
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-phone-alt me-2"></i> +91 XXX XXX
                        XXXX
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-envelope me-2"></i>{" "}
                        info@abcschool.edu
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-map-marker-alt me-2"></i> 123
                        Education Street, City - 110001
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* History */}
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">History</h4>
                  <p>
                    Founded in 1960 by visionary educators, our institution
                    stands as a testament to educational excellence and
                    innovation. From our humble beginnings as a small
                    establishment, we have grown into one of the region's most
                    respected educational institutions, housed in a prestigious
                    heritage building that combines historical charm with modern
                    facilities.
                  </p>
                  <p>
                    Today, our school functions across five integrated sections
                    - Pre-Primary, Infant, Junior, Middle, and Senior Schools -
                    serving a diverse student body of over 1,900 students. Our
                    curriculum seamlessly blends academic rigor with character
                    development, offering both national and international
                    curricula including ICSE, ISC, IGCSE, and IBDP programs.
                  </p>
                  <p>
                    What sets us apart is our commitment to holistic
                    development. Beyond academics, we foster leadership through
                    various clubs and activities, from Model United Nations to
                    Astronomy Club, while our international programs provide
                    global exposure through partnerships with institutions
                    worldwide.
                  </p>
                </div>

                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">School Working Hours</h4>

                  <div className="working-hours-info">
                    <h5 className="mb-3">School Hours</h5>
                    <p>7:55 a.m. to 1:50 p.m.</p>

                    <h5 className="mb-3 mt-4">Office Hours</h5>
                    <ul className="list-unstyled">
                      <li>• 8:00 a.m. to 1:50 p.m.</li>
                      <li>• 2:15 p.m. to 3:00 p.m.</li>
                    </ul>

                    <h5 className="mb-3 mt-4">During Vacations</h5>
                    <ul className="list-unstyled">
                      <li>• Summer: 7:30 a.m. to 12:30 p.m.</li>
                      <li>• Winter: 8:00 a.m. to 1:00 p.m.</li>
                    </ul>

                    <h5 className="mb-3 mt-4">
                      Meeting Hours with Administrators
                    </h5>
                    <ul className="list-unstyled">
                      <li>• Principal & Headmaster: 9:00 a.m. to 10:00 a.m.</li>
                      <li>
                        • Director of Prep. School: 8:15 a.m. to 8:45 a.m.
                      </li>
                    </ul>

                    <h5 className="mb-3 mt-4">Important Notes</h5>
                    <ul className="list-unstyled">
                      <li>
                        • Offices will remain closed on gazetted holidays and
                        other public holidays
                      </li>
                      <li>• On Saturdays, offices are open till 12:30 p.m.</li>
                      <li>
                        • No school business will be transacted on holidays
                      </li>
                    </ul>

                    <h5 className="mb-3 mt-4">Correspondence</h5>
                    <p>
                      Address your correspondence regarding study, leave,
                      discipline etc. of your ward (Quote full name, Class and
                      Section) to:
                    </p>
                    <ul className="list-unstyled">
                      <li>• The Principal (for classes VIII to XII)</li>
                      <li>• The Headmaster (for classes II to VII)</li>
                      <li>
                        • The Director of Prep. School (for classes Prep & I)
                      </li>
                    </ul>

                    <h5 className="mb-3 mt-4">Banking Hours</h5>
                    <p>
                      10:00 a.m. to 4:00 p.m. Weekdays and Saturday (2nd and 4th
                      Saturdays are bank holidays)
                    </p>
                    <p>
                      Fees must be paid to the Canara Bank branch at ABC School,
                      Delhi. (Phone: 011-49098988)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <ChooseArea />

      {/* staff */}
      <section className="instructor-area pb-110">
        <div className="container">
          <div className="section__title-wrap mb-55">
            <div className="row align-items-center gap-4 gap-md-0">
              <div className="col-md-8">
                <div className="section__title text-center text-md-start">
                  <span className="sub-title">Our Staff</span>
                  <h2 className="title tg-svg">
                    Meet Our{" "}
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="svg-8"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      Teachers
                    </span>
                  </h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tp-about-btn-3 justify-content-center justify-content-md-end d-flex">
                  <Link href="/staff-details" className="tp-btn">
                    View All Staff
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {topStaff.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div
                  className="tp-instruc-item wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
                  <div className="tp-instructor text-center p-relative mb-40">
                    <div className="tp-instructor__thumb mb-25">
                      <img src={item.image} alt="instructor-profile" />
                    </div>
                    <div className="tp-instructor__content">
                      <span>{item.designation}</span>
                      <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-35 mt-5">
                        <Link href={`/staff/${item.id}`}>{item.name}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
