const array = [];

const input_value = document.getElementById("input_place");
const container = document.getElementById("container");
const add_f = document.getElementById("add_btn");
const errormsg = document.getElementById("error");

add_f.addEventListener('click', () => {
  const value1 = input_value.value.trim();

  if (value1 === "") {
    errormsg.textContent = "Please add anything";
    return;
  }

  console.log(value1);
  array.push(value1);

  const new_button = document.createElement("button");
  const new_p = document.createElement("p");
  const new_div = document.createElement("div");

  new_p.textContent = value1;  
  new_button.textContent = "Delete"; 

  new_button.classList.add("test1");
  new_div.appendChild(new_p);
  new_div.appendChild(new_button);

   new_div.classList.add("test");
  container.appendChild(new_div);


  new_button.addEventListener('click', () => {
    container.removeChild(new_div);
    
    const index = array.indexOf(value1);
    if (index !== -1) {
      array.splice(index, 1);
    }
  });
  input_value.value = "";
  errormsg.textContent = "";
});
