import { useRef, useState } from 'react';

export default function GradientCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
    });
  }

  function handleMouseLeave() {
    setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' });
  }

  return (
    <Tag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`gradient-border group relative bg-slate-900/60 backdrop-blur-sm transition-all duration-300 ${className}`}
      {...rest}
    >
      {/* spotlight follow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(56,189,248,0.06), transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
