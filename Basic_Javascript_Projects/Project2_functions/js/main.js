function printObj(){
    const obj = {
        name: "Femi",
        status: "Junior",
        age: 23,
        isActive: true,
    };

    var foo = document.getElementsByTagName('p')[0].innerHTML;
    document.write(JSON.stringify(obj));
    document.write('<br><br>p1:<br>'+foo)
}