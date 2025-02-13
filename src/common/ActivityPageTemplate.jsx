import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CommonSort } from "./CommonSort";
import { getSortedData } from "./sortUtils";
import { addPerPage, addSort } from "@/features/activityFilter";

const ActivityPageTemplate = ({ data, title }) => {
  const dispatch = useDispatch();
  const { activitySort } = useSelector((state) => state.activityFilter);
  const { sort, perPage } = activitySort;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const perPageHandler = (e) => {
    const value = JSON.parse(e.target.value);
    const newItemsPerPage = value.end === 0 ? data.length : value.end;
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    dispatch(
      addPerPage({
        start: 0,
        end: newItemsPerPage,
      })
    );
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const sortedData = getSortedData(data, sort, window.location.pathname);
  const filteredContent = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const pages = Math.ceil(data.length / itemsPerPage);
  const getPaginationGroup = [...Array(pages)].map((_, i) => i + 1);

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage !== pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(
      addPerPage({
        start: 0,
        end: 6,
      })
    );
  }, []);

  return (
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
                  <CommonSort />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 course-item-width ml-30">
            {/* Top Bar */}
            <div className="shop-top-wrap courses-top-wrap mb-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="shop-top-left">
                    <p>We found {filteredContent?.length} activities for you</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                    <div className="">
                      <select
                        value={sort}
                        name="orderby"
                        className="chosen-single form-select ms-3"
                        onChange={(e) => dispatch(addSort(e.target.value))}
                      >
                        <option value="">Sort by (Latest First)</option>
                        <option value="oldest">Oldest First</option>
                      </select>
                    </div>
                    <div>
                      <select
                        onChange={perPageHandler}
                        className="chosen-single form-select ms-3"
                        value={JSON.stringify(perPage)}
                      >
                        <option value={JSON.stringify({ start: 0, end: 0 })}>
                          All
                        </option>
                        <option value={JSON.stringify({ start: 0, end: 6 })}>
                          6 per page
                        </option>
                        <option value={JSON.stringify({ start: 0, end: 9 })}>
                          9 per page
                        </option>
                        <option value={JSON.stringify({ start: 0, end: 12 })}>
                          12 per page
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity List */}
            {filteredContent.map((item, i) => (
              <div key={i} className="tpcourse tp-list-course mb-40">
                <div className="row g-0">
                  <div className="col-xl-4 course-thumb-width">
                    <div className="tpcourse__thumb p-relative w-img fix">
                      <Link href={`/co-curricular-activities/${item.id}`}>
                        <img
                          src="/assets/img/course/course-thumb-01.jpg"
                          alt="course-thumb"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 course-text-width">
                    <div className="course-list-content">
                      <div className="tpcourse__category mb-10">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            <Link href="#">{item.category}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__ava-title mb-15">
                        <h4 className="tpcourse__title">
                          <Link href={`/co-curricular-activities/${item.id}`}>
                            {item.activityName}
                          </Link>
                        </h4>
                      </div>
                      <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                        <ul className="d-flex align-items-center">
                          <li>
                            <img
                              src="/assets/img/icon/c-meta-02.png"
                              alt="meta-icon"
                            />
                            <span>{item.coordinator}</span>
                          </li>
                          <li>
                            <img
                              src="/assets/img/icon/c-meta-02.png"
                              alt="meta-icon"
                            />
                            <span>{item.duration}</span>
                          </li>
                          <li>
                            <img
                              src="/assets/img/icon/c-meta-02.png"
                              alt="meta-icon"
                            />
                            <span>{item.maxParticipants} students</span>
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

            {/* Pagination */}
            {pages > 1 && (
              <div className="basic-pagination text-center">
                <nav>
                  <ul>
                    <li>
                      <a onClick={prev} style={{ cursor: "pointer" }}>
                        <i className="far fa-angle-left"></i>
                      </a>
                    </li>
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
                    <li>
                      <a onClick={next} style={{ cursor: "pointer" }}>
                        <i className="far fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPageTemplate;
