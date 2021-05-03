const ItemLayout = (data) => {
    const { image, title, description } = data
    return `
        <div class="item">
            <img src=${image} alt="avatar">
            <div>
                <h3>${title}</h3>
                <p>${description}</p>
                <a href="#">Read more</a>
            </div>
            <button>
                <span></span>
            </button>
        </div>
    `
}