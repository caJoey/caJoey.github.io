import { useEffect, useRef, useState } from "react";

const links = {
    github: "https://github.com/caJoey",
    linkedin: "https://www.linkedin.com/in/joey-capps/",
    email: "mailto:joeylcapps@gmail.com",
    phone: "tel:+12069306019",
    resume: "/JoeyCappsResume.pdf",
};

function updateThemeFavicon(theme) {
    const faviconSvgs = {
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#171719"/><path d="M14 44c7-10 15-15 24-15 5 0 9 1 12 3" fill="none" stroke="#e7a4af" stroke-width="5" stroke-linecap="round"/><path d="M12 50c9-8 19-12 31-12 4 0 8 .4 12 1.4" fill="none" stroke="#d7c6a1" stroke-width="4" stroke-linecap="round"/><path d="M19 17h9v18c0 6-4 10-10 10-2.5 0-4.7-.6-6.4-1.8l3-6c.9.6 1.8.9 2.8.9 1.7 0 2.6-1 2.6-3V17Z" fill="#faf8f4"/><path d="M49 42c-2.4 2-5.2 3-8.6 3-7.3 0-12.7-5.1-12.7-12.3S33 20.4 40.5 20.4c3.2 0 6 .9 8.3 2.8l-4.2 5.8c-1.1-.9-2.3-1.4-3.7-1.4-3 0-5.1 2.1-5.1 5.1s2.1 5.1 5.1 5.1c1.5 0 2.8-.5 4-1.5L49 42Z" fill="#faf8f4"/></svg>`,
        aero: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a8f1ff"/><stop offset="1" stop-color="#0788ac"/></linearGradient><linearGradient id="duck" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fffba1"/><stop offset="1" stop-color="#f3a929"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#water)"/><path d="M5 17C17 4 38 5 54 13" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="5" stroke-linecap="round"/><ellipse cx="29" cy="41" rx="17" ry="11" fill="url(#duck)"/><circle cx="39" cy="27" r="11" fill="url(#duck)"/><path d="m47 27 11 4-11 4z" fill="#f17b2d"/><circle cx="42" cy="24" r="1.7" fill="#15455a"/><ellipse cx="25" cy="36" rx="7" ry="3" fill="#fff" fill-opacity=".55"/></svg>`,
    };
    const svg = faviconSvgs[theme];
    const href = svg ? `data:image/svg+xml,${encodeURIComponent(svg)}` : "/favicon.svg?v=2";
    document.querySelectorAll('link[rel~="icon"]').forEach((icon) => {
        icon.href = href;
    });
}
const skills = ["Python", "C++", "Golang", "HTML", "CSS", "JavaScript", "Node.js", "React", "SQL", "Azure", "AWS", "C", "Java"];

const resumeEducation = [
    {
        school: "Washington State University",
        date: "December 2026",
        location: "Pullman, WA",
        degree: "M.S. Computer Science - Mahmoud Dillsi Graduate Fellowship",
        details: ["GPA: 4.0 / 4.0", "Relevant coursework: Algorithms, ML, AI, Advanced Programming Languages"],
    },
    {
        school: "Western Washington University",
        date: "December 2024",
        location: "Bellingham, WA",
        degree: "B.S. Computer Science",
        details: [],
    },
];

const resumeExperience = [
    {
        title: "Software Development Engineer Intern",
        org: "Amazon Web Services",
        date: "June 2026 - September 2026",
        location: "Seattle, WA",
        bullets: [
            "Joined the Elastic Block Store (EBS) server team for the summer and learned about virtual HDDs and SSDs.",
            "Built two load balancers in C++ and tested them using Golang, reducing max latency on key disk writes by 98%.",
        ],
    },
    {
        title: "Founding Software Engineer",
        org: "Early-stage educational platform startup",
        date: "May 2025 - Present",
        location: "Remote",
        bullets: [
            "Built a subscription-based educational platform that allows people to create and share modularized courses.",
            "Leading backend system architecture and development using PostgreSQL, Node.js, Express.js, Socket.IO, React, RESTful APIs, HTTP, and Azure.",
            "Implemented a dynamic frontend using React and TailwindCSS.",
            "Achieved 80%+ backend test coverage with Vitest, Supertest, and ephemeral Dockerized PostgreSQL instances, integrated into a CI/CD pipeline via GitHub Actions.",
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
            "Placed 3rd in Washington and 34th in the PNW at ICPC 2024 Division 1 using Python, earning WWU's first Division 1 medal and its best ICPC result since 2004.",
            "Placed 1st in Washington and 5th in the Pacific Northwest at ICPC PNW 2022 Division 2 using Java.",
        ],
    },
];

const stats = [
    ["4.0", "Graduate GPA at Washington State University"],
    ["98%", "Lower max latency on key EBS disk writes during AWS internship"],
    ["3", "Developers on an early-stage engineering team"],
];

const timeline = [
    {
        date: "December 2026",
        title: "M.S. Computer Science - Washington State University",
        body: "Mahmoud Dillsi Graduate Fellowship. Coursework in algorithms, ML, AI, and programming languages.",
    },
    {
        date: "June 2026 - September 2026",
        title: "Software Development Engineer Intern - Amazon Web Services",
        body: "Built two load balancers in C++ and tested them using Golang for the Elastic Block Store server team, reducing max latency on key disk writes by 98%.",
    },
    {
        date: "May 2025 - Present",
        title: "Founding Software Engineer - Educational Platform Startup",
        body: "Built a subscription-based course platform, led backend architecture, integrated CI/CD, and helped grow the engineering team to three developers.",
    },
];

const projects = [
    {
        title: "Fog of War Chess",
        date: "February 2026 - May 2026",
        stack: "Flask - React - Socket.IO",
        href: "https://github.com/caJoey/Fog-of-War-Chess",
        body: "Built a 5x5 Fog of War chess frontend where clients play an imperfect-information chess variant against custom AI agents. Flask, React, and Socket.IO provide real-time board updates as moves are made.",
    },
    {
        title: "Poker Online",
        date: "January 2025 - April 2025",
        stack: "Node.js - React - Socket.IO - Express.js",
        href: "https://github.com/caJoey/Poker_Online",
        body: "A real-time Texas Hold'Em poker website for playing Sit & Go games with fake money.",
    },
    {
        title: "Covid Memories",
        date: "January 2024 - December 2024",
        stack: "Node.js - Express.js - MongoDB - Azure",
        body: "A website showcasing an audio library of interviews about the COVID-19 pandemic. Collaborated in a team of four across backend and frontend development, maintenance, and weekly planning.",
    },
    {
        title: "Poker Hand Replayer",
        date: "March 2023",
        stack: "JavaScript - HTML - CSS",
        href: "https://github.com/caJoey/Poker_Hand_Replayer",
        body: "A browser-based Texas Hold'em hand history visualizer that steps through each action with playback controls.",
    },
];

