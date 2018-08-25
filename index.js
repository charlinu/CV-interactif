new SmoothScroll('a[href*="#"]');
// ça marche pas comme ça devrait. 
// Un offset est requis, sinon n'importe quel id semble
// avoir une position calculée vers la section compétences
new Waypoint({
    element: document.getElementById('who'),
    handler: function(direction) {
        const arrows = document.getElementsByClassName('arrow');
        for(const arrow of arrows) {
            if(direction === 'down') {
                arrow.classList.add('d-none');
            }
            else {
                arrow.classList.remove('d-none');
            }
        }
    },
    offset: 800
});
