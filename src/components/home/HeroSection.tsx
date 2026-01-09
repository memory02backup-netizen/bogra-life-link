const stats = [
  { value: "৭০০০০+", label: "সদস্য" },
  { value: "২৫০০+", label: "দাতা" },
  { value: "৫০০০+", label: "জীবন রক্ষা" },
  { value: "১০০+", label: "স্বেচ্ছাসেবক" },
];

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="hero-curved-bottom pt-20 pb-20 px-4">
        <div className="flex flex-col items-center text-center text-white">
          {/* Logo with animated glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 w-28 h-28 rounded-full bg-white/20 blur-xl animate-pulse" />
            <div className="relative w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center p-2">
              <img
                src="https://bobdo.vercel.app/bobdo.png"
                alt="BOBDO Logo"
                className="w-full h-full object-contain pointer-events-auto"
              />
            </div>
          </div>
          
          <h1 className="text-xl font-bold mb-2">
            বগুড়া অনলাইন রক্তদান সংগঠন
          </h1>
          <p className="text-white/90 text-sm mb-6">
            স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/15 backdrop-blur-sm rounded-xl p-2 text-center"
              >
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-[10px] text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
