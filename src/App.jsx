import { useEffect, useRef, useState } from "react";

const links = {
    github: "https://github.com/caJoey",
    linkedin: "https://www.linkedin.com/in/joey-capps/",
    email: "mailto:joeylcapps@gmail.com",
    resume: "/JoeyCappsResume.pdf",
};

const skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Azure", "C", "C++", "Java"];

const resumeEducation = [
    {
        school: "Washington State University",
        date: "May 2027",
        location: "Pullman, WA",
        degree: "M.S. Computer Science - Mahmoud Dillsi Graduate Fellowship",
        details: ["GPA: 4.0 / 4.0", "Relevant coursework: Algorithms, ML, AI, Advanced Programming Languages"],
    },
    {
        school: "Western Washington University",
        date: "December 2024",
        location: "Bellingham, WA",
        degree: "B.S. Computer Science",
        details: ["Relevant coursework: Operating Systems, Object Oriented Design, Databases, Machine Learning"],
    },
];

const resumeExperience = [
    {
        title: "Software Development Engineer Intern",
        org: "Amazon Web Services",
        date: "May 2026 - August 2026",
        location: "Seattle, WA",
        bullets: ["Joining the Elastic Block Store (EBS) team for an SDE internship at AWS using C++"],
    },
    {
        title: "Founding Software Engineer",
        org: "Early-stage educational platform startup",
        date: "May 2025 - May 2026",
        location: "Remote",
        bullets: [
            "Built a subscription-based educational platform that allows people to create and share modularized courses.",
            "Led backend system architecture and development using PostgreSQL, Node.js, Express.js, Socket.IO, React, RESTful APIs, HTTP, and Azure.",
            "Implemented interactive frontend features using React and TailwindCSS.",
            "Achieved 80%+ backend test coverage with Vitest, Supertest, and ephemeral Dockerized PostgreSQL instances integrated into GitHub Actions.",
            "Authored technical documentation and grew the engineering team to 3 developers.",
        ],
    },
];

const resumeInvolvement = [
    {
        title: "WWU Competitive Programming Club",
        date: "September 2022 - December 2024",
        location: "Bellingham, WA",
        bullets: [
            "Placed 3rd in Washington and 34th in the PNW at ICPC 2024 Division 1 using Python.",
            "Placed 1st in Washington and 5th in the Pacific Northwest at ICPC PNW 2022 Division 2 using Java.",
        ],
    },
];

const stats = [
    ["4.0", "Graduate GPA at Washington State University"],
    ["3", "Developers grown on an early-stage engineering team"],
    ["3rd", "Washington ICPC Division 1 placement in 2024"],
];

const timeline = [
    {
        date: "May 2027",
        title: "M.S. Computer Science - Washington State University",
        body: "Mahmoud Dillsi Graduate Fellowship. Coursework in algorithms, ML, AI, and programming languages.",
    },
    {
        date: "May 2026 - Aug 2026",
        title: "Software Development Engineer Intern - Amazon Web Services",
        body: "Joining the Elastic Block Store team for a summer SDE internship.",
    },
    {
        date: "May 2025 - May 2026",
        title: "Founding Software Engineer - Educational Platform Startup",
        body: "Built a subscription-based course platform, led backend architecture, integrated CI/CD, and helped grow the engineering team to three developers.",
    },
];

