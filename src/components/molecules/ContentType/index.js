const ContentTypeTemplate = (data) => {
    const { type , items} = data

    let htmlDangerous0 = ""

    items.map(item => ItemLayout(item)).forEach(item => htmlDangerous0 = htmlDangerous0 + item)

    return `<div class="content-type">
        ${TypeBarLayout(type)}
        ${htmlDangerous0}
    </div>`
}