import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import StudentEnrolArea from "./StudentEnrolArea";

function StudentEnrol() {
  return (
    <>
      <Breadcrumb title="StudentEnrol" subtitle="StudentEnrol" isDbbl="Administration" />
      <StudentEnrolArea />
    </>
  );
}

export default StudentEnrol;
