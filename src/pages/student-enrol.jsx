import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import StudentEnrol from "../components/student-enroll";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Student Enrol"} />
      <StudentEnrol />
    </Wrapper>
  );
};

export default index;
