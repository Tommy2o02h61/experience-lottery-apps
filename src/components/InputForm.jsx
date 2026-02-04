import React from 'react';
import { MOODS, TIME_LIMITS, LOCATIONS } from '../data';

export default function InputForm({ criteria, setCriteria, onStart }) {
    const handleChange = (key, value) => {
        setCriteria(prev => ({ ...prev, [key]: value }));
    };

    const isFormValid = criteria.mood && criteria.time && criteria.location;

    return (
        <div className="w-full max-w-6xl p-2 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10 drop-shadow-sm tracking-widest">
                EXPERIENCE LOTTERY <span className="text-sm font-normal text-slate-500 block mt-2">v1.4</span>
            </h2>

            {/* 
        Cards Container 
        Gap adjusted to ~80px (approx 1 button height)
        Responsive: Stack vertically on mobile, horizontal on md+
      */}
            <div
                className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 items-stretch"
                style={{ marginBottom: '80px' }}
            >

                {/* Card 1: Mood */}
                <div className="flex-1 bg-[#fefefe] text-slate-800 rounded-sm shadow-lg flex flex-col items-center border-t-8 border-[#FFB978] border-l border-r border-b border-[#FFB978]/50 p-3 md:p-6 relative">
                    <h3 className="text-base md:text-xl font-bold text-slate-900 border-b-2 border-[#FFB978]/20 pb-2 md:pb-4 mb-3 md:mb-6 w-full text-center">
                        今の気分
                    </h3>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 w-full flex-grow">
                        {MOODS.map(mood => (
                            <button
                                key={mood.id}
                                onClick={() => handleChange('mood', mood.id)}
                                className={`h-[120px] md:h-auto md:py-2 px-1 rounded-md text-base md:text-2xl transition-all duration-200 w-full flex items-center justify-center font-bold shadow-sm border ${criteria.mood === mood.id
                                    ? 'bg-[#FFB978] text-white border-[#FFB978]'
                                    : 'bg-[#FFFdeb] text-slate-700 border-[#FFB978]/20 hover:bg-[#FFDAB8]'
                                    }`}
                            >
                                {mood.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Card 2: Time */}
                <div className="flex-1 bg-[#fefefe] text-slate-800 rounded-sm shadow-lg flex flex-col items-center border-t-8 border-[#FFB978] border-l border-r border-b border-[#FFB978]/50 p-3 md:p-6 relative">
                    <h3 className="text-base md:text-xl font-bold text-slate-900 border-b-2 border-[#FFB978]/20 pb-2 md:pb-4 mb-3 md:mb-6 w-full text-center">
                        確保できる時間
                    </h3>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 w-full flex-grow">
                        {TIME_LIMITS.map(time => (
                            <button
                                key={time.id}
                                onClick={() => handleChange('time', time.id)}
                                className={`h-[120px] md:h-auto md:py-2 px-1 rounded-md text-base md:text-2xl transition-all duration-200 w-full flex items-center justify-center font-bold shadow-sm border ${criteria.time === time.id
                                    ? 'bg-[#FFB978] text-white border-[#FFB978]'
                                    : 'bg-[#FFFdeb] text-slate-700 border-[#FFB978]/20 hover:bg-[#FFDAB8]'
                                    }`}
                            >
                                {time.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Card 3: Location */}
                <div className="flex-1 bg-[#fefefe] text-slate-800 rounded-sm shadow-lg flex flex-col items-center border-t-8 border-[#FFB978] border-l border-r border-b border-[#FFB978]/50 p-3 md:p-6 relative">
                    <h3 className="text-base md:text-xl font-bold text-slate-900 border-b-2 border-[#FFB978]/20 pb-2 md:pb-4 mb-3 md:mb-6 w-full text-center">
                        今の場所
                    </h3>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 w-full flex-grow">
                        {LOCATIONS.map(location => (
                            <button
                                key={location.id}
                                onClick={() => handleChange('location', location.id)}
                                className={`h-[120px] md:h-auto md:py-2 px-1 rounded-md text-base md:text-2xl transition-all duration-200 w-full flex items-center justify-center font-bold shadow-sm border ${criteria.location === location.id
                                    ? 'bg-[#FFB978] text-white border-[#FFB978]'
                                    : 'bg-[#FFFdeb] text-slate-700 border-[#FFB978]/20 hover:bg-[#FFDAB8]'
                                    }`}
                            >
                                {location.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4 mb-8 w-full">
                <button
                    onClick={onStart}
                    disabled={!isFormValid}
                    className={`
             w-[54%] md:w-[32%] min-w-[180px]
             py-4 md:py-6
            rounded-full font-bold text-xl md:text-4xl
            shadow-xl transition-all duration-300 transform border-4 tracking-widest
            ${isFormValid
                            ? 'bg-[#FFDAB8] text-slate-900 border-[#FFB978] hover:bg-[#FFB978] hover:text-white hover:scale-[1.02] hover:-translate-y-1'
                            : 'bg-white/50 text-slate-300 border-slate-200 cursor-not-allowed'
                        }`}
                    style={{ minHeight: '50px' }}
                >
                    くじを引く
                </button>
            </div>
        </div>
    );
}
