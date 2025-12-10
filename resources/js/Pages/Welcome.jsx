import { Head, router } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
];

const services = [
    {
        title: 'Application Developer',
        description:
            'Crafting intuitive desktop, web, and mobile experiences that solve real problems with clean architecture.',
        icon: (
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 9h6m-6 4h4m-7 5h10a3 3 0 0 0 3-3V9.5A2.5 2.5 0 0 0 15.5 7H12L10 5H7.5A2.5 2.5 0 0 0 5 7.5V15a3 3 0 0 0 3 3Z"
                />
            </svg>
        ),
    },
    {
        title: 'Computer Programmer',
        description:
            'Transforming ideas into reliable code through thoughtful planning, testing, and iteration.',
        icon: (
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 7 4 12l4 5m8-10 4 5-4 5m-3-12-2 14"
                />
            </svg>
        ),
    },
    {
        title: 'Data Administrator',
        description:
            'Guarding data integrity, performance, and availability through thoughtful tooling and governance.',
        icon: (
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 8a7 3 0 0 0 14 0M5 12a7 3 0 0 0 14 0M5 16a7 3 0 0 0 14 0M5 8V16c0 1.657 3.134 3 7 3s7-1.343 7-3V8"
                />
            </svg>
        ),
    },
];

const education = [
    {
        title: 'Bachelor of Science in Information Technology',
        institution: 'University of Mindanao Digos College',
        period: '2022 — Present',
        details: ['Focus on full-stack development', 'Student leader, IT Society'],
    },
    {
        title: 'Senior High — Computer System Servicing',
        institution: 'Digos City National High School',
        period: '2016 — 2022',
        details: ['Graduated with distinction', 'Hands-on hardware diagnostics'],
    },
    {
        title: 'Primary Education',
        institution: 'Ramon Magsaysay Elementary School',
        period: '2010 — 2016',
        details: ['Early exposure to STEM activities'],
    },
];

const skills = [
    { label: 'Java', level: 58 },
    { label: 'PHP', level: 87 },
    { label: 'MySQL (Databasing)', level: 92 },
    { label: 'HTML & CSS', level: 93 },
    { label: 'JavaScript', level: 86 },
    { label: 'Python', level: 72 },
];

const certificates = [
    {
        title: 'CSS Essentials',
        date: 'Sep 13, 2025',
        file: '/certificates/CSSEssentials.pdf',
    },
    {
        title: 'Computer Hardware Basics',
        date: 'Sep 12, 2025',
        file: '/certificates/ComputerHardware.pdf',
    },
    {
        title: 'Data Analytics Essentials',
        date: 'Sep 12, 2025',
        file: '/certificates/DataAnalytics.pdf',
    },
    {
        title: 'JavaScript Essentials 2',
        date: 'Sep 12, 2025',
        file: '/certificates/JavaScriptEssentials2.pdf',
    },
    {
        title: 'HTML Essentials',
        date: 'Sep 11, 2025',
        file: '/certificates/HTMLEssentials.pdf',
    },
    {
        title: 'JavaScript Essentials 1',
        date: 'Aug 6, 2025',
        file: '/certificates/JavaScriptEssentials1.pdf',
    },
    {
        title: 'Network Defense',
        date: 'Jun 30, 2025',
        file: '/certificates/NetworkDefense.pdf',
    },
    {
        title: 'Cyber Threat Management',
        date: 'Jun 30, 2025',
        file: '/certificates/CyberThreatManagement.pdf',
    },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', initials: 'in' },
    { label: 'GitHub', href: 'https://github.com', initials: '{}' },
    { label: 'Instagram', href: 'https://www.instagram.com', initials: 'ig' },
    { label: 'Facebook', href: 'https://facebook.com', initials: 'fb' },
];

const stats = [
    { label: 'Years of Learning', value: '3+' },
    { label: 'Certificates Earned', value: '8' },
    { label: 'Projects Delivered', value: '12' },
];

