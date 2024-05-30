


const result = document.getElementById('output');
const btn = document.querySelectorAll('.btn');
const clear= document.getElementById('c');
const keys=document.querySelectorAll('calc_keys')
// console.log(typeof(4));
const equalBtn = document.querySelector('.calc.btn1');


// display
btn.forEach(btns=>{
  btns.addEventListener("click",(event)=>{
  result.innerText+= event.target.textContent;

  })
})
// clear
clear.addEventListener("click",()=>{
  result.innerText= " ";
})

// operation
equalBtn.addEventListener("click", () => {
  const expression = result.innerText;
  if (expression) {
    try {
      const answer = calculate(expression); 
      result.innerText = answer;
    } catch (error) {
      result.innerText = "Error"; 
    }
  }
});

// Function to perform calculation
function calculate(expression) {
  const tokens = expression.split(/([\+\-\*\/])/); 
  const stack = [];
  let currentOperator = null;

  tokens.forEach(token => {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      currentOperator = token;
    } else {
      const num = parseFloat(token);
      if (!isNaN(num)) {
        if (currentOperator === '*') {
          stack.push(stack.pop() * num);
        } else if (currentOperator === '/') {
          stack.push(stack.pop() / num);
        } else if (currentOperator === '+') {
          stack.push(num);
        } else if (currentOperator === '-') {
          stack.push(-num);
        } else {
          stack.push(num);
        }
      }
    }
  });

  return stack.reduce((acc, val) => acc + val, 0); 
}
