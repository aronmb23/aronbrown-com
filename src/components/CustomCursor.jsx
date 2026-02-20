import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    function onMove(e) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function onHoverStart(e) {
      const target = e.target.closest('a, button, [data-magnetic], input, textarea, select, [role="button"]');
      setIsHovering(!!target);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHoverStart);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHoverStart);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      {/* dot */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 8 : 6,
            height: isHovering ? 8 : 6,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.div>

      {/* trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border border-sky-400/50"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering ? 'rgba(56, 189, 248, 0.6)' : 'rgba(56, 189, 248, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
