import React from 'react';
import { Helmet } from 'react-helmet';
import LegalPage from '@/components/site/LegalPage';
import { CONTACT } from '@/data/site';

const SECTIONS = [
  {
    heading: 'Who this policy applies to',
    paragraphs: [
      'This Privacy Policy explains how Meal Mizaaj handles personal information collected through this website, including the contact form, free discovery-call booking form, email communication, and nutrition consultations.',
      `Meal Mizaaj is responsible for the information collected through this website. If you have a question about this policy or your information, please contact us at ${CONTACT.email}.`,
    ],
  },
  {
    heading: 'Information we collect',
    paragraphs: [
      'When you send a message or request a free discovery call, we may collect your name, email address, phone or WhatsApp number, the subject or goal you select, your preferred date and time, and the message you choose to provide.',
      'If you become a client, we may also collect information relevant to providing personalised nutrition support. This may include your food preferences, lifestyle information, relevant health history, goals, meal plans, and medical reports or information that you voluntarily choose to share.',
      'Please avoid sending highly sensitive, urgent, or emergency medical information through website forms. Website forms are intended for enquiries and booking requests, not emergency care or urgent medical advice.',
    ],
  },
  {
    heading: 'How we use your information',
    paragraphs: [
      'Your information is used to respond to your message, arrange and confirm a discovery call or consultation, understand the type of support you are seeking, and provide or follow up on nutrition services where appropriate.',
      'We may use your contact details to send appointment confirmations, rescheduling messages, practical information related to a booked service, and replies to questions you have sent us.',
      'Meal Mizaaj does not sell, rent, or trade personal information. Your information is not used for unrelated marketing purposes without your consent.',
    ],
  },
  {
    heading: 'Booking and enquiry records',
    paragraphs: [
      'Messages and booking requests submitted through this website are stored using the website systems and service providers used to operate Meal Mizaaj. These records help us respond to enquiries, manage appointment requests, and maintain communication continuity.',
      'Submitting a booking request does not create a paid booking, treatment relationship, or guaranteed appointment. A requested time is only confirmed when Meal Mizaaj contacts you with confirmation details.',
    ],
  },
  {
    heading: 'Health-related information',
    paragraphs: [
      'Health information is personal and may be considered sensitive information. We only ask for or retain information that is relevant to understanding your nutrition goals and providing the support you have requested.',
      'Information shared during a consultation, including relevant notes, meal plans, goals, and reports you provide, is treated as confidential and used only for your nutrition support and related record-keeping.',
      'Nutrition counselling supports overall wellbeing and works alongside appropriate medical care. Meal Mizaaj does not provide emergency care, medical diagnosis, or medication advice through this website or its contact forms.',
    ],
  },
  {
    heading: 'Sharing information',
    paragraphs: [
      'Access to personal and health-related information is limited to the people who need it to operate Meal Mizaaj and provide the requested service. We may also use carefully selected technical service providers to host the website, store form submissions, send email, or manage appointments.',
      'We do not share your personal or health information for advertising purposes. We will not disclose health-related information to another person, professional, or organisation without your permission unless disclosure is required by law or necessary to address a serious and immediate safety concern.',
      'If you choose to contact Meal Mizaaj through an external service such as email, Instagram, Google Meet, or WhatsApp, that service may process your information according to its own privacy policy and terms.',
    ],
  },
  {
    heading: 'Data storage and security',
    paragraphs: [
      'We take reasonable technical and organisational steps to protect information from unauthorised access, loss, misuse, or disclosure. Access to records is restricted where practical, and information is handled with care.',
      'No online system can guarantee absolute security. Please use your own judgement when sharing information online and do not use this website to send emergency information or information that requires an immediate medical response.',
    ],
  },
  {
    heading: 'Cookies and website technology',
    paragraphs: [
      'This website may use essential technical storage or cookies needed for the website to function correctly, remember basic preferences, and protect forms from misuse. These tools are not used to sell personal information or create advertising profiles.',
      'If analytics or other third-party tools are added to the website in the future, this policy will be updated to explain what information is collected, why it is used, and any choices available to you.',
      'You can control or delete cookies through your browser settings. Disabling certain technical cookies may affect how some parts of the website function.',
    ],
  },
  {
    heading: 'How long we keep information',
    paragraphs: [
      'Enquiry and booking information is kept only for as long as reasonably necessary to respond, manage appointments, maintain relevant records, resolve questions, and meet any applicable professional, legal, or administrative obligations.',
      'If you become a client, relevant consultation records may need to be kept for a longer period in line with appropriate record-keeping requirements. The length of time may depend on the nature of the service, your location, and applicable professional or legal obligations.',
    ],
  },
  {
    heading: 'Your choices and rights',
    paragraphs: [
      'You may contact Meal Mizaaj to ask what personal information is held about you, request that inaccurate information is corrected, withdraw consent where consent is the basis for processing, or ask for information to be deleted where this is possible.',
      'Some information may need to be retained where there is a legitimate reason or professional, legal, safety, or record-keeping requirement to do so. If we cannot complete a deletion request in full, we will explain the reason where appropriate.',
      `To make a privacy request, email ${CONTACT.email} from the email address connected to your enquiry or booking. We may ask for reasonable information to confirm your identity before acting on a request.`,
    ],
  },
  {
    heading: 'International visitors',
    paragraphs: [
      'Meal Mizaaj offers online nutrition support to clients in different locations. By using this website or submitting a form, you understand that your information may be processed or stored in the country where Meal Mizaaj or its service providers operate.',
      'If you are located outside the country where Meal Mizaaj operates, local privacy rights and data-protection rules may differ. We aim to handle personal information responsibly and in a way that respects privacy regardless of location.',
    ],
  },
  {
    heading: 'Children and young people',
    paragraphs: [
      'This website is not designed to collect personal information directly from children. If nutrition support is requested for a child or young person, a parent or legal guardian should contact Meal Mizaaj and remain involved in the process where appropriate.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'Meal Mizaaj may update this Privacy Policy when website features, services, data practices, or legal requirements change. The most recent version will always be available on this page, with the updated date shown below.',
      'We encourage you to review this policy periodically, particularly before submitting personal or health-related information through the website.',
    ],
  },
  {
    heading: 'Questions or concerns',
    paragraphs: [
      `If you have a question, concern, or request about privacy, please email ${CONTACT.email}. We will aim to respond clearly and within a reasonable time.`,
    ],
  },
];

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy — Meal Mizaaj</title>
      <meta
        name="description"
        content="Learn how Meal Mizaaj collects, uses, stores, and protects information submitted through website enquiries, free-call bookings, and nutrition consultations."
      />
    </Helmet>

    <LegalPage
      eyebrow="Privacy Policy"
      title="Your privacy, handled with care."
      lead="Your health goals and personal information deserve respect. This policy explains what Meal Mizaaj collects, why it is used, and the choices available to you."
      updated="September 2026"
      notice="This policy is written for the current Meal Mizaaj website and its contact and booking forms. It is general information, not legal advice. Before publishing, have it reviewed by a qualified legal or data-protection professional for the locations where you operate and serve clients."
      sections={SECTIONS}
    />
  </>
);

export default PrivacyPage;