export const careerSources = {
    linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/adam-eccles-616b1427b/" },
    valorant: { label: "Liquipedia · VALORANT", url: "https://liquipedia.net/valorant/Ec1s" },
    counterstrike: { label: "Liquipedia · Counter-Strike", url: "https://liquipedia.net/counterstrike/Ec1s" },
};

// Display titles summarize the linked articles; the academy page shows its update date.
export const esportsPress = [
    {
        publication: "Esports News UK",
        title: "Leading VALORANT teaching at the Saudi Esports Academy",
        author: "Dom Sacco",
        date: "2025-06-17",
        dateLabel: "Updated",
        description: "An interview on designing the academy’s course, coaching aspiring players, and balancing competition with education.",
        url: "https://esports-news.co.uk/?p=74039",
    },
    {
        publication: "ONE Esports",
        title: "100T ec1s on NA and EU VALORANT practice",
        author: "Nigel “Zim947” Zalamea",
        date: "2022-01-27",
        description: "My observations on practice discipline and regional differences after joining 100 Thieves as in-game leader.",
        url: "https://www.oneesports.gg/valorant/100t-ec1s-na-vs-eu-valorant/",
    },
    {
        publication: "App Trigger",
        title: "Adam “ec1s” Eccles on the move to VALORANT and Team Liquid",
        author: "Ty Brody",
        date: "2020-08-30",
        description: "A conversation about moving from Counter-Strike, captaining fish123, and representing Team Liquid.",
        url: "https://apptrigger.com/2020/08/30/adam-ec1s-eccles-team-liquid-valorant/",
    },
    {
        publication: "ESPN",
        title: "Team Liquid sign fish123 roster for VALORANT",
        author: "Arda Ocal",
        description: "Coverage of Team Liquid’s entry into VALORANT with the fish123 roster.",
        date: "2020-08-06",
        url: "https://www.espn.com/gaming/story/_/id/29610096/team-liquid-sign-fish123-roster-valorant",
    },
    {
        publication: "Forbes",
        title: "Why Team Liquid Signed The Fish123 ‘Valorant’ Roster",
        author: "Mike Stubbs",
        date: "2020-08-07",
        description: "An interview about the signing, my commitment to fish123, and the team’s ambitions under Team Liquid.",
        url: "https://www.forbes.com/sites/mikestubbs/2020/08/07/why-team-liquid-signed-the-fish123-valorant-roster/",
    },
];

// Month precision is intentional: some early roster dates are not fully recorded.
// Tech roles, dates, and descriptions supplied in Adam's LinkedIn screenshots.
export const techCareer = [
    {
        id: "auxiliary-digital", organization: "Auxiliary Digital", role: "Forward Deployed Engineer",
        start: "2026-05", end: null, source: "linkedin",
        employmentType: "Full-time", location: "St. Louis, Missouri · On-site",
    },
    {
        id: "automate-army", organization: "Automate Army", role: "Software Engineer",
        start: "2026-01", end: "2026-05", source: "linkedin",
        employmentType: "Internship", location: "United States · Remote",
        description: "Built a typed operations platform with a secure TypeScript/Express API, PostgreSQL/Drizzle data layer, and BigQuery analytics. Delivered Next.js reporting forms with validation and draft recovery, supported by structured logging, Vitest tests, and Docker.",
    },
    {
        id: "maryville-ai-engineer", organization: "Maryville University of Saint Louis", role: "AI Agent & Machine Learning Engineer",
        start: "2025-09", end: "2026-05", source: "linkedin",
        employmentType: "Part-time", location: "St. Louis, Missouri · Hybrid",
        description: "Built course-specific AI agents with source-linked answers and an end-to-end ML pipeline to classify student chats by semantic meaning and analyze resource usage. Tested prompts, source relevance, and citation accuracy to keep responses aligned with course materials.",
    },
    {
        id: "neuralseek", organization: "NeuralSeek", role: "Agentic AI Intern",
        start: "2025-08", end: "2025-09", source: "linkedin",
        employmentType: "Internship", location: "Remote",
        description: "Completed NeuralSeek’s L1–L3 AI certifications and built and deployed a custom no-code AI agent. Analyzed competing AI platforms, contributed to cross-functional go-to-market initiatives, and presented a capstone demonstrating practical AI deployment.",
    },
    {
        id: "maryville-ai-research", organization: "Maryville University of Saint Louis", role: "AI Research Intern",
        start: "2025-01", end: "2025-09", source: "linkedin",
        employmentType: "Internship", location: "St. Louis, Missouri · Hybrid",
        description: "Built AI learning tools and intelligent assistants for university operations and education. Collaborated with faculty on predictive and scenario-based models, including custom LLM bots for SOC analyst training and graduate nursing decision-making.",
    },
];

