import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
