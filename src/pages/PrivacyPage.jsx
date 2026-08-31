import React from 'react';
import { Helmet } from 'react-helmet';
import LegalPage from '@/components/site/LegalPage';
import { CONTACT } from '@/data/site';

const SECTIONS = [
  {
    heading: 'Contact data',
    paragraphs: [
      'When you use the contact form on this website, I collect the details you choose to share: your name, email address, WhatsApp or phone number, the subject of your enquiry, and your message.',
      'This information is used only to read and reply to your enquiry. It is not added to any marketing list, and it is never sold, rented, or shared with third parties.',
    ],
  },
  {
    heading: 'Booking data',
    paragraphs: [
      'When you request a free discovery call, I collect your name, email, WhatsApp or phone number, your primary goal, your preferred date and time, and any message you add.',
      'These details are used to arrange your call, prepare for it, and follow up afterwards. If you go on to become a client, relevant booking details may be kept as part of your client record.',
    ],
  },
  {
    heading: 'Health information',
    paragraphs: [
      'During consultations, and only with your knowledge, I may keep notes relevant to your care — such as medical history you share, lab reports you provide, and your meal plans.',
      'Anything you share about your health is treated as confidential. Consultation notes and reports are stored securely, access is limited to your dietitian, and they are never used for any purpose beyond your care.',
    ],
  },
  {
    heading: 'Email communication',
    paragraphs: [
      'If you subscribe to the newsletter, your email address is used only to send you occasional nutrition notes, recipes, and practical tips. You can unsubscribe at any time using the link in any email.',
      'Emails sent between us as part of your enquiries or consultations are kept for record-keeping and continuity of care, and are never shared with third parties.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'This website uses only the essential technical storage needed to function and, at most, privacy-respecting aggregate analytics. No advertising trackers are used, and no data is shared with advertising networks.',
      'You can clear cookies in your browser at any time without affecting your ability to use the site.',
    ],
  },
  {
    heading: 'Data protection',
    paragraphs: [
      'Your personal and health information is stored securely and handled in line with accepted data-protection practices. Access is restricted to authorised personnel only.',
      'I never sell, rent, or trade your personal information. I never share your health details with third parties without your explicit permission — except where the law requires it, or where there is a serious and immediate risk to your safety.',
    ],
  },
  {
    heading: 'Data retention & your rights',
    paragraphs: [
      'Enquiry and booking details are kept only as long as needed to respond and, if you become a client, for the duration of our work together plus any period required by professional record-keeping standards.',
      'You may ask at any time to see the information held about you, to correct it, or to have it deleted. Simply email me and it will be done promptly.',
    ],
  },
  {
    heading: 'Questions about privacy',
    paragraphs: [
      `If you have any questions about how your information is handled, please write to ${CONTACT.email}. I’m happy to explain anything in plain language.`,
    ],
  },
];

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy — Meal Mizaaj</title>
      <meta
        name="description"
        content="How Meal Mizaaj collects, uses, and protects your contact data, booking data, and health information — written in plain language."
      />
    </Helmet>
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your privacy, taken personally"
      lead="Health information is deeply personal. This policy explains — in plain words — what is collected, why, and how it is protected."
      updated="January 2025"
      notice="This is a placeholder privacy policy provided for launch. Please review and finalise it with a qualified professional before publishing to ensure it meets your local legal and regulatory requirements."
      sections={SECTIONS}
    />
  </>
);

export default PrivacyPage;
