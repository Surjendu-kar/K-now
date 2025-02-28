import React from "react";
import TableComponent from "@/src/common/TableComponent";
import affiliationDataFile from "@/src/data/affiliation.json";
const { affiliationData } = affiliationDataFile;

function AffiliationArea() {
  const headerItems = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
  ];

  const expandedFields = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
    { key: "validity", label: "Validity" },
    { key: "status", label: "Status" },
    { key: "location", label: "Location" },
  ];

  return (
    <section
      className="faq-area pb-120 pt-120 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <TableComponent
          data={affiliationData}
          headerItems={headerItems}
          expandedFields={expandedFields}
        />
      </div>
    </section>
  );
}

export default AffiliationArea;
