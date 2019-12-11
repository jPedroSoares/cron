const Hapi = require('@hapi/hapi')

const routes = require('./routes')

const init = async () => {
    
    const configs = {
        port: 3000,
        host: 'localhost'
    }

    const server = Hapi.server(configs)

    await server.route(routes)

    await server.register([
        { plugin: require('./jobs')}
    ])

    await server.start()

    console.log('Servidor rodando na porta 3000')
    
}

init()

