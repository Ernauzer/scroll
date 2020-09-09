const sectionsList = document.querySelectorAll('.content');
let q = 0, w = 683, e = 1365, r = 2048, t = 2731;
function getNewHash() {
    let first = sectionsList[0], 
    second = sectionsList[1], 
    third = sectionsList[2], 
    four = sectionsList[3], 
    five = sectionsList[4];
    const Y_Page = window.pageYOffset;
    for (const item of sectionsList) {
        console.log( Y_Page);
         if(q < Y_Page) {
            history.pushState({}, '', first.id);
         }
         if(w < Y_Page) {
            history.pushState({}, '', second.id);
         }
         if(e < Y_Page) {
            history.pushState({}, '', third.id);
         }
         if(r < Y_Page) {
            history.pushState({}, '', four.id);
         }
         if(t < Y_Page) {
            history.pushState({}, '', five.id);
         }
     }
}
document.addEventListener('scroll', getNewHash);
