import React from 'react';
import Cards from '../components/newcard';
import VerticalTimelinePage from '../components/timeline';

export default function Courses() {
  return (
    <>
      <section className='pt-24 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 sm:pt-32 md:pt-40 2xl:pt-48'>
        {/* Creative Heading */}
        <div className='text-center mb-10 sm:mb-16 md:mb-20 lg:mb-24'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 animate-text'>
            Explore Our Courses
          </h1>
          <p className='mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300'>
            Unlock new skills and elevate your learning journey with our diverse range of courses!
          </p>
        </div>

        {/* Cards Section */}
        <div className='flex flex-wrap justify-center gap-5 sm:gap-10 md:gap-12 lg:gap-14 px-4 sm:px-6 md:px-8 lg:px-10'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>

        {/* Course Timeline Section */}
        <div className='mt-16 sm:mt-24 md:mt-32 lg:mt-40 px-4 sm:px-6 md:px-8 lg:px-10'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8'>
            Course Timeline
          </h2>
          <VerticalTimelinePage />
        </div>
      </section>
    </>
  );
}
