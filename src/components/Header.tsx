import "./Header.css";

//Definiera typ för props 
type HeaderProps = {
  title: string;
}

//Definiera header-komponenten
//Tar emot props av typen HeaderProps
const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1>{ title }</h1>
      <div>
        <img src="theatre.jpg" alt="Teater" className="banner"/>
      </div>
    </header>
  );
}

export default Header;