const projects = [
    {
        title: 'ProjectPulse',
        type: 'Mobile App',
        role: 'Full Stack',
        description:
            'Android-first workflow tracker that lets research teams split capstone duties, assign owners, and update progress in real time.',
        stack: ['Kotlin', 'Firebase', 'Jetpack Compose'],
        highlights: ['Task boards by research chapter', 'Offline-friendly updates', 'Instructor oversight tools'],
        links: {
            repo: 'https://github.com/Kynbeau/ProjectPulse',
            prototype: null,
            note: null,
        },
        badge: 'Capstone Companion',
    },
    {
        title: 'LoveBeep',
        type: 'Mobile Prototype',
        role: 'Backend & Systems',
        description:
            'Location-aware dating concept with a radar that surfaces nearby people who marked you as “interested” or “crush,” then opens a guarded chat.',
        stack: ['Figma', 'Realtime Concepts', 'User Journeys'],
        highlights: ['Radar-style proximity UX', 'Interest-matching rules', 'Secure chat flows'],
        links: {
            repo: null,
            prototype: 'https://www.figma.com/design/wEmMpC3aO1KCiO2w8fTWiS/Love-Beep?node-id=0-1&p=f',
            note: null,
        },
        badge: 'UX Defense',
    },
    {
        title: 'Farmers Link',
        type: 'Mobile Prototype',
        role: 'Backend & Data Flow',
        description:
            'Direct-to-door produce ordering experience that connects urban buyers with farmers, handles fulfillment, and shares revenue analytics.',
        stack: ['Figma', 'Order Pipelines', 'Persona Mapping'],
        highlights: ['Farmer onboarding wizard', 'Fresh inventory catalogues', 'Home delivery tracker'],
        links: {
            repo: null,
            prototype: 'https://www.figma.com/design/DAS925fduwL4of3GqlbizI/Untitled?node-id=0-1&p=f',
            note: null,
        },
        badge: 'AgriTech Concept',
    },
    {
        title: 'Virtual Verse',
        type: 'Web Prototype',
        role: 'Backend & Platform Design',
        description:
            'Photography-focused social platform where clients can discover specialized photographers, book shoots, and showcase curated albums.',
        stack: ['Figma', 'Realtime Chat', 'Content Systems'],
        highlights: ['Photographer tagging (wedding, events, etc.)', 'In-app messaging & bookings', 'Community photo feed'],
        links: {
            repo: null,
            prototype: 'https://www.figma.com/design/M1cDjZejLyiDkDBP9gnm7M/Photography?node-id=0-1&p=f',
            note: null,
        },
        badge: 'Creative Network',
    },
    {
        title: 'City Housing',
        type: 'Web App',
        role: 'Full Stack',
        description:
            'Ongoing capstone for the local LGU that digitizes barangay housing applications, document routing, and occupancy analytics.',
        stack: ['Laravel', 'React', 'PostgreSQL'],
        highlights: ['Application intake wizard', 'Officer approval lanes', 'Data-driven reports'],
        links: {
            repo: null,
            prototype: null,
            note: 'GitHub repository coming soon',
        },
        badge: 'In Progress',
    },
];

const contactDetails = [
    { label: 'Email', value: 'Kent.andrey.aguhob@gmail.com', href: 'mailto:Kent.andrey.aguhob@gmail.com' },
    { label: 'Phone', value: '+639513720074', href: 'tel:+639513720074' },
    { label: 'Location', value: 'Digos City, Philippines' },
];

const SectionHeading = ({ eyebrow, title, description }) => (
    <div className="text-center max-w-2xl mx-auto mb-12">
        {eyebrow && <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{eyebrow}</p>}
        <h2 className="text-3xl md:text-4xl font-semibold mt-3">{title}</h2>
        {description && <p className="text-gray-300 mt-4 leading-relaxed">{description}</p>}
    </div>
);

