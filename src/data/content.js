// Shared content used across pages. Counts shown on the site are derived from
// this data (2 service lines, 20 support services) rather than invented.

export const stats = [
  { value: "2", label: "Service lines" },
  { value: "20", label: "Support services" },
  { value: "2", label: "Areas covered" },
  { value: "5", label: "Years of experience" },
];

export const values = [
  {
    title: "Compassion",
    body: "We start with kindness and take the time to understand how someone is feeling.",
    icon: "heart",
  },
  {
    title: "Dignity",
    body: "Privacy, choice and respect in every visit, however personal the support.",
    icon: "heart-handshake",
  },
  {
    title: "Inclusion",
    body: "Support that helps people take part in their community and stay connected.",
    icon: "users",
  },
  {
    title: "Respect",
    body: "We listen, explain clearly and treat every person as an individual.",
    icon: "message",
  },
  {
    title: "Safety",
    body: "Safeguarding, careful planning and consistent practice come first.",
    icon: "shield",
  },
  {
    title: "Accountability",
    body: "Clear records, honest communication and reviews you can rely on.",
    icon: "clipboard",
  },
  {
    title: "Person-Centred Care",
    body: "Plans are built around the person, not the other way round.",
    icon: "person",
  },
  {
    title: "Professionalism",
    body: "Trained, dependable staff who represent Cegron Care well.",
    icon: "badge",
  },
];

export const whyChooseUs = [
  {
    title: "Client focused",
    body: "Care plans are tailored around your specific needs and requirements, so you get the support that fits your life.",
    icon: "clipboard",
  },
  {
    title: "Care community",
    body: "Close relationships with health and social care professionals, housing providers and employers help us arrange a wide range of support.",
    icon: "handshake",
  },
  {
    title: "Around the clock",
    body: "Our skilled team provides weekday, night, weekend and overnight care, so support is there when it is needed.",
    icon: "clock",
  },
  {
    title: "Clear communication",
    body: "Open, regular contact with families, professionals and the people we support keeps everyone coordinated.",
    icon: "message",
  },
];

export const processSteps = [
  {
    number: "1",
    title: "Initial consultation",
    summary:
      "We meet with the individual, family or referring professionals to understand the support required.",
    detail:
      "A conversation, not a sales pitch. We listen to what is happening now, what needs to change and what matters most to the person.",
  },
  {
    number: "2",
    title: "Assessment and care planning",
    summary:
      "A personalised support plan is developed based on assessed needs, risks and outcomes.",
    detail:
      "We agree the support, the visit times, who will be involved and how we will know it is working.",
  },
  {
    number: "3",
    title: "Matching support staff",
    summary:
      "We carefully match staff based on skills, experience, compatibility and individual needs and preferences.",
    detail:
      "Continuity matters. We introduce the team before support starts wherever possible.",
  },
  {
    number: "4",
    title: "Ongoing monitoring and reviews",
    summary:
      "Care is regularly reviewed to ensure quality, safety, effectiveness and satisfaction.",
    detail:
      "Reviews are planned with the person and, with consent, their family. Plans change as needs change.",
  },
  {
    number: "5",
    title: "Continuous communication",
    summary:
      "We maintain open communication with families, professionals and service users to ensure coordinated, responsive support.",
    detail:
      "A clear point of contact, honest updates and quick responses when something changes.",
  },
];

export const testimonials = [
  {
    name: "Haris Gulati",
    role: "Person supported by Cegron Care",
    quote:
      "I have been receiving care from Cegron Care for several months now, and I can confidently say their service is outstanding. The team…",
    // Source quote is truncated on the live website — full text required from client.
    incomplete: true,
  },
  {
    name: "Sara Hala",
    role: "Family member",
    quote:
      "Cegron Care's team has been incredibly reliable and respectful. Their professionalism gives me peace of mind knowing my loved ones are in safe…",
    incomplete: true,
  },
  {
    name: "Robert Mick",
    role: "Family member",
    quote:
      "The carers from Cegron are attentive and well-trained. Communication from management is excellent, and they always go above and beyond.",
    incomplete: false,
  },
];

