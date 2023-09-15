const Helper = ()=>{
    if (window.innerWidth < 960){
        document.getElementsById('navGOp').classList.toggle('seeSideNav');
        
    }
}


/* sidenav */
// function openNav() {
//     // document.getElementById("firstPart").classList.add('seeSidenav');
//     if (window.innerWidth > 480 && window.innerWidth < 960){
//       document.getElementById("firstPart").classList.toggle('seeSidenav');
      
//     }else if (window.innerWidth < 480){
//       document.getElementById("secondPart").classList.toggle('seeSidenav');
//     }
  
//     const elementos = document.querySelectorAll(".navOpenBlur");
//       // Recorrer los elementos seleccionados
//       elementos.forEach(elemento => {
//           // Realizar acciones con cada elemento
//           if (elemento.style.filter === "brightness(0.7)") {
//             // Si el filtro estÃ¡ aplicado, quitarlo
//             elemento.style.filter = "none";
//           } else {
//             // Si el filtro no estÃ¡ aplicado, agregarlo
//             elemento.style.filter = "brightness(0.7)";
//           }
//       });
  
//   }