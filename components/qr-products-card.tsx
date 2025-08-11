"use client"

import { motion } from "framer-motion"
import QrHeroCard from "@/components/qr-hero-card"

export default function QrProductsCard({ encodedUrl }: { encodedUrl: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-[620px]"
        >
            <QrHeroCard encodedUrl={encodedUrl} />
        </motion.div>
    )
}
