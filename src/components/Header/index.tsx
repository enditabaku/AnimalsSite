// project imports
import './Header.css';
import logo from '../../assets/images/animals.png';

// 3rd party
import { useNavigate } from "react-router-dom";

// Define the props interface for the Header component
interface HeaderProps {
  onAnimalTypeChange: (type: string) => void; // Function to handle animal type change
}

// The Header component receives the onAnimalTypeChange function as a prop
const Header = ({ onAnimalTypeChange }: HeaderProps) => {
  const navigate = useNavigate();

  // Function to handle click events for animal types
  const handleClick = (animalType: string) => {
    onAnimalTypeChange(animalType.toLowerCase());
  }

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-6 ta-center">
            <img src={logo} className="logo" onClick={() => navigate("/")} alt="Logo" />
          </div>
          <div className="col-6 ta-center">
            <span className="fs-22 p-3" onClick={() => handleClick('Dogs')}>Dogs</span>
            <span className="fs-22 p-3" onClick={() => handleClick('Cats')}>Cats</span>
            <span className="fs-22 p-3" onClick={() => handleClick('Birds')}>Birds</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
