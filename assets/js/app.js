const baseEndpoint = 'https://api.github.com'; // Consumo de API
const usersEndpoint = `${baseEndpoint}/users`; // Endpoint de la API de acuerdo al usuario

// Variables que vienen del index.html
// Cambio de selectores, son clases
const $n = document.querySelector('.name'); // + [.]
const $b = document.querySelector('.blog'); // - [#] + [.] 
const $l = document.querySelector('.location');

// Se creaba conflicto con "await" - se cambia función a que sea asincrona
// Como se llama a la API, se ocupa "await" por si llega a tardar
async function displayUser(username) {
  $n.textContent = 'cargando...';

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Se agrega constante data 
    const data = await response.json();
    console.log(data);
    // Deben ser backticks, mas no comillas sencillas
    $n.textContent = `${data.name}`; // + $n 
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    throw new Error("Error al llamar API");
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); // Nombre de usuario displayUser('stolinski')