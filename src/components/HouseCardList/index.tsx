import { HouseCardListWrapper, HouseCardListGrid } from "./styled";
import CarouselCard from "../ImageCarroussel";
import { useEffect, useState } from "react";
import { Property } from "../../models/Property";
import { PropertyService } from "../../services/PropertyServices";
import Loader from "../Loader";

// const data = [
//   {
//     id: "43a11460-9599-4503-ad0c-4403854decb1",
//     inscription_number: "9873987983535",
//     type: "Casa",
//     description: "Casa com 3 quartos",
//     rent_price: "500",
//     cep: "12345678",
//     neighborhood: "Centro",
//     street_name: "Rua 1",
//     street_number: "123",
//     total_occupancy: 3,
//     total_bedrooms: 3,
//     total_bathrooms: 2,
//     has_wifi: true,
//     has_tv: true,
//     has_air_conditioning: true,
//     has_washing_machine: true,
//     has_kitchen: true,
//     has_suite: true,
//     has_parking_space: true,
//     has_pool: true,
//     has_beach_view: true,
//     rating: 4,
//     images: [
//       {
//         id: "4503-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854de434",
//         url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854d3451",
//         url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: "1234-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     user_Id: "7fef3aa2-d5b5-4c6c-8d51-ae5e4a1c991f",
//     createdAt: "2023-05-14T02:43:17.402Z",
//     updatedAt: "2023-05-14T02:43:17.402Z",
//   },
//   {
//     id: "45a11460-9599-4503-ad0c-4403854decb1",
//     inscription_number: "9873987983535",
//     type: "Casa",
//     description: "Casa com 3 quartos",
//     rent_price: "500",
//     cep: "12345678",
//     neighborhood: "Centro",
//     street_name: "Rua 1",
//     street_number: "123",
//     total_occupancy: 3,
//     total_bedrooms: 3,
//     total_bathrooms: 2,
//     has_wifi: true,
//     has_tv: true,
//     has_air_conditioning: true,
//     has_washing_machine: true,
//     has_kitchen: true,
//     has_suite: true,
//     has_parking_space: true,
//     has_pool: true,
//     has_beach_view: true,
//     rating: 4,
//     images: [
//       {
//         id: "4503-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854de434",
//         url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854d3451",
//         url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: "1234-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     user_Id: "7fef3aa2-d5b5-4c6c-8d51-ae5e4a1c991f",
//     createdAt: "2023-05-14T02:43:17.402Z",
//     updatedAt: "2023-05-14T02:43:17.402Z",
//   },
//   {
//     id: "45a11460-9599-4503-ad0c-4403854decb1",
//     inscription_number: "9873987983535",
//     type: "Casa",
//     description: "Casa com 3 quartos",
//     rent_price: "500",
//     cep: "12345678",
//     neighborhood: "Centro",
//     street_name: "Rua 1",
//     street_number: "123",
//     total_occupancy: 3,
//     total_bedrooms: 3,
//     total_bathrooms: 2,
//     has_wifi: true,
//     has_tv: true,
//     has_air_conditioning: true,
//     has_washing_machine: true,
//     has_kitchen: true,
//     has_suite: true,
//     has_parking_space: true,
//     has_pool: true,
//     has_beach_view: true,
//     rating: 4,
//     images: [
//       {
//         id: "4503-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854de434",
//         url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854d3451",
//         url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: "1234-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     user_Id: "7fef3aa2-d5b5-4c6c-8d51-ae5e4a1c991f",
//     createdAt: "2023-05-14T02:43:17.402Z",
//     updatedAt: "2023-05-14T02:43:17.402Z",
//   },
//   {
//     id: "45a11460-9599-4503-ad0c-4403854decb1",
//     inscription_number: "9873987983535",
//     type: "Casa",
//     description: "Casa com 3 quartos",
//     rent_price: "500",
//     cep: "12345678",
//     neighborhood: "Centro",
//     street_name: "Rua 1",
//     street_number: "123",
//     total_occupancy: 3,
//     total_bedrooms: 3,
//     total_bathrooms: 2,
//     has_wifi: true,
//     has_tv: true,
//     has_air_conditioning: true,
//     has_washing_machine: true,
//     has_kitchen: true,
//     has_suite: true,
//     has_parking_space: true,
//     has_pool: true,
//     has_beach_view: true,
//     rating: 4,
//     images: [
//       {
//         id: "4503-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854de434",
//         url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: "4503-ad0c-4403854d3451",
//         url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: "1234-ad0c-4403854decb1",
//         url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     user_Id: "7fef3aa2-d5b5-4c6c-8d51-ae5e4a1c991f",
//     createdAt: "2023-05-14T02:43:17.402Z",
//     updatedAt: "2023-05-14T02:43:17.402Z",
//   },
// ];

function HouseCardList() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const page = 1;
    const limit = 10;
    setLoading(true);
    PropertyService.getProperties(page, limit).then((response) => {
      const dataWithImages = response.data.map((property: Property) => {
        return {
          ...property,
          images: [
            {
              id: "4503-ad0c-4403854decb1",
              url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              id: "4503-ad0c-4403854de434",
              url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              id: "4503-ad0c-4403854d3451",
              url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
            },
            {
              id: "1234-ad0c-4403854decb1",
              url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
            },
          ],
        }
        });
      setProperties(dataWithImages);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
    return () => {
      setProperties([]);
    };
  }, []);

  return (
    <HouseCardListWrapper>
        {
          isLoading ? (
            <Loader />
          ) : (
            <HouseCardListGrid>
              {properties.map((house: Property) => (
                <CarouselCard house={house} navigatorPath={`/${house.id}`} />
              ))}
            </HouseCardListGrid>
          )
        }
    </HouseCardListWrapper>
  );
}

export default HouseCardList;
