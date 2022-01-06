let year;
year = Number(prompt("Mời bạn nhập năm vào: "));
if(year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            alert(year + 'là năm nhuận');
        }else {
            alert(year + 'không là năm nhuận');
        }
    }else {
        alert(year + 'là năm nhuận');
    }
}else {
    alert(year + 'Không là năm nhuận');
}