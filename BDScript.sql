/*
Para cargar el Script
SOURCE S:\temp\BDFinal\AdminSystem\BDScript.sql

En caso de que no permita insertar registros, se tendrá que eliminar todas las llaves,
insertar los registros correspondientes y posteriormente agregar las PK y FK de nuevo, para esto:
ALTER TABLE table_name DROP FOREIGN KEY constraint_name; 

*/
CREATE DATABASE adminsystemdb;
USE adminsystemdb;

/*Create tables*/
CREATE TABLE trabajadores (
    id_t INT AUTO_INCREMENT,
    nombre_t VARCHAR(30),
    apepat_t VARCHAR(30),
    apemat_t VARCHAR(30),
    PRIMARY KEY (id_t)
);

CREATE TABLE sueldos (
    id_s INT AUTO_INCREMENT,
    id_t INT,
    comision NUMERIC,
    trabajos_realizados NUMERIC,
    sueldo_estimado NUMERIC,
    PRIMARY KEY (id_s)
);

CREATE TABLE clientes (
    id_c INT AUTO_INCREMENT,
    nombre_c VARCHAR(30),
    apepat_c VARCHAR(30),
    apemat_c VARCHAR(30),
    clave_pedidos VARCHAR(3),
    id_d INT,
    PRIMARY KEY (id_c)
);

CREATE TABLE productos (
    id_p INT AUTO_INCREMENT,
    id_a INT,
    nombre_p VARCHAR(30),
    descripcion_p VARCHAR(100),
    precio_p NUMERIC,
    stock_p NUMERIC,
    PRIMARY KEY (id_p)
);

CREATE TABLE almacenes (
    id_a INT AUTO_INCREMENT,
    cap_total NUMERIC,
    cap_actual NUMERIC,
    id_o INT,
    PRIMARY KEY (id_a)
);

CREATE TABLE facturas (
    id_f INT AUTO_INCREMENT,
    id_c INT,
    id_p INT,
    cant NUMERIC,
    precio_p NUMERIC,
    total NUMERIC,
    id_e INT,
    PRIMARY KEY (id_f)
);

CREATE TABLE origen_e (
    id_o INT AUTO_INCREMENT,
    dir_origen VARCHAR(50),
    PRIMARY KEY (id_o)
);

CREATE TABLE destino_e (
    id_d INT AUTO_INCREMENT,
    dir_destino VARCHAR(30),
    PRIMARY KEY (id_d)
);

CREATE TABLE envios (
    id_e INT AUTO_INCREMENT,
    id_o INT,
    id_d INT,
    PRIMARY KEY (id_e)
);

/*Inserts*/
INSERT INTO origen_e(dir_origen) VALUES ("Estado de Mexico");
INSERT INTO origen_e(dir_origen) VALUES ("Jalisco");
INSERT INTO origen_e(dir_origen) VALUES ("Nuevo Leon");
INSERT INTO origen_e(dir_origen) VALUES ("Oaxaca");
INSERT INTO origen_e(dir_origen) VALUES ("Puebla");
INSERT INTO origen_e(dir_origen) VALUES ("San Luis Potosi");
INSERT INTO origen_e(dir_origen) VALUES ("Sinaloa");
INSERT INTO origen_e(dir_origen) VALUES ("Zacatecas");

INSERT INTO destino_e(dir_destino) VALUES ("Baja California");
INSERT INTO destino_e(dir_destino) VALUES ("Aguascalientes");
INSERT INTO destino_e(dir_destino) VALUES ("Campeche");
INSERT INTO destino_e(dir_destino) VALUES ("CDMX");
INSERT INTO destino_e(dir_destino) VALUES ("Durango");
INSERT INTO destino_e(dir_destino) VALUES ("Sonora");
INSERT INTO destino_e(dir_destino) VALUES ("Tamaulipas");
INSERT INTO destino_e(dir_destino) VALUES ("Tlaxcala");
INSERT INTO destino_e(dir_destino) VALUES ("Veracruz");
INSERT INTO destino_e(dir_destino) VALUES ("Yucatán");

INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Juan", "Hernandez", "Gonzalez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Jose", "Garcia", "Perez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Luis", "Martinez", "Rodriguez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Maria", "Ramirez", "Sanchez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Guadalupe", "Lopez", "Cruz");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Manuel", "Guerrero", "Juarez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Angel", "Flores", "Hernandez");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Jaqueline", "Rodriguez", "Cruz");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Joel", "Carreon", "Plascencia");
INSERT INTO trabajadores(nombre_t, apepat_t, apemat_t) VALUES ("Monica", "Guel", "Hernandez");

INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (1, 500, 6, 3000);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (2, 400, 7, 2800);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (3, 300, 8, 2400);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (4, 200, 9, 1800);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (5, 100, 5, 500);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (6, 300, 6, 1600);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (7, 200, 5, 2100);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (8, 100, 8, 3000);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (9, 400, 2, 2500);
INSERT INTO sueldos(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES (10, 200, 5, 600);

INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Sandra", "Huerta", "Serna", "SHS", 2);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Miguel", "Flores", "Lopez", "MFL", 3);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Daniel", "Maldonado", "Rosales", "DMR", 1);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Alondra", "Gutierrez", "Mayorga", "AGM", 5);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Gilberto", "Padilla", "Villalobos", "GPV", 1);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Alejandra", "Negrete", "Pedroza", "ANP", 6);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Itzel", "Cruz", "Navarro", "ICN", 4);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Melissa", "Villalobos", "Padilla", "MVP", 1);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Karen", "Aguilera", "Martinez", "KAM", 8);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Luis", "Navarro", "Cruz", "LNC", 7);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("David", "Mendoza", "Torres", "DMT", 10);
INSERT INTO clientes(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("Gema", "Menchaca", "Torres", "GMT", 9);

INSERT INTO almacenes(cap_total, cap_actual, id_o) VALUES (1000, 500,1);
INSERT INTO almacenes(cap_total, cap_actual, id_o) VALUES (1234, 1000,1);
INSERT INTO almacenes(cap_total, cap_actual, id_o) VALUES (4321, 2110,2);
INSERT INTO almacenes(cap_total, cap_actual, id_o) VALUES (3241, 1120,3);
INSERT INTO almacenes(cap_total, cap_actual, id_o) VALUES (2341, 1120,4);

/*precio_p > 1000;  stock_p >= 100;*/
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (5, "Mouse", "Mouse de caracter gaming, ideal para ganar", 500, 200);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (4, "Tarjeta Grafica", "Nvidia RTX 3060TI, a 200FPS", 5000, 100);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (3, "RAM", "32GB de memoria de procesamiento", 3000, 100);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (2, "SSD", "512GB de almacenamiento", 1500, 200);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (1, "HDD", "1TB de almacenamiento", 1000, 300);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (1, "Monitor", "de 32 Pulgadas marca LG", 3000, 50);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (2, "Teclado", "Luces RGB, mecánico", 800, 200);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (3, "Gamepad", "Compatible con PC, XBOX, PLAYSTATION, NINTENDO", 1500, 200);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (4, "SteamKey", "Clave Steam para algún juego de la plataforma", 200, 500);
INSERT INTO productos(id_a, nombre_p, descripcion_p, precio_p, stock_p) VALUES (5, "Procesador", "Intel, 11va Generación", 6000, 100);

INSERT INTO envios(id_o, id_d) VALUES (5, 3);
INSERT INTO envios(id_o, id_d) VALUES (4, 4);
INSERT INTO envios(id_o, id_d) VALUES (3, 5);
INSERT INTO envios(id_o, id_d) VALUES (6, 2);
INSERT INTO envios(id_o, id_d) VALUES (2, 2);
INSERT INTO envios(id_o, id_d) VALUES (1, 1);
INSERT INTO envios(id_o, id_d) VALUES (8, 2);
INSERT INTO envios(id_o, id_d) VALUES (5, 2);
INSERT INTO envios(id_o, id_d) VALUES (8, 6);
INSERT INTO envios(id_o, id_d) VALUES (7, 7);
INSERT INTO envios(id_o, id_d) VALUES (4, 10);
INSERT INTO envios(id_o, id_d) VALUES (5, 9);
INSERT INTO envios(id_o, id_d) VALUES (8, 8);


/*precio_p > 1500 && precio_p <= 3000*/
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (1, 6, 2, 3000, 6000, 2);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (2, 7, 1, 800, 800, 4);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (3, 8, 4, 1500, 6000, 3);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (3, 3, 1, 3000, 3000, 3);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (4, 2, 1, 5000, 5000, 1);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (6, 10, 8, 1520, 12160, 13);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (6, 1, 2, 500, 1000, 13);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (5, 5, 1, 4000, 4000, 6);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (10, 1, 1, 1600, 1600, 5);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (9, 9, 3, 2400, 7200, 10);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (7, 8, 1, 200, 200, 7);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (7, 4, 5, 4500, 22500, 12);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (7, 7, 10, 3000, 30000, 12);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (11, 3, 1, 2560, 2560, 8);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (12, 6, 2, 300, 600, 11);
INSERT INTO facturas(id_c, id_p, cant, precio_p, total, id_e) VALUES (8, 2, 4, 2999, 11996, 9);

/*FK's*/
ALTER TABLE sueldos ADD FOREIGN KEY (id_t) REFERENCES trabajadores(id_t) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE envios ADD FOREIGN KEY (id_o) REFERENCES origen_e(id_o) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE envios ADD FOREIGN KEY (id_d) REFERENCES destino_e(id_d) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE almacenes ADD FOREIGN KEY (id_o) REFERENCES origen_e(id_o) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE productos ADD FOREIGN KEY (id_a) REFERENCES almacenes(id_a) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE clientes ADD FOREIGN KEY (id_d) REFERENCES destino_e(id_d) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE facturas ADD FOREIGN KEY (id_c) REFERENCES clientes(id_c) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE facturas ADD FOREIGN KEY (id_p) REFERENCES productos(id_p) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE facturas ADD FOREIGN KEY (id_e) REFERENCES envios(id_e) ON UPDATE CASCADE ON DELETE CASCADE;

/*Fragmentación Horizontal*/
CREATE VIEW productos1 AS SELECT * FROM productos WHERE precio_p > 1000;
CREATE VIEW productos2 AS SELECT * FROM productos WHERE stock_p >= 100;
CREATE VIEW facturas1 AS SELECT * FROM facturas WHERE precio_p > 1500 && precio_p <= 3000;
CREATE VIEW sueldos1 AS SELECT * FROM sueldos WHERE sueldo_estimado > 2000;
CREATE VIEW clientes1 AS SELECT * FROM clientes WHERE id_d = 2;