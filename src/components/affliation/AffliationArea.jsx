import React, { useState } from "react";
import { affiliationData } from "@/src/data/affiliation.json";

function AffiliationArea() {
  const headerItems = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
  ];

  const expandedFields = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
    { key: "validity", label: "Validity" },
    { key: "status", label: "Status" },
    { key: "location", label: "Location" },
  ];

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
              {affiliationData.map((item, i) => (
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
                      <div className="d-flex justify-content-between w-100">
                        {headerItems.map((header, index) => (
                          <span key={index} className="header-item">
                            {item[header.key]}
                          </span>
                        ))}
                      </div>
                    </button>
                  </h2>

                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {expandedFields.map((field, index) => (
                        <p key={index}>
                          <strong>{field.label}: </strong>
                          {field.key === "status" ? (
                            <span
                              className={`badge ${
                                item[field.key] === "Active"
                                  ? "bg-success"
                                  : "bg-warning"
                              }`}
                            >
                              {item[field.key]}
                            </span>
                          ) : (
                            item[field.key]
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-item {
          flex: 1;
          padding: 0 10px;
        }

        .badge {
          padding: 5px 10px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

export default AffiliationArea;
