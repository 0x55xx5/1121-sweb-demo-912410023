function showdemo(week) {
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(week){
        case 2:
         p.innerHTML = `<iframe src="./W02_23/index.html" width="100%" height="100%" />`;
         break;
        
        case 3:
            p.innerHTML = `<iframe src="../demo/w03_23/index.html" width="100%" height="100%" />`;
         break;
        case 4:
            p.innerHTML = `<iframe src="../demo/w04_23/index.html" width="100%" height="100%" />`;
         break;
        
        case 5:
            p.innerHTML = `<iframe src="../demo/w05_23/index.html" width="100%" height="100%" />`;
         break;
        case 6:
            p.innerHTML = `<iframe src="../demo/w06_23/index.html" width="100%" height="100%" />`;
         break;        
        case 7:
            p.innerHTML = `<iframe src="../demo/index.html" width="100%" height="100%" />`;
         break;
    }
}