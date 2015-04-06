/**
 * Created by Gert on 02.04.15.
 */
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

angular.module('ui.bootstrap.demo').controller("TabsController", function () {
    this.tab = 1;
    this.setTab = function (num) {
        this.tab = num;
    };
    this.isSet = function (num) {
        return this.tab === num;
    };
});

angular.module('ui.bootstrap.demo').controller('myCtrl', function ($scope) {
    $scope.heading = "";
    $scope.description = "";
    $scope.giftlist = "";
    $scope.eventdate = "";


});
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});


angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };


});

angular.module('ui.bootstrap.demo').controller('TimepickerDemoCtrl', function ($scope, $log) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 5;

    $scope.ismeridian = false;

});


angular.module('ui.bootstrap.demo').controller('CollapseDemoCtrl', function ($scope) {
    $scope.isCollapsed = true;
});


angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
        {
            title: 'Dynamic Title 1',
            content: 'Dynamic content 1'
        },
        {
            title: 'Dynamic Title 2',
            content: 'Dynamic content 2',
            disabled: true
        }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
});

// Accordion menu from first TAB

angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Korraldaja',
            content: 'Mihkel Must'
        },
        {
            title: 'Raha',
            content: 'EE928481092845823390'
        }
    ];

    $scope.items = [{'name': 'Mahlapress', 'price': '40'},
        {'name': 'Jalgratas', 'price': '60'}


    ];

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push({'name': 'Kingitus', 'price': '0'});
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});