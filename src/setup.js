const init = () => {
    const container = document.getElementById("container");
    let htmlDangerous = ""

    const procesado = ArrayContent.map(el => ContentTypeTemplate(el))
    procesado.forEach(el => { htmlDangerous = htmlDangerous + el })

    container.innerHTML = htmlDangerous
}

init();