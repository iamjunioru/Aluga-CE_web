import Box from '@mui/material/Box';
import FiltersTab from "../../components/FiltersTab";
import Header from "../../components/Header";
import HouseCardList from '../../components/HouseCardList';

function Home() {
  return (
    <Box>
      <Header />
      <FiltersTab />
      <HouseCardList />
    </Box>
  );
}

export default Home;