const projects = [
    {
        title: "Poker Hand Replayer",
        stack: "JavaScript - HTML - CSS",
        href: "https://github.com/caJoey/Poker_Hand_Replayer",
        body: "A browser-based Texas Hold'Em hand history visualizer that accepts standard online poker hand text and steps through each action with play, pause, reset, and next controls.",
    },
    {
        title: "Card Counting Simulator",
        stack: "Java",
        href: "https://github.com/caJoey/Card_Counting_Simulator",
        body: "A blackjack simulation that models card counting and gameplay, prints hand summaries with count information, and supports edge analysis using test output.",
    },
    {
        title: "Poker Online",
        stack: "React - Node.js - Socket.IO",
        href: "https://github.com/caJoey/Poker_Online",
        body: "A real-time No Limit Texas Hold'Em web app supporting private Sit & Go tournaments for up to nine players, with server-processed actions and Socket.IO table updates.",
    },
    {
        title: "Batting Average Prediction",
        stack: "Python - Pandas - BeautifulSoup - Playwright",
        href: "https://github.com/caJoey/Batting_Averge_Prediction",
        body: "A data science and machine learning project that scrapes MLB stats, cleans player data, engineers features, and compares batting average predictions against projection systems.",
    },
    {
        title: "Fog of War Chess",
        stack: "Python - React - Flask - JavaScript",
        href: "https://github.com/caJoey/Fog-of-War-Chess",
        body: "A 5x5 dark chess web app with simplified minichess rules, fog-of-war visibility, random and minimax agents, and evaluation scripts for head-to-head matches.",
    },
];

