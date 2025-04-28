import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export const ContactMe = () => {
  
  const ref = useRef(null);
  const isInview = useInView(ref, {once: true, threshold: 0.25})

  // formulario 
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    // Verificar los valores del formulario antes de enviar
    // console.log(form.target)
    const formData = new FormData(form.current);
    const data = {
      nombre: formData.get('name'),
      email: formData.get('email'),
      mensaje: formData.get('message'),
    };

    console.log('Datos del formulario:', data);

    emailjs.sendForm(
      'service_y1bxo1g',
      'template_s5lmgbh',
      form.current,
      'RVpiUzDWSCSYnNKKN'
    )
    .then((result) => {
      form.current.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your email has been sent",
          showConfirmButton: false,
          timer: 1000
      });
      console.log(result)
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Empty form !",
      });
      console.log(error)
    });

    event.target.reset();

};


  return (
    <div className='space-y-6' id='contactMe'>

      <motion.div className='mx-auto my-4 '
        ref={ref}
        initial={{ opacity: 0}}
        animate= { isInview && {opacity: 1} }
        transition={{ duration: .5, ease: "easeInOut"}}
      >
        <h1 className='text-3xl md:text-[42px] font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>
          Contact Me
        </h1>
        <p className='text-[#e1cef7] text-center py-1 text-lg md:text-[20px]'>Do you have any questions? Send me a message and I'll get back to you soon</p>
      </motion.div>

      <section className='grid grid-cols-1 gap-6 md:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]  overflow-hidden mt-12'>

        <motion.article className='h-[315px]  text-[#c4ccd8] bg-[#1d3250] rounded-xl flex justify-center items-center'
          ref={ref}
          initial={{x: -100, opacity: 0}}
          animate= { isInview && {x: 0, opacity: 1} }
          transition={{ duration: .5, ease: "easeInOut"}} 
        >
          <div className=' text-center px-3'>
            <h3 className='text-3xl font-semibold my-4 flex gap-3 justify-center items-center'>Find Me <i className="uil uil-corner-right-down text-xl"></i></h3>
            <p className='text-lg md:text-[20px] my-2'><i className="uil uil-envelope"></i> Mail: samuelpacheco234@gmail.com</p>
            <p className='text-lg md:text-[20px]'><i className="uil uil-phone-volume"></i> Tel: +503 74787618</p>
          </div>
        </motion.article>

        <motion.article className='h-max rounded-xl'
          ref={ref}
          initial={{x: 100, opacity: 0}}
          animate= { isInview && {x: 0, opacity: 1} }
          transition={{ duration: .5, ease: "easeInOut"}} 
        >
          <form className='flex flex-col gap-[10px] w-full text-amber-50' ref={form} onSubmit={sendEmail}>
            <div className=' flex gap-[10px] w-full'>

              <input className='w-[50%] h-[55px] bg-transparent border border-[#AAA] p-[15px] outline-0 rounded-[5px]' type="text" placeholder='Name' name='name' />
              <input className='w-[50%] h-[55px] bg-transparent border border-[#AAA] p-[15px] outline-0 rounded-[5px]' type="text" placeholder='Email' name='email'/>

            </div>
            <div>
              <textarea className='w-full border border-[#AAA] py-[15px] px-[20px] h-[250px] resize-none rounded-[8px] outline-0 bg-transparent' placeholder='Message' name='message'></textarea>
            </div>
            <div className='flex justify-center lg:justify-end'>
              <button type='submit'  className='bg-[#1D3250] w-[65%] lg:w-[20%] py-3 font-semibold flex justify-center items-center gap-2 rounded-md cursor-pointer'>Send <i className="uil uil-message"></i></button>
            </div>
          </form>
        </motion.article>
      </section>


    </div>
  )
}
