const cron = require('node-cron')

const crons = {
    name: 'Crons',
    version: '1.0.0',
    register: async function (server) {

        let list = [{ 'expression': '* * * * * *', 'id': 1 }, { 'expression': '0-29 * * * * *', 'id': 2 }]

        let cronList = []

        list.forEach( routine => {
            cronList.push({
                "cron":cron.schedule(`${routine.expression}`, 
                ()   => console.log(`Expressão ${routine.expression} em execução`)), 
                "id": routine.id
            })
        })

        const removeCron = function (id) {
            cronList.forEach((element, index) => {
                if(element.id == id){
                    element.cron.destroy()
                    cronList.splice(index, 1)
                } 
            })
        }

        const setCron = function (id, expression) {
            
            var task = cron.schedule(`${expression}`, 
                ()   => console.log(`Expressão ${expression} em execução`))

            cronList.push({
                "cron": task, 
                "id": id
            })

        }
        
        server.decorate('toolkit', 'setCron', setCron)
        server.decorate('toolkit', 'removeCron', removeCron)
    }
}

module.exports = {
    ...crons
}
