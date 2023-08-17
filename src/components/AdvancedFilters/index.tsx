import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface AdvancedFiltersProps {
  onSelectFilter: (filter: FilterFormData) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ onSelectFilter }) => {
  const {
    control,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit: SubmitHandler<FilterFormData> = (data) => {
    onSelectFilter(data);
    reset();
  };

  // tipos de propriedade
  const propertyTypes = [
    {
      value: 'all',
      label: 'Todos',
    },
    {
      value: 'house',
      label: 'Casa',
    },
    {
      value: 'apartment',
      label: 'Apartamento',
    },
    {
      value: 'republic',
      label: 'República',
    },
    {
      value: 'hotel',
      label: 'Hotel',
    },
    {
      value: 'inn',
      label: 'Pousada',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="propertyType">Tipo de Propriedade:</label>
      <Controller
        name="propertyType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Tipo de Propriedade</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Tipo de Propriedade"
              {...field}
            >
              {propertyTypes.map((propertyType) => (
                <MenuItem value={propertyType.value} key={propertyType.value}>
                  {propertyType.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <br />

      <label htmlFor="minRentPrice">Preço de Aluguel Mínimo:</label>
      <Controller
        name="minRentPrice"
        control={control}
        defaultValue=""
        render={({ field }) => <input type="number" id="minRentPrice" {...field} />}
      />
      <br />

      <label htmlFor="maxRentPrice">Preço de Aluguel Máximo:</label>
      <Controller
        name="maxRentPrice"
        control={control}
        defaultValue=""
        render={({ field }) => <input type="number" id="maxRentPrice" {...field} />}
      />
      <br />

      <label htmlFor="totalOccupancy">Ocupação Máxima:</label>
      <Controller
        name="totalOccupancy"
        control={control}
        defaultValue={0}
        render={({ field }) => <input type="number" min={0} max={20} defaultValue={0} id="totalOccupancy" {...field} />}
      />
      <br />

      <label htmlFor="totalBedrooms">Número de Quartos:</label>
      <Controller
        name="totalBedrooms"
        control={control}
        defaultValue={0}
        render={({ field }) => <input type="number" min={0} max={20} defaultValue={0} id="totalBedrooms" {...field} />}
      />
      <br />

      <label htmlFor="totalBathrooms">Número de Banheiros:</label>
      <Controller
        name="totalBathrooms"
        control={control}
        defaultValue={0}
        render={({ field }) => <input type="number" min={0} max={20} defaultValue={0} id="totalBathrooms" {...field} />}
      />
      <br />

      <label>Opções:</label>
      <Controller
        name="hasWifi"
        control={control}
        render={({ field }) => <FormControlLabel label="Wi-Fi" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasTv"
        control={control}
        render={({ field }) => <FormControlLabel label="TV" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasAirConditioning"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Ar Condicionado" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasWashingMachine"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Máquina de Lavar" control={<Checkbox />}{...field}/>}
      />
      <label>Máquina de Lavar</label>

      <Controller
        name="hasKitchen"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Cozinha" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasSuite"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Suíte" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasParkingSpace"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Vaga de Estacionamento" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasPool"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Piscina" control={<Checkbox />}{...field}/>}
      />

      <Controller
        name="hasBeachView"
        control={control}
        defaultValue={false}
        render={({ field }) => <FormControlLabel label="Vista para a Praia" control={<Checkbox />}{...field}/>}
      />

      <button type="submit">Filtrar</button>
    </form>
  );
}

export default AdvancedFilters;

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