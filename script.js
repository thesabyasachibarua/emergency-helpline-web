
// document.getElementById('heart-btn').addEventListener('click',function(event){
//     console.log('heart button');
//     const heartValue = parseInt(document.getElementById('value-heart').innerText);

//     const increasedValue = heartValue + 1;

//     document.getElementById('value-heart').innerText = parseInt(increasedValue);

// })

// heart button functionality
const heartClass = document.getElementsByClassName('heart-button');

for(const heart of heartClass){
    heart.addEventListener('click',function(){

            const heartValue = parseInt(document.getElementById('value-heart').innerText);
    const increasedValue = heartValue + 1;

    document.getElementById('value-heart').innerText = parseInt(increasedValue);
    })
}

const callClass = document.getElementsByClassName('btn-call');

for(const call of callClass){
    call.addEventListener('click',function(event){
        event.preventDefault();
        alert('calling');
    })
}