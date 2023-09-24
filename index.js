// Code your solutions in this file
function writeCards(namesArray,eventName){
    let messagesList=[];
    for(let y=0;y<namesArray.length;y++){
        let message=`Thank you, ${namesArray[y]}, for the wonderful ${eventName} gift!`;
        messagesList.push(message);
    }
    return messagesList

}
function countDown(number){
    while(number>-1){
        console.log(number)
        number=number-1
        
    }

}

