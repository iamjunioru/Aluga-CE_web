import { HouseCardListWrapper, HouseCardListGrid } from "./styled";
import CarouselCard from "../ImageCarroussel";
import { useEffect, useState } from "react";
import { Property } from "../../models/Property";
import { PropertyService } from "../../services/PropertyServices";
import Loader from "../Loader";


function HouseCardList({ selectedFilter }) {
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const page = 1;
    const limit = 10;
    setLoading(true);
    const dataToSend = {
      ...selectedFilter,
      totalBathrooms: selectedFilter.totalBathrooms ? selectedFilter.totalBathrooms : undefined,
      totalBedrooms: selectedFilter.totalBedrooms ? selectedFilter.totalBedrooms : undefined,
      totalOccupancy: selectedFilter.totalOccupancy ? selectedFilter.totalOccupancy : undefined,
      propertyType: selectedFilter.propertyType ? selectedFilter.propertyType : undefined,
      hasWifi: selectedFilter.hasWifi ? selectedFilter.hasWifi : undefined,
      hasTv: selectedFilter.hasTv ? selectedFilter.hasTv : undefined,
      hasAirConditioning: selectedFilter.hasAirConditioning ? selectedFilter.hasAirConditioning : undefined,
      hasWashingMachine: selectedFilter.hasWashingMachine ? selectedFilter.hasWashingMachine : undefined,
      hasKitchen: selectedFilter.hasKitchen ? selectedFilter.hasKitchen : undefined,
      hasSuite: selectedFilter.hasSuite ? selectedFilter.hasSuite : undefined,
      hasParkingSpace: selectedFilter.hasParkingSpace ? selectedFilter.hasParkingSpace : undefined,
      hasPool: selectedFilter.hasPool ? selectedFilter.hasPool : undefined,
      hasBeachView: selectedFilter.hasBeachView ? selectedFilter.hasBeachView : undefined,
      maxRentPrice: selectedFilter.maxRentPrice ? selectedFilter.maxRentPrice : undefined,
      minRentPrice: selectedFilter.minRentPrice ? selectedFilter.minRentPrice : undefined,
    }
    PropertyService.getProperties(page, limit, dataToSend).then((response) => {
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
  }, [selectedFilter]);

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
