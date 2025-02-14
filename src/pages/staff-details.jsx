import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Staff from "../components/staff-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Our Staffs"} />
      <Staff/>
    </Wrapper>
  );
};

export default index;
