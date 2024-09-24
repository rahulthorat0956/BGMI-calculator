const form =document.querySelector('form')
    form.addEventListener('submit',function(event){
        event.preventDefault;
    })
    const height = parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('weight').value)
    const result= document.querySelector('#result')


    if(height==='' || height<1|| isNaN(height)){
        result.innerHTML="Please enter correct height";
    }
    else if(weight==='' || weight<1|| isNaN(weight)){
        result.innerHTML="Please enter correct weight ";
    }
    else{
        const BMI=(weight / ((height*height)/10000)).toFixed(2)

        //result 
        result.innerHTML= `<span>${BMI}</span>`;
    }