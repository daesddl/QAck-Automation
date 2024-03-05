git pull --all //jalar todo de remoto a local, todos los banches, todos los cambios, casi lo mismo que fetch, primero fetch y luego pull, pero en realidad pull engloba fetch y mas
git checkout <Branch_Name> //apuntar o localizarse sobre el branch
git status //para ver los cambios realizados antes de commit
git add . //agregar todos los cambios al sig commit
git add * //agregar todos los cambios al sig commit
git add <File_Name> //agregar solo el cambio del archivo indicado al sig commit
git restore <File_Name> //descartar los cambios del archivo indicado al sig commit
git restore --staged <File_Name> //deshacer el add, el path no debe contener espacios, si tiene ponerlo entre comillas para que se tome todo como un solo path, ex "Learning JS/timeConversion.js"
git commit -m "<mensaje_commit>" //hacer commit con titulo
git log //historial de commits del branch, desc order -> el numerote del commit es un hash, un identificador del commit, al cual puedo acceder con un checkout. Para salir del log presionar Q (de quit)
- EX. 
	- git checkout 1d1040197a4b2b642b1234f3c6f74edbef919498
	- Origin es donde se encuentra remoto
	- Head es el ultimo cambio
	- El nombre del branch es mi posicion, en que commit estoy 
git push origin Branch-1 //empujar de local a remoto al branch en el que estoy, a remto al branch indicado
git checkout -b "<New_Branch>" //crear un nuevo brach y posicionarme en el, -b = branch
git merge <Branch_X_Name> <Branch_Y_Name> <Branch_Z_Name> //combinar varios branches en un mismo commit
npm install //instalar la paquetria declarada en el package.json, para localmente tener esos paquetes, en remoto no estan hasta que lo ejecutas en remoto pa que no pese
npm run <Script_Name> //<Script_Name> se obtiene del package.json en la secciono de scripts

FILES
package.json //se indican los paquetes y en la seccion de dependencias
package-lock.json //se crea en automatico segun package.json
.gitignore //aqui se indica todo lo que se va ignorar al momento de hacer un commit

Fork = Ramificar el proyecto a otra persona, conviriendo este nuevo branch en un nuevo proy, se pierte el punto de origen y otros branch no relacionados con el nuevo main
Fetch = Actualizar local con remoto

npm run lint //code format
