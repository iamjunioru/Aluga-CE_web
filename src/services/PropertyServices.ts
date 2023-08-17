import { http } from "../http";

export const PropertyService = {
  // get all properties
  getProperties: async (page = 1, limit = 10, selectedFilter: object) => {
    const { data } = await http.get("/properties", {
      params: {
        page,
        limit,
        ...selectedFilter,
      },
    });
    return data;
  },
  // get a property
  getProperty: async (id: string) => {
    const { data } = await http.get(`/properties/${id}`);
    return data;
  },
};