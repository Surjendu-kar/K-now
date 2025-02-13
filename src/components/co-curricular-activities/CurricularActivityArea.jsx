import co_curricular_activities from "@/src/data/co_curricular_activities.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { CurricularCard } from "./CurricularCard";

const CurricularActivityArea = () => {
  const activitiesData = Array.isArray(co_curricular_activities)
    ? co_curricular_activities
    : co_curricular_activities.coCurricularActivities || [];

  return (
    <ActivityPageTemplate
      data={activitiesData}
      title="Curricular Activities"
      CardComponent={CurricularCard}
    />
  );
};

export default CurricularActivityArea;
