import React from 'react'
import { useScroll,motion,useTransform, useSpring } from 'motion/react'

const ParallexBackground = () => {
  const base = import.meta.env.BASE_URL;
  const {scrollYProgress} = useScroll();
  const x=useSpring(scrollYProgress,{damping:50});
  const mountain3Y=useTransform(x,[0,0.5],['0%','70%'])
  const planetsX=useTransform(x,[0,0.5],['0%','-20%'])
  const mountain2Y=useTransform(x,[0,0.5],['0%','30%'])
  const mountain1Y=useTransform(x,[0,0.5],['0%','0%'])
  
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className=' relative h-screen overflow-hidden'>
            {/* sky */}
            <div className=' absolute inset-0 w-full h-screen -z-50'
                style={{
                    backgroundImage:`url(${base}assets/sky.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    
                }}
            />
            {/* mountain */}
            <motion.div
              className='absolute inset-0 -z-40'
              style={{
                    backgroundImage:`url('${base}/assets/mountain-3.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: mountain3Y,
                }}
            />
            {/* planet */}
            <motion.div
              className='absolute inset-0 -z-30'
              style={{
                    backgroundImage:`url('${base}/assets/planet.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    x: planetsX,
                }}
            />
            {}
            <motion.div
              className='absolute inset-0 -z-20'
              style={{
                    backgroundImage:`url('${base}/assets/mountain-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: mountain2Y,
                }}
            />
            <motion.div
              className='absolute inset-0 -z-10'
              style={{
                    backgroundImage:`url('${base}/assets/mountain-1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: mountain1Y,
                }}
            />
        </div>
    </section>
  )
}

export default ParallexBackground