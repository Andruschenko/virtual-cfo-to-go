import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Who is \'Virtual CFO to go\' for?',
    content: () => (
      <>
        Virtual CFO to go is built for fast growing companies to help them stay on track with their finances and keep them financially healthy.
      </>
    ),
  },
  {
    title: 'How do you choose the services which are relevant to me?',
    content: () => (
      <>
        By providing consent to connect to your bank account we detect the which financial services are relevant for you and help you in optimising these.
      </>
    ),
  },
  {
    title: 'What differentiates you from other products?',
    content: () => (
      <>
        We are a virtual finance assistant built for startups, providing bespoke services to your business and allowing you to access financial product that used to only be accessible for larger companies.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