export const audiencePanels = [
  {
    id: "families",
    label: "For families",
    title: "Support that surrounds your loved one — and you.",
    body: "Choosing care is a big step. We keep the process clear and unhurried, with a named contact and a plan you can see.",
    points: [
      "A conversation before any commitment",
      "A written plan built around routines and preferences",
      "Regular reviews with the people who matter",
      "A small, familiar team of carers",
    ],
    cta: { label: "What families can expect", to: "/for-families" },
  },
  {
    id: "professionals",
    label: "For professionals",
    title: "A direct line for health and social care partners.",
    body: "We work with social workers, hospital teams and community services across Aberdeen City and Aberdeenshire.",
    points: [
      "Clear referral route and named contact",
      "Needs-led assessment and outcome planning",
      "Coordinated communication with your team",
      "Support for hospital discharge and urgent packages",
    ],
    cta: { label: "Make a professional referral", to: "/referrals" },
  },
];

export const areas = [
  {
    name: "Aberdeen City",
    body: "Support across the city, from the city centre to the surrounding neighbourhoods.",
  },
  {
    name: "Aberdeenshire",
    body: "Covering communities across Aberdeenshire — contact us to confirm support in your area.",
  },
];

export const partners = [
  "Social workers",
  "Hospital discharge teams",
  "Occupational therapists",
  "Community mental health teams",
  "GP practices",
  "Housing providers",
  "Care facilities",
  "Families and representatives",
];

export const qualityCommitments = [
  {
    title: "Needs-led assessment",
    body: "Support is agreed after an assessment of needs, risks and agreed outcomes.",
    icon: "clipboard",
  },
  {
    title: "Safe recruitment",
    body: "Staff are recruited and checked before they work with the people we support.",
    icon: "shield",
  },
  {
    title: "Person-centred planning",
    body: "Plans are co-produced with the person and, with consent, their family.",
    icon: "clipboard",
  },
  {
    title: "Ongoing training",
    body: "The team is supported to keep learning and to reflect on practice.",
    icon: "book",
  },
];

export const faqs = [
  {
    q: "How do I arrange care for myself or a family member?",
    a: "Call us or send an enquiry through the contact form. We will arrange an initial conversation, then an assessment and a written support plan before support begins.",
  },
  {
    q: "Which areas do you cover?",
    a: "We provide support across Aberdeen City and Aberdeenshire. If you are unsure whether we cover your area, contact us and we will confirm.",
  },
  {
    q: "Can care start quickly?",
    a: "It depends on the support needed, staffing and the assessment. Tell us your timescales and we will be honest about what is possible.",
  },
  {
    q: "Do you support children and young people as well as adults?",
    a: "Yes. We run two service lines: Adult Homecare for people aged 18 and over, and Children & Young People services.",
  },
  {
    q: "How do professionals make a referral?",
    a: "Use the referral form on our referrals page or call the office. Include the person's needs, urgency and the best contact for you.",
  },
];

export const professionalNeeds = [
  "The person's name, age band and postcode",
  "What support is needed and when it should start",
  "Relevant risks and current professionals involved",
  "Funding route or referral context, where known",
  "Your contact details and preferred response time",
];

