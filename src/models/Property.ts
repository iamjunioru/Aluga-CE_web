export interface Property {
  id: string;
  inscription_number: string;
  type: string;
  description: string;
  rent_price: string;
  cep: string;
  neighborhood: string;
  street_name: string;
  street_number: string;
  total_occupancy: number;
  total_bedrooms: number;
  total_bathrooms: number;
  has_wifi: boolean;
  has_tv: boolean;
  has_air_conditioning: boolean;
  has_washing_machine: boolean;
  has_kitchen: boolean;
  has_suite: boolean;
  has_parking_space: boolean;
  has_pool: boolean;
  has_beach_view: boolean;
  user_Id: string;
  images: Array<{
    id: string;
    path: string;
    property_id: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  createdAt: Date;
  updatedAt: Date;
  navigatorPath: string;
  rating: number;
}
