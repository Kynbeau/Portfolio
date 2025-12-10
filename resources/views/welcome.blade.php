@extends('layouts.app')

@section('title', 'Portfolio | Kent Andrey F. Aguhob')

@section('content')
@php
$navLinks = [
    ['href' => '#about', 'label' => 'About'],
    ['href' => '#services', 'label' => 'Services'],
    ['href' => '#education', 'label' => 'Education'],
    ['href' => '#skills', 'label' => 'Skills'],
    ['href' => '#portfolio', 'label' => 'Portfolio'],
    ['href' => '#experience', 'label' => 'Experience'],
    ['href' => '#certificates', 'label' => 'Certificates'],
    ['href' => '#contact', 'label' => 'Contact'],
];

$services = [
    [
        'title' => 'Front-End Web Development',
        'description' => 'Creating responsive layouts using HTML, CSS, and JavaScript.',
        'bullets' => ['Responsive and accessible UI', 'Cross-browser compatibility', 'Reusable components'],
    ],
    [
        'title' => 'Back-End Development (PHP)',
        'description' => 'Building system logic, form handling, and database interactions.',
        'bullets' => ['Secure form validation', 'Auth/session flows', 'Clean controller logic'],
    ],
    [
        'title' => 'Database Design & Management',
        'description' => 'Normalization, ERDs, MySQL queries, and phpMyAdmin work.',
        'bullets' => ['Schema normalization', 'Indexes & performance', 'Data migrations & backups'],
    ],
    [
        'title' => 'System Development (School Projects)',
        'description' => 'Creating role-based systems, student workflow systems, and admin dashboards.',
        'bullets' => ['Role-based access', 'Task/workflow boards', 'Admin dashboards & reports'],
    ],
];

$education = [
    [
        'title' => 'Bachelor of Science in Information Technology',
        'institution' => 'University of Mindanao Digos College',
        'period' => '2022 - Present',
        'location' => 'Roxas Avenue, Digos City, Davao del Sur',
    ],
    [
        'title' => 'Accountancy, Business, and Management',
        'institution' => 'Senior High School in Digos City',
        'period' => '2020 - 2022',
        'location' => 'Igpit, Digos City, Davao del Sur',
        'note' => 'With Honors',
    ],
    [
        'title' => 'Technical Vocation Education, Specialization in Computer Systems Servicing (CSS)',
        'institution' => 'Digos City National High School',
        'period' => '2016 - 2020',
        'location' => 'Rizal Avenue, Digos City, Davao del Sur',
        'note' => 'With Honors',
    ],
];

$webSkills = [
    ['label' => 'HTML', 'level' => 83],
    ['label' => 'CSS', 'level' => 83],
    ['label' => 'JavaScript', 'level' => 80],
    ['label' => 'PHP (Core)', 'level' => 79],
    ['label' => 'MySQL / phpMyAdmin', 'level' => 87],
];
$softSkills = ['Willing to Learn', 'Team Collaboration', 'Problem-Solving', 'Adaptability', 'Attention to Detail'];

$certificates = [
    ['title' => 'CSS Essentials', 'date' => 'Sep 13, 2025', 'file' => '/certificates/CSSEssentials.pdf'],
    ['title' => 'Computer Hardware Basics', 'date' => 'Sep 12, 2025', 'file' => '/certificates/ComputerHardware.pdf'],
    ['title' => 'Data Analytics Essentials', 'date' => 'Sep 12, 2025', 'file' => '/certificates/DataAnalytics.pdf'],
    ['title' => 'JavaScript Essentials 2', 'date' => 'Sep 12, 2025', 'file' => '/certificates/JavaScriptEssentials2.pdf'],
    ['title' => 'HTML Essentials', 'date' => 'Sep 11, 2025', 'file' => '/certificates/HTMLEssentials.pdf'],
    ['title' => 'JavaScript Essentials 1', 'date' => 'Aug 6, 2025', 'file' => '/certificates/JavaScriptEssentials1.pdf'],
    ['title' => 'Network Defense', 'date' => 'Jun 30, 2025', 'file' => '/certificates/NetworkDefense.pdf'],
    ['title' => 'Cyber Threat Management', 'date' => 'Jun 30, 2025', 'file' => '/certificates/CyberThreatManagement.pdf'],
];

