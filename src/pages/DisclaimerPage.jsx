import React from 'react';
import { Helmet } from 'react-helmet';
import LegalPage from '@/components/site/LegalPage';
import { CONTACT } from '@/data/site';

const SECTIONS = [
  {
    heading: 'Purpose of Meal Mizaaj',
    paragraphs: [
      'Meal Mizaaj provides personalised nutrition education, nutrition counselling, practical meal-planning guidance, recipes, and general wellbeing support. The aim is to help clients build realistic, sustainable food habits that fit their health goals, preferences, routine, and lifestyle.',
      'Meal Mizaaj supports nutrition-related goals and works alongside appropriate healthcare. It does not replace medical diagnosis, medical treatment, emergency care, or advice from your physician or other qualified healthcare provider.',
    ],
  },
  {
    heading: 'Information on this website',
    paragraphs: [
      'All content published on this website, including recipes, articles, resources, meal ideas, food swaps, social-media content, and general nutrition information, is provided for educational and informational purposes only.',
      'Website content is not personalised medical advice. It should not be used to diagnose, treat, cure, reverse, prevent, or manage a medical condition without advice from an appropriately qualified healthcare professional who understands your individual circumstances.',
      'Nutrition needs vary from person to person. A recipe, portion guide, food suggestion, or general resource that is suitable for one person may not be suitable for another person.',
    ],
  },
  {
    heading: 'Nutrition counselling scope',
    paragraphs: [
      'Personalised nutrition support may include discussion of food habits, meal structure, food preferences, practical cooking ideas, grocery guidance, goal setting, nutrition education, and meal-planning support.',
      'For clients managing conditions such as diabetes, high blood pressure, cholesterol concerns, fatty liver, PCOS, digestive symptoms, pregnancy-related nutrition needs, or other health concerns, nutrition guidance is intended to complement—not replace—physician-led care.',
      'Meal Mizaaj does not provide emergency services, medical diagnosis, prescriptions, medication management, or advice to start, stop, or change medication doses.',
    ],
  },
  {
    heading: 'Medical care and medication',
    paragraphs: [
      'Always speak with your physician or another appropriately qualified healthcare professional about symptoms, diagnoses, test results, treatment decisions, supplements, allergies, medical conditions, pregnancy concerns, or significant dietary changes.',
      'Do not start, stop, delay, or change prescribed medication based on information from this website, a recipe, a resource, a discovery call, or a nutrition consultation. Medication decisions remain with your prescribing clinician.',
      'If you have a medical condition, are pregnant or breastfeeding, take regular medication, have a history of an eating disorder, have significant unintentional weight change, or have been advised to follow a therapeutic diet, seek appropriate medical guidance before making major changes to your eating pattern.',
    ],
  },
  {
    heading: 'Discovery calls',
    paragraphs: [
      'A free discovery call is a short introductory conversation to understand your general goals, answer basic questions about Meal Mizaaj, and discuss whether nutrition support may be appropriate. It is not a full nutrition assessment or treatment session.',
      'A discovery call does not provide medical diagnosis, emergency advice, a complete meal plan, medication guidance, or a guarantee that Meal Mizaaj is the right service for every concern.',
      'Submitting a booking request or taking part in a discovery call does not create a doctor–patient, dietitian–client, or other formal professional relationship. A formal client relationship begins only when both parties agree to proceed with an appropriate consultation or service.',
    ],
  },
  {
    heading: 'No guaranteed outcomes',
    paragraphs: [
      'Meal Mizaaj does not promise or guarantee specific outcomes, including a particular amount of weight change, a specific laboratory result, symptom improvement, pregnancy outcome, body measurement, or timeline.',
      'Individual experiences vary. Nutrition outcomes can be influenced by medical history, medication, sleep, stress, activity, access to food, family circumstances, consistency, and many other factors beyond nutrition support alone.',
      'Any client experiences or testimonials published by Meal Mizaaj reflect individual experiences only. They are not a promise, prediction, or guarantee that you will experience the same result.',
    ],
  },
  {
    heading: 'Recipes, resources, and food safety',
    paragraphs: [
      'Recipes, food ideas, nutrition guides, and estimated nutrition information are general resources. Ingredient amounts, calories, nutrients, and preparation results may vary depending on brands, portions, substitutions, cooking methods, and individual needs.',
      'You are responsible for checking ingredients and making choices that are safe for your own allergies, intolerances, cultural requirements, dietary restrictions, medical needs, and food-safety circumstances.',
      'If you have a diagnosed food allergy, coeliac disease, kidney disease, diabetes requiring medication adjustment, an eating disorder, or another condition requiring specialist care, do not rely on general website content as a substitute for personalised clinical advice.',
    ],
  },
  {
    heading: 'Urgent and emergency situations',
    paragraphs: [
      'Meal Mizaaj, this website, email, contact forms, social-media messages, and booking channels are not monitored for emergencies and should never be used for urgent medical concerns.',
      'If you believe you are experiencing a medical emergency, severe symptoms, a mental-health crisis, symptoms of a serious allergic reaction, dangerously high or low blood glucose, chest pain, difficulty breathing, or any situation requiring immediate help, contact your local emergency services, visit the nearest emergency department, or contact your physician immediately.',
    ],
  },
  {
    heading: 'Third-party information and links',
    paragraphs: [
      'This website may occasionally refer to or link to third-party websites, products, services, resources, or social-media platforms for general convenience or information. Meal Mizaaj does not control and is not responsible for the accuracy, availability, privacy practices, or content of third-party services.',
      'A link or mention does not mean that Meal Mizaaj endorses or recommends every statement, product, service, or outcome associated with that third party.',
    ],
  },
  {
    heading: 'Your responsibility',
    paragraphs: [
      'By using this website, you understand that you are responsible for deciding how to use the information provided. You should seek individual advice from a qualified healthcare professional for questions about your health, symptoms, diagnosis, treatment, medication, or personal dietary needs.',
      'If you are unsure whether a change to your diet is suitable for you, pause and speak with your physician or an appropriately qualified healthcare professional before acting.',
    ],
  },
  {
    heading: 'Questions about this disclaimer',
    paragraphs: [
      `If you have a question about what Meal Mizaaj can support or whether a concern is within scope, please contact ${CONTACT.email} before booking. We are happy to explain the next appropriate step in plain language.`,
    ],
  },
];

const DisclaimerPage = () => (
  <>
    <Helmet>
      <title>Disclaimer — Meal Mizaaj</title>
      <meta
        name="description"
        content="Important information about the scope of Meal Mizaaj nutrition support, educational website content, medical care, medications, emergencies, recipes, and individual outcomes."
      />
    </Helmet>

    <LegalPage
      eyebrow="Disclaimer"
      title="Clear guidance, with your wider care in mind."
      lead="Meal Mizaaj offers practical nutrition support, not medical diagnosis or emergency care. Please read this page to understand what our services and website content can—and cannot—provide."
      updated="September 2026"
      notice="This disclaimer is written for the current Meal Mizaaj website and services. It is general information, not legal advice. Have it reviewed by a qualified legal or healthcare-regulation professional before publishing, especially for the locations where you operate and serve clients."
      sections={SECTIONS}
    />
  </>
);

export default DisclaimerPage;