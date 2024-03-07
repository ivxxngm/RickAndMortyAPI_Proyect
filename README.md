Rick and Morty Personajes
Este proyecto es una simple aplicación web que utiliza la API de Rick and Morty para obtener y mostrar información sobre los personajes.

Cómo funciona
El archivo rickMorty.js contiene dos funciones principales:

obtenerPersonajes(url): Esta función utiliza la API Fetch para obtener datos de la API de Rick and Morty. Los datos obtenidos se almacenan en la variable todosLosPersonajes. Si hay más datos disponibles (indicado por datos.info.next), la función se llama a sí misma con la nueva URL para obtener más datos. Una vez que se han obtenido todos los datos, se llama a la función mostrarPersonajes.

mostrarPersonajes(personajes): Esta función toma un array de personajes y los muestra en el DOM. Crea un nuevo div para cada personaje, con su nombre, imagen y otra información relevante.

Cómo usar
Para usar este proyecto, simplemente abre el archivo index.html en tu navegador. La información de los personajes se cargará automáticamente.

Dependencias
Este proyecto no tiene dependencias externas. Solo utiliza la API Fetch nativa de JavaScript para obtener datos y el DOM API para mostrarlos.

Si desea alguna informacion mas especifica del proyecto no se olvide contactar con ivan.garciamontalvo.23@campusfp.es
