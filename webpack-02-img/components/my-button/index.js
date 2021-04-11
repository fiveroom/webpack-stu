import './index.scss';

export default function createButton(){
    const button = document.createElement('button');
    button.classList.add(['ms-button']);
    button.innerText = "按钮"
    return button
}