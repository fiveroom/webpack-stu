import imgSrc from '../assets/img01.jpg';

export function addImage(){
    const image = new Image();
    image.src = imgSrc;
    document.body.appendChild(image);
}

