let arr = []

document.querySelector('form').addEventListener('submit', 
    function() {

        event.preventDefault();

        var form =document.querySelector('form');

        obj = {
            title : form.task.value,
            priority : form.priority.value
        }

        arr.push(obj);

        

        arr.forEach((ele, index) => {

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
        
            td1.innerText = ele.title;
            td2.innerText = ele.priority;

            if(ele.priority === 'Low'){
                tr.style.backgroundColor = 'green';
            }else{
                tr.style.backgroundColor = 'red';
            }
            
            tr.append(td1, td2);
        
            var table = document.querySelector('table>tbody');
            table.append(tr);
        });

        form.reset();
        console.log(arr);
    }
);

