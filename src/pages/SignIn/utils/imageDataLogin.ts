import houseSaleSvg from '../../../assets/images/house_for_sale.svg';
import travelersSvg from '../../../assets/images/travelers.svg';
import houseSearchingSvg from '../../../assets/images/house_searching.svg';

export interface ImageDataLogin {
  image: string;
  title: string;
}

export const loginImages: ImageDataLogin[] = [
  {
    image: houseSaleSvg,
    title: 'Casas para alugar',
  },
  {
    image: travelersSvg,
    title: 'Encontre novos lugares',
  },
  {
    image: houseSearchingSvg,
    title: 'Encontre novas oportunidades',
  }
];