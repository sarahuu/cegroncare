import { site } from "./site";

export const homeHealthCareJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeHealthCareService",
  name: site.name,
  url: site.baseUrl,
  telephone: site.phone,
  email: site.email,
  description:
    "Adult homecare and children and young people support services across Aberdeen City and Aberdeenshire.",
  areaServed: site.areas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  serviceType: ["Adult Homecare", "Children and Young People Support"],
};
