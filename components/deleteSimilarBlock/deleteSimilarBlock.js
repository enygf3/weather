const deleteSimilarBlock = () => {
    let block = document.querySelector(".app-input-block")
    if(block) {
        block.remove()
    }
}

export default deleteSimilarBlock