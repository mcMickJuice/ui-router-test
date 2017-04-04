const template = require('./teams.template')

const component = {
    template,
    bindings: {
        teams: '<'
    },
    controllerAs: 'vm',
    controller: function() {
        console.log('teams ctrl instantiated')
    }
}

module.exports = component;