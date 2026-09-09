/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Herbert",
  last: "",           // ⚠️ Last name not provided in portfolio content
  fullName: "Herbert",
  tagline: "Building, Exploring, Solving · Aerospace Engineering & Robotics Researcher",
  location: "Accra, Ghana",
  email: "",          // ⚠️ Not provided
  phone: "",          // ⚠️ Not provided
  bio: [
    "I am a Grade 12 IB student at the American International School of Accra with a strong interest in aerospace engineering, physics, robotics, and computational problem-solving. My curiosity spans the intersection of aerospace, engineering, mathematics, and technology — understanding how complex systems work, and then going further to build, simulate, or improve them.",
    "My research work centres on aerospace and satellite systems. I authored a research paper investigating the use of magnetorquers for CubeSat attitude control, combining mathematical modelling with an independently developed C++ simulation. I also developed a multi-university application platform and served as main programmer on a sign-language-to-speech project recognised for Most Innovative Idea and Best Presentation.",
    "Outside the lab, I founded my school's robotics club to give students hands-on engineering experience, trained 30+ students in 3D modelling and 25+ in C++ programming through STEM outreach, and compete as a member of Ghana's National Debate Team — shortlisted from 300 students to represent Ghana at the World Schools Debate Championship.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    twitter: "",
  },
  cv: "placeholder.pdf",  // ⚠️ Not provided in portfolio content
  photo: "placeholder.jpg",        // ⚠️ Not provided in portfolio content
  aboutPhoto: "placeholder.jpg",   // ⚠️ Not provided in portfolio content
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Area of Interest", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  {
    label: "Teaching & Community",
    to: "/volunteering",
  },
  { label: "Activities", to: "/sports" },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "cubesat-magnetorquer-research",
    role: "Independent Researcher",
    org: "Magnetorquers in CubeSat Attitude Control",
    logo: "",
    location: "Accra, Ghana",
    dates: "2026",
    meta: "2026 · Accra, Ghana ·",
    badge: "Research",
    desc: "Conducted an independent research project investigating how magnetorquers can be used to control the rotation of small satellites, combining physics, mathematical modelling, and a self-built C++ simulation.",
    bullets: [
      "Investigated the use of magnetorquers for CubeSat attitude control, combining physics and mathematical modelling to determine key parameters relevant to satellite rotation",
      "Independently developed a C++ simulation to model the satellite system and explore its rotational behaviour",
    ],
    tags: ["Aerospace Engineering", "CubeSats", "Attitude Control", "C++", "Mathematical Modelling"],
    featured: true,
  },
  {
    slug: "robotics-club",
    role: "Founder & President",
    org: "School Robotics Club — American International School of Accra",
    logo: "",
    location: "Accra, Ghana",
    dates: "2026 – Present",
    meta: "2026 – Present · Accra, Ghana ·",
    badge: "Student-led",
    desc: "Proposed and launched the school's robotics club from concept to official student organisation, leading weekly hands-on engineering activities and projects.",
    bullets: [
      "Proposed and launched the school's first robotics club, growing it from a pilot meeting to an officially recognised student organisation",
      "Lead weekly activities and hands-on engineering projects as club president, creating a space for students to explore robotics",
    ],
    tags: ["Robotics", "Engineering", "Leadership", "Project Management"],
    featured: true,
  },
  {
    slug: "sign-language-to-speech",
    role: "Main Programmer",
    org: "Sign Language to Speech — Emerging Technologies Programme",
    logo: "",
    location: "Accra, Ghana",
    dates: "2025",
    meta: "2025 · Accra, Ghana ·",
    badge: "Programme",
    desc: "Served as the main programmer for a team project developing a platform that translates sign language into speech, as part of an eight-week emerging technologies programme.",
    bullets: [
      "Led the programming effort for a team building a sign-language-to-speech translation platform over an eight-week programme",
      "Contributed to turning the team's concept into a working solution, with the project recognised for Most Innovative Idea and Best Presentation",
    ],
    tags: ["Programming", "Emerging Technology", "Accessibility", "Teamwork"],
    featured: true,
  },
  {
    slug: "africa-world-airlines",
    role: "Engineering Exposure",
    org: "Africa World Airlines",
    logo: "",
    location: "Ghana",
    dates: "2024",
    meta: "2024 · Ghana ·",
    badge: "Industry",
    desc: "Gained practical exposure to aircraft wheel maintenance and overhaul processes, observing non-destructive testing techniques and the logistics of transporting aircraft components between facilities.",
    bullets: [
      "Worked with overhaul equipment and observed non-destructive testing techniques used in aircraft maintenance",
      "Explored the logistics involved in transporting aircraft components between facilities",
      "Gained early exposure to the precision, safety, and systems thinking required in aviation engineering",
    ],
    tags: ["Aerospace", "Aviation Engineering", "Non-Destructive Testing"],
    featured: true,
  },
  {
    slug: "first-national-bank",
    role: "Work Experience",
    org: "First National Bank",
    logo: "",
    location: "Ghana",
    dates: "2023",
    meta: "2023 · Ghana ·",
    badge: "Work Experience",
    desc: "Supported consumer-facing operations including enquiries and cheque processing, gaining exposure to institutional verification systems and the role of technology in financial services.",
    bullets: [
      "Supported consumer-facing operations including enquiries and cheque processing",
      "Gained exposure to institutional processes, verification systems, and the role of technology in financial operations",
    ],
    tags: ["Finance", "Operations", "Client Support"],
    featured: false,
  },
  {
    slug: "stem-outreach",
    role: "Volunteer Instructor",
    org: "STEM Outreach",
    logo: "",
    location: "Ghana",
    dates: "2025",
    meta: "2025 · Ghana ·",
    badge: "Volunteer",
    desc: "Trained 30+ students in 3D modelling and 25+ students in C++ programming at a tuition-free school during a summer bootcamp, making technical concepts accessible through hands-on learning.",
    bullets: [
      "Trained 30+ students in 3D modelling at a tuition-free school during a summer bootcamp",
      "Taught 25+ students C++ programming fundamentals with a focus on practical, hands-on learning",
    ],
    tags: ["Teaching", "STEM", "Mentorship", "Outreach"],
    featured: false,
  },
  {
    slug: "kings-college-summer-school",
    role: "STEM Programme Participant",
    org: "King's College Pre-University Summer School",
    logo: "",
    location: "United Kingdom",
    dates: "2024",
    meta: "2024 · United Kingdom ·",
    badge: "Programme",
    desc: "Completed a STEM module covering Physics, Chemistry, and Mathematics, with exposure to topics connected to aerospace including electromagnetism.",
    bullets: [
      "Completed a STEM module covering Physics, Chemistry, and Mathematics with exposure to aerospace-adjacent topics including electromagnetism",
      "Strengthened interest in applying fundamental scientific principles to engineering problems",
    ],
    tags: ["STEM", "Physics", "Aerospace", "Mathematics"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Magnetorquers in CubeSat Attitude Control",
    org: "Independent Aerospace Research",
    meta: "2026",
    desc: "Conducted independent research investigating the use of magnetorquers for controlling CubeSat rotation. Combined physics, mathematical modelling, and an independently developed C++ simulation to model satellite behaviour and determine key rotational parameters.",
    tags: ["Aerospace Engineering", "CubeSats", "Attitude Control", "C++", "Mathematical Modelling"],
    featured: true,
  },
  {
    name: "Multi-University Application Platform",
    org: "Independent Development Project",
    meta: "2026",
    desc: "Developed a platform enabling students to apply to multiple universities through a single system. Took the concept from idea to a working prototype currently undergoing testing.",
    tags: ["Software Development", "Product Design", "Problem Solving"],
    featured: true,
  },
  {
    name: "Sign Language to Speech",
    org: "Emerging Technologies Programme",
    meta: "2025",
    desc: "Served as main programmer on a team developing a technology platform that translates sign language into speech. The project was part of an eight-week emerging technologies programme and was recognised for Most Innovative Idea and Best Presentation.",
    tags: ["Programming", "Emerging Technology", "Accessibility", "Teamwork"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🌍",
    title: "World Schools Debate Championship — Ghana Representative",
    meta: "National Debate Team · 2025",
    detail: "Selected from 300 students to a final group of 3 to represent Ghana at the World Schools Debate Championship.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "Nairobi Schools Debate Championship — Gold Cup",
    meta: "Debate · 2025",
    detail: "Part of the Gold Cup-winning team at the Nairobi Schools Debate Championship.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Ghana National STEM Olympiad — Silver",
    meta: "Academic Competition",
    detail: "Silver medal at the Ghana National STEM Olympiad.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "International STEM Olympiad — 2× Bronze",
    meta: "Academic Competition",
    detail: "Two bronze medals at the International STEM Olympiad.",
    link: "",
    featured: true,
  },
  {
    icon: "💡",
    title: "Sign Language to Speech — Most Innovative Idea & Best Presentation",
    meta: "Emerging Technologies Programme · 2025",
    detail: "Team project recognised for Most Innovative Idea and Best Presentation at the eight-week Emerging Technologies Programme.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "MIT Introduction to Aerospace",
    meta: "Course",
    detail: "Completed the MIT Introduction to Aerospace course.",
    link: "",
    featured: false,
  },
  {
    icon: "🎓",
    title: "King's College Pre-University Summer School — STEM Programme",
    meta: "2024",
    detail: "Completed a STEM module covering Physics, Chemistry, and Mathematics, with exposure to aerospace and electromagnetism at King's College.",
    link: "",
    featured: false,
  },
];

/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Aerospace Engineering & Satellite Systems",
    outlet: "CubeSat attitude control, magnetorquer modelling, and orbital mechanics",
    link: "",
  },
  {
    title: "Robotics & Engineering Design",
    outlet: "Hands-on robotics, systems engineering, and practical problem-solving",
    link: "",
  },
  {
    title: "Software Development & Emerging Technology",
    outlet: "C++ simulation, platform development, and accessibility-focused technology",
    link: "",
  },
  {
    title: "Physics & Applied Mathematics",
    outlet: "Mathematical modelling, electromagnetism, and computational methods",
    link: "",
  },
];

