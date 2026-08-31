import {
  Activity,
  Apple,
  Baby,
  CalendarCheck,
  CalendarHeart,
  ChefHat,
  ClipboardList,
  Droplets,
  Dumbbell,
  Flower2,
  Gauge,
  HeartPulse,
  Leaf,
  MessagesSquare,
  NotebookPen,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';

export const IMAGES = {
  hero: 'https://images.hostinger.com/bbdadfaf-ef18-489f-a9bc-ad9a9a2829c1.png',
  portrait: 'https://images.hostinger.com/33bb0487-20eb-4c35-a805-650565dc65c8.png',
  consult: 'https://images.hostinger.com/1622a572-23dd-4161-bac3-d524da3d0efd.png',
  flatlay: 'https://images.hostinger.com/6feb0ca0-acdc-4960-aef3-910b143da9ef.png',
};

export const CONTACT = {
  email: 'hello@mealmizaaj.com',
  phone: '+92 300 123 4567',
  whatsapp: '+92 300 123 4567',
  instagram: '@mealmizaaj',
  instagramUrl: 'https://instagram.com',
  location: 'Lahore, Pakistan',
  onlineAvailability: 'Online consultations worldwide · In-person in Lahore',
  hours: 'Monday – Saturday, 10:00 – 19:00 (PKT)',
};

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/packages', label: 'Packages' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    icon: ClipboardList,
    title: 'Initial Nutrition Consultation',
    tagline: 'Where every plan begins.',
    description:
      'A 60-minute one-to-one online session where we look at your full picture — medical history, recent lab reports, lifestyle, sleep, stress, and the way your household actually eats. You leave with clear, prioritised next steps, not a lecture.',
    includes: [
      'Full dietary & lifestyle assessment',
      'Review of recent lab reports',
      'Realistic goal setting, together',
      'Written summary after the session',
    ],
  },
  {
    icon: NotebookPen,
    title: 'Personalised Meal Plan',
    tagline: 'Built around your kitchen, not a textbook.',
    description:
      'A 7–14 day meal plan tailored to your condition, preferences, and routine — written around the food your home already cooks. Roti, daal, sabzi, and chai all have a place.',
    includes: [
      'Condition-specific 7–14 day plan',
      'Desi swaps for every meal',
      'Portion guidance without weighing scales',
      'Pantry & grocery list',
    ],
  },
  {
    icon: TrendingDown,
    title: 'Weight Loss Support',
    tagline: 'Sustainable fat loss, no crash diets.',
    description:
      'Steady, sustainable fat loss built on the food your household already cooks — at a pace your body can keep, with habits that survive weddings, travel, and Ramzan.',
    includes: [
      'Calorie & protein awareness, simply explained',
      'Meal timing & portion strategy',
      'Weekly accountability check-ins',
      'Dawat & eating-out guidance',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Healthy Weight Gain Support',
    tagline: 'Strength and energy first.',
    description:
      'Structured, nutrient-dense gain for those who struggle to put on weight — building strength and energy rather than empty calories.',
    includes: [
      'Calorie-dense, balanced meal structure',
      'Protein & strength-friendly guidance',
      'Appetite & digestion support',
      'Progress tracking',
    ],
  },
  {
    icon: Droplets,
    title: 'Diabetes Nutrition Support',
    tagline: 'Steadier blood sugar, desi-style.',
    description:
      'Carbohydrate awareness, meal timing, and desi-friendly swaps that help steady blood sugar — always alongside your doctor’s care.',
    includes: [
      'Carb awareness & glycaemic pairing',
      'Meal timing for stable glucose',
      'Desi swaps for roti, rice & sweets',
      'Coordination with your medical team',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Hypertension & Heart Health Support',
    tagline: 'Salt-smart, heart-friendly cooking.',
    description:
      'Salt-smart cooking, heart-friendly fats, and DASH-inspired patterns adapted to Pakistani plates — flavour kept, sodium gently lowered.',
    includes: [
      'Low-sodium cooking techniques',
      'Heart-friendly fat guidance',
      'Potassium-rich food pairing',
      'Lifestyle & movement basics',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Medical Nutrition Guidance',
    tagline: 'Nutrition that fits your diagnosis.',
    description:
      'Therapeutic nutrition for conditions such as high cholesterol, fatty liver, PCOS, and digestive concerns — designed around your reports and prescriptions, with your doctor’s care leading.',
    includes: [
      'Report-led nutrition planning',
      'Condition-specific food guidance',
      'Coordination with your healthcare team',
      'Ongoing adjustments as reports change',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Follow-Up Consultations',
    tagline: 'Steady support while habits take root.',
    description:
      'Scheduled check-ins that keep you accountable without pressure. We adjust your plan as your body, routine, and reports change — and troubleshoot the real-life weeks in between.',
    includes: [
      '20–30 minute review sessions',
      'Plan adjustments as you progress',
      'WhatsApp support between visits',
      'Habit & mindset coaching',
    ],
  },
  {
    icon: ChefHat,
    title: 'Healthy Recipes & Grocery Guidance',
    tagline: 'The food you love, cooked a little wiser.',
    description:
      'Learn to lighten family favourites — from daal and karahi to khichdi and chaat — without losing the taste that makes them worth cooking. Plus practical grocery lists that match your plan.',
    includes: [
      'Recipe makeovers for family dishes',
      'Cooking method & oil guidance',
      'Smart tiffin & lunchbox ideas',
      'Plan-matched grocery lists',
    ],
  },
  {
    icon: Users,
    title: 'Family Nutrition Support',
    tagline: 'One kitchen, everyone nourished.',
    description:
      'Plans that fit the whole household — the children’s tiffins, a partner’s cholesterol, an elder’s blood pressure — so one kitchen feeds everyone well, without cooking separate meals.',
    includes: [
      'Whole-household meal structure',
      'Age-appropriate portions & nutrients',
      'Picky-eater & kid-friendly ideas',
      'Shared grocery planning',
    ],
  },
];

export const PERSONAL_FACTORS = [
  {
    icon: ChefHat,
    title: 'Food preferences',
    description: 'The flavours, textures, and dishes you genuinely enjoy — and the ones you’d rather avoid.',
  },
  {
    icon: Stethoscope,
    title: 'Medical needs',
    description: 'Your diagnoses, recent lab reports, and any medications, considered alongside your doctor’s care.',
  },
  {
    icon: CalendarCheck,
    title: 'Routine',
    description: 'Your working hours, sleep, movement, and the real shape of an ordinary day.',
  },
  {
    icon: NotebookPen,
    title: 'Budget',
    description: 'Practical, affordable ingredients — healthy eating that fits what you actually spend.',
  },
  {
    icon: Flower2,
    title: 'Culture',
    description: 'Desi home cooking, regional traditions, and the food your family has always eaten.',
  },
  {
    icon: Users,
    title: 'Family meals',
    description: 'One plan that feeds the whole household — no separate cooking for one person.',
  },
  {
    icon: Activity,
    title: 'Goals',
    description: 'What you want to feel, change, or sustain — at a pace that is realistic for you.',
  },
];

export const CONDITIONS = [
  {
    icon: Scale,
    name: 'Weight Concerns',
    blurb:
      'Support for both healthy weight loss and healthy weight gain — built on real food, at a pace your body can sustain.',
  },
  {
    icon: Droplets,
    name: 'Prediabetes & Type 2 Diabetes',
    blurb:
      'Carbohydrate awareness, meal timing, and desi-friendly swaps that help steady blood sugar alongside your doctor’s care.',
  },
  {
    icon: HeartPulse,
    name: 'Hypertension',
    blurb:
      'Salt-smart cooking and heart-friendly patterns adapted to Pakistani plates — flavour kept, sodium gently lowered.',
  },
  {
    icon: Gauge,
    name: 'High Cholesterol',
    blurb:
      'Fibre-forward plans and smarter cooking fats that support healthier lipid panels, report by report.',
  },
  {
    icon: ShieldCheck,
    name: 'Fatty Liver',
    blurb:
      'Weight-conscious, low-sugar nutrition patterns that ease the load on your liver and support gradual improvement.',
  },
  {
    icon: Flower2,
    name: 'PCOS',
    blurb:
      'Gentle, consistent nutrition that supports hormone balance, cycle regularity, skin, and sustainable weight management.',
  },
  {
    icon: Leaf,
    name: 'Digestive Concerns',
    blurb:
      'Calm-meal guidance for reflux, constipation, bloating, and IBS tendencies — eating patterns that are kinder to your gut.',
  },
  {
    icon: Apple,
    name: 'Nutrient Adequacy',
    blurb:
      'For low iron, B12, vitamin D, or general gaps — practical ways to meet your needs from everyday desi food.',
  },
  {
    icon: Baby,
    name: 'Pregnancy & Postpartum',
    blurb:
      'Trimester-by-trimester nourishment for mother and baby, plus gentle postpartum recovery and lactation support.',
  },
  {
    icon: Dumbbell,
    name: 'Sports & Muscle Gain',
    blurb:
      'Protein timing, recovery meals, and balanced fuel for training — for active people building strength and endurance.',
  },
  {
    icon: Sprout,
    name: 'Vegetarian Nutrition',
    blurb:
      'Complete, balanced vegetarian and vegan eating — meeting protein, iron, and B12 needs without monotony.',
  },
  {
    icon: Sparkles,
    name: 'General Wellness',
    blurb:
      'For anyone who simply wants to feel better — steadier energy, better sleep, and a calmer relationship with food.',
  },
];

export const PACKAGES = [
  {
    name: 'Initial Consultation',
    price: 'PKR 1,500',
    period: 'one-time · 45 minutes',
    description:
      'A focused one-to-one online consultation to understand where you are and where you want to go.',
    features: [
      'Diet and lifestyle assessment',
      'Goal setting together',
      'Food preference discussion',
      'Practical next steps',
    ],
    note: 'Does not include a detailed written meal plan.',
    cta: 'Choose This Package',
    featured: false,
  },
  {
    name: 'Personalised Meal Plan',
    price: 'PKR 2,500',
    period: 'one-time',
    description:
      'Everything from the initial consultation, plus a customised 7-day meal plan built around your kitchen.',
    features: [
      'Initial consultation included',
      'Customised 7-day meal plan',
      'Portion guidance & meal timings',
      'Food swaps & recipe ideas',
      'Grocery guidance',
      'One minor revision within 7 days',
    ],
    cta: 'Choose This Package',
    featured: false,
  },
  {
    name: 'Weight Management Program',
    price: 'PKR 4,500',
    period: 'per month',
    description:
      'Guided support for healthy weight loss or weight gain, with regular check-ins and plan adjustments.',
    features: [
      'Detailed consultation',
      'Customised meal plan',
      'Weekly progress check-ins',
      'One plan adjustment per month',
      'Recipe ideas',
      'Habit support',
    ],
    cta: 'Choose This Package',
    featured: true,
  },
  {
    name: 'Diabetes & Hypertension Nutrition Care',
    price: 'PKR 5,500',
    period: 'per month',
    description:
      'Nutrition support for diabetes, hypertension, cholesterol, fatty liver, or similar concerns — alongside your physician.',
    features: [
      'Detailed assessment',
      'Tailored meal plan',
      'Food-choice education',
      'Two follow-ups per month',
      'Plan adjustments',
    ],
    note: 'Medication and medical treatment decisions remain with your physician.',
    cta: 'Choose This Package',
    featured: false,
  },
  {
    name: 'Premium Transformation Program',
    price: 'PKR 7,500',
    period: 'per month',
    description:
      'The most complete support — two consultations a month, weekly check-ins, and priority access throughout.',
    features: [
      'Two consultations per month',
      'Weekly check-ins',
      'Regular plan adjustments',
      'Personalised recipes',
      'Grocery guidance',
      'Habit tracking',
      'Priority support during working hours',
    ],
    cta: 'Choose This Package',
    featured: false,
  },
];

// Comparison matrix — rows are features, values per package (true / false / string)
export const PACKAGE_COMPARISON = [
  {
    feature: 'One-to-one online consultation',
    values: ['45 min', 'Included', 'Detailed', 'Detailed', '2 per month'],
  },
  {
    feature: 'Customised 7-day meal plan',
    values: [false, true, true, true, true],
  },
  {
    feature: 'Portion & meal-timing guidance',
    values: [false, true, true, true, true],
  },
  {
    feature: 'Food swaps & recipe ideas',
    values: [false, true, true, true, true],
  },
  {
    feature: 'Grocery guidance',
    values: [false, true, false, false, true],
  },
  {
    feature: 'Weekly progress check-ins',
    values: [false, false, true, false, true],
  },
  {
    feature: 'Plan adjustments',
    values: [false, '1 minor', '1 / month', true, 'Regular'],
  },
  {
    feature: 'Follow-up consultations',
    values: [false, false, false, '2 / month', true],
  },
  {
    feature: 'Habit tracking',
    values: [false, false, false, false, true],
  },
  {
    feature: 'Priority support',
    values: [false, false, false, false, true],
  },
];

export const PACKAGE_FAQS = [
  {
    q: 'Are plans customised for Pakistani foods?',
    a: 'Yes. Every plan is built around the food your home already cooks — roti, daal, sabzi, rice, and chai all have a place. We adjust portions, timing, cooking methods, and pairings rather than asking you to eat unfamiliar meals.',
  },
  {
    q: 'Can I book an online consultation?',
    a: 'Absolutely. All consultations are held online over Google Meet or WhatsApp video, so you can join from anywhere in Pakistan or abroad. You receive your plan and notes in writing after each session.',
  },
  {
    q: 'Can I choose a plan after the free call?',
    a: 'Yes. The free discovery call is a no-pressure conversation to understand your goals and recommend the right package. You are welcome to choose a plan during or after the call — never before you are ready.',
  },
  {
    q: 'Are follow-ups included?',
    a: 'It depends on the package. The Initial Consultation and Personalised Meal Plan are one-time, while the monthly programs include scheduled follow-ups — two per month for Diabetes & Hypertension Care, and weekly check-ins for Weight Management and Premium Transformation.',
  },
  {
    q: 'Can you help with diabetes or hypertension?',
    a: 'Yes. The Diabetes & Hypertension Nutrition Care package is designed for these concerns, including cholesterol and fatty liver. Nutrition counselling supports your overall care — medication and medical treatment decisions always remain with your physician.',
  },
  {
    q: 'Do you offer refunds or rescheduling?',
    a: 'Sessions can be rescheduled with at least 24 hours’ notice. Monthly programs can be paused for up to two weeks for travel, illness, or family commitments. Because each plan is personally prepared, one-time consultations are non-refundable once the written plan has been delivered.',
  },
];

export const RECIPES = [
  {
    slug: 'masoor-daal-lightened-up',
    title: 'Masoor Daal, Lightened Up',
    image: 'https://images.hostinger.com/ebecdc3b-fb46-43f7-89aa-97c194337929.png',
    tags: ['High Protein', 'Heart Health', 'Pakistani Food Swaps'],
    time: '30 min',
    servings: '4 servings',
    calories: '~210 kcal',
    intro:
      'All the comfort of a home-style daal with a gentler tempering — same warmth, a fraction of the oil.',
    ingredients: [
      '1 cup red masoor daal, rinsed',
      '1 small onion, finely sliced',
      '2 tomatoes, chopped',
      '1 tsp ginger-garlic paste',
      '½ tsp turmeric, ½ tsp cumin',
      '1 green chilli, slit',
      '1 tbsp oil (not ghee) for tempering',
      'Fresh coriander, ginger juliennes & lemon to finish',
    ],
    steps: [
      'Simmer the daal with turmeric, tomatoes, and 3 cups of water for 20 minutes until soft.',
      'Whisk gently for a creamy texture — no cream needed.',
      'Temper onion, cumin, green chilli, and ginger-garlic paste in 1 tbsp oil until golden.',
      'Pour the tempering over the daal, rest 2 minutes, and finish with coriander and lemon.',
    ],
    note: 'Pair with a small serving of brown basmati or one whole wheat roti for a balanced, satisfying meal.',
  },
  {
    slug: 'chana-chaat-bowl',
    title: 'Chana Chaat Bowl',
    image: 'https://images.hostinger.com/979cdf3c-56df-4040-84b0-96559d7288f1.png',
    tags: ['Weight Management', 'PCOS-Friendly', 'Quick Meals'],
    time: '15 min',
    servings: '2 servings',
    calories: '~240 kcal',
    intro:
      'The street-food favourite rebuilt as a balanced lunch — protein, fibre, and crunch in every spoon.',
    ingredients: [
      '2 cups boiled chickpeas',
      '1 tomato & ½ cucumber, diced',
      '¼ red onion, finely chopped',
      '2 tbsp plain yogurt',
      '1 tsp chaat masala, ½ tsp roasted cumin',
      'Pomegranate seeds & fresh coriander',
      'Lemon juice to taste',
    ],
    steps: [
      'Toss the chickpeas with tomato, cucumber, and onion in a large bowl.',
      'Whisk yogurt with chaat masala, cumin, and lemon juice.',
      'Fold the dressing through the chaat.',
      'Top with pomegranate and coriander; serve slightly chilled.',
    ],
    note: 'A naturally low-glycaemic, high-fibre plate — a satisfying option for PCOS-friendly and diabetes-friendly eating patterns.',
  },
  {
    slug: 'tandoori-chicken-salad-plate',
    title: 'Tandoori Chicken Salad Plate',
    image: 'https://images.hostinger.com/4de77013-19bd-4255-b302-0e1cc773cc82.png',
    tags: ['High Protein', 'Weight Management', 'Quick Meals'],
    time: '35 min',
    servings: '2 servings',
    calories: '~320 kcal',
    intro:
      'Smoky tandoori flavour without the restaurant oil — grilled lean and served over a proper crunchy salad.',
    ingredients: [
      '2 chicken breasts',
      '½ cup plain yogurt',
      '1 tbsp tandoori masala',
      '1 tsp ginger-garlic paste & lemon juice',
      'Mixed greens, cucumber ribbons, red onion',
      'Mint raita: yogurt, mint, pinch of salt',
    ],
    steps: [
      'Marinate chicken in yogurt, tandoori masala, ginger-garlic, and lemon for at least 20 minutes.',
      'Grill or pan-sear 6–7 minutes per side until cooked through; rest 5 minutes.',
      'Slice over the salad and serve with mint raita.',
    ],
    note: 'A reliable high-protein dinner for weight-management plans — skip the naan, keep the raita.',
  },
  {
    slug: 'cardamom-overnight-oats',
    title: 'Cardamom Overnight Oats',
    image: 'https://images.hostinger.com/4a0361c4-7e4f-4b22-80ea-e2966da823af.png',
    tags: ['Heart Health', 'Quick Meals'],
    time: '5 min + overnight',
    servings: '1 serving',
    calories: '~280 kcal',
    intro:
      'A desi-spiced breakfast that makes itself while you sleep — cardamom and pistachio do the heavy lifting.',
    ingredients: [
      '½ cup rolled oats',
      '½ cup low-fat milk (or unsweetened almond milk)',
      '¼ cup plain yogurt',
      '¼ tsp ground cardamom',
      '1 tsp chia seeds',
      '1 tsp honey, pistachios to top',
    ],
    steps: [
      'Combine oats, milk, yogurt, cardamom, and chia in a jar.',
      'Refrigerate overnight (or at least 4 hours).',
      'Top with pistachios and a light drizzle of honey before serving.',
    ],
    note: 'Oats are a source of beta-glucan fibre — a small, simple breakfast habit worth building into your mornings.',
  },
  {
    slug: 'lauki-sabzi-whole-wheat-roti',
    title: 'Lauki Sabzi with Whole Wheat Roti',
    image: 'https://images.hostinger.com/5f9c8ec7-de2c-4df4-ad00-f1f131e3e7618.png',
    tags: ['Digestive Health', 'Weight Management', 'Pakistani Food Swaps'],
    time: '25 min',
    servings: '3 servings',
    calories: '~180 kcal',
    intro:
      'The most underrated vegetable in the desi kitchen — hydrating, gentle on the gut, and quietly delicious.',
    ingredients: [
      '1 medium lauki (bottle gourd), peeled & cubed',
      '1 onion & 2 tomatoes, chopped',
      '1 tsp cumin seeds',
      '½ tsp turmeric, ½ tsp coriander powder',
      '1 tbsp oil',
      'Fresh coriander to finish',
    ],
    steps: [
      'Warm oil, bloom cumin, and soften the onion until translucent.',
      'Add tomatoes and spices; cook until the masala comes together.',
      'Add lauki with a splash of water; cover and simmer 12–15 minutes.',
      'Finish with coriander and serve with whole wheat roti and cucumber raita.',
    ],
    note: 'A go-to light dinner that fits digestive-health and weight-management plans — easy to cook, easy to digest.',
  },
  {
    slug: 'quinoa-khichdi',
    title: 'Quinoa Khichdi',
    image: 'https://images.hostinger.com/10cd2666-da3a-4137-87af-d64b7f11e0e3.png',
    tags: ['Diabetes-Friendly', 'Pakistani Food Swaps', 'Digestive Health'],
    time: '30 min',
    servings: '3 servings',
    calories: '~260 kcal',
    intro:
      'Khichdi comfort with a slower, steadier energy release — the same hug, a kinder glucose curve.',
    ingredients: [
      '½ cup quinoa, rinsed',
      '½ cup split moong daal',
      '1 carrot & ½ cup peas',
      '1 tsp cumin, ½ tsp turmeric',
      '1 tbsp oil, 1 small onion sliced',
      'Lemon & coriander to serve',
    ],
    steps: [
      'Rinse quinoa and moong daal together until the water runs clear.',
      'Temper cumin and onion in oil; add vegetables and spices.',
      'Add quinoa, daal, and 3 cups water; simmer 18–20 minutes until soft.',
      'Rest 5 minutes, then serve with lemon and coriander.',
    ],
    note: 'A complete protein-and-fibre bowl — a steady-energy option for diabetes-friendly eating and recovery days.',
  },
];

export const RESOURCES = [
  {
    icon: NotebookPen,
    title: 'The 7-Day Starter Plate Guide',
    description:
      'How to build a balanced desi plate at any meal — the hand-portion method we teach every client, no weighing scales required.',
  },
  {
    icon: ChefHat,
    title: 'Healthier Dawat Survival Notes',
    description:
      'What to eat before, what to choose first, and how to enjoy weddings and dawats without undoing a good week.',
  },
  {
    icon: CalendarHeart,
    title: 'Ramzan Nutrition Rhythm',
    description:
      'Sehri that sustains, iftar that restores — a gentle structure for fasting months, including for those managing diabetes with their doctor.',
  },
  {
    icon: Activity,
    title: 'Reading Your Lab Reports',
    description:
      'HbA1c, lipid panels, liver enzymes — what the key numbers mean and which foods genuinely move them.',
  },
];

export const REVIEWS = [
  {
    name: 'Ayesha K.',
    location: 'Lahore',
    condition: 'PCOS Support',
    rating: 5,
    quote:
      'For the first time, a plan that didn’t ask me to abandon my own kitchen. Six months in, my cycles are regular and I’ve lost 9 kg without ever feeling punished.',
  },
  {
    name: 'Bilal R.',
    location: 'Karachi',
    condition: 'Diabetes Nutrition',
    rating: 5,
    quote:
      'My HbA1c dropped from 8.1 to 6.4 in four months. The meal timing advice alone changed everything — and I still eat roti every day.',
  },
  {
    name: 'Fatima & Ahmed S.',
    location: 'Islamabad',
    condition: 'Family Wellness',
    rating: 5,
    quote:
      'She planned around our whole family — the kids’ tiffins, my husband’s cholesterol, my energy dips. One kitchen, one plan, everyone healthier.',
  },
  {
    name: 'Mariam T.',
    location: 'London (online)',
    condition: 'Pregnancy Nutrition',
    rating: 5,
    quote:
      'Being guided through each trimester from abroad felt effortless. My iron levels finally stabilised, and the nausea-friendly meal ideas were a lifesaver.',
  },
  {
    name: 'Usman H.',
    location: 'Dubai (online)',
    condition: 'Fatty Liver Support',
    rating: 5,
    quote:
      'My latest ultrasound showed real improvement. The plan was practical for a bachelor’s kitchen — simple cooking, clear portions, no fancy ingredients.',
  },
  {
    name: 'Zainab M.',
    location: 'Lahore',
    condition: 'Healthy Weight Loss',
    rating: 5,
    quote:
      'Down 14 kg in eight months and, more importantly, I’ve kept it off for a year. The weekly check-ins kept me honest without ever making me feel judged.',
  },
  {
    name: 'Rashid A.',
    location: 'Faisalabad',
    condition: 'Hypertension & Heart Health',
    rating: 5,
    quote:
      'My blood pressure readings are the best they’ve been in a decade. Learning to cook with less salt without losing flavour was the real education.',
  },
  {
    name: 'Hira N.',
    location: 'Toronto (online)',
    condition: 'Digestive Health',
    rating: 5,
    quote:
      'Years of bloating and acidity, finally calm. She found patterns nobody else had bothered to look for, and the fixes were surprisingly simple.',
  },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Clients guided' },
  { value: 8, suffix: ' yrs', label: 'Clinical experience' },
  { value: 12, suffix: '+', label: 'Countries served online' },
  { value: 96, suffix: '%', label: 'Clients who stay on track' },
];