export const esportsCareer = [
    {
        id: "colour-caster", organization: "VCL Challengers Northern Europe / Intel Monsters Reloaded", role: "Colour Caster",
        discipline: "Broadcast", start: "2025-10", end: "2026-05",
        description: "Provided live analysis and commentary across VALORANT and Counter-Strike 2, explaining tactical decisions and key moments as the action unfolds.",
    },
    {
        id: "maryville-coach", organization: "Maryville University VALORANT Team", role: "Assistant Coach",
        discipline: "Coaching", start: "2024-08", end: "2026-05",
        highlights: [
            "Coached players one-on-one, using focused VOD reviews to build confidence and identify actionable improvements.",
            "Guided improvement-focused sessions for 10+ academy players, balancing individual development with team performance.",
        ],
    },
    {
        id: "saudi-academy", organization: "Saudi Esports Academy", role: "Lead Instructor · VALORANT Program",
        discipline: "Teaching", start: "2024-06", end: "2024-08",
        highlights: [
            "Designed and led an intensive eight-week curriculum for 50+ students, combining tactical lectures, VOD analysis, and personalized coaching.",
            "Organized a tournament to give students structured, hands-on competitive experience.",
        ],
    },
    { id: "maryville", organization: "Maryville Esports", role: "Player & team captain", discipline: "VALORANT", start: "2023-08", end: "2026-04", source: "valorant", description: "My final competitive roster before retiring from professional play in April 2026." },
    { id: "broadcast", organization: "VCT / Red Bull Home Ground", role: "Broadcast Analyst", discipline: "Broadcast", start: "2021-08", end: "2023-08", description: "Selected analyst appearances alongside my playing career, including VCT Game Changers EU Finals 2021, VCT Challengers EMEA in 2021 and 2023, and Red Bull Home Ground #3." },
    { id: "velocity", organization: "Velocity Gaming", role: "Player · In-game leader", discipline: "VALORANT", start: "2023-02", end: "2023-05", source: "valorant", description: "Moved to India to compete in VCT Challengers with Velocity Gaming." },
    { id: "100thieves", organization: "100 Thieves", role: "Player · In-game leader", discipline: "VALORANT", start: "2022-01", end: "2022-02", source: "valorant" },
    { id: "nip", organization: "Ninjas in Pyjamas", role: "Player · In-game leader", discipline: "VALORANT", start: "2021-07", end: "2021-12", source: "valorant", description: "Active roster through November 2021; inactive until December." },
    { id: "liquid", organization: "Team Liquid", role: "Player · In-game leader", discipline: "VALORANT", start: "2020-08", end: "2021-05", source: "valorant", description: "Active roster through February 2021; inactive until May." },
    { id: "fish123", organization: "fish123", role: "Player · Captain & in-game leader", discipline: "VALORANT", start: "2020-04", end: "2020-08", source: "valorant", description: "Led the free-agent roster that became Team Liquid’s first VALORANT lineup in 2020." },
    { id: "vexed", organization: "Vexed Gaming", role: "Player · Trial", discipline: "Counter-Strike", start: "2019-08", end: "2019-12", source: "counterstrike" },
    { id: "fierce", organization: "Fierce Esports", role: "Player", discipline: "Counter-Strike", start: "2019-03", end: "2019-08", source: "counterstrike" },
    { id: "london", organization: "London Esports", role: "Player", discipline: "Counter-Strike", start: "2018-11", end: "2019-03", source: "counterstrike" },
    { id: "fnatic", organization: "Fnatic Academy", role: "Player", discipline: "Counter-Strike", start: "2018-04", end: "2018-10", source: "counterstrike", description: "Joined Fnatic Academy after winning the GAMERZ esports reality competition." },
    { id: "wehawt", organization: "WE HAWT", role: "Player", discipline: "Counter-Strike", start: "2018-01", end: "2018-03", source: "counterstrike" },
    { id: "radix", organization: "RADIX", role: "Player", discipline: "Counter-Strike", start: "2017-09", end: "2018-01", source: "counterstrike" },
    { id: "infused", organization: "Team Infused", role: "Player", discipline: "Counter-Strike", start: "2017-06", end: "2017-09", source: "counterstrike", description: "Competed in London’s televised Gfinity Elite Series." },
];

export const newestFirst = (entries) => [...entries].sort((a, b) =>
    (b.end || "9999").localeCompare(a.end || "9999") || b.start.localeCompare(a.start)
);

export const formatCareerDate = (value) => {
    if (!value) return "Present";
    const [year, month] = value.split("-");
    if (!month) return year;
    return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Number(month) - 1]} ${year}`;
};
