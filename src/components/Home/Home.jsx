import React from 'react'
import Style from "./Home.module.css"
import photo1 from "../../assets/img (1).jpg"
import photo2 from "../../assets/img (2).jpg"
import photo3 from "../../assets/img (3).jpg"
import photo4 from "../../assets/img (4).jpg"

const Home = () => {
    return (
        <main className="relative min-h-screen w-full flex items-center overflow-hidden" dir="rtl">

            {/* Background Image */}
            <img
                src={photo2}
                alt="Law Office"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-950/75"></div>

            {/* Gold Glow */}
            <div className="absolute top-24 right-16 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 left-16 w-72 h-72 bg-white/10 rounded-full blur-[120px]"></div>

            {/* Content */}
            <section className="relative z-10 container mx-auto px-6 md:px-16 pt-28">
                <div className="max-w-3xl text-right">

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                        <span className="text-amber-300 text-sm md:text-base font-bold">
                            للاستشارات القانونية والمحاماة
                        </span>
                    </div>

                    <h1 className="text-white text-4xl md:text-7xl font-black leading-tight mb-6">
                        مكتب الميزان <br />
                        <span className="text-amber-400">للمحاماة والاستشارات</span>
                    </h1>

                    <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-2xl mb-10">
                        نقدم لك استشارات قانونية دقيقة وحلولًا احترافية في القضايا المدنية
                        والتجارية والأسرية، مع متابعة مستمرة وحماية كاملة لحقوقك.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="cursor-pointer px-9 py-4 bg-amber-500 text-slate-950 rounded-xl font-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                            احجز استشارة الآن
                        </button>

                        <button className="cursor-pointer px-9 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95">
                            خدماتنا القانونية
                        </button>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Home