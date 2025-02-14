import React from "react";
import notices from "@/src/data/notices.json";

function NoticeArea() {
  return (
    <section
      className="faq-area pb-120 pt-120 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="accordionExample">
              {notices.notices.map((item, i) => (
                <div key={i} className="accordion-items">
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>{item.description}</p>
                      {item.venue && (
                        <p>
                          <strong>Venue: </strong>
                          {item.venue}
                        </p>
                      )}
                      {item.coordinator && (
                        <p>
                          <strong>Coordinator: </strong>
                          {item.coordinator}
                        </p>
                      )}
                      {item.participants && (
                        <p>
                          <strong>For: </strong>
                          {item.participants}
                        </p>
                      )}
                      {item.date && (
                        <p>
                          <strong>Date: </strong>
                          {item.date}
                        </p>
                      )}
                      {item.link && (
                        <p>
                          <a href={item.link} className="text-primary">
                            View Details →
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeArea;
