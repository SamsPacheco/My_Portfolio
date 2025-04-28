
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { About, ContactMe, Experience, Home, View01 } from './components'
import { Navbar } from './components/Navbar'
import { MyFooter } from './components/MyFooter'


export const MyPortfolio = () => {

  const [showView01, setShowView01] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowView01(false), 2000); // Desaparece después de 2s
  }, []);

  return (
    <>
      
      <AnimatePresence>
          {showView01 && <View01/>}
      </AnimatePresence> 
      
      {
        !showView01 && (
          <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
            <header className='sticky top-0 my-nav h-20 flex justify-center items-center'> <Navbar /> </header>

            <main className='space-y-3 w-[90%] mx-auto'>

              <section>
                <Home />  
              </section>

              <motion.section
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, amount: 0.4, rootMain: "-150px 0px" }}
               className='py-5'
               >
                <About />
              </motion.section>

              <motion.section
              whileInView={{ opacity: 1}}
              viewport={{ once: true, amount: 0.4, rootMain: "-150px 0px" }}>
                <Experience />
              </motion.section>

              <motion.section
              whileInView={{ opacity: 1}}
              viewport={{ once: true, amount: 0.4, rootMain: "-150px 0px" }}>
                <ContactMe />
              </motion.section>

              <motion.section
              whileInView={{ opacity: 1}}
              viewport={{ once: true, amount: 0.4, rootMain: "-150px 0px" }}>
                <MyFooter />
              </motion.section>

            
            </main> 
          </motion.div>
        )
      }
      
    </>
      
  )
}
