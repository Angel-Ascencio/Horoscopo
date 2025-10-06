import { useState } from "react";
import "./App.css";
import aries from "./assets/aries.png";
import tauro from "./assets/tauro.png";
import geminis from "./assets/geminis.png";
import cancer from "./assets/cancer.png";
import leo from "./assets/leo.png";
import virgo from "./assets/virgo.png";
import libra from "./assets/libra.png";
import escorpio from "./assets/escorpio.png";
import sagitario from "./assets/sagitario.png";
import capricornio from "./assets/capricornio.png";
import acuario from "./assets/acuario.png";
import piscis from "./assets/piscis.png";

function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [signo, setSigno] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [moved, setMoved] = useState(false);

  const signos = {
    Aries: {
      img: aries,
      desc: "Hoy tu energía está en su punto máximo, aprovéchala para nuevos proyectos.",
    },
    Tauro: {
      img: tauro,
      desc: "Un día tranquilo, ideal para organizar tus finanzas y disfrutar de pequeños placeres.",
    },
    Géminis: {
      img: geminis,
      desc: "La comunicación será clave hoy, comparte tus ideas y escucha a los demás.",
    },
    Cáncer: {
      img: cancer,
      desc: "Tus emociones estarán sensibles, busca momentos de calma y conexión con los seres queridos.",
    },
    Leo: {
      img: leo,
      desc: "Hoy brillarás en lo que hagas, aprovecha la confianza para liderar proyectos.",
    },
    Virgo: {
      img: virgo,
      desc: "Un día perfecto para el análisis y la planificación, ordena tus ideas antes de actuar.",
    },
    Libra: {
      img: libra,
      desc: "Busca el equilibrio en tus relaciones y evita discusiones innecesarias.",
    },
    Escorpio: {
      img: escorpio,
      desc: "Tu intensidad atrae situaciones interesantes; mantén la concentración y prudencia.",
    },
    Sagitario: {
      img: sagitario,
      desc: "Aprovecha tu optimismo y curiosidad para explorar nuevas oportunidades.",
    },
    Capricornio: {
      img: capricornio,
      desc: "La disciplina y responsabilidad darán frutos, es un buen día para metas a largo plazo.",
    },
    Acuario: {
      img: acuario,
      desc: "Tu creatividad e independencia estarán destacadas; comparte ideas innovadoras.",
    },
    Piscis: {
      img: piscis,
      desc: "Intuición y empatía serán tus aliados,, confía en tus corazonadas.",
    },
  };

  const calcularSigno = () => {
    if (!nombre || !fecha) {
      alert("Por favor ingresa todos los datos");
      return;
    }

    const f = new Date(fecha);
    const dia = f.getUTCDate();
    const mes = f.getUTCMonth() + 1;

    let signoCalc = "";

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19))
      signoCalc = "Aries";
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20))
      signoCalc = "Tauro";
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20))
      signoCalc = "Géminis";
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22))
      signoCalc = "Cáncer";
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22))
      signoCalc = "Leo";
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22))
      signoCalc = "Virgo";
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22))
      signoCalc = "Libra";
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21))
      signoCalc = "Escorpio";
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21))
      signoCalc = "Sagitario";
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19))
      signoCalc = "Capricornio";
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18))
      signoCalc = "Acuario";
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20))
      signoCalc = "Piscis";

    setSigno(signoCalc);
    setImagen(signos[signoCalc].img);
    setDescripcion(`${nombre}, tu horoscopo dice: ${signos[signoCalc].desc}`);
    setMoved(true);
  };

  return (
    <div className="App">
      <h1>Horóscopo React</h1>
      <br />
      <div className={`container ${moved ? "show-result" : ""}`}>
        <div className={`box ${moved ? "left-move" : ""}`}>
          <p>
            <b>Nombre</b>
          </p>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p>
            <b>Fecha de nacimiento</b>
          </p>
          <input
            type="date"
            placeholder="Ingresa tu fecha de nacimiento"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <br />
          <button onClick={calcularSigno}>Consultar</button>
        </div>

        <div className="box">
          {signo ? (
            <>
              <h4>
                Tu signo es: <span>{signo}</span>
              </h4>
              <div className="sign-img">
                <img src={imagen} alt={signo} />
              </div>
              <div className="result">{descripcion}</div>
            </>
          ) : (
            <p>
              <br />
              <br />
              <br />
              <h2>Averigua tu destino ingresando tus datos</h2>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
