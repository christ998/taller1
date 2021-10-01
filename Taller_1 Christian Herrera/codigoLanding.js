
var carusel = document.getElementById("carousel-inner")
window.onload = localStorage.getItem("comentarios") ? addCommentsToBox: ""

function agregarTestimonio(item) {
    var div2 = document.createElement("div")
    div2.classList.add("col-md-4")

    var div3 = document.createElement("div")

    var p1 = document.createElement("p")

    var p2 = document.createElement("p")
    p2.classList.add("p-wrap")

    var i1 = document.createElement("i")
    i1.classList.add("fas","fa-quote-left","pe-2")

    div2.insertAdjacentElement("afterbegin", div3)
    div3.insertAdjacentElement("afterbegin", p1)
    div3.insertAdjacentElement("beforeend", p2)
    p1.insertAdjacentText("afterbegin", item.nombre)

    p2.insertAdjacentElement("afterbegin", i1)
    p2.insertAdjacentText("beforeend", item.comentario)

    return div2
}

function agregarSlide() {
    var div1 = document.createElement("div")
    div1.classList.add("carousel-item")

    carusel.insertAdjacentElement("beforeend", div1)
}

function addCommentsToBox() {
    var todosLosComentarios = JSON.parse(localStorage.getItem("comentarios"))

    for (let i = 0; i < todosLosComentarios.length; i++){
        if (i !==0 && i % 3 === 0){
            agregarSlide()
        }
        carusel.lastElementChild.insertAdjacentElement("beforeend",agregarTestimonio(todosLosComentarios[i]) )
    }
}
