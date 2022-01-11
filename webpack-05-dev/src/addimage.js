import imgSrc from '../assets/img01.jpg';

export function addImage() {
    const image = new Image();
    image.src = imgSrc;
    document.body.appendChild(image);
}

// 使用魔法注释来命名 magic comments
import(/* webpackChunkName: "bbb" */
    /* webpackPrefetch:  true */
    './bbb').then(({ bbbJS }) => {
        bbbJS()
    });
