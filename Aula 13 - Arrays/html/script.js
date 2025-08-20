let tarefas = []

function adicionarTarefa(){
    let tarefa = document.getElementById("nova-tarefa").value

    //Para identificar se tarefa está vazio ou não
    if (tarefa) {
        tarefas.push(tarefa)
        exibeTarefas()
        tarefa = ""
    }

    console.log(tarefas);

}

function exibeTarefas(){
    let listaTarefas = document.getElementById("lista-tarefas")
    listaTarefas.innerHTML = "" //Para zerar o HTML
    //Percorre a lista (tarefa é variável local/não tem relação com a tarefa anterior)
    tarefas.forEach((tarefa) => {
        let li = document.createElement("li")
        li.innerHTML = tarefa
        listaTarefas.appendChild(li)
    })
}
