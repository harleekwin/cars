var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal) {
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.showModal = function (makeName) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/dialog.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        makeName: function () { return makeName; }
                    },
                    size: 'm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('MyApp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(makeName, $uibModalInstance) {
                this.makeName = makeName;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('MyApp').controller('DialogController', DialogController);
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
message = 'Hello from the about page!';
