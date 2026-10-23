import Seo from "../components/ui/Seo";
import ServiceDetail from "../components/sections/ServiceDetail";
import { getServiceLine } from "../data/services";

const line = getServiceLine("adult-homecare");

const whoFor = [
  "Adults aged 18 and over living in their own home",
  "People who need help with personal care, medication or daily routines",
  "Families arranging support for a relative",
  "Professionals making a referral for an adult",
  "People leaving hospital who need support at home",
  "Adults with specialist or complex support needs",
];

export default function AhsPage() {
  return (
    <>
      <Seo
        title="Adult Homecare"
        description="Personal care, medication support, dementia care, live-in and overnight support for adults aged 18 and over across Aberdeen City and Aberdeenshire."
        path="/services/adult-homecare"
        image="/images/c15.jpg"
      />
      <ServiceDetail line={line} whoFor={whoFor} />
    </>
  );
}
