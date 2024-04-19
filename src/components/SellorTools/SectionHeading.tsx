interface SectionHeadingProps {
    title: string;
  }
  
  const SectionHeading = ({ title }: SectionHeadingProps) => (
    <h2 className="text-2xl font-medium">{title}</h2>
  );
  
  export default SectionHeading;