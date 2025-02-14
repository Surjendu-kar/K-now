import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import PrincipalMessageArea from "./PrincipalMessageArea";

function PrincipalMessage() {
  return (
    <>
      <Breadcrumb
        title="Principal Message"
        subtitle="Principal Message"
        isDbbl="About"
      />
      <PrincipalMessageArea />
    </>
  );
}

export default PrincipalMessage;
