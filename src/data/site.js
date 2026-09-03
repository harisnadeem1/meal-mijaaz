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
  Utensils,
  Bone,
  Salad,
  CircleDot ,
} from 'lucide-react';

export const IMAGES = {
  hero: 'https://images.hostinger.com/bbdadfaf-ef18-489f-a9bc-ad9a9a2829c1.png',
  portrait: 'https://images.hostinger.com/33bb0487-20eb-4c35-a805-650565dc65c8.png',
  consult: 'https://images.hostinger.com/1622a572-23dd-4161-bac3-d524da3d0efd.png',
  flatlay: 'https://images.hostinger.com/6feb0ca0-acdc-4960-aef3-910b143da9ef.png',
};

export const CONTACT = {
  email: 'contact@mealmizaaj.com',
  phone: '+92 300 123 4567',
  whatsapp: '+92 300 123 4567',
  instagram: '@mealmizaaj',
  instagramUrl: 'https://instagram.com/mealmizaaj',
  location: 'Lahore, Pakistan',
  onlineAvailability: 'Online consultations worldwide',
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
    tagline: 'Where your personalised support begins.',
    description:
      'A one-to-one online session to understand your health goals, food habits, lifestyle, sleep, stress, and the meals that shape your everyday routine. Where relevant, we can also discuss recent medical reports to inform your nutrition guidance. You leave with clear, practical next steps — not a lecture.',
    includes: [
      'Detailed food, lifestyle, and health-goal assessment',
      'Discussion of relevant recent medical reports',
      'Realistic goal setting, together',
      'Clear written next steps after the session',
    ],
  },
  {
    icon: NotebookPen,
    title: 'Personalised Nutrition Plan',
    tagline: 'Built around your kitchen, not a textbook.',
    description:
      'A practical nutrition plan shaped around your health needs, food preferences, schedule, cooking habits, and the meals you already enjoy at home. Depending on what will help you most, this may include a structured 7–14 day meal plan, flexible meal-building guidance, or practical food swaps.',
    includes: [
      'Tailored meal structure or 7–14 day plan where appropriate',
      'Culturally familiar food swaps and meal ideas',
      'Simple portion guidance without weighing scales',
      'Pantry and grocery guidance',
    ],
  },
  {
    icon: TrendingDown,
    title: 'Healthy Weight Management',
    tagline: 'Sustainable habits, not crash diets.',
    description:
      'Practical nutrition support for healthy weight loss, weight maintenance, or rebuilding a more balanced routine with food. We focus on meals and habits that can work through busy weeks, travel, celebrations, and everyday life — without restrictive rules or all-or-nothing thinking.',
    includes: [
      'Simple calorie and protein awareness',
      'Portion, meal-timing, and hunger-management strategies',
      'Flexible guidance for eating out and social occasions',
      'Regular progress review and practical habit support',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Healthy Weight Gain Support',
    tagline: 'Nourishment, strength, and energy first.',
    description:
      'Structured nutrition guidance for people who find it difficult to gain weight, maintain their appetite, or meet their energy needs. The focus is on balanced, nutrient-dense meals that support everyday energy and strength — not simply adding empty calories.',
    includes: [
      'Balanced, calorie-dense meal structure',
      'Protein-focused food guidance',
      'Practical ideas for low appetite and meal consistency',
      'Progress review and plan adjustments',
    ],
  },
  {
    icon: Droplets,
    title: 'Diabetes Nutrition Support',
    tagline: 'Practical food guidance for steadier routines.',
    description:
      'Personalised nutrition guidance to help you build balanced meals, understand carbohydrate portions, and create meal routines that support blood-glucose management. Your nutrition care is designed to work alongside your physician’s treatment plan and prescribed medication.',
    includes: [
      'Clear carbohydrate and portion guidance',
      'Meal timing and balanced meal-building strategies',
      'Practical swaps for everyday meals, rice, breads, and sweets',
      'Nutrition support aligned with your wider healthcare team',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Hypertension & Heart Health Support',
    tagline: 'Heart-friendly meals without losing flavour.',
    description:
      'Practical nutrition guidance for high blood pressure, cholesterol concerns, and heart-health goals. We work on salt awareness, fibre-rich foods, balanced fats, and realistic cooking changes that fit the meals you and your family already enjoy.',
    includes: [
      'Lower-sodium cooking and label-reading guidance',
      'Heart-friendly fat and fibre recommendations',
      'Food ideas that support balanced everyday meals',
      'Lifestyle foundations, including movement and meal routines',
    ],
  },
  {
    icon: Stethoscope,
    title: 'PCOS, Digestive & Metabolic Support',
    tagline: 'Nutrition guidance shaped around your needs.',
    description:
      'Personalised nutrition support for concerns such as PCOS, high cholesterol, fatty liver, digestive symptoms, and related metabolic health goals. Guidance is tailored to your symptoms, food preferences, routine, and relevant medical care.',
    includes: [
      'Condition-focused nutrition assessment',
      'Practical meal structure and food guidance',
      'Support with symptom-aware eating patterns where appropriate',
      'Plan updates as your needs, routine, or medical advice change',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Follow-Up & Ongoing Support',
    tagline: 'Steady guidance while new habits take root.',
    description:
      'Follow-up sessions give you space to review progress, discuss what has felt difficult, and adjust your nutrition approach as your routine, goals, or health needs change. Support stays practical, flexible, and free from pressure.',
    includes: [
      '20–30 minute review sessions',
      'Progress review and realistic goal updates',
      'Personalised plan adjustments where needed',
      'Practical habit and routine support',
    ],
  },
  {
    icon: ChefHat,
    title: 'Recipes & Grocery Guidance',
    tagline: 'Food you enjoy, made more practical.',
    description:
      'Learn how to adapt familiar meals with practical cooking methods, balanced portions, and simple ingredient swaps — without losing the comfort and flavour that make food enjoyable.',
    includes: [
      'Recipe adaptations for familiar home-cooked meals',
      'Cooking-method and oil-use guidance',
      'Lunchbox and meal-prep ideas',
      'Grocery lists matched to your nutrition goals',
    ],
  },
  {
    icon: Users,
    title: 'Family & Everyday Nutrition',
    tagline: 'One kitchen, more ease around food.',
    description:
      'Practical nutrition guidance designed to work across the household, so healthier meals do not mean cooking separate food for everyone. We focus on flexible family meal structure, shared grocery habits, and realistic routines that support everyday wellbeing.',
    includes: [
      'Whole-household meal structure',
      'Flexible portion guidance for family meals',
      'Lunchbox, snack, and meal-prep ideas',
      'Shared grocery and kitchen planning',
    ],
  },
];

export const PERSONAL_FACTORS = [
  {
    icon: ChefHat,
    title: 'Food preferences',
    description:
      'The flavours, textures, meals, and ingredients you genuinely enjoy — plus the things you would rather avoid.',
  },
  {
    icon: Stethoscope,
    title: 'Health needs',
    description:
      'Your health goals, relevant medical history, recent reports, and prescribed care — considered thoughtfully.',
  },
  {
    icon: CalendarCheck,
    title: 'Your routine',
    description:
      'Your work or study schedule, sleep, movement, cooking time, and the real rhythm of an ordinary day.',
  },
  {
    icon: NotebookPen,
    title: 'Your budget',
    description:
      'Practical ingredient choices and meal ideas that feel realistic for your everyday grocery spending.',
  },
  {
    icon: Flower2,
    title: 'Food culture',
    description:
      'The home-cooked meals, traditions, and familiar foods that make eating feel comfortable and sustainable.',
  },
  {
    icon: Users,
    title: 'Household meals',
    description:
      'Guidance that works around shared meals, family routines, and one kitchen — without separate cooking.',
  },
  {
    icon: Activity,
    title: 'Your goals',
    description:
      'What you would like to feel, improve, manage, or maintain — at a pace that is realistic for you.',
  },
];

export const CONDITIONS = [
  {
    icon: Scale,
    name: 'Healthy Weight Management',
    blurb:
      'Practical support for healthy weight loss, weight gain, or weight maintenance — built around realistic meals, sustainable habits, and your everyday routine.',
  },
  {
    icon: Droplets,
    name: 'Prediabetes & Type 2 Diabetes',
    blurb:
      'Personalised guidance for balanced meals, carbohydrate portions, meal timing, and everyday food choices that support blood-glucose management alongside your physician’s care.',
  },
  {
    icon: HeartPulse,
    name: 'High Blood Pressure & Heart Health',
    blurb:
      'Practical guidance for salt awareness, balanced fats, fibre-rich meals, and heart-friendly cooking that still fits the food you enjoy.',
  },
  {
    icon: Gauge,
    name: 'High Cholesterol',
    blurb:
      'Food and lifestyle guidance focused on fibre, balanced fats, everyday meal structure, and changes that support your wider heart-health goals.',
  },
  {
    icon: ShieldCheck,
    name: 'Fatty Liver',
    blurb:
      'Support with balanced eating patterns, gradual lifestyle changes, and nutrition habits that can complement your physician-led care.',
  },
  {
    icon: Flower2,
    name: 'PCOS Support',
    blurb:
      'Compassionate nutrition guidance for PCOS, including balanced meals, regular eating patterns, weight-management support where appropriate, and practical food routines.',
  },
  {
    icon: CircleDot ,
    name: 'Thyroid & Hormonal Health',
    blurb:
      'Practical nutrition support for people managing thyroid-related concerns and hormone-health goals, designed to complement your physician-led care.',
  },
  {
    icon: Leaf,
    name: 'Digestive Concerns',
    blurb:
      'Practical food guidance for concerns such as bloating, constipation, reflux, and IBS-type symptoms, shaped around your symptoms and medical advice.',
  },
  {
    icon: Utensils,
    name: 'Low Appetite & Unintentional Weight Loss',
    blurb:
      'Nutrition support for low appetite, reduced food intake, or unintended weight changes, with practical ideas for meeting energy and protein needs.',
  },
  {
    icon: Apple,
    name: 'Nutrient Adequacy',
    blurb:
      'Everyday nutrition support for concerns about iron, vitamin B12, vitamin D, protein, fibre, or overall nutrient intake, with relevant medical care considered.',
  },
  {
    icon: Bone,
    name: 'Bone Health',
    blurb:
      'Guidance for building everyday eating habits that support calcium, vitamin D, protein, and overall bone health alongside appropriate medical care.',
  },
  {
    icon: Baby,
    name: 'Pregnancy & Postpartum Nutrition',
    blurb:
      'Support for balanced eating, changing nutrition needs, practical meal ideas, and postpartum nourishment — designed to complement your antenatal or postnatal medical care.',
  },
  {
    icon: Dumbbell,
    name: 'Active Lifestyle & Muscle Support',
    blurb:
      'Balanced nutrition guidance for active adults who want support with training fuel, protein intake, recovery meals, energy, and strength-focused goals.',
  },
  {
    icon: Sprout,
    name: 'Vegetarian & Plant-Forward Nutrition',
    blurb:
      'Practical support for balanced vegetarian or plant-forward eating, with attention to protein, iron, vitamin B12, calcium, and meal variety.',
  },
  {
    icon: Sparkles,
    name: 'General Wellness',
    blurb:
      'For anyone who wants a calmer, more balanced approach to food, energy, sleep, meal routines, and everyday wellbeing.',
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
    name: 'Clinical Nutrition Support',
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
    feature: 'Best suited for',
    values: [
      'Clear first-step guidance',
      'A structured meal routine',
      'Healthy weight-management support',
      'Condition-focused nutrition support',
      'Closer ongoing accountability',
    ],
  },
  {
    feature: 'Initial nutrition consultation',
    values: [
      '45–60 minutes',
      'Included',
      'Included',
      'Included',
      'Included',
    ],
  },
  {
    feature: 'Personalised nutrition plan',
    values: [
      'Clear written next steps',
      'Tailored meal structure',
      'Tailored meal structure',
      'Condition-focused meal structure',
      'Tailored plan with regular refinement',
    ],
  },
  {
    feature: 'Portion and meal-timing guidance',
    values: [true, true, true, true, true],
  },
  {
    feature: 'Food swaps and practical meal ideas',
    values: [false, true, true, true, true],
  },
  {
    feature: 'Grocery and pantry guidance',
    values: [false, true, 'As needed', 'As needed', true],
  },
  {
    feature: 'Progress review',
    values: [
      'Included in session',
      'One plan refinement',
      'Regular check-ins',
      'Scheduled reviews',
      'Weekly check-ins',
    ],
  },
  {
    feature: 'Plan adjustments',
    values: [
      'Not included',
      'One refinement',
      'As progress changes',
      'As health needs change',
      'Regular refinement',
    ],
  },
  {
    feature: 'Follow-up consultations',
    values: [
      false,
      'Optional',
      'Based on your support plan',
      'Scheduled as needed',
      'More frequent support',
    ],
  },
  {
    feature: 'Between-session messaging',
    values: [
      false,
      false,
      'Selected plans',
      'Selected plans',
      'Priority support',
    ],
  },
];

export const PACKAGE_FAQS = [
  {
    q: 'How do I know which support option is right for me?',
    a: 'You do not need to decide before getting in touch. During your free 15-minute discovery call, we will talk through your goals, routine, health concerns, and the level of guidance you are looking for before recommending a suitable next step.',
  },
  {
    q: 'How are fees shared?',
    a: 'Fees are shared clearly after we understand the type of support you need and before any paid consultation or support plan is confirmed. There is no obligation to continue after your free discovery call.',
  },
  {
    q: 'Can I book an online consultation?',
    a: 'Yes. All consultations are held online through Google Meet or WhatsApp video, so you can join from home or wherever is comfortable for you. Any relevant notes, guidance, or nutrition plan will be shared with you in writing after your session.',
  },
  {
    q: 'Are nutrition plans customised?',
    a: 'Yes. Your guidance is shaped around your health goals, food preferences, routine, budget, cooking habits, and the meals you already enjoy. Rather than asking you to follow unfamiliar foods or strict rules, we focus on practical portions, meal structure, cooking methods, and realistic food swaps.',
  },
  {
    q: 'Do I need a detailed meal plan?',
    a: 'Not always. Some people benefit most from clear nutrition education, practical food swaps, portion guidance, and a flexible meal structure. Others prefer a written meal plan. We will decide together what level of structure will be most useful for you.',
  },
  {
    q: 'Are follow-up sessions included?',
    a: 'Follow-up support depends on the option recommended for you. A one-time consultation gives you clear starting guidance, while ongoing support may include scheduled review sessions, progress check-ins, and adjustments as your needs, routine, or health goals change.',
  },
  {
    q: 'Can you support diabetes, hypertension, or other health concerns?',
    a: 'Meal Mizaaj provides nutrition guidance for concerns such as diabetes, hypertension, cholesterol, fatty liver, PCOS, digestive health, and healthy weight management. Nutrition support works alongside — not instead of — your physician’s diagnosis, medication, and medical treatment plan.',
  },
  {
    q: 'Can I reschedule a session?',
    a: 'Yes. If you need to reschedule, please give at least 24 hours’ notice where possible. Rescheduling details for ongoing support will be explained clearly before your plan begins.',
  },
  {
    q: 'Can I receive support between consultations?',
    a: 'Between-session messaging may be available with selected ongoing support options. This is intended for practical nutrition questions and plan clarification during working hours; it is not an emergency or medical-care service.',
  },
];

export const RECIPES = [
  {
  slug: 'lighter-chicken-karahi',
  title: 'Lighter Chicken Karahi',
  image:
    'https://stewwithsaba.com/wp-content/uploads/2023/04/IMG_9109-scaled.jpg',
  tags: ['High Protein', 'Heart Health', 'Everyday Food Swaps'],
  time: '40 min',
  servings: '4 servings',
  calories: '~290 kcal per serving',
  intro:
    'A home-style chicken karahi made with a tomato-forward masala, measured oil, and plenty of fresh ginger, coriander, and green chilli.',
  ingredients: [
    '500 g skinless chicken pieces',
    '4 medium tomatoes, finely chopped or blended',
    '1 medium onion, finely sliced',
    '1 tbsp neutral cooking oil',
    '1 tbsp ginger-garlic paste',
    '1 tsp cumin seeds',
    '1 tsp coriander powder',
    '½ tsp turmeric',
    '½–1 tsp red chilli powder, to taste',
    'Fresh ginger, coriander, green chilli, and lemon to finish',
  ],
  steps: [
    'Warm the oil in a wide pan and cook the onion until soft and lightly golden.',
    'Add cumin, ginger-garlic paste, coriander powder, turmeric, and chilli powder. Stir for 30 seconds.',
    'Add chicken and cook for 5–6 minutes, turning until lightly sealed.',
    'Add tomatoes, cover, and cook on a low heat for 20–25 minutes until the chicken is cooked and the masala thickens.',
    'Finish with fresh ginger, coriander, green chilli, and a squeeze of lemon. Serve with salad and one whole-wheat roti or a measured portion of rice.',
  ],
  note:
    'The flavour comes from tomatoes, ginger, spices, and fresh herbs—not excess oil. Pair it with vegetables and a sensible carbohydrate portion for a balanced meal.',
},
{
  slug: 'vegetable-chickpea-biryani',
  title: 'Vegetable & Chickpea Biryani',
  image:
    'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e8b29cd1-fca1-5fa6-a434-395b48a7bf7f/94a1369c-4616-513d-a726-fc969c75a839.jpg',
  tags: ['High Protein', 'Diabetes-Friendly', 'Heart Health', 'Everyday Food Swaps'],
  time: '45 min',
  servings: '4 servings',
  calories: '~360 kcal per serving',
  intro:
    'A colourful one-pot biryani with chickpeas, vegetables, fragrant spices, and enough protein and fibre to make it a satisfying everyday meal.',
  ingredients: [
    '1 cup basmati rice, rinsed and soaked for 20 minutes',
    '1½ cups cooked chickpeas, rinsed and drained',
    '1 small onion, thinly sliced',
    '1 tomato, chopped',
    '1 carrot, diced',
    '1 cup mixed vegetables, such as peas, beans, or cauliflower',
    '1 tbsp neutral cooking oil',
    '½ cup plain yogurt',
    '1 tsp ginger-garlic paste',
    '1 tsp cumin seeds',
    '1 tsp biryani masala or mild curry powder',
    '½ tsp turmeric',
    'Fresh mint, coriander, lemon, and cucumber raita to serve',
  ],
  steps: [
    'Cook the soaked rice until just tender, then drain and set aside.',
    'Warm oil in a deep pan. Cook onion until lightly golden, then add cumin and ginger-garlic paste.',
    'Add tomato, spices, carrot, and mixed vegetables. Cook until the vegetables begin to soften.',
    'Stir in chickpeas and yogurt, then cook for 3–4 minutes until coated in the masala.',
    'Layer rice over the chickpea mixture, cover tightly, and steam on low heat for 10 minutes.',
    'Finish with mint, coriander, lemon, and cucumber raita.',
  ],
  note:
    'Chickpeas add fibre and plant protein, making this more filling than a rice-only biryani. If you are managing blood glucose, keep the rice portion moderate and add extra salad or raita.',
},
{
  slug: 'spiced-chickpea-yogurt-breakfast-bowl',
  title: 'Spiced Chickpea Yogurt Breakfast Bowl',
  image:
    'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/23d16786-9e6e-5802-a2e6-5821b87dbf1c/830c736e-a36a-5301-8e04-5ac2fcfeb082.jpg',
  tags: ['High Protein', 'PCOS-Friendly', 'Quick Meals', 'Vegetarian & Plant-Forward'],
  time: '10 min',
  servings: '1 serving',
  calories: '~330 kcal per serving',
  intro:
    'Creamy yogurt, warmly spiced chickpeas, fresh vegetables, and herbs make a quick breakfast or light lunch that keeps you satisfied.',
  ingredients: [
    '¾ cup cooked chickpeas, rinsed and drained',
    '¾ cup plain Greek yogurt or thick plain yogurt',
    '½ small cucumber, diced',
    '1 small tomato, diced',
    '½ tsp roasted cumin',
    '¼ tsp paprika or mild chilli powder',
    'Pinch of black pepper and salt',
    '1 tsp olive oil or neutral oil',
    'Fresh mint or coriander',
    'Lemon juice to taste',
    'Optional: 1 small whole-wheat pita or roti on the side',
  ],
  steps: [
    'Warm the oil in a small pan and toss the chickpeas with roasted cumin, paprika, black pepper, and a pinch of salt for 2–3 minutes.',
    'Spoon yogurt into a bowl and top with cucumber, tomato, and warm chickpeas.',
    'Finish with mint or coriander and lemon juice.',
    'Serve as it is or with one small whole-wheat pita or roti if you need a more substantial meal.',
  ],
  note:
    'For a more filling breakfast, choose Greek yogurt or strained yogurt for extra protein. Adjust the bread portion to your appetite, activity level, and nutrition goals.',
},
  {
    slug: 'masoor-daal-lightened-up',
    title: 'Masoor Daal, Lightened Up',
    image: 'https://images.hostinger.com/ebecdc3b-fb46-43f7-89aa-97c194337929.png',
    tags: ['High Protein', 'Heart Health', 'Everyday Food Swaps'],
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-Fb2nAiXVgZ_LmXNQZat4YAS_PrY89dTrIERkHTMGn98iOeEpYsRPWFQ&s=10',
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
    image: 'https://files.cleanfooddirtygirl.com/20230512151608/cardamom-vanilla-overnight-oats-recipe.jpg',
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
  slug: 'bhindi-masala-home-style',
  title: 'Home-Style Bhindi Masala',
  image:
    'https://myfoodstory.com/wp-content/uploads/2025/03/Bhindi-Masala-2.jpg',
  tags: ['Heart Health', 'Weight Management', 'Everyday Food Swaps'],
  time: '30 min',
  servings: '3 servings',
  calories: '~170 kcal per serving',
  intro:
    'A simple, flavourful bhindi masala with tomatoes, onions, warming spices, and just enough oil to keep every bite satisfying.',
  ingredients: [
    '500 g bhindi (okra), washed, dried well, and sliced',
    '1 medium onion, thinly sliced',
    '2 medium tomatoes, chopped',
    '1 tbsp neutral cooking oil',
    '1 tsp cumin seeds',
    '½ tsp turmeric',
    '1 tsp coriander powder',
    '½ tsp red chilli powder, or to taste',
    '½ tsp amchur or a squeeze of lemon',
    'Fresh coriander to finish',
  ],
  steps: [
    'Wash the bhindi, dry it thoroughly, trim the ends, and slice it into medium pieces.',
    'Warm half the oil in a wide pan and cook the bhindi over medium heat for 8–10 minutes, stirring gently, until tender and less sticky. Set aside.',
    'Add the remaining oil to the pan. Cook cumin and onion until the onion softens and turns lightly golden.',
    'Add tomatoes, turmeric, coriander powder, and chilli powder. Cook until the tomatoes soften into a thick masala.',
    'Return the bhindi to the pan, fold gently through the masala, and cook for another 3–4 minutes.',
    'Finish with amchur or lemon and fresh coriander. Serve with whole-wheat roti, yogurt, and a fresh salad.',
  ],
  note:
    'For a balanced plate, pair bhindi with a protein source such as daal, yogurt, chicken, fish, or beans, plus the carbohydrate portion that fits your own needs.',
},
  {
    slug: 'quinoa-khichdi',
    title: 'Quinoa Khichdi',
    image: 'https://images.hostinger.com/10cd2666-da3a-4137-87af-d64b7f11e0e3.png',
    tags: ['Diabetes-Friendly', 'Everyday Food Swaps', 'Digestive Health'],
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
    title: 'The Balanced Plate Guide',
    description:
      'A simple visual guide to building balanced everyday meals with protein, vegetables, carbohydrates, and nourishing fats — no calorie counting or weighing scales required.',
  },
  {
    icon: ChefHat,
    title: 'Everyday Food Swaps',
    description:
      'Practical ways to adapt familiar meals, cooking methods, portions, and ingredients without giving up the food that feels like home.',
  },
  {
    icon: CalendarHeart,
    title: 'Eating Well During Busy Weeks',
    description:
      'Simple meal structure, snack ideas, and planning habits for busy workdays, travel, celebrations, or weeks when cooking feels difficult.',
  },
  {
    icon: Activity,
    title: 'Making Sense of Nutrition Goals',
    description:
      'A calm, practical guide to setting realistic food, energy, meal-routine, and wellbeing goals that are easier to maintain over time.',
  },
];

export const REVIEWS = [
  {
    location: 'Karachi, Pakistan',
    condition: 'Healthy Weight Management',
    rating: 5,
    quote:
      'What helped most was that the advice felt doable from the first week. I was not asked to make separate meals or follow a complicated routine. We worked with the food already being cooked at home.',
  },
  {
    location: 'London, United Kingdom',
    condition: 'Healthy Weight Management',
    rating: 5,
    quote:
      'The sessions were easy to fit around work, and the plan stayed flexible when my week became busy. It felt realistic rather than strict.',
  },
  {
    location: 'Dubai, United Arab Emirates',
    condition: 'Healthy Weight Gain Support',
    rating: 5,
    quote:
      'Living alone made meal planning difficult, but the suggestions were simple and suited a small kitchen. I now have a more consistent way of eating through the week.',
  },
  {
    location: 'Lahore, Pakistan',
    condition: 'PCOS Support',
    rating: 5,
    quote:
      'I came in expecting another strict diet plan, but the sessions were much more practical than that. Having regular meals and clearer portions made my routine feel less stressful.',
  },
  {
    location: 'Manchester, United Kingdom',
    condition: 'Family & Everyday Nutrition',
    rating: 5,
    quote:
      'The advice still centred on the food we cook at home, our shopping routine, and what was realistic for our family. It never felt generic.',
  },
  {
    location: 'Abu Dhabi, United Arab Emirates',
    condition: 'Digestive Health Support',
    rating: 5,
    quote:
      'The gradual approach suited me well. Rather than changing everything at once, we made a few adjustments, reviewed what felt helpful, and built from there.',
  },
  {
    location: 'Islamabad, Pakistan',
    condition: 'Diabetes Nutrition Support',
    rating: 5,
    quote:
      'The meal guidance was explained in a way I could actually use. I understood how to build my plate and plan meals around my work schedule without feeling confused.',
  },
  {
    location: 'Birmingham, United Kingdom',
    condition: 'Diabetes Nutrition Support',
    rating: 5,
    quote:
      'The guidance helped me feel more confident about everyday food decisions. It was clear, practical, and always framed alongside the care I already receive from my doctor.',
  },
  {
    location: 'Sharjah, United Arab Emirates',
    condition: 'Heart Health Support',
    rating: 5,
    quote:
      'I wanted help without being told to give up all the food I enjoy. The changes were practical, and I could use them whether I was cooking at home or eating out.',
  },
  {
    location: 'Rawalpindi, Pakistan',
    condition: 'High Blood Pressure & Heart Health',
    rating: 5,
    quote:
      'The changes were small enough to keep doing. We adjusted oil, salt, and meal portions without losing the flavour of the food my family enjoys.',
  },
  {
    location: 'Leeds, United Kingdom',
    condition: 'Vegetarian & Plant-Forward Nutrition',
    rating: 5,
    quote:
      'I had been repeating the same few meals every week. The plan gave me more variety and helped me think more clearly about protein and iron sources.',
  },
  {
    location: 'Al Ain, United Arab Emirates',
    condition: 'General Wellness',
    rating: 5,
    quote:
      'I was not looking for a major diet plan. I needed help getting back to regular meals after a very busy few months. The advice was calm, clear, and easy to follow.',
  },
  {
    location: 'Faisalabad, Pakistan',
    condition: 'Healthy Weight Gain Support',
    rating: 5,
    quote:
      'I had tried adding random high-calorie foods before, but this gave me more structure. The meal ideas were simple, filling, and easier to keep up with.',
  },
  {
    location: 'Glasgow, United Kingdom',
    condition: 'Pregnancy Nutrition',
    rating: 5,
    quote:
      'The meal ideas were realistic for days when my appetite was low and my schedule was unpredictable. I felt listened to and never judged.',
  },
  {
    location: 'Dubai, United Arab Emirates',
    condition: 'Active Lifestyle & Muscle Support',
    rating: 5,
    quote:
      'I wanted simple guidance around protein and meals for training, not a bodybuilder-style plan. The advice fit my exercise routine and regular home food.',
  },
  {
    location: 'Multan, Pakistan',
    condition: 'Family & Everyday Nutrition',
    rating: 5,
    quote:
      'The best part was not having to cook separate food for everyone. The guidance worked for our shared meals, the children’s lunchboxes, and our normal grocery budget.',
  },
  {
    location: 'Bradford, United Kingdom',
    condition: 'PCOS Support',
    rating: 5,
    quote:
      'The consultation felt like a conversation, not a lecture. I left with a routine that suited my workday and ideas for meals I could genuinely see myself making.',
  },
  {
    location: 'Abu Dhabi, United Arab Emirates',
    condition: 'Nutrient Adequacy Support',
    rating: 5,
    quote:
      'I finally had a clearer idea of how to improve my everyday food choices. The grocery guidance was especially useful because it made planning feel much less overwhelming.',
  },
  {
    location: 'Peshawar, Pakistan',
    condition: 'General Wellness',
    rating: 5,
    quote:
      'I had fallen into a pattern of skipping meals and then eating whatever was quickest late at night. The support helped me create a routine that actually works on busy days.',
  },
  {
    location: 'Sheffield, United Kingdom',
    condition: 'Digestive Health Support',
    rating: 5,
    quote:
      'The suggestions were gradual and easy to test in my normal routine. I appreciated not being given a long list of foods to avoid straight away.',
  },
  {
    location: 'Ajman, United Arab Emirates',
    condition: 'High Cholesterol Support',
    rating: 5,
    quote:
      'I appreciated that nothing was presented as completely forbidden. I learned more practical ways to plan meals and make better choices without feeling restricted.',
  },
  {
    location: 'Hyderabad, Pakistan',
    condition: 'High Cholesterol Support',
    rating: 5,
    quote:
      'The portion guidance made more sense than anything I had tried before. It was practical for our family meals and did not require expensive ingredients.',
  },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Clients guided' },
  { value: 8, suffix: ' yrs', label: 'Clinical experience' },
  { value: 12, suffix: '+', label: 'Countries served online' },
  { value: 96, suffix: '%', label: 'Clients who stay on track' },
];
