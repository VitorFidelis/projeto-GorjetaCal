function calculateTip(event){
    event.preventDefault();//faz com que a pagina não atualize.

    //Pegando os valores dos inputs dentro do form
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('servicequal').value;
    let numOfpeople = document.getElementById('people').value;

    //Verificar se a conta está preenchida com os valores ou vazia
    if(bill == '' || serviceQual == 0){
        alert('Por favor, preencha os valores!')
        return;// para essa função 'calculateTip'.
    }

    //Verifica o numero de pessoas, que sera dividida a gorjeta
    if (numOfpeople == '' || numOfpeople <= 1) {
        numOfpeople = 1;
        document.getElementById('each').style.display = 'none';
    }else{
        document.getElementById('each').style.display = 'block';//faz co que o elemento de Id informado pareça
    }

    //Calculo do valor total da gorjeta
    let total = bill * serviceQual/numOfpeople;
    //formatando para o valor de reais, com duas casas decimais
    total = total.toFixed(2);
    //Exibindo esse valor
    document.getElementById('tip').innerHTML= total;
    document.getElementById('totaltip').style.display = 'block';
}

document.getElementById('totaltip').style.display = 'none';//Faz com que o elemento do id informado suma da tela.
document.getElementById('each').style.display = 'none';//Faz com que o elemento do id informado suma da tela.

document.getElementById('tipsform').addEventListener('submit',calculateTip);//Informando que ao clicar no botão calcular ira aconetcer o evento 'calculateTip'.