import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Llista } from './components/Llistes';
import { Movies } from './data';


function App() {
  const AnyActual = Movies.filter((movie) => movie.year === 2026);
  const Genre = Movies.filter((movie) => movie.genre.includes("Drama"));
  const Top = Movies.filter((movie) => movie.rating >= 8);
  const dosA = Movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    return (title.match(/a/g) || []).length === 2;
  });

  return (
    <div className = "linia">
      <Header titol="MovieDex" 
        subtitol="La guia essencial per a amants del cinema"/>
      <Llista titol="Pel·lícules de l'any actual" pelicules={AnyActual}/>
      <Llista titol="Pel·lícules de Drama" pelicules={Genre}/>
      <Llista titol="Pel·lícules TOP 8" pelicules={Top}/>
      <Llista titol = "Pel·lícules dos A" pelicules={dosA}/>
      <Footer text="Toni Molist  -  2026 / 2027"/>
    </div>
  );
}

export default App;