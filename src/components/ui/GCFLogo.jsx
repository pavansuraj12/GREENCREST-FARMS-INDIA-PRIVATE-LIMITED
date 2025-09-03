import React from 'react';

const GCFLogo = ({ width = 48, height = 40, className = "text-white" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* G - Letter with gradient */}
            <path
                d="M5 20 C5 10 10 5 20 5 L45 5 C55 5 60 10 60 20 L60 30 L45 30 L45 20 L20 20 L20 80 L45 80 L45 70 L35 70 L35 55 L60 55 L60 80 C60 90 55 95 45 95 L20 95 C10 95 5 90 5 80 Z"
                fill="url(#gradientG)"
            />

            {/* C - Letter with gradient */}
            <path
                d="M65 20 C65 10 70 5 80 5 L105 5 C115 5 120 10 120 20 L120 30 L105 30 L105 20 L80 20 L80 80 L105 80 L105 70 L120 70 L120 80 C120 90 115 95 105 95 L80 95 C70 95 65 90 65 80 Z"
                fill="url(#gradientC)"
            />

            {/* F - Letter with gradient */}
            <path
                d="M125 20 C125 10 130 5 140 5 L165 5 C175 5 180 10 180 20 L180 30 L165 30 L165 20 L140 20 L140 45 L170 45 L170 55 L140 55 L140 95 L125 95 Z"
                fill="url(#gradientF)"
            />

            {/* Rooster silhouette inside G */}
            <g transform="translate(25, 25) scale(0.8)">
                {/* Rooster body */}
                <path
                    d="M15 25 C18 22 22 22 25 25 L27 20 C28 18 30 18 31 20 L32 22 L33 18 C34 16 36 17 35 19 L33 24 C34 26 35 28 33 30 L30 34 L28 38 L26 42 L24 46 L22 50 L20 54 L18 52 L20 48 L22 44 L24 40 L26 36 L24 34 L22 32 L20 30 L18 28 L16 26 L15 25 Z"
                    fill="rgba(255,255,255,0.9)"
                />

                {/* Rooster comb */}
                <path
                    d="M25 20 L26 18 L27 16 L28 18 L29 16 L30 18 L31 20 L30 22 L29 20 L28 22 L27 20 L26 22 L25 20 Z"
                    fill="rgba(220,38,38,0.8)"
                />

                {/* Rooster beak */}
                <path
                    d="M32 24 L35 26 L32 28 Z"
                    fill="rgba(255,193,7,0.8)"
                />

                {/* Rooster eye */}
                <circle
                    cx="28"
                    cy="24"
                    r="1.5"
                    fill="rgba(0,0,0,0.8)"
                />
            </g>

            {/* Gradients */}
            <defs>
                <linearGradient id="gradientG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                </linearGradient>

                <linearGradient id="gradientC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#16a34a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#15803d" stopOpacity="0.7" />
                </linearGradient>

                <linearGradient id="gradientF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#16a34a" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#15803d" stopOpacity="0.6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default GCFLogo;