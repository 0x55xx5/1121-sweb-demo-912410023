function showPage(index) {

    const p = document.querySelector('.show-mid1-answer');
    console.log('p', p);

    switch(index) {
        case 'P2-1':
            p.innerHTML = `<iframe src="./cards_23/p1_23.html" width="100%" height="100%" />`
            break;
        case 'P2-2':
            p.innerHTML = `<iframe src="./cards_23/p2_23.html" width="100%" height="100%" />`
            break;
    }
}