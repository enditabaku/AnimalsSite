// react imports
import { useEffect, useState } from "react";

// project imports
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { fetchGallery } from "../../store/actions/GalleryAction";
import LoadImage from "./LoadImage";
import './List.css';

// 3rd party
import { useNavigate } from "react-router-dom";

export const ListView = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const galleryValue = useAppSelector((state) => state.gallery);
  const [paramsObject, setParamsObject] = useState<any>({});

  useEffect(() => {
    dispatch(fetchGallery({type: 'birds'}))
  }, [paramsObject]);

  const filtersChangeHandler = (newValues: any) => {
    setParamsObject(newValues)
  }


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
                      <button className="card__btn" onClick={() => {navigate(`/gallery/${animal.id}`, {state: animal})}}>View details</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
