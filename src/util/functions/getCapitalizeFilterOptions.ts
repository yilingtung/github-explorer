import capitalizeFirstLetter from './capitalizeFirstLetter';

const getCapitalizeFilterOptions = (typeArr: string[]) =>
  typeArr.map((type) => ({
    label: capitalizeFirstLetter(type),
    value: type,
  }));

export default getCapitalizeFilterOptions;
