const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const list = document.getElementById("list");
const deletebtn = document.getElementById("del");

async function addItem(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    name,
    email,
    phone,
  };

  if (name && email && phone) {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/createUser",
        obj
      );
      console.log(response);
      ShowOnScreen(response.data);
    } catch (err) {
      console.log(err);
    }
  }
}

window.addEventListener("DOMContentLoaded", reloadpage);
async function reloadpage() {
  try {
    const response = await axios.get("http://localhost:8000/getUsers");
    console.log(response);
    response.data.forEach((element) => {
      ShowOnScreen(element);
    });
  } catch (err) {
    console.log(err);
  }
}

async function ShowOnScreen(res) {
  const li = document.createElement("li");

  li.className = "list-group-item align-self-center w-75 mb-1 bg-secondary";

  li.append(
    document.createTextNode(res.name),
    " - ",
    document.createTextNode(res.email),
    " - ",
    document.createTextNode(res.phone)
  );

  const delbtn = document.createElement("button");

  delbtn.className = "btn btn-sm float-right delete";

  delbtn.textContent = "Delete";

  delbtn.addEventListener("click", removelistitem);
  async function removelistitem(e) {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/deleteUser/${res.id}`);
      list.removeChild(li);
    } catch (err) {
      console.log(err);
    }
  }

  li.appendChild(delbtn);

  const editbtn = document.createElement("button");
  editbtn.className = "btn btn-sm float-right mr-2 edit";
  editbtn.textContent = "Edit";

  editbtn.onclick = async () => {
    try {
      await axios.delete(`http://localhost:8000/deleteUser/${res.id}`);
      list.removeChild(li);
    } catch (err) {
      console.error(err);
    }
    username.value = res.name;
    document.getElementById("phone").value = res.phone;
    document.getElementById("email").value = res.email;
  };

  li.append(editbtn);
  list.appendChild(li);

  form.reset();
}

deletebtn.addEventListener("click", deletelastItem);

function deletelastItem(e) {
  e.preventDefault();

  const last = list.lastChild;
  list.removeChild(last);
}
