const options = {
  headers: {
    "X-RapidAPI-Key": process.env.CARS_API_KEY || "",
    "X-RapidAPI-Host": process.env.CARS_API_HOST || "",
  },
};

export async function fetchCars<QueryResult>({
  model,
  manufacturer = "",
  year = 2022,
  fuel,
  limit = 10,
}: IFilterParams): Promise<QueryResult> {
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${
      model ? `model=${model}&` : ""
    }${year ? `year=${year}` : ""}${fuel ? `&fuel=${fuel}` : ""}${
      manufacturer ? `&make=${manufacturer}` : ""
    }&limit=${limit}`,
    options
  );

  const data = await response.json();

  return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return url.toString();
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
