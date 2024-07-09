"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

import { Header } from "../../components/header";


export function Home() {

    const data = [
        { href: "/#lokasi", name: "Lokasi" },
        { href: "/#story", name: "Sejarah" },
        { href: "/#most-populer", name: "Wisata" },
        { href: "/pesan-tiket", name: "Tiket" }
    ];

    const images = [
        "https://media.istockphoto.com/id/1473535970/photo/houston-brook-falls.webp?b=1&s=170667a&w=0&k=20&c=_yQfcTNc_eMUD7G5PhxZpYjpM9FS0yYOrBsyFrnyHuI=",
        "https://media.istockphoto.com/id/1411295663/photo/cascadilla-gorge-trail-ithaca-ny-waterfall-hole.webp?b=1&s=170667a&w=0&k=20&c=yiZ4eaWPr0yO89oPq2LKm1qT725ShG3GFiAypBLRFLk=",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    return (
        <>
            <Header data={data} />
            <ImagesSlider className="h-[40rem]" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                       Silahkan Pesan Tiket <br /> 
                    </motion.p>
                    <a href="#pesan" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <span>Dapatkan tiket anda →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </a>
                </motion.div>
            </ImagesSlider>
        </>
    );
}
