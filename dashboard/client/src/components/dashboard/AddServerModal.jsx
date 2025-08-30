import { motion, AnimatePresence } from 'framer-motion'

export default function AddServerModal({ open, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    onSubmit?.(data)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-[92vw] max-w-lg rounded-2xl p-6 bg-[#151520]/80 border border-white/10 shadow-[0_0_40px_rgba(0,212,255,0.2)]"
          >
            <h3 className="text-white text-lg font-semibold mb-4">Add Server</h3>
            <div className="grid gap-3">
              <div>
                <label className="text-xs text-[#a0a9c0]">Server Name</label>
                <input name="name" required className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#00d4ff]/50 outline-none" />
              </div>
              <div>
                <label className="text-xs text-[#a0a9c0]">IP Address</label>
                <input name="ip" required pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#00d4ff]/50 outline-none" />
              </div>
              <div>
                <label className="text-xs text-[#a0a9c0]">Metadata (optional)</label>
                <input name="meta" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#00d4ff]/50 outline-none" />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-white/80">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-md bg-[#00ff88]/20 border border-[#00ff88]/40 text-[#00ff88] hover:bg-[#00ff88]/30">Add</button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