function Header({ isDark, onToggleTheme }) {
    return (
        <header className="sticky top-0 z-10 mx-auto flex w-[min(1120px,calc(100%-24px))] flex-wrap items-center justify-between gap-3 py-3 backdrop-blur-xl sm:w-[min(1120px,calc(100%-32px))] sm:gap-4 sm:py-4">
            <a
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/95 font-extrabold text-crimson-600 shadow-soft dark:bg-[#1b1b1b]/95 dark:text-crimson-300 dark:shadow-glow sm:h-11 sm:w-11"
                href="#home"
                aria-label="Joey Capps home"
            >
                JC
            </a>
            <nav
                className="order-3 grid w-full grid-cols-4 gap-1 rounded-lg border border-slate-900/10 bg-white/95 px-2 py-2 text-center text-xs font-bold text-slate-800 dark:border-white/10 dark:bg-[#1b1b1b]/95 dark:text-slate-100 sm:order-none sm:flex sm:w-auto sm:gap-5 sm:px-5 sm:text-sm lg:gap-8"
                aria-label="Primary navigation"
            >
                <a className="rounded-md px-1 transition-all hover:bg-crimson-600/10 hover:text-crimson-600 dark:hover:bg-crimson-300/10 dark:hover:text-crimson-300" href="#about">
                    About
                </a>
                <a className="rounded-md px-1 transition-all hover:bg-crimson-600/10 hover:text-crimson-600 dark:hover:bg-crimson-300/10 dark:hover:text-crimson-300" href="#projects">
                    Projects
                </a>
                <a className="rounded-md px-1 transition-all hover:bg-crimson-600/10 hover:text-crimson-600 dark:hover:bg-crimson-300/10 dark:hover:text-crimson-300" href="#resume">
                    Resume
                </a>
                <a className="rounded-md px-1 transition-all hover:bg-crimson-600/10 hover:text-crimson-600 dark:hover:bg-crimson-300/10 dark:hover:text-crimson-300" href="#contact">
                    Contact
                </a>
            </nav>
            <button
                className="grid h-10 w-10 place-items-center rounded-lg border border-slate-900/10 bg-white/95 text-xl text-slate-950 shadow-soft transition hover:border-crimson-600 dark:border-white/10 dark:bg-[#1b1b1b]/95 dark:text-white dark:shadow-glow dark:hover:border-crimson-300 sm:h-11 sm:w-11"
                type="button"
                aria-label="Toggle dark mode"
                onClick={onToggleTheme}
            >
                {isDark ? "◐" : "●"}
            </button>
        </header>
    );
}

function HeroCanvas({ isDark }) {
    const canvasRef = useRef(null);
    const frameRef = useRef(0);
    const phaseRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            const scale = window.devicePixelRatio || 1;
            canvas.width = Math.max(1, Math.floor(rect.width * scale));
            canvas.height = Math.max(1, Math.floor(rect.height * scale));
            ctx.setTransform(scale, 0, 0, scale, 0, 0);
        };

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            phaseRef.current += 0.004;
            const phase = phaseRef.current;

            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, isDark ? "#211018" : "#f8c37a");
            gradient.addColorStop(0.38, isDark ? "#4a1f24" : "#f0a85f");
            gradient.addColorStop(0.68, isDark ? "#221819" : "#d48b4b");
            gradient.addColorStop(1, isDark ? "#0d0d10" : "#7a4631");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            const drawSun = (x, y, radius, color, glow) => {
                const sunGlow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 2.3);
                sunGlow.addColorStop(0, glow);
                sunGlow.addColorStop(1, "rgba(255, 220, 150, 0)");
                ctx.fillStyle = sunGlow;
                ctx.beginPath();
                ctx.arc(x, y, radius * 2.3, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            };

            drawSun(width * 0.63, height * 0.2, Math.min(width, height) * 0.095, "#ffe1a1", "rgba(255, 210, 130, 0.34)");
            drawSun(width * 0.79, height * 0.16, Math.min(width, height) * 0.062, "#ffefbf", "rgba(255, 230, 170, 0.24)");

            const drawShootingStar = (seed, yFactor, length, opacity) => {
                const travel = ((phase * (0.045 + seed * 0.008) + seed * 0.31) % 1.35) - 0.18;
                const x = width * travel;
                const y = height * yFactor + Math.sin(phase * 1.4 + seed) * height * 0.01;
                const trailLength = width * length;
                const tailX = x - trailLength;
                const tailY = y - trailLength * 0.26;
                const trail = ctx.createLinearGradient(tailX, tailY, x, y);

                trail.addColorStop(0, `rgba(255, 238, 196, 0)`);
                trail.addColorStop(0.45, `rgba(255, 238, 196, ${opacity * 0.35})`);
                trail.addColorStop(1, `rgba(255, 255, 240, ${opacity})`);

                ctx.strokeStyle = trail;
                ctx.lineWidth = Math.max(1.2, width * 0.004);
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(x, y);
                ctx.stroke();

                ctx.fillStyle = `rgba(255, 248, 218, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, Math.max(1.8, width * 0.005), 0, Math.PI * 2);
                ctx.fill();
            };

            drawShootingStar(1, 0.27, 0.18, isDark ? 0.82 : 0.58);
            drawShootingStar(2, 0.39, 0.13, isDark ? 0.58 : 0.38);
            drawShootingStar(3, 0.22, 0.1, isDark ? 0.5 : 0.32);

            const drawDune = (baseY, amplitude, fill, offset, ridge = "rgba(255,255,255,0.16)") => {
                ctx.beginPath();
                ctx.moveTo(0, height);
                for (let x = 0; x <= width + 8; x += 8) {
                    const y =
                        baseY +
                        Math.sin(x * 0.008 + phase + offset) * amplitude +
                        Math.sin(x * 0.018 + offset) * amplitude * 0.28;
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(width, height);
                ctx.closePath();
                ctx.fillStyle = fill;
                ctx.fill();
                ctx.strokeStyle = ridge;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            };

            drawDune(height * 0.58, 18, isDark ? "rgba(104, 52, 42, 0.58)" : "rgba(196, 121, 62, 0.74)", 0.5);
            drawDune(height * 0.72, 30, isDark ? "rgba(90, 38, 35, 0.72)" : "rgba(171, 91, 45, 0.84)", 2.4);
            drawDune(height * 0.87, 24, isDark ? "rgba(26, 18, 17, 0.95)" : "rgba(98, 55, 38, 0.92)", 4.2, "rgba(255,255,255,0.10)");

            const drawJawa = (x, y, scale) => {
                const robe = isDark ? "#15100d" : "#3a2318";
                const hood = isDark ? "#0d0a08" : "#24150f";
                const eye = "#ffd166";

                ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
                ctx.beginPath();
                ctx.ellipse(x, y + scale * 28, scale * 16, scale * 5, 0, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = robe;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.quadraticCurveTo(x - scale * 18, y + scale * 18, x - scale * 13, y + scale * 42);
                ctx.lineTo(x + scale * 13, y + scale * 42);
                ctx.quadraticCurveTo(x + scale * 18, y + scale * 18, x, y);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = hood;
                ctx.beginPath();
                ctx.moveTo(x, y - scale * 9);
                ctx.quadraticCurveTo(x - scale * 14, y + scale * 8, x - scale * 10, y + scale * 24);
                ctx.lineTo(x + scale * 10, y + scale * 24);
                ctx.quadraticCurveTo(x + scale * 14, y + scale * 8, x, y - scale * 9);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = eye;
                ctx.beginPath();
                ctx.arc(x - scale * 4, y + scale * 11, scale * 1.8, 0, Math.PI * 2);
                ctx.arc(x + scale * 4, y + scale * 11, scale * 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = isDark ? "#2b1a14" : "#5b3525";
                ctx.lineWidth = Math.max(1, scale * 1.2);
                ctx.beginPath();
                ctx.moveTo(x - scale * 12, y + scale * 24);
                ctx.lineTo(x + scale * 12, y + scale * 24);
                ctx.stroke();
            };

            drawJawa(width * 0.22, height * 0.72, Math.max(0.75, width / 620));
            drawJawa(width * 0.29, height * 0.75, Math.max(0.62, width / 760));
            drawJawa(width * 0.72, height * 0.7, Math.max(0.7, width / 700));

            frameRef.current = requestAnimationFrame(draw);
        };

        resizeCanvas();
        draw();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(frameRef.current);
        };
    }, [isDark]);

    return <canvas ref={canvasRef} className="block min-h-[300px] w-full sm:min-h-[420px] lg:min-h-[480px]" width="640" height="640" />;
}

function ButtonLink({ children, href, variant = "secondary", download = false }) {
    const base =
        "inline-flex min-h-[46px] max-w-full items-center justify-center rounded-lg border px-4 text-center font-extrabold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-crimson-600 focus:ring-offset-2 focus:ring-offset-[#faf8f4] dark:focus:ring-crimson-300 dark:focus:ring-offset-[#141414] sm:px-5";
    const styles =
        variant === "primary"
            ? "border-[#5f1020] bg-[#7a1828] text-white shadow-lg shadow-crimson-600/30 hover:border-[#981e32] hover:bg-[#981e32] hover:shadow-xl hover:shadow-crimson-600/40 dark:border-crimson-300 dark:bg-crimson-600 dark:hover:bg-crimson-500"
            : "border-slate-900/10 bg-white text-slate-950 hover:border-crimson-600 hover:bg-[#fff7f4] dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]";

    return (
        <a
            className={`${base} ${styles}`}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            download={download}
        >
            {children}
        </a>
    );
}

function ResumeBlock({ title, children }) {
    return (
        <div className="rounded-lg border border-slate-900/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#1b1b1b] dark:shadow-none">
            <h3 className="mb-5 text-xl font-extrabold">{title}</h3>
            {children}
        </div>
    );
}

function ResumeItem({ title, subtitle, date, location, bullets }) {
    return (
        <article className="border-t border-slate-900/10 py-5 first:border-t-0 first:pt-0 last:pb-0 dark:border-white/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                    <h4 className="font-extrabold">{title}</h4>
                    <p className="text-slate-800 dark:text-slate-100">{subtitle}</p>
                </div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                    {date} {location ? `- ${location}` : ""}
                </p>
            </div>
            {bullets?.length > 0 && (
                <ul className="mt-4 grid gap-2 text-slate-800 dark:text-slate-100">
                    {bullets.map((bullet) => (
                        <li className="grid grid-cols-[auto_1fr] gap-3" key={bullet}>
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-crimson-600 dark:bg-crimson-300" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}

function App() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div id="home" className="min-h-screen bg-[#faf8f4] text-cougar dark:bg-[#141414] dark:text-ink-100">
            <Header isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />

            <main>
                <section className="section grid items-center gap-10 pt-8 lg:min-h-[calc(100vh-82px)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pt-9">
                    <div>
                        <p className="eyebrow">Computer Science Graduate Student</p>
                        <h1 className="mb-6 max-w-[11ch] text-[clamp(3rem,17vw,4.6rem)] font-extrabold leading-[0.92] sm:text-[clamp(3.2rem,9vw,6.8rem)]">
                            Joey Capps
                        </h1>
                        <p className="max-w-2xl text-lg text-slate-800 dark:text-slate-100 sm:text-xl">
                            Software engineer focused on backend architecture, interactive products, and polished full-stack
                            experiences across React, Node.js, Flask, Socket.IO, PostgreSQL, MongoDB, and Azure.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <ButtonLink href="#projects" variant="primary">
                                View projects
                            </ButtonLink>
                            <ButtonLink href="#resume">Resume</ButtonLink>
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-2 text-sm font-bold sm:flex sm:flex-wrap sm:gap-3" aria-label="Profile links">
                            <a className="rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-crimson-600 hover:bg-[#fff7f4] hover:shadow-md dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]" href={links.github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            <a className="rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-crimson-600 hover:bg-[#fff7f4] hover:shadow-md dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]" href={links.linkedin} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                            <a className="rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-crimson-600 hover:bg-[#fff7f4] hover:shadow-md dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]" href={links.email}>
                                Email
                            </a>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-crimson-600/15 bg-white shadow-soft dark:border-crimson-300/20 dark:bg-[#151515] dark:shadow-glow" aria-label="Portfolio snapshot">
                        <HeroCanvas isDark={isDark} />
                        <div className="absolute bottom-3 left-3 right-3 grid gap-1 rounded-lg border border-crimson-300/40 bg-crimson-700/90 p-3 text-sm text-white shadow-lg backdrop-blur-xl dark:border-crimson-300/30 dark:bg-[#1b1b1b]/92 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-[calc(100%-32px)] sm:p-4 sm:text-base">
                            <span className="text-xs font-bold text-crimson-300 dark:text-crimson-300">Current Focus</span>
                            <strong>AWS EBS SDE Internship</strong>
                            <small className="font-bold text-white/90">Seattle, WA - Summer 2026</small>
                        </div>
                    </div>
                </section>

                <section className="section grid gap-4 pt-6 sm:grid-cols-3" aria-label="Highlights">
                    {stats.map(([value, label]) => (
                        <article className="rounded-lg border border-slate-900/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#1b1b1b] dark:shadow-none" key={value}>
                            <strong className="mb-2 block text-3xl leading-none text-crimson-600 dark:text-wheat">{value}</strong>
                            <span className="text-slate-800 dark:text-slate-100">{label}</span>
                        </article>
                    ))}
                </section>

                <section className="section grid gap-10 lg:grid-cols-[0.86fr_1.14fr]" id="about">
                    <div>
                        <p className="eyebrow">About</p>
                        <h2 className="heading">Engineer with a systems mindset and product instincts.</h2>
                    </div>
                    <div className="max-w-3xl space-y-4 text-slate-800 dark:text-slate-100">
                        <p>
                            Joey is pursuing an M.S. in Computer Science at Washington State University after earning a B.S.
                            in Computer Science from Western Washington University. His work spans cloud-hosted learning tools,
                            real-time games, backend services, and user-facing React interfaces.
                        </p>
                        <p>
                            He has led backend architecture for an early-stage educational platform, built CI-backed test suites
                            with Dockerized PostgreSQL, and contributed across the stack with Node.js, Express, Socket.IO, React,
                            TailwindCSS, MongoDB, and Azure.
                        </p>
                    </div>
                </section>

                <section className="section grid gap-4" aria-label="Experience and education">
                    {timeline.map((item) => (
                        <article className="grid gap-2 rounded-lg border border-slate-900/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#1b1b1b] dark:shadow-none md:grid-cols-[180px_1fr] md:gap-6" key={item.title}>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-100">{item.date}</span>
                            <div>
                                <h3 className="mb-2 text-lg font-extrabold">{item.title}</h3>
                                <p className="text-slate-800 dark:text-slate-100">{item.body}</p>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="section" id="projects">
                    <div className="mb-8 max-w-3xl">
                        <p className="eyebrow">Projects</p>
                        <h2 className="heading">Selected work from games, archives, and real-time systems.</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => (
                            <article className="flex min-h-[240px] flex-col justify-between rounded-lg border border-slate-900/10 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:border-crimson-600 hover:shadow-xl hover:shadow-crimson-600/10 dark:border-white/10 dark:bg-[#1b1b1b] dark:shadow-none dark:hover:border-crimson-300 dark:hover:bg-[#201719] sm:p-6 xl:min-h-[310px]" key={project.title}>
                                <div className="mb-9 flex flex-col gap-2 text-sm font-bold text-slate-700 dark:text-slate-100">
                                    <span>{project.stack}</span>
                                    <a className="w-fit text-crimson-600 hover:text-crimson-500 dark:text-crimson-300" href={project.href} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </div>
                                <div>
                                    <h3 className="mb-3 text-xl font-extrabold">{project.title}</h3>
                                    <p className="text-slate-800 dark:text-slate-100">{project.body}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section" id="resume">
                    <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div className="max-w-3xl">
                            <p className="eyebrow">Resume</p>
                            <h2 className="heading">Experience, education, and technical strengths.</h2>
                            <p className="text-slate-800 dark:text-slate-100">
                                A web version of the resume with the original PDF available for download.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                            <ButtonLink href={links.resume} variant="primary" download>
                                Download PDF
                            </ButtonLink>
                            <ButtonLink href={links.resume}>Open PDF</ButtonLink>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <ResumeBlock title="Work Experience">
                            {resumeExperience.map((item) => (
                                <ResumeItem
                                    key={`${item.title}-${item.org}`}
                                    title={item.title}
                                    subtitle={item.org}
                                    date={item.date}
                                    location={item.location}
                                    bullets={item.bullets}
                                />
                            ))}
                        </ResumeBlock>

                        <ResumeBlock title="Education">
                            {resumeEducation.map((item) => (
                                <ResumeItem
                                    key={item.school}
                                    title={item.school}
                                    subtitle={item.degree}
                                    date={item.date}
                                    location={item.location}
                                    bullets={item.details}
                                />
                            ))}
                        </ResumeBlock>

                        <ResumeBlock title="Involvement">
                            {resumeInvolvement.map((item) => (
                                <ResumeItem
                                    key={item.title}
                                    title={item.title}
                                    subtitle="Competitive programming"
                                    date={item.date}
                                    location={item.location}
                                    bullets={item.bullets}
                                />
                            ))}
                        </ResumeBlock>

                        <ResumeBlock title="Technical Skills">
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        className="rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-950 dark:border-white/10 dark:bg-[#242424] dark:text-white"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </ResumeBlock>
                    </div>
                </section>

                <section className="section grid items-center gap-8 border-t border-slate-900/10 dark:border-white/10 lg:grid-cols-[1fr_auto]" id="contact">
                    <div>
                        <p className="eyebrow">Contact</p>
                        <h2 className="heading">Let's build something sharp.</h2>
                        <p className="max-w-2xl text-slate-800 dark:text-slate-100">
                            Open to software engineering conversations, collaborative projects, and roles involving backend
                            systems, real-time applications, or full-stack product development.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                        <ButtonLink href={links.email} variant="primary">
                            joeylcapps@gmail.com
                        </ButtonLink>
                        <ButtonLink href={links.github}>GitHub</ButtonLink>
                        <ButtonLink href={links.linkedin}>LinkedIn</ButtonLink>
                    </div>
                </section>
            </main>

            <footer className="mx-auto flex w-[min(1120px,calc(100%-24px))] flex-col gap-3 border-t border-slate-900/10 py-8 text-slate-800 dark:border-white/10 dark:text-slate-100 sm:w-[min(1120px,calc(100%-32px))] sm:flex-row sm:justify-between">
                <span>&copy; {new Date().getFullYear()} Joey Capps</span>
                <a className="font-bold hover:text-crimson-600 dark:hover:text-crimson-300" href="#home">
                    Back to top
                </a>
            </footer>
        </div>
    );
}

export default App;
