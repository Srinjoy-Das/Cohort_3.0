const form = document.querySelector('form');
const input1 = document.querySelector('#name');
const input2 = document.querySelector('#email');
const users = document.querySelector('.users');
const input3 = document.querySelector("#image");

let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imgURL: "https://i.pravatar.cc/150?img=12",
    dob: "1998-04-15"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    imgURL: "https://i.pravatar.cc/150?img=47",
    dob: "1996-09-22"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    imgURL: "https://i.pravatar.cc/150?img=33",
    dob: "2000-01-08"
  },
  {
    id: 4,
    name: "Ananya Rao",
    email: "ananya.rao@example.com",
    imgURL: "https://i.pravatar.cc/150?img=44",
    dob: "1997-12-03"
  },
  {
    id: 5,
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    imgURL: "https://i.pravatar.cc/150?img=68",
    dob: "1995-06-18"
  }
];

const listUsers = () => {
  users.innerHTML = '';
  usersData.forEach((elem, index) => {
  users.innerHTML += `<div class="user_card">
        <div class="img_box">
          <img
            src="${elem.imgURL}"
            alt="image"
          />
        </div>

        <div class="text">
          <h3>${elem.name}</h3>
          <p>${elem.email}</p>
        </div>
        <div class="actions">
          <button id="edit">Edit</button>
          <button onclick="deleteUser(${index})" id="del">Delete</button>
        </div>
      </div>`
})
}

listUsers();

form.addEventListener('submit', (events) => {
    events.preventDefault();
    let name = input1.value;
    let email = input2.value;
    let imgUrl = input3.value;

    if(name.trim() === '' || email.trim() === '') {
        return;
    }

    usersData.push({
      name,
      email,
      imgURL: imgUrl,
    });

    listUsers();

    form.reset();
});

const deleteUser = (index) => {
  usersData.splice(index, 1);
  listUsers();
}