const CertificatePreview = ({ file, title }) => (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/80 shadow-lg shadow-slate-900/10">
        <iframe
            title={title}
            loading="lazy"
            src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
            className="pointer-events-none absolute inset-0 h-full w-full scale-105 origin-top bg-white"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
    </div>
);

const ProjectCard = ({ project }) => (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{project.type}</p>
            {project.badge && (
                <span className="px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-200 text-xs font-semibold">
                    {project.badge}
                </span>
            )}
        </div>
        <div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">Role: {project.role}</p>
        </div>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-200">
                    {tech}
                </span>
            ))}
        </div>
        <ul className="mt-2 space-y-2 text-sm text-gray-300 list-disc list-inside">
            {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
            ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
            {project.links?.repo && (
                <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow-lg shadow-emerald-500/30"
                >
                    View Repo
                </a>
            )}
            {project.links?.prototype && (
                <a
                    href={project.links.prototype}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition"
                >
                    View Prototype
                </a>
            )}
            {!project.links?.repo && !project.links?.prototype && project.links?.note && (
                <span className="px-4 py-2 rounded-full border border-dashed border-white/20 text-sm text-gray-300">
                    {project.links.note}
                </span>
            )}
        </div>
    </div>
);

export default function Welcome({ flash }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContactSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
            subject: formData.get('subject') || '',
            message: formData.get('message'),
        };

        router.post('/contact', data, {
            preserveScroll: true,
            onSuccess: () => {
                event.currentTarget.reset();
                setIsSubmitting(false);
            },
            onError: () => {
                setIsSubmitting(false);
            },
        });
    };

    const timelineColumns = useMemo(() => {
        const left = [];
        const right = [];

        education.forEach((item, index) => {
            if (index % 2 === 0) {
                left.push(item);
            } else {
                right.push(item);
            }
        });

        return { left, right };
    }, []);

    return (
        <>
            <Head title="Portfolio | Kyn Beau" />
            <div className="bg-slate-950 text-white min-h-screen font-sans">
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div className="w-[60rem] h-[60rem] bg-emerald-600/20 blur-[200px] rounded-full absolute -top-40 -left-20" />
                        <div className="w-[45rem] h-[45rem] bg-cyan-500/10 blur-[150px] rounded-full absolute top-0 right-0" />
                    </div>

                    <header className="relative z-10 px-6 md:px-12 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-11 w-11 rounded-2xl bg-emerald-500 flex items-center justify-center text-lg font-bold text-slate-950 shadow-xl shadow-emerald-500/30">
                                    KB
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Portfolio</p>
                                    <p className="font-semibold text-lg">Kyn Beau</p>
                                </div>
                            </div>

                            <nav className="hidden md:flex items-center gap-6 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium shadow-lg shadow-emerald-500/30"
                                >
                                    Say Hello
                                </a>
                </nav>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen((prev) => !prev)}
                                className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md p-2"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <div className="space-y-1">
                                    <span className="block h-0.5 w-6 bg-white" />
                                    <span className="block h-0.5 w-6 bg-white" />
                                    <span className="block h-0.5 w-6 bg-white" />
                                </div>
                            </button>
                        </div>

                        <div
                            className={`md:hidden transition-all duration-300 origin-top ${
                                mobileMenuOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                        >
                            <div className="bg-slate-900/80 backdrop-blur rounded-2xl p-6 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-gray-300 hover:text-white transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-2 text-center px-4 py-2 rounded-full bg-white text-slate-900 font-medium shadow-lg shadow-emerald-500/30"
                                >
                                    Say Hello
                                </a>
                            </div>
                        </div>
            </header>

                    <main className="relative z-10 px-6 md:px-12 pb-24">
                        <section id="home" className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Hi there, I'm</p>
                                <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">
                                    Kyn Beau
                                    <span className="block text-emerald-300 text-3xl md:text-4xl mt-2">
                                        Student & Aspiring Developer
                                    </span>
                                </h1>
                                <p className="text-gray-300 mt-6 leading-relaxed">
                                    Wisdom begins with wonder and curiosity. I am a technology enthusiast focused on
                                    building purposeful software and continuously leveling up through hands-on projects
                                    and certifications.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <a
                                        href="#contact"
                                        className="px-6 py-3 rounded-full bg-emerald-400 text-slate-900 font-semibold shadow-xl shadow-emerald-500/40"
                                    >
                                        Collaborate with me
                                    </a>
                                    <a
                                        href="#contact"
                                        className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                                    >
                                        Request Resume
                                    </a>
                                </div>
                                <div className="mt-10">
                                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Find me on</p>
                                    <div className="flex gap-3 mt-4">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center text-sm font-semibold uppercase hover:bg-white hover:text-slate-900 transition"
                                            >
                                                {link.initials}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full" />
                                <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 shadow-2xl shadow-emerald-500/20 flex flex-col items-center justify-center">
                                    <div className="w-28 h-28 rounded-full bg-emerald-400/20 border border-emerald-300/50 flex items-center justify-center text-4xl font-bold tracking-tight">
                                        KB
                                    </div>
                                    <p className="mt-6 text-sm uppercase tracking-[0.5em] text-gray-400">Student</p>
                                    <p className="text-2xl font-semibold">Developer</p>
                                    <p className="text-gray-400 mt-2">Building the next big idea</p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-20 grid sm:grid-cols-3 gap-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-6 py-8 text-center shadow-lg shadow-emerald-500/10"
                                >
                                    <p className="text-4xl font-semibold text-emerald-300">{stat.value}</p>
                                    <p className="text-gray-300 mt-2 text-sm uppercase tracking-[0.3em]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </section>

                        <section id="services" className="mt-24">
                            <SectionHeading
                                eyebrow="Services"
                                title="How I can help"
                                description="From translating requirements into resilient applications to maintaining rock-solid databases, I love solving end-to-end technical challenges."
                            />
                            <div className="grid md:grid-cols-3 gap-6">
                                {services.map((service) => (
                                    <div
                                        key={service.title}
                                        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 h-full flex flex-col gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 border border-emerald-300/40 flex items-center justify-center text-emerald-200">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{service.title}</h3>
                                            <p className="text-gray-300 mt-3 leading-relaxed">{service.description}</p>
                                        </div>
                                        <button className="mt-auto text-sm uppercase tracking-[0.3em] text-emerald-300 hover:text-emerald-200 transition">
                                            Read More →
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="education" className="mt-24">
                            <SectionHeading
                                eyebrow="Education"
                                title="Learning journey"
                                description="A timeline of the classrooms and communities that shaped how I think, build, and collaborate."
                            />
                            <div className="grid lg:grid-cols-2 gap-8">
                                {[timelineColumns.left, timelineColumns.right].map((column, columnIndex) => (
                                    <div key={columnIndex} className="space-y-8">
                                        {column.map((item) => (
                                            <div
                                                key={item.title}
                                                className="relative pl-8 border-l border-white/10"
                                            >
                                                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-950" />
                                                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                                                    {item.period}
                                                </p>
                                                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                                <p className="text-emerald-200">{item.institution}</p>
                                                <ul className="mt-3 text-gray-300 space-y-1 list-disc list-inside">
                                                    {item.details?.map((detail) => (
                                                        <li key={detail}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="skills" className="mt-24">
                            <SectionHeading
                                eyebrow="Skills"
                                title="Toolkit & focus"
                                description="An evolving collection of languages and frameworks that I am confident using in real-world projects."
                            />
                            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {skills.map((skill) => (
                                        <div key={skill.label}>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="font-medium">{skill.label}</p>
                                                <p className="text-emerald-300">{skill.level}%</p>
                                            </div>
                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="projects" className="mt-24">
                            <SectionHeading
                                eyebrow="Projects"
                                title="Experience snapshots"
                                description="A mix of shipped apps, defended prototypes, and an ongoing LGU system that highlight how I approach product, UI, and engineering."
                            />
                            <div className="grid md:grid-cols-2 gap-8">
                                {projects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                            <p className="text-center text-gray-400 text-sm mt-10">
                                Need deeper walkthroughs or APK builds? Happy to demo them during interviews.
                </p>
                        </section>

                        <section id="certificates" className="mt-24">
                            <SectionHeading
                                eyebrow="Certificates"
                                title="Badges & recognitions"
                                description="I actively pursue professional courses to sharpen my technical intuition and stay current with industry practices."
                            />
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {certificates.map((cert) => (
                                    <a
                                        key={cert.title}
                                        href={cert.file}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-3xl border border-white/15 bg-white/5 p-6 hover:border-emerald-400/70 transition flex flex-col gap-4"
                                    >
                                        <CertificatePreview file={cert.file} title={cert.title} />
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-[0.3em]">Credential</p>
                                            <h3 className="text-lg font-semibold mt-2">{cert.title}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section id="contact" className="mt-24">
                            <SectionHeading
                                eyebrow="Contact"
                                title="Let's build something"
                                description="Tell me about your idea, internship opportunity, or collaboration. I check my inbox daily."
                            />
                            <div className="grid lg:grid-cols-2 gap-10">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">
                                    {contactDetails.map((detail) => (
                                        <div key={detail.label}>
                                            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                                                {detail.label}
                                            </p>
                                            {detail.href ? (
                                                <a
                                                    href={detail.href}
                                                    className="text-2xl font-semibold text-white hover:text-emerald-300 transition"
                                                >
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <p className="text-2xl font-semibold">{detail.value}</p>
                                            )}
                                        </div>
                                    ))}
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Social</p>
                                        <div className="flex gap-3 mt-3">
                                            {socialLinks.map((link) => (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-4 py-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <form
                                    onSubmit={handleContactSubmit}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="text-sm text-gray-300">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="mt-2 w-full rounded-2xl bg-slate-900/50 border border-white/10 px-4 py-3 text-white focus:border-emerald-400 focus:ring-emerald-400"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-sm text-gray-300">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="mt-2 w-full rounded-2xl bg-slate-900/50 border border-white/10 px-4 py-3 text-white focus:border-emerald-400 focus:ring-emerald-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="text-sm text-gray-300">
                                                Phone
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                className="mt-2 w-full rounded-2xl bg-slate-900/50 border border-white/10 px-4 py-3 text-white focus:border-emerald-400 focus:ring-emerald-400"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="text-sm text-gray-300">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                className="mt-2 w-full rounded-2xl bg-slate-900/50 border border-white/10 px-4 py-3 text-white focus:border-emerald-400 focus:ring-emerald-400"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-sm text-gray-300">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            className="mt-2 w-full rounded-2xl bg-slate-900/50 border border-white/10 px-4 py-3 text-white focus:border-emerald-400 focus:ring-emerald-400"
                                        />
                                    </div>

                                    {flash?.success && (
                                        <div className="rounded-2xl bg-emerald-500/20 border border-emerald-400/50 px-4 py-3 text-emerald-200 text-sm">
                                            {flash.success}
                                        </div>
                                    )}
                                    {flash?.error && (
                                        <div className="rounded-2xl bg-red-500/20 border border-red-400/50 px-4 py-3 text-red-200 text-sm">
                                            {flash.error}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold py-3 shadow-xl shadow-emerald-400/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </section>
            </main>

                    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur px-6 md:px-12 py-8 mt-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                            <p>© {new Date().getFullYear()} Kyn Beau. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="#services" className="hover:text-white">
                                    Services
                                </a>
                                <a href="#education" className="hover:text-white">
                                    Education
                                </a>
                                <a href="#skills" className="hover:text-white">
                                    Skills
                                </a>
                                <a href="#contact" className="hover:text-white">
                                    Contact
                                </a>
                            </div>
                        </div>
            </footer>
        </div>
            </div>
        </>
    );
}
