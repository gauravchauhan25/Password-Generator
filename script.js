let charSlider = document.querySelector("#charSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector("#passBox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector("#genBtn");
let copyIcon = document.querySelector("#copyIcon");


sliderValue.textContent = charSlider.value;
charSlider.addEventListener('input', ()=>{
    sliderValue.textContent = charSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";


    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    

    let i = 1;
    while(i<=charSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});