import React from "react";
import { enrollmentData } from "@/src/data/student_enrol.json";
import TableComponent from "@/src/common/TableComponent";

function StudentEnrolArea() {
  const headerItems = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "grade", label: "Grade" },
    { key: "enrollmentDate", label: "Date" },
  ];

  const expandedFields = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "grade", label: "Grade" },
    { key: "enrollmentDate", label: "Enrollment Date" },
    { key: "status", label: "Status", type: "badge" },
    { key: "parentName", label: "Parent Name" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <section
      className="faq-area pb-120 pt-120 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <TableComponent
          data={enrollmentData}
          headerItems={headerItems}
          expandedFields={expandedFields}
        />
      </div>
    </section>
  );
}

export default StudentEnrolArea;
