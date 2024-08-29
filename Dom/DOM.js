document.getElementById("h1").innerHTML="Click me!!?";
document.getElementById("h1").addEventListener("click",hye);
function hye(){
    document.getElementById("para").innerHTML="hello"
    let x=document.createElement('div');
    x.textContent="Hello Iam Div";
    x.setAttribute['id','divid'];
    x.style.backgroundColor="red"
    document.body.append(x);

}