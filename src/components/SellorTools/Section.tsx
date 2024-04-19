import { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import Card from './Card';

interface SectionProps {
  title: string;
  description: string;
  cards: {
    icon: ReactNode;
    title: string;
    text: string;
    buttonText: string;
    iconColor?: string;
  }[];
}

const Section = ({ title, description, cards }: SectionProps) => (
  <div>
    <SectionHeading title={title} />
    <p className="mt-2 mb-6 text-base text-slate-800/65 font-medium">{description}</p>
    {cards.map((card, index) => (
      <Card
        key={index}
        icon={card.icon}
        title={card.title}
        text={card.text}
        buttonText={card.buttonText}
        iconColor={card.iconColor}
      />
    ))}
  </div>
);

export default Section;