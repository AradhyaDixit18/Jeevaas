/**
 * ============================================================================
 *  KIDS HEALTH ZONE — content for the interactive children's section
 * ============================================================================
 *  All information is age-appropriate, general, and medically responsible.
 *  Nothing here is a medical instruction or diagnosis.
 * ============================================================================
 */

// Simple, cheerful health facts for the "Did you know?" cards
export const kidFacts = [
  "You have 20 baby teeth, and grown-ups have 32 teeth!",
  "Teeth are the hardest part of your whole body.",
  "Brushing for 2 minutes keeps sugar bugs away.",
  "Drinking water helps wash your teeth between meals.",
  "Smiling uses fewer muscles than frowning — so smile more!",
  "Crunchy fruits and veggies help clean your teeth naturally.",
];

// Healthy vs. treat foods — used by the "Feed the Smile" sorting game
export const foodGame = {
  healthy: [
    { emoji: "🥕", name: "Carrot" },
    { emoji: "🍎", name: "Apple" },
    { emoji: "🥛", name: "Milk" },
    { emoji: "🧀", name: "Cheese" },
    { emoji: "🥦", name: "Broccoli" },
    { emoji: "💧", name: "Water" },
  ],
  treats: [
    { emoji: "🍬", name: "Candy" },
    { emoji: "🍭", name: "Lollipop" },
    { emoji: "🥤", name: "Soda" },
    { emoji: "🍩", name: "Donut" },
    { emoji: "🍫", name: "Chocolate" },
    { emoji: "🧁", name: "Cupcake" },
  ],
};

// Steps for the animated tooth-brushing guide
export const brushingSteps = [
  { emoji: "🪥", title: "Add Toothpaste", text: "A pea-sized dab is all you need." },
  { emoji: "⬆️", title: "Brush the Fronts", text: "Small circles on the outside of every tooth." },
  { emoji: "⬇️", title: "Brush the Backs", text: "Don't forget behind the teeth too!" },
  { emoji: "😁", title: "Brush the Tops", text: "The chewing surfaces where food hides." },
  { emoji: "👅", title: "Brush Your Tongue", text: "A quick brush keeps your breath fresh." },
  { emoji: "💧", title: "Rinse & Smile", text: "Spit, rinse, and show off that clean smile!" },
];

// Steps for the hand-washing animation (general child health)
export const handWashSteps = [
  { emoji: "💧", text: "Wet your hands with clean water." },
  { emoji: "🧼", text: "Add soap and rub your palms together." },
  { emoji: "👐", text: "Scrub the backs, between fingers, and thumbs." },
  { emoji: "⏱️", text: "Keep scrubbing while you sing a short song." },
  { emoji: "🚿", text: "Rinse all the soap away." },
  { emoji: "🌟", text: "Dry with a clean towel. All done!" },
];

// Healthy-habits quiz — friendly, obvious answers, positive reinforcement
export const habitsQuiz = [
  {
    question: "How many times a day should you brush your teeth?",
    options: ["Never", "Once", "Twice", "Only on birthdays"],
    answer: 2,
  },
  {
    question: "Which drink is best for your teeth?",
    options: ["Soda", "Water", "Sugary juice", "Milkshake"],
    answer: 1,
  },
  {
    question: "How long should you brush each time?",
    options: ["2 seconds", "2 minutes", "2 hours", "All day"],
    answer: 1,
  },
  {
    question: "Which snack makes your teeth happiest?",
    options: ["Candy", "An apple", "Chips", "Chocolate"],
    answer: 1,
  },
  {
    question: "When should a dentist check your smile?",
    options: ["Never", "Only when it hurts", "Every 6 months", "Once ever"],
    answer: 2,
  },
];

// Body-part learning cards (simple, friendly)
export const bodyParts = [
  { emoji: "🦷", name: "Teeth", text: "Help you chew food and smile big." },
  { emoji: "👅", name: "Tongue", text: "Helps you taste and talk." },
  { emoji: "😀", name: "Gums", text: "Keep your teeth snug and healthy." },
  { emoji: "🫁", name: "Lungs", text: "Fill up with air when you breathe." },
  { emoji: "❤️", name: "Heart", text: "Pumps blood all around your body." },
  { emoji: "🧠", name: "Brain", text: "Helps you think, learn, and play." },
];
