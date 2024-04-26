# Ecommerce para Web 2 - ULP

Profesor Fernando Saez, le comento que en este .README podrá encontrar detalles sobre el proyecto en cuestión, desde como ha sido estructurado, que herramientas he utilizado, funcionalidades desarrolladas, capturas de distintas secciones o vistas y alguna que otra aclaración para poder levantarlo en local.

## Información para levantar proyecto en local
Este repositorio cuenta con dos ramas:

 - **main**: destinada a producción, es de la cual se alimenta el servidor donde se esta desplegando esta aplicación web y ademas sus URLs estan adaptadas para ese fin
 - **dev**:  rama que se deberia utilizar para levantar en local ya que apunta a localhost.

Ubicarse en rama dev
> git checkout dev

Instalar dependencias del proyecto
> npm install

Levantar servidor
> npm start

## Web desplegada en
https://web2-integrador-czw6.onrender.com/


## Arquitectura

Se trata de una aplicación de tipo MVC con persistencia de tipo relacional almacenada dentro del proyecto en un archivo *.db*.

## Herramientas y lenguaje utilizado

 - Node
 - Express
 - Pug
 - SQLite3
 - Javascript

### Directorios y archivos

Para facilitar el mantenimiento y modularización, opte para el backend propiamente dicho crear las carpetas de controllers, services, persistence, util, views y routes. Estas me permiten mantener ordenadas las peticiones, las rutas, los scripts utilitarios, las vistas ha renderizarse en cada situación y el script de generación de base de datos. Por otro lado, contaba con un directorio para servir los archivos estaticos que son utilizados por las vistas, entre ellos tenemos scripts para manipulacion de DOM y redireccionamiento, estilos separados para cada una de las vistas y las imagenes e iconos utilizados.

## Vistas y funcionalidades

 - Home
	 - Navbar con redireccionamientos de compras, productos y carrito que solo se muestra en caso de tener productos guardados (al igual que la cantidad numérica especificada sobre el carrito).
	 - Sección donde se pueden ver los tres productos con **mayor rating** y botones que permiten ir hacia la grilla de productos.
	 - Botón flotante para ir hacia el TOP, el mismo se puede visualizar en todas las vistas.
 - Productos
	 - Sección donde se puede visualizar las categorias existentes y filtrar por ellas.
	 - Grilla de productos con los datos especificados en la consigna del trabajo integrador.
	 - Botón que permite agregar al carrito de manera individual.
 - Carrito
	 - Listado de productos agregados al carrito con posibilidad de eliminar individualmente y cambiar la cantidad que se quiere comprar de ese mismo producto.
	 - De bajo de la sección antes descrita se encuentra un botón que nos permite vaciar el carrito por completo y redireccionar hacia Productos.
	 - Por otro lado tenemos el total de la potencial compra y la cantidad de productos, acompañados de un botón para efectivizar la compra, haciendo que aparezca un cartel por 2,5seg donde nos da un feedback de haber concretado la acción.
 - Compras
	 - En esta vista encontramos un historial de las compras realizadas, donde cada compra tiene un encabezado que muestra el Nro. de la compra, la fecha y hora en la que se efectuó y el monto total, este encabezado ese desplegable y permite ver cuales fueron los productos comprados en esa oportunidad.

## Imágenes ilustrativas
		
![image](https://github.com/gonnndc/web2-integrador/assets/73253272/93f230a5-f19f-47ce-a399-e2cf40f6979e)
## 
![image](https://github.com/gonnndc/web2-integrador/assets/73253272/48d33b62-5533-4565-9511-b2e70c896841)

## 

![image](https://github.com/gonnndc/web2-integrador/assets/73253272/35af4053-1d8c-47e9-a733-c34c3aa751c2)
## 
![image](https://github.com/gonnndc/web2-integrador/assets/73253272/1b01d1b3-5029-4efd-aa64-881febaa0549)

##
![image](https://github.com/gonnndc/web2-integrador/assets/73253272/312de6a4-ec0b-4faa-85f9-28242104f0fe)
## 
![image](https://github.com/gonnndc/web2-integrador/assets/73253272/a6192909-ded3-4858-ba67-8bb9c65ff87a)




Hecho por **Gonzalo Cabrera**
