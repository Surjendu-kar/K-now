import React from "react";
import schoolCurriculumData from "@/src/data/school_curriculum.json";
const { schoolCurriculum } = schoolCurriculumData;
import Link from "next/link";

function SchoolCurriculumArea() {
  return (
    <>
      <section
        className="category-ractangle-area pb-90 pt-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            {schoolCurriculum.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="tp-cat-item tp-rec-item mb-35">
                  <div className="tp-category-icon mb-30">
                    <img src={item.icon} alt="category-img" />
                  </div>
                  <h4 className="tp-category-title tp-r-cat-title">
                    <Link href="/#">{item.name}</Link>
                  </h4>
                  <p>{item.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolCurriculumArea;
