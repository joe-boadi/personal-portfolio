'use client'
import { motion } from "motion/react";
import { useEffect, useState } from 'react'

import Link from "next/link";

import { BLOG_POSTS } from "../data";
import { AnimatedBackground,TextMorph } from "@/components/ui";

export default function BlogPost() {
    return (
        <motion.section>
            <AnimatedBackground
                enableHover
                className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                }}
            >
                {BLOG_POSTS.map((blog) => (
                    <Link
                        key={blog.uid}
                        className="-mx-3 rounded-xl px-3 py-3 no-underline"
                        href={blog.link}
                        data-id={blog.uid}
                    >
                        <div className="flex flex-col space-y-1">
                            <h4 className="font-normal dark:text-zinc-100">
                            {blog.title}
                            </h4>
                            <p className="text-zinc-500 dark:text-zinc-400">
                            {blog.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </AnimatedBackground>
        </motion.section>
    )
}

export function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof globalThis === 'undefined' ? '' : globalThis.location?.href

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400 hover:cursor-pointer"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}