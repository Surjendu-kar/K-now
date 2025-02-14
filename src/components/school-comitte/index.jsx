import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import SchoolComitteArea from "./SchoolComitteArea";

function SchoolComitte() {
  return (
    <>
      <Breadcrumb title="SchoolComitte" subtitle="SchoolComitte" isDbbl="Administration" />
      <SchoolComitteArea />
    </>
  );
}

export default SchoolComitte;
