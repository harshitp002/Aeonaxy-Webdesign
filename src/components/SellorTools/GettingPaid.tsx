import { FaFileInvoice } from 'react-icons/fa';
import Section from './Section';

const GettingPaid = () => (
  <Section
    title="Getting paid"
    description="Choose from various payment tools to attract your customers."
    cards={[
      {
        icon: <FaFileInvoice />,
        title: 'Invoices',
        text: 'Create professional invoices and customize it as per your requirements to see in the future.',
        buttonText: 'Manage',
      },
    ]}
  />
);

export default GettingPaid;