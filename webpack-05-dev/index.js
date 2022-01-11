import { addImage } from './src/addimage';
import createButton from './components/my-button';

import dataYaml from './config/data.yaml';
import _ from 'lodash';

console.log('hello :>> ', 'hello');
console.log('dataYaml :>> ', dataYaml);
addImage()
// let button = createButton();
// document.body.appendChild(button);



console.log('lodash :>> ', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
