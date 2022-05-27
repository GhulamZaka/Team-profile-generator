// Manager section
const managerCard = (data) => {
  return `
  <!-- Manager section-->
  <section>
    <div class="container">
      <div class="manager">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <div class="card-header bg-primary text-white">
                <h4 class="card-title">${data.getName()}</h4>
                <h5 class="card-subtitle mb-2"><span class="icon"><img src ="./dist/manager.jpg"></span>Manager</h5>
              </div>
              <p></p>
              <h6 class="card-text">ID: ${data.getId()}</h6>
              <h6 class="card-text">Email: <a href= "mailto:${data.getEmail()}">${data.getEmail()}</a></h6>
              <h6 clas="card-text">Office Number: ${data.getOfficeNumber()}</h6>
            </div>
        </div>
      </div>
    </div>
  </section>
  `;
};

//<!-- Engineer section-->
const engineerCard = (data) => {
  return `
<section>
  <div class="container">
  <div class="engineer">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <div class="card-header bg-primary text-white">
              <h4 class="card-title">${data.getName()}</h4>
              <h5 class="card-subtitle mb-2"><span class="icon"><img src ="./dist/engineer.jpg"></span>Engineer</h5>
            </div>
            <p></p>
            <h6 class="card-text">ID: ${data.getId()}</h6>
            <h6 class="card-text">Email: <a href= "mailto:${data.getEmail()}">${data.getEmail()}</a></h6>
            <h6 clas="card-text">Github: <a href= "https://github.com/${data.getGithub()}">${data.getGithub()}</a></h6>
          </div>
          </div>
      </div>
  </div>
</section>
`;
};

// <!-- Intern section-->
const internCard = (data) => {
  if (!data) {
    return "";
  }
  return `
<section>
  <div class="container">
  <div class="intern">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <div class="card-header bg-primary text-white">
              <h4 class="card-title">${data.getName()}</h4>
              <h5 class="card-subtitle mb-2"><span class="icon"><img src ="./dist/intern.jpg"></span>Intern</h5>
            </div>
            <p></p>
            <h6 class="card-text">ID: ${data.getId()}</h6>
            <h6 class="card-text">Email: <a href= "mailto:${data.getEmail()}">${data.getEmail()}</a></h6>
            <h6 clas="card-text">School: ${data.getSchool()}</h6>
          </div>
          </div>
      </div>
  </div>
</section>
  `;
};

const cards = (data) => {
  var cardInput = "";
  for (i = 0; i < data.length; i++) {
    console.log("cardData");
    console.log(data[i].getRole());
    if (data[i].getRole() === "Manager") {
      cardInput += managerCard(data[i]);
    } else if (data[i].getRole() === "Engineer") {
      cardInput += engineerCard(data[i]);
    } else if (data[i].getRole() === "Intern") {
      cardInput += internCard(data[i]);
    }
  }

  return cardInput;
};

// generating html page and exporting function
const pageTemplate = (data) => {
  console.log("data");
  console.log(data);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio Generator</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1 >My Team</h1>
         </header>

        <main>
        <div class="flex-wrap">
        ${cards(data)}
        </div>
        </main>
        </body>
        </html>
    `;
};

module.exports = pageTemplate;
