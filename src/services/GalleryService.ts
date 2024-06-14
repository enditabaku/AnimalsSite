import http from "../config/http.common";
import { GalleryUrlObjectTypes } from "../utils/types";


const get = ({type}: GalleryUrlObjectTypes) => {
  return http.get(`/${type}`, {
    // params: {
    //   page: 1,
    //   page_size: 10
    // },
  }
  );
};

const GalleryService = {
  get,
};

export default GalleryService;
