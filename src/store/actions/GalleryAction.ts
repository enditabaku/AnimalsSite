import GalleryService from '../../services/GalleryService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchAllAnimals',
  async ({type}: {type: "dogs" | "cats" | "birds"}) => {
    const response = await GalleryService.get({type})
    return response.data
  }
)

