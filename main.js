function createGame(player1,hour,player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}"/>
               <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}"/>
       
    
        
    </li>`
}
let delay=-0.4;
function createCard(date,day,games) {
    delay=delay+0.4
    return `
     <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
     
                       </ul>
   </div>`
}

document.querySelector("#cards").innerHTML=
               
               createCard("21/11","segunda",
               createGame('senegal','07:00','poland')+
               createGame('england','10:00','iran')+
               createGame('qatar','13:00','ecuador')+
               createGame('walles','16:00','unitstate'))+

               createCard("22/11","terça",
               createGame('argentina','07:00','sauditArabian')+
               createGame('denmark','10:00','tunisia')+
               createGame('poland','13:00','mexico')+
               createGame('france','16:00','australia')
               )+

               createCard("23/11","quarta",
               createGame('morocco','07:00','croatia')+
               createGame('germany','10:00','japan')+
               createGame('spain','13:00','costaRica')+
               createGame('canada','16:00','belgium')
               )+
               createCard("24/11","quinta",
               createGame('switzerland','07:00','cameroon')+
               createGame('uruguay','10:00','korea')+
               createGame('ghana','13:00','portugal')+
               createGame('brazil','16:00','serbia'))+

               createCard("25/11","sexta",
               createGame('walles','07:00','iran')+
               createGame('senegal','10:00','qatar')+
               createGame('ecuador','13:00','netherland')+
               createGame('unitstate','16:00','england'))+

               createCard("26/11","sabado",
               createGame('tunisia','07:00','australia')+
               createGame('sauditArabian','10:00','poland')+
               createGame('france','13:00','denmark')+
               createGame('argentina','16:00','mexico'))+

               createCard("27/11","domingo",
               createGame('costaRica','07:00','japan')+
               createGame('morocco','10:00','belgium')+
               createGame('canada','13:00','croatia')+
               createGame('spain','16:00','germany'))+

               



               createCard("28/11","segunda",
               createGame('cameroon','07:00','serbia')+
               createGame('korea','10:00','ghana')+
               createGame('brazil','13:00','switzerland')+
               createGame('uruguay','16:00','portugal')
               )+

               createCard("29/11","terca",
               createGame('netherland','12:00','qatar')+
               createGame('ecuador','12:00','senegal')+
               createGame('walles','16:00','england')+
               createGame('unitstate','16:00','iran'))+

               createCard("30/11","quarta",
               createGame('tunisia','12:00','france')+
               createGame('australia','12:00','denmark')+
               createGame('poland','16:00','argentina')+
               createGame('sauditArabian','16:00','mexico'))+

               createCard("01/12","quinta",
               createGame('croatia','12:00','belgium')+
               createGame('canada','12:00','morocco')+
               createGame('japan','16:00','spain')+
               createGame('germany','16:00','costaRica'))+
               
               
               createCard("02/12","sexta",
               createGame('korea','12:00','portugal')+
               createGame('ghana','12:00','uruguay')+
               createGame('switzerland','16:00','serbia')+
               createGame('brazil','16:00','cameroon'))
          