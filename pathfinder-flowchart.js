// ==========================================================================
// PATHFINDER CAREER FLOWCHART - FULL DATA & ENGINE (Based on Source Document)
// Source: "Pathfinder - A career and education Resource Centre(1).docx"
// ==========================================================================

const PATHFINDER_EXAMS = {
    'neet_ug': {
        id: 'neet_ug',
        name: 'NEET UG',
        authority: 'National Testing Agency (NTA)',
        frequency: 'Once a year',
        purpose: 'Admission to MBBS, BDS, BAMS, BHMS, BUMS, BSMS and allied medical programmes',
        eligibility: 'Class 12 with Physics, Chemistry and Biology',
        website: 'https://neet.nta.nic.in/',
        timeline: 'Application: February- March | Exam: May | Result and Counselling: June - October'
    },
    'jee_mains': {
        id: 'jee_mains',
        name: 'JEE Mains',
        authority: 'National Testing Agency (NTA)',
        frequency: 'Two times a year',
        purpose: 'Admission to NITs, IIITs, GFTIs; eligibility for JEE Advanced',
        eligibility: 'Class 12 with Physics, Chemistry, Mathematics',
        website: 'https://jeemain.nta.nic.in/',
        timeline: 'Session 1: Application Oct - Nov 2026, Exam Jan 2027 | Session 2: Application Jan - Feb 2027, Exam Apr 2027'
    },
    'jee_adv': {
        id: 'jee_adv',
        name: 'JEE Advanced',
        authority: 'One of the IITs',
        frequency: 'Once a year',
        purpose: 'Admission to IITs',
        eligibility: 'Qualified JEE Main',
        website: 'https://jeeadv.ac.in/',
        timeline: 'Application: April - May 2027 | Exam: May 2027 | Result and Counselling (JoSAA): June 2027'
    },
    'nda_na': {
        id: 'nda_na',
        name: 'NDA & NA',
        authority: 'UPSC',
        frequency: 'Twice a year',
        purpose: 'Army, Navy, Air Force',
        eligibility: 'Army Wing: Class 12 pass or equivalent from a recognized board (Physics & Mathematics not compulsory). Air Force & Naval Wings: Class 12 pass with Physics, Chemistry and Mathematics (PCM). INA Course: Class 12 with PCM. Age: Date-of-birth window specified per notification.',
        selection: 'Written, SSB',
        website: 'https://upsc.gov.in',
        timeline: 'NDA & NA (I) 2027: Application 2 Dec to 22 Dec 2026, Exam 11 April 2027 | NDA & NA (II) 2027: Application 12 May to 1 June 2027, Exam 19 Sept 2027'
    },
    'iat': {
        id: 'iat',
        name: 'IISER Aptitude Test (IAT)',
        authority: 'IISERs',
        frequency: 'Once a year',
        purpose: 'Science admissions (research-oriented science, BS-MS, or certain science programmes at IITs/IISc)',
        eligibility: 'Class XII Science',
        courses: 'Basic Sciences',
        website: 'https://iiseradmission.in',
        timeline: 'Application: March-April | Exam: May-June | Result: June-July'
    },
    'nest': {
        id: 'nest',
        name: 'NEST',
        authority: 'NISER Bhubaneswar and UM-DAE CEBS Mumbai',
        frequency: 'Once a year',
        purpose: 'Integrated M.Sc. (research-oriented integrated science programmes after Class 12)',
        eligibility: 'Class XII Science',
        courses: 'Science',
        website: 'https://nestexam.in',
        timeline: 'Application: Jan-April | Exam: June | Result: June-July'
    },
    'nata': {
        id: 'nata',
        name: 'NATA',
        authority: 'Council of Architecture',
        frequency: 'Once a year (with multiple test dates)',
        purpose: 'B.Arch admission',
        eligibility: 'Class XII with Mathematics, Physics, and Chemistry',
        courses: 'Architecture',
        website: 'https://nata.in',
        timeline: 'Application: March | Exam: April - June | Result: within 7 days of each test'
    },
    'uceed': {
        id: 'uceed',
        name: 'UCEED',
        authority: 'IIT Bombay',
        frequency: 'Once a year',
        purpose: 'B.Des admission',
        eligibility: 'Class XII',
        courses: 'Design',
        website: 'https://uceed.iitb.ac.in',
        timeline: 'Application: Oct - Nov | Exam: January | Result and Counselling: March-April'
    },
    'nid_dat': {
        id: 'nid_dat',
        name: 'NID DAT (UG/PG)',
        authority: 'National Institute of Design',
        frequency: 'Once a Year (Prelims and Mains)',
        purpose: 'Design programmes',
        eligibility: "Class XII / Bachelor's",
        courses: 'Design',
        website: 'https://admissions.nid.edu',
        timeline: 'Application: September-October | Exam: December-January'
    },
    'cuet_ug': {
        id: 'cuet_ug',
        name: 'CUET UG',
        authority: 'National Testing Agency (NTA)',
        frequency: 'Once a year',
        purpose: 'Admission to undergraduate programmes in participating universities',
        eligibility: 'Class XII',
        courses: 'Multiple disciplines',
        website: 'https://cuetug.nta.nic.in',
        timeline: 'Application: January - April | Exam: May - June | Result and Counselling: July - August'
    },
    'clat': {
        id: 'clat',
        name: 'CLAT (UG/PG)',
        authority: 'Consortium of National Law Universities',
        frequency: 'Once a year',
        purpose: 'Admission to NLUs',
        eligibility: 'Class XII / Graduate (PG)',
        courses: 'Law',
        website: 'https://consortiumofnlus.ac.in',
        timeline: 'For AY 2027-28: Application 3 August - 31 October 2026 | Exam: 6 Dec 2026'
    },
    'ailet': {
        id: 'ailet',
        name: 'AILET',
        authority: 'National Law University Delhi',
        frequency: 'Once a year',
        purpose: 'Admission to NLU Delhi',
        eligibility: 'Class XII / Graduate',
        courses: 'Law',
        website: 'https://nationallawuniversitydelhi.in',
        timeline: 'Application: September-October | Exam: December | Admission year: 2027'
    },
    'nift': {
        id: 'nift',
        name: 'NIFT Entrance Exam',
        authority: 'National Testing Agency',
        frequency: 'Once a year',
        purpose: 'Fashion programmes',
        eligibility: 'Class XII',
        courses: 'Fashion',
        website: 'https://nift.nta.ac.in',
        timeline: 'Application: December - January | Exam: February | Stage 1 result: March - April | Stage 2/Situation test: April - May | Final result: June'
    },
    'ipmat': {
        id: 'ipmat',
        name: 'IPMAT',
        authority: 'IIM Indore/Rohtak & others',
        frequency: 'Once a year',
        purpose: 'Integrated MBA',
        eligibility: 'Class XII',
        courses: 'Management',
        tip: 'Refer to the official syllabus, previous year papers and mock tests.',
        website: 'https://www.iimidr.ac.in',
        timeline: 'Application: Feb-March | Exam/Interview: April- June'
    },
    'nchm_jee': {
        id: 'nchm_jee',
        name: 'NCHM JEE',
        authority: 'NTA',
        frequency: 'Once a year',
        purpose: 'Hotel Management',
        eligibility: 'Class XII',
        courses: 'Hospitality',
        website: 'https://exams.nta.nic.in/nchm-jee/',
        timeline: 'Application: Feb-March | Exam: April - May | Result: June-July'
    },
    'ncet': {
        id: 'ncet',
        name: 'NCET',
        authority: 'NTA',
        frequency: 'Once a year',
        purpose: 'Integrated Teacher Education Programme (NCET is specifically for students seeking the 4-year ITEP)',
        eligibility: 'Class XII',
        courses: 'Teacher Education',
        website: 'https://exams.nta.nic.in/ncet/',
        timeline: 'Application: Jan-Feb | Exam: April - May | Result: June-July'
    },
    'ca': {
        id: 'ca',
        name: 'CA (Chartered Accountant)',
        authority: 'Institute of Chartered Accountants of India (ICAI)',
        frequency: 'Thrice a year',
        purpose: 'Chartered Accountant',
        eligibility: 'Class XII (Foundation) / Graduate (Direct Entry to Inter)',
        selection: 'CA Foundation (After Class 12) / CA Intermediate & Final (After Graduation)',
        website: 'https://icai.org',
        timeline: 'Application: December for Jan exam, April for May exam, August for Sept exam | Exam: January, May and September'
    },
    'rrb_ntpc': {
        id: 'rrb_ntpc',
        name: 'RRB NTPC (Undergraduate & Graduate)',
        authority: 'Railway Recruitment Board',
        frequency: 'Vacancy based cycle',
        purpose: 'Railway Non-Technical Posts',
        eligibility: 'Class XII / Graduate',
        selection: 'CBT, Skill Test',
        website: 'https://rrbapply.gov.in',
        timeline: 'Based on availability of posts'
    },
    'rrb_group_d': {
        id: 'rrb_group_d',
        name: 'RRB Group D',
        authority: 'Railway Recruitment Board',
        frequency: 'Vacancy based cycle',
        purpose: 'Railway Technical Support',
        eligibility: 'Class X / ITI',
        selection: 'CBT, PET',
        website: 'https://rrbapply.gov.in',
        timeline: 'Based on availability of posts'
    },
    'ssc_gd': {
        id: 'ssc_gd',
        name: 'SSC GD',
        authority: 'SSC',
        frequency: 'Once a year',
        purpose: 'Constable in CAPFs',
        eligibility: 'Class X',
        selection: 'CBT, PET/PST, Medical',
        website: 'https://ssc.gov.in',
        timeline: 'Application: September - November | Exam: January - March'
    },
    'ssc_mts': {
        id: 'ssc_mts',
        name: 'SSC MTS',
        authority: 'SSC',
        frequency: 'Once a year',
        purpose: 'Multi Tasking Staff',
        eligibility: 'Class X',
        selection: 'CBT, PET (where applicable)',
        website: 'https://ssc.gov.in',
        timeline: 'Application: May - September | Exam: September - December'
    },
    'ssc_chsl': {
        id: 'ssc_chsl',
        name: 'SSC CHSL',
        authority: 'SSC',
        frequency: 'Once a year',
        purpose: 'LDC, DEO, PA, SA',
        eligibility: 'Class XII',
        selection: 'Tier I, Tier II',
        website: 'https://ssc.gov.in',
        timeline: 'Application: April - May | Tier 1: July - September | Tier 2: Dec - Jan'
    },
    'cuet_pg': {
        id: 'cuet_pg',
        name: 'CUET PG',
        authority: 'National Testing Agency (NTA)',
        frequency: 'Once a year',
        purpose: 'Admission to postgraduate programmes',
        eligibility: "Bachelor's degree",
        courses: 'PG programmes',
        website: 'https://pgcuet.samarth.ac.in',
        timeline: 'Application: December - January | Exam: March | Result and Counselling: April - July'
    },
    'gate': {
        id: 'gate',
        name: 'GATE',
        authority: 'IISc & IITs',
        frequency: 'Once a year',
        purpose: 'M.Tech., PhD admissions and PSU recruitment',
        eligibility: 'Engineering/Science graduates',
        courses: 'Engineering & Research',
        website: 'https://gate2027.iisc.ac.in',
        timeline: 'Application: 27 August - 27 September | Exam: February | Result: March'
    },
    'cat': {
        id: 'cat',
        name: 'CAT',
        authority: 'Indian Institutes of Management (IIMs)',
        frequency: 'Once a year',
        purpose: 'MBA/PGDM admissions',
        eligibility: "Bachelor's degree",
        courses: 'Management',
        website: 'https://iimcat.ac.in',
        timeline: 'Application: August - 15 September 2026 | Exam: 29 November 2026 | Result: January 2027'
    },
    'xat': {
        id: 'xat',
        name: 'XAT',
        authority: 'XLRI',
        frequency: 'Once a year',
        purpose: 'MBA admissions',
        eligibility: "Bachelor's degree",
        courses: 'Management',
        website: 'https://xatonline.in',
        timeline: 'Application: 15 July - 6 December 2026 | Exam: 3 January 2027 | Result: February 2027'
    },
    'cmat': {
        id: 'cmat',
        name: 'CMAT',
        authority: 'National Testing Agency (NTA)',
        frequency: 'Once a year',
        purpose: 'MBA admissions',
        eligibility: "Bachelor's degree",
        courses: 'Management',
        website: 'https://exams.nta.nic.in/cmat',
        timeline: 'Application: November-December | Exam: January'
    },
    'ceed': {
        id: 'ceed',
        name: 'CEED',
        authority: 'IIT Bombay',
        frequency: 'Once a year',
        purpose: 'M.Des admission',
        eligibility: "Bachelor's degree",
        courses: 'Design',
        website: 'https://ceed.iitb.ac.in',
        timeline: 'Application: Oct - Nov | Exam: January | Result: March-April'
    },
    'upsc_cse': {
        id: 'upsc_cse',
        name: 'UPSC Civil Services',
        authority: 'UPSC',
        frequency: 'Once a year',
        purpose: 'IAS, IPS, IFS and Group A/B Services',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains, Interview',
        website: 'https://www.upsc.gov.in/',
        timeline: 'Application: 13 Jan - 2 Feb 2027 | Exam: Prelims - 23 May 2027 | Mains - 20 August 2027'
    },
    'ifos': {
        id: 'ifos',
        name: 'Indian Forest Service Examination (IFoS)',
        authority: 'UPSC',
        frequency: 'Once a year',
        purpose: 'Forest Officer',
        eligibility: 'Graduate (Science)',
        selection: 'Prelims, Mains, Interview',
        website: 'https://www.upsc.gov.in/',
        timeline: 'Application: 13 Jan - 2 Feb 2027 | Exam: Prelims - 23 May 2027 (through UPSC CSE) | Mains - 21 Nov 2027'
    },
    'ies': {
        id: 'ies',
        name: 'Indian Engineering Services (IES)',
        authority: 'UPSC',
        frequency: 'Once a year',
        purpose: 'Engineering Services',
        eligibility: 'Engineering Degree in Civil, Mechanical, Electrical, Electronics & Telecommunication Engineering',
        selection: 'Prelims, Mains, Interview',
        website: 'https://www.upsc.gov.in/',
        timeline: 'Application: 16 Sept - 6 Oct 2026 | Exam: Prelims - 31 Jan 2027 | Mains - 18 June 2027'
    },
    'ssc_cgl': {
        id: 'ssc_cgl',
        name: 'SSC CGL',
        authority: 'SSC',
        frequency: 'Once a year',
        purpose: 'Central Government Group B & C Posts',
        eligibility: 'Graduate',
        selection: 'Tier I, Tier II',
        website: 'https://ssc.gov.in',
        timeline: 'Application: March - May | Exam: Tier 1 - June - August/September | Tier 2 - Nov - Dec'
    },
    'ibps_po': {
        id: 'ibps_po',
        name: 'IBPS PO',
        authority: 'IBPS',
        frequency: 'Once a year',
        purpose: 'Probationary Officer',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains, Interview',
        website: 'https://ibps.in',
        timeline: 'Application: June/July | Exam: Prelims - August/September | Mains - September/October'
    },
    'ibps_clerk': {
        id: 'ibps_clerk',
        name: 'IBPS Clerk',
        authority: 'IBPS',
        frequency: 'Once a year',
        purpose: 'Bank Clerk',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains',
        website: 'https://ibps.in',
        timeline: 'Application: August | Exam: Prelims - October | Mains - December'
    },
    'sbi_po': {
        id: 'sbi_po',
        name: 'SBI PO',
        authority: 'SBI',
        frequency: 'Once a year',
        purpose: 'Probationary Officer',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains, Interview',
        website: 'https://onlineapply.sbi.co.in/',
        timeline: 'Application: June/July | Exam: Prelims - August/September | Mains - September/October'
    },
    'rbi_grade_b': {
        id: 'rbi_grade_b',
        name: 'RBI Grade B',
        authority: 'RBI',
        frequency: 'Once a year',
        purpose: 'Grade B Officer',
        eligibility: 'Graduate',
        selection: 'Phase I, II, Interview',
        website: 'https://rbi.org.in',
        timeline: 'Application: April - September | Exam: Phase 1 - June - October | Phase 2 - October-December'
    },
    'cds': {
        id: 'cds',
        name: 'CDS (Combined Defence Services)',
        authority: 'UPSC',
        frequency: 'Twice a year',
        purpose: 'Commissioned Officers',
        eligibility: "IMA / OTA: Bachelor's degree from a recognized university | INA: Bachelor's degree in Engineering | AFA: Bachelor's degree with Physics and Mathematics at Class 12 level, or Bachelor's in Engineering",
        selection: 'Written, SSB',
        website: 'https://upsc.gov.in',
        timeline: 'CDS I 2027: Application: 9 Dec to 29 Dec 2026, Exam: 11 April 2027 | CDS II 2027: Application: 19 May to 8 June 2027, Exam: 19 Sept 2027'
    },
    'afcat': {
        id: 'afcat',
        name: 'AFCAT',
        authority: 'Indian Air Force',
        frequency: 'Twice a year',
        purpose: 'Air Force Officer',
        eligibility: "Flying Branch: 20–24 yrs, Class 12 Maths & Physics min 50% each + Bachelor's degree (min 3 yrs) with 60%, or BE/B.Tech with 60% | Ground Duty Technical: 20–26 yrs, Class 12 Physics & Maths 50% each + BE/B.Tech | Ground Duty Non-Technical: 20–26 yrs, Class 12 + Bachelor's degree with 60%",
        selection: 'Online Test, AFSB',
        website: 'https://afcat.edcil.co.in/',
        timeline: 'AFCAT 01/2027: Application: Nov–Dec 2026, Exam: Jan/Feb 2027, Course: Jan 2028 | AFCAT 02/2027: Application: May–June 2027, Exam: Aug 2027, Course: July 2028'
    },
    'lic_aao': {
        id: 'lic_aao',
        name: 'LIC AAO',
        authority: 'LIC',
        frequency: 'Vacancy based cycle',
        purpose: 'Assistant Administrative Officer',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains, Interview',
        website: 'https://www.licindia.in/',
        timeline: 'Based on availability of posts'
    },
    'state_psc': {
        id: 'state_psc',
        name: 'State PSC',
        authority: 'State Public Service Commissions',
        frequency: 'Once a year',
        purpose: 'State Civil Services',
        eligibility: 'Graduate',
        selection: 'Prelims, Mains, Interview',
        website: 'Refer to official state recruitment portal',
        timeline: 'Refer to respective State PSC notifications'
    },
    'aai_je': {
        id: 'aai_je',
        name: 'AAI JE (Air Traffic Control)',
        authority: 'Airport Authority of India',
        frequency: 'Vacancy based cycle',
        purpose: 'Junior Executive (Air Traffic Control)',
        eligibility: 'Either: Full-time regular 3-year B.Sc. degree with Physics and Mathematics, OR Full-time regular bachelor’s degree in Engineering in any discipline with Physics and Mathematics studied in at least one semester. English requirement: Passed in Class 10 or 12 with 10+2 proficiency. Age: Upper limit 27 years.',
        selection: 'Computer-Based Test (CBT), Voice test, Psychoactive-substance test, Medical examination, Document verification',
        website: 'https://www.aai.aero',
        timeline: 'Based on official notification cycles'
    }
};

