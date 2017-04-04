function Team(id, type) {
    this.name = `Team ${id}`
    this.id = id
    this.type = type
}

function range(max) {
    let i = 0;
    const arr = []
    while(i < max) {
        arr.push(i)
        i++
    }

    return arr;
}

function getType(i) {
    if(i % 2 === 0) return 'Even'

    if(i % 3 === 0) return 'Threes'

    return 'Odd'
}


function dataService($q) {
    let teams = range(25).map(i => new Team(i, getType(i)))
    
    return {
        getTeams: function() {
            const deferred = $q.defer();

            setTimeout(function() {
                deferred.resolve(teams);
            }, 0)

            return deferred.promise
        } 
    }
}

module.exports = dataService