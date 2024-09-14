const FRMFAC=document.querySelector("#frmFac");
FRMFAC.addEventListener("submit", CalcularFactorial);
FRMFAC.addEventListener("reset", Cancelar);



function CalcularFactorial(evt){
    evt.preventDefault();
    const numero= document.getElementById("frmNumber").value;
    const resultado=document.getElementById("Resultado");
    
    resultado.textContent=FactorCor(numero);
}
function Cancelar(){
    const reset=document.getElementById("Resultado");
    reset.textContent=""

}

const FactorCor=(x)=>{
    if(x>0){
        let fac=x*FactorCor(x-1);
        return fac;
    }else{
        return 1;
    }
}

/*function serieFactorial(x){ // Maximum call stack size exceeded
        let serie=[]
        if(x==0){
            return ;
        }else if(x==1){
            return 0;
        } else if(x==2){
            return [0,1];
        }else{
            serie= serieFactorial(x-1);
            serie.push(serie[serie.length-1]+serie[serie.length-2]);
            return serie;
        }
    
        
        let num= serieFactorial(x-1)*serieFactorial(x-2)
      }
*/
    




