import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, Music } from 'lucide-react';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'music';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationToastProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ toasts, onRemove }) => {
  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'error':
        return <AlertCircle size={20} className="text-red-400" />;
      case 'music':
        return <Music size={20} className="text-purple-400" />;
      default:
        return <Info size={20} className="text-blue-400" />;
    }
  };

  const getColors = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return 'from-green-600/20 to-emerald-600/20 border-green-500/30';
      case 'error':
        return 'from-red-600/20 to-pink-600/20 border-red-500/30';
      case 'music':
        return 'from-purple-600/20 to-pink-600/20 border-purple-500/30';
      default:
        return 'from-blue-600/20 to-cyan-600/20 border-blue-500/30';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 max-w-sm">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
          icon={getIcon(toast.type)}
          colors={getColors(toast.type)}
        />
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
  icon: React.ReactNode;
  colors: string;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove, icon, colors }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  return (
    <div
      className={`bg-gradient-to-r ${colors} backdrop-blur-sm border rounded-xl p-4
                 transform transition-all duration-300 ${
                   isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                 }`}
    >
      <div className="flex items-start gap-3">
        {icon}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm mb-1">{toast.title}</h4>
          <p className="text-white/80 text-sm leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={() => onRemove(toast.id)}
          className="text-white/60 hover:text-white transition-colors duration-200"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;