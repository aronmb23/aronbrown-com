
export function Footer() {
    return `
    <footer class="border-t border-slate-800 py-8 text-center">
      <div class="text-xs text-slate-500">
        © ${new Date().getFullYear()} Aron Brown. Built for fun.
      </div>
      <div class="mt-2 flex justify-center gap-4">
        <!-- Social icons could go here -->
      </div>
    </footer>
  `;
}
