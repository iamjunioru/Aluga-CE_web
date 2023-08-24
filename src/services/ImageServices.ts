import { http } from "../http";

export const ImagesServices = {
  // get all images from a property
  getImages: async (id: string) => {
    const { data } = await http.get(`/images/${id}`);	
    return data;
  },
};