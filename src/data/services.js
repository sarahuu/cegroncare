// Two service lines, 20 support types. Copy is adapted from the
// current Cegron Care website. Icon keys map to components in ui/icons.js.
export const serviceLines = [
  {
    slug: "adult-homecare",
    path: "/services/adult-homecare",
    name: "Adult Homecare",
    shortName: "Adult Homecare",
    audience: "Adults aged 18 and over",
    summary:
      "Personalised care that promotes independence, dignity, wellbeing and quality of life at home.",
    intro:
      "We support adults aged 18 and above with personalised care built around their routines, preferences and goals. Every package starts with a conversation and a written care plan, and is delivered by a small team who get to know the person well.",
    image: "/images/services/adult-01.jpeg",
    imageAlt: "A Cegron Care carer brushing an older woman's hair",
    highlights: [
      {
        title: "Care built around you",
        body: "Support is planned around your routines, preferences and what matters most to you.",
        icon: "heart",
      },
      {
        title: "Consistent people",
        body: "A small team of familiar carers who understand your needs and your home.",
        icon: "users",
      },
      {
        title: "Flexible packages",
        body: "From a few visits a week to overnight, live-in or 24-hour support.",
        icon: "clock",
      },
    ],
    items: [
      {
        title: "Personal Care",
        icon: "bath",
        summary:
          "Support with washing, dressing, grooming and personal hygiene, delivered with dignity and respect.",
        outcomes: [
          "Washing, bathing and showering",
          "Dressing, grooming and oral care",
          "Continence support handled discreetly",
        ],
      },
      {
        title: "Medication Assistance",
        icon: "pill",
        summary:
          "Safe, reliable support with medication prompts and administration, following your agreed care plan.",
        outcomes: [
          "Prompting and reminders",
          "Administration where assessed as appropriate",
          "Recording and liaison with your GP or pharmacy",
        ],
      },
      {
        title: "Dementia Support",
        icon: "brain",
        summary:
          "Specialist, person-centred care that promotes comfort, routine and wellbeing for people living with dementia.",
        outcomes: [
          "Familiar faces and consistent routines",
          "Life-story and reminiscence support",
          "Support for family carers",
        ],
      },
      {
        title: "Live-In Care",
        icon: "home",
        summary:
          "Continuous care and support in the comfort of your own home, day and night.",
        outcomes: [
          "24-hour, one-to-one support",
          "Stay in your own home and keep your routine",
          "Short-term or longer-term arrangements",
        ],
      },
      {
        title: "Overnight Support",
        icon: "moon",
        summary:
          "Reassurance and peace of mind with overnight care and monitoring.",
        outcomes: [
          "Waking or sleeping nights",
          "Medication and repositioning support",
          "Reassurance through disturbed nights",
        ],
      },
      {
        title: "Hospital Discharge Support",
        icon: "stethoscope",
        summary: "Helping individuals transition safely from hospital to home.",
        outcomes: [
          "Support arranged around your discharge date",
          "Practical help in the first days at home",
          "Working alongside hospital and community teams",
        ],
      },
      {
        title: "Holiday Support",
        icon: "plane",
        summary:
          "Support to enjoy holidays, day trips and community outings safely, comfortably and with confidence.",
        outcomes: [
          "Day trips and outings",
          "Support on holiday",
          "Help to stay involved in your community",
        ],
      },
      {
        title: "Respite Care",
        icon: "coffee",
        summary:
          "Short-term care that gives families and carers a well-deserved break.",
        outcomes: [
          "Planned or short-notice cover",
          "Hours, overnights or longer breaks",
          "Continuity of routine while you rest",
        ],
      },
      {
        title: "Companionship",
        icon: "heart-handshake",
        summary:
          "Friendly companionship that reduces isolation and promotes wellbeing and connection.",
        outcomes: [
          "Conversation and shared interests",
          "Help with hobbies and daily routines",
          "Support to stay connected locally",
        ],
      },
      {
        title: "Specialist Support",
        icon: "activity",
        summary:
          "Expert, personalised care for adults with complex health conditions, disabilities and specialist support needs.",
        outcomes: [
          "Needs assessed individually",
          "Coordination with health professionals",
          "Support shaped around agreed outcomes",
        ],
      },
    ],
  },
  {
    slug: "children-and-young-people",
    path: "/services/children-and-young-people",
    name: "Children & Young People",
    shortName: "Children & Young People",
    audience: "Children and young people",
    summary:
      "Safe, nurturing support built around each young person's development, wellbeing and outcomes.",
    intro:
      "We provide support for children and young people through tailored support plans that promote development, emotional wellbeing, safeguarding, participation and positive outcomes. Families and carers are partners in everything we do.",
    image: "/images/services/cyp-10.jpeg",
    imageAlt: "A Cegron Care support worker and a child with a football at the park",
    highlights: [
      {
        title: "Safe and nurturing",
        body: "Safeguarding is central to every plan, visit and decision we make.",
        icon: "shield",
      },
      {
        title: "Family partnership",
        body: "We work alongside families and carers so support feels consistent.",
        icon: "users",
      },
      {
        title: "Positive outcomes",
        body: "Support that builds confidence, skills and participation.",
        icon: "sparkles",
      },
    ],
    items: [
      {
        title: "Daily Living Support",
        icon: "sun",
        summary:
          "Support children and young people to develop essential life skills and confidence through personalised daily living support.",
        outcomes: [
          "Age-appropriate life skills",
          "Routines and growing independence",
          "Confidence building",
        ],
      },
      {
        title: "Emotional Well-Being Support",
        icon: "smile",
        summary:
          "Supporting emotional health and resilience through friendly conversations and tailored wellbeing strategies.",
        outcomes: [
          "A trusted, consistent adult",
          "Emotional regulation strategies",
          "Signposting to specialist support where needed",
        ],
      },
      {
        title: "Family Partnership Working",
        icon: "handshake",
        summary:
          "Working closely with families and carers to provide the best possible support for young people together.",
        outcomes: [
          "Shared planning with families",
          "Regular updates and reviews",
          "Consistent approaches at home",
        ],
      },
      {
        title: "Homework & Study Support",
        icon: "book",
        summary:
          "Encouraging learning and development through patient support with homework and study.",
        outcomes: [
          "Homework routines",
          "Reading and study support",
          "Encouragement and praise",
        ],
      },
      {
        title: "Additional Needs Support",
        icon: "puzzle",
        summary:
          "Tailored support for young people with additional support needs, including autism and neurodiversity.",
        outcomes: [
          "Sensory-aware support",
          "Predictable routines",
          "Communication that respects preference",
        ],
      },
      {
        title: "Personal Care",
        icon: "heart",
        summary:
          "Respectful and sensitive support with personal care needs, promoting dignity, confidence and wellbeing.",
        outcomes: [
          "Age-appropriate, respectful support",
          "Privacy and dignity",
          "Consistency of carer",
        ],
      },
      {
        title: "Positive Behaviour Support",
        icon: "message",
        summary:
          "Understanding behaviour, reducing distress and building consistent, positive responses with the people around the young person.",
        outcomes: [
          "Understanding what behaviour communicates",
          "Consistent responses across settings",
          "Joint work with family and professionals",
        ],
      },
      {
        title: "Respite & Short Breaks",
        icon: "calendar",
        summary:
          "Providing short-term care that gives families and carers a break and young people a change of pace.",
        outcomes: [
          "Planned short breaks",
          "Overnight and weekend cover",
          "Familiar, trusted staff",
        ],
      },
      {
        title: "School Escort & Community Support",
        icon: "bus",
        summary:
          "Safe transport and support to school and community activities, encouraging participation and independence.",
        outcomes: [
          "School and college escort",
          "Access to appointments",
          "Community activities",
        ],
      },
      {
        title: "Social & Leisure Activities",
        icon: "music",
        summary:
          "Promoting fun, friendships and inclusion through a range of social and leisure opportunities.",
        outcomes: [
          "Clubs, groups and activities",
          "Friendships and inclusion",
          "Support to try new things",
        ],
      },
    ],
  },
];