const PATHFINDER_PATHWAYS = [
    {
        id: 'doctor',
        title: 'Medical Specialist / Surgeon (Doctor)',
        category: 'science',
        icon: '🩺',
        step1: 'Science (PCB): Physics, Chemistry, Biology',
        step2: 'NEET-UG (followed by NEET-PG / INI-CET for specialization)',
        step3: 'MBBS (followed by MD / MS specialization)',
        exams: ['neet_ug']
    },
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning Engineer',
        category: 'science',
        icon: '🤖',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, JEE Advanced, BITSAT, State CETs',
        step3: 'B.Tech / B.E. in Computer Science, AI & ML, or Data Science',
        exams: ['jee_mains', 'jee_adv']
    },
    {
        id: 'data_scientist',
        title: 'Data Scientist / Business Analyst',
        category: 'science',
        icon: '📈',
        step1: 'Science (PCM) or Commerce with Mathematics',
        step2: 'ISI Admission Test, CUET-UG, JEE Main',
        step3: 'B.Stat / B.Math, B.Sc. in Data Science, or B.Tech',
        exams: ['cuet_ug', 'jee_mains']
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity & Cloud Architect',
        category: 'science',
        icon: '🛡️',
        step1: 'Science (PCM) for B.Tech; Any stream (preferably with Maths/CS) for BCA',
        step2: 'JEE Main, CUET-UG, State CETs',
        step3: 'B.Tech in CSE / Cybersecurity / Cloud Computing, or BCA',
        exams: ['jee_mains', 'cuet_ug']
    },
    {
        id: 'biotech',
        title: 'Biotech & Genomics Researcher',
        category: 'science',
        icon: '🧬',
        step1: 'Science (PCB or PCMB) (PCMB keeps both engineering and pure biology open)',
        step2: 'NEET-UG, JEE Main, CUET-UG, IAT (IISER)',
        step3: 'B.Tech or B.Sc. in Biotechnology / Genetics',
        exams: ['neet_ug', 'jee_mains', 'cuet_ug', 'iat']
    },
    {
        id: 'ca',
        title: 'Chartered Accountant (CA)',
        category: 'commerce',
        icon: '📑',
        step1: 'Commerce (Accountancy, Business Studies, Economics; Mathematics strongly recommended)',
        step2: 'ICAI CA Foundation, CUET-UG (for the degree)',
        step3: 'CA Professional Certification + B.Com (Hons)',
        exams: ['ca', 'cuet_ug']
    },
    {
        id: 'investment_banker',
        title: 'Investment Banker / Financial Analyst',
        category: 'commerce',
        icon: '💼',
        step1: 'Commerce or Science (Mathematics is highly critical for financial modeling)',
        step2: 'CUET-UG (followed by CAT/GMAT/CFA exams)',
        step3: 'BBA / B.Com Finance + CFA, or UG + MBA Finance',
        exams: ['cuet_ug', 'cat']
    },
    {
        id: 'product_manager',
        title: 'Product Manager / Management Consultant',
        category: 'commerce',
        icon: '📊',
        step1: 'Any Stream (Commerce, Science, or Humanities; Mathematics helps clear aptitude tests)',
        step2: 'IPMAT (IIMs), JIPMAT, CUET-UG (followed by CAT)',
        step3: 'Integrated BBA + MBA (IPM) or UG Degree + MBA',
        exams: ['ipmat', 'cuet_ug', 'cat']
    },
    {
        id: 'corporate_lawyer',
        title: 'Corporate Lawyer',
        category: 'arts',
        icon: '⚖️',
        step1: 'Any Stream (Humanities, Commerce, or Science)',
        step2: 'CLAT, AILET, LSAT India, State Law CETs',
        step3: '5-Year Integrated LL.B. (BA LL.B. / BBA LL.B. / B.Com LL.B.)',
        exams: ['clat', 'ailet']
    },
    {
        id: 'ui_ux',
        title: 'UI/UX & Digital Product Designer',
        category: 'arts',
        icon: '🎨',
        step1: 'Any Stream (Science, Commerce, or Humanities; Fine Arts/Design is helpful but optional)',
        step2: 'UCEED (for IITs), NID DAT, NIFT Entrance',
        step3: 'B.Des (Bachelor of Design) in Interaction / Communication Design',
        exams: ['uceed', 'nid_dat', 'nift']
    },
    {
        id: 'renewable_energy',
        title: 'Renewable Energy & EV Engineer',
        category: 'science',
        icon: '⚡',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, JEE Advanced, State CETs',
        step3: 'B.Tech in Electrical, Mechanical, or Renewable Energy Engineering',
        exams: ['jee_mains', 'jee_adv']
    },
    {
        id: 'commercial_pilot',
        title: 'Commercial Pilot / Aviation Strategist',
        category: 'science',
        icon: '✈️',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics (Mandatory for CPL)',
        step2: 'IGRUA Entrance Exam, NDA (for defense route), DGCA Medicals',
        step3: 'Commercial Pilot License (CPL) training + B.Sc. Aviation',
        exams: ['nda_na']
    },
    {
        id: 'architect',
        title: 'Architect / Urban Planner',
        category: 'science',
        icon: '📐',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'NATA (National Aptitude Test in Architecture), JEE Main (Paper 2)',
        step3: 'B.Arch (Bachelor of Architecture) or B.Plan',
        exams: ['nata', 'jee_mains']
    },
    {
        id: 'psychologist',
        title: 'Clinical Psychologist / Therapist',
        category: 'arts',
        icon: '🧠',
        step1: 'Any Stream (Humanities with Psychology, or Science with Biology preferred)',
        step2: 'CUET-UG, Christ University Entrance Test, Jamia Millia Islamia Entrance',
        step3: 'B.A. or B.Sc. in Psychology (followed by M.A. and RCI-licensed M.Phil/Psy.D)',
        exams: ['cuet_ug']
    },
    {
        id: 'blockchain',
        title: 'Blockchain & Web3 Developer',
        category: 'science',
        icon: '🔗',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, CUET-UG, BITSAT, State Engineering CETs',
        step3: 'B.Tech in CSE / IT, or BCA (with certifications in Solidity/Cryptography)',
        exams: ['jee_mains', 'cuet_ug']
    },
    {
        id: 'supply_chain',
        title: 'Supply Chain & Logistics Manager',
        category: 'commerce',
        icon: '📦',
        step1: 'Any Stream (Commerce or Science with Mathematics strongly preferred)',
        step2: 'CUET-UG, IPMAT, JIPMAT, followed by CAT/XAT',
        step3: 'BBA in Supply Chain Management / B.Com, followed by MBA in Operations',
        exams: ['cuet_ug', 'ipmat', 'cat', 'xat']
    },
    {
        id: 'game_developer',
        title: 'Game Designer & Developer',
        category: 'science',
        icon: '🎮',
        step1: 'Any Stream for Design; Science (PCM) for Development',
        step2: 'UCEED, NID DAT (for Design), JEE Main (for Tech)',
        step3: 'B.Tech CSE (Game Tech) for Developers; B.Des / B.Sc. Animation for Designers',
        exams: ['uceed', 'nid_dat', 'jee_mains']
    },
    {
        id: 'allied_health',
        title: 'Allied Health (Physiotherapist / Advanced Nurse)',
        category: 'science',
        icon: '🏥',
        step1: 'Science (PCB): Physics, Chemistry, Biology',
        step2: 'NEET-UG, AIIMS Paramedical/Nursing Entrance, State Medical CETs',
        step3: 'BPT (Bachelor of Physiotherapy) or B.Sc. Nursing',
        exams: ['neet_ug']
    },
    {
        id: 'digital_marketing',
        title: 'Digital Marketing Director / Growth Hacker',
        category: 'commerce',
        icon: '📢',
        step1: 'Any Stream (Commerce, Humanities, or Science)',
        step2: 'CUET-UG, SET (Symbiosis), MET (Manipal)',
        step3: 'BBA in Digital Marketing, B.A. in Media & Mass Communication, or B.Com',
        exams: ['cuet_ug']
    },
    {
        id: 'ethical_hacker',
        title: 'Ethical Hacker / Penetration Tester',
        category: 'science',
        icon: '💻',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, CUET-UG, State CETs',
        step3: 'B.Tech in Cybersecurity & Forensics, or B.Sc. in Computer Science',
        exams: ['jee_mains', 'cuet_ug']
    },
    {
        id: 'actuary',
        title: 'Actuary (Insurance & Risk Analyst)',
        category: 'commerce',
        icon: '📊',
        step1: 'Commerce or Science (Advanced Mathematics is strictly mandatory)',
        step2: 'ACET (Actuarial Common Entrance Test), CUET-UG',
        step3: 'B.Sc. in Actuarial Science, Statistics, or Mathematics + ACET Exams',
        exams: ['cuet_ug']
    },
    {
        id: 'hospitality',
        title: 'Hospitality Manager / Hotel Administrator',
        category: 'arts',
        icon: '🏨',
        step1: 'Any Stream (English is generally mandatory; strong communication skills required)',
        step2: 'NCHMCT JEE, e-CHAT, CUET-UG',
        step3: 'B.Sc. in Hospitality and Hotel Administration (HHA) or BHM',
        exams: ['nchm_jee', 'cuet_ug']
    },
    {
        id: 'tourism',
        title: 'Tourism Strategist & Travel Manager',
        category: 'arts',
        icon: '🗺️',
        step1: 'Any Stream (Commerce or Humanities preferred; geography or economics helps)',
        step2: 'CUET-UG, University-specific entrance exams',
        step3: 'BBA in Tourism & Travel Management, or B.A. in Tourism Studies',
        exams: ['cuet_ug']
    },
    {
        id: 'chef',
        title: 'Executive Chef / Culinary Artist',
        category: 'arts',
        icon: '🍳',
        step1: 'Any Stream (English is mandatory)',
        step2: 'NCHMCT JEE, Institute-specific culinary aptitude tests',
        step3: 'B.A. in Culinary Arts or BHM with Culinary Specialization',
        exams: ['nchm_jee']
    },
    {
        id: 'judge',
        title: 'Judge / Litigation Lawyer',
        category: 'arts',
        icon: '🏛️',
        step1: 'Any Stream (Humanities with Political Science/History provides a strong foundation)',
        step2: 'CLAT, State Law CETs (for UG), followed by State Judicial Services Exam (PCS-J)',
        step3: '5-Year Integrated LL.B. (BA LL.B. / BBA LL.B.)',
        exams: ['clat']
    }
    ,
    {
        id: 'veterinarian',
        title: 'Veterinarian (Veterinary Surgeon)',
        category: 'science',
        icon: '🐾',
        step1: 'Science (PCB): Physics, Chemistry, Biology',
        step2: 'NEET-UG, AIPVT (All India Pre-Veterinary Test), State Veterinary CETs',
        step3: 'B.V.Sc & A.H. (Bachelor of Veterinary Science and Animal Husbandry)',
        exams: ['neet_ug']
    },
    {
        id: 'aerospace',
        title: 'Aerospace Engineer',
        category: 'science',
        icon: '🚀',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, JEE Advanced, BITSAT, IIST Entrance',
        step3: 'B.Tech / B.E. in Aerospace or Aeronautical Engineering',
        exams: ['jee_mains', 'jee_adv']
    },
    {
        id: 'robotics',
        title: 'Robotics & Mechatronics Engineer',
        category: 'science',
        icon: '🦾',
        step1: 'Science (PCM): Physics, Chemistry, Mathematics',
        step2: 'JEE Main, JEE Advanced, State CETs',
        step3: 'B.Tech in Robotics / Mechatronics / Automation Engineering',
        exams: ['jee_mains', 'jee_adv']
    },
    {
        id: 'economist_policy',
        title: 'Economist / Public Policy Analyst',
        category: 'commerce',
        icon: '📊',
        step1: 'Commerce, Humanities, or Science (Mathematics is strictly mandatory for top colleges)',
        step2: 'CUET-UG, SET (Symbiosis), NPAT',
        step3: 'B.A. (Hons) or B.Sc. (Hons) in Economics',
        exams: ['cuet_ug']
    },
    {
        id: 'journalist',
        title: 'Journalist / Mass Communication Specialist',
        category: 'arts',
        icon: '📰',
        step1: 'Any Stream (Humanities preferred; strong reading and writing skills required)',
        step2: 'CUET-UG, JMI Entrance Exam, IIMC Entrance (for PG), SET',
        step3: 'B.A. in Journalism & Mass Communication (BJMC)',
        exams: ['cuet_ug']
    },
    {
        id: 'sustainability_consultant',
        title: 'Sustainability Consultant / Climate Analyst',
        category: 'science',
        icon: '🌱',
        step1: 'Science (PCB/PCM) for technical roles; Any Stream for policy roles',
        step2: 'CUET-UG, University-specific entrance exams',
        step3: 'B.Sc. in Environmental Science, or B.A. in Environmental Studies/Policy',
        exams: ['cuet_ug']
    },
    {
        id: 'sports_management',
        title: 'Sports Management Professional',
        category: 'commerce',
        icon: '🏅',
        step1: 'Any Stream',
        step2: 'CUET-UG, SMAT (Sports Management Admission Test), IISM Entrance',
        step3: 'BBA or B.Sc. in Sports Management',
        exams: ['cuet_ug']
    },
    {
        id: 'forensic_scientist',
        title: 'Forensic Scientist',
        category: 'science',
        icon: '🔬',
        step1: 'Science (PCB or PCM)',
        step2: 'CUET-UG, NFAT (National Forensic Admission Test)',
        step3: 'B.Sc. in Forensic Science',
        exams: ['cuet_ug']
    },
    {
        id: 'sports_marketing',
        title: 'Sports Management & Marketing Professional',
        category: 'commerce',
        icon: '🏟️',
        step1: 'Any Stream (Commerce or Humanities preferred for marketing and management)',
        step2: 'CUET-UG, SMAT (Sports Management Admission Test), Institute-specific exams',
        step3: 'BBA or B.Sc. in Sports Management',
        exams: ['cuet_ug']
    },
    {
        id: 'sports_data_analyst',
        title: 'Sports Data & Performance Analyst',
        category: 'science',
        icon: '📈',
        step1: 'Science (PCM) or Commerce with Mathematics (highly recommended)',
        step2: 'CUET-UG, JEE Main (for Tech degrees), State CETs',
        step3: 'B.Sc. in Sports Science, Data Science, or B.Tech',
        exams: ['cuet_ug', 'jee_mains']
    },
    {
        id: 'sports_medicine',
        title: 'Sports Medicine / Physiotherapist',
        category: 'science',
        icon: '🏃',
        step1: 'Science (PCB): Physics, Chemistry, Biology',
        step2: 'NEET-UG, State Paramedical/Medical CETs',
        step3: 'BPT (Bachelor of Physiotherapy) or MBBS followed by MD in Sports Medicine',
        exams: ['neet_ug']
    },
    {
        id: 'csr_manager',
        title: 'CSR (Corporate Social Responsibility) Manager',
        category: 'commerce',
        icon: '🤝',
        step1: 'Any Stream (Humanities or Commerce provides a strong foundation)',
        step2: 'CUET-UG (followed by MSW or MBA entrances like CAT)',
        step3: 'BSW (Bachelor of Social Work), BBA, or B.A. in Social Sciences',
        exams: ['cuet_ug']
    },
    {
        id: 'psychiatric_social_worker',
        title: 'Medical & Psychiatric Social Worker',
        category: 'arts',
        icon: '🧠',
        step1: 'Any Stream (Humanities with Psychology or Sociology is highly beneficial)',
        step2: 'CUET-UG, University-specific BSW entrances',
        step3: 'BSW followed by MSW (Master of Social Work) with Psychiatric Specialization',
        exams: ['cuet_ug']
    },
    {
        id: 'm_and_e_officer',
        title: 'Monitoring & Evaluation (M&E) Officer',
        category: 'arts',
        icon: '📋',
        step1: 'Any Stream (Mathematics or Statistics is critical for data analysis)',
        step2: 'CUET-UG, ISI Admission Test',
        step3: 'B.A. / B.Sc. in Economics, Statistics, or Development Studies',
        exams: ['cuet_ug']
    },
    {
        id: 'international_dev',
        title: 'International Development Professional (UN, World Bank)',
        category: 'arts',
        icon: '🌐',
        step1: 'Any Stream (Humanities with Political Science or Economics preferred)',
        step2: 'CUET-UG',
        step3: 'B.A. in International Relations, Political Science, or Development Studies',
        exams: ['cuet_ug']
    }
];

