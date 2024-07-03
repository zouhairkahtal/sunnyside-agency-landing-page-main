
let x = 0;

function showSidebar() {
  let Sidebar = document.querySelector(".sidebar");
  if(x == 0){
    Sidebar.style.display = 'none';
    x = 1;
  } else if(x == 1){
    Sidebar.style.display = 'flex';
    x = 0;
  }
}
