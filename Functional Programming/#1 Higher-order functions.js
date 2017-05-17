var cars = [
  { 'name': 'Ford', 'model': 'Fiesta' },
  { 'name': 'BMW', 'model': '320' },
  { 'name': 'Fiat', 'model': '500' }
];

var isFiesta = function(car) {
  return car.model === 'Fiesta';
};

var models = cars.filter(isFiesta);
var otherCars = cars.reject(isFiesta);