const PATHFINDER_ROLES = {
    science: [
        'Doctor', 'Engineer', 'Nurse', 'Scientist', 'Lab technician', 'Biotechnologist', 
        'Microbiologist', 'Genetecist', 'Physicist', 'Chemist', 'Forensic Scientist', 
        'Marine Biologist', 'Veterinarian', 'Radiologist', 'Nutritionist/ Dietitian', 'Science Writer',
        'Software Developer', 'Web Developer', 'App Developer', 'Data Engineer', 'Data Analyst', 
        'Machine Learning', 'Artificial Intelligence Engineer', 'Cybersecurity', 'IT support', 
        'DevOps Engineer', 'UI/UX Designer', 'Game Developer', 'Data Scientist', 'Statistician', 
        'Actuary', 'Cryptographer', 'Quantitative Analyst', 'Mathematician'
    ],
    commerce: [
        'Chartered Accountant', 'Company Secretary', 'Cost & management Accountant', 
        'Investment Banker', 'Financial Analyst', 'Auditor', 'Economist', 'HR', 
        'Marketing', 'Insurance', 'Tax Consultant', 'Risk Manager', 'Digital Marketing'
    ],
    arts: [
        'Social Worker', 'Journalist', 'Content Writer', 'Editor', 'Archaelogist', 
        'Psychologist', 'PR officer', 'Event Management', 'Museum Curator', 'Historian', 
        'Sociologist', 'Human Rights Advocate', 'Lawyer', 'Poet/Author', 'Scriptwriter', 
        'Proofreader', 'Climate Policy Analyst', 'Sports Management Professional', 
        'Esports Manager', 'Aviation Management', 'Travel and tourism', 'Disaster management', 
        'Urban Planner', 'Policy analyst', 'Social Entrepreneurship'
    ]
};

