start.addEventListener("click", (e) =>{
  e.preventDefault();
  let arr = ['@', '#', '$', '&', '?', '+', '-', '%', '*'];
let password = [];


for (i = 65; i <= 90; i++){
  arr.push(String.fromCharCode(i));
}
for (i = 97; i <= 122; i++){
  arr.push(String.fromCharCode(i));
}
for (i = 0; i <= 9; i++){
  arr.push(i.toString());
}
//console.log(arr);


for(i = 0; i <= 8; i++){
  let passdic = arr[Math.floor(Math.random() * arr.length)];
  password.push(passdic);
}
//console.log(password);


let text = "";
for (let x of password){
  text = text+x;
}
console.log("Here is your new password : "+text);
pword.innerHTML = text;
})
