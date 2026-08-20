/**
 * ============================================================================
 *  KIDS ZONE CONTENT — friendly, hospital-themed learning for children
 * ============================================================================
 *  Simple, reassuring content that helps children understand the hospital,
 *  meet the people who help them, and learn healthy habits. Kept gentle and
 *  age-appropriate. Icons resolve in src/components/Icon.js.
 * ============================================================================
 */

// --- MEET THE HOSPITAL HEROES (flip cards) --------------------------------
export const heroes = [
  {
    icon: "userMd",
    tone: "blue",
    name: "The Doctor",
    role: "Makes you feel better",
    fact: "Doctors listen to your heart, check how you feel, and help your body get strong and healthy again.",
  },
  {
    icon: "nurse",
    tone: "rose",
    name: "The Nurse",
    role: "Takes care of you",
    fact: "Nurses are super helpers. They give gentle care, a soft bandage, and a big smile when you need one.",
  },
  {
    icon: "tooth",
    tone: "teal",
    name: "The Dentist",
    role: "Keeps your smile shiny",
    fact: "Dentists count your teeth and show you how to keep them sparkling clean. Big smile, please!",
  },
  {
    icon: "xray",
    tone: "indigo",
    name: "The Radiologist",
    role: "Takes special pictures",
    fact: "An X-ray is like a magic camera that takes a photo of the bones inside you. It doesn't hurt at all.",
  },
  {
    icon: "physio",
    tone: "amber",
    name: "The Physio",
    role: "Helps you move again",
    fact: "Physiotherapists teach fun exercises that help your arms and legs get strong after a bump or a break.",
  },
  {
    icon: "ambulance",
    tone: "red",
    name: "The Ambulance Team",
    role: "Comes fast to help",
    fact: "The ambulance has flashing lights and a loud siren so it can reach people quickly when they need help.",
  },
  {
    icon: "prescription",
    tone: "emerald",
    name: "The Pharmacist",
    role: "Gives the right medicine",
    fact: "Pharmacists know all about medicines and make sure you get exactly the right one to help you feel better.",
  },
  {
    icon: "microscope",
    tone: "cyan",
    name: "The Lab Team",
    role: "Solves body mysteries",
    fact: "The lab team looks through a microscope to find tiny clues that help the doctor know how to help you.",
  },
];

// --- HOSPITAL JOURNEY (step-through: what happens at a check-up) -----------
export const journeySteps = [
  {
    icon: "handshake",
    title: "1. You Arrive",
    text: "You come to the hospital with a grown-up. The friendly front desk says hello and helps you check in.",
  },
  {
    icon: "clipboard",
    title: "2. A Little Wait",
    text: "You sit in the waiting area. You can read a book or take a slow, deep breath. It's a calm place.",
  },
  {
    icon: "nurse",
    title: "3. Meet the Nurse",
    text: "A nurse might check how tall you are and how warm you feel with a soft thermometer. Easy peasy!",
  },
  {
    icon: "stethoscope",
    title: "4. See the Doctor",
    text: "The doctor listens to your heart with a stethoscope and asks how you feel. You can ask questions too!",
  },
  {
    icon: "bandage",
    title: "5. All Done",
    text: "Sometimes you get a bandage or some medicine to help. You were so brave the whole time.",
  },
  {
    icon: "medal",
    title: "6. Hero Time!",
    text: "You did it! Being at the hospital helps your body stay healthy and strong. Give yourself a high five!",
  },
];

// --- HEALTHY HABITS QUIZ ---------------------------------------------------
export const quiz = [
  {
    q: "How many times a day should you brush your teeth?",
    options: ["Never", "Once a week", "Two times a day", "Only on birthdays"],
    answer: 2,
    explain: "Brush two times a day, morning and night, to keep your teeth shiny and strong.",
  },
  {
    q: "When should you wash your hands?",
    options: ["Before eating", "After using the toilet", "After playing outside", "All of these!"],
    answer: 3,
    explain: "Washing your hands often keeps germs away and helps you stay healthy.",
  },
  {
    q: "Which drink is best for your body all day?",
    options: ["Fizzy soda", "Water", "Milkshake", "Sweet juice"],
    answer: 1,
    explain: "Water is the best drink. It keeps your whole body happy and working well.",
  },
  {
    q: "How many hours of sleep helps a child grow?",
    options: ["1 hour", "About 9 to 11 hours", "No sleep", "30 minutes"],
    answer: 1,
    explain: "Good sleep helps you grow, learn, and feel full of energy the next day.",
  },
  {
    q: "What should you do before crossing the road?",
    options: ["Run fast", "Close your eyes", "Stop, look, and hold a hand", "Skip across"],
    answer: 2,
    explain: "Stop, look both ways, and hold a grown-up's hand. Staying safe is being healthy too!",
  },
];

// --- HEALTHY PLATE (sort foods: everyday vs sometimes) ---------------------
export const foods = [
  { name: "Apple", icon: "apple", healthy: true },
  { name: "Carrot", icon: "carrot", healthy: true },
  { name: "Water", icon: "tint", healthy: true },
  { name: "Fish", icon: "fish", healthy: true },
  { name: "Leafy Greens", icon: "leaf", healthy: true },
  { name: "Egg", icon: "egg", healthy: true },
  { name: "Cookie", icon: "cookie", healthy: false },
  { name: "Ice Cream", icon: "icecream", healthy: false },
  { name: "Candy", icon: "candy", healthy: false },
  { name: "Cake", icon: "cake", healthy: false },
];

// --- TOOL MATCH (match the tool to what it does) --------------------------
export const tools = [
  { icon: "stethoscope", name: "Stethoscope", use: "Listens to your heartbeat" },
  { icon: "thermometer", name: "Thermometer", use: "Checks if you feel warm" },
  { icon: "bandage", name: "Bandage", use: "Covers a small cut" },
  { icon: "tooth", name: "Tooth Mirror", use: "Helps count your teeth" },
  { icon: "xray", name: "X-ray", use: "Takes a photo of your bones" },
];
