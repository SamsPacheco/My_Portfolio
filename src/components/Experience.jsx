import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"

export const Experience = () => {

  const [showcase, setshowcase] = useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref, {once: true, threshold: 0.25})


  return (

    <div className='h-max flex flex-col justify-center py-5 mt-16 md:my-32' id="projects">

      <motion.h1 className='text-3xl md:text-[42px] font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'
         ref={ref}
         initial={{ opacity: 0}}
         animate= { isInview && {opacity: 1} }
         transition={{ duration: .5, ease: "easeInOut"}}
      >
        Portfolio Showcase
        <i className="uil uil-graduation-cap px-3"></i>
      </motion.h1>
      <motion.p className='text-[#e1cef7] text-center max-w-[90%] mx-auto py-1 mb-5 mt-2 md:mt-0 text-lg md:text-[20px]'
         ref={ref}
         initial={{ opacity: 0}}
         animate= { isInview && {opacity: 1} }
         transition={{ duration: .5, ease: "easeInOut"}}
      >Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path</motion.p>

      <section className='space-y-8 my-6'>

        {/* bnts */}
        <motion.div className='md:flex gap-5 h-max space-y-3 md:space-y-0'
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInview && { x: 0, opacity: 1 }}
          transition={{ duration: .5, ease: "easeInOut" }}
        >
          <button
            className={`w-full text-white flex flex-col items-center font-semibold justify-center flex-1 py-2 ${showcase ? 'rounded-md border-[1px] border-[#061a37] bg-[#3f4f70]' : 'bg-[#061a37] hover:bg-[#3f4f70]'}`}
            onClick={() => setshowcase(!showcase)}
          >
            {/* <img loading="lazy" src="/tag.png" alt="icon-tag" className='w-5 py-1' /> */}
            <i className="uil uil-arrow text-white text-3xl"></i>
            PROJECTS
          </button>
          <button
            className={`w-full text-white flex flex-col items-center font-semibold justify-center flex-1 py-2 ${!showcase ? 'rounded-md border-[1px] border-[#061a37] bg-[#3f4f70]' : 'bg-[#061a37] hover:bg-[#3f4f70]'}`}
            onClick={() => setshowcase(!showcase)}
          >
            <img loading="lazy" src="/cubes-stacked.png" alt="stack-icon" className='w-5 py-1' />
            TECHNOLOGIES
          </button>
        </motion.div>


        {
          showcase ?
            <div className='my-10 h-[150px] md:h-[350px] flex justify-center items-center transition-all duration-305 ease-in-out '>
              {/* <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
            <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
            <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle> */}
              <h2 className="text-4xl text-white ">In development...</h2>
            </div>

            :

            <motion.div className='py-10 grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-5 lg:w-[80%] lg:mx-auto md:gap-y-7 mx-auto '
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInview && { x: 0, opacity: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            >
              
              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]' >
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778849/html-5-svgrepo-com_cnglug.svg" alt="HTML-icon" />
                <p>HTML</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[2px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778850/css_old_thsn0q.svg" alt="Css-icon" />
                <p className="mt-1">CSS</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778850/javascript_mlntn5.svg" alt="Js-icon" />
                <p>JavaScript</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778850/React_dark_y7ekmk.svg" alt="react-icon" />
                <p>React Js</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778851/node_lv5vm9.png" alt="node-icon" />
                <p>Node Js</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className="w-[65%] p-[7px]" src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778850/mongodb_wqln7d.svg" alt="mongo-icon" />
                <p>MongoDB</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778848/git_wmmog7.svg" alt="git-icon" />
                <p>Git</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778851/redux_eevfik.svg" alt="redux-icon" />
                <p>Redux</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] " src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778848/firebase_egtr2w.svg" alt="firebase-icon" />
                <p>Firebase</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px] mt-2" src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778848/bootstrap_arv26x.svg" alt="bootstrap-icon" />
                <p>Bootstrap</p>
              </article>

              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className="w-[65%] p-[7px]" src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778848/api_bw9hhy.png" alt="api-icon" />
                <p>API</p>
              </article>


              <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
                <img loading="lazy" className=" w-[65%] p-[7px]" src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1745778851/tailwindcss_oa7c3r.svg" alt="tailwindcss-icon" />
                <p>TailwindCss</p>
              </article>

            </motion.div>
        }

        {/* cards -> projects & technologies */}
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 */}






      </section>

    </div>
  )
}

