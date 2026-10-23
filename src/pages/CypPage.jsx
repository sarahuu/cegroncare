import Seo from "../components/ui/Seo";
import ServiceDetail from "../components/sections/ServiceDetail";
import { getServiceLine } from "../data/services";

const line = getServiceLine("children-and-young-people");

const whoFor = [
  "Children and young people who need support at home or in the community",
  "Families and carers who need consistent help",
  "Young people with additional support needs, including autism",
  "Support around school, college and community activities",
  "Short breaks that give families time to recharge",
  "Local authority and professional referrals",
];

export default function CypPage() {
  return (
    <>
      <Seo
        title="Children & Young People"
        description="Tailored support for children and young people across Aberdeen City and Aberdeenshire, including daily living, emotional wellbeing, respite and community support."
        path="/services/children-and-young-people"
        image="/images/c7.jpg"
      />
      <ServiceDetail line={line} whoFor={whoFor} />
    </>
  );
}
