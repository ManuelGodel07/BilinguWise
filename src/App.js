import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://firebasestorage.googleapis.com/v0/b/blulogin-1e137.appspot.com/o/web%2FbrandButton.png?alt=media&token=56cb428b-ac37-4378-a593-b736d97621ea'} className="App-logo" alt="logo" />
        <p className='text-body-head'>Bienvenido a BilinguWise</p>
      </header>
      <section className='body'>
        <div className='body-head'>
          <button name="button" className='button-body-head'>Ya tengo una cuenta</button>
          <button name="button" className='button-body-head'>Quiero la app</button>
        </div>
      </section>
      <section className='body-description'>
        <div className='description-card'>
          <p className='text-title'>Sobre nosotros</p>
          <p className='text-description'>Somos una app de aprendizaje de ingles</p>
          <p className='text-title'>BilinguWise es una app centrada en las personas. Nuestro  compromiso es transformar la forma de aprendizaje tradicional del inglés en una experiencia de aprendizaje contundente y divertida, agregamos valor en nuestra app haciendo que cada interacción sea beneficiosa. Nuestro plan de estudios y metodología de ejercicios nos distingue de nuestros competidores gracias a la consolidación alcanzada a largo plazo de nuestras lecciones.</p>
        </div>
        <div className='picture-card'>
          <img src='https://firebasestorage.googleapis.com/v0/b/blulogin-1e137.appspot.com/o/web%2F8602650.png?alt=media&token=e3d96b4a-73d0-458e-8152-d5aa04de83f5' className="description-bilinguwise" alt='student'/>
        </div>
      </section>
      <p className='text-title-purpose'>🥇 Nuestra propuesta se basa en</p>
      <section className='body-purpose-description'>
        <div className='purpose-card'>
          <p className='emoji-purpose'>📖</p>
          <p className='text-purpose'>Plan de estudios estructurado</p>
        </div>
        <div className='purpose-card'>
          <p className='emoji-purpose'>👩🏼‍🏫</p>
          <p className='text-purpose'>Consolidación del aprendizaje a través de la práctica</p>
        </div>
        <div className='purpose-card'>
          <p className='emoji-purpose'>🚀🤳🏻</p>
          <p className='text-purpose'>Gamificación - Adaptamos la mecánica de los juegos al ámbito educativo-profesional con el fin de conseguir mejores aprendizajes</p>
        </div>
      </section>


      <footer className='footer-container'>
        <div className='card-footer'>
          <p className='title-footer'>Nuevos usuarios</p>
          <a href='./screen/Suscriptions.js' rel='noopener noreferrer'>Suscripciones</a>
        </div>
        <div className='card-footer'>
          <p className='title-footer'>Vinculos</p>
          <a href='./screen/Colleguelinker.js'>Colegios</a>

          <p>Compañias</p>
        </div>
        <div className='card-footer'>
          <p className='title-footer'>Compañia</p>
          <p>Sobre nosotros</p>
          <p>Trabajo</p>
          <p>Blog</p>
        </div>
        <div className='card-footer'>
          <p className='title-footer'>Servicio al cliente</p>
          <a href='https://api.whatsapp.com/send?phone=5215581216691'>Contactanos</a>
          <p>FAQs</p>
          <p>Cupones</p>
        </div>
      </footer>
      <div className='social-media-tab'>
        <div>
          <a href='https://www.app-privacy-policy.com/live.php?token=EqTszS9xvU3qZpmqMBstVm8v7kTBcwnO'>Política de privacidad de datos</a>
        </div>
        <div>
          <p>Buscanos en Facebook, instagram y Tiktok</p>
        </div>
      </div>
    </div>
  );
}

export default App;
