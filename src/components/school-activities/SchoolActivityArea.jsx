import schoolActivities from "@/src/data/school_activities.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { SchoolActivityCard } from "./SchoolActivityCard";

const SchoolActivityArea = () => {
  const activitiesData = Array.isArray(schoolActivities)
    ? schoolActivities
    : schoolActivities.schoolActivities || [];

  return (
    <ActivityPageTemplate
      data={activitiesData}
      title="School Activities"
      CardComponent={SchoolActivityCard}
    />
  );
};

export default SchoolActivityArea;