// Flowchart Navigation Stack State
let fcStack = [];

function fcPush(id, label, icon) {
    fcStack.push({ id, label, icon: icon || '📍' });
    renderFlowchart();
    const stage = document.getElementById('flowchartStage');
    if (stage) {
        stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (typeof sendHeightToParent === 'function') sendHeightToParent();
}

function flowchartGoBack() {
    if (fcStack.length > 0) {
        fcStack.pop();
        renderFlowchart();
    }
    if (typeof sendHeightToParent === 'function') sendHeightToParent();
}

function flowchartReset() {
    fcStack = [];
    renderFlowchart();
    if (typeof sendHeightToParent === 'function') sendHeightToParent();
}

function flowchartJumpTo(index) {
    if (index < 0) {
        fcStack = [];
    } else {
        fcStack = fcStack.slice(0, index + 1);
    }
    renderFlowchart();
    if (typeof sendHeightToParent === 'function') sendHeightToParent();
}

function renderBreadcrumbs() {
    const nav = document.getElementById('flowchartBreadcrumbs');
    if (!nav) return;

    let html = `
        <button type="button" onclick="flowchartReset()" class="hover:text-site-primary dark:hover:text-blue-400 font-bold transition flex items-center space-x-1" aria-label="Flowchart Start Here">
            <span>🏠</span><span>Start Here</span>
        </button>
    `;

    fcStack.forEach((item, idx) => {
        const isLast = idx === fcStack.length - 1;
        html += `
            <span class="text-slate-300 dark:text-slate-600">/</span>
            <button type="button" onclick="flowchartJumpTo(${idx})" class="${isLast ? 'text-site-primary dark:text-blue-400 font-extrabold cursor-default' : 'hover:text-site-primary dark:hover:text-blue-400 font-medium transition'}" ${isLast ? 'aria-current="step"' : ''}>
                <span>${item.icon ? item.icon + ' ' : ''}${item.label}</span>
            </button>
        `;
    });

    nav.innerHTML = html;

    const backBtn = document.getElementById('fcBackBtn');
    const resetBtn = document.getElementById('fcResetBtn');
    if (backBtn) {
        backBtn.classList.toggle('hidden', fcStack.length === 0);
    }
    if (resetBtn) {
        resetBtn.classList.toggle('hidden', fcStack.length === 0);
    }
}

function renderFlowchart() {
    renderBreadcrumbs();
    const stage = document.getElementById('flowchartStage');
    if (!stage) return;

    // ROOT LEVEL: Exactly 3 Starting Options as requested
    if (fcStack.length === 0) {
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="text-center max-w-2xl mx-auto space-y-2">
                    <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 inline-block">
                        Choose Your Educational Gateway
                    </span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                        Where would you like to start?
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        Follow the interactive branches below to discover entrance examinations, course degrees, and career pathways mapped directly from the resource handbook.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <!-- Option 1: Higher Secondary -->
                    <div role="button" tabindex="0" onclick="fcPush('higher_secondary', 'Higher Secondary', '🎒')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('higher_secondary', 'Higher Secondary', '🎒');}" class="group relative bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-700 hover:border-site-primary dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition duration-200 cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-blue-500/20">
                        <div class="space-y-4">
                            <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-site-primary dark:text-blue-400 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition duration-200">
                                🎒
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-site-primary dark:group-hover:text-blue-400 transition">
                                        Higher Secondary
                                    </h4>
                                    <span class="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold">Higher Secondary</span>
                                </div>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                    Explore stream choices (Science, Commerce, Arts), Class 12 government jobs, entrance exams, and 40 step-by-step career pathways.
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">Science (PCM/PCB)</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">Commerce</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">Arts & Humanities</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-medium">12th Govt Jobs</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-site-primary dark:text-blue-400">
                            <span>Explore Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                        </div>
                    </div>

                    <!-- Option 2: Graduation -->
                    <div role="button" tabindex="0" onclick="fcPush('graduation', 'Graduation', '🎓')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('graduation', 'Graduation', '🎓');}" class="group relative bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 shadow-sm hover:shadow-xl transition duration-200 cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-emerald-500/20">
                        <div class="space-y-4">
                            <div class="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition duration-200">
                                🎓
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                                        Graduation
                                    </h4>
                                    <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">College / Degree</span>
                                </div>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                    Explore postgraduate entrances (Master's, MBA, M.Tech, M.Des) and national recruitment examinations (UPSC, Banking, Defence, SSC).
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">UPSC CSE</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">GATE</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">CAT / MBA</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">Banking (IBPS/SBI)</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">CDS & AFCAT</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <span>Explore Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                        </div>
                    </div>

                    <!-- Option 3: Post-Graduation -->
                    <div role="button" tabindex="0" onclick="fcPush('post_graduation', 'Post-Graduation', '🏛️')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('post_graduation', 'Post-Graduation', '🏛️');}" class="group relative bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm hover:shadow-xl transition duration-200 cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-purple-500/20">
                        <div class="space-y-4">
                            <div class="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition duration-200">
                                🏛️
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                                        Post-Graduation
                                    </h4>
                                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold">"yet to update"</span>
                                </div>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                    Advanced doctoral, super-specialization, judicial services, and licensed clinical research routes supported in the document.
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">NEET-PG / INI-CET</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">GATE PhD</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">Judicial Services (PCS-J)</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">RCI Clinical Practice</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
                            <span>Explore Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const currentStep = fcStack[fcStack.length - 1];

    // EXAM DETAIL VIEW
    if (currentStep.id.startsWith('exam_')) {
        const examId = currentStep.id.replace('exam_', '');
        renderExamDetailView(stage, examId);
        return;
    }

    // PATHWAY DETAIL VIEW
    if (currentStep.id.startsWith('pathway_')) {
        const pathwayId = currentStep.id.replace('pathway_', '');
        renderPathwayDetailView(stage, pathwayId);
        return;
    }

    // LEVEL 1: HIGHER SECONDARY
    if (currentStep.id === 'higher_secondary') {
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-site-primary dark:text-blue-400">Gateway 1</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🎒 Higher Secondary Pathways
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Choose an academic stream, browse government employment directly after Class 12, or explore all 40 step-by-step career pathways.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <!-- Science Branch -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_science', 'Science Stream', '🔬')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_science', 'Science Stream', '🔬');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-site-primary dark:hover:border-blue-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">🔬</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Science Stream</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Engineering (PCM), Medical (PCB), Pure Research (PCMB), Architecture, and Technology disciplines.
                            </p>
                            <div class="text-[11px] font-bold text-site-primary dark:text-blue-400">
                                16 Entrance Exams • 13 Step-by-Step Pathways • 34 Roles
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-site-primary dark:text-blue-400">
                            <span>Open Stream Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Commerce Branch -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_commerce', 'Commerce Stream', '📊')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_commerce', 'Commerce Stream', '📊');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">📊</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Commerce Stream</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Finance, Accounting, Corporate Secretaryship, Business Management, and Actuarial Sciences.
                            </p>
                            <div class="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                                11 Entrance Exams • 6 Step-by-Step Pathways • 13 Roles
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-amber-600 dark:text-amber-400">
                            <span>Open Stream Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Arts Branch -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_arts', 'Arts & Humanities Stream', '🎨')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_arts', 'Arts & Humanities Stream', '🎨');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">🎨</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Arts & Humanities Stream</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Law, Design, Psychology, Journalism, Hotel Management, Public Policy, and Social Sciences.
                            </p>
                            <div class="text-[11px] font-bold text-rose-600 dark:text-rose-400">
                                11 Entrance Exams • 6 Step-by-Step Pathways • 25 Roles
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-rose-600 dark:text-rose-400">
                            <span>Open Stream Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Class 12 Employment Branch -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_employment', 'Employment Exams after Class 12', '💼')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_employment', 'Employment Exams after Class 12', '💼');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">💼</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Examination for Employment after Class 12</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Government recruitment examinations open directly to 12th pass applicants (NDA & NA, SSC CHSL, GD, MTS, Railway NTPC).
                            </p>
                            <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                5 Documented National Recruitment Examinations
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <span>View Recruitment Exams</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- 25 Career Pathways -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_pathways', '40 Career Pathways', '🧭')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_pathways', '40 Career Pathways', '🧭');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between md:col-span-2">
                        <div class="space-y-3">
                            <div class="text-3xl">🧭</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">All 40 Interactive Step-by-Step Pathways</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Complete 3-step roadmaps: Step 1 (Class 12 Subjects) ➔ Step 2 (Entrance Examinations) ➔ Step 3 (Degree & Qualification).
                            </p>
                            <div class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                                Doctor, AI/ML, Data Science, CA, Corporate Law, Pilot, UI/UX, Renewable Energy, and 17 more.
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            <span>Browse 40 Step-by-Step Pathways</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 1: GRADUATION
    if (currentStep.id === 'graduation') {
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Gateway 2</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🎓 Graduation (Bachelor's Degree) Pathways
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Explore postgraduate entrance exams for master's programs, or prepare for national government & banking recruitment exams.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Branch 1: PG Higher Education Entrances -->
                    <div role="button" tabindex="0" onclick="fcPush('grad_entrance', 'PG Entrance Exams', '📝')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('grad_entrance', 'PG Entrance Exams', '📝');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">📝</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Postgraduate Entrance Exams</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Admissions to Master's, MBA, M.Tech, M.Des, and LL.M. programmes at premier Indian institutions.
                            </p>
                            <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                8 Entrance Exams (GATE, CAT, XAT, CMAT, CUET PG, CEED, CLAT PG, NID DAT)
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <span>View PG Entrances</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Branch 2: National Recruitment Examinations -->
                    <div role="button" tabindex="0" onclick="fcPush('grad_recruitment', 'Recruitment Exams', '🏛️')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('grad_recruitment', 'Recruitment Exams', '🏛️');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-site-primary dark:hover:border-blue-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">🏛️</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">National Recruitment Examinations</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Civil services, defence commissions, public sector banks, central audit, and airport authority careers.
                            </p>
                            <div class="text-[11px] font-bold text-site-primary dark:text-blue-400">
                                15 Recruitment Exams (UPSC CSE, CDS, AFCAT, SSC CGL, IBPS PO, RBI Grade B, etc.)
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-site-primary dark:text-blue-400">
                            <span>View Recruitment Exams</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Branch 3: Specialization Tracks -->
                    <div role="button" tabindex="0" onclick="fcPush('grad_specialization', 'Specialization Tracks', '💼')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('grad_specialization', 'Specialization Tracks', '💼');}" class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="text-3xl">💼</div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Graduate Specializations</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                Professional transition routes into Corporate Law, CA Intermediate/Final, MBA Consulting, and Clinical Psychology.
                            </p>
                            <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400">
                                Professional Transition Pathways
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-purple-600 dark:text-purple-400">
                            <span>View Specialization Tracks</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 1: POST-GRADUATION
    if (currentStep.id === 'post_graduation') {
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Gateway 3</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🏛️ Post-Graduation Pathways & Higher Specialization
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Advanced research, doctoral routes, super-specializations, and professional licenses documented in the Pathfinder source text.
                    </p>
                </div>

                <!-- Review Flag Alert (Document Verification) -->
                <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start space-x-3">
                    <span class="text-2xl text-amber-600 dark:text-amber-400 shrink-0">⚠️</span>
                    <div class="space-y-1 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                        <p class="font-bold">Post Graduation ("yet to update")</p>
                        <p class="text-xs leading-relaxed text-amber-800 dark:text-amber-400">
                            The options below represent the verified post-graduate entrance exams, doctoral admissions, and specialized professional practice credentials detailed across the resource centre's pathway matrix. Additional post-graduate curricula will be updated upon confirmation.
                        </p>
                    </div>
                </div>

                <!-- Document Supported Post-Graduate Tracks -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Track 1: Medical Super-Specialization -->
                    <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div class="flex items-center space-x-2 text-site-primary dark:text-blue-400">
                            <span class="text-2xl">🩺</span>
                            <h4 class="font-bold text-base text-slate-900 dark:text-white">Medical Super-Specialization (MD / MS)</h4>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400">
                            Following the MBBS degree, candidates appear for postgraduate competitive exams to specialize in Cardiology, Neurosurgery, Oncology, Pediatrics, etc.
                        </p>
                        <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl space-y-1 text-xs">
                            <p><strong>Examinations:</strong> NEET-PG, INI-CET (AIIMS, JIPMER, PGIMER, NIMHANS)</p>
                            <p><strong>Eligibility:</strong> MBBS degree + 1-year compulsory rotatory internship</p>
                            <p><strong>Outcome:</strong> Doctor of Medicine (MD), Master of Surgery (MS), DM / MCh</p>
                        </div>
                    </div>

                    <!-- Track 2: Doctoral Research & Fellowship (PhD) -->
                    <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div class="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                            <span class="text-2xl">🔬</span>
                            <h4 class="font-bold text-base text-slate-900 dark:text-white">Engineering & Science Research (PhD / M.Tech)</h4>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400">
                            Advanced scientific research and doctoral studies at Indian Institute of Science (IISc), IITs, and national research laboratories.
                        </p>
                        <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl space-y-1 text-xs">
                            <p><strong>Examinations:</strong> GATE (Graduate Aptitude Test in Engineering)</p>
                            <p><strong>Eligibility:</strong> Master’s or Bachelor’s in Engineering / Science</p>
                            <p><strong>Outcome:</strong> Direct PhD, M.Tech by Research, Senior Research Scientist</p>
                        </div>
                        <button type="button" onclick="fcPush('exam_gate', 'GATE Exam Details', '📝')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1">
                            <span>View GATE Exam Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    <!-- Track 3: Master of Laws (LL.M) & Judicial Services -->
                    <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div class="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                            <span class="text-2xl">⚖️</span>
                            <h4 class="font-bold text-base text-slate-900 dark:text-white">Advanced Legal Studies (LL.M) & Judiciary</h4>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400">
                            Specializing in Corporate Law, Constitutional Law, Intellectual Property, or qualifying for the State Subordinate Judiciary.
                        </p>
                        <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl space-y-1 text-xs">
                            <p><strong>Examinations:</strong> CLAT PG, AILET PG, State Judicial Services Examination (PCS-J)</p>
                            <p><strong>Eligibility:</strong> LL.B. Degree from recognized university</p>
                            <p><strong>Outcome:</strong> LL.M Degree, Civil Judge / Judicial Magistrate, Legal Academician</p>
                        </div>
                        <button type="button" onclick="fcPush('exam_clat', 'CLAT PG Details', '📝')" class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center space-x-1">
                            <span>View CLAT PG Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    <!-- Track 4: Clinical Psychology Licensure -->
                    <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div class="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
                            <span class="text-2xl">🧠</span>
                            <h4 class="font-bold text-base text-slate-900 dark:text-white">Licensed Clinical Practice (RCI License)</h4>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400">
                            As specified in the document's Clinical Psychology pathway: completing Master’s followed by Rehabilitation Council of India (RCI) licensed training.
                        </p>
                        <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl space-y-1 text-xs">
                            <p><strong>Prerequisite:</strong> B.A./B.Sc. in Psychology ➔ M.A./M.Sc. in Applied/Clinical Psychology</p>
                            <p><strong>Licensing Route:</strong> M.Phil in Clinical Psychology / Psy.D (RCI Approved)</p>
                            <p><strong>Outcome:</strong> Licensed Clinical Psychologist, Hospital Consultant</p>
                        </div>
                        <button type="button" onclick="fcPush('pathway_psychologist', 'Psychologist Pathway Details', '🧠')" class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center space-x-1">
                            <span>View Psychologist Pathway</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 2: SCIENCE STREAM (Higher Secondary) - SELECTION MENU
    if (currentStep.id === 'hs_science') {
        const scienceExamIds = ['neet_ug', 'jee_mains', 'jee_adv', 'iat', 'nest', 'nata', 'uceed', 'nid_dat', 'cuet_ug', 'nda_na', 'nift', 'ipmat', 'nchm_jee', 'ncet'];
        const sciencePathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'science');
        const scienceRoles = PATHFINDER_ROLES.science;

        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-site-primary dark:text-blue-400">Higher Secondary Stream</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🔬 Science Stream (PCM / PCB / PCMB)
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Select whether you want to explore Entrance Examinations or Step-by-Step Career Pathways:
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Option 1: Entrance Examinations -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_science_exams', 'Entrance Examinations', '📝')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_science_exams', 'Entrance Examinations', '📝');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-site-primary dark:hover:border-blue-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-site-primary dark:text-blue-400 flex items-center justify-center text-2xl font-bold">
                                📝
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-site-primary dark:group-hover:text-blue-400 transition">
                                Entrance Examinations
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Explore official entrance exams (NEET UG, JEE Main, JEE Advanced, IAT, NEST, NATA, etc.) with conducting authority, eligibility, syllabus, and tentative dates.
                            </p>
                            <div class="text-[11px] font-bold text-site-primary dark:text-blue-400">
                                ${scienceExamIds.length} Documented Entrance Exams
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-site-primary dark:text-blue-400">
                            <span>Explore Entrance Exams</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>

                    <!-- Option 2: Step-by-Step Career Pathways -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_science_pathways', 'Step-by-Step Pathways', '🧭')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_science_pathways', 'Step-by-Step Pathways', '🧭');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl font-bold">
                                🧭
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                                Step-by-Step Career Pathways
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Interactive 3-step roadmaps (Doctor, AI/ML, Veterinarian, Aerospace Engineer, Data Science, etc.) mapping Class 11-12 subjects to entrance exams and target degrees.
                            </p>
                            <div class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                                ${sciencePathways.length} Documented Pathways
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            <span>Browse Step-by-Step Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 3: SCIENCE ENTRANCE EXAMINATIONS
    if (currentStep.id === 'hs_science_exams') {
        const scienceExamIds = ['neet_ug', 'jee_mains', 'jee_adv', 'iat', 'nest', 'nata', 'uceed', 'nid_dat', 'cuet_ug', 'nda_na', 'nift', 'ipmat', 'nchm_jee', 'ncet'];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-site-primary dark:text-blue-400">Science Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            📝 Entrance Examinations (Science Stream)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Official entrance examinations with eligibility, authority, exam frequency, and syllabus details.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Science Options</span>
                    </button>
                </div>
                ${renderExamGrid(scienceExamIds)}
            </div>
        `;
        return;
    }

    // LEVEL 3: SCIENCE STEP-BY-STEP CAREER PATHWAYS
    if (currentStep.id === 'hs_science_pathways') {
        const sciencePathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'science');
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Science Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            🧭 Step-by-Step Career Pathways (Science)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Chronological 3-step roadmaps: Class 11-12 Subjects → Entrance Examinations → Degree & Qualification.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Science Options</span>
                    </button>
                </div>
                ${renderPathwayGrid(sciencePathways)}
            </div>
        `;
        return;
    }

    // LEVEL 3: SCIENCE CAREERS DIRECTORY
    if (currentStep.id === 'hs_science_roles') {
        const scienceRoles = PATHFINDER_ROLES.science;
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Science Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            💼 Science Careers & Roles Directory
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            All ${scienceRoles.length} science-based professional career roles listed in the handbook.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Science Options</span>
                    </button>
                </div>
                ${renderRolesList(scienceRoles, 'blue')}
            </div>
        `;
        return;
    }

    // LEVEL 2: COMMERCE STREAM (Higher Secondary) - SELECTION MENU
    if (currentStep.id === 'hs_commerce') {
        const commExamIds = ['cuet_ug', 'ipmat', 'ca', 'clat', 'ailet', 'nid_dat', 'uceed', 'nift', 'nchm_jee', 'ncet', 'rrb_ntpc'];
        const commPathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'commerce');
        const commRoles = PATHFINDER_ROLES.commerce;

        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Higher Secondary Stream</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        📊 Commerce Stream
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Select whether you want to explore Entrance Examinations or Step-by-Step Career Pathways:
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Option 1: Entrance Examinations -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_commerce_exams', 'Entrance Examinations', '📝')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_commerce_exams', 'Entrance Examinations', '📝');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl font-bold">
                                📝
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                                Entrance Examinations
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Explore official entrance exams (CUET UG, IPMAT, CA Foundation, CLAT, etc.) for finance, management, and professional courses.
                            </p>
                            <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                                ${commExamIds.length} Documented Entrance Exams
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-amber-600 dark:text-amber-400">
                            <span>Explore Entrance Exams</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>

                    <!-- Option 2: Step-by-Step Career Pathways -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_commerce_pathways', 'Step-by-Step Pathways', '🧭')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_commerce_pathways', 'Step-by-Step Pathways', '🧭');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold">
                                🧭
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                                Step-by-Step Career Pathways
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Interactive 3-step roadmaps (Chartered Accountant, Investment Banker, Economist, Sports Management, CSR Manager, Actuary, etc.).
                            </p>
                            <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                ${commPathways.length} Documented Pathways
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <span>Browse Step-by-Step Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 3: COMMERCE ENTRANCE EXAMINATIONS
    if (currentStep.id === 'hs_commerce_exams') {
        const commExamIds = ['cuet_ug', 'ipmat', 'ca', 'clat', 'ailet', 'nid_dat', 'uceed', 'nift', 'nchm_jee', 'ncet', 'rrb_ntpc'];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Commerce Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            📝 Entrance Examinations (Commerce Stream)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            National examinations for accounting, commerce, business management, law, and design admissions.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Commerce Options</span>
                    </button>
                </div>
                ${renderExamGrid(commExamIds)}
            </div>
        `;
        return;
    }

    // LEVEL 3: COMMERCE STEP-BY-STEP CAREER PATHWAYS
    if (currentStep.id === 'hs_commerce_pathways') {
        const commPathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'commerce');
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Commerce Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            🧭 Step-by-Step Career Pathways (Commerce)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Interactive 3-step roadmaps: Class 11-12 Subjects → Key Entrance Exams → Degree & Professional Qualifications.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Commerce Options</span>
                    </button>
                </div>
                ${renderPathwayGrid(commPathways)}
            </div>
        `;
        return;
    }

    // LEVEL 3: COMMERCE CAREERS DIRECTORY
    if (currentStep.id === 'hs_commerce_roles') {
        const commRoles = PATHFINDER_ROLES.commerce;
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Commerce Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            💼 Commerce Careers & Roles Directory
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            All ${commRoles.length} commerce, finance, and management career roles listed in the handbook.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Commerce Options</span>
                    </button>
                </div>
                ${renderRolesList(commRoles, 'amber')}
            </div>
        `;
        return;
    }

    // LEVEL 2: ARTS & HUMANITIES STREAM (Higher Secondary) - SELECTION MENU
    if (currentStep.id === 'hs_arts') {
        const artsExamIds = ['cuet_ug', 'clat', 'ailet', 'nid_dat', 'uceed', 'nift', 'nchm_jee', 'ncet', 'ssc_chsl', 'rrb_ntpc', 'ssc_gd'];
        const artsPathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'arts');
        const artsRoles = PATHFINDER_ROLES.arts;

        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Higher Secondary Stream</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🎨 Arts & Humanities Stream
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Select whether you want to explore Entrance Examinations or Step-by-Step Career Pathways:
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Option 1: Entrance Examinations -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_arts_exams', 'Entrance Examinations', '📝')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_arts_exams', 'Entrance Examinations', '📝');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-2xl font-bold">
                                📝
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition">
                                Entrance Examinations
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Explore national entrance exams (CLAT, AILET, CUET UG, NID DAT, NIFT, NCHM JEE, etc.) for law, design, journalism, and hospitality.
                            </p>
                            <div class="text-[11px] font-bold text-rose-600 dark:text-rose-400">
                                ${artsExamIds.length} Documented Entrance Exams
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-rose-600 dark:text-rose-400">
                            <span>Explore Entrance Exams</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>

                    <!-- Option 2: Step-by-Step Career Pathways -->
                    <div role="button" tabindex="0" onclick="fcPush('hs_arts_pathways', 'Step-by-Step Pathways', '🧭')" 
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('hs_arts_pathways', 'Step-by-Step Pathways', '🧭');}" 
                        class="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl font-bold">
                                🧭
                            </div>
                            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                                Step-by-Step Career Pathways
                            </h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Interactive 3-step roadmaps (Corporate Lawyer, Journalist, UI/UX Designer, Clinical Psychologist, Public Policy, etc.).
                            </p>
                            <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400">
                                ${artsPathways.length} Documented Pathways
                            </div>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-purple-600 dark:text-purple-400">
                            <span>Browse Step-by-Step Pathways</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // LEVEL 3: ARTS & HUMANITIES ENTRANCE EXAMINATIONS
    if (currentStep.id === 'hs_arts_exams') {
        const artsExamIds = ['cuet_ug', 'clat', 'ailet', 'nid_dat', 'uceed', 'nift', 'nchm_jee', 'ncet', 'ssc_chsl', 'rrb_ntpc', 'ssc_gd'];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Arts & Humanities Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            📝 Entrance Examinations (Arts & Humanities)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            National entrance examinations for law, design, media, hotel management, and liberal arts.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Arts Options</span>
                    </button>
                </div>
                ${renderExamGrid(artsExamIds)}
            </div>
        `;
        return;
    }

    // LEVEL 3: ARTS & HUMANITIES STEP-BY-STEP CAREER PATHWAYS
    if (currentStep.id === 'hs_arts_pathways') {
        const artsPathways = PATHFINDER_PATHWAYS.filter(p => p.category === 'arts');
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Arts & Humanities Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            🧭 Step-by-Step Career Pathways (Arts & Humanities)
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Interactive 3-step roadmaps: Class 11-12 Subjects → Key Entrance Exams → Degree & Specialization.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Arts Options</span>
                    </button>
                </div>
                ${renderPathwayGrid(artsPathways)}
            </div>
        `;
        return;
    }

    // LEVEL 3: ARTS & HUMANITIES CAREERS DIRECTORY
    if (currentStep.id === 'hs_arts_roles') {
        const artsRoles = PATHFINDER_ROLES.arts;
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">Arts & Humanities Stream</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                            💼 Arts & Humanities Careers & Roles Directory
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            All ${artsRoles.length} arts, humanities, social sciences, media, and public policy career roles.
                        </p>
                    </div>
                    <button onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center space-x-1.5 self-start sm:self-center">
                        <i class="fa-solid fa-arrow-left text-xs"></i>
                        <span>Back to Arts Options</span>
                    </button>
                </div>
                ${renderRolesList(artsRoles, 'rose')}
            </div>
        `;
        return;
    }

    // LEVEL 2: CLASS 12 DIRECT EMPLOYMENT
    if (currentStep.id === 'hs_employment') {
        const govtExamIds = ['nda_na', 'ssc_chsl', 'ssc_gd', 'ssc_mts', 'rrb_ntpc'];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Employment Examinations</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        💼 Examination for Employment after Class 12
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        National recruitment examinations open to Class 10/12 pass applicants as documented in the resource centre.
                    </p>
                </div>

                ${renderExamGrid(govtExamIds)}
            </div>
        `;
        return;
    }

    // LEVEL 2: ALL 40 CAREER PATHWAYS
    if (currentStep.id === 'hs_pathways') {
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Interactive Directory</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🧭 All 40 Step-by-Step Career Pathways
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Click any pathway to follow its complete branches: Step 1 (Subjects) ➔ Step 2 (Examinations) ➔ Step 3 (Degrees).
                    </p>
                </div>

                ${renderPathwayGrid(PATHFINDER_PATHWAYS)}
            </div>
        `;
        return;
    }

    // LEVEL 2: GRADUATION - POSTGRADUATE ENTRANCES
    if (currentStep.id === 'grad_entrance') {
        const pgExamIds = ['gate', 'cat', 'xat', 'cmat', 'cuet_pg', 'ceed', 'clat', 'nid_dat'];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Graduation Level</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        📝 Postgraduate Entrance Examinations
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Target examinations for Master's, MBA, M.Tech, M.Des, and LL.M. admissions supported in the document.
                    </p>
                </div>

                ${renderExamGrid(pgExamIds)}
            </div>
        `;
        return;
    }

    // LEVEL 2: GRADUATION - RECRUITMENT EXAMINATIONS
    if (currentStep.id === 'grad_recruitment') {
        const gradRecruitIds = [
            'upsc_cse', 'ifos', 'ies', 'ssc_cgl', 'ibps_po', 'ibps_clerk', 
            'sbi_po', 'rbi_grade_b', 'cds', 'afcat', 'aai_je', 'lic_aao', 
            'state_psc', 'rrb_ntpc', 'ca'
        ];
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-site-primary dark:text-blue-400">Graduation Level</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        🏛️ National Recruitment Examinations (Graduate Level)
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Government, Civil Services, Banking, Defence, and Regulatory recruitment examinations from the source text.
                    </p>
                </div>

                ${renderExamGrid(gradRecruitIds)}
            </div>
        `;
        return;
    }

    // LEVEL 2: GRADUATION - SPECIALIZATIONS
    if (currentStep.id === 'grad_specialization') {
        const specialPathways = PATHFINDER_PATHWAYS.filter(p => 
            ['ca', 'investment_banker', 'product_manager', 'corporate_lawyer', 'judge', 'psychologist'].includes(p.id)
        );
        stage.innerHTML = `
            <div class="space-y-6">
                <div class="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Graduation Level</span>
                    <h3 class="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                        💼 Graduate Specialization & Conversion Pathways
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Direct specialization routes open during or after graduation (Law, Management, Banking, CA, Psychology).
                    </p>
                </div>

                ${renderPathwayGrid(specialPathways)}
            </div>
        `;
        return;
    }
}

// RENDER HELPERS

function renderExamGrid(examIdList) {
    const buttons = examIdList.map(id => {
        const exam = PATHFINDER_EXAMS[id];
        if (!exam) return '';
        const safeName = exam.name.replace(/'/g, "\\'");
        return `
            <div role="button" tabindex="0" onclick="fcPush('exam_${exam.id}', '${safeName}', '📝')" 
                onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('exam_${exam.id}', '${safeName}', '📝');}" 
                class="group bg-white dark:bg-slate-800 p-4 sm:p-4.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-site-primary dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700/60 hover:shadow-md transition cursor-pointer flex items-center justify-between gap-3">
                <div class="flex items-center space-x-3 min-w-0">
                    <span class="text-xl shrink-0">📝</span>
                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-site-primary dark:group-hover:text-blue-400 transition truncate">${exam.name}</span>
                </div>
                <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0 group-hover:bg-site-primary group-hover:text-white transition">
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                </div>
            </div>
        `;
    }).filter(Boolean).join('');

    return `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">${buttons}</div>`;
}

