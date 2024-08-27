export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'b4d13464f3msh7c0c748045fc97fp16e7c5jsn02b28c6d1468',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;

    const milegeFactor = 0.1

    const ageFactor = 0.05

    const milegeRate = city_mpg * milegeFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + milegeRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}