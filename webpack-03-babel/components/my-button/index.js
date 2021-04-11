import './index.scss';


export default class CButton{

    text = 'button'

    render(){
        const button = document.createElement('button');
        button.classList.add(['ms-button']);
        button.innerText = this.text
        return button
    }
}