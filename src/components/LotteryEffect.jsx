import React from 'react';

export default function LotteryEffect() {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-white animate-pulse">
            <div className="w-24 h-24 mb-8 relative">
                <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
            </div>
            <h2 className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-yellow-200">
                DRAWING...
            </h2>
            <p className="mt-4 text-white/80">あなたにぴったりの体験を探しています</p>
        </div>
    );
}
