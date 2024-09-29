
async function getData(item) {
    let main = document.querySelector("#main");
    const url = "data/"+item+".html";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.data();
      console.log(data);

      console.log('async fetch');
      main.innerHTML = data1

      toggleDrawer();

    } catch (error) {
      console.error(error.message);
    }
  }


function load(item){
    console.log(item);
    let main = document.querySelector("#main");

    //fetch('test.html')
    fetch('data/'+item+'.html')
        .then(response => response.text())
        .then((data1) => {
            console.log('first fetch');
            console.log(data1);
            main.innerHTML = data1
            })
      
      //console.log('second fetch outside');
      //console.log(data);
      //document.querySelector("main").append(data)
      toggleDrawer();
}


    //let navItemProgetti = document.querySelector('#progetti'); //Nav Layer
    let navItemProgetti = document.getElementsByName('progetti'); //Nav Layer
    document.querySelector('progetti').addEventListener('click', ()=>{
        alert(navItemProgetti);
    })
