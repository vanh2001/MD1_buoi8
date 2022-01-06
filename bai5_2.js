let login = prompt('Nhập vào: ');
let message = login == 'Employee' ? 'Hello' : login == 'Dỉector' ? 'Greetings' : login == '' ? 'No login' : '';
alert(message);