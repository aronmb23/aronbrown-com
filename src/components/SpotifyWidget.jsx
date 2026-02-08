import { useState, useEffect, useRef } from 'react';

export default function SpotifyWidget() {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch('/api/spotify');
        const json = await res.json();
        if (json.isPlaying) {
          setData(json);
          setVisible(true);
        } else {
          setVisible(false);
        }
      } catch {
        setVisible(false);
      }
    };

    fetchSpotify();
    intervalRef.current = setInterval(fetchSpotify, 30000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={`w-full max-w-4xl mx-auto mt-8 mb-4 px-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {data && (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#191414] to-[#000000] border border-slate-800 shadow-2xl p-6 flex items-center gap-6 group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative shrink-0">
            <img src={data.albumImageUrl} alt={data.album} className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-xl border border-slate-700/50 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute -bottom-2 -right-2 bg-[#1DB954] text-black p-1.5 rounded-full border-4 border-black animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
            </div>
          </div>
          <div className="flex-1 min-w-0 z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#1DB954] text-xs font-bold uppercase tracking-wider">Now Playing</span>
              <div className="flex gap-[3px] items-end h-3">
                <div className="w-[3px] bg-[#1DB954] animate-[music-bar_1s_ease-in-out_infinite] h-full" />
                <div className="w-[3px] bg-[#1DB954] animate-[music-bar_1.2s_ease-in-out_infinite] h-2/3" />
                <div className="w-[3px] bg-[#1DB954] animate-[music-bar_0.8s_ease-in-out_infinite] h-1/2" />
              </div>
            </div>
            <a href={data.songUrl} target="_blank" rel="noopener noreferrer" className="block text-2xl md:text-3xl font-bold text-white hover:text-[#1DB954] transition-colors truncate">
              {data.title}
            </a>
            <p className="text-slate-400 text-lg md:text-xl truncate mt-1">{data.artist}</p>
            <p className="text-slate-600 text-sm truncate mt-1">{data.album}</p>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
          </div>
        </div>
      )}
    </div>
  );
}
