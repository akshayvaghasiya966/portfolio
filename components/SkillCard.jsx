const SkillCard = ({ name, icon, level = 'Expert', colorIndex = 0 }) => {
  const colorGradients = [
    'from-blue-500/20 to-cyan-500/20 border-blue-300 dark:border-blue-700',
    'from-purple-500/20 to-pink-500/20 border-purple-300 dark:border-purple-700',
    'from-pink-500/20 to-rose-500/20 border-pink-300 dark:border-pink-700',
    'from-orange-500/20 to-yellow-500/20 border-orange-300 dark:border-orange-700',
    'from-green-500/20 to-emerald-500/20 border-green-300 dark:border-green-700',
    'from-indigo-500/20 to-blue-500/20 border-indigo-300 dark:border-indigo-700',
    'from-cyan-500/20 to-teal-500/20 border-cyan-300 dark:border-cyan-700',
    'from-violet-500/20 to-purple-500/20 border-violet-300 dark:border-violet-700',
  ];

  const gradient = colorGradients[colorIndex % colorGradients.length];

  return (
    <div className={`group relative p-6 rounded-lg border-2 bg-gradient-to-br ${gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
      <div className="flex flex-col items-center gap-3 relative z-10">
        <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <span className="text-sm text-muted-foreground font-medium">{level}</span>
      </div>
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
    </div>
  );
};

export default SkillCard;

