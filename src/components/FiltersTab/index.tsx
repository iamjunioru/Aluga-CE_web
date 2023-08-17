import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// react icons
import {
  MdOutlineApartment,
  MdFilterAltOff
} from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiHouse,
  GiPersonInBed
} from "react-icons/gi";
import EmployeeForm from "../AdvancedFilters";
import CustomizedDialogs from "../Modal";
import AdvancedFilters from "../AdvancedFilters";
const locationsTab = [
  { id: 1, label: "Tudo", icon: <MdFilterAltOff size={24} /> },
  { id: 2, label: "Apartamento", icon: <MdOutlineApartment size={24} /> },
  { id: 3, label: "Casa", icon: <GiHouse size={24} /> },
  { id: 4, label: "Hotel", icon: <GiPersonInBed size={24} /> },
  { id: 5, label: "Pousada", icon: <BiHomeAlt size={24} /> },
];
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

interface FiltersTabProps {
  onSelectFilter: (filter: FilterFormData) => void;
}

const FiltersTab: React.FC<FiltersTabProps> = ({ onSelectFilter }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const handleSelectFilter = (filter: FilterFormData) => {
    onSelectFilter(filter);
  };

  return (
    <Container
      style={{
        maxWidth: "var(--page-max-width)",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palette.text.primary",
          }}
        >

        <CustomizedDialogs
          modalTitle="Filtros Avançados"
          modalText="Filtros Avançados"
        >
        <AdvancedFilters onSelectFilter={handleSelectFilter}  />
      </CustomizedDialogs>
        </Button>
      </Box>
    </Container>
  );
};

export default FiltersTab;
