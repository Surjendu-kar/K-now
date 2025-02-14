import Link from "next/link";
import React from "react";

function MandatoryDisclosureArea() {
  const disclosureData = {
    generalInfo: [
      { label: "Name of School", value: "Your School Name" },
      { label: "Affiliation Number", value: "CBSE-001" },
      { label: "School Code", value: "12345" },
      {
        label: "Complete Address",
        value: "School Address, City, State - Pincode",
      },
      { label: "Principal Name", value: "Dr. Principal Name" },
      { label: "School Email", value: "school@example.com" },
      { label: "Contact Number", value: "+91-1234567890" },
    ],
    infrastructure: [
      { label: "Total Campus Area", value: "5 Acres" },
      { label: "Total Built Up Area", value: "25,000 sq ft" },
      { label: "Number of Classrooms", value: "50" },
      { label: "Number of Labs", value: "8" },
      { label: "Internet Facility", value: "Yes - 100 Mbps" },
      { label: "Number of Girls Toilets", value: "25" },
      { label: "Number of Boys Toilets", value: "25" },
    ],
    faculty: [
      { label: "Total Teaching Staff", value: "45" },
      { label: "PGT", value: "12" },
      { label: "TGT", value: "18" },
      { label: "PRT", value: "15" },
      { label: "Non-Teaching Staff", value: "20" },
      { label: "School Counsellor", value: "Yes" },
    ],
    enrollment: [
      { label: "School Working Hours", value: "8:00 AM to 2:30 PM" },
      { label: "Total Students", value: "1200" },
      { label: "Student-Teacher Ratio", value: "30:1" },
      { label: "Academic Session", value: "April to March" },
    ],
  };

  const sections = [
    { title: "General Information", data: disclosureData.generalInfo },
    { title: "Infrastructure", data: disclosureData.infrastructure },
    { title: "Faculty", data: disclosureData.faculty },
    { title: "Enrollment", data: disclosureData.enrollment },
  ];

  return (
    <div className="container" style={{ margin: "60px auto" }}>
      {sections.map((section, index) => (
        <div
          className="sidebar__wrapper"
          style={{
            marginBottom: "20px",
            borderRadius: "10px",
          }}
          key={index}
        >
          <div className="sidebar__widget mb-40">
            <h3 className="sidebar__widget-title mb-10">{section.title}</h3>
            <div className="sidebar__widget-content">
              <ul>
                {section.data.map((item, i) => (
                  <li key={i}>
                    <Link href="#">
                      {item.label} <span>({item.value})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MandatoryDisclosureArea;
