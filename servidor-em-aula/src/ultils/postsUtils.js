let filtrarPost = (model, id)=>{
    let postFiltrado = model.find(post => post.id == id)
    return postFiltrado
}

// FUNÇÃO PARA ATUALIZAR A DATA DIA/MÊS/ANO
function dataAtualFormatada(){
    var data = new Date()
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear()

        return diaF+"/"+mesF+"/"+anoF
}


module.exports = {
    filtrarPost,
    dataAtualFormatada
} 