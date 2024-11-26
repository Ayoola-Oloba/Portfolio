import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
          Hi, I am Oloba Isaac Ayoola, a passionate Frontend Web Developer from Nigeria. I specialize in creating responsive, accessible, and user-centric websites and web applications. I have a deep understanding of HTML, JavaScript, React, and CSS, and I’m always looking to improve my skills and stay current with the latest trends in the tech industry.
          I am presently studying Computer Science at Federal University, Lokoja, where I developed a love for coding and problem-solving. Since then, I have had the privilege of working with amazing teams on a variety of exciting projects—from building dynamic user interfaces to creating complex websites and web pages. One of my favorite tools include React but
          I am always experimenting with new frameworks and libraries.
          I am passionate about building products that not only look great but also provide seamless, intuitive experiences for users. I believe that great design and functionality go hand in hand, and I am always excited to tackle the next challenge that allows me to bring my ideas to life.
          In addition to my technical skills, I am always looking for opportunities to grow, collaborate, and push my limits.
          When I am not coding, you will find me drawing, or watching a movie
          If you are interested in working with me, collaborating on a project, or just want to chat about web development, feel free to get in touch.
      </div>
    </div>
  )
}
export default About;
