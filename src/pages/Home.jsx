import {} from "react";
import Nav from "../components/Nav";
import "./style/home.css";

import Carousel from "./Carousel";
import Char from "../components/Char";


const Home = () => {
  return (
    <section>
      <div>
        <Nav />
      </div>
      <main className="main">
        <div className="mision">
          <h2>Misión</h2>
          <p>
            Nuestra misión es transformar la manera en que las personas
            interactúan con la tecnología en su vida diaria. Nos dedicamos a
            diseñar y desarrollar productos innovadores que mejoren la
            experiencia del usuario, faciliten la conexión y promuevan la
            eficiencia en todos los aspectos de la vida moderna. Nos esforzamos
            por ofrecer soluciones tecnológicas accesibles, intuitivas y de alta
            calidad que empoderen a nuestros clientes para alcanzar sus metas
            personales y profesionales.
          </p>
        </div>
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJhaMGu7S80GU_V4x1aoRIR5rNMaqZct-6A&s"
            alt=""
          />
        </div>
      </main>
      <section className="margen"></section>
      <main className="chart1">
       <h1>Estadísticas de Empleados</h1>
            <Char />
      </main>
      <section className="margen"></section>
      <main className="vision">
          <h2>Visión</h2>
          <p>
            Nuestra visión es liderar la industria tecnológica mediante la
            innovación constante y el compromiso con la excelencia. Nos
            esforzamos por crear productos que no solo satisfagan las
            necesidades actuales de nuestros clientes, sino que también inspiren
            y transformen sus experiencias digitales. En un mundo cada vez más
            interconectado, aspiramos a ser pioneros en soluciones tecnológicas
            que trasciendan las expectativas del mercado y mejoren la vida de
            las personas en todo el mundo.
          </p>
        
      </main>
      <section className="margen"></section>
     <Carousel/>
     <section className="margen"></section>
    
    </section>
  );
};

export default Home;
