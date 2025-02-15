import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import TCSampleArea from "./TCSampleArea";

function TCSample() {
  return (
    <>
      <Breadcrumb
        title="TC Sample"
        subtitle="TC Sample"
        isDbbl="Administration"
      />
      <TCSampleArea />
    </>
  );
}

export default TCSample;
