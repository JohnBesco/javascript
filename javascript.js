let login = prompt('Please enter username');

let message = (login == 'Employee') ? 'Hello!' :
    (login == 'Director') ? 'Greetings!' :
    (login == '') ? 'No Login' :
    message = '';
/* if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }*/