$socialLinks = [
    ['label' => 'LinkedIn', 'href' => 'https://www.linkedin.com', 'initials' => 'in'],
    ['label' => 'GitHub', 'href' => 'https://github.com', 'initials' => '{}'],
    ['label' => 'Instagram', 'href' => 'https://www.instagram.com', 'initials' => 'ig'],
    ['label' => 'Facebook', 'href' => 'https://facebook.com', 'initials' => 'fb'],
];

$stats = [
    ['label' => 'Years of Learning', 'value' => '3+'],
    ['label' => 'Certificates Earned', 'value' => '8'],
    ['label' => 'Projects Delivered', 'value' => '12'],
];

$experience = [
    [
        'role' => 'Academic Experience — University of Mindanao (2022–Present)',
        'organization' => 'University of Mindanao Digos College',
        'period' => '2022–Present',
        'bullets' => [
            'Developed multiple school projects with real system workflows.',
            'Worked in teams using basic SDLC practices.',
            'Built web applications with PHP, MySQL, HTML, CSS, and JavaScript.',
            'Participated in debugging, testing, and documentation tasks.',
        ],
    ],
];

$projects = [
    [
        'title' => 'CHODAMS — City Housing Data Management System',
        'type' => 'Web Application',
        'description' => 'Digitizes field survey collection for City Housing in Digos City. Validators record demographic details and household status; admins verify and organize submissions. Replaces manual paperwork with a structured digital workflow.',
        'repo' => 'https://github.com/Kynbeau/Chodams',
        'tech' => ['Laravel', 'Inertia', 'React', 'Vite', 'Tailwind CSS', 'PHP', 'JavaScript', 'MySQL'],
    ],
    [
        'title' => 'ProjectPulse — Student Project Creator & Task Tracking System',
        'type' => 'Mobile Application',
        'description' => 'Android app where student teams create projects, assign tasks, set deadlines, and track progress. Built in Android Studio for a mobile-first experience.',
        'repo' => 'https://github.com/Kynbeau/ProjectPulse',
        'tech' => ['Android Studio', 'Java', 'XML'],
    ],
    [
        'title' => 'CHODAMS Mobile — City Housing App',
        'type' => 'Mobile Application',
        'description' => 'Flutter-based mobile companion for CHODAMS that enables on-site data capture and streamlined field workflows for City Housing staff.',
        'repo' => 'https://github.com/Kynbeau/Chodamsapp',
        'tech' => ['Flutter', 'Dart'],
    ],
];

$contactDetails = [
    ['label' => 'Email', 'value' => 'Kent.andrey.aguhob@gmail.com', 'href' => 'mailto:Kent.andrey.aguhob@gmail.com'],
    ['label' => 'Phone', 'value' => '+639513720074', 'href' => 'tel:+639513720074'],
    ['label' => 'Location', 'value' => 'Digos City, Philippines'],
];

// Split education into two columns for timeline
$leftColumn = [];
$rightColumn = [];
foreach ($education as $index => $item) {
    if ($index % 2 === 0) {
        $leftColumn[] = $item;
    } else {
        $rightColumn[] = $item;
    }
}
@endphp

