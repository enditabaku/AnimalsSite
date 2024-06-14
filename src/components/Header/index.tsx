// project imports
import './Header.css';
import logo from '../../assets/images/logo.png';

// 3rd party
import { useNavigate } from "react-router-dom";

export default function Header () {

    const navigate = useNavigate();
    return(
        <>
            <div className={`header`}>
                <div className="row">
                    <div className="col-6 ta-center">
                        <img src={logo} className={`logo`} onClick={() => {navigate("/")}}/>
                    </div>
                    <div className="col-6 ta-center">
                        <span className="fs-22 p-3">Dogs</span>
                        <span className="fs-22 p-3">Cats</span>
                        <span className="fs-22 p-3">Birds</span>
                    </div>
                </div>
            </div>
        </>
    )
}