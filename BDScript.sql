/*
Para cargar el Script
SOURCE S:\temp\BDFinal\BDScript.sql

En caso de que no permita insertar registros, se tendrá que eliminar todas las llaves,
insertar los registros correspondientes y posteriormente agregar las PK y FK de nuevo, para esto:
ALTER TABLE table_name DROP FOREIGN KEY constraint_name; 

*/
CREATE DATABASE AdminSystemDB;
USE AdminSystemDB;

/*Create tables*/
CREATE TABLE Trabajadores (id_t NUMERIC, nombre_t VARCHAR(30), apepat_t VARCHAR(30), apemat_t VARCHAR(30));
CREATE TABLE Sueldos (id_s NUMERIC, id_t NUMERIC, comision NUMERIC, trabajos_realizados NUMERIC, sueldo_estimado NUMERIC);
CREATE TABLE Clientes (id_c NUMERIC, nombre_c VARCHAR(30), apepat_c VARCHAR(30), apemat_c VARCHAR(30), clave_pedidos VARCHAR(3), id_d NUMERIC);
CREATE TABLE Productos (id_p NUMERIC, id_a NUMERIC, nombre_p VARCHAR(30), descripcion_p VARCHAR(100), precio_p NUMERIC, stock_p NUMERIC);
CREATE TABLE Almacenes (id_a NUMERIC, cap_total NUMERIC, cap_actual NUMERIC, id_o NUMERIC);
CREATE TABLE Facturas (id_f NUMERIC, id_c NUMERIC, id_p NUMERIC, cant NUMERIC, precio_p NUMERIC, total NUMERIC, id_e NUMERIC);
CREATE TABLE Origen_E (id_o NUMERIC,  dir_origen VARCHAR(30));
CREATE TABLE Destino_E (id_d NUMERIC,  dir_destino VARCHAR(30));
CREATE TABLE Envios (id_e NUMERIC, id_o NUMERIC, id_d NUMERIC);

/*Inserts*/

INSERT INTO Origen_E(id_o, dir_origen) VALUES (1, "San Luis Potosí");
INSERT INTO Origen_E(id_o, dir_origen) VALUES (2, "Sonora");
INSERT INTO Origen_E(id_o, dir_origen) VALUES (3, "Yucatán");
INSERT INTO Origen_E(id_o, dir_origen) VALUES (4, "Jalisco");
INSERT INTO Origen_E(id_o, dir_origen) VALUES (5, "Veracruz");

INSERT INTO Destino_E(id_d,  dir_destino) VALUES (1, "CDMX");
INSERT INTO Destino_E(id_d,  dir_destino) VALUES (2, "Aguascalientes");
INSERT INTO Destino_E(id_d,  dir_destino) VALUES (3, "Sonora");
INSERT INTO Destino_E(id_d,  dir_destino) VALUES (4, "Monterrey");
INSERT INTO Destino_E(id_d,  dir_destino) VALUES (5, "Guanajuato");

INSERT INTO Trabajadores(id_t, nombre_t, apepat_t, apemat_t) VALUES (1, "Juan", "Hernández", "Gonzalez");
INSERT INTO Trabajadores(id_t, nombre_t, apepat_t, apemat_t) VALUES (2, "José", "García", "Pérez");
INSERT INTO Trabajadores(id_t, nombre_t, apepat_t, apemat_t) VALUES (3, "Luis", "Martinez", "Rodriguez");
INSERT INTO Trabajadores(id_t, nombre_t, apepat_t, apemat_t) VALUES (4, "Maria", "Ramirez", "Sánchez");
INSERT INTO Trabajadores(id_t, nombre_t, apepat_t, apemat_t) VALUES (5, "Guadalupe", "López", "Cruz");

INSERT INTO Sueldos(id_s, id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (1, 1, 500, 6, 3000);
INSERT INTO Sueldos(id_s, id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (2, 2, 400, 7, 2800);
INSERT INTO Sueldos(id_s, id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (3, 3, 300, 8, 2400);
INSERT INTO Sueldos(id_s, id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (4, 4, 200, 9, 1800);
INSERT INTO Sueldos(id_s, id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (5, 5, 100, 5, 500);

INSERT INTO Clientes(id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES (1, "Sandra", "Huerta", "Serna", "SHS", 2);
INSERT INTO Clientes(id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES (2, "Miguel", "Flores", "López", "MFL", 3);
INSERT INTO Clientes(id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES (3, "Daniel", "Maldonado", "Rosales", "DMR", 4);
INSERT INTO Clientes(id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES (4, "Alondra", "Gutierrez", "Mayorga", "AGM", 5);
INSERT INTO Clientes(id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES (5, "Gilberto", "Padilla", "Villalobos", "GPV", 1);

INSERT INTO Almacenes(id_a, cap_total, cap_actual, id_o) VALUES (1, 1000, 500,1);
INSERT INTO Almacenes(id_a, cap_total, cap_actual, id_o) VALUES (2, 1234, 1000,1);
INSERT INTO Almacenes(id_a, cap_total, cap_actual, id_o) VALUES (3, 4321, 2110,2);
INSERT INTO Almacenes(id_a, cap_total, cap_actual, id_o) VALUES (4, 3241, 1120,3);
INSERT INTO Almacenes(id_a, cap_total, cap_actual, id_o) VALUES (5, 2341, 1120,4);

INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (1, 5, "Mouse", "Mouse de caracter gaming, ideal para ganar", 500, 200);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (2, 4, "Tarjeta Grafica", "Nvidia RTX 3060TI, a 200FPS", 5000, 100);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (3, 3, "RAM", "32GB de memoria de procesamiento", 3000, 100);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (4, 2, "SSD", "512GB de almacenamiento", 1500, 200);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (5, 1, "HDD", "1TB de almacenamiento", 1000, 300);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (6, 1, "Monitor", "de 32 Pulgadas marca LG", 3000, 50);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (7, 2, "Teclado", "Luces RGB, mecánico", 800, 200);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (8, 3, "Gamepad", "Compatible con PC, XBOX, PLAYSTATION, NINTENDO", 1500, 200);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (9, 4, "SteamKey", "Clave Steam para algún juego de la plataforma", 200, 500);
INSERT INTO Productos(id_p, id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (10, 5, "Procesador", "Intel, 11va Generación", 6000, 100);

INSERT INTO Envios(id_e, id_o, id_d) VALUES (1, 5, 3);
INSERT INTO Envios(id_e, id_o, id_d) VALUES (2, 4, 4);
INSERT INTO Envios(id_e, id_o, id_d) VALUES (3, 3, 5);
INSERT INTO Envios(id_e, id_o, id_d) VALUES (4, 2, 2);
INSERT INTO Envios(id_e, id_o, id_d) VALUES (5, 1, 1);

INSERT INTO Facturas(id_f, id_c, id_p, cant, precio_p, total, id_e) VALUES (1, 1, 6, 2, 3000, 6000, 5);
INSERT INTO Facturas(id_f, id_c, id_p, cant, precio_p, total, id_e) VALUES (2, 2, 7, 1, 800, 800, 4);
INSERT INTO Facturas(id_f, id_c, id_p, cant, precio_p, total, id_e) VALUES (3, 3, 8, 4, 1500, 6000, 3);
INSERT INTO Facturas(id_f, id_c, id_p, cant, precio_p, total, id_e) VALUES (4, 3, 3, 1, 3000, 3000, 2);
INSERT INTO Facturas(id_f, id_c, id_p, cant, precio_p, total, id_e) VALUES (5, 4, 2, 1, 5000, 5000, 1);

/*PK's*/
ALTER TABLE Trabajadores ADD PRIMARY KEY (id_t);
ALTER TABLE Sueldos ADD PRIMARY KEY (id_s);
ALTER TABLE Clientes ADD PRIMARY KEY (id_c);
ALTER TABLE Productos ADD PRIMARY KEY (id_p);
ALTER TABLE Almacenes ADD PRIMARY KEY (id_a);
ALTER TABLE Facturas ADD PRIMARY KEY (id_f);
ALTER TABLE Origen_E ADD PRIMARY KEY (id_o);
ALTER TABLE Destino_E ADD PRIMARY KEY (id_d);
ALTER TABLE Envios ADD PRIMARY KEY (id_e);

/*FK's*/
ALTER TABLE Sueldos ADD FOREIGN KEY (id_t) REFERENCES Trabajadores(id_t) ON UPDATE CASCADE;
ALTER TABLE Envios ADD FOREIGN KEY (id_o) REFERENCES Origen_E(id_o) ON UPDATE CASCADE;
ALTER TABLE Envios ADD FOREIGN KEY (id_d) REFERENCES Destino_E(id_d) ON UPDATE CASCADE;
ALTER TABLE Almacenes ADD FOREIGN KEY (id_o) REFERENCES Origen_E(id_o) ON UPDATE CASCADE;
ALTER TABLE Productos ADD FOREIGN KEY (id_a) REFERENCES Almacenes(id_a) ON UPDATE CASCADE;
ALTER TABLE Clientes ADD FOREIGN KEY (id_d) REFERENCES Destino_E(id_d) ON UPDATE CASCADE;
ALTER TABLE Facturas ADD FOREIGN KEY (id_c) REFERENCES Clientes(id_c) ON UPDATE CASCADE;
ALTER TABLE Facturas ADD FOREIGN KEY (id_p) REFERENCES Productos(id_p) ON UPDATE CASCADE;
ALTER TABLE Facturas ADD FOREIGN KEY (id_e) REFERENCES Envios(id_e) ON UPDATE CASCADE;
