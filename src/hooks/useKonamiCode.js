import { useEffect, useRef, useState } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export default function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    function handler(e) {
      if (e.key === KONAMI[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === KONAMI.length) {
          setActivated(true);
          indexRef.current = 0;
          // auto-reset after 6 seconds
          setTimeout(() => setActivated(false), 6000);
        }
      } else {
        indexRef.current = 0;
      }
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return activated;
}
