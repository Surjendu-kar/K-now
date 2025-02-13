import achievements from "@/src/data/achievements.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { AchievementCard } from "./AchievementCard";

const AchievementsArea = () => {
  const achievementsData = Array.isArray(achievements)
    ? achievements
    : achievements.achievements || [];

  return (
    <ActivityPageTemplate
      data={achievementsData}
      title="Achievements"
      CardComponent={AchievementCard}
    />
  );
};

export default AchievementsArea;
