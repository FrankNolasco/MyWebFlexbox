const TypeBarLayout = (data) => {
    const { title, color } = data
    return `
        <div class="type ${color}" >${title}</div>
    `
}