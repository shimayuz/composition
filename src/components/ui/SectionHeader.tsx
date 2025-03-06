interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeader = ({ 
  title, 
  subtitle,
  align = 'left'
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-10 ${alignClasses[align]}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};