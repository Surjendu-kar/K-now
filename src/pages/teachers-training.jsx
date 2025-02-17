import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import TeachersTraining from "../components/teachers-training";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Teachers Training"} />
      <TeachersTraining />
    </Wrapper>
  );
};

export default index;
