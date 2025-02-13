import cbseActivities from "@/src/data/cbse_activities.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { CbseActivityCard } from "./CbseActivityCard";

const CBSEArea = () => {
  const activitiesData = Array.isArray(cbseActivities)
    ? cbseActivities
    : cbseActivities.cbseActivities || [];

  return (
    <ActivityPageTemplate
      data={activitiesData}
      title="CBSE Activities"
      CardComponent={CbseActivityCard}
    />
  );
};

export default CBSEArea;
