'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from '@/app/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full bg-[#15182e] text-gray-100 shadow-xl border-b border-[#1c2040]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-6'>
          {/* Logo */}
          <Image src={logo} alt='Chinedu Oscar' width={50} height={50} />

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-12'>
            <a
              href='#about'
              className='text-xl text-gray-200 hover:text-white transition duration-300 font-medium relative group'
            >
              About
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </a>
            <a
              href='#projects'
              className='text-xl text-gray-200 hover:text-white transition duration-300 font-medium relative group'
            >
              Projects
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </a>
            <a
              href='#contact'
              className='text-xl text-gray-200 hover:text-white transition duration-300 font-medium relative group'
            >
              Contact
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </a>
          </nav>

          {/* Social Icons */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='https://linkedin.com/in/nnadozie-chinedu-62448a19b'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 text-2xl hover:text-white transition duration-300 transform hover:scale-110'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/chineduoscar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 text-2xl hover:text-white transition duration-300 transform hover:scale-110'
              aria-label='GitHub Profile'
            >
              <FaGithub />
            </a>
            <a
              href='mailto:chinedunnadozieo@gmail.com'
              className='text-gray-300 text-2xl hover:text-white transition duration-300 transform hover:scale-110'
              aria-label='Email Contact'
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-200 hover:text-white focus:outline-none transition duration-300'
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <FaTimes className='h-8 w-8' />
              ) : (
                <FaBars className='h-8 w-8' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-[#1c2040] border-t border-[#252a4e]'>
          <div className='px-2 pt-2 pb-4 space-y-2 sm:px-3'>
            <a
              href='#about'
              className='block px-4 py-3 rounded-md text-xl font-medium text-gray-200 hover:text-white hover:bg-[#252a4e] transition-all duration-300'
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href='#projects'
              className='block px-4 py-3 rounded-md text-xl font-medium text-gray-200 hover:text-white hover:bg-[#252a4e] transition-all duration-300'
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href='#contact'
              className='block px-4 py-3 rounded-md text-xl font-medium text-gray-200 hover:text-white hover:bg-[#252a4e] transition-all duration-300'
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
          <div className='flex justify-center space-x-8 py-4 border-t border-[#252a4e]'>
            <a
              href='https://linkedin.com/in/nnadozie-chinedu-62448a19b'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 text-2xl hover:text-white transition duration-300'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/chineduoscar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 text-2xl hover:text-white transition duration-300'
              aria-label='GitHub Profile'
            >
              <FaGithub />
            </a>
            <a
              href='mailto:chinedunnadozieo@gmail.com'
              className='text-gray-300 text-2xl hover:text-white transition duration-300'
              aria-label='Email Contact'
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
