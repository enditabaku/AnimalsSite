// project imports
import background from '../../assets/images/bg.png'
import Header from "../Header";

export default function Intro() {

  // Function to handle animal type change
  const handleAnimalTypeChange = (type: string) => {
    alert(`Selected animal type: ${type}`);
  }

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-8" style={{ backgroundImage: `url(${background})` }}>
            {/* Pass the handler to the Header component */}
            <Header onAnimalTypeChange={handleAnimalTypeChange} />
            <p className="large-text fs-45">
              Connecting You with the Animal World<br />
              Discover, Care, and Cherish!
            </p>
          </div>
          <div className="col-4 p-relative bg-yellow">
            <span className="small-text fs-12">Discover More</span>
          </div>
        </div>
      </div>
    </>
  );
}
