import './App.css';

function App() {

  const nombre = "Andres"
  const placeholder = "Coloque su edad"
  const btcImage = "https://imgs.search.brave.com/uvUiBJR_ksMUGaOcq98Qs793cjyjzGOZPQyYuc63KgU/rs:fit:769:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/Rko0OFA3Szc1N0JI/VTQ2ZDhTM3BBSGFF/ayZwaWQ9QXBp"

  const imageStyles = {
    borderRadius: 10,
    marginTop: 20
  }

  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {nombre} wants to learn React
        </a>
        <input placeholder = {placeholder} type="number"/>
        <button className='btn btn-primary p-3'> Press me </button>
        <img src={btcImage} alt="btc"/>
        <img style = {imageStyles}
        src="/Assets/dogeCoin.webp" alt="Doge" />
    </div>
  );
}

export default App;
