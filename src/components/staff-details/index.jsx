import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import StaffArea from "./StaffArea";

function Staff() {
  return (
    <>
      <Breadcrumb title="Staff" subtitle="Staff" isDbbl="Administration" />
      <StaffArea />
    </>
  );
}

export default Staff;
