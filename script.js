
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

// clear button function

document.getElementById('btn-clear').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('call-history-div').innerText = "";

})

// card-1 call button

document.getElementById('card-btn-1').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card1-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card1-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card1-sub').innerText +" "+ document.getElementById('card1-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card-2 call button

document.getElementById('card-btn-2').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);
    // console.log(presentCoin);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history

// const callHistoryDiv = document.getElementById('call-history-div');


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card2-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card2-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);

    // callHistoryDiv.appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card2-sub').innerText +" "+ document.getElementById('card2-num').innerText;
    // console.log('calling', alertVariable);
    alert('📞 Calling ' + alertVariable+'....');

})

// card-3 call button

document.getElementById('card-btn-3').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card3-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card3-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card3-sub').innerText +" "+ document.getElementById('card3-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card 4 button
document.getElementById('card-btn-4').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card4-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card4-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card4-sub').innerText +" "+ document.getElementById('card4-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card 5 button
document.getElementById('card-btn-5').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card5-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card5-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card5-sub').innerText +" "+ document.getElementById('card5-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})
// card 6 button

document.getElementById('card-btn-6').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card6-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card6-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card6-sub').innerText +" "+ document.getElementById('card6-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card 7 button
document.getElementById('card-btn-7').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card7-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card7-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card7-sub').innerText +" "+ document.getElementById('card7-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card 8 button

document.getElementById('card-btn-8').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card8-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card8-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card8-sub').innerText +" "+ document.getElementById('card8-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// card 9 button 

document.getElementById('card-btn-9').addEventListener('click',function(event){
    event.preventDefault();

    // coin access 
    const presentCoin = parseInt(document.getElementById('coin-count').innerText);

    if(presentCoin < 20){
        alert("❌ Don't have enough Coins. Need minimum of 20 Coins to make a Call ");
        return;
    }

     const availableCoin = presentCoin - 20;

   document.getElementById('coin-count').innerText = availableCoin;

//    call history


   const newCallHistory = document.createElement('div')
   
   newCallHistory.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl mb-2 shadow-lg">
                    <div>
                        <h1 class="text-[18px] font-semibold">${document.getElementById('card9-title').innerText}</h1>
                        <p class="text-[18px] text-[#5C5C5C]">${document.getElementById('card9-num').innerText}</p>
                    </div>
                    <div>
                        <h1 class="text-[18px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
                 </div>
    `

     document.getElementById('call-history-div').appendChild(newCallHistory);
    
    // alert function
    const alertVariable = document.getElementById('card9-sub').innerText +" "+ document.getElementById('card9-num').innerText;
    
    alert('📞 Calling ' + alertVariable+'....');

})

// copy button functionality

// card 1
document.getElementById('btn-card1-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card1-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})

// card 2
document.getElementById('btn-card2-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card2-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})

// card 3
document.getElementById('btn-card3-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card3-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})

// card 4

document.getElementById('btn-card4-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card4-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})

// card 5
document.getElementById('btn-card5-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card5-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})

// card 6

document.getElementById('btn-card6-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card6-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})
// card 7
document.getElementById('btn-card7-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card7-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})
// card 8
document.getElementById('btn-card8-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card8-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})
// card 9
document.getElementById('btn-card9-copy').addEventListener('click',function(){
    // alert function
    const copyAlert = document.getElementById('card9-num').innerText;

    alert('Number has been copied: ' + copyAlert);

    // nav access
   const copyNumber = parseInt(document.getElementById('copy-number').innerText);

   const addedCopy = copyNumber + 1;

   document.getElementById('copy-number').innerText = addedCopy;

//    copy to clipboard
    navigator.clipboard.writeText(copyAlert);
    
})



