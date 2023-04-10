const lazyImages = document.querySelectorAll("img[data-src]");
const imageOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};
 const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
 };
 if ('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) =>{
        items.forEach(item=> {
            if (item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            };
        });
    }, imageOptions)

    lazyImages.forEach(img=>{
        imgObserver.observe(img);
    });
 } else{
    lazyImages.forEach(img=> {
        loadImages(img)
    });
 }
 