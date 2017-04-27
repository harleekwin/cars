namespace myapp.Controllers {

    export class HomeController {
        public showModal(makeName: string) {
          this.$uibModal.open({
              templateUrl: '/ngApp/dialog.html',
              controller: 'DialogController',
              controllerAs: 'modal',
              resolve: {
                makeName: () => makeName
              },
              size: 'm'
            });
        }
        constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
      }

      angular.module('MyApp').controller('HomeController', HomeController);

      class DialogController {

        public ok() {
          this.$uibModalInstance.close();
        }
        constructor(public makeName: string, private $uibModalInstance: angular.ui.bootstrap.
          IModalServiceInstance) { }
      }

      angular.module('MyApp').controller('DialogController', DialogController);
}