function Header({ theme, largeBubblesEnabled, onToggleLargeBubbles }) {
    const navLinkClass = theme === "aero"
        ? "rounded-md px-1 font-bold text-[#16465f] transition-colors hover:text-[#087eaa] focus-visible:outline-none focus-visible:text-[#087eaa]"
        : "rounded-md px-1 transition-colors hover:text-crimson-600 dark:hover:text-crimson-300 focus-visible:outline-none focus-visible:text-crimson-600 dark:focus-visible:text-crimson-300";
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
                className="order-3 grid w-full grid-cols-5 gap-1 rounded-lg border border-slate-900/10 bg-white/95 px-2 py-2 text-center text-xs font-bold text-slate-800 dark:border-white/10 dark:bg-[#1b1b1b]/95 dark:text-slate-100 sm:order-none sm:flex sm:w-auto sm:gap-5 sm:px-5 sm:text-sm lg:gap-8"
                aria-label="Primary navigation"
            >
                <a className={navLinkClass} href="#about">
                    About
                </a>
                <a className={navLinkClass} href="#duck-game">
                    Duck
                </a>
                <a className={navLinkClass} href="#projects">
                    Projects
                </a>
                <a className={navLinkClass} href="#resume">
                    Resume
                </a>
                <a className={navLinkClass} href="#contact">
                    Contact
                </a>
            </nav>
            <div className="flex items-center gap-2">
                <button
                    className="grid h-10 w-10 place-items-center rounded-lg border border-slate-900/10 bg-white/95 text-slate-950 shadow-soft transition hover:border-crimson-600 dark:border-white/10 dark:bg-[#1b1b1b]/95 dark:text-white dark:shadow-glow dark:hover:border-crimson-300 sm:h-11 sm:w-11"
                    type="button"
                    aria-label={`${largeBubblesEnabled ? "Turn off" : "Turn on"} large bubbles`}
                    aria-pressed={largeBubblesEnabled}
                    title={`Large bubbles ${largeBubblesEnabled ? "on" : "off"}`}
                    onClick={onToggleLargeBubbles}
                >
                    <svg className="bubble-toggle-icon" viewBox="0 0 32 32" aria-hidden="true">
                        <defs>
                            <radialGradient id="bubble-toggle-gloss" cx="30%" cy="25%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="55%" stopColor="#a5eff8" />
                                <stop offset="100%" stopColor="#37afd0" />
                            </radialGradient>
                        </defs>
                        <circle cx="16" cy="16" r={largeBubblesEnabled ? 12 : 6} fill="url(#bubble-toggle-gloss)" stroke="#147e9a" strokeWidth="1.5" />
                        <ellipse cx={largeBubblesEnabled ? 12 : 14} cy={largeBubblesEnabled ? 11 : 14} rx={largeBubblesEnabled ? 2.8 : 1.5} ry={largeBubblesEnabled ? 1.8 : 1} fill="white" fillOpacity=".9" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

const rescueDucklingSpots = [
    { x: 0.34, y: 0.27 },
    { x: 0.62, y: 0.32 },
    { x: 0.76, y: 0.52 },
    { x: 0.43, y: 0.56 },
    { x: 0.25, y: 0.42 },
];
const duckRescueDrain = { x: 0.78, y: 0.31 };

function createBubbleSettings(count = 36, fresh = false) {
    return Array.from({ length: count }, () => {
        const scale = 2.3 + Math.random() * 0.9;
        const rise = 110 + Math.random() * 260;
        return {
            id: Math.random().toString(36).slice(2),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 10 + Math.random() * 17,
            scale,
            rise,
            duration: 17 + Math.random() * 22,
            delay: fresh ? 0 : -Math.random() * 32,
            driftStart: `${(Math.random() - 0.5) * 18}px`,
            driftMid: `${(Math.random() - 0.5) * 65}px`,
            driftEnd: `${(Math.random() - 0.5) * 115}px`,
        };
    });
}

function getRescueSharkPositions(phase, count) {
    const paths = [
        { x: 0.48 + Math.sin(phase * 0.72) * 0.19, y: 0.45, direction: 1, phase: 0 },
        { x: 0.55 + Math.sin(phase * 0.55 + 2) * 0.2, y: 0.72, direction: -1, phase: 2 },
    ];
    return paths.slice(0, count);
}

function resetDuckRescueGame(game) {
    game.player = { x: 0.18, y: 0.72 };
    game.previous = { ...game.player };
    game.velocity = { x: 0, y: 0 };
    game.direction = { x: 1, y: 0 };
    game.ducklings = rescueDucklingSpots.map((spot) => ({ ...spot, found: false, dead: false, order: -1 }));
    game.nextDuckOrder = 0;
    game.sharks = [];
    game.started = true;
    game.won = false;
    game.ending = false;
    game.endElapsed = 0;
    game.endDuration = 0;
    game.endActors = [];
    game.endScore = 0;
    game.hitUntil = -1;
}

function drawRescueDuck(ctx, x, y, size, color = "#ffe451") {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "rgba(11, 77, 110, 0.18)";
    ctx.beginPath();
    ctx.ellipse(size * 0.04, size * 0.34, size * 0.46, size * 0.14, 0, 0, Math.PI * 2);
    ctx.fill();
    const body = ctx.createLinearGradient(-size * 0.45, -size * 0.35, size * 0.4, size * 0.4);
    body.addColorStop(0, "#fffba1");
    body.addColorStop(0.56, color);
    body.addColorStop(1, "#f3a929");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.ellipse(-size * 0.06, size * 0.11, size * 0.43, size * 0.27, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(size * 0.22, -size * 0.12, size * 0.23, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f17b2d";
    ctx.beginPath();
    ctx.moveTo(size * 0.39, -size * 0.13);
    ctx.lineTo(size * 0.67, -size * 0.06);
    ctx.lineTo(size * 0.39, size * 0.01);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#15455a";
    ctx.beginPath();
    ctx.arc(size * 0.27, -size * 0.2, Math.max(1.5, size * 0.045), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawRescueShark(ctx, x, y, size, direction, phase) {
    ctx.save();
    ctx.translate(x, y + Math.sin(phase * 0.8 + x / size * 0.1) * size * 0.035);
    ctx.scale(direction, 1);
    ctx.fillStyle = "rgba(7, 67, 99, 0.15)";
    ctx.beginPath();
    ctx.ellipse(0, size * 0.34, size * 0.58, size * 0.17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#668fa1";
    ctx.beginPath();
    ctx.moveTo(-size * 0.47, -size * 0.1);
    ctx.lineTo(-size * 0.75, -size * 0.38);
    ctx.lineTo(-size * 0.68, size * 0.12);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.58, size * 0.29, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-size * 0.08, -size * 0.2);
    ctx.lineTo(size * 0.13, -size * 0.56);
    ctx.lineTo(size * 0.35, -size * 0.13);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#eefaff";
    ctx.beginPath();
    ctx.ellipse(size * 0.15, size * 0.13, size * 0.35, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#173f54";
    ctx.beginPath();
    ctx.arc(size * 0.29, -size * 0.08, Math.max(1.6, size * 0.045), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#508093";
    ctx.lineWidth = Math.max(1.5, size * 0.035);
    ctx.beginPath();
    ctx.moveTo(size * 0.1, size * 0.23);
    ctx.lineTo(size * 0.46, size * 0.23);
    ctx.stroke();
    ctx.restore();
}

function drawDuckRescueGame(ctx, width, height, game, phase) {
    const unit = Math.min(width, height);
    const tubX = width * 0.045;
    const tubY = height * 0.105;
    const tubW = width * 0.91;
    const tubH = height * 0.84;

    ctx.clearRect(0, 0, width, height);
    const backdrop = ctx.createLinearGradient(0, 0, width, height);
    backdrop.addColorStop(0, "#d9fbff");
    backdrop.addColorStop(0.58, "#79d9ee");
    backdrop.addColorStop(1, "#20a5cf");
    ctx.fillStyle = backdrop;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(game.tilt.x * 0.055);
    ctx.scale(1 - Math.abs(game.tilt.y) * 0.035, 1 - game.tilt.y * 0.075);
    ctx.translate(-width / 2, -height / 2);

    ctx.save();
    ctx.shadowColor = "rgba(5, 94, 131, 0.28)";
    ctx.shadowBlur = unit * 0.045;
    ctx.shadowOffsetY = unit * 0.025;
    ctx.fillStyle = "#faffff";
    ctx.beginPath();
    ctx.roundRect(tubX, tubY, tubW, tubH, unit * 0.085);
    ctx.fill();
    ctx.restore();
    const rim = ctx.createLinearGradient(0, tubY, 0, tubY + unit * 0.13);
    rim.addColorStop(0, "#ffffff");
    rim.addColorStop(1, "#c9f4fb");
    ctx.fillStyle = rim;
    ctx.beginPath();
    ctx.roundRect(tubX + unit * 0.018, tubY + unit * 0.018, tubW - unit * 0.036, tubH - unit * 0.036, unit * 0.07);
    ctx.fill();

    const waterInset = unit * 0.052;
    const waterX = tubX + waterInset;
    const waterY = tubY + waterInset;
    const waterW = tubW - waterInset * 2;
    const waterH = tubH - waterInset * 2;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(waterX, waterY, waterW, waterH, unit * 0.055);
    ctx.clip();
    const water = ctx.createLinearGradient(waterX, waterY, waterX + waterW, waterY + waterH);
    water.addColorStop(0, "#b8f5ff");
    water.addColorStop(0.48, "#65d6ed");
    water.addColorStop(1, "#28afd5");
    ctx.fillStyle = water;
    ctx.fillRect(waterX, waterY, waterW, waterH);
    for (let i = 0; i < 11; i += 1) {
        const y = waterY + waterH * (0.08 + i * 0.085) + Math.sin(phase * 1.3 + i) * unit * 0.008;
        const x = waterX + ((phase * unit * (0.035 + (i % 3) * 0.008) + i * unit * 0.19) % (waterW + unit * 0.23)) - unit * 0.1;
        ctx.strokeStyle = i % 2 ? "rgba(255,255,255,0.22)" : "rgba(14,143,186,0.12)";
        ctx.lineWidth = unit * 0.006;
        ctx.beginPath();
        ctx.ellipse(x, y, unit * (0.035 + (i % 4) * 0.006), unit * 0.009, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    const goal = duckRescueDrain;
    ctx.save();
    ctx.translate(width * goal.x, height * goal.y);
    ctx.fillStyle = "#b8d0d5";
    ctx.beginPath();
    ctx.arc(0, 0, unit * 0.063, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#6c929a";
    ctx.lineWidth = unit * 0.003;
    ctx.stroke();
    ctx.fillStyle = "#e5f1f2";
    ctx.beginPath();
    ctx.arc(0, 0, unit * 0.049, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#91adb2";
    ctx.lineWidth = unit * 0.002;
    ctx.stroke();
    [
        { y: -0.02, width: 0.03 },
        { y: -0.01, width: 0.038 },
        { y: 0.01, width: 0.038 },
        { y: 0.02, width: 0.03 },
    ].forEach(({ y, width: slotWidth }) => {
        ctx.fillStyle = "#315d68";
        ctx.beginPath();
        ctx.roundRect(-unit * slotWidth / 2, unit * y - unit * 0.0018, unit * slotWidth, unit * 0.0036, unit * 0.0018);
        ctx.fill();
    });
    ctx.restore();

    const sharkData = game.sharks;
    sharkData.forEach((shark) => drawRescueShark(ctx, width * shark.x, height * shark.y, unit * 0.075, shark.direction, phase + shark.phase));

    if (game.ending) {
        game.endActors.forEach((actor, index) => {
            const progress = Math.max(0, Math.min(1, (game.endElapsed - index * 0.32) / 0.78));
            if (progress >= 1) return;
            const eased = progress * progress;
            const x = actor.x + (duckRescueDrain.x - actor.x) * eased;
            const y = actor.y + (duckRescueDrain.y - actor.y) * eased;
            drawRescueDuck(ctx, width * x, height * y, unit * actor.size * (1 - eased * 0.82), actor.color);
        });
    } else {
        const player = game.player;
        if (phase > game.hitUntil || Math.floor(phase * 12) % 2 === 0) {
            drawRescueDuck(ctx, width * player.x, height * player.y, unit * 0.1);
        }

        const collected = game.ducklings.filter((duckling) => duckling.found && !duckling.dead).sort((a, b) => a.order - b.order);
        collected.forEach((duckling) => {
            drawRescueDuck(ctx, width * duckling.x, height * duckling.y, unit * 0.064, "#ffe978");
        });
    }
    game.ducklings.filter((duckling) => !duckling.found && !duckling.dead).forEach((duckling) => {
        const bob = Math.sin(phase * 2.5 + duckling.x * 12) * unit * 0.004;
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = unit * 0.003;
        ctx.beginPath();
        ctx.arc(width * duckling.x, height * duckling.y + bob, unit * 0.047, 0, Math.PI * 2);
        ctx.stroke();
        drawRescueDuck(ctx, width * duckling.x, height * duckling.y + bob, unit * 0.067, "#fff08a");
    });

    ctx.restore();
    ctx.restore();

}

function HeroCanvas({ isDark, isAero }) {
    const canvasRef = useRef(null);
    const frameRef = useRef(0);
    const drawRef = useRef(null);
    const phaseRef = useRef(0);
    const gameRef = useRef(null);
    const gameAreaRef = useRef(null);
    const gameBoardRef = useRef(null);
    const gameActiveRef = useRef(false);
    const gyroRef = useRef(null);
    const gyroPointerRef = useRef(null);
    const [gyroTilt, setGyroTilt] = useState({ x: 0, y: 0 });
    const [isGameFocused, setIsGameFocused] = useState(false);
    const [isGameFullscreen, setIsGameFullscreen] = useState(false);
    const [hasEnteredGame, setHasEnteredGame] = useState(false);
    const [finalScore, setFinalScore] = useState(null);
    const [sharkCount, setSharkCount] = useState(0);

    if (!gameRef.current) {
        gameRef.current = {
            player: { x: 0.18, y: 0.72 },
            previous: { x: 0.18, y: 0.72 },
            velocity: { x: 0, y: 0 },
            tilt: { x: 0, y: 0 },
            direction: { x: 1, y: 0 },
            ducklings: rescueDucklingSpots.map((spot) => ({ ...spot, found: false, dead: false, order: -1 })),
            nextDuckOrder: 0,
            sharks: [],
            started: false,
            won: false,
            ending: false,
            endElapsed: 0,
            endDuration: 0,
            endActors: [],
            endScore: 0,
            hitUntil: -1,
        };
    }

    const setTilt = (x, y) => {
        const tilt = { x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) };
        gameRef.current.tilt = tilt;
        setGyroTilt(tilt);
    };

    const handleGyroPointerDown = (event) => {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        gyroPointerRef.current = event.pointerId;
        gameRef.current.started = true;
        handleGyroPointerMove(event);
    };

    const enterGame = () => {
        gameActiveRef.current = true;
        setHasEnteredGame(true);
        setIsGameFocused(true);
        if (!frameRef.current && drawRef.current) frameRef.current = requestAnimationFrame(drawRef.current);
    };

    const leaveGame = () => {
        gameActiveRef.current = false;
        gameRef.current.tilt = { x: 0, y: 0 };
        setGyroTilt({ x: 0, y: 0 });
        setIsGameFocused(false);
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
    };

    const handleGyroPointerMove = (event) => {
        if (gyroPointerRef.current !== event.pointerId || !gyroRef.current) return;
        const rect = gyroRef.current.getBoundingClientRect();
        const radiusX = rect.width * 0.32;
        const radiusY = rect.height * 0.32;
        setTilt((event.clientX - (rect.left + rect.width / 2)) / radiusX, (event.clientY - (rect.top + rect.height / 2)) / radiusY);
    };

    const handleGyroPointerUp = (event) => {
        if (gyroPointerRef.current === event.pointerId) gyroPointerRef.current = null;
    };

    const handleCanvasKeyDown = (event) => {
        const directions = {
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
        };
        if (directions[event.key]) {
            event.preventDefault();
            const game = gameRef.current;
            if (game.won) return;
            game.started = true;
            setTilt(...directions[event.key]);
        } else if (event.key.toLowerCase() === "r" && gameRef.current.won) {
            resetDuckRescueGame(gameRef.current);
            setFinalScore(null);
            setTilt(0, 0);
        }
    };

    const handleCanvasKeyUp = (event) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) setTilt(0, 0);
    };

    const handleGameAreaPointerDown = () => {
        if (!isAero) return;
        enterGame();
        if (canvasRef.current && document.activeElement !== canvasRef.current) {
            canvasRef.current.focus({ preventScroll: true });
        }
    };

    const toggleGameFullscreen = async (event) => {
        event.stopPropagation();
        enterGame();
        const gameArea = gameAreaRef.current;
        if (!gameArea) return;
        try {
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
            if (fullscreenElement === gameArea) {
                const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
                await exitFullscreen?.call(document);
            } else {
                const requestFullscreen = gameArea.requestFullscreen || gameArea.webkitRequestFullscreen;
                await requestFullscreen?.call(gameArea);
            }
        } catch {
            // Fullscreen may be unavailable in restricted browser contexts.
        }
    };

    useEffect(() => {
        const syncFullscreenState = () => {
            const isFullscreen = (document.fullscreenElement || document.webkitFullscreenElement) === gameAreaRef.current;
            setIsGameFullscreen(isFullscreen);
            const board = gameBoardRef.current;
            if (!board) return;

            if (isFullscreen) {
                const area = gameAreaRef.current;
                if (!area) return;
                const { width, height } = area.getBoundingClientRect();
                const side = Math.min(width, height);
                board.style.position = "absolute";
                board.style.width = `${side}px`;
                board.style.height = `${side}px`;
                board.style.left = `${(width - side) / 2}px`;
                board.style.top = `${(height - side) / 2}px`;
                board.style.transform = "none";
            } else {
                ["position", "width", "height", "left", "top", "transform"].forEach((property) => board.style.removeProperty(property));
            }
        };
        document.addEventListener("fullscreenchange", syncFullscreenState);
        document.addEventListener("webkitfullscreenchange", syncFullscreenState);
        window.addEventListener("resize", syncFullscreenState);
        window.addEventListener("orientationchange", syncFullscreenState);
        window.visualViewport?.addEventListener("resize", syncFullscreenState);
        return () => {
            document.removeEventListener("fullscreenchange", syncFullscreenState);
            document.removeEventListener("webkitfullscreenchange", syncFullscreenState);
            window.removeEventListener("resize", syncFullscreenState);
            window.removeEventListener("orientationchange", syncFullscreenState);
            window.visualViewport?.removeEventListener("resize", syncFullscreenState);
        };
    }, []);

    const restartGame = () => {
        resetDuckRescueGame(gameRef.current);
        setFinalScore(null);
        setTilt(0, 0);
        enterGame();
        canvasRef.current?.focus({ preventScroll: true });
    };

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
        const handleResize = () => {
            resizeCanvas();
            if (isAero && !gameActiveRef.current && drawRef.current) drawRef.current();
        };
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvas);

        const handleOutsidePointerDown = (event) => {
            if (isAero && gameAreaRef.current && !gameAreaRef.current.contains(event.target)) leaveGame();
        };
        const handleWindowBlur = () => leaveGame();
        const handleVisibilityChange = () => {
            if (document.hidden) leaveGame();
        };

        const game = gameRef.current;

        const draw = () => {
            frameRef.current = 0;
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            if (!isAero || gameActiveRef.current) phaseRef.current += 0.004;
            const phase = phaseRef.current;

            if (isAero) {
                const gamePhase = phase * 8;
                const dt = 1 / 60;
                let player = game.player;
                if (gameActiveRef.current && game.started && !game.won) {
                    if (game.ending) {
                        game.endElapsed += dt;
                        if (game.endElapsed >= game.endDuration) {
                            game.endElapsed = game.endDuration;
                            game.won = true;
                            setFinalScore(game.endScore);
                            if (game.endScore === 5 && sharkCount < 2) {
                                const nextSharkCount = sharkCount + 1;
                                setSharkCount(nextSharkCount);
                            }
                        }
                    } else {
                    const unit = Math.min(width, height);
                    const playerBounds = { minX: 0.17, maxX: 0.83, minY: 0.2, maxY: 0.85 };
                    const friction = Math.pow(0.985, dt * 60);
                    game.velocity.x = Math.max(-0.56, Math.min(0.56, (game.velocity.x + game.tilt.x * dt * 0.56 * unit / width) * friction));
                    game.velocity.y = Math.max(-0.56, Math.min(0.56, (game.velocity.y + game.tilt.y * dt * 0.56 * unit / height) * friction));
                    player.x += game.velocity.x * dt;
                    player.y += game.velocity.y * dt;
                    if (player.x < playerBounds.minX || player.x > playerBounds.maxX) game.velocity.x = 0;
                    if (player.y < playerBounds.minY || player.y > playerBounds.maxY) game.velocity.y = 0;
                    player.x = Math.max(playerBounds.minX, Math.min(playerBounds.maxX, player.x));
                    player.y = Math.max(playerBounds.minY, Math.min(playerBounds.maxY, player.y));
                    const directionX = (player.x - game.previous.x) * width;
                    const directionY = (player.y - game.previous.y) * height;
                    const directionLength = Math.hypot(directionX, directionY);
                    if (directionLength > 0.01) {
                        game.direction = { x: directionX / directionLength, y: directionY / directionLength };
                    }
                    game.previous = { ...player };

                    game.ducklings.forEach((duckling) => {
                        if (!duckling.found && !duckling.dead && Math.hypot((duckling.x - player.x) * width, (duckling.y - player.y) * height) < unit * 0.072) {
                            duckling.found = true;
                            duckling.order = game.nextDuckOrder;
                            game.nextDuckOrder += 1;
                        }
                    });
                    game.sharks = getRescueSharkPositions(gamePhase, sharkCount);
                    const trailingDucklings = game.ducklings
                        .filter((duckling) => duckling.found && !duckling.dead)
                        .sort((a, b) => a.order - b.order);
                    trailingDucklings.forEach((duckling, index) => {
                        const distance = (index + 1) * unit * 0.075;
                        const followX = Math.max(0.15, Math.min(0.85, player.x - game.direction.x * distance / width));
                        const followY = Math.max(0.18, Math.min(0.86, player.y - game.direction.y * distance / height));
                        duckling.x += (followX - duckling.x) * 0.12;
                        duckling.y += (followY - duckling.y) * 0.12;
                    });
                    if (gamePhase > game.hitUntil) {
                        const hitIndex = trailingDucklings.findIndex((duckling) => game.sharks.some((shark) =>
                            Math.hypot((shark.x - duckling.x) * width, (shark.y - duckling.y) * height) < unit * 0.105,
                        ));
                        if (hitIndex >= 0) trailingDucklings.slice(hitIndex).forEach((duckling) => { duckling.dead = true; });
                    }
                    if (gamePhase > game.hitUntil) {
                        const hit = game.sharks.some((shark) =>
                            Math.hypot((shark.x - player.x) * width, (shark.y - player.y) * height) < unit * 0.105,
                        );
                        if (hit) {
                            resetDuckRescueGame(game);
                            player = game.player;
                            game.hitUntil = gamePhase + 2.2;
                        }
                    }
                    if (Math.hypot((duckRescueDrain.x - player.x) * width, (duckRescueDrain.y - player.y) * height) < unit * 0.058) {
                        const survivors = game.ducklings
                            .filter((duckling) => duckling.found && !duckling.dead)
                            .sort((a, b) => a.order - b.order);
                        game.endScore = survivors.length;
                        game.endActors = [
                            { x: player.x, y: player.y, size: 0.1, color: "#ffe451" },
                            ...survivors.map((duckling) => ({ x: duckling.x, y: duckling.y, size: 0.064, color: "#ffe978" })),
                        ];
                        game.ending = true;
                        game.endElapsed = 0;
                        game.endDuration = 0.82 + survivors.length * 0.32;
                        game.velocity = { x: 0, y: 0 };
                        game.tilt = { x: 0, y: 0 };
                    }
                    }
                }
                drawDuckRescueGame(ctx, width, height, game, gamePhase);
                if (gameActiveRef.current) frameRef.current = requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, isAero ? "#a8f1ff" : isDark ? "#211018" : "#f8c37a");
            gradient.addColorStop(0.38, isAero ? "#5cc8e8" : isDark ? "#4a1f24" : "#f0a85f");
            gradient.addColorStop(0.68, isAero ? "#27a6cf" : isDark ? "#221819" : "#d48b4b");
            gradient.addColorStop(1, isAero ? "#087eaa" : isDark ? "#0d0d10" : "#7a4631");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            const drawSun = (x, y, radius, color, glow) => {
                const sunGlow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 1.6);
                sunGlow.addColorStop(0, glow);
                sunGlow.addColorStop(1, "rgba(255, 220, 150, 0)");
                ctx.fillStyle = sunGlow;
                ctx.beginPath();
                ctx.arc(x, y, radius * 1.6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            };

            const sunSize = Math.min(width, height) * 0.095;
            drawSun(width * 0.54, height * 0.2, sunSize, isAero ? "#f2ffff" : "#ffe1a1", isAero ? "rgba(225, 255, 255, 0.5)" : "rgba(255, 210, 130, 0.34)");
            drawSun(width * 0.84, height * 0.16, sunSize, isAero ? "#1689b7" : isDark ? "#d68b70" : "#bd5949", isAero ? "rgba(150, 232, 245, 0.34)" : isDark ? "rgba(238, 155, 105, 0.24)" : "rgba(229, 105, 73, 0.3)");

            const drawShootingStar = (seed, yFactor, length, opacity) => {
                const travel = ((phase * (0.045 + seed * 0.008) + seed * 0.31) % 1.35) - 0.18;
                const x = width * travel;
                const y = height * yFactor + Math.sin(phase * 1.4 + seed) * height * 0.01;
                const trailLength = width * length;
                const tailX = x - trailLength;
                const tailY = y - trailLength * 0.26;
                const trail = ctx.createLinearGradient(tailX, tailY, x, y);

                const trailColor = isAero ? "145, 246, 255" : "255, 238, 196";
                trail.addColorStop(0, `rgba(${trailColor}, 0)`);
                trail.addColorStop(0.45, `rgba(${trailColor}, ${opacity * 0.35})`);
                trail.addColorStop(1, `rgba(${isAero ? "255, 255, 255" : "255, 255, 240"}, ${opacity})`);

                ctx.strokeStyle = trail;
                ctx.lineWidth = Math.max(1.2, width * 0.004);
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(x, y);
                ctx.stroke();

                ctx.fillStyle = `rgba(${isAero ? "255, 255, 255" : "255, 248, 218"}, ${opacity})`;
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

            drawDune(height * 0.58, 18, isAero ? "rgba(75, 203, 225, 0.58)" : isDark ? "rgba(104, 52, 42, 0.58)" : "rgba(196, 121, 62, 0.74)", 0.5);
            drawDune(height * 0.72, 30, isAero ? "rgba(22, 161, 198, 0.72)" : isDark ? "rgba(90, 38, 35, 0.72)" : "rgba(171, 91, 45, 0.84)", 2.4);
            drawDune(height * 0.87, 24, isAero ? "rgba(8, 92, 137, 0.9)" : isDark ? "rgba(26, 18, 17, 0.95)" : "rgba(98, 55, 38, 0.92)", 4.2, "rgba(255,255,255,0.18)");

            const drawJawa = (x, y, scale) => {
                const robe = "#15100d";
                const hood = "#0d0a08";
                ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
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

                ctx.fillStyle = "#ffd166";
                ctx.beginPath();
                ctx.arc(x - scale * 4, y + scale * 11, scale * 1.8, 0, Math.PI * 2);
                ctx.arc(x + scale * 4, y + scale * 11, scale * 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = "#2b1a14";
                ctx.lineWidth = Math.max(1, scale * 1.2);
                ctx.beginPath();
                ctx.moveTo(x - scale * 12, y + scale * 24);
                ctx.lineTo(x + scale * 12, y + scale * 24);
                ctx.stroke();
            };

            const drawDuck = (x, y, scale, seed) => {
                const bob = Math.sin(phase * 1.8 + seed) * scale * 1.5;
                ctx.fillStyle = "rgba(5, 65, 100, 0.22)";
                ctx.beginPath();
                ctx.ellipse(x, y + scale * 39, scale * 21, scale * 5, 0, 0, Math.PI * 2);
                ctx.fill();

                const duckGradient = ctx.createLinearGradient(x - scale * 15, y + bob, x + scale * 16, y + scale * 34 + bob);
                duckGradient.addColorStop(0, "#fff98a");
                duckGradient.addColorStop(0.55, "#ffe640");
                duckGradient.addColorStop(1, "#f5a91b");
                ctx.fillStyle = duckGradient;
                ctx.beginPath();
                ctx.ellipse(x, y + scale * 26 + bob, scale * 19, scale * 13, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(x + scale * 10, y + scale * 11 + bob, scale * 9, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(x - scale * 3, y + scale * 25 + bob, scale * 10, scale * 6, -0.2, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = "#f27b24";
                ctx.beginPath();
                ctx.moveTo(x + scale * 17, y + scale * 11 + bob);
                ctx.lineTo(x + scale * 28, y + scale * 14 + bob);
                ctx.lineTo(x + scale * 17, y + scale * 18 + bob);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = "#17415a";
                ctx.beginPath();
                ctx.arc(x + scale * 12, y + scale * 8 + bob, scale * 1.6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                ctx.ellipse(x - scale * 6, y + scale * 20 + bob, scale * 6, scale * 2, -0.2, 0, Math.PI * 2);
                ctx.fill();
            };

            const drawPanicPete = (x, y, scale, seed) => {
                const bob = Math.sin(phase * 2 + seed) * scale;
                const squeeze = (Math.sin(phase * 1.1 + seed) + 1) / 2;
                const skin = "#f3b78f";
                const outline = "#bb775d";

                ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
                ctx.beginPath();
                ctx.ellipse(x, y + scale * 39, scale * 20, scale * 5, 0, 0, Math.PI * 2);
                ctx.fill();

                // The toy is a single squat, soft-rubber figure rather than a robed character.
                const bodyGradient = ctx.createLinearGradient(x - scale * 17, y, x + scale * 17, y + scale * 42);
                bodyGradient.addColorStop(0, "#ffd0a8");
                bodyGradient.addColorStop(0.55, skin);
                bodyGradient.addColorStop(1, "#dc9874");
                ctx.fillStyle = bodyGradient;
                ctx.beginPath();
                ctx.ellipse(x, y + scale * 23 + bob, scale * (17 - squeeze), scale * 17, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = outline;
                ctx.lineWidth = scale;
                ctx.stroke();

                // Round head with solid blue eyes set directly into the face.
                ctx.fillStyle = bodyGradient;
                ctx.beginPath();
                ctx.ellipse(x, y + bob, scale * 15, scale * 16, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = outline;
                ctx.lineWidth = scale;
                ctx.stroke();

                ctx.fillStyle = "#2583d5";
                ctx.beginPath();
                ctx.arc(x - scale * 5, y - scale * 5 + bob, scale * 4, 0, Math.PI * 2);
                ctx.arc(x + scale * 5, y - scale * 5 + bob, scale * 4, 0, Math.PI * 2);
                ctx.fill();

                // Red ears and nose pop outward as the figure squeezes.
                ctx.fillStyle = "#e94c42";
                ctx.beginPath();
                ctx.arc(x - scale * 19, y + bob, scale * 4.5, 0, Math.PI * 2);
                ctx.arc(x + scale * 19, y + bob, scale * 4.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#ed5145";
                ctx.beginPath();
                ctx.ellipse(x, y + scale * (5 + squeeze * 2) + bob, scale * 4, scale * 3.5, 0, 0, Math.PI * 2);
                ctx.fill();
            };

            const characters = [
                [width * 0.22, height * 0.72, Math.max(0.75, width / 620), 1],
                [width * 0.29, height * 0.75, Math.max(0.62, width / 760), 2],
                [width * 0.72, height * 0.7, Math.max(0.7, width / 700), 3],
            ];
            characters.forEach(([x, y, scale, seed]) => {
                if (isAero) drawDuck(x, y, scale, seed);
                else if (isDark) drawJawa(x, y, scale);
                else drawPanicPete(x, y, scale, seed);
            });

            frameRef.current = requestAnimationFrame(draw);
        };

        drawRef.current = draw;
        resizeCanvas();
        draw();
        window.addEventListener("resize", handleResize);
        document.addEventListener("pointerdown", handleOutsidePointerDown);
        window.addEventListener("blur", handleWindowBlur);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("pointerdown", handleOutsidePointerDown);
            window.removeEventListener("blur", handleWindowBlur);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            resizeObserver.disconnect();
            cancelAnimationFrame(frameRef.current);
            frameRef.current = 0;
            drawRef.current = null;
        };
    }, [isDark, isAero, sharkCount]);

    return (
        <div className={isAero ? "mx-auto w-full max-w-[560px]" : undefined}>
            <div
                ref={gameAreaRef}
                id={isAero ? "duck-game" : undefined}
                className={isAero ? "duck-game-area relative aspect-square w-full" : "relative"}
                onPointerDown={handleGameAreaPointerDown}
                onFocusCapture={isAero ? enterGame : undefined}
                onBlurCapture={isAero ? (event) => {
                    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) leaveGame();
                } : undefined}
            >
                {isAero && <div ref={gameBoardRef} className="duck-game-board relative aspect-square w-full overflow-hidden">
                {isAero && (
                    <button
                        className="absolute left-3 top-3 z-[5] grid h-11 w-11 place-items-center rounded-xl border border-white/80 bg-white/80 text-[#075270] shadow-[0_4px_14px_rgba(10,91,122,0.2)] backdrop-blur-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#55c7e2]"
                        type="button"
                        aria-label={isGameFullscreen ? "Exit fullscreen game" : "View game fullscreen"}
                        title={isGameFullscreen ? "Exit fullscreen" : "Fullscreen"}
                        onPointerDown={(event) => event.stopPropagation()}
                        onClick={toggleGameFullscreen}
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            {isGameFullscreen
                                ? <><path d="M8 3v5H3" /><path d="M16 3v5h5" /><path d="M3 16h5v5" /><path d="M21 16h-5v5" /></>
                                : <><path d="M8 3H3v5" /><path d="M16 3h5v5" /><path d="M3 16v5h5" /><path d="M21 16v5h-5" /></>}
                        </svg>
                    </button>
                )}
                <canvas
                    ref={canvasRef}
                    className={isAero ? "absolute inset-0 h-full w-full" : "block min-h-[300px] w-full sm:min-h-[420px] lg:min-h-[480px]"}
                    width="640"
                    height="640"
                    role={isAero ? "application" : "img"}
                    aria-label={isAero ? "Duckling rescue game. Drag the gyroscope control to tilt the bathtub. Arrow keys also tilt the board." : "Animated portfolio illustration"}
                    tabIndex={isAero ? 0 : undefined}
                    onFocus={isAero ? enterGame : undefined}
                    onKeyDown={isAero ? handleCanvasKeyDown : undefined}
                    onKeyUp={isAero ? handleCanvasKeyUp : undefined}
                />
                {isAero && (
                    <div
                        ref={gyroRef}
                        className="absolute bottom-[10%] right-[8%] z-[2] aspect-square w-[clamp(76px,18vw,108px)] rounded-full border border-white/90 bg-white/35 shadow-[0_8px_24px_rgba(10,91,122,0.28),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm"
                        role="group"
                        aria-label="Gyroscope tilt control"
                    >
                        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                            <ellipse cx="50" cy="50" rx="43" ry="25" fill="none" stroke="rgba(255,255,255,.95)" strokeWidth="2.5" transform="rotate(-32 50 50)" />
                            <ellipse cx="50" cy="50" rx="43" ry="25" fill="none" stroke="rgba(8,126,170,.52)" strokeWidth="2" transform="rotate(32 50 50)" />
                            <circle cx="50" cy="50" r="33" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.5" />
                        </svg>
                        <button
                            className="absolute z-[1] aspect-square w-[31%] -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border border-white bg-[radial-gradient(circle_at_32%_25%,#ffffff,#8be7f6_46%,#168eb5_100%)] shadow-[0_3px_10px_rgba(7,91,133,0.38)] active:cursor-grabbing"
                            style={{ left: `${50 + gyroTilt.x * 31}%`, top: `${50 + gyroTilt.y * 31}%`, touchAction: "none" }}
                            type="button"
                            aria-label="Drag the gyroscope to tilt the bathtub"
                            onPointerDown={handleGyroPointerDown}
                            onPointerMove={handleGyroPointerMove}
                            onPointerUp={handleGyroPointerUp}
                            onPointerCancel={handleGyroPointerUp}
                        />
                    </div>
                )}
                {isAero && finalScore === null && !isGameFocused && (
                    <div className="pointer-events-none absolute inset-0 z-[3] grid place-items-center bg-[#073d55]/20" aria-hidden="true">
                        {hasEnteredGame && <span className="rounded-xl border border-white/60 bg-[#073d55]/45 px-6 py-3 text-2xl font-extrabold tracking-wide text-white shadow-lg">Paused</span>}
                    </div>
                )}
                {isAero && finalScore !== null && (
                    <div className="absolute inset-0 z-[4] grid place-items-center bg-[#073d55]/55 p-5 backdrop-blur-sm" role="status" aria-live="polite">
                        <div className="game-result-card grid justify-items-center gap-3 px-8 py-6 text-center">
                            <span className="text-3xl font-extrabold">{finalScore} / 5 ducks rescued</span>
                            <button
                                className="rounded-lg border border-white bg-gradient-to-b from-white to-[#7bd8ed] px-5 py-2 font-extrabold text-[#075270] shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#55c7e2] focus-visible:ring-offset-2"
                                type="button"
                                onPointerDown={(event) => event.stopPropagation()}
                                onClick={(event) => { event.stopPropagation(); restartGame(); }}
                            >
                                Restart
                            </button>
                        </div>
                    </div>
                )}
                </div>}
            </div>
        </div>
    );
}

function ButtonLink({ children, href, variant = "secondary", download = false, className = "" }) {
    const base =
        "inline-flex min-h-[46px] max-w-full items-center justify-center rounded-lg border px-4 text-center font-extrabold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-crimson-600 focus:ring-offset-2 focus:ring-offset-[#faf8f4] dark:focus:ring-crimson-300 dark:focus:ring-offset-[#141414] sm:px-5";
    const styles =
        variant === "primary"
            ? "border-[#5f1020] bg-[#7a1828] text-white shadow-lg shadow-crimson-600/30 hover:border-[#981e32] hover:bg-[#981e32] hover:shadow-xl hover:shadow-crimson-600/40 dark:border-crimson-300 dark:bg-crimson-600 dark:hover:bg-crimson-500"
            : "border-slate-900/10 bg-white text-slate-950 hover:border-crimson-600 hover:bg-[#fff7f4] dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]";

    return (
        <a
            className={`${base} ${styles} ${className}`}
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
    const theme = "aero";
    const isDark = theme === "dark";
    const isAero = theme === "aero";
    const [bubbleSettings, setBubbleSettings] = useState(createBubbleSettings);
    const [largeBubblesEnabled, setLargeBubblesEnabled] = useState(false);
    const [poppedBubbleIds, setPoppedBubbleIds] = useState(() => new Set());
    const bubbleRespawnTimers = useRef(new Map());
    const replaceBubble = (index) => {
        const replacement = createBubbleSettings(1, true)[0];
        setBubbleSettings((current) => current.map((bubble, bubbleIndex) => bubbleIndex === index ? replacement : bubble));
        setPoppedBubbleIds((current) => {
            if (!current.has(index)) return current;
            const next = new Set(current);
            next.delete(index);
            return next;
        });
    };
    const toggleLargeBubbles = () => {
        bubbleRespawnTimers.current.forEach((timer) => window.clearTimeout(timer));
        bubbleRespawnTimers.current.clear();
        const nextEnabled = !largeBubblesEnabled;
        setLargeBubblesEnabled(nextEnabled);
        setPoppedBubbleIds(new Set());
        setBubbleSettings(createBubbleSettings());
    };
    const popBubble = (index) => {
        setPoppedBubbleIds((current) => new Set(current).add(index));
        window.clearTimeout(bubbleRespawnTimers.current.get(index));
        bubbleRespawnTimers.current.set(index, window.setTimeout(() => {
            replaceBubble(index);
            bubbleRespawnTimers.current.delete(index);
        }, 160));
    };
    const handleBubblePointerDown = (event) => {
        if (!largeBubblesEnabled || !event.target.closest("main")) return;
        const bubbles = document.querySelectorAll(".aero-bubbles--prominent span:not(.is-popped)");
        for (const bubble of bubbles) {
            const rect = bubble.getBoundingClientRect();
            if (
                event.clientX >= rect.left && event.clientX <= rect.right &&
                event.clientY >= rect.top && event.clientY <= rect.bottom &&
                Number.parseFloat(getComputedStyle(bubble).opacity) > 0.05
            ) {
                popBubble(Number(bubble.dataset.bubbleIndex));
                break;
            }
        }
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.classList.toggle("aero", isAero);
        updateThemeFavicon(theme);
    }, [isDark, isAero, theme]);

    return (
        <div id="home" onPointerDownCapture={handleBubblePointerDown} className={`min-h-screen bg-[#faf8f4] text-cougar dark:bg-[#141414] dark:text-ink-100${isAero ? " theme-aero" : ""}`}>
            <Header
                theme={theme}
                largeBubblesEnabled={largeBubblesEnabled}
                onToggleLargeBubbles={toggleLargeBubbles}
            />
            {isAero && <div className={`aero-bubbles${largeBubblesEnabled ? " aero-bubbles--prominent" : ""}`} aria-hidden={!largeBubblesEnabled}>
                {bubbleSettings.map((bubble, index) => (
                    <span
                        key={bubble.id}
                        data-bubble-index={index}
                        className={poppedBubbleIds.has(index) ? "is-popped" : undefined}
                        role={largeBubblesEnabled ? "button" : undefined}
                        tabIndex={largeBubblesEnabled && !poppedBubbleIds.has(index) ? 0 : undefined}
                        aria-label={largeBubblesEnabled ? "Pop bubble" : undefined}
                        aria-hidden={poppedBubbleIds.has(index) ? "true" : undefined}
                        onClick={largeBubblesEnabled && !poppedBubbleIds.has(index) ? () => popBubble(index) : undefined}
                        onAnimationIteration={() => {
                            if (!poppedBubbleIds.has(index)) replaceBubble(index);
                        }}
                        onKeyDown={largeBubblesEnabled && !poppedBubbleIds.has(index) ? (event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                popBubble(index);
                            }
                        } : undefined}
                        style={{
                            "--bubble-x": `${bubble.x}%`,
                            "--bubble-y": `${bubble.y}%`,
                            "--bubble-size": `${bubble.size * (largeBubblesEnabled ? bubble.scale : 1)}px`,
                            "--bubble-rise": `-${bubble.rise}px`,
                            "--bubble-rise-mid": `-${bubble.rise * 0.35}px`,
                            "--bubble-rise-late": `-${bubble.rise * 0.72}px`,
                            "--bubble-duration": `${bubble.duration}s`,
                            "--bubble-delay": `${bubble.delay}s`,
                            "--bubble-drift-start": bubble.driftStart,
                            "--bubble-drift-mid": bubble.driftMid,
                            "--bubble-drift-end": bubble.driftEnd,
                        }}
                    />
                ))}
            </div>}

            <main className={isAero ? "relative z-[1]" : undefined}>
                <section className="section grid items-center gap-10 pt-8 lg:min-h-[calc(100vh-82px)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pt-9">
                    <div>
                        <p className="eyebrow">Software Engineer</p>
                        <h1 className="mb-6 max-w-[11ch] text-[clamp(3rem,17vw,4.6rem)] font-extrabold leading-[0.92] sm:text-[clamp(3.2rem,9vw,6.8rem)]">
                            Joey Capps
                        </h1>
                        <p className="max-w-2xl text-lg text-slate-800 dark:text-slate-100 sm:text-xl">
                            Software engineer and Washington State University computer science graduate student building
                            reliable backend systems and real-time products.
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
                            <a className="rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-crimson-600 hover:bg-[#fff7f4] hover:shadow-md dark:border-white/10 dark:bg-[#1b1b1b] dark:text-white dark:hover:border-crimson-300 dark:hover:bg-[#25171a]" href={links.phone}>
                                (206) 930-6019
                            </a>
                        </div>
                    </div>

                    <div className={`relative overflow-hidden rounded-lg border border-crimson-600/15 bg-white shadow-soft dark:border-crimson-300/20 dark:bg-[#151515] dark:shadow-glow ${isAero ? "mx-auto w-full max-w-[560px]" : ""}`} aria-label="Portfolio snapshot">
                        <HeroCanvas isDark={isDark} isAero={isAero} />
                        {!isAero && <div className="absolute bottom-3 left-3 right-3 grid gap-1 rounded-lg border border-crimson-300/40 bg-crimson-700/90 p-3 text-sm text-white shadow-lg backdrop-blur-xl dark:border-crimson-300/30 dark:bg-[#1b1b1b]/92 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-[calc(100%-32px)] sm:p-4 sm:text-base">
                            <span className="text-xs font-bold text-crimson-300 dark:text-crimson-300">Current Focus</span>
                            <strong>Backend systems &amp; real-time products</strong>
                            <small className="font-bold text-white/90">C++ - Golang - React</small>
                        </div>}
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

                <section className="section grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]" id="about">
                    <div>
                        <p className="eyebrow">About</p>
                        <h2 className="heading">Engineer with a systems mindset and product instincts</h2>
                    </div>
                    <div className="max-w-3xl space-y-4 text-slate-800 dark:text-slate-100">
                        <p>
                            Joey is pursuing an M.S. in Computer Science at Washington State University after earning his
                            B.S. at Western Washington University. He builds backend systems and full-stack products,
                            from cloud-hosted learning tools to real-time games.
                        </p>
                        <p>
                            At AWS, he built two EBS load balancers in C++ and tested them using Golang, reducing max latency
                            on key disk writes by 98%. He also leads full stack development for an educational startup, using PostgreSQL, Node.js,
                            React, and Azure.
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
                                    <span>{project.date}</span>
                                    {project.href && (
                                        <a className="w-fit text-crimson-600 hover:text-crimson-500 dark:text-crimson-300" href={project.href} target="_blank" rel="noreferrer">
                                            GitHub
                                        </a>
                                    )}
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
                            <h2 className="heading">Experience, education, and technical strengths</h2>
                            <p className="text-slate-800 dark:text-slate-100">
                                A web version of the resume with the original PDF available for download
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                            <ButtonLink href={links.resume} variant="primary" download>
                                Download PDF
                            </ButtonLink>
                            <ButtonLink href={links.resume}>View PDF</ButtonLink>
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

                <section className="section grid items-center gap-8 lg:grid-cols-[1fr_auto]" id="contact">
                    <div>
                        <h2 className="mb-3 text-3xl font-extrabold leading-tight sm:text-4xl">Contact</h2>
                        <p className="max-w-2xl text-lg text-slate-800 dark:text-slate-100 sm:text-xl">
                            Open to software engineering conversations, collaborative projects, and roles involving backend
                            systems, real-time applications, or full-stack product development.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                        <ButtonLink href={links.email} variant="primary" className="text-lg sm:min-h-[54px] sm:px-6">
                            joeylcapps@gmail.com
                        </ButtonLink>
                        <ButtonLink href={links.github} className="text-lg sm:min-h-[54px] sm:px-6">GitHub</ButtonLink>
                        <ButtonLink href={links.linkedin} className="text-lg sm:min-h-[54px] sm:px-6">LinkedIn</ButtonLink>
                    </div>
                </section>
            </main>

            <footer className="mx-auto flex w-[min(1120px,calc(100%-24px))] flex-col gap-3 py-8 text-slate-800 dark:text-slate-100 sm:w-[min(1120px,calc(100%-32px))] sm:flex-row sm:justify-between">
                <span>&copy; {new Date().getFullYear()} Joey Capps</span>
                <a className="font-bold hover:text-crimson-600 dark:hover:text-crimson-300" href="#home">
                    Back to top
                </a>
            </footer>
        </div>
    );
}

export default App;
