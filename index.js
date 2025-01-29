function change(){

    var p = document.getElementById('quotes');

    const arr = ['Hello, Folks','Innovating the Future, One Step at a Time.',"We’re changing the world with technology."]

    let i = 0;
    setInterval(()=>{
        
        
           p.innerHTML=arr[i];
           i=(i+1)%arr.length;

    },3000);
}

change();