'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import settings from '../config/settings';
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'


// ================= FONTS =================
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600']
})

const miFuente = localFont({
  src: '../fonts/mi-fuente.otf'
});

const miFuente2 = localFont({
  src: '../fonts/mi-fuente2.ttf'
});

export default function Hero() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('countdown');
    element?.scrollIntoView({ behavior: 'smooth' });

    window.dispatchEvent(new Event('playBackgroundMusic'));
  };

  return (
    <div id="hero" className="h-screen relative flex items-start md:items-center justify-center overflow-visible pt-20 md:pt-0">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f2] via-[#f3f1ec] to-[#ece8df]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3720] via-transparent to-[#d4af3705]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3715] via-transparent to-[#ff6b6b10]" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#87a87810] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#d4af3708] to-[#faf8f305]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,107,0.08)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(135,168,120,0.05)_0%,_transparent_60%)]" />
      </div>

      {/* Animated Light Beams */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#d4af3740] to-transparent will-change-transform"
            initial={{ x: '-150%', y: '100vh', rotate: -45 }}
            animate={{ x: '150%', y: '-100vh' }}
            transition={{ duration: 8, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#ff6b6b30] to-transparent will-change-transform"
            initial={{ x: '150%', y: '100vh', rotate: 45 }}
            animate={{ x: '-150%', y: '-100vh' }}
            transition={{ duration: 10, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
          />
        </div>
      )}

      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {isClient && (
          <motion.div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        )}

        {isClient && (
          <motion.div
            className="absolute top-[15%] right-[10%] w-32 h-32 will-change-transform"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af3720] to-transparent blur-xl" />
          </motion.div>
        )}

        {isClient && (
          <motion.div
            className="absolute bottom-[20%] left-[5%] w-40 h-40 will-change-transform"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff6b6b15] to-transparent blur-2xl" />
          </motion.div>
        )}

        {isClient && (
          <>
            <motion.div
              className="absolute top-[60%] right-[25%] w-48 h-48 will-change-transform"
              animate={{
                y: [0, 25, 0],
                x: [0, -15, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#87a87815] to-transparent blur-2xl" />
            </motion.div>

            <motion.div
              className="absolute top-[30%] left-[15%] w-36 h-36 will-change-transform"
              animate={{
                y: [0, -35, 0],
                x: [0, 25, 0],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af3718] to-transparent blur-xl" />
            </motion.div>
          </>
        )}

        {isClient && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full will-change-transform"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + (i % 3) * 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative px-6 max-w-6xl mx-auto mt-8 md:mt-0">
        {/* Date Badge - Color oscurecido para contraste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-8 md:mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#1a1a1a]" />
          <span className="text-xs tracking-[4px] text-[#8a6d1a] font-medium uppercase">
            {settings.wedding.displayDate}
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#1a1a1a]" />
        </motion.div>

        {/* Names - Gradiente con tonos más profundos (Bronce/Oro Viejo) */}
        <div className="relative mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.h1
              className={`${miFuente.className} text-[clamp(5rem,12vw,7rem)] md:text-[clamp(5rem,15vw,8rem)] leading-[1.1] tracking-wide px-8`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-[#1a1a1a] drop-shadow-sm">
                {settings.couple.bride.name}
              </span>
            </motion.h1>

            <motion.div
              className="relative flex items-center justify-center my-2 md:my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="relative flex items-center gap-8">
                <motion.div className="relative">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
                    <motion.path
                      d="M 120 20 Q 60 10, 30 20 T 0 20"
                      stroke="#8a6d1a"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                  </svg>
                </motion.div>

                <motion.div className="relative px-6">
                  <motion.span
                    className="text-[#8a6d1a] text-4xl font-normal italic font-playfair relative z-10 block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &
                  </motion.span>
                </motion.div>

                <motion.div className="relative">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
                    <motion.path
                      d="M 0 20 Q 60 10, 90 20 T 120 20"
                      stroke="#8a6d1a"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className={`${miFuente.className} text-[clamp(5rem,12vw,7rem)] md:text-[clamp(5rem,15vw,8rem)] leading-[1.4] tracking-wide px-5`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="text-[#1a1a1a] drop-shadow-sm">
                {settings.couple.groom.name}
              </span>

            </motion.h1>
          </motion.div>

          {/* Subtitle - Verde musgo más oscuro para legibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 md:mt-12 space-y-2"
          >
            <p className="text-sm tracking-[3px] uppercase text-[#1a1a1a] font-semibold">
              NOS UNIMOS EN MATRIMONIO
            </p>
            {settings.venue?.name && (
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-[0.5px] bg-[#1a1a1a50]" />
                <p className="text-xs tracking-[2px] uppercase text-[#1a1a1a]">
                  Acompáñanos a celebrar el inicio de nuestra historia juntos.
                </p>
                <div className="w-8 h-[0.5px] bg-[#8a6d1a50]" />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Borde y color más definidos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-36 md:bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30px] h-[50px] border-2 border-[#8a6d1a40] rounded-full flex items-start justify-center p-2 group-hover:border-[#8a6d1a] transition-colors"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-[#8a6d1a] rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}