// components/QuickActions.js
import { Droplet, Moon, Square, Baby } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { type: 'feed', label: '授乳', icon: <Droplet size={24} className="text-blue-500" />, bg: 'bg-blue-100' },
    { type: 'sleep', label: '睡眠', icon: <Moon size={24} className="text-purple-500" />, bg: 'bg-purple-100' },
    { type: 'diaper', label: 'おむつ', icon: <Square size={24} className="text-yellow-500" />, bg: 'bg-yellow-100' },
    { type: 'growth', label: '成長', icon: <Baby size={24} className="text-green-500" />, bg: 'bg-green-100' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-sm text-gray-500 mb-3">クイック記録</h3>
      <div className="flex justify-around">
        {actions.map(action => (
          <button key={action.type} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center mb-1`}>
              {action.icon}
            </div>
            <span className="text-xs">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
