import blog_data from "@/src/data/blog-data";
import Link from "next/link";
import React from "react";

const NewsArea = () => {
  return (
    <>
      <section
        className="blog-area pt-110 pb-110 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-65 text-center">
                <h2 className="tp-section-title mb-20">News & Achievements</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {blog_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div className="tp-blog mb-60">
                  <div className="tp-blog__thumb p-relative">
                    <div className="tp-blog__timg fix">
                      <Link href={`/news/${item.id}`}>
                        <img src={item.img} alt="news-img" />
                      </Link>
                    </div>
                    <div className="tp-blog__icon">
                      <Link href={`/news/${item.id}`}>
                        <i className="fi fi-rs-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-blog__content">
                    <div className="tp-blog__meta mb-10">
                      <Link href={`/news/${item.id}`}>{item.category}</Link>{" "}
                      <span>-</span>
                      <Link href={`/news/${item.id}`}>{item.date}</Link>
                    </div>
                    <h3 className="tp-blog__title mb-15">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center">
                <Link
                  href="/blog"
                  className="tp-btn"
                  style={{ marginTop: "20px" }}
                >
                  View All News
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default NewsArea;
