import React from "react";

const BasicPagination = ({
  prev,
  currentPage,
  getPaginationGroup,
  next,
  pages,
  handleActive,
}) => {
  return (
    <div className="basic-pagination text-center">
      <nav>
        <ul>
          {getPaginationGroup.length > 0 && (
            <li>
              {currentPage !== 1 && (
                <a
                  onClick={prev}
                  className="prev-page"
                  style={{ cursor: "pointer" }}
                >
                  <i className="far fa-angle-left"></i>
                </a>
              )}
            </li>
          )}

          {getPaginationGroup.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => handleActive(item)}
                className={currentPage === item ? "current" : ""}
                style={{ cursor: "pointer" }}
              >
                {item}
              </a>
            </li>
          ))}

          {getPaginationGroup.length > 0 && (
            <li>
              {currentPage < pages && (
                <a onClick={next} className="next-page">
                  <i
                    className="far fa-angle-right"
                    style={{ cursor: "pointer" }}
                  ></i>
                </a>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BasicPagination;
