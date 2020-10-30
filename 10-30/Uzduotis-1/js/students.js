var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        var students = JSON.parse(xhr.responseText);
        console.log(students)
        var list = '<ul>';
        for (let i = 0; i < students.length; i++){
            if(students[i].location === true){
                list += '<li class = "locationOn">';
            } else {
                list += '<li class = "locationOff">';
            }
            list += students[i].name;
            list += '</li>';
        }
        list += '</ul>';
        document.querySelector('.students').innerHTML = list;
    }
};
xhr.open('GET', 'data/students.json');
xhr.send();