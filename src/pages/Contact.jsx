export default function Contact() {
  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 relative">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center relative">
        {/* Mail icon floating */}
        <div className="animate-float mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-fade-in-up animation-delay-200">
          Get in touch
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-6 mx-auto animate-fade-in-up animation-delay-200" />

        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          I'm not using this site to sell anything, but if you want to say hi,
          compare notes on automation, or send me a cool project idea, I'd love to hear from you.
        </p>

        {/* CTA button with animated border */}
        <div className="animate-fade-in-up animation-delay-600">
          <a
            href="mailto:hello@aronbrown.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 animate-gradient-shift shadow-lg shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-shadow" />
            <span className="relative z-10 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:rotate-12 transition-transform">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              hello@aronbrown.com
            </span>
          </a>
        </div>

        {/* Decorative sparkles */}
        <div className="mt-16 flex items-center justify-center gap-6 animate-fade-in-up animation-delay-800">
          {['LinkedIn', 'GitHub'].map((platform) => (
            <span key={platform} className="text-sm text-slate-600 hover:text-slate-400 transition-colors cursor-default">
              {platform}
            </span>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <span className="text-xs text-slate-700">Let's build something</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}