export const faqCategories = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        q: "How do I arrange care for myself or a family member?",
        a: "Call us or send an enquiry through the contact form. We will arrange an initial conversation, then an assessment and a written support plan before support begins.",
      },
      {
        q: "What happens at the first conversation?",
        a: "We listen. We will ask what is happening now, what needs to change and what matters most to the person. There is no obligation and no pressure to commit.",
      },
      {
        q: "Is there an assessment before care starts?",
        a: "Yes. Support is planned after an assessment of needs, risks and agreed outcomes, so the plan matches the person rather than a fixed template.",
      },
      {
        q: "How quickly can support begin?",
        a: "It depends on the support needed, staffing and the assessment. Tell us your timescales and we will be honest about what is possible.",
      },
    ],
  },
  {
    id: "care-and-support",
    title: "Care and support",
    items: [
      {
        q: "Which services do you provide?",
        a: "We provide adult homecare for people aged 18 and over, and support for children and young people. Across both service lines we offer 20 different types of support.",
      },
      {
        q: "Do you provide overnight and live-in care?",
        a: "Yes. Both are part of our adult homecare service, alongside personal care, medication support, dementia support, hospital discharge and respite.",
      },
      {
        q: "Can we have the same carer each visit?",
        a: "We match staff by skills, experience and compatibility, and aim to keep the team consistent. Continuity is discussed and agreed as part of the care plan.",
      },
      {
        q: "Can support change as needs change?",
        a: "Yes. Care is regularly reviewed, and plans are updated with the person and, with consent, their family.",
      },
    ],
  },
  {
    id: "costs-and-funding",
    title: "Costs and funding",
    items: [
      {
        q: "How are costs worked out?",
        a: "Every package is priced individually, based on the support needed, the time involved and the visit pattern. We will explain this clearly before support starts.",
      },
      {
        q: "Will I know the cost before support begins?",
        a: "Yes. The written plan sets out the support, visit times and costs, so you can see what is included before you agree.",
      },
      {
        q: "Can care be funded by the local authority?",
        a: "Some people receive funding through their local authority, self-directed support or direct payments. We can discuss the route that applies to you.",
      },
    ],
  },
  {
    id: "families",
    title: "Families and communication",
    items: [
      {
        q: "Can family be involved in planning?",
        a: "Yes, with the person's consent. Families are usually part of the initial conversation and can be included in reviews.",
      },
      {
        q: "How will we know what is happening?",
        a: "You will have a named point of contact and clear updates when something changes. Reviews are planned with the person and, with consent, their family.",
      },
      {
        q: "What if we have a concern?",
        a: "Tell us directly. We will explain how to raise a concern, listen to what has happened and respond openly.",
      },
      {
        q: "Can you provide respite for family carers?",
        a: "Yes. Respite care provides planned or short-term cover so family carers can rest, with continuity of routine where possible.",
      },
    ],
  },
  {
    id: "referrals",
    title: "Referrals and professionals",
    items: [
      {
        q: "How do professionals make a referral?",
        a: "Use the referral form on our referrals page or call the office. Include the person's needs, urgency and the best contact for you.",
      },
      {
        q: "Do you accept urgent or hospital discharge referrals?",
        a: "We welcome them, but what we can offer depends on staffing and assessment. Call us as well as sending the form so we can respond quickly.",
      },
      {
        q: "What information should a referral include?",
        a: "The person's name, age band and postcode, the support needed, start date, known risks, current professionals involved and your contact details.",
      },
    ],
  },
  {
    id: "safety",
    title: "Regulation, safety and staff",
    items: [
      {
        q: "Are you registered?",
        a: "Cegron Care is a care provider based in Scotland. Our registration details are being confirmed for publication on this website — please contact us for the current information.",
      },
      {
        q: "How are staff checked?",
        a: "Staff go through a recruitment and checking process before they work with the people we support.",
      },
      {
        q: "How do you safeguard people?",
        a: "Safeguarding is central to planning, recruitment and practice. Concerns are taken seriously, acted on and reviewed.",
      },
      {
        q: "What training do staff receive?",
        a: "Staff receive training relevant to their role, with ongoing supervision and opportunities to develop.",
      },
    ],
  },
];

export const familyExpectations = [
  "A conversation before any commitment",
  "A named contact who knows your situation",
  "A written plan you have seen and agreed",
  "Clear costs before support begins",
  "Regular reviews and honest updates",
  "A straightforward way to raise a concern",
];

export const familySupport = [
  {
    title: "Someone to talk to",
    body: "A named contact who answers questions clearly and tells you what happens next.",
    icon: "message",
  },
  {
    title: "Care that fits family life",
    body: "Visits planned around routines, preferences and the things that matter at home.",
    icon: "calendar",
  },
  {
    title: "Involvement with consent",
    body: "Families are included in planning and reviews, with the person's agreement.",
    icon: "users",
  },
  {
    title: "Respite for carers",
    body: "Planned or short-notice breaks so family carers can rest and recharge.",
    icon: "coffee",
  },
];

// Dummy profiles for layout review only. Replace with confirmed team details
// before launch — do not publish invented names, roles or qualifications.
export const leadershipRoles = [
  {
    name: "Sarah Mitchell",
    role: "Service Manager",
    body: "Oversees day-to-day care, quality and safeguarding across both service lines.",
  },
  {
    name: "James Okafor",
    role: "Care Coordinator",
    body: "First point of contact for new enquiries, assessments, staff matching and reviews.",
  },
  {
    name: "Priya Nair",
    role: "Senior Support Worker",
    body: "Supports the care team and works directly with the people we support and their families.",
  },
];
