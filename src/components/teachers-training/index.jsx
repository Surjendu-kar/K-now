import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import TeachersTrainingArea from "./TeachersTrainingArea";

function TeachersTraining() {
  return (
    <>
      <Breadcrumb title="Teachers Training" subtitle="Teachers Training" isDbbl="Administration" />
      <TeachersTrainingArea />
    </>
  );
}

export default TeachersTraining;
