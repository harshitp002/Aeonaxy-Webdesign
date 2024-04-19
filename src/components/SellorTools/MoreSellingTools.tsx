import { MdLocalShipping } from 'react-icons/md';
import Section from './Section';

const MoreSellingTools = () => (
  <Section
    title="More selling tools"
    description="Check out the other tools that we have for you to help you sell online."
    cards={[
      {
        icon: <MdLocalShipping />,
        title: 'Shipping preferences',
        text: 'Create your shipping labels for hassle-free returns to get your money back from yourself.',
        buttonText: 'Create',
      },
    ]}
  />
);

export default MoreSellingTools;