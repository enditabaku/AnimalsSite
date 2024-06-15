// project imports
import './Header.css';
import logo from '../../assets/images/animals.png';

// 3rd party
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onAnimalTypeChange: (type: string) => void; // Function to handle animal type change
  type: 'dogs' | 'cats' | 'birds'
}

// The Header component receives the onAnimalTypeChange and  function as a prop
const Header = ({ onAnimalTypeChange, type }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-6 ta-center">
            <img src={logo} className="logo" onClick={() => navigate("/")} alt="Logo" />
          </div>
          <div className="col-6 ta-center">
            <span className={`fs-22 p-3 cursor-pointer ${type == 'dogs' ? 'active' : ''}`} onClick={() => onAnimalTypeChange('dogs')}>Dogs</span>
            <span className={`fs-22 p-3 cursor-pointer ${type == 'cats' ? 'active' : ''}`} onClick={() => onAnimalTypeChange('cats')}>Cats</span>
            <span className={`fs-22 p-3 cursor-pointer ${type == 'birds' ? 'active' : ''}`} onClick={() => onAnimalTypeChange('birds')}>Birds</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
