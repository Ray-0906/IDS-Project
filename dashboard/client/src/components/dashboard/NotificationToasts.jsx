import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, ShieldAlert, ShieldCheck } from 'lucide-react'

const icons = {
  low: ShieldCheck,
  medium: ShieldAlert,
  high: AlertTriangle,
  critical: AlertTriangle,
}

const colors = {
  low: 'border-[#00ff88]/40 text-[#00ff88] bg-[#00ff88]/10',
  medium: 'border-[#00d4ff]/40 text-[#00d4ff] bg-[#00d4ff]/10',
  high: 'border-[#ffb703]/40 text-[#ffb703] bg-[#ffb703]/10',
  critical: 'border-[#ef4444]/40 text-[#ef4444] bg-[#ef4444]/10',
}

export default function NotificationToasts({ alerts, onDismiss }) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {alerts.map((a) => {
          const Icon = icons[a.severity] || ShieldAlert
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`backdrop-blur-md rounded-lg border px-4 py-3 shadow-lg ${colors[a.severity]}`}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white/90 font-medium">{a.title}</p>
                  <p className="text-white/70 text-xs">{a.message}</p>
                </div>
                <button onClick={() => onDismiss(a.id)} className="ml-2 text-white/60 hover:text-white/90">×</button>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
