'use client'
import { motion } from "motion/react";
import { VARIANTS_CONTAINER,VARIANTS_SECTION, TRANSITION_SECTION } from "@/lib/constants";

import {MorphingDialogTemplate} from "@/components/ui";
export default function GalleryPage(){
    return (
        <motion.main
            className="space-y-20"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Life is a collection of moments</h3>
                <p className='mb-5 text-zinc-600 dark:text-zinc-400'>
                    "The best things in life are the people we love, the places we've been, 
                    and the memories we've made along the way." — Unknown
                </p>
                <MorphingDialogTemplate />
            </motion.section>
        </motion.main>
    )
}