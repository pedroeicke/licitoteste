export default function MockupWindow({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white ${className}`}>
            {/* Browser Toolbar */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white h-7 rounded-md border border-slate-200 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-slate-200 mr-2"></div>
                    <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                </div>
            </div>
            {/* Content Area */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}
