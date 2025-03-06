interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}

export const Section = ({ 
  id, 
  className = '', 
  children, 
  background = 'white' 
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-[var(--light-bg)]',
    dark: 'bg-[var(--dark-bg)] text-white',
  };

  return (
    <section 
      id={id} 
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};