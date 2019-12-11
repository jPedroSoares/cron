
const rotas = [
{
    method: 'POST',
    path: '/adicionar',
    handler: (request, h) => {

      const { id, expression } = request.query
      h.setCron(id, expression)

      return `Expressão ${expression} executada`
    }
},{
  method: 'DELETE',
  path: '/remover',
  handler: (request, h) => {

    const { id } = request.query
    h.removeCron(id)

    return `Expressão removida`
  }
}]

module.exports = [
  ...rotas,
]