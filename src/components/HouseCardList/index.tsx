import React from 'react'
import HouseCard from '../HouseCard'
import { HouseCardListWrapper, HouseCardListGrid } from './styled'

const data = [
  {
    id: "43a11460-9599-4503-ad0c-4403854decb1",
    inscription_number: "9873987983535",
    type: "Casa",
    description: "Casa com 3 quartos",
    rent_price: "500",
    cep: "12345678",
    neighborhood: "Centro",
    street_name: "Rua 1",
    street_number: "123",
    total_occupancy: 3,
    total_bedrooms: 3,
    total_bathrooms: 2,
    has_wifi: true,
    has_tv: true,
    has_air_conditioning: true,
    has_washing_machine: true,
    has_kitchen: true,
    has_suite: true,
    has_parking_space: true,
    has_pool: true,
    has_beach_view: true,
    user_Id: "7fef3aa2-d5b5-4c6c-8d51-ae5e4a1c991f",
    createdAt: "2023-05-14T02:43:17.402Z",
    updatedAt: "2023-05-14T02:43:17.402Z",
  },
];

function HouseCardList() {
  return (
    <HouseCardListWrapper>
      <HouseCardListGrid>
        {data.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </HouseCardListGrid>
    </HouseCardListWrapper>
  )
}

export default HouseCardList