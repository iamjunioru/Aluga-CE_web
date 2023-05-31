import React from "react";

import { HouseCardWrapper } from "./styled";

interface HouseCardProps {
  house: {
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
    createdAt: string;
    updatedAt: string;
  };
}

function HouseCard({ house }: HouseCardProps) {
  return (
    <HouseCardWrapper>
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60"
        className="house-card-img"
        alt="..."
      />
      <div className="house-card-info">
          <div className="house-info">
            <h3 className="house-card-title">{house.type}</h3>
            <p className="house-card-text">R$ {house.rent_price}</p>
          </div>
          <div className="house-stars">
            <i className="fas fa-star"></i>
          </div>
      </div>
    </HouseCardWrapper>
  );
}

export default HouseCard;
