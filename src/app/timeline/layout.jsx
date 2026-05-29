import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const TimelineLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default TimelineLayout;