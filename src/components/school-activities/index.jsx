import Breadcrumb from "../bredcrumb/breadcrumb";
import SchoolActivityArea from "./SchoolActivityArea";

const SchoolActivity = () => {
  return (
    <>
      <Breadcrumb
        title="School Activity"
        subtitle="School Activity"
        isDbbl="More"
      />
      <SchoolActivityArea />
    </>
  );
};

export default SchoolActivity;
