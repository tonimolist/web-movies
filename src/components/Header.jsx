import './header.css';

export function Header({ titol, subtitol }) {
  return (
    <header>
      <h1 className="titolGran">{titol}</h1>
      {subtitol && <p className="subtitol">{subtitol}</p>}
    </header>
  );
}

export default Header;