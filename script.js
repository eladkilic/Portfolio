const projects = [
    {
        id: 1,
        title: "Spiel1",
        description: "bu da blabla",
        image: "cat.jpeg"
    },
    {
        id: 2,
        title: "Spiel2",
        description: "bu da bleble",
        image: " "
    },
    {
        id: 3,
        title: "Spiel3",
        description: "bu da bleble",
        image: " "
    },
    {
        id: 4,
        title: "Spiel4",
        description: "bu da bleble",
        image: " "
    },
    {
        id: 5,
        title: "Spiel5",
        description: "bu da bleble",
        image: " "
    }
]


const getInfos = function(projectID){
    const proj = projects.find(p => p.id == projectID);
    const info = document.getElementById("info-" + projectID)
    info.innerHTML= `
        ${proj.title} <br> ${proj.description}
    `;

    const img = document.getElementById("img-" + projectID);
    if (img && proj.image != null) {
        img.src = proj.image;
        img.alt = proj.title;
    }

}

const displayProjects = function(project){
    const listScreen= document.getElementById("list-screen");
   
    const dl = document.createElement("dl");
    //dl.setAttribute("onclick",`openDetails(${project.id})`);

    dl.innerHTML = `
        <dt><h3> Project ${project.id}:</h3></dt>
        <dd>
            <div class="text" id="info-${project.id}"></div>
            ${project.image ? `<div><img src="${project.image}" id="img-${project.id}"  class="image"></div>` : ""}
        </dd>
    `;
    listScreen.appendChild(dl);
    getInfos(project.id);
}

window.onload = function(){
    console.log("Page loaded, projects count:", projects.length);
    projects.forEach(project => displayProjects(project));
}
