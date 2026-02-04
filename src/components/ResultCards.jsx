import React, { useState } from 'react';

export default function ResultCards({ results, onReset }) {
    const [revealed, setRevealed] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setRevealed(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-6xl p-2 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10 drop-shadow-sm tracking-widest">
                YOUR NEW EXPERIENCES
            </h2>

            {/* 
        Force 3 columns horizontal layout on desktop, Vertical on mobile
      */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 mb-12 items-center md:items-stretch">
                {results.map((item, index) => (
                    <div
                        key={index}
                        className={`
              flex-1 
              bg-[#fefefe] 
              text-slate-800 
              rounded-sm 
              shadow-lg 
              flex flex-col 
              items-center 
              text-center
              transform transition-all duration-700 ease-out 
              border-t-8 border-[#FFB978]
              /* Added thin orange border around the whole card as requested */
              border-l border-r border-b border-[#FFB978]/50
              relative
              w-full max-w-sm md:max-w-[300px]
              ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
                        style={{
                            transitionDelay: `${index * 200}ms`,
                            minHeight: '400px',
                            // removed inline maxWidth to control via classes
                            padding: '2rem 1.5rem'
                        }}
                    >
                        {/* Badge / Header */}
                        <div className="mb-6 w-full">
                            <span className="inline-block px-3 py-1 bg-[#FFFdeb] text-[#d98c50] text-xs font-bold tracking-widest uppercase mb-4 border border-[#FFB978]/30">
                                NO. {index + 1}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold leading-snug text-slate-900 border-b-2 border-[#FFB978]/20 pb-4 mx-2">
                                {item.title}
                            </h3>
                        </div>

                        {/* Content */}
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow flex items-center justify-center px-2">
                            {item.action}
                        </p>

                        {/* Footer */}
                        <div className="mt-8 pt-4 w-full border-t border-dashed border-slate-300">
                            <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider block">
                                CATEGORY
                            </span>
                            <span className="text-xs md:text-sm text-[#8d3680] font-medium">
                                {item.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button
                    onClick={onReset}
                    className="px-8 py-3 bg-[#FFDAB8] hover:bg-[#FFB978] text-slate-900 rounded-full font-bold transition-all shadow-md transform hover:scale-105 active:scale-95 border border-[#FFB978]/30"
                >
                    もう一度引く
                </button>
            </div>
        </div>
    );
}
