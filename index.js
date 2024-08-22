const jokepara = document.getElementById("text");
const generate = document.getElementById("generate");
const container = document.getElementById("container");

const url = "https://v2.jokeapi.dev/joke/Any?type=single";

generate.addEventListener("click", generates);

function generates() {
    fetch(url)
        .then(response => response.json() ) 
        .then(data => {
            if (data.joke) {
                jokepara.innerText = ` Joke Category: ${data.category} 
              
                ${data.joke} `; 

            } else {
                jokepara.innerText = "No joke found.";
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            jokepara.innerText = "Failed to fetch joke.";
        });
}



