prompt("Enter your name");
prompt("Enter your partner's name");

const compatibilityRate = Math.floor(Math.random() * 100) + 1;


if (compatibilityRate > 0 && compatibilityRate < 33){
    alert(`Your compatibility rate is ${compatibilityRate}`);
    alert("Don't even think about it");
} else if (compatibilityRate >= 33 && compatibilityRate < 66){
    alert(`Your compatibility rate is ${compatibilityRate}`);
    alert("You have a chance");
} else {
    alert(`Your compatibility rate is ${compatibilityRate}`);
    alert("Do it");
} 
