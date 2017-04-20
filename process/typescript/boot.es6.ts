import { double, square } from './mymodule';
var a = 3, 
    b = 5;
var calc ={"double": double(a) , "square":square(b)};
var elem = document.getElementById('ka');
elem.innerHTML= `<h3><ul>
                    <li>Double ${a} = ${calc.double}</li>
                    <li>Square ${b} = ${calc.square}</li>
                  </ul></h3>`;