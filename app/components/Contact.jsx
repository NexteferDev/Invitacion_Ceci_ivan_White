'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../lib/firebase.js'
import { collection, addDoc } from 'firebase/firestore'

import localFont from 'next/font/local'

const miFuente = localFont({
  src: '../fonts/mi-fuente.otf'
});

export default function RSVP() {

    const [form, setForm] = useState({
        nombre: '',
        asistira: 'si',
        mensaje: ''
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!form.nombre) {
            alert("Por favor escribe el nombre de la familia")
            return
        }

        setLoading(true)

        try {
            await addDoc(collection(db, "rsvp"), {
                ...form,
                fecha: new Date()
            })

            setSuccess(true)

            setForm({
                nombre: '',
                asistira: 'si',
                mensaje: ''
            })

        } catch (error) {
            console.error(error)
            alert("Error al enviar")
        }

        setLoading(false)
    }

    return (
        <section id="rspv" className="min-h-screen flex items-center justify-center py-20 bg-[#f3f1ec] relative overflow-hidden">

            <div className="max-w-2xl w-full mx-auto px-6 relative z-10">

                {/* TITULO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className={`${miFuente.className} text-[clamp(4rem,10vw,7rem)] text-[#1a1a1a] leading-[1.3] px-6`}>
                        Confirma tu asistencia
                    </h2>

                    <p className="text-[#1a1a1a]/60 uppercase tracking-widest">
                        Nos encantaría contar contigo
                    </p>
                </motion.div>

                {/* MENSAJE DE ÉXITO */}
                {success && (
                    <div className="mb-6 text-center text-[#c9a227]">
                        ✔ Confirmación enviada correctamente
                    </div>
                )}

                {/* FORMULARIO */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#d4af37]/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                >

                    {/* Nombre */}
                    <input
                        type="text"
                        placeholder="NOMBRE DE LA FAMILIA"
                        value={form.nombre}
                        className="w-full p-4 bg-white/70 rounded-xl text-[#1a1a1a] outline-none border border-black/10 focus:border-[#d4af37]/50 transition"
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />

                    {/* Asistencia */}
                    <div className="flex gap-4">

                        <button
                            type="button"
                            onClick={() => setForm({ ...form, asistira: 'si' })}
                            className={`flex-1 p-4 rounded-xl border transition ${
                                form.asistira === 'si'
                                    ? 'bg-[#d4af37] text-black border-[#d4af37]'
                                    : 'bg-white/70 text-[#1a1a1a] border-[#d4af37]/30 hover:border-[#d4af37]/60'
                            }`}
                        >
                            Sí asistiré
                        </button>

                        <button
                            type="button"
                            onClick={() => setForm({ ...form, asistira: 'no' })}
                            className={`flex-1 p-4 rounded-xl border transition ${
                                form.asistira === 'no'
                                    ? 'bg-[#d4af37] text-black border-[#d4af37]'
                                    : 'bg-white/70 text-[#1a1a1a] border-[#d4af37]/30 hover:border-[#d4af37]/60'
                            }`}
                        >
                            No asistiré
                        </button>

                    </div>

                    {/* BOTÓN */}
                    <button
                        disabled={loading}
                        className="w-full bg-[#d4af37] text-black py-4 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Confirmar asistencia"}
                    </button>

                </motion.form>

            </div>
        </section>
    )
}