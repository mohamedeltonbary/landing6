import React, { useState } from 'react'
import Style from "./Navbar.module.css"

const Navbar = () => {
      const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-slate-950/70 backdrop-blur-xl border-b border-white/10 px-6 md:px-16 py-5">
            <div className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v18m7-14H5m14 0l-3 7h6l-3-7ZM5 7l-3 7h6L5 7Zm3 14h8" />
                        </svg>
                    </div>

                    <span className="text-white text-xl md:text-2xl font-black tracking-wide">
                        العدل <span className="text-amber-400">للمحاماة</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10 text-sm font-bold">
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">الرئيسية</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">خدماتنا</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">عن المكتب</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">تواصل معنا</a>
                </div>

                {/* Desktop Button */}
                <button className="hidden lg:block bg-amber-500 text-slate-950 px-7 py-3 rounded-xl font-black text-sm hover:bg-amber-400 transition-all active:scale-95">
                    احجز استشارة
                </button>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="lg:hidden w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center"
                >
                    {openMenu ? (
                        <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${openMenu ? 'max-h-[350px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'} lg:hidden overflow-hidden transition-all duration-300`}>
                <div className="bg-slate-900/95 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 text-right">
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">الرئيسية</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">خدماتنا</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">عن المكتب</a>
                    <a href="#" className="text-white/80 hover:text-amber-400 transition-all">تواصل معنا</a>

                    <button className="bg-amber-500 text-slate-950 px-7 py-3 rounded-xl font-black text-sm hover:bg-amber-400 transition-all">
                        احجز استشارة
                    </button>
                </div>
            </div>
        </nav>)
}

export default Navbar