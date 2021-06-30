const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

const getAll = (request, response)=>{
    response.status(200).send(tarefasJson)
}

const getById = (request, response) =>{
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) =>{
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    

    const novaTarefa ={
        id: Math.random().toString(32).substr(2,9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)

    

    response.status(200).send(novaTarefa)

}


const replaceTask = (request, response) => {
    const idRequerido = request.params.id
    let taskBody = request.body
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    const taskAtualizada = {
        id: tarefaFiltrada.id,
        dataInclusao: tarefaFiltrada.dataInclusao,
        concluido: taskBody.concluido,
        descricao: taskBody.descricao,
        nomeColaborador: taskBody.nomeColaborador
    }

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1, taskAtualizada)

    fsWriteFile()

    response.status(200).json({
        "mensagem": "Tarefa Atualizada com Sucesso",
        taskAtualizada
    })

}



const updateDescricao = (request, response) => {
    const idRequerido = request.params.id
    let newDescricao = request.body.descricao
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    tarefaFiltrada.descricao = newDescricao

    fsWriteFile()

    response.status(200).json({
        "mensagem": "Descrição atualizado com sucesso",
        tarefaFiltrada
    })

}



const updateAnything = (request, response) => {
    const idRequerido = request.params.id
    const atualizacaoBody = request.body
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    Object.keys(atualizacaoBody).forEach((chave) => {
        tarefaFiltrada[chave] = atualizacaoBody[chave]
    })

    fsWriteFile()

    response.status(200).json({
        "mensagem": "Post Atualizado com Sucesso",
        tarefaFiltrada
    })

}












const deleteTask = (request, response)=>{
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)



    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])

}





module.exports ={
    getAll,
    getById,
    createTask,
    deleteTask,
    updateAnything,
    updateDescricao,
    replaceTask
}