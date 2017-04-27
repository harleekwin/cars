namespace myapp.Services {

    export class CarService {
        private CarResource;

        public listCars() {
            return this.CarResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars');
        }
    }
    angular.module('myapp').service('carService', CarService);
    export class MyService {

    }
    angular.module('myapp').service('myService', MyService);
    }
