import React from 'react';
import { Helmet } from 'react-helmet';
import LegalPage from '@/components/site/LegalPage';
import { CONTACT } from '@/data/site';

const SECTIONS = [
  {
    heading: 'What Meal Mizaaj provides',
    paragraphs: [
      'Meal Mizaaj provides nutrition education, counselling, and meal-planning support to help you build healthier eating habits and work towards your wellbeing goals.',
      'This support is designed to complement your overall care. It does not replace medical diagnosis, treatment, emergency care, or the advice of your physician.',
    ],
  },
  {
    heading: 'Not medical advice',
    paragraphs: [
      'The content on this website — including articles, recipes, guides, and general nutrition information — is provided for education and general wellbeing. It is not medical advice, and it is not a substitute for diagnosis, treatment, or care from a qualified physician.',
    ],
  },
  {
    heading: 'No doctor–patient relationship',
    paragraphs: [
      'Using this website, sending a message, or booking a discovery call does not create a doctor–patient or dietitian–client relationship. A professional relationship begins only when we formally agree to work together in a consultation.',
    ],
  },
  {
    heading: 'Medication & your doctor',
    paragraphs: [
      'Any changes to your medication — starting, stopping, or adjusting a dose — must be discussed with your doctor. Never change a prescription based on information from this website or from nutrition consultations.',
      'Nutrition counselling at Meal Mizaaj is designed to support your overall care alongside your medical team, never to replace it.',
    ],
  },
  {
    heading: 'No guaranteed outcomes',
    paragraphs: [
      'Meal Mizaaj does not claim to cure, treat, or reverse any disease. Client reviews and outcomes shared on this site reflect individual experiences and are not a guarantee of results.',
      'Your results depend on many factors — your starting point, consistency, medical history, and more — and cannot be guaranteed.',
    ],
  },
  {
    heading: 'Recipes & resources',
    paragraphs: [
      'Recipes and guides are provided for general information. Nutritional values are estimates and may vary with ingredients and preparation. Please check ingredients carefully for your own allergies and intolerances — you know your body best.',
    ],
  },
  {
    heading: 'Emergencies',
    paragraphs: [
      'This website and its contact channels are not monitored for emergencies. If you are experiencing a medical emergency, contact your local emergency services or go to the nearest hospital immediately.',
    ],
  },
  {
    heading: 'Questions',
    paragraphs: [
      `If anything on this page is unclear, please write to ${CONTACT.email} — I’m glad to clarify.`,
    ],
  },
];

const DisclaimerPage = () => (
  <>
    <Helmet>
      <title>Disclaimer — Meal Mizaaj</title>
      <meta
        name="description"
        content="Meal Mizaaj provides nutrition education, counselling, and meal-planning support. It does not replace medical diagnosis, treatment, emergency care, or your physician's advice."
      />
    </Helmet>
    <LegalPage
      eyebrow="Disclaimer"
      title="An honest word about scope"
      lead="Good nutrition care begins with clarity about what it is — and what it is not. Please read this page carefully."
      updated="January 2025"
      sections={SECTIONS}
    />
  </>
);

export default DisclaimerPage;
