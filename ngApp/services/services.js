var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.CarResource = $resource('/api/cars');
            }
            CarService.prototype.listCars = function () {
                return this.CarResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('myapp').service('carService', CarService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('myapp').service('myService', MyService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
