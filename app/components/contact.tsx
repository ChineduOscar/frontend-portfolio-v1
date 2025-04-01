'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id='contact' className='py-24 bg-[#121629] text-white'>
      <div className='container max-w-4xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-10'
        >
          <h2 className='text-4xl font-bold mb-4'>
            Let's <span className='text-blue-400'>Connect</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6'></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 max-w-2xl mx-auto text-lg mb-10'
        >
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision. Feel free to reach out if you
          want to connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='relative inline-block'
        >
          <Link href='mailto:contact@example.com'>
            <button className='relative'>
              <div className='absolute -inset-[2px] rounded-lg overflow-hidden'>
                <div className='absolute inset-0 rounded-lg animate-border-flow'></div>
              </div>
              <span className='relative block rounded-md bg-[#15182e] px-8 py-4 text-white text-lg font-medium z-10'>
                Connect
                <svg
                  className='ml-2 w-5 h-5 inline'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
