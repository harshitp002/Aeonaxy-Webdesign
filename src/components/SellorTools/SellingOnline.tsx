import { BsPaypal } from 'react-icons/bs';
import { IoIosLaptop } from 'react-icons/io';
import { TbBellRinging2Filled } from 'react-icons/tb';
import Section from './Section';

const SellingOnline = () => (
  <Section
    title="Selling online"
    description="Grow your business by making it easier for your customers to pay you."
    cards={[
      {
        icon: <BsPaypal />,
        title: 'PayPal buttons',
        text: 'Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.',
        buttonText: 'Manage',
      },
      {
        icon: <IoIosLaptop />,
        title: 'Website preferences',
        text: 'Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.',
        buttonText: 'Update',
      },
      {
        icon: <TbBellRinging2Filled />,
        title: 'Instant payment notifications',
        text: 'Stay informed by turning on notifications for payments made on your website.',
        buttonText: 'Update',
      },
    ]}
  />
);

export default SellingOnline;