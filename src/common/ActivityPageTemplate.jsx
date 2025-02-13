import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CommonSort } from "./CommonSort";
import { getSortedData } from "./sortUtils";
import { addPerPage, addSort } from "@/features/activityFilter";
import BasicPagination from "./BasicPagination";
import { useRouter } from "next/router";

const ActivityPageTemplate = ({ data, title, CardComponent }) => {
  const router = useRouter();
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

  const sortedData = getSortedData(data, sort, router.pathname);
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
      <div className="container" style={{ marginTop: "5rem" }}>
        {/* heading */}
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title mb-60">
              <span className="tp-sub-title-box mb-15">{title}</span>
              <h2 className="tp-section-title">Explore Our {title}</h2>
            </div>
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-lg-4 col-md-12 courser-list-width mb-60">
            <div className="course-sidebar">
              <div className="course-sidebar__widget mb-50">
                <div className="course-sidebar__info c-info-list">
                  <h4 className="course-sidebar__title mb-35">Sort {title}</h4>
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
                  <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-2">
                    <div>
                      <select
                        value={sort}
                        name="orderby"
                        className="chosen-single form-select ms-3"
                        onChange={(e) => dispatch(addSort(e.target.value))}
                        style={{ cursor: "pointer" }}
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
                        style={{ cursor: "pointer" }}
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
              <div key={i} className="col-12">
                <CardComponent item={item} />
              </div>
            ))}

            {/* Pagination */}
            {pages > 1 && (
              <BasicPagination
                prev={prev}
                currentPage={currentPage}
                getPaginationGroup={getPaginationGroup}
                next={next}
                pages={pages}
                handleActive={handleActive}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPageTemplate;
