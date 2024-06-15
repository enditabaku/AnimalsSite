// project imports
import background from '../../assets/images/bg.png'
import Header from "../Header";

interface Props {
  selectedType: 'dogs' | 'cats' | 'birds'
  handleTypeChange: any
}

export default function Intro({selectedType, handleTypeChange}:Props) {

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-8" style={{ backgroundImage: `url(${background})` }}>
            {/* Pass the handler to the Header component */}
            <Header onAnimalTypeChange={handleTypeChange} type={selectedType}/>
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
