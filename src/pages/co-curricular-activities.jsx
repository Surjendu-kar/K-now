import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CurricularActivity from "../components/co-curricular-activities";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Curricular Activity"} />
      <CurricularActivity />
    </Wrapper>
  );
};

export default index;
