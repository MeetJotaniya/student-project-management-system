import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'colored';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default',
  showText = true,
  className = '' 
}) => {
  const sizes = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-xl' },
    lg: { icon: 40, text: 'text-2xl' },
    xl: { icon: 48, text: 'text-3xl' }
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  const colors = {
    default: {
      bg: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
      text: 'text-white',
      accent: 'text-indigo-500'
    },
    white: {
      bg: 'bg-white',
      text: 'text-white',
      accent: 'text-indigo-500'
    },
    colored: {
      bg: 'bg-gradient-to-br from-blue-600 to-indigo-600',
      text: 'text-white',
      accent: 'text-blue-400'
    }
  };

  const colorScheme = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div 
        className={`${colorScheme.bg} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
        style={{ width: iconSize, height: iconSize }}
      >
        {/* Simple geometric design */}
        <svg 
          width={iconSize * 0.6} 
          height={iconSize * 0.6} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Book/Document shape */}
          <path 
            d="M4 4h16v16H4V4z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Lines representing text/content */}
          <line x1="7" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="16" x2="14" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span className={`${textSize} font-black tracking-tight ${colorScheme.text}`}>
          SPMS
          <span className={colorScheme.accent}>.</span>
        </span>
      )}
    </div>
  );
};

// Compact version for small spaces
export const LogoCompact: React.FC<{ size?: number; className?: string }> = ({ 
  size = 32, 
  className = '' 
}) => {
  return (
    <div 
      className={`bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M4 4h16v16H4V4z" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="7" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="16" x2="14" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
