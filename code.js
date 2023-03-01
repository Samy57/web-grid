// Sam PEGEOT
// GitHub Samy57


document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener("click",
    () => {
      for (let i = 0; i < 10; i++) {
        let newDiv = document.createElement("div");
        addBehavior(newDiv);
        document.getElementById("grid").appendChild(newDiv);

      }
    });

  // Init behavior of squares
  for (let s of document.getElementById("grid").children) {
    addBehavior(s);
  }


  /* METHODE DE GESTION D'EVENT SUR LE PERE
document.getElementById("grid").addEventListener("click",
  (event) => {
    if (event.target.id != "grid") {
      event.target.style.backgroundColor = "green";
    }
  }); */

});

function addBehavior(square) {
  square.addEventListener("click", (event) => {
    event.target.classList.add("clicked");
    event.target.classList.remove("mouseover");
  });


  square.addEventListener("mouseover", (event) => {
    if (!event.target.classList.contains("clicked")) {
      event.target.classList.add("mouseover");
    }
  });

}

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}