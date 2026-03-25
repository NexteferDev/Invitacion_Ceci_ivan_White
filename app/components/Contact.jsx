'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../lib/firebase.js'
import { collection, addDoc } from 'firebase/firestore'

export default function RSVP() {

    const [form, setForm] = useState({
        nombre: '',
        asistira: 'si',
        asistentes: 1,
        mensaje: ''
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!form.nombre) {
            alert("Por favor escribe tu nombre")
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
                asistentes: 1,
                mensaje: ''
            })

        } catch (error) {
            console.error(error)
            alert("Error al enviar")
        }

        setLoading(false)
    }

    return (
        <section id="rspv" className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a] relative overflow-hidden">

            <div className="max-w-2xl w-full mx-auto px-6 relative z-10">

                {/* TITULO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin mb-4">
                        <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                            CONFIRMA TU ASISTENCIA
                        </span>
                    </h2>

                    <p className="text-[#faf8f3]/60 uppercase tracking-widest">
                        Nos encantaría contar contigo
                    </p>
                </motion.div>

                {/* MENSAJE DE ÉXITO */}
                {success && (
                    <div className="mb-6 text-center text-[#d4af37]">
                        ✔ Confirmación enviada correctamente
                    </div>
                )}

                {/* FORMULARIO */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                >

                    {/* Nombre */}
                    <input
                        type="text"
                        placeholder="NOMBRE"
                        value={form.nombre}
                        className="w-full p-4 bg-white/10 rounded-xl text-white outline-none"
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />

                    {/* Asistencia */}
                    <div className="flex gap-4">

                        <button
                            type="button"
                            onClick={() => setForm({ ...form, asistira: 'si' })}
                            className={`flex-1 p-4 rounded-xl border transition ${form.asistira === 'si'
                                ? 'bg-[#d4af37] text-black'
                                : 'bg-white/10 text-white border-white/20'
                                }`}
                        >
                            Sí asistiré
                        </button>

                        <button
                            type="button"
                            onClick={() => setForm({ ...form, asistira: 'no' })}
                            className={`flex-1 p-4 rounded-xl border transition ${form.asistira === 'no'
                                ? 'bg-[#d4af37] text-black'
                                : 'bg-white/10 text-white border-white/20'
                                }`}
                        >
                            No asistiré
                        </button>

                    </div>

                    <div className="text-center">
                        <p className="text-sm text-[#d4af37]/80 mb-4 tracking-wider uppercase">
                            ¿Cuántas personas asistirán en total? (Contándote a ti)
                        </p>

                        <div className="flex items-center justify-center gap-6">

                            <button
                                type="button"
                                onClick={() =>
                                    setForm({
                                        ...form,
                                        asistentes: Math.max(1, form.asistentes - 1)
                                    })
                                }
                                className="w-10 h-10 rounded-full bg-white/10 text-white text-xl"
                            >
                                -
                            </button>

                            <span className="text-3xl font-playfair">
                                {form.asistentes}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setForm({
                                        ...form,
                                        asistentes: form.asistentes + 1
                                    })
                                }
                                className="w-10 h-10 rounded-full bg-white/10 text-white text-xl"
                            >
                                +
                            </button>

                        </div>
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