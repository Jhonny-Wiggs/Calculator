const display = document.getElementById('display');
let justCalculated = false;

function appendToDisplay(input) {
    
    if (display.value === 'Error' || justCalculated) {
        display.value = "";
        justCalculated = false; 
    }
    display.value += input; 
}

function clearDisplay() {
    display.value = ''; 
    justCalculated = false; 
}

function calculate() {
    try {
        
        display.value = eval(display.value);
        justCalculated = true; 
    } catch (error) {
        
        display.value = 'Error';
        justCalculated = false; 
    }
}

/*ang tuyo sa kaning "justCalculated" mam kay mura rasyag signal daw for example, done naka og input sa calculation, and once na
mo input ka og lain nga number sa calculator, dira na dayun sya mo disappear para maka himo dayun og new calculation.
Mao sd ni tuyo skong if statement sa first function. Kanang ""



para mo disappear dayun ang calculation once mo enter ka lain na 
number after ma evaluate na ang given input. Another sd mam kay if ma "Error" ang result inig human 
og evaluate sa calculator mam kay mo disappear pud sya after mo input napud ka lain nga number for another
calculation*/
