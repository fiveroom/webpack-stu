import { addImage } from './src/addimage';
import createButton from './components/my-button';

import dataYaml from './config/data.yaml';

console.log('hello :>> ', 'hello');
console.log('dataYaml :>> ', dataYaml);
addImage()
let button = createButton();
document.body.appendChild(button);