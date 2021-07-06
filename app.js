const modal = $.modal(record);


document.addEventListener('click', event => {
    if (event.target.dataset.open) {
        modal.open()
    }
})




