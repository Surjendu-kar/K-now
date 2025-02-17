import React from 'react'
import { staffMembers } from "@/src/data/staff_data.json";
import Link from 'next/link';

function TeachersTrainingArea() {
  return (
    <>
    <section className="instructor-area pb-110 pt-110">
      <div className="container">
        <div className="row">
          {staffMembers.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12">
              <div
                className="tp-instruc-item wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".2s"
              >
                <div className="tp-instructor text-center p-relative mb-40">
                  <div className="tp-instructor__thumb mb-25">
                    <img src={item.image} alt="instructor-profile" />
                  </div>
                  <div className="tp-instructor__content">
                    <span>{item.designation}</span>
                    <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-35 mt-5">
                      <Link href={`/staff/${item.id}`}>{item.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <style jsx>{`
      .tp-instructor__thumb img {
        width: 80%;
        height: 500px;
        object-fit: cover;
      }

      @media (min-width: 768px) {
        .tp-instructor__thumb img {
           {
            /* height: 300px; */
          }
        }
      }

      @media (min-width: 992px) {
        .tp-instructor__thumb img {
          height: 500px;
          width: 100%;
        }
      }
    `}</style>
  </>  )
}

export default TeachersTrainingArea