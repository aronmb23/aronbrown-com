import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

const initialItems = [
  { id: '1024', label: 'Invoice #1024', sub: 'Pending Review' },
  { id: '1025', label: 'Invoice #1025', sub: 'Pending Review' },
  { id: '1026', label: 'Invoice #1026', sub: 'Pending Review' },
];

export default function DragDrop() {
  const showToast = useToast();
  const [todoItems, setTodoItems] = useState(initialItems);
  const [doneItems, setDoneItems] = useState([]);
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (id) => {
    setDraggingId(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropOnDone = (e) => {
    e.preventDefault();
    if (!draggingId) return;
    const item = todoItems.find((i) => i.id === draggingId) || doneItems.find((i) => i.id === draggingId);
    if (!item) return;
    setTodoItems((prev) => prev.filter((i) => i.id !== draggingId));
    setDoneItems((prev) => {
      if (prev.find((i) => i.id === draggingId)) return prev;
      return [...prev, item];
    });
    setDraggingId(null);
  };

  const handleDropOnTodo = (e) => {
    e.preventDefault();
    if (!draggingId) return;
    const item = doneItems.find((i) => i.id === draggingId) || todoItems.find((i) => i.id === draggingId);
    if (!item) return;
    setDoneItems((prev) => prev.filter((i) => i.id !== draggingId));
    setTodoItems((prev) => {
      if (prev.find((i) => i.id === draggingId)) return prev;
      return [...prev, item];
    });
    setDraggingId(null);
  };

  const handleCheck = () => {
    if (todoItems.length === 0 && doneItems.length >= 3) {
      showToast('Success! All items sorted.', 'success');
    } else {
      showToast('Not quite. Move all items to the Done column.', 'error');
    }
  };

  const renderItem = (item) => (
    <div
      key={item.id}
      className={`draggable cursor-grab active:cursor-grabbing bg-slate-700 p-4 rounded-lg border border-slate-600 shadow-sm hover:border-sky-500 transition-colors ${draggingId === item.id ? 'opacity-50' : ''}`}
      draggable
      onDragStart={() => handleDragStart(item.id)}
      onDragEnd={() => setDraggingId(null)}
    >
      <div className="font-bold text-white">{item.label}</div>
      <div className="text-xs text-slate-400">{item.sub}</div>
    </div>
  );

  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Drag &amp; Drop Sort</h2>
        <p className="text-slate-400 mt-2">
          Simulate complex mouse interactions.{' '}
          <span className="text-yellow-500">Move all items to the 'Done' column.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* To Do Column */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /> To Do
          </h3>
          <div
            id="todo-zone"
            className="drop-zone min-h-[300px] bg-slate-800/50 rounded-xl p-4 space-y-3 transition-colors border-2 border-dashed border-slate-700/50"
            onDragOver={handleDragOver}
            onDrop={handleDropOnTodo}
          >
            {todoItems.map(renderItem)}
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" /> Done
          </h3>
          <div
            id="done-zone"
            className="drop-zone min-h-[300px] bg-slate-800/50 rounded-xl p-4 space-y-3 transition-colors border-2 border-dashed border-slate-700/50"
            onDragOver={handleDragOver}
            onDrop={handleDropOnDone}
          >
            {doneItems.map(renderItem)}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button id="check-sort" onClick={handleCheck} className="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
          Validate Sort
        </button>
      </div>
    </section>
  );
}
