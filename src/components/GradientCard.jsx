import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
      rotateX,
      rotateY,
    });
  }

  function handleMouseLeave() {
    setStyle({ rotateX: 0, rotateY: 0 });
  }

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: style.rotateX || 0,
        rotateY: style.rotateY || 0,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        perspective: 800,
        '--spotlight-x': style['--spotlight-x'] || '50%',
        '--spotlight-y': style['--spotlight-y'] || '50%',
      }}
      className={`gradient-border group relative bg-slate-900/60 backdrop-blur-sm ${className}`}
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
    </MotionTag>
  );
}
