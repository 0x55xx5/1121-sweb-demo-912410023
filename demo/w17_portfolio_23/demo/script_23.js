function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 1:
        p.innerHTML = `<iframe src="/final_2/final/div_23.html" width="100%" height="100%" />`;
        break;
      case 2:
          p.innerHTML = `<iframe src="/final_2/demo_xx.html" width="100%" height="100%" />`;
          break;

      case 3:
          p.innerHTML = `<iframe src="/w03_23_card/index.html" width="100%" height="100%" />`;
          break;
      case 4:
          p.innerHTML = `<iframe src="/final_2/contact_xx.html" width="100%" height="100%" />`;
          break;

      case 5:
          p.innerHTML = `<iframe src="/w05_23_blogs/index.html" width="100%" height="100%" />`;
          break;
      case 6:
          p.innerHTML = `<iframe src="/final_2/resume_xx.html" width="100%" height="100%" />`;
          break;
      case 7:
          p.innerHTML = `<iframe src="../demo/w07_23/index.html" width="100%" height="100%" />`;
          break;
      case 8:
          p.innerHTML = `<iframe src="../demo/w08_23/index.html" width="100%" height="100%" />`;
          break;
     
  }
}