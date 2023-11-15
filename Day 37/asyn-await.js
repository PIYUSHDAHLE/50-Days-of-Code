async function fetchData() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await result.json();
    console.log(json);
    let html = "";
    for (j of json) {
      html += `<tr>
        <td>${j.id}</td>
        <td>${j.name}</td>
        <td>${j.username}</td>
        <td>${j.email}</td>
        <td><button onclick="view(${j.id})" class="btn btn-primary">Edit</button></td>
        </tr>`;
    }
    document.getElementById("data").innerHTML = html;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("completed");
  }
}
fetchData();
async function view(id) {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const selected = await result.json();
    console.log(selected);
    const html = `<h3>${selected.username}</h3>
    <p>${selected.address.street},${selected.address.suite},<br>
    ${selected.address.city},${selected.address.zipcode}
    </p>
    <h4>Phone : ${selected.phone}</h4>
    <h4>Email :${selected.email}</h4>
    <h4>Website : ${selected.website}</h4>
    <h4> Company : ${selected.company.bs}</h4>
    <h4>${selected.company.catchPhrase}</h4>`;
    document.getElementById("data").innerHTML = html;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("completed");
  }
}
