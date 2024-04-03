// CS10 Grade Calculator

// Event Listener
document.getElementById("btnGrade").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let client1 = +document.getElementById("client1").value;
  let structure1 = +document.getElementById("structure1").value;
  let structure2 = +document.getElementById("structure2").value;
  let client2 = +document.getElementById("client2").value;
  let projectA = +document.getElementById("projectA").value;

  // Process
  let grade = (client1 + structure1 + structure2 + client2 + projectA) / 5;

  // Output
  document.getElementById("final").innerHTML = grade;
}
