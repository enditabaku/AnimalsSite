import React, {useState} from 'react'

// project imports
import LoadImage from "./LoadImage";
import './List.css';
import Popup from './Popup';

// 3rd party
import { useNavigate } from "react-router-dom";

export const ListView = ({galleryValue}: {galleryValue: any}) => {
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState<any>(null);


  if(galleryValue?.error?.length > 0){
    return (
    <div className="p-3 ta-center">
      <span className="error_text">{galleryValue?.error}</span>
    </div>
    )
  }


  return (
    <>
      <div className="list">
        <div className="grid">
          {galleryValue.loading ? (
            <>
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
              <LoadImage />
            </>
          ) : (
            <>
              {galleryValue?.gallery?.map((animal: any) => (
                <div className="grid__item" key={animal.id}>
                  <div className="card">
                    <img className="card__img" src={animal.image} alt={animal?.title} />
                    <div className="card__content">
                      <p className="card__text">{animal?.name}</p>
                      <p className="card__text">{animal?.origin ?? animal.family}</p>
                      <button className="card__btn" onClick={() => {setSelectedAnimal(animal)}}>View details</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {selectedAnimal && (
        <Popup animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
      )}
    </>
  );
};
