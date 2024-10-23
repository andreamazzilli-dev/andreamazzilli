
async function getData(item) {
    let main = document.querySelector("#main");
    const url = "data/"+item+".html";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.text();
      //console.log(data);
      main.innerHTML = data
      //loadStyle('style',item+'.css');

      toggleDrawer();
      document.querySelector("#project").classList.add("projectVisible");

    } catch (error) {
      console.error(error.message);
    }
  }


function load(item){
    let main = document.querySelector("#main");

    fetch('data/'+item+'.html')
        .then(response => response.text())
        .then((data1) => {
            //console.log(data1);
            main.innerHTML = data1
            })
      toggleDrawer();
}


    //let navItemProgetti = document.getElementsByName('progetti'); //Nav Layer
    //document.querySelector('progetti').addEventListener('click', ()=>{
//        alert(navItemProgetti);
  //  })

/* dynamic function */

    async function loadStyle(container,item) {
      let target = document.querySelector("#style");
      const url = "data/"+item;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
  
        const data = await response.text();
        //console.log(data);
        target.innerHTML = data
  
      } catch (error) {
        console.error(error.message);
      }
    }

    function selectCard() {
      alert('prova');
    }


    document.getElementById('dnaverCard').addEventListener('click', selectCard );
