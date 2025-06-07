import { FC } from 'react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string; // Icon class string like "fas fa-print"
  onCardClick: (id: string) => void;
}

const ServiceCard: FC<ServiceCardProps> = ({ id, title, description, icon, onCardClick }) => {
  return (
    <div 
      className="flex flex-col h-full p-6 rounded-lg shadow-xl
                 bg-gradient-to-br from-[#054269] via-[#0f5f96] to-[#137DC5] 
                 text-white transition-all duration-500 ease-in-out hover:shadow-2xl
                 transform hover:-translate-y-1"
    >
      {icon && (
        <div className="text-4xl mb-4 text-[#fcfad4]">
          <i className={icon}></i>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-[#fcfad4]">{title}</h3>
      <p className="text-sm opacity-90 text-gray-200 mb-6 whitespace-pre-line flex-grow">{description}</p>
      <button
        onClick={() => onCardClick(id)}
        className="w-full bg-[#fcfad4] text-[#054269] px-4 py-2 rounded-lg 
                   font-semibold hover:bg-[#e6e4c0] transition-all duration-300
                   transform hover:scale-105 mt-auto hover:shadow-lg"
      >
        Conoce más
      </button>
    </div>
  );
};

export default ServiceCard;