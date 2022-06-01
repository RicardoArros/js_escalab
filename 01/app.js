"use strict";

var btn = document.querySelector('#btn');

btn.addEventListener('click', arrosSystem);

function arrosSystem() {
  //
  var exit;

  var eventChoice = "";
  var eventCost = 0;

  // Welcome Funct
  function welcome() {
    alert("Bienvenido al Sistema ArrosTickets");
  }

  // Menu Funct
  function eventMenu() {
    var eventMenu = prompt(
      "Elija el evento al que desea ir\n1: Metallica \n2: Daddy Yankee \n3: Peppa Pig \n4: Salir"
    );

    if (eventMenu === "1") {
      eventCost = 5000;
      eventChoice = "Metallica";

    } else if (eventMenu === "2") {
      eventCost = 2000;
      eventChoice = "Daddy Yankee";

    } else if (eventMenu === "3") {
      eventCost = 8000;
      eventChoice = "Peppa Pig";

    } else if (eventMenu === "4") {
      alert("Ha salido del programa. Vuelva pronto.");
      return exit = true;

    }

    console.log("Event choice: ", eventChoice);
    console.log("Event cost: ", eventCost);

    // Ticket Amount Funct
    var eventTicketAmount = Number(
      prompt("Digite la cantidad de entradas que desea: ")
    );

    console.log("Event Ticket Amount", eventTicketAmount);

    var eventCostTotal = eventCost * eventTicketAmount;

    var eventPayTotal = 0;

    var eventPayRefund = 0;

    //
    while (eventPayTotal < eventCostTotal) {
      eventPayTotal = Number(
        prompt(
          "El valor total de la compra es " +
            eventCostTotal +
            "." +
            "\n" +
            "Ingresar monto a pagar: "
        )
      );

      eventPayRefund = eventPayTotal - eventCostTotal;

      if (eventPayTotal < eventCostTotal) {
        alert(
          "El pago es insuficiente, por lo que el pago ha sido cancelado. Intentelo otra vez."
        );
      } else if (eventPayTotal === eventCostTotal) {
        alert(
          "El Pago es exitoso. Ha comprado " +
            eventTicketAmount +
            " tickets en total."
        );
      } else {
        alert(
          "El Pago es mayor al total de entradas. El monto de devolución es " +
            eventPayRefund +
            "."
        );
      }
    }
  }

  // Program
  while (exit !== true) {
    console.log("INICIO");

    welcome();

    eventMenu();

    exit = true;

    alert("Programa finalizado. Que tenga un buen día");

    console.log("FIN");
  }
}

