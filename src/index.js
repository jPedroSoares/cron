const Hapi = require('@hapi/hapi')
const cron = require('node-cron')

const routes = require('./routes')

const init = async () => {
    
    const configs = {
        port: 3000,
        host: 'localhost'
    }

    const server = Hapi.server(configs)

    server.route(routes)

    await server.start()

    console.log('Servidor rodando na porta 3000')

    cron.schedule("* * * * *", () => console.log("Executando a tarefa a cada 1 minuto"))
    
}

init()

