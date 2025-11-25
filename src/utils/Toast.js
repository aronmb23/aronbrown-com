
export function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container') || createToastContainer();

    const toast = document.createElement('div');
    const colors = type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white';

    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 ${colors} z-50 font-medium`;
    toast.textContent = message;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    });

    // Remove after duration
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
}
