import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const categories: any = [
  {
    id: 1,
    title: 'Women',
  },
  {
    id: 2,
    title: 'Men',
  },
  {
    id: 3,
    title: 'Fashion',
  },
  {
    id: 4,
    title: 'Home & Life',
  },
  {
    id: 5,
    title: 'Watch & Accessories ',
  },
];

export {width, height, categories};
