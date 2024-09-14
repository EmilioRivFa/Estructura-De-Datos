const FMR_FIB=document.querySelector("#Fibo")
FMR_FIB.addEventListener("submit", serie);

function serie(evn){
    evn.preventDefault();
    const numero=document.getElementsByName("txtNomber").value
    const listResult=document.getElementById("Lista")
    console.log(numero)
    listResult.textContent=serieFibonacci(numero)

}


function serieFibonacci(numero) {
    let num = parseInt(numero)


    let serie=[]

    if (num<=0){
        return[];
    }else if(num==1){
        return[];

    }else if(num== 2){
        return [0, 1];

    }else{
        serie = serieFibonacci(num - 1);
        serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
        return serie;
    }
}
/*function serieFibonacci(x){ 
    let serie=[]
    if(x==0){
        return ;
    }else if(x==1){
        return 0;
    } else if(x==2){
        return [0,1];
    }else{
        serie= serieFibonacci(x-1);
        serie.push(serie[serie.length-1]+serie[serie.length-2]);
        return serie;
    }

    
    let num= serieFibonacci(x-1)*serieFibonacci(x-2)
  }
*/

