let result = document.querySelector('#input>h3');

function calculate(num){
    switch(num){
        case 'C':
            result.innerHTML ="";
            break;

        case '=':
            result.innerHTML = eval(result.innerHTML);
            break;

        default :
            result.innerHTML = result.innerHTML + num;
    }
}