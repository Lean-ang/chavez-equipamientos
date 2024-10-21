import React from 'react';

const Section = ({ title, children }) => (
  <section className='container'>
    <h2 className='title'>{title}</h2>
    {children}
  </section>
);

export default Section;
