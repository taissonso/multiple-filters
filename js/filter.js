let filter = document.querySelectorAll('.filter');
let all = document.querySelector('.todos');
let filterContent = document.querySelectorAll('.box-conteudo');

filter.forEach(chave => {
    chave.addEventListener('click', isFilter);
});

function isFilter(){
    if(this.dataset.filter === 'filter-all') {
        showAll();
    } else {
        all.classList.remove('active');
        if(this.classList.contains('active') && !all.classList.contains('active')) {
            this.classList.remove('active');
            removeSelectedFilter(this);
        } else {
            this.classList.add('active');
            showSelectedFilter(this);
        }
    }
}

function showSelectedFilter(selected){
    filterContent.forEach(chave => {
        if(chave.dataset.filter === selected.dataset.filter && (!chave.classList.contains('hide') || !chave.classList.contains('show'))) {
            chave.classList.add('show');
            chave.classList.remove('hide');
        } else {
            chave.classList.add('hide');
        }

        if( chave.dataset.filter != selected.dataset.filter && chave.classList.contains('show') ) {
            chave.classList.remove('hide');
            chave.classList.add('show');
        }
    })
}

function removeSelectedFilter(selected) {
    let flag = 0;
    
    filter.forEach(chave => {
        if(chave.classList.contains('active')) {
            flag++;
        }
    })

    flag === 0 ? showAll() : removeFilter(selected);   
}

function removeFilter(selected) {
    filterContent.forEach(chave => {
        if(chave.dataset.filter === selected.dataset.filter) {
            chave.classList.remove('show');
            chave.classList.add('hide');
        }
    })
}

function showAll() {
    filter.forEach(chave => {
        chave.classList.remove('active')
    })

    filterContent.forEach(chave => {
        chave.classList.remove('hide');
        chave.classList.remove('show');
    })
    all.classList.add('active');
}