function renderPathwayGrid(pathways) {
    const buttons = pathways.map(p => {
        const safeTitle = p.title.replace(/'/g, "\\'");
        return `
            <div role="button" tabindex="0" onclick="fcPush('pathway_${p.id}', '${safeTitle}', '${p.icon}')" 
                onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();fcPush('pathway_${p.id}', '${safeTitle}', '${p.icon}');}" 
                class="group bg-white dark:bg-slate-800 p-4 sm:p-4.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-slate-700/60 hover:shadow-md transition cursor-pointer flex items-center justify-between gap-3">
                <div class="flex items-center space-x-3 min-w-0">
                    <span class="text-xl shrink-0">${p.icon}</span>
                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate">${p.title}</span>
                </div>
                <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                </div>
            </div>
        `;
    }).join('');

    return `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">${buttons}</div>`;
}

function renderRolesList(roles, color) {
    const badges = roles.map(r => `
        <span class="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600/60 font-medium">
            ${r}
        </span>
    `).join('');

    return `
        <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div class="flex flex-wrap gap-2">${badges}</div>
        </div>
    `;
}

function renderExamDetailView(container, examId) {
    const exam = PATHFINDER_EXAMS[examId];
    if (!exam) {
        container.innerHTML = `
            <div class="p-6 text-center">
                <p class="text-rose-500 font-bold">Exam profile not found.</p>
                <button type="button" onclick="flowchartGoBack()" class="mt-3 px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-xl text-xs font-bold">Go Back</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="space-y-6 max-w-4xl mx-auto">
            <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-6">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-700">
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="text-2xl">📝</span>
                            <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">${exam.name}</h3>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Conducted by: <strong>${exam.authority}</strong></p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-site-primary dark:bg-blue-950 dark:text-blue-300">
                            ${exam.frequency || 'Annual'}
                        </span>
                        ${exam.website && exam.website !== 'Refer to official recruitment portal' ? `
                            <a href="${exam.website}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 hover:underline flex items-center space-x-1">
                                <span>Official Portal</span>
                                <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>

                <!-- Specs Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                    <div class="space-y-3">
                        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Purpose & Target Programs</span>
                            <p class="text-slate-800 dark:text-slate-200 font-medium">${exam.purpose || 'Official Examination'}</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Eligibility Criteria</span>
                            <p class="text-slate-800 dark:text-slate-200 font-medium">${exam.eligibility || 'Refer to official notification'}</p>
                        </div>
                    </div>

                    <div class="space-y-3">
                        ${exam.selection ? `
                            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Selection Process</span>
                                <p class="text-slate-800 dark:text-slate-200 font-medium">${exam.selection}</p>
                            </div>
                        ` : ''}
                        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Exam Timeline / Schedule</span>
                            <p class="text-slate-800 dark:text-slate-200 font-medium">${exam.timeline || 'Refer to official portal notification'}</p>
                        </div>
                    </div>
                </div>

                ${exam.tip ? `
                    <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-300 flex items-start space-x-2">
                        <span class="text-base">💡</span>
                        <p><strong>Handbook Guidance:</strong> ${exam.tip}</p>
                    </div>
                ` : ''}

                <!-- Actions -->
                <div class="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700">
                    <button type="button" onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back to Previous List</span>
                    </button>
                    <button type="button" onclick="flowchartReset()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-200 transition">
                        Start Over (Choose Stage)
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderPathwayDetailView(container, pathwayId) {
    const pathway = PATHFINDER_PATHWAYS.find(p => p.id === pathwayId);
    if (!pathway) {
        container.innerHTML = `
            <div class="p-6 text-center">
                <p class="text-rose-500 font-bold">Pathway details not found.</p>
                <button type="button" onclick="flowchartGoBack()" class="mt-3 px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-xl text-xs font-bold">Go Back</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="space-y-6 max-w-4xl mx-auto">
            <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-6">
                <!-- Header -->
                <div class="flex items-center space-x-3 pb-5 border-b border-slate-200 dark:border-slate-700">
                    <span class="text-3xl">${pathway.icon}</span>
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step-by-Step Career Pathway</span>
                        <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-0.5">${pathway.title}</h3>
                    </div>
                </div>

                <!-- Stepper -->
                <div class="space-y-4">
                    <!-- Step 1 -->
                    <div class="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2">
                        <div class="flex items-center space-x-2">
                            <span class="w-7 h-7 rounded-full bg-site-primary text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                            <h4 class="font-bold text-sm sm:text-base text-site-primary dark:text-blue-300">Step 1: High School / Class 12 Stream & Subjects</h4>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-9 font-medium leading-relaxed">
                            ${pathway.step1}
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
                        <div class="flex items-center space-x-2">
                            <span class="w-7 h-7 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                            <h4 class="font-bold text-sm sm:text-base text-amber-800 dark:text-amber-300">Step 2: Competitive Entrance Examinations</h4>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-9 font-medium leading-relaxed">
                            ${pathway.step2}
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                        <div class="flex items-center space-x-2">
                            <span class="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                            <h4 class="font-bold text-sm sm:text-base text-emerald-700 dark:text-emerald-300">Step 3: Degree Programme & Qualifications</h4>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-9 font-medium leading-relaxed">
                            ${pathway.step3}
                        </p>
                    </div>
                </div>

                <!-- Related Examinations from this Pathway -->
                ${pathway.exams && pathway.exams.length > 0 ? `
                    <div class="pt-2 space-y-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Relevant Examinations Documented:</span>
                        <div class="flex flex-wrap gap-2">
                            ${pathway.exams.map(eId => {
                                const ex = PATHFINDER_EXAMS[eId];
                                if (!ex) return '';
                                return `
                                    <button type="button" onclick="fcPush('exam_${ex.id}', '${ex.name}', '📝')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-site-primary hover:text-white dark:hover:bg-blue-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center space-x-1.5">
                                        <span>📝</span><span>${ex.name}</span>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Actions -->
                <div class="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700">
                    <button type="button" onclick="flowchartGoBack()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back to Pathways List</span>
                    </button>
                    <button type="button" onclick="flowchartReset()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-200 transition">
                        Start Over (Choose Stage)
                    </button>
                </div>
            </div>
        </div>
    `;
}

function initFlowchart() {
    flowchartReset();
}