import { Building2, Calendar } from 'lucide-react';

const ExperienceCard = ({ company, role, startDate, endDate, isLast, isCurrent, colorIndex = 0 }) => {
  const colorGradients = [
    'from-blue-500/20 to-cyan-500/20 border-blue-300 dark:border-blue-700',
    'from-purple-500/20 to-pink-500/20 border-purple-300 dark:border-purple-700',
    'from-pink-500/20 to-rose-500/20 border-pink-300 dark:border-pink-700',
  ];

  const gradient = colorGradients[colorIndex % colorGradients.length];

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600" />
      )}
      
      <div className="relative flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 flex-shrink-0">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border-2 border-primary shadow-lg`}>
            <Building2 className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-12">
          <div className={`p-6 rounded-lg border-2 bg-gradient-to-br ${gradient} hover:shadow-xl transition-all duration-300 hover:-translate-x-1`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold">{company}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {startDate} - {isCurrent ? 'Present' : endDate}
                </span>
              </div>
            </div>
            <p className="text-primary font-medium">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

