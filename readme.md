# **Marvel app**

## Entendiendo el desafío:
* Api a consumir: [marvel](https://developer.marvel.com/docs)
* Objetivo: Hacer una API con 1 endpoint /character con 2 rutas:
  * /chatacter/:id : Busca en una base de datos el personaje de marvel cuyo id coincida.
  * /chatacter/:name: Busca en una base de datos el personaje de marvel cuyo nombre coincida.
* Base de datos a usar: [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## Flujo de la API:

Lo primero que tenemos que entender son los personajes de la api de marvel, estos siguen el siguiente esquema:

![Entidad Characer](./img/entidades.png)

Teniendo esto en cuenta tendremos las siguientes carpetas:

* models: Se encargará del modelo que se almacenará en moongose con el nombre de colección **Character**, además dicho modelo implementará su interfaz correspondiente que está dividida en distintas interfaces para modelar el héroe de marvel correspondiente.
* repositories: Contendrá una clase que **CharacterRepositorie** que se encargará de representar el comportamiento de todas nuestras peticiones a la base de datos con respecto a dicha colección.
* services: Esta carpeta se centrará en la lógica de negocios, desconociendo los protocolos HTTP para encapsular lo máximo las funcionalidades siguiendo un poco la filosofía *Dont ask, tell*.
* controllers:
* routes:
* middlwares:

El flujo de la API en la primera petición de cada día sería:
