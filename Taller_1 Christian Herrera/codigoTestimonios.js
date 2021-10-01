var nombre = document.getElementById("nombreComentario").addEventListener("change", setName)
var comentario = document.getElementById("comentarios").addEventListener("change", setComment)
var cajaComentarios = document.getElementById("tablaComentarios")
var commentsArray = localStorage.getItem("comentarios") ? JSON.parse(localStorage.getItem("comentarios")) : new Array()

window.onload = localStorage.getItem("comentarios") ? addCommentDom() : ""

function setName(event) {
    nombre = event.target.value
}

function setComment(e) {
    comentario = e.target.value
}

function deployComment() {
    if (commentsArray.length < 10  ){
        var fecha = new Date()
        fecha = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes()
        var comentarioObject = {
            nombre: nombre,
            comentario: comentario,
            fecha: fecha
        }
        commentsArray.push(comentarioObject)
        localStorage.setItem("comentarios", JSON.stringify(commentsArray))
        attachComment(comentarioObject)
    } else {
        commentsArray.shift()
        localStorage.setItem("comentarios", commentsArray)
        deployComment()
        cajaComentarios.removeChild(cajaComentarios.lastElementChild)
    }

}

function attachComment(item) {
    const divContenedor = document.createElement("div")
    divContenedor.style.setProperty("margin-bottom", "40px")

    var div2 = document.createElement("div")
    div2.classList.add('d-flex', 'justify-content-between', 'align-items-center')

    var spanHora = document.createElement("span")
    spanHora.classList.add("small")

    var paragraph1 = document.createElement("p")
    paragraph1.classList.add("mb-1")

    var paragraph2 = document.createElement("p")
    paragraph2.classList.add('small', 'mb-0')
    paragraph1.innerText = item.nombre
    spanHora.textContent = " -" + item.fecha
    paragraph2.textContent = item.comentario

    divContenedor.insertAdjacentElement("afterbegin", div2)
    div2.insertAdjacentElement("afterbegin", paragraph1)
    paragraph1.insertAdjacentElement("beforeend", spanHora)

    divContenedor.insertAdjacentElement("beforeend", paragraph2)

    cajaComentarios.insertAdjacentElement("afterbegin", divContenedor)
}

function addCommentDom() {

    var todosLosComentarios = JSON.parse(localStorage.getItem("comentarios"))

    todosLosComentarios.forEach((item) => {
        attachComment(item)
    })
}