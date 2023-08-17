import { useState } from "react";
import FiltersTab from "../../components/FiltersTab";
import Header from "../../components/Header";
import HouseCardList from "../../components/HouseCardList";
import { HomeWrapper } from "./styled";

interface FilterFormData {
  propertyType: string;
  minRentPrice: number;
  maxRentPrice: number;
  totalOccupancy: number;
  totalBedrooms: number;
  totalBathrooms: number;
  hasWifi: boolean;
  hasTv: boolean;
  hasAirConditioning: boolean;
  hasWashingMachine: boolean;
  hasKitchen: boolean;
  hasSuite: boolean;
  hasParkingSpace: boolean;
  hasPool: boolean;
  hasBeachView: boolean;
  // Adicione mais opções de filtros aqui
}

function Home() {
  const [selectedFilter, setSelectedFilter] = useState({} as FilterFormData);

  const handleSelectFilter = (filter: FilterFormData) => {
    setSelectedFilter(filter);
  };
  return (
    <HomeWrapper>
      <Header />
      <FiltersTab onSelectFilter={handleSelectFilter} />
      <HouseCardList selectedFilter={selectedFilter} />
    </HomeWrapper>
  );
}

export default Home;
