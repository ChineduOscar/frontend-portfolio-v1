'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills, services } from '../data';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id='about' className='py-24 text-white'>
      <div className='container max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>
            About <span className='text-blue-400'>Me</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6'></div>
        </motion.div>

        {/* Two-column layout for bio and image */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center'>
          {/* Bio content */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='space-y-6'
          >
            <motion.h3
              variants={fadeInUp}
              className='text-2xl font-semibold text-blue-400 mb-4'
            >
              Frontend Developer
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className='text-gray-300 text-xl leading-relaxed'
            >
              I'm a passionate frontend developer specializing in building
              user-friendly and visually engaging web applications. With
              expertise in modern frameworks like React and Next.js, I focus on
              delivering seamless and high-performance user experiences.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className='text-gray-300 text-xl leading-relaxed'
            >
              My approach combines technical expertise with creative
              problem-solving to transform ideas into functional, beautiful
              websites. I'm committed to writing clean, maintainable code and
              staying current with the latest web technologies and best
              practices.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className='pt-4'>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105'
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image or services section */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='p-6 rounde'
          >
            <div className='space-y-6'>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className=' p-5 rounded-lg hover:bg-[#282f5a] transition-colors duration-300'
                >
                  <div className='flex items-center mb-3'>
                    <div className='p-3 bg-[#121629] rounded-lg mr-4'>
                      {service.icon}
                    </div>
                    <h4 className='text-xl font-medium'>{service.title}</h4>
                  </div>
                  <p className='text-gray-300 pl-14'>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className='p-8 rounded-xl'
        >
          <h3 className='text-2xl font-semibold mb-8 text-center text-blue-400'>
            Technical Skills
          </h3>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={staggerContainer}
            className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6'
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className='p-5 rounded-lg flex flex-col items-center text-center hover:bg-[#282f5a] transition-all duration-300 hover:shadow-lg hover:border-blue-500/30'
              >
                <div className='mb-3'>{skill.icon}</div>
                <h4 className='text-sm md:text-base font-medium'>
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
