const template = require('./header.template')

const component = {
    template,
    controllerAs: 'vm',
    controller: function($state) {
        var vm = this;

        console.log('header instantiated')


        vm.selectType = function(type) {
            $state.go('app.team.detail', {teamType: type})
            vm.selectedType = type;
        }

        vm.$onInit = function() {
            vm.selectedType = vm.initialSelected
        }
    },
    bindings: {
        teamTypes: '<',
        initialSelected: '<'
    }
}

module.exports = component