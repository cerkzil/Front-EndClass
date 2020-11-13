class Flight {
  constructor(flightId, nationalID, name, surname, flightFrom, flightTo, price, baggage, extra){
    this.flightId = flightId;
    this.nationalID = nationalID;
    this.name = name;
    this.surname = surname;
    this.flightFrom = flightFrom;
    this.flightTo = flightTo;
    this.price = price;
    this.baggage = baggage;
    this.extra = extra;
  }
  Register(ticketElement, ticketKey){
    ticketElement.style.display = "block"

    let t1 = JSON.parse(localStorage.getItem(ticketKey));
    console.log(t1);
    document.getElementById('ticketFlightId').innerHTML = 'Ticket: ' + t1.flightId;
    document.getElementById('ticketFrom').innerHTML = 'From: ' + t1.flightFrom;
    document.getElementById('ticketTo').innerHTML = 'To: ' + t1.flightTo;
    document.getElementById('ticketName').innerHTML = 'Name: ' + t1.name;
    document.getElementById('ticketSurname').innerHTML = 'Surname: ' + t1.surname;
    document.getElementById('ticketNationalId').innerHTML = 'NationalID: ' + t1.nationalID;
    document.getElementById('ticketBaggage').innerHTML = 'Baggage: ' + t1.baggage;
    document.getElementById('ticketPrice').innerHTML = 'Flight Price: ' + t1.price;

    if (t1.baggage > 20){
      let extraCharge = 30;
      let finalprice = t1.price + extraCharge;
      document.getElementById('ticketExtraCharges').innerHTML = 'Extra Charges: ' + extraCharge;
      document.getElementById('ticketFinalPrice').innerHTML = 'Final Price: ' + finalprice;
    }else{
      document.getElementById('ticketExtraCharges').innerHTML = 'Extra Charges: ' + 'None';
      document.getElementById('ticketFinalPrice').innerHTML = 'Final Price: ' + t1.price;
    }
  } 
}


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const flLs1 = document.getElementById('flightTo')
const flLs2 = document.getElementById('flightFrom')

//Print Button:
btn1.onclick = function(e){
  e.preventDefault();

  const flId = 'AAL11';
  const extra = null;
  const flTo = document.getElementById('flightTo').value;
  const flFrom = document.getElementById('flightFrom').value;
  const naID = parseInt(document.getElementById('nationalId').value);
  const bagg = parseInt(document.getElementById('baggage').value);
  const pri = parseInt(document.getElementById('price').value);
  const nam = document.getElementById('name').value;
  const sur = document.getElementById('surname').value;
  const ticket = document.getElementById('ticket');

  //Validation:
  if (isNaN(naID)||isNaN(bagg)||isNaN(pri)||nam === ''||sur === ''||flTo === ''||flFrom ===''){
    alert('Please Fill the Fields correctly!')
  }
  else{
    const fl1 = new Flight(flId, naID, nam, sur, flTo, flFrom, pri, bagg, extra);
    localStorage.setItem('flightInfo', JSON.stringify(fl1))
    fl1.Register(ticket, 'flightInfo');
  }
}

//Print Saved Ticket Button:
btn2.onclick = function(e){
  e.preventDefault();
  const ticket = document.getElementById('ticket');
  const fl2 = new Flight();
  fl2.Register(ticket, 'flightInfo')
}

const fetchList = async () => {
  countries = await fetch(
  'https://restcountries.eu/rest/v2/all'
  )
  .then(response => response.json())
  .then(data => {
  data.forEach(myFunction)
  })
  }

  function myFunction(el) {
    if (el.capital!=''){
      flLs1.append(new Option(el.capital, el.capital))
      flLs2.append(new Option(el.capital, el.capital))
    }
  } 
fetchList();
