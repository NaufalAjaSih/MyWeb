import React from 'react';

// import img
import Image from '../assets/img/Hero.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Naufal
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hai kenalin aku naufal, aku adalah seorang pelajar yang sekarang sedang mepelajari cara membuat website<br />
                <br />
                Namaku Naufal Ahmad Al Hidayah
                Aku adalah seorang pelajar
                aku lahir 11 - 01 -2007
                aku mulai belajar coding mulai <br />saat aku umur 8 tahun,aku belajar coding karena sering <br />melihat ayah ku yang kebetulan adalah seorang programer<br />
                <br />
                Website ini aku buat menggunakan Framework React Js
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
