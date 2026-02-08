export default function Contact() {
  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in touch</h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
          I'm not using this site to sell anything, but if you want to say hi,
          compare notes on automation, or send me a cool project idea, I'd love to hear from you.
        </p>

        <a
          href="mailto:hello@aronbrown.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sky-500 text-white font-bold text-lg hover:bg-sky-400 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          hello@aronbrown.com
        </a>
      </div>
    </section>
  );
}
