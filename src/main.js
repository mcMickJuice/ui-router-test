const angular = require('angular')
const uiRouter = require('angular-ui-router').default

const homeComponent = require('./home.component')
const dataService = require('./team.service')
const headerComponent = require('./header.component')
const teamsComponent = require('./teams.component')

angular.module('app', [uiRouter])
  .component('home', homeComponent)
  .component('header', headerComponent)
  .service('teamService', dataService)
  .component('teams', teamsComponent)
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    const states = [
      {
        name: 'app',
        abstract: true,
        resolve: {
          teamTypes: function (teamService) {
            return teamService.getTeams()
              .then(teams => {

                return teams.reduce((acc, next) => {
                  if (acc.indexOf(next.type) === -1) {
                    acc.push(next.type)
                  }

                  return acc
                }, [])
              })
          }
        }
      },
      {
        url: '/',
        name: 'app.home',
        component: 'home',
      },
      {
        name: 'app.team',
        
        abstract: true,
        resolve: {
          initialSelected: function($transition$){
            return $transition$.params().teamType
          }
        },
        component: 'header'
      },
      {
        name: 'app.team.detail',
        url: '/teams/:teamType',
        component: 'teams',
        resolve: {
          teams: function($transition$, teamService) {
            return teamService.getTeams()
              .then(teams => {
                const selectedType = $transition$.params().teamType
                return teams.filter(t => t.type === selectedType)
              })
          }
        }
      }
    ]

    states.forEach(s => $stateProvider.state(s))
  })