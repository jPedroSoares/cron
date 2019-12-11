const cron = require('node-cron')

const crons = {
    name: 'Crons',
    version: '1.0.0',
    register: async function (server, options) {
        // Dados carregados do banco
        let list = [{ 'expression': '* * * * * *', 'id': 1 }, { 'expression': '0-29 * * * * *', 'id': 2 }]

        let cronList = []

        // Inicia todos as rotinas cadastradas no banco assim que o servidor é iniciado e adiciona a cronList
        // O objeto na cronList possui o cron e o id referente a rotina
        // No lugar do console log entrará a procedure
        list.forEach(( routine, index ) => {
            cronList.push({
                "cron":cron.schedule(`${routine.expression}`, 
                ()   => console.log(`Expressão ${routine.expression} em execução`)), 
                "id": routine.id
            })
        })

        // Destroy um objeto cron ao excluir a rotina
        const removeCron = function (id) {
            cronList.forEach((element, index) => {
                if(element.id == id){
                    element.cron.destroy()
                    cronList.splice(index, 1)
                } 
            })
        }

        // Adiciona um objeto cron à cronList e inicia o mesmo
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
