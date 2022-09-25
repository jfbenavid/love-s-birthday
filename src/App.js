import './App.css';
import rose from './assets/rose.png'
import prince from './assets/little prince.png'
import firstDate from './assets/photo1.jpg'
import lastDate from './assets/photo2.jpeg'
import wedding from './assets/photo3.jpeg'
import Rose from './assets/rose';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rose} alt="te amo" />
        <h1>Para mi amor</h1>
        <img src={prince} alt="te amo" />
      </header>
      <main>
        <div className='p1'>
          <img src={firstDate} alt="firstDate" />
          <p>
            Mi vida, han sido tantos los momentos hermosos e inolvidables que hemos compartido, que me es imposible recordar algo malo en todo este tiempo. <br />
            Cuando pienso en todo lo que hemos pasado juntos, me doy cuenta en como hemos cambiado y el como hemos crecido, no solo personal sino tambien profesionalmente. Juntos hemos crecido tanto que estoy convencido de que somo mejores personas que cuando nos conocimos. <br />
            Juntos hemos cumplido metas y nos hemos apoyado a tal punto que somos uno solo en todo aspecto mi amor. Ahora que estamos lejos y pienso en todo lo anterior, me doy cuenta que por ello, con cada día que pasa, las ansias y el deseo de poder estar juntos nuevamente, incrementan tanto, que a día de hoy me es imprescindible el querer saber de ti todo el tiempo y el decirte que te amo, y que mi amor por ti crece cada dia.
          </p>
        </div>
        <div className='p1 p2'>
          <p>
            Quiero aprovechar esta carta, para agradecer el hecho de que estés en mi vida, y que a pesar de las adversidades, nos hemos repuesto y con todo este tiempo juntos, te has convertido en mi mundo a quien quiero cuidar y amar como nunca lo he hecho antes. <br />
            Hoy en tu cumpleaños, a pesar de que no estoy a tu lado fisicamente, quiero con esto, hacerte saber que vives en mi corazón, mi mente y mi alma, y que no importa cómo, vamos a reunirnos muy pronto.
          </p>
          <img src={lastDate} alt="lastDate" />
        </div>
        <div className='p1'>
          <img src={wedding} alt='wedding' />
          <p>
            Espero que este detalle te haga sentir al menos una parte de lo especial que eres para mi, mi rosa, mi esposita, mi amor y mi todo.
          </p>
        </div>
        <div className='end'>
          <Rose color='#F54D47' className='rose' />
          <h2>te amo.</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
