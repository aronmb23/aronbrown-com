
export function Footer() {
  return `
    <footer class="border-t border-slate-800 py-8 text-center relative z-20 bg-slate-950/50 backdrop-blur-sm">
      <div class="text-xs text-slate-500">
        © ${new Date().getFullYear()} Aron Brown. Built for fun.
      </div>
      
      <div class="mt-4 flex justify-center gap-4">
        <button class="nav-link text-slate-700 hover:text-slate-500 transition-colors text-xs" data-page="rpa">RPA Playground</button>
      </div>
    </footer>
  `;
}
