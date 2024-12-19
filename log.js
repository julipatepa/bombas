const accordionItems = document.querySelectorAll('.accordion-collapse');
const mapImage = document.querySelector('img[alt="Mapa de ubicación"]');

accordionItems.forEach(item => {
    item.addEventListener('shown.bs.collapse', () => {
        const accordionHeight = document.querySelector('.col-md-4').offsetHeight;
        mapImage.style.height = `${accordionHeight}px`;
    });

    item.addEventListener('hidden.bs.collapse', () => {
        const accordionHeight = document.querySelector('.col-md-4').offsetHeight;
        mapImage.style.height = `${accordionHeight}px`;
    });
});
  
  
const observer = lozad('.lazyload', {
    loaded: function(el) {
        el.classList.add('loaded');
    }
});
observer.observe();