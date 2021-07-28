## Configuración Básica

Listar todos los archivos del directorio actual
```ssh
	ls
```
Lista todo los archivos que estan ocultos
```ssh	
	ls -a
```
Lista todos los archivos con sus propiedades.
```ssh
	ls -l
```
Muestra la ubicación actual.
```ssh
	pwd
```
Se mueve a un directorio.
```ssh
	cd
```
Se mueve a la carpeta raíz.
```ssh
	cd ~
```
Mueve al último directorio.
```ssh
	cd -
```
Crea un directorio.
```ssh
	mkdir
```
Copia un archivo.
```ssh
	cp <ruta del archivo a copiar> <ruta de destino>
```
Remueve un archivo. Ejemplo rm test.py
```ssh
	rm <test.py>
```
Remueve un directorio. No se puede borrar un directorio que tiene archivos adentro.
```ssh
	rmdir
```