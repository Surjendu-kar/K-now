import communityServices from "@/src/data/community_services.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { CommunityServiceCard } from "./CommunityServiceCard";

const CommunityServicesArea = () => {
    const servicesData = Array.isArray(communityServices)
    ? communityServices
    : communityServices.communityServices || [];

  return (
    <ActivityPageTemplate
      data={servicesData}
      title="Community Service"
      CardComponent={CommunityServiceCard}
    />
  );
};

export default CommunityServicesArea;
