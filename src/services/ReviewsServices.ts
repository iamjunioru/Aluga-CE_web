import { http } from "../http";

export const ReviewsServices = {
  // get all comments by property id
  getReviews: async (id: string) => {
    const { data } = await http.get(`/reviews/${id}?page=1&limit=10`);
    return data; 
  }
};