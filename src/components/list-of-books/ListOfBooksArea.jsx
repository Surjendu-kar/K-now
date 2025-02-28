import React from "react";
import booksData from "@/src/data/listOfBooks_data.json";
const { listOfBooksData } = booksData;

function ListOfBooksArea() {
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
              {listOfBooksData.map((item, i) => (
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
                      <span>
                        {item.name} - {item.courses}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {item.mainSubjects.map((subject, index) => (
                        <div key={index} className="subject-block">
                          <p>
                            <strong>{subject.subject}: </strong>
                            {subject.books.join(", ")}
                          </p>
                        </div>
                      ))}
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

export default ListOfBooksArea;
