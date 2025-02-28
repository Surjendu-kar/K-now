import React, { useState } from "react";
import holidayData from "@/src/data/holidays_data.json";
const { holidaysData } = holidayData;

function HolidaysListArea() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <section
      className="faq-area pb-90 pt-90 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-items">
                <h2 className="accordion-header" id="headingYear">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseYear"
                    aria-expanded="false"
                    aria-controls="collapseYear"
                    onClick={() => handleToggle("2024-25")}
                  >
                    Academic Year 2024-25
                  </button>
                </h2>
                <div
                  id="collapseYear"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingYear"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="list-wrap">
                      {holidaysData.map((item, index) => (
                        <li className="course-item" key={index}>
                          <div className="course-item-link">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="item-name">
                                <strong style={{ marginRight: "5px" }}>
                                  {item.date} ({item.day}):
                                </strong>
                                {item.holiday}
                              </span>
                              <span
                                className={`badge ${
                                  item.category === "Holiday"
                                    ? "bg-danger"
                                    : item.category === "Event"
                                    ? "bg-primary"
                                    : "bg-success"
                                }`}
                              >
                                {item.category}
                              </span>
                            </div>
                            {item.note && (
                              <small className="text-muted d-block mt-1">
                                Note: {item.note}
                              </small>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HolidaysListArea;
