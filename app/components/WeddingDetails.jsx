'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Music, Utensils, Camera, Heart, Users, Sparkles, Palette, Gift, CalendarPlus, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import settings from '../config/settings';
import Lightbox from './shared/Lightbox';
import localFont from 'next/font/local'

const miFuente = localFont({
  src: '../fonts/mi-fuente.otf'
});


export default function WeddingDetails() {
  const { wedding, venue, events, social, venueGallery, receptionVenue } = settings;
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calendarUrl, setCalendarUrl] = useState('#');
  const [mounted, setMounted] = useState(false);


  // Generate Google Calendar URL on client side only
  React.useEffect(() => {
    setMounted(true);
    const startDate = new Date(`${wedding.date}T${wedding.ceremony.time}:00`);
    const endDate = new Date(`${wedding.date}T${wedding.reception.endTime}:00`);

    // Format dates for Google Calendar (YYYYMMDDTHHmmss)
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };

    const eventDetails = {
      text: `${settings.couple.bride.name} & ${settings.couple.groom.name}'s Wedding`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: `Join us for our wedding celebration!\n\nCeremony: ${wedding.ceremony.displayTime}\nReception: ${wedding.reception.displayTime}\n\nDress Code: ${events.ceremony.dressCode}\n\nWedding Website: ${window.location.origin}`,
      location: `${venue.name}, ${venue.address.street}, ${venue.address.district}, ${venue.address.city}, ${venue.address.country}`,
      ctz: 'Asia/Bangkok' // Adjust timezone as needed
    };

    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: eventDetails.text,
      dates: eventDetails.dates,
      details: eventDetails.details,
      location: eventDetails.location,
      ctz: eventDetails.ctz
    });

    setCalendarUrl(`${baseUrl}&${params.toString()}`);
  }, []);

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateToImage = (index) => {
    setCurrentIndex(index);
  };

  // Timeline data
  const timeline = [
    {
      time: wedding.ceremony.displayTime,
      title: "Guest Arrival",
      description: "Welcome drinks and mingling",
      icon: Users
    },
    {
      time: wedding.ceremony.displayTime,
      title: "Wedding Ceremony",
      description: "Exchange of vows in the garden",
      icon: Heart
    },
    {
      time: wedding.cocktailHour.displayTime,
      title: "Cocktail Hour",
      description: "Champagne, canapés & live music",
      icon: Music
    },
    {
      time: wedding.reception.displayTime,
      title: "Dinner Reception",
      description: "Multi-course dinner service",
      icon: Utensils
    },
    {
      time: "9:00 PM",
      title: "First Dance & Party",
      description: "Dancing under the stars",
      icon: Sparkles
    },
    {
      time: wedding.reception.displayEndTime,
      title: "Grand Finale",
      description: "Sparkler send-off",
      icon: Sparkles
    }
  ];

  // Detail tabs
  const detailTabs = [
    {
      title: "Ceremonia Religiosa",
      icon: Heart,
      content: {
        title: events.ceremony.title,
        time: wedding.ceremony.displayTime,
        location: venue.ceremonyLocation,
        duration: "Celebración Religiosa"
      }
    },
    {
      title: "Recepción",
      icon: Music,
      content: {
        title: events.reception.title,
        time: wedding.reception.displayTime,
        location: "Salón Marti",
        duration: `Una noche de celebración y diversión`
      }
    },
    {
      title: "Código de Vestimenta",
      icon: Palette,
      content: {
        title: "Directrices de vestimenta",
        time: events.ceremony.dressCode,
        location: "Lo importante es que vengas cómodo(a).",
        duration: events.ceremony.colors.join(', ')
      }
    },
  ]

  return (
    <>
      <section id="wedding-details" className="min-h-screen py-20 relative overflow-hidden">
        {/* Elegant Gradient Background - Same as Hero */}
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

        {/* Floating Particles - reduced based on performance */}
        {mounted && performance.particleCount > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(Math.min(performance.particleCount, 15))].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full will-change-transform"
                style={{
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 13) % 100}%`
                }}
                animate={{
                  y: [-20, -120],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 12 + (i % 3) * 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="space-y-12 text-center text-[#1a1a1a]">

            {/* TÍTULO */}
            <p className={`${miFuente.className} text-[clamp(4rem,5vw,7rem)] text-[#1a1a1a]`}>
              Con la bendición de nuestros padres
            </p>

            {/* PADRES NOVIA */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37]/60 mb-4">
                Padres de la novia
              </p>

              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6" />

              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                Felipe Salinas González
              </p>
              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                María Guadalupe González Crescencio
              </p>

              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-6" />
            </div>

            {/* PADRES NOVIO */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37]/60 mb-4">
                Padres del novio
              </p>

              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6" />

              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                Tomas Solis López
              </p>
              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                María Luisa Cruz Gabriel
              </p>


              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-6" />
            </div>

            {/* PADRINOS */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37]/60 mb-4">
                Padrinos
              </p>

              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6" />

              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                María del Rosario Martínez Salinas
              </p>
              <p className="font-playfair text-3xl md:text-4xl tracking-wide">
                Rubén Salinas González
              </p>


              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-6" />
            </div>

          </div>
        </motion.div>



        <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <h2 className={`${miFuente.className} text-[clamp(4rem,10vw,7rem)] text-[#1a1a1a]`}>
              Nuestro Viaje
            </h2>
            <p className="text-lg font-light tracking-[0.2em] uppercase text-[#1a1a1a]/50">
              Todo lo que necesitas saber
            </p>
          </motion.div>



          {/* Main Venue Card with Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >

            {/* Hero Banner with Wide Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={venueGallery.heroImage}
                alt={venue.name}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]/80"></div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center text-center z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.h3
                    className="drop-shadow-[2px_2px_4px_black] font-playfair text-[clamp(3rem,7vw,5rem)] font-thin tracking-[0.02em] leading-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af19] to-[#faf8f3] bg-clip-text text-transparent">
                      {venue.name.toUpperCase()}
                    </span>
                  </motion.h3>
                  <motion.p
                    className="text-white/80 text-xl mt-4 max-w-2xl mx-auto px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Ceremonia Religiosa
                  </motion.p>
                </div>
              </motion.div>
            </div>


            {/* Venue Info Card */}
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-50" />
              <div className="relative p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-3 mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase">
                        Dirección
                      </span>
                    </motion.div>

                    <div className="space-y-3 text-[#1a1a1a]/70">
                      <p className="text-lg">{venue.address.street}</p>
                      <p className="text-lg">{venue.address.district}</p>
                      <p className="text-lg">{venue.address.city}, {venue.address.country}</p>
                      <p className="text-sm mt-6 text-[#d4af37]/60">{venue.parking}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <motion.a
                        href={venue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                        whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                        whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                      >
                        Ver en Google Maps
                      </motion.a>

                      {mounted && (
                        <motion.a
                          href={calendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                          whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                          whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                        >
                          Añadir al Calendario
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="relative h-[400px] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/60" />
                      <img
                        src={venue.imageUrl || "/Iglesia/Iglesia.jpg"}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-[#1a1a1a]/80 text-sm tracking-wider uppercase">
                          {wedding.displayDate}
                        </p>
                        <p className="text-[#d4af37] text-lg">
                          {wedding.ceremony.displayTime}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={receptionVenue.image}
                alt={receptionVenue.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]/80"></div>

              <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                <div>
                  <h3 className="font-playfair text-[clamp(3rem,7vw,5rem)] font-thin">
                    <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                      {receptionVenue.name.toUpperCase()}
                    </span>
                  </h3>
                  <p className="text-white/80 text-xl mt-4">
                    Recepción
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Venue Info Card */}
          {/* Segundo Card */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-50" />
            <div className="relative p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div
                    className="inline-flex items-center gap-3 mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase">
                      Dirección completa
                    </span>
                  </motion.div>

                  <div className="space-y-3 text-[#1a1a1a]/70">
                    <p className="text-lg">{receptionVenue.address.street}</p>
                    <p className="text-lg">{receptionVenue.address.district}</p>
                    <p className="text-lg">{receptionVenue.address.city}, {receptionVenue.address.country}</p>
                    <p className="text-sm mt-6 text-[#d4af37]/60">{receptionVenue.parking}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.a
                      href={receptionVenue.googleMapsUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                      whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                      whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                    >
                      Ver en Google Maps
                    </motion.a>

                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className="relative h-[400px] rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/60" />
                    <img
                      src={venue.imageUrl || "/Salon/SalonMarti.jpg"}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <p className="text-[#1a1a1a]/80 text-sm tracking-wider uppercase">
                        {wedding.displayDate}
                      </p>
                      <p className="text-[#d4af37] text-lg">

                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >


          </motion.div>

          {/* Detail Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {detailTabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${activeTab === index
                      ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]'
                      : 'border-[#d4af37]/30 text-[#1a1a1a]/60 hover:border-[#d4af37]/50 hover:text-[#d4af37]/70'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium tracking-wider uppercase">
                      {tab.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto" // Reducido el ancho máximo para mejor centrado sin la columna de notas
              >
                <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-[#d4af37]/30 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <h3 className="font-playfair text-4xl font-thin text-[#1a1a1a] mb-8">
                    {detailTabs[activeTab].content.title}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <Clock className="w-5 h-5 text-[#d4af37]/60" />
                      <span className="text-xl text-[#1a1a1a]/80">{detailTabs[activeTab].content.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <MapPin className="w-5 h-5 text-[#d4af37]/60" />
                      <span className="text-xl text-[#1a1a1a]/80">{detailTabs[activeTab].content.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Sparkles className="w-5 h-5 text-[#d4af37]/60" />
                      <span className="text-xl text-[#1a1a1a]/80">{detailTabs[activeTab].content.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>



          {/* Social Media & Hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >

            <div className="inline-block bg-white/80 border border-[#d4af37]/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <p className="text-sm tracking-wider text-[#1a1a1a]/60 uppercase mb-2">
                Comparte tus momentos
              </p>
              <p className="font-playfair text-2xl text-[#d4af37]">
                {social.instagram.hashtag}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={venueGallery.images}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </>
  );
}