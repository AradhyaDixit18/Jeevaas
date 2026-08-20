/**
 * ============================================================================
 *  CONTENT DATA — departments, careers, facilities, patient info & wellness
 * ============================================================================
 *  Edit copy here. Departments power both the cards and the reusable detail
 *  pages. Icons are string keys resolved in src/components/Icon.js and "tone"
 *  keys are resolved in src/lib/tones.js.
 *
 *  The content below is general hospital information written to be accurate and
 *  non-exaggerated. Replace or extend with the hospital's confirmed specifics.
 * ============================================================================
 */

// --- DEPARTMENTS / SPECIALTIES --------------------------------------------
// Exported as `services` because the shared components (cards, booking form,
// footer) read that name. Each entry is a clinical department.
export const services = [
  {
    slug: "general-medicine",
    icon: "stethoscope",
    tone: "blue",
    title: "General Medicine",
    short:
      "Diagnosis and treatment of everyday and complex adult illnesses, from fever to long-term conditions.",
    overview:
      "Our General Medicine department is the first point of care for adults. Our physicians diagnose and manage a wide range of acute and chronic conditions, coordinate with specialists when needed, and focus on preventive health so problems are caught early.",
    points: [
      "Care for fever, infections, and seasonal illness",
      "Management of diabetes, hypertension, and thyroid disorders",
      "Preventive health checks and lifestyle guidance",
      "Coordinated referrals to specialist departments",
    ],
    conditions: ["Diabetes", "Hypertension", "Thyroid disorders", "Infections", "Fever & fatigue"],
    good_for:
      "Ongoing symptoms, a chronic condition that needs monitoring, or a general health concern you are unsure where to take.",
  },
  {
    slug: "cardiology",
    icon: "heart",
    tone: "rose",
    title: "Cardiology",
    short:
      "Heart care covering diagnosis, prevention, and management of cardiac conditions.",
    overview:
      "The Cardiology department cares for the heart and circulatory system. From evaluating chest pain and palpitations to managing blood pressure and long-term heart health, our team uses modern diagnostics to guide clear, individualised treatment plans.",
    points: [
      "Evaluation of chest pain, breathlessness, and palpitations",
      "ECG, echocardiography, and treadmill testing",
      "Blood pressure and cholesterol management",
      "Heart-healthy lifestyle and follow-up care",
    ],
    conditions: ["Coronary artery disease", "Hypertension", "Arrhythmia", "Heart failure", "High cholesterol"],
    good_for:
      "Chest discomfort, an irregular heartbeat, high blood pressure, or a family history of heart disease.",
  },
  {
    slug: "orthopaedics",
    icon: "bone",
    tone: "amber",
    title: "Orthopaedics",
    short:
      "Bone, joint, and spine care, including fracture management and joint pain relief.",
    overview:
      "Our Orthopaedics department treats injuries and disorders of the bones, joints, muscles, and spine. We manage everything from fractures and sports injuries to arthritis and joint pain, with a focus on restoring movement and comfort.",
    points: [
      "Fracture and trauma management",
      "Treatment of arthritis and joint pain",
      "Sports injury care and rehabilitation",
      "Back, neck, and spine pain management",
    ],
    conditions: ["Fractures", "Arthritis", "Sports injuries", "Back & neck pain", "Joint pain"],
    good_for:
      "A recent injury, persistent joint or back pain, or difficulty moving comfortably.",
  },
  {
    slug: "paediatrics",
    icon: "baby",
    tone: "sky",
    title: "Paediatrics & Neonatology",
    short:
      "Gentle, complete healthcare for newborns, children, and adolescents.",
    overview:
      "The Paediatrics department cares for children from birth through the teenage years. We provide routine check-ups, immunisation, growth and nutrition guidance, and treatment for childhood illness in a calm, child-friendly setting.",
    points: [
      "Newborn and infant care",
      "Vaccination and immunisation schedules",
      "Growth, development, and nutrition monitoring",
      "Treatment of childhood infections and illness",
    ],
    conditions: ["Childhood infections", "Vaccination", "Growth concerns", "Nutrition", "Newborn care"],
    good_for:
      "A child's routine check-up, vaccinations, or any concern about your child's health or development.",
  },
  {
    slug: "gynaecology-obstetrics",
    icon: "gynae",
    tone: "violet",
    title: "Obstetrics & Gynaecology",
    short:
      "Complete women's health, from pregnancy care to routine and specialist gynaecology.",
    overview:
      "Our Obstetrics & Gynaecology department supports women through every stage of life. We provide antenatal and delivery care, treatment for gynaecological conditions, and routine screening, all with privacy and compassion.",
    points: [
      "Pregnancy (antenatal) and delivery care",
      "Menstrual and hormonal health",
      "Screening and preventive women's health",
      "Treatment of common gynaecological conditions",
    ],
    conditions: ["Pregnancy care", "Menstrual disorders", "PCOS", "Menopause", "Infertility guidance"],
    good_for:
      "Pregnancy care, an irregular cycle, or any women's health concern that needs specialist attention.",
  },
  {
    slug: "general-surgery",
    icon: "surgery",
    tone: "cyan",
    title: "General & Laparoscopic Surgery",
    short:
      "Modern surgical care, including minimally invasive (keyhole) procedures.",
    overview:
      "The Surgery department performs a broad range of planned and emergency procedures. Where suitable, we use laparoscopic (keyhole) techniques for smaller incisions, less pain, and a faster recovery, with careful pre- and post-operative care.",
    points: [
      "Laparoscopic (keyhole) and open surgery",
      "Hernia, gallbladder, and appendix procedures",
      "Day-care and planned surgical care",
      "Thorough pre-operative assessment and follow-up",
    ],
    conditions: ["Hernia", "Gallstones", "Appendicitis", "Piles / fistula", "Lumps & swellings"],
    good_for:
      "A surgical condition recommended by a doctor, or a second opinion on a planned procedure.",
  },
  {
    slug: "ent",
    icon: "ent",
    tone: "teal",
    title: "ENT (Ear, Nose & Throat)",
    short:
      "Care for ear, nose, throat, and related head and neck conditions.",
    overview:
      "Our ENT department diagnoses and treats disorders of the ear, nose, throat, and sinuses. From recurring infections and hearing concerns to allergies and voice problems, we offer both medical and surgical care.",
    points: [
      "Ear infections and hearing evaluation",
      "Sinus, nasal, and allergy treatment",
      "Throat, tonsil, and voice care",
      "Corrective ENT surgery when needed",
    ],
    conditions: ["Sinusitis", "Ear infections", "Hearing loss", "Tonsillitis", "Allergic rhinitis"],
    good_for:
      "Blocked sinuses, recurring ear or throat infections, or changes in hearing or voice.",
  },
  {
    slug: "ophthalmology",
    icon: "eye",
    tone: "indigo",
    title: "Ophthalmology (Eye Care)",
    short:
      "Comprehensive eye care, from vision testing to the treatment of eye conditions.",
    overview:
      "The Ophthalmology department cares for your eyes and vision. We provide eye examinations, treatment for common eye conditions, and management of vision changes, helping you protect your sight at every age.",
    points: [
      "Vision testing and prescription checks",
      "Treatment of cataract, glaucoma, and infections",
      "Diabetic eye screening",
      "Advice on eye care and protection",
    ],
    conditions: ["Cataract", "Glaucoma", "Refractive errors", "Dry eyes", "Eye infections"],
    good_for:
      "Blurred vision, eye strain or irritation, or a routine eye check, especially with diabetes.",
  },
  {
    slug: "neurology",
    icon: "brain",
    tone: "violet",
    title: "Neurology",
    short:
      "Diagnosis and management of conditions affecting the brain and nervous system.",
    overview:
      "Our Neurology department evaluates and treats disorders of the brain, spine, and nerves. We care for conditions such as headaches, epilepsy, and stroke, combining careful assessment with clear, ongoing management.",
    points: [
      "Evaluation of headaches and migraines",
      "Management of epilepsy and seizures",
      "Stroke assessment and follow-up care",
      "Care for nerve and movement disorders",
    ],
    conditions: ["Migraine", "Epilepsy", "Stroke", "Vertigo", "Nerve pain"],
    good_for:
      "Frequent headaches, dizziness, numbness, or any change in movement, memory, or sensation.",
  },
  {
    slug: "dermatology",
    icon: "derma",
    tone: "orange",
    title: "Dermatology",
    short:
      "Care for skin, hair, and nail conditions, medical and cosmetic.",
    overview:
      "The Dermatology department treats conditions of the skin, hair, and nails. From acne and infections to allergies and hair concerns, we provide evidence-based treatment with practical, everyday care advice.",
    points: [
      "Treatment of acne, rashes, and infections",
      "Allergy and eczema management",
      "Hair fall and scalp care",
      "Guidance on skin health and protection",
    ],
    conditions: ["Acne", "Eczema", "Fungal infections", "Hair fall", "Skin allergies"],
    good_for:
      "A persistent rash, acne, hair or nail problems, or any skin concern that is not settling.",
  },
  {
    slug: "gastroenterology",
    icon: "gastro",
    tone: "emerald",
    title: "Gastroenterology",
    short:
      "Care for the digestive system, liver, and related conditions.",
    overview:
      "Our Gastroenterology department diagnoses and manages conditions of the stomach, intestines, and liver. We treat everything from acidity and infections to long-term digestive disorders, with a focus on comfort and lasting relief.",
    points: [
      "Treatment of acidity, ulcers, and reflux",
      "Care for liver and gallbladder conditions",
      "Management of chronic digestive disorders",
      "Diet and lifestyle guidance for gut health",
    ],
    conditions: ["Acidity & reflux", "Ulcers", "Liver conditions", "IBS", "Constipation"],
    good_for:
      "Ongoing acidity, abdominal pain, or any persistent digestive or bowel problem.",
  },
  {
    slug: "nephrology-urology",
    icon: "kidney",
    tone: "cyan",
    title: "Nephrology & Urology",
    short:
      "Care for the kidneys and urinary system, medical and surgical.",
    overview:
      "The Nephrology & Urology department cares for the kidneys, bladder, and urinary tract. We manage kidney conditions, urinary infections, and stones, combining medical treatment with surgical options where required.",
    points: [
      "Kidney health assessment and management",
      "Treatment of urinary infections",
      "Kidney and bladder stone care",
      "Guidance for long-term kidney conditions",
    ],
    conditions: ["Kidney stones", "Urinary infections", "Prostate concerns", "Chronic kidney disease"],
    good_for:
      "Painful or frequent urination, kidney stones, or a kidney condition that needs specialist care.",
  },
  {
    slug: "dental",
    icon: "tooth",
    tone: "teal",
    title: "Dental Care",
    short:
      "Complete dental treatment, from routine cleaning to advanced procedures.",
    overview:
      "Our Dental department provides gentle, modern care for the whole family. From cleaning and fillings to root canals, crowns, and braces, we focus on painless treatment and long-term oral health.",
    points: [
      "Cleaning, fillings, and routine check-ups",
      "Root canal treatment and crowns",
      "Braces and aligners",
      "Gentle dental care for children",
    ],
    conditions: ["Toothache", "Cavities", "Gum disease", "Misaligned teeth", "Missing teeth"],
    good_for:
      "A toothache, a routine check-up, or any dental treatment for adults or children.",
  },
  {
    slug: "emergency-critical-care",
    icon: "ambulance",
    tone: "red",
    title: "Emergency & Critical Care",
    short:
      "24x7 emergency department and intensive care, ready when every minute counts.",
    overview:
      "Our Emergency & Critical Care unit operates round the clock. A trained team, rapid triage, and an equipped ambulance service mean urgent medical needs are met quickly, with critical care support for patients who need close monitoring.",
    points: [
      "24x7 emergency department",
      "Ambulance service for rapid transfer",
      "Rapid triage and stabilisation",
      "Intensive care (ICU) support",
    ],
    conditions: ["Accidents & trauma", "Chest pain", "Breathing difficulty", "Severe infection", "Sudden collapse"],
    good_for:
      "Any medical emergency. In an emergency, call the helpline or come to the hospital immediately.",
  },
  {
    slug: "diagnostics-laboratory",
    icon: "lab",
    tone: "blue",
    title: "Diagnostics & Laboratory",
    short:
      "In-house pathology and imaging for fast, reliable results.",
    overview:
      "Our Diagnostics & Laboratory services support every department with accurate, timely testing. In-house pathology and imaging mean quicker results, faster diagnosis, and treatment decisions without delay.",
    points: [
      "Pathology and blood testing",
      "Digital X-ray and ultrasound",
      "ECG and cardiac testing",
      "Health check-up packages",
    ],
    conditions: ["Blood tests", "X-ray & imaging", "Ultrasound", "Health packages"],
    good_for:
      "A test ordered by your doctor, or a preventive health check-up.",
  },
  {
    slug: "physiotherapy",
    icon: "physio",
    tone: "amber",
    title: "Physiotherapy & Rehabilitation",
    short:
      "Guided recovery to restore strength, movement, and independence.",
    overview:
      "The Physiotherapy & Rehabilitation department helps patients recover after injury, surgery, or illness. Personalised exercise and therapy programmes rebuild strength and mobility and relieve long-standing pain.",
    points: [
      "Post-surgery and post-injury rehabilitation",
      "Back, neck, and joint pain relief",
      "Stroke and neurological rehabilitation",
      "Personalised exercise programmes",
    ],
    conditions: ["Post-op recovery", "Chronic pain", "Sports rehab", "Stroke recovery", "Posture problems"],
    good_for:
      "Recovery after surgery or injury, or ongoing pain and stiffness that limits movement.",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
// alias for readability where "department" reads better
export const getDepartment = getService;

// --- WHY CHOOSE US ---------------------------------------------------------
export const whyChooseUs = [
  {
    icon: "userMd",
    title: "Specialist-Led Care",
    text: "A team of doctors across multiple specialties, working together on your care under one roof.",
  },
  {
    icon: "ambulance",
    title: "24x7 Emergency",
    text: "Round-the-clock emergency department and ambulance service, ready whenever you need us.",
  },
  {
    icon: "microscope",
    title: "Modern Diagnostics",
    text: "In-house laboratory and imaging for faster, more reliable results and quicker treatment.",
  },
  {
    icon: "heart",
    title: "Patient-First Approach",
    text: "Clear explanations, honest advice, and treatment planned around you and your family.",
  },
];

// --- FACILITIES ------------------------------------------------------------
export const facilities = [
  {
    icon: "ambulance",
    title: "Emergency & Ambulance",
    text: "A 24x7 emergency department with a ready ambulance service for rapid, safe transfer.",
  },
  {
    icon: "bed",
    title: "Inpatient & ICU",
    text: "Comfortable wards and a monitored intensive care unit for patients who need close support.",
  },
  {
    icon: "surgery",
    title: "Modular Operation Theatres",
    text: "Well-equipped, sterile theatres for planned and emergency surgical procedures.",
  },
  {
    icon: "microscope",
    title: "Diagnostics & Pathology",
    text: "In-house laboratory, digital X-ray, ultrasound, and cardiac testing for quick results.",
  },
  {
    icon: "pills",
    title: "24x7 Pharmacy",
    text: "An in-house pharmacy so prescribed medicines are available whenever they are needed.",
  },
  {
    icon: "shield",
    title: "Strict Infection Control",
    text: "Careful sterilisation and hygiene protocols throughout the hospital, on every visit.",
  },
];

// A visual grid of hospital spaces for the Gallery (no external photos required).
export const facilitySpaces = [
  { icon: "hospital", tone: "blue", title: "Reception & Waiting", text: "A calm, welcoming entrance and comfortable waiting areas." },
  { icon: "stethoscope", tone: "sky", title: "OPD Consultation Rooms", text: "Private rooms for unhurried consultations with our specialists." },
  { icon: "ambulance", tone: "red", title: "Emergency Department", text: "A 24x7 unit built for rapid response and stabilisation." },
  { icon: "surgery", tone: "cyan", title: "Operation Theatres", text: "Sterile, modular theatres for safe surgical care." },
  { icon: "bed", tone: "violet", title: "Wards & ICU", text: "Clean inpatient wards and a closely monitored ICU." },
  { icon: "microscope", tone: "emerald", title: "Diagnostic Centre", text: "In-house laboratory and imaging under one roof." },
  { icon: "pills", tone: "amber", title: "In-house Pharmacy", text: "Prescribed medicines available around the clock." },
  { icon: "physio", tone: "teal", title: "Physiotherapy Unit", text: "A dedicated space for guided rehabilitation and recovery." },
];

// --- PATIENT INFORMATION ---------------------------------------------------
export const patientResources = [
  {
    icon: "calendar",
    title: "Booking Your Visit",
    text: "Request an appointment online in under a minute, or call the hospital directly. Our team confirms your slot by phone.",
  },
  {
    icon: "list",
    title: "What to Bring",
    text: "Bring any past medical records, reports, or scans, a list of current medicines, and a valid ID. Arrive a few minutes early for a relaxed start.",
  },
  {
    icon: "bed",
    title: "Admissions & Inpatient Stay",
    text: "For planned admissions, our team guides you through paperwork, room options, and estimates. A relative can stay to support most inpatients.",
  },
  {
    icon: "rupee",
    title: "Billing, Insurance & TPA",
    text: "We provide clear estimates before planned procedures. Please carry your insurance or TPA details so our desk can guide you on coverage and cashless options.",
  },
  {
    icon: "clock",
    title: "Visiting Hours",
    text: "Visiting hours are set to help patients rest and recover. Please check current timings with our front desk, and limit the number of visitors per patient.",
  },
  {
    icon: "shield",
    title: "Before a Procedure",
    text: "Follow any fasting or medication instructions given by your doctor, and tell us about medical conditions or allergies so we can plan safely.",
  },
];

// --- HEALTH & WELLNESS -----------------------------------------------------
export const healthTips = [
  {
    icon: "heart",
    title: "Know Your Numbers",
    text: "Check blood pressure, blood sugar, and cholesterol regularly. Catching changes early makes conditions far easier to manage.",
  },
  {
    icon: "stethoscope",
    title: "Don't Delay Symptoms",
    text: "Chest pain, breathlessness, sudden weakness, or a severe headache need urgent attention. When in doubt, get checked.",
  },
  {
    icon: "sparkle",
    title: "Move Every Day",
    text: "Even 30 minutes of walking most days supports your heart, joints, and mood. Small, regular activity adds up.",
  },
  {
    icon: "shield",
    title: "Stay Up to Date on Vaccines",
    text: "Vaccination protects children and adults alike. Ask our team which immunisations are right for your family.",
  },
  {
    icon: "pills",
    title: "Take Medicines as Advised",
    text: "Finish the full course and keep to the schedule your doctor sets, even once you feel better. Never stop on your own.",
  },
  {
    icon: "calendar",
    title: "Book a Yearly Health Check",
    text: "An annual check-up finds silent problems early, when they are simpler and cheaper to treat.",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment form on this site, call the hospital, or message us on WhatsApp. Our team will confirm your slot by phone.",
  },
  {
    q: "Do you have 24x7 emergency services?",
    a: "Yes. Our emergency department and ambulance service operate around the clock. In an emergency, call the helpline or come directly to the hospital.",
  },
  {
    q: "Which specialties are available?",
    a: "Jeevaas Hospital is a multispeciality hospital with departments including General Medicine, Cardiology, Orthopaedics, Paediatrics, Obstetrics & Gynaecology, Surgery, ENT, Ophthalmology, Neurology, Dermatology, and more. See the Departments page for the full list.",
  },
  {
    q: "Do you offer cashless treatment or accept insurance?",
    a: "Please carry your insurance or TPA details. Our billing desk will guide you on coverage and cashless options for eligible plans and procedures.",
  },
  {
    q: "Can I get my tests done at the hospital?",
    a: "Yes. Our in-house laboratory and imaging services handle blood tests, X-ray, ultrasound, ECG, and health check-up packages, so results reach your doctor quickly.",
  },
  {
    q: "How do I choose the right department?",
    a: "If you are unsure, start with General Medicine. Our physicians will assess you and refer you to the right specialist if needed.",
  },
];

export const wellnessDisclaimer =
  "This information is general health education, not a diagnosis. For advice about your specific situation, please book a consultation with our doctors.";

// --- DOCTORS ---------------------------------------------------------------
// ⚠ INTENTIONALLY EMPTY. No doctor names, degrees, or experience are invented.
// Add real entries and the Doctors page + booking form populate automatically:
//   { name, title, department, specialization, experience, image }
// Example (remove the comment and fill in real, verified details):
//   { name: "Dr. A. Sharma", title: "Consultant Physician", department: "General Medicine",
//     specialization: "Diabetes & internal medicine", experience: "12+ years", image: "" }
export const doctors = [];

// --- TESTIMONIALS ----------------------------------------------------------
// ⚠ INTENTIONALLY EMPTY. Add genuine, consented patient reviews to enable the
// section:  { name, rating, review, location }
export const testimonials = [];

// --- TRUST BADGES (capability statements — confirm before go-live) ----------
export const trustBadges = [
  { icon: "hospital", label: "Multispeciality Care" },
  { icon: "ambulance", label: "24x7 Emergency" },
  { icon: "microscope", label: "In-house Diagnostics" },
  { icon: "heart", label: "Patient-First" },
];

// --- CAREERS ---------------------------------------------------------------
export const careerBenefits = [
  {
    icon: "graduation",
    title: "Learning & Growth",
    text: "Work alongside experienced specialists, with support for training and professional development.",
  },
  {
    icon: "users",
    title: "Collaborative Team",
    text: "A respectful, multidisciplinary environment where every role is valued in patient care.",
  },
  {
    icon: "award",
    title: "Meaningful Work",
    text: "Be part of a hospital that puts patients first and makes a real difference in the community.",
  },
  {
    icon: "shield",
    title: "Supportive Culture",
    text: "Clear processes, modern facilities, and a workplace built on safety and fairness.",
  },
];

// Current openings. ⚠ EDIT THIS LIST as roles open and close. When it is empty,
// the Careers page automatically shows a general-application message instead.
// Each: { title, department, type, location, summary }
export const jobOpenings = [
  {
    title: "Staff Nurse",
    department: "Nursing",
    type: "Full-time",
    location: "Kalyanpur, Kanpur",
    summary:
      "Provide compassionate bedside care across wards, ICU, and emergency, supporting doctors and patients through every stage of treatment.",
  },
  {
    title: "Consultant — General Medicine",
    department: "General Medicine",
    type: "Full-time",
    location: "Kalyanpur, Kanpur",
    summary:
      "Diagnose and manage adult medical conditions in OPD and inpatient settings, and coordinate with specialist departments.",
  },
  {
    title: "Front Desk & Patient Coordinator",
    department: "Administration",
    type: "Full-time",
    location: "Kalyanpur, Kanpur",
    summary:
      "Be the welcoming first point of contact, managing appointments, enquiries, and patient guidance at reception.",
  },
  {
    title: "Lab Technician",
    department: "Diagnostics & Laboratory",
    type: "Full-time",
    location: "Kalyanpur, Kanpur",
    summary:
      "Perform sample collection and laboratory testing accurately and safely, supporting fast, reliable diagnosis.",
  },
];
