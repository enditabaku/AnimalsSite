import React, {useEffect, useState} from 'react';

// project imports
import { ListView } from "./components/ListView";
import Intro from "../components/Intro";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import { fetchGallery } from "../store/actions/GalleryAction";

export default function Display() {
  const dispatch = useAppDispatch();
  
  const galleryValue = useAppSelector((state) => state.gallery);
  const [paramsObject, setParamsObject] = useState<'dogs' | 'birds' | 'cats'>('dogs');

  useEffect(() => {
    dispatch(fetchGallery({type: paramsObject}))
  }, [paramsObject]);

  const filtersChangeHandler = (newValues: any) => {
    setParamsObject(newValues)
  }

    return (
        <>
          <div className='lightBg'>
            <Intro selectedType={paramsObject} handleTypeChange={filtersChangeHandler}/>
          </div>
          <br />
          <br />
          <br />
          <ListView galleryValue={galleryValue}/>
        </>
      )
}