import './llistes.css';
import { Card } from './Card';

export function Llista({ titol, pelicules }) {
  return (
    <section>
      <h2>{titol}</h2>
      <div className='llista'>
        {pelicules.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </section>
  );
}

export default Llista; 