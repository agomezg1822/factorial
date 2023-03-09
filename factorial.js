
function factorial(){
    let n=parseInt(document.getElementById("n").value);
    let factorial = 1;
    let i=2;

    while(i<=n){
        factorial*=i;
        i++;
    }

    console.log(factorial)
    return factorial;
}

