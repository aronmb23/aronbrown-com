
import { showToast } from '../../utils/Toast.js';

export function DragDrop() {
    setTimeout(() => {
        const draggables = document.querySelectorAll('.draggable');
        const containers = document.querySelectorAll('.drop-zone');
        const checkBtn = document.getElementById('check-sort');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
                draggable.classList.add('opacity-50');
            });

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
                draggable.classList.remove('opacity-50');
            });
        });

        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault();
                const afterElement = getDragAfterElement(container, e.clientY);
                const draggable = document.querySelector('.dragging');
                if (afterElement == null) {
                    container.appendChild(draggable);
                } else {
                    container.insertBefore(draggable, afterElement);
                }
            });
        });

        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }

        if (checkBtn) {
            checkBtn.addEventListener('click', () => {
                const todoZone = document.getElementById('todo-zone');
                const doneZone = document.getElementById('done-zone');

                // Logic: All items must be moved to "Done"
                if (todoZone.children.length === 0 && doneZone.children.length >= 3) {
                    showToast('Success! All items sorted.', 'success');
                } else {
                    showToast('Not quite. Move all items to the Done column.', 'error');
                }
            });
        }
    }, 100);

    return `
    <section class="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Drag & Drop Sort</h2>
        <p class="text-slate-400 mt-2">
          Simulate complex mouse interactions. 
          <span class="text-yellow-500">Move all items to the 'Done' column.</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- To Do Column -->
        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span> To Do
            </h3>
            <div id="todo-zone" class="drop-zone min-h-[300px] bg-slate-800/50 rounded-xl p-4 space-y-3 transition-colors border-2 border-dashed border-slate-700/50">
                <div class="draggable cursor-grab active:cursor-grabbing bg-slate-700 p-4 rounded-lg border border-slate-600 shadow-sm hover:border-sky-500 transition-colors" draggable="true">
                    <div class="font-bold text-white">Invoice #1024</div>
                    <div class="text-xs text-slate-400">Pending Review</div>
                </div>
                <div class="draggable cursor-grab active:cursor-grabbing bg-slate-700 p-4 rounded-lg border border-slate-600 shadow-sm hover:border-sky-500 transition-colors" draggable="true">
                    <div class="font-bold text-white">Invoice #1025</div>
                    <div class="text-xs text-slate-400">Pending Review</div>
                </div>
                <div class="draggable cursor-grab active:cursor-grabbing bg-slate-700 p-4 rounded-lg border border-slate-600 shadow-sm hover:border-sky-500 transition-colors" draggable="true">
                    <div class="font-bold text-white">Invoice #1026</div>
                    <div class="text-xs text-slate-400">Pending Review</div>
                </div>
            </div>
        </div>

        <!-- Done Column -->
        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-green-500"></span> Done
            </h3>
            <div id="done-zone" class="drop-zone min-h-[300px] bg-slate-800/50 rounded-xl p-4 space-y-3 transition-colors border-2 border-dashed border-slate-700/50">
                <!-- Drop items here -->
            </div>
        </div>
      </div>

      <div class="text-center">
        <button id="check-sort" class="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
            Validate Sort
        </button>
      </div>
    </section>
  `;
}
