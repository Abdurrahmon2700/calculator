let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( buttons => {
  buttons.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'AC':
        display.innerText = '';
        break;
      case '':
        if (display.innerText){
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '=':
        display.innerText = eval(display.innerText);
        break;
      case 'sin':
        display.innerText = Math.sin(display.innerText);
        break;
      case 'cos':
        display.innerText = Math.cos(display.innerText);
        break;
      case 'tan':
        display.innerText = Math.tan(display.innerText);
        break;
      case 'x!':
        display.innerText = Math.Math(display.innerText);
        break;
      case 'π':
          display.innerText = Math.PI(display.innerText);
        break;
      case 'log':
        display.innerText = Math.log(display.innerText);
        break;
      case '√':
        display.innerText = Math.sqrt(display.innerText);
        break;
     case '(':
        display.innerText = Math.ceil(display.innerText);
        break;
     case ')':
        display.innerText = Math.ceil(display.innerText);
        break;
     case 'e':
        display.innerText = Math.e(display.innerText);
        break;
    case 'xy':
        display.innerText = Math.pow(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  }); 
});