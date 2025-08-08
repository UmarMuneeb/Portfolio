import React from 'react'
import { FlipWords } from './FlipWords'
import { AnimatePresence, motion } from "motion/react";


const HeroText = () => {
    const words=["Secure", "Modern", "Scalable"];
    const variants = {
        hidden:{opacity: 0, x: -50},
        visible:{opacity: 1, x: 0},
    }
  return (
    <div className='z-30 mt-20 text-center
    md:mt-40 md:text-left rounded-3xl bg-clip-text'
    >
        {/* {Desktop View} */}
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1 className='text-4xl font-medium'
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ delay:1.2 }}
            >
                Hi im Umar</motion.h1>
            <div className='flex flex-xol items-start'>
                <motion.p 
                    className='text-5xl font-medium text-neutral-300'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay:1.2 }}
                >
                    A Developer<br/> 
                    Deidcated to Crafting</motion.p>
            </div>
            <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ delay:1.5}}
            >
                <FlipWords words={words}
                    className="font-black text-white text-8xl"
                />
            </motion.div>
            <motion.p className='txt-4xl font-medium text-neutral-400'
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ delay:1.2 }}
            >
                Web Solutions
            </motion.p>
        </div>
        {/* {Mobile View} */}
        <div className='flex flex-col space-y-6 md:hidden'>
            <motion.p className='text-4xl font-medium'
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ delay:1}}
            >
                Hi, I'm Umar
            </motion.p>
            <div>
                <motion.p className='text-5xl font-black text-neutral-300'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay:1.2 }}
                >
                    Building
                </motion.p>
                <motion.div
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay:1.5 }}
                >
                    <FlipWords words={words}
                        className="font-bold text-white text-7xl"
                    />
                </motion.div>
                <motion.p className='text-4xl font-black text-neutral-300'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay:1.8 }}
                >
                    Web Applications
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText