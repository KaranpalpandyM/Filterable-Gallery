(function () {
    const buttons=document.querySelectorAll('.btn')
    const storeImages=document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filters

            storeImages.forEach((item) => {
                if(filter === 'all'){
                    item.style.display = 'block'
                }else{
                    if(filter === 'hero'){
                        document.querySelector('.H').style.display = 'block'
                    }
                    else
                    {
                        item.style.display = 'none'
                    }

                }
                    /*if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display = 'none'
                    }*/
            })
        })
    })
})();