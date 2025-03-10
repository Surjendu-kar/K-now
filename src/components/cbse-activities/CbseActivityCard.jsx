import Link from "next/link";

export const CbseActivityCard = ({ item }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div
        className="tpcourse mb-40 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="tpcourse__thumb p-relative w-img fix">
          <Link href={`/cbse-activities/${item.id}`}>
            <img
              src="/assets/img/course/img-6.jpg"
              alt="course-thumb"
            />
          </Link>
        </div>
        <div className="tpcourse__content-2">
          <div className="tpcourse__category mb-10">
            <ul className="tpcourse__price-list d-flex align-items-center">
              <li>
                <Link
                  className={item.ct_color}
                  href={`/cbse-activities/${item.id}`}
                >
                  {item.category}
                </Link>
              </li>
            </ul>
          </div>
          <div className="tpcourse__ava-title mb-15">
            <h4 className="tpcourse__title tp-cours-title-color">
              <Link href={`/cbse-activities/${item.id}`}>{item.name}</Link>
            </h4>
          </div>
          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
            <ul className="d-flex align-items-center">
              <li>
                <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                <span>{item.coordinator}</span>
              </li>
              <li>
                <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                <span>{item.type}</span>
              </li>
              <li>
                <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                <span>{item.level}</span>
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
  );
};
