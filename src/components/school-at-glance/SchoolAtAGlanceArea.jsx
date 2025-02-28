import React from "react";

function SchoolAtAGlanceArea() {
  const suitable_data = [
    {
      id: 1,
      title: (
        <>
          <span>GROUND</span>
        </>
      ),
      des: <>Our Beautiful School Infrastructure Overview</>,
      img: "/assets/img/infrastucture/groung-img.jpeg",
    },
    {
      id: 2,
      title: (
        <>
          <span>ACADEMIC</span>
        </>
      ),
      des: <>Well-maintained classrooms with proper seating and blackboards</>,
      img: "/assets/img/infrastucture/img-7.jpeg",
    },
    {
      id: 3,
      title: (
        <>
          <span>LIBRARY</span>
        </>
      ),
      des: <>School library with collection of books and study materials</>,
      img: "/assets/img/infrastucture/img-8.jpg",
    },
    {
      id: 4,
      title: (
        <>
          <span>COMPUTER</span>
        </>
      ),
      des: <>Computer room for basic computer education</>,
      img: "/assets/img/infrastucture/img-3.jpeg",
    },
    {
      id: 5,
      title: (
        <>
          <span>ACTIVITY</span>
        </>
      ),
      des: <>Activity room for art, craft, and music classes</>,
      img: "/assets/img/infrastucture/img-9.jpg",
    },
    {
      id: 6,
      title: (
        <>
          <span>SPORTS</span>
        </>
      ),
      des: <>Spacious playground for sports and outdoor activities</>,
      img: "/assets/img/infrastucture/img-5.jpeg",
    },
    {
      id: 7,
      title: (
        <>
          <span>ASSEMBLY</span>
        </>
      ),
      des: <>Assembly area for morning prayers and school gatherings</>,
      img: "/assets/img/infrastucture/img-6.jpg",
    },
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 576px) {
            .col-xl-6 {
              width: 100% !important;
              padding: 0 15px;
            }
            .tp-suit {
              flex-direction: column;
              width: 100%;
              margin: 0 auto 30px;
            }
            .tp-suit img {
              width: 400px !important;
              height: 400px !important;
              margin-top: 15px;
            }
            .tp-suit__content {
              width: 100%;
            }
          }
          
          .tp-suit {
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            background: #fff;
            height: 100%;
          }
          
          .tp-suit:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
          }
          
          .tp-suit__title span {
            color: #245d51;
            font-weight: 600;
            font-size: 20px;
            display: inline-block;
            margin-bottom: 10px;
          }
          
          .tp-suit__content {
            flex: 1;
          }
          
          .tp-suit__content p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 0;
          }
          
          .tp-suit img {
            object-fit: cover;
          }

          .row {
            margin-left: -15px;
            margin-right: -15px;
          }
        `}
      </style>
      <section
        className="suitable-area grey-bg pt-115 pb-90 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{
          backgroundImage: `url(/assets/img/bg/shape-bg-1.png)`,
        }}
      >
        <div className="container">
          <div className="row">
            {suitable_data.map((item) => (
              <div
                key={item.id}
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-30"
              >
                <div
                  className="tp-suit mb-30 p-relative white-bg"
                  style={{ display: "flex", gap: 20, alignItems: "center" }}
                >
                  <div className="tp-suit__content">
                    <h4 className="tp-suit__title">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                  <div>
                    <img
                      src={item.img}
                      alt="infrastructure-img"
                      style={{
                        height: "250px",
                        borderRadius: "10px",
                        width: "300px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolAtAGlanceArea;
