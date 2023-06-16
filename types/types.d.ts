interface ICustomButton {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: ReactEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
}

interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface ICarCard {
  car: ICar;
}

interface ICarDetails {
  isOpen: boolean;
  car: ICar;
  closeModal: () => void;
}

interface IFilterParams {
  manufacturer?: string;
  model?: string;
  fuel?: string;
  limit?: number;
  year?: number;
}

interface IFilterOption {
  title: string;
  value: string;
}
interface IFilterParams {
  title: string;
  options: Array<IFilterOption>;
  activeParam?: string;
}

interface IShowMoreProps {
  page: number;
  isNext: boolean;
}