<div class="bg-white text-slate-900 min-h-screen font-sans">
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 -z-10 bg-center bg-cover blur-xl" style="background-image: url('{{ asset('images/formalpic.jpg') }}')"></div>

        

        <main class="relative z-10 h-[100vh] overflow-hidden flex items-center justify-center px-4 md:px-8">
            <section id="overview" class="mx-auto max-w-6xl w-full h-[90vh] rounded-2xl bg-white/90 shadow-2xl ring-1 ring-slate-200 grid lg:grid-cols-[240px,1fr] gap-6 items-start p-6">
                <aside class="bg-transparent p-0 flex flex-col gap-6 h-full border-r border-slate-200">
                    <div class="flex flex-col items-center gap-3">
                        <div class="w-24 h-24 rounded-full overflow-hidden border border-slate-200">
                            <img src="{{ asset('images/formalpic.jpg') }}" alt="Kyn Beau" class="w-full h-full object-cover">
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-semibold">Kent Andrey F. Aguhob</p>
                            <p class="text-sm text-slate-600">Student • Web Developer</p>
                        </div>
                    </div>
                    <nav class="flex-1">
                        <ul class="space-y-1">
                            <li><a href="#" onclick="showTab('about')" data-tab="about" class="block px-3 py-2 hover:bg-slate-50 bg-slate-100 text-[#000080] font-semibold">About</a></li>
                            <li><a href="#" onclick="showTab('services')" data-tab="services" class="block px-3 py-2 hover:bg-slate-50">Services</a></li>
                            <li><a href="#" onclick="showTab('skills')" data-tab="skills" class="block px-3 py-2 hover:bg-slate-50">Skills</a></li>
                            <li><a href="#" onclick="showTab('education')" data-tab="education" class="block px-3 py-2 hover:bg-slate-50">Education</a></li>
                            <li><a href="#" onclick="showTab('experience')" data-tab="experience" class="block px-3 py-2 hover:bg-slate-50">Experience</a></li>
                            <li><a href="#" onclick="showTab('portfolio')" data-tab="portfolio" class="block px-3 py-2 hover:bg-slate-50">Portfolio</a></li>
                            <li><a href="#" onclick="showTab('certificates')" data-tab="certificates" class="block px-3 py-2 hover:bg-slate-50">Certificates</a></li>
                            <li><a href="#" onclick="showTab('contact')" data-tab="contact" class="block px-3 py-2 hover:bg-slate-50">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="mt-auto text-xs text-slate-500">
                        © {{ date('Y') }} Kyn Beau. All rights reserved.
                    </div>
                </aside>

                <div class="h-full overflow-y-auto">
                    

                    <div id="tab-about" class="h-full flex items-center justify-center">
                        <div class="text-center max-w-3xl">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">About</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">Focused and reliable</h2>
                            <p class="mt-4 text-slate-800 text-xl md:text-2xl leading-relaxed">I value clarity, reliability, and steady improvement. I learn by building and iterating, and I’m ready to contribute to a team.</p>
                            <ul class="mt-6 text-slate-800 space-y-2 text-lg md:text-xl">
                                <li>Collaborative and accountable</li>
                                <li>Comfortable with Java, PHP, MySQL, modern web UI</li>
                                <li>Interested in backend data flows and clean UI</li>
                            </ul>
                        </div>
                    </div>

                    <div id="tab-skills" class="h-full hidden items-center justify-center">
                        <div class="text-center max-w-4xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Skills</p>
                            <h2 class="mt-3 text-3xl md:text-4xl font-semibold">Web & Programming Skills</h2>
                            <div class="mt-6 grid sm:grid-cols-2 gap-5 px-6 text-left">
                                @foreach($webSkills as $skill)
                                <div>
                                    <div class="flex items-center justify-between mb-1 text-base md:text-lg">
                                        <span class="font-medium">{{ $skill['label'] }}</span>
                                        <span class="text-slate-500">{{ $skill['level'] }}%</span>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div class="h-full bg-[#000080] rounded-full" style="width: {{ $skill['level'] }}%"></div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                            <h3 class="mt-8 text-2xl md:text-3xl font-semibold">Soft Skills</h3>
                            <ul class="mt-4 grid sm:grid-cols-2 gap-x-10 gap-y-2 text-left text-base md:text-lg px-6">
                                @foreach($softSkills as $s)
                                <li>{{ $s }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>

                    <div id="tab-services" class="h-full hidden items-center justify-center">
                        <div class="text-center max-w-5xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Services</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">How I can help</h2>
                            <div class="mt-6 grid sm:grid-cols-2 gap-6 px-6 text-left">
                                @foreach($services as $service)
                                <div class="rounded-xl border border-slate-200 p-5 hover:border-[#000080] transition">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-md bg-[#000080]/10 text-[#000080] flex items-center justify-center">
                                            @if($loop->index === 0)
                                            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h10"/></svg>
                                            @elseif($loop->index === 1)
                                            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg>
                                            @elseif($loop->index === 2)
                                            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5v14"/></svg>
                                            @else
                                            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h10v10H7z"/></svg>
                                            @endif
                                        </div>
                                        <h3 class="text-xl md:text-2xl font-semibold">{{ $service['title'] }}</h3>
                                    </div>
                                    <p class="text-slate-700 mt-2 text-base md:text-lg">{{ $service['description'] }}</p>
                                    @if(isset($service['bullets']))
                                    <ul class="mt-3 list-disc list-inside text-slate-700 space-y-1 text-sm md:text-base">
                                        @foreach($service['bullets'] as $b)
                                        <li>{{ $b }}</li>
                                        @endforeach
                                    </ul>
                                    @endif
                                </div>
                                @endforeach
                            </div>
                            <div class="mt-8">
                                <a href="#" onclick="showTab('contact')" class="inline-block px-4 py-2 rounded-md bg-[#000080] text-white text-sm font-semibold">Start a conversation</a>
                            </div>
                        </div>
                    </div>

                    <div id="tab-portfolio" class="h-full hidden items-center justify-center">
                        <div class="text-center max-w-5xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Portfolio</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">Selected work</h2>
                            <div class="mt-6 grid sm:grid-cols-2 gap-6 px-6 text-left">
                                @foreach($projects as $project)
                                <div class="rounded-xl border border-slate-200 p-5 hover:border-[#000080] transition">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-xl md:text-2xl font-semibold">{{ $project['title'] }}</h3>
                                        <span class="text-xs text-slate-500">{{ $project['type'] }}</span>
                                    </div>
                                    <p class="text-slate-700 mt-2 text-base md:text-lg">{{ $project['description'] }}</p>
                                    @if(isset($project['tech']))
                                    <div class="flex flex-wrap gap-2 mt-3">
                                        @foreach($project['tech'] as $t)
                                        <span class="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs">{{ $t }}</span>
                                        @endforeach
                                    </div>
                                    @endif
                                    <div class="mt-4 flex gap-3">
                                        @if(!empty($project['repo']))
                                        <a href="{{ $project['repo'] }}" target="_blank" rel="noreferrer" class="px-4 py-2 rounded-md bg-[#000080] text-white text-sm font-semibold">View Repo</a>
                                        @endif
                                        <a href="#" onclick="showTab('contact')" class="px-4 py-2 rounded-md border border-slate-300 text-sm">Request Demo</a>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div id="tab-certificates" class="h-full hidden items-start justify-center">
                        <div class="text-center max-w-6xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Certificates</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">Credentials</h2>
                            <div class="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
                                @foreach($certificates as $cert)
                                <a href="{{ asset($cert['file']) }}" target="_blank" rel="noreferrer" class="group block rounded-xl border border-slate-200 bg-white p-4 hover:border-[#000080] transition">
                                    <div class="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-white">
                                        <canvas class="absolute inset-0 w-full h-full" data-pdf-thumb="{{ asset($cert['file']) }}"></canvas>
                                        <div class="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/5"></div>
                                    </div>
                                    <div class="mt-3 text-left">
                                        <p class="text-xs text-slate-500 uppercase tracking-[0.3em]">Credential</p>
                                        <h3 class="text-lg md:text-xl font-semibold mt-1">{{ $cert['title'] }}</h3>
                                        <p class="text-slate-500 text-sm">{{ $cert['date'] }}</p>
                                        <p class="text-[#000080] text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Open full certificate</p>
                                    </div>
                                </a>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div id="tab-experience" class="h-full hidden items-center justify-center">
                        <div class="text-center max-w-5xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Experience</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">Roles</h2>
                            <div class="mt-6 grid sm:grid-cols-2 gap-6 text-left px-6">
                                @foreach($experience as $item)
                                <div class="rounded-xl border border-slate-200 p-5 hover:border-[#000080] transition">
                                    <div class="flex items-center justify-between">
                                        <p class="text-xl md:text-2xl font-semibold">{{ $item['role'] }}</p>
                                        <span class="text-xs text-slate-500">{{ $item['period'] }}</span>
                                    </div>
                                    <p class="text-slate-700 text-base md:text-lg">{{ $item['organization'] }}</p>
                                    <ul class="mt-2 list-disc list-inside text-slate-700 space-y-1 text-base md:text-lg">
                                        @foreach($item['bullets'] as $b)
                                        <li>{{ $b }}</li>
                                        @endforeach
                                    </ul>
                                    <div class="mt-4">
                                        <a href="#" onclick="showTab('portfolio')" class="px-4 py-2 rounded-md bg-[#000080] text-white text-sm font-semibold">See Projects</a>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div id="tab-education" class="h-full hidden items-center justify-center">
                        <div class="text-center max-w-4xl w-full">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Education</p>
                            <h2 class="mt-3 text-4xl md:text-5xl font-semibold">Learning journey</h2>
                            <ul class="mt-6 space-y-6 text-left px-6">
                                @foreach($education as $item)
                                <li>
                                    <p class="text-xl md:text-2xl font-semibold">{{ $item['title'] }}</p>
                                    <p class="text-slate-700 text-base md:text-lg">{{ $item['institution'] }}</p>
                                    <p class="text-slate-500">{{ $item['period'] }}</p>
                                    @if(isset($item['location']))
                                    <p class="text-slate-500">{{ $item['location'] }}</p>
                                    @endif
                                    @if(isset($item['note']))
                                    <p class="text-[#000080] font-medium">{{ $item['note'] }}</p>
                                    @endif
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>

                    <div id="tab-contact" class="h-full hidden flex flex-col items-center justify-center">
                        <div class="w-full max-w-xl mx-auto text-center mb-4">
                            <p class="text-sm uppercase tracking-[0.3em] text-[#000080]">Contact</p>
                            <p class="text-slate-700 text-base md:text-lg mt-2">This section is for contacting me. Send a message and I’ll get back to you.</p>
                        </div>
                        <form method="POST" action="{{ route('contact.store') }}" class="w-full max-w-xl mx-auto space-y-3">
                            @csrf
                            <div>
                                <label for="name2" class="text-sm text-slate-700">Name</label>
                                <input id="name2" name="name" type="text" required value="{{ old('name') }}" class="mt-1 w-full rounded-xl bg-white border border-slate-300 px-3 py-3 text-slate-900 text-lg focus:border-[#000080] focus:ring-[#000080] focus:outline-none">
                            </div>
                            <div>
                                <label for="email2" class="text-sm text-slate-700">Email</label>
                                <input id="email2" name="email" type="email" required value="{{ old('email') }}" class="mt-1 w-full rounded-xl bg-white border border-slate-300 px-3 py-3 text-slate-900 text-lg focus:border-[#000080] focus:ring-[#000080] focus:outline-none">
                            </div>
                            <div>
                                <label for="message2" class="text-sm text-slate-700">Message</label>
                                <textarea id="message2" name="message" rows="4" required class="mt-1 w-full rounded-xl bg-white border border-slate-300 px-3 py-3 text-slate-900 text-lg focus:border-[#000080] focus:ring-[#000080] focus:outline-none">{{ old('message') }}</textarea>
                            </div>
                            <button type="submit" class="w-full rounded-xl bg-[#000080] text-white font-semibold py-3 text-lg">Send</button>
                        </form>
                    </div>
                </div>
            </section>
</main>

        
            </div>
        </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-96', 'opacity-100');
    } else {
        menu.classList.remove('max-h-96', 'opacity-100');
        menu.classList.add('max-h-0', 'opacity-0');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('max-h-96', 'opacity-100');
    menu.classList.add('max-h-0', 'opacity-0');
}

function showTab(tabId) {
    document.querySelectorAll('[id^="tab-"]').forEach(function(el) {
        el.classList.add('hidden');
    });
    var target = document.getElementById('tab-' + tabId);
    if (target) {
        target.classList.remove('hidden');
    }
    document.querySelectorAll('[data-tab]').forEach(function(item) {
        item.classList.remove('bg-slate-100', 'text-[#000080]', 'font-semibold');
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('bg-slate-100', 'text-[#000080]', 'font-semibold');
        }
    });
    if (tabId === 'certificates') {
        setTimeout(initCertThumbs, 0);
    }
}

function initCertThumbs() {
    if (!window.pdfjsLib) return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    var canvases = document.querySelectorAll('canvas[data-pdf-thumb]');
    canvases.forEach(function(canvas){
        var url = canvas.getAttribute('data-pdf-thumb');
        var parent = canvas.parentElement;
        pdfjsLib.getDocument(url).promise.then(function(pdf){
            return pdf.getPage(1);
        }).then(function(page){
            var viewport = page.getViewport({ scale: 1 });
            var cw = parent.clientWidth;
            var ch = parent.clientHeight;
            if (!cw || !ch) {
                var rect = parent.getBoundingClientRect();
                cw = rect.width;
                ch = rect.height;
            }
            var scale = Math.min(cw / viewport.width, ch / viewport.height);
            var v = page.getViewport({ scale: scale });
            canvas.width = v.width;
            canvas.height = v.height;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            var ctx = canvas.getContext('2d');
            return page.render({ canvasContext: ctx, viewport: v }).promise;
        }).catch(function(){
            var ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(0,0,canvas.width || 200, canvas.height || 150);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initCertThumbs);
</script>
@endsection