// Client photography, taken from the current Cegron Care service pages.
const serviceMedia = {
  "adult-homecare": [
    [
      "/images/services/adult-01.jpeg",
      "A Cegron Care carer brushing an older woman's hair",
    ],
    [
      "/images/services/adult-02.jpeg",
      "A carer supporting an older man with his medication at home",
    ],
    [
      "/images/services/adult-03.jpeg",
      "A carer and an older woman talking together on a sofa",
    ],
    [
      "/images/services/adult-04.jpeg",
      "A carer sharing a cup of tea with an older man at home",
    ],
    [
      "/images/services/adult-05.jpeg",
      "A carer checking on an older woman during an overnight visit",
    ],
    [
      "/images/services/adult-06.jpeg",
      "A carer checking an adult's blood pressure in his home",
    ],
    [
      "/images/services/adult-07.jpeg",
      "A carer supporting an older woman on a walk outside",
    ],
    [
      "/images/services/adult-08.jpeg",
      "A carer and an older woman looking through a photo album",
    ],
    [
      "/images/services/adult-09.jpeg",
      "A carer and an older woman playing a board game together",
    ],
    [
      "/images/services/adult-10.jpeg",
      "A carer and an older man playing a garden game",
    ],
  ],
  "children-and-young-people": [
    [
      "/images/services/cyp-02.jpeg",
      "A young person making breakfast with a Cegron Care support worker",
    ],
    [
      "/images/services/cyp-03.jpeg",
      "A support worker listening to a young person on a sofa",
    ],
    [
      "/images/services/cyp-04.jpeg",
      "A support worker meeting with a young person and their parents",
    ],
    [
      "/images/services/cyp-05.jpeg",
      "A young person doing homework with a support worker",
    ],
    [
      "/images/services/cyp-01.jpeg",
      "A child playing with building blocks alongside a support worker",
    ],
    [
      "/images/services/cyp-06.jpeg",
      "A support worker brushing a young girl's hair",
    ],
    [
      "/images/services/cyp-07.jpeg",
      "A support worker talking with a teenage boy",
    ],
    [
      "/images/services/cyp-08.jpeg",
      "A young girl relaxing with a blanket in a beanbag chair",
    ],
    [
      "/images/services/cyp-09.jpeg",
      "A support worker walking a child to school",
    ],
    [
      "/images/services/cyp-10.jpeg",
      "A support worker and a child with a football at the park",
    ],
  ],
};

serviceLines.forEach((line) => {
  line.items = line.items.map((item, index) => ({
    ...item,
    image: serviceMedia[line.slug][index][0],
    imageAlt: serviceMedia[line.slug][index][1],
  }));
});

export const getServiceLine = (slug) =>
  serviceLines.find((line) => line.slug === slug);
