import Link from "next/link";
import React from "react";

function FeeScholarshipArea() {
  const feeData = [
    {
      category: "On Admission",
      items: [
        { name: "Registration Charges", amount: "₹500" },
        { name: "Admission Fee", amount: "₹5,000" },
        { name: "Annual Collection", amount: "₹10,000" },
        { name: "Annual Charges", amount: "₹8,000" },
        { name: "Development Fees", amount: "₹5,000" },
      ],
    },
    {
      category: "Tuition Fee",
      items: [
        { name: "Class Prep to X", amount: "₹2,500 per month" },
        { name: "Class XI & XII", amount: "₹3,000 per month" },
      ],
    },
    {
      category: "Additional Fees",
      items: [
        { name: "Computer Fee (Class X & XII)", amount: "₹500 per month" },
        {
          name: "Science Fee (Physics/Chemistry/Biology)",
          amount: "₹300 per subject",
        },
      ],
    },
    {
      category: "Scholarships",
      items: [
        { name: "Merit Scholarship (Above 90%)", amount: "25% waiver" },
        { name: "Sports Excellence", amount: "50% waiver" },
        { name: "Sibling Discount", amount: "10% off" },
        { name: "Girls Education Initiative", amount: "Special rates" },
      ],
    },
  ];

  return (
    <div className="container" style={{ margin: "60px auto" }}>
      {feeData.map((section, index) => (
        <div
          className="sidebar__wrapper"
          style={{
            marginBottom: "20px",
            borderRadius: "10px",
            // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="sidebar__widget mb-40" key={index}>
            <h3 className="sidebar__widget-title mb-10">{section.category}</h3>
            <div className="sidebar__widget-content">
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href="#">
                      {item.name} <span>({item.amount})</span>
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

export default FeeScholarshipArea;
