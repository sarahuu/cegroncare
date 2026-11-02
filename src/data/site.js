// Central site facts. Values marked `pending` must be confirmed by the client
// before launch — see the content checklist in the project plan.
export const site = {
  name: "Cegron Care",
  legalName: "Cegron Care",
  tagline:
    "Compassionate care for adults, children and young people across Aberdeen City and Aberdeenshire.",
  phone: "+44 1224 472512",
  phoneHref: "tel:+441224472512",
  email: "info@cegroncare.co.uk",
  emailHref: "mailto:info@cegroncare.co.uk",
  areas: ["Aberdeen City", "Aberdeenshire"],
  areaLine: "Aberdeen City & Aberdeenshire",
  availability: "Day, night, weekend and overnight support",
  whatsapp: "https://wa.link/tr86zy",
  baseUrl:
    import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") ||
    "https://www.cegroncare.co.uk",
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Adult Homecare",
    to: "/services/adult-homecare",
  },
  {
    label: "Children & Young People",
    to: "/services/children-and-young-people",
  },
  { label: "For Families", to: "/for-families" },
  { label: "Referrals", to: "/referrals" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export const primaryCta = { label: "Request care", to: "/contact" };
