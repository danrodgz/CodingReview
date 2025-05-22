const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se le añade '.' para referirse a la clase
const $b = document.querySelector('.blog'); // Se le añade '.' para referirse a la clase
const $l = document.querySelector('.location'); // Se le añade '.' para referirse a la clase

async function displayUser(username) { // Se añade 'async' para poder usar la expresión 'await'
  $n.textContent = 'cargando...';
  try { // Se añade la declaración 'try / catch' para señalar el bloque de instrucciones a ejecutar
      const response = await fetch(`${usersEndpoint}/${username}`);
      const data = await response.json(); // Se obtiene la respuesta en formato JSON
      $n.textContent = `${data.name}`; // Cambio de comillas simples a backticks
      $b.textContent = `${data.blog}`; // Cambio de comillas simples a backticks
      $l.textContent = `${data.location}` // Cambio de comillas simples a backticks
  } catch (err) {
    handleError (err);
  } //catch
} //function displayUser

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // Se le añade el '$' al inicio para cumplir la sintáxis de la constante a llamar
}

 displayUser('stolinski').catch(handleError);
