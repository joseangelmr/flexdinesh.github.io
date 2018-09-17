import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const LaboralPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="laboral-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
          .dateLabel {
            color: #a9a9a9;
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Experiencia Laboral 👨‍💻</h1>
        <div className="laboral-wrapper">
          <div className="laboral-content" style={{ color: textPrimary }}>

            <p>
              <span className="highlight">Risk America SpA</span> - Ingeniero de Proyecto
              <div>
                <small className="dateLabel">Jul 2018 - Act., Santiago/Chile</small>
              </div>
              <div>
                <small>Desarrollo de aplicaciones para el mercado Financiero de Chile</small>
              </div>
            </p>
            <p>
              En RiskAmerica me dedico al desarrollo de aplicaciones para información e Ingeniería Financiera del mercado de Chile. Soy parte de un equipo multidisciplinario compuesto por Ingenieros de Software e Ingenieros Financieros capaces de generar metologias para valorizaciones precisas, objetivas e independeintes. Tambien formo parte del desarrollo de servicios Backoffice destinados a Fondos importantes del mercado Financiero Chileno.
            </p>

            <p>
              <span className="highlight">WIVO SpA</span> - Full Stack Developer
              <div>
                <small className="dateLabel">Feb 2017 - Jun 2018, Santiago/Chile</small>
              </div>
              <div>
                <small>Plataforma analítica para monitoreo de tiendas y sucursales.</small>
              </div>
            </p>
            <p>
              En Wivo SpA inicié a cargo de tres aplicaciones basadas en microservicios, haciendo uso de tecnologías como React, Redux, NodeJS y base de datos relacionales y no relacionales, integrante de un grupo de desarrollo pequeño afianzado a las buenas prácticas, orientados al detalle y buenas prácticas de programación.
            Con el paso de los meses evolucioné a liderar un grupo de 3 desarrolladores multidisciplinarios, diseñando y desarrollando nuevas arquitecturas orientadas a microservicios tanto de backend como frontend, desarrollando nuevos features para el dashboard principal y módulos de backend para envío de reportes automatizados generados por los clientes en sus respectivas métricas de analítica. También intervengo en los flujos de integración continua y despliegue automatizado.
            </p>
            <p>
            Dentro de mis logros en Wivo SpA: he contribuido al logro de aumentar de 10 clientes a 30 clientes en aproximadamente, con sistemas de datos de aproximadamente unos 25GB. También he implementado un módulo para mejora de tráfico de datos que ayudó a disminuir significativamente los tiempos de consultas para las series de tiempos y las respectivas configuraciones de cada uno de los clientes. Adicional a todo esto, se lograron integrar una serie de herramientas de analítica para el desarrollo, con la intención de poder detectar las trazas para errores en el código fuente y las configuraciones, finalmente velo por el ecosistema de los microservicios, tratando de evitar quiebres en los flujos de desarrollo.
            </p>

            <p>
              <span className="highlight">Vascar Solutions</span> - Front-End Developer
              <div>
                <small className="dateLabel">Jul 2016 - Feb 2017, Remoto, New York/USA</small>
              </div>
              <div>
                <small>Especialista en visualizaciones, análisis y sistemas HFT.</small>
              </div>
            </p>
            <p>
            En Vascar estaba a cargo de crear la segunda versión de un dashboard de Comercio Financiero para un cliente en particular haciendo uso de tecnologías como ReactJS, Redux, NodeJS, SocketIO, Postgresql, entre otros.
            </p>


            <p>
              <span className="highlight">BWStudios</span> - Front-End Developer
              <div>
                <small className="dateLabel">Ene 2016 - Jul 2016, Remoto, Medellín/Colombia</small>
              </div>
              <div>
                <small>Desarrollador de aplicaciones híbridas y nativas para negocios y videojuegos.</small>
              </div>
            </p>
            <p>
              En BWSTUDIOS desarrollaba aplicaciones para consumo de RESTful APIs y manipulación de base de datos para clientes como Cartoon Network, Space y Htv.
            </p>

            <p>
              <span className="highlight">Uakami Studio</span> - Front-End Developer
              <div>
                <small className="dateLabel">Oct 2014 - Jun 2016, Mérida/Venezuela</small>
              </div>
              <div>
                <small>Desarrollador de aplicaciones web, ecommerce y RESTful APIs.</small>
              </div>
            </p>
            <p>
              Desarrollador de aplicaciones híbridas y nativas para negocios, consumo de RESTful APIs y manipulación de base de datos, adicionalmente desarrollo 3D, e-commerce. Clientes como Ezon Mexico, Futbol Sapiens, Bestia Negra, Ambit.
            </p>



          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".laboral-page" />
    </div>
  );
};

LaboralPage.contextTypes = {
  theme: PropTypes.any
};

export default LaboralPage;
