# Exercise 2 of the course intensive of MERN stack

## **Scripts**

---

### *npm run build*: "npx tsc" - ejecuta el tsconfig y generara lo que se ha especificado en el, en estro caso genera una carpeta dist con la solucion index.js dentro

### *npm run start*: "node dist/index.js" - ejecutara el codigo transpilado de nuestro archivo index.ts

### *npm run dev*: "concurrently \\"npx tsc --watch\\" \\"nodemon -q dist/index.js\\" - ejecuta 2 comandos de manera concurrente, el primero de ellos lo que hace es escuchar cualquier modificacion en nuesto archivo index.ts para transpilarlalo y el segundo ejecuta un demon de nuestro proyecto en especifico de nuestro *dist/index.js*

## **Dependencias**

---

### **Globales**

### *express*: este es un framework de node que sirve para crear una aplicacion de backend con node

### *dotenv*: sirve para crear y manejar variables de entorno en todo el proyecto

* PORT:8000

### *helmet*: ayuda a proteger sus aplicaciones Express configurando varios encabezados HTTP

### *cors*: es un paquete de node.js para proporcionar un middleware Connect/Express que se puede usar para habilitar CORS con varias opciones

* CORS: es un mecanismo que permite que se puedan solicitar recursos restringidos en una página web desde un dominio diferente del dominio que sirvió el primer recurso

### **Dev**

### *TypeScript*: Dependencia necesaria para utilizar typescript el cual agrega tipos y otras funcionalidades a javascript

### *Nodemon*: sirve para automatizar el reinicio de el server tras un cambio en el proyecto

### *eslint*: sirve establecer reglas a la hora de programar lo que nos permite obtener codigo limpio y estandarizado

### *Concurrently*: ejecuta multiples comandos de manera concurrente
