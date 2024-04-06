class Ticket {
    constructor(guests) {
      this.guests = guests;
    }
  
    display() {
      const ticketDisplay = document.getElementById('ticketDisplay');
      ticketDisplay.innerHTML = '';
      this.guests.forEach((guest, index) => {
        const guestInfo = document.createElement('div');
        guestInfo.classList.add('guest-info');
        guestInfo.textContent = `Guest ${index + 1} (age: ${guest.age})`;
        ticketDisplay.appendChild(guestInfo);
      });
    }
  }

  function calculatePrice(age) {
    if (age <= 2) {
      return 0;
    } else if (age < 18) {
      return 100;
    } else if (age < 60) {
      return 500;
    } else {
      return 300;
    }
  }

  function issueTicket() {
    const numGuests = parseInt(document.getElementById('numGuests').value);
    const guests = [];
    for (let i = 0; i < numGuests; i++) {
      const age = parseInt(prompt(`Enter age of guest ${i + 1}:`));
      guests.push({ age });
    }
  
    const totalCharges = guests.reduce((total, guest) => {
      return total + calculatePrice(guest.age);
    }, 0);
  
    const ticket = new Ticket(guests);
    ticket.display();
    alert(`Total charges: INR ${totalCharges}`);
  }