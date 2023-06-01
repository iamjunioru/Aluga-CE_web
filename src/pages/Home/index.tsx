import FiltersTab from "../../components/FiltersTab";
import Header from "../../components/Header";
import HouseCardList from "../../components/HouseCardList";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <FiltersTab />
      <HouseCardList />
    </HomeWrapper>
  );
}

export default Home;
