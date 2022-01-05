let name = prompt('Mời nhập tên: ');

if(name == "admin"){
    let password = prompt('Mời bạn nhập password: ');
    if(password == "TheMaster"){
        alert('Welcome!');
    }else if (password == "") {
        alert('Canceled');
    }else {
        alert('Wrong password');
    }
}else if (name == "") {
    alert('Canceled');
}else {
    alert("I don't know you");
}