/* ---- Leadership, teaching & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "55+", label: "Students Taught" },
    { value: "3+", label: "Years Active" },
    { value: "3", label: "Organisations Served" },
  ],
  orgs: [
    {
      name: "School Robotics Club",
      role: "Founder & President · Since 2026",
      desc: "Proposed and launched the school's first robotics club, establishing it as an official student organisation from an initial pilot meeting. Lead weekly activities and hands-on engineering projects as president, creating opportunities for students to explore robotics and engineering.",
    },
    {
      name: "STEM Outreach",
      role: "Volunteer Instructor · 2025",
      desc: "Trained 30+ students at a tuition-free school in 3D modelling and 25+ students in C++ programming during a summer bootcamp. Focused on making technical concepts accessible through practical, hands-on learning.",
    },
    {
      name: "Senior Council",
      role: "Secretary · 2026",
      desc: "Serve as Senior Council Secretary, helping organise school events and fundraising initiatives for student and senior-class activities. The role has strengthened the ability to coordinate teams, manage responsibilities, and communicate across different groups within the school community.",
    },
  ],
};

/* ---- Activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🗣️",
    name: "Ghana National Debate Team",
    desc: "Selected from 300 students to a final group of 3 to represent Ghana at the World Schools Debate Championship. Competed as a speaker for the National Debate Team and was part of the Gold Cup-winning team at the Nairobi Schools Debate Championship.",
  },
  {
    icon: "🎾",
    name: "Tennis",
    desc: "Competitive tennis player, selected to represent school at the International Schools of Ghana Tennis Competition.",
  },
  {
    icon: "🏅",
    name: "STEM Olympiads",
    desc: "Competed in national and international STEM Olympiad competitions, earning a Silver at the Ghana National STEM Olympiad and two Bronze medals at the International STEM Olympiad.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["C++", "Software Development", "Web Development", "Simulation Development"],
  },
  {
    group: "Tools & Technologies",
    items: ["3D Modelling", "CAD", "Mathematical Modelling", "C++ Simulation"],
  },
  {
    group: "Specialised Expertise",
    items: ["Aerospace Engineering", "CubeSat Systems & Attitude Control", "Robotics", "Emerging Technology", "Platform Development"],
  },
  {
    group: "Languages",
    items: ["English", "French"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "American International School of Accra",
    location: "Accra, Ghana",
    level: "Grade 12 — IB Diploma Programme",
    dates: "2025 – 2026",
    gpa: "",   // ⚠️ Not provided in portfolio content
    coursework: [
      "Mathematics AA HL",
      "Physics HL",
      "Digital Society HL",
      "Chemistry SL",
      "English A Language & Literature SL",
      "French B",
    ],
  },
];

/* ⚠️ No standardised test scores mentioned in portfolio content */
export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research & Experience", to: "/work" },
  { label: "Area of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Teaching & Community", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
