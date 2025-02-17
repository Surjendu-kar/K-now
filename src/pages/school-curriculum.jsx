import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import SchoolCurriculum from "../components/school-curriculum";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"School Curriculum"} />
      <SchoolCurriculum />
    </Wrapper>
  );
};

export default index;
