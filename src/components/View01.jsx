import { motion } from "framer-motion"


export const View01 = () => {
    
  return (
    <>
        <motion.div className="w-full h-screen bg-[#04152D] flex justify-center items-center view" 
             exit={{ opacity: [1, 0.6, 0.3, 0], scale: 0.8 }}
            >
            <section className="w-full h-[200px] flex flex-col justify-center items-center">
                {/* icons */}
                <div className=" flex gap-5 py-3">

                    <motion.div 
                        className="md:w-11 md:h-11 w-7 h-7 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns flex justify-center items-center"
                        animate={{
                             y:[-100, 0, 0], 
                             opacity: [0, 1, 1]
                        }}
                        transition={{ duration: .6, repeatType: "reverse", ease: "easeInOut" }}
                        >
                        {/* <img src="/code-window.png" alt=""/> */}
                        <i className="uil uil-brackets-curly text-2xl text-white"></i>
                    </motion.div>

                    <motion.div 
                        className="md:w-11 md:h-11 w-7 h-7 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns flex justify-center items-center"
                        animate={{
                             y:[-100, 0, 0], 
                             opacity: [0, 1, 1]
                        }}
                        transition={{ duration: .6, repeatType: "reverse", ease: "easeInOut", delay: .2 }}
                        >
                        {/* <img src="/user.png" alt=""/> */}
                        <i className="uil uil-user text-2xl text-white"></i>
                    </motion.div>

                    <motion.div 
                        className="md:w-11 md:h-11 w-7 h-7 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns flex justify-center items-center"
                        animate={{
                             y:[-100, 0, 0], 
                             opacity: [0, 1, 1]
                        }}
                        transition={{ duration: .6, repeatType: "reverse", ease: "easeInOut", delay: .4 }}
                        >
                        {/* <img src="/user.png" alt=""/> */}
                        <i className="uil uil-github text-2xl text-white"></i>
                    </motion.div>
                    
                </div>

                {/* Welcome To My / Portfolio Website */}

                <div className="overflow-hidden flex justify-center w-full gap-x-2">
                    {["Welcome ", "To ", "My"].map((word, index) => (
                        <motion.span
                            key={index}
                            className="text-white text-3xl md:text-5xl font-semibold"
                            initial={{ opacity: 0, x: -150 }}
                            animate={{ opacity: [0, 1, 1], x: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: index * 0.3,
                            }}
                        >
                            {word}
                        </motion.span>    
                    ))}
                </div>

                <div className="overflow-hidden flex justify-center gap-x-2"> 
                    {["Portfolio ", "Website "].map((word, index) => (
                        <motion.span
                            key={index}
                            className="text-3xl md:text-5xl text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text font-bold "
                            initial={{ opacity: 0, y: 150 }} // Empieza abajo y oculto
                            animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: index * 0.3,
                            }}
                        >
                            {word}
                        </motion.span>    
                    ))}
                </div>


            </section>
        </motion.div>
    </>
  )

}
