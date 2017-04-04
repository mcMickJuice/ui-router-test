var template = require('./home.template')


var component = {
  template,
  bindings: {
    teamTypes: '<'
  },
  controller: function() {
    var vm = this;
    vm.message = "home component"
  },
  controllerAs: 'vm'
}

module.exports = component