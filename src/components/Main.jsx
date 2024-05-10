import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <div className='Main'>
        <br /><br />
        <h1>Hello! I'm - Faynot</h1>
        <h2 className='oh'>Nikita Kuzmin</h2>
      </div>
      <br />
      <div className='MainTwo'>
        <div className='content'>
          <p>I am a Frontend developer, this site is built on React.js (Vite)</p>
          <p>I plan to become a Fullstack developer</p>
          <br />
          <p>I'm currently busy learning:</p>
          <ul>
            <li>Rust and Rocket</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>Three.js</li>
          </ul>
          <p>I strive for knowledge and new technologies, and actively study them. I love my job, </p>
          <p>I don't see myself - who doesn't develop anything and studies new technology</p>
          <br /><br />
          <p>In my free time I develop my own programming language - "Glint", in Rust.</p>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img className='screen' src="../../../public/scr1.png" alt="Код"/>
            <img className='screen2' src="../../../public/scr2.png" alt="Код"/>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Main;
