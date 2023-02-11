import React from 'react';
import Search from './search';

const Hero = () => {
  return (
    <div className="pl-8 xl:pl-16 mt-20 flex flex-col gap-5 ">
      <p className="font-semibold text-xl text-gray-400">
        Welcome to Bd Screens
      </p>
      <p className="xl:w-5/12 sm:w-8/12 font-bold text-4xl text-white">
        Download Unlimited Movies, Drama, Music Video and More
        Content.
      </p>
      <p className="xl:w-4/12 sm:w-8/12 font-semibold text-xl text-gray-400">
        Enjoy exclusive Music Video popular movies and Live shows.
        Subscribe BD Screen now{' '}
      </p>
      <Search />
    </div>
  );
};

export default Hero;
