import React from "react";

function TableComponent({ data, headerItems, expandedFields }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="accordion" id="accordionExample">
          {data.map((item, i) => (
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
    </div>
  );
}

export default TableComponent;
