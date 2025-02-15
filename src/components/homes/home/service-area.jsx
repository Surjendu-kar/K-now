import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-graduation-cap",
    title: "Academic Excellence",
    des: "Quality education with dedicated teachers and comprehensive curriculum aligned with national standards.",
  },
  {
    id: 2,
    icon: "fi fi-rr-document",
    title: "Learning Resources",
    des: "Well-equipped classrooms, science labs, and computer facilities to support hands-on learning.",
  },
  {
    id: 3,
    icon: "fi fi-rr-backpack",
    title: "Student Activities",
    des: "Rich variety of extracurricular activities including sports, arts, music, and cultural programs.",
  },
  {
    id: 4,
    icon: "fi fi-rr-users",
    title: "Student Support",
    des: "Dedicated counseling services, academic guidance, and personal development programs.",
  },
];

const ServicesArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">Our Services</span>
                <h2 className="tp-section-title">Empowering Excellence</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row g-4">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
