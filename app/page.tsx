import React, { useState, useEffect } from 'react';

import Section from './views/sections/section';
import Place from './views/places/place';
import Description from './views/descriptions/description';
import Location from './views/locations/location';
import Footer from './components/footer';

export default function Home() {

  return (
    <>
      {/* start content */}
      <Section />
      <Place />
      <Description />
      <Location />
      {/* end content */}
      <Footer />
    </>
  );
}