import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
  buttonText: string;
  iconColor?: string;
}

const Card = ({ icon, title, text, buttonText, iconColor = 'text-blue-500' }: CardProps) => (
  <div className="flex flex-row items-center justify-between space-x-4 border-2 rounded-2xl p-4 mb-4 w-80 md:w-3/4">
    <div className={`text-3xl md:text-4xl bg-slate-200 rounded-full py-1 px-1 md:px-3 md:w-14 md:h-12  ${iconColor}`}>
      {icon}
    </div>
    <div className="flex flex-col items-start justify-start">
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-base text-slate-800/65 font-medium">{text}</p>
    </div>
    <button className="text-blue-500 font-bold text-base">{buttonText}</button>
  </div>
);

export default Card;