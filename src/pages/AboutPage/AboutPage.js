import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Sobre mi 😃</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Millennial, amante del código y de la tecnología, <span className="highlight">Ingeniero de Sistemas</span>, mención Sistemas Computacionales, titulado de la Universidad de los Andes (ULA), <span className="highlight">Venezolano</span> 🇻🇪 viviendo en Chile 🇨🇱, con mas de 3 años de experiencia en desarrollo de sistemas, aplicaciones web, diseño de arquitecturas de software y lider de pequeños grupos multidisiplinarios de desarrollo.
            </p>
            <p>
              Me considero como un <span className="highlight">FullStack Dev</span> que puede tomar decisiones para abordar soluciones a problemas, autodidacta con habilidades en desarrollo, y apego por <span className="highlight">RESTful APIs, Front-end, Big Data, Data Science, Data Analitycs</span>.
            </p>
            <p>
              Me siento cómodo eligiendo la arquitectura de algún sistema o desarrollo, me apasionan los retos y las nuevas tecnologías.
              Tengo gusto por la UI/UX, las tecnologías inalámbricas, y el desarrollo de aplicaciones móviles, constantemente estoy investigando al respecto.
            </p>
            <p>
              Abierto a usar cualquier tipo de tecnología o reto donde pueda aportar mis conocimientos y destrezas.
            </p>
            <p>
              Algunas habilidades técnicas: {' '} <span className="highlight">ReactJS, NodeJS, Android, Docker, AWS, Python, Java</span>...
            </p>
            <p className="text-emoji" >
              🤘
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
