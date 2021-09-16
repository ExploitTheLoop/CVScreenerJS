console.log('working')
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]
function gen(values){
    let index = 0
    return{

     next:function() {
        
        if(index<values.length){
            return{
                values: values[index++],
                status:'done'
            }
        } else{
            return{
                status:'false'
            }
        }
        


         }
        }
}
const cv = gen(data)
let next = document.getElementById('next')
next.innerText="SHOW"
next.addEventListener('click',nextcv)

//console.log(cv.next())
function nextcv() {
    next.innerText="NEXT"
    
    console.log('clicked')
    

    const cvdata = cv.next().values
    
    //console.log(cvdata.name)
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if(cvdata != undefined){
        image.innerHTML=`<img src='${cvdata.image}'>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">Name: ${cvdata.name}</li>
        <li class="list-group-item">${cvdata.age} years old</li>
        <li class="list-group-item">Lives in ${cvdata.city}</li>
        <li class="list-group-item">Primarily works on ${cvdata.language}</li>
        <li class="list-group-item">Uses ${cvdata.framework} framework</li>
      </ul>`;

    }else{
        alert('no more data available')
        window.location.reload()
    }

    
}