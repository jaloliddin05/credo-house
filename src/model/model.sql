CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE companies(
company_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
company_name text not null,
company_img text
);

CREATE TABLE complexes(
complex_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
complex_name text not null,
complex_adress text not null,
company_id uuid not null,
FOREIGN KEY(company_id) REFERENCES companies(company_id) ON DELETE CASCADE
);

CREATE TABLE rooms(
room_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
room_count int not null,
total_area decimal not null,
kv_metr_price numeric not null,
complex_id uuid not null,
FOREIGN KEY(complex_id) REFERENCES complexes(complex_id) ON DELETE CASCADE
);

CREATE TABLE banks(
bank_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
bank_name text not null,
starting_payment_procent decimal(10,2) not null,
bank_img text not null,
bank_money numeric not null,
credit_year INT[] not null
);


create table statistic(
    statistic_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    company_id uuid not null,
    complex_id uuid not null,
    room_id uuid not null,
    bank_id uuid not null
);


INSERT INTO companies(company_name) values
('Murad buildings'),
('Golden House'),
('Bizning Uylar'),
('Olmazor City'),
('Tashkent City'),
('Akay City');

--Company Images updated


INSERT INTO complexes(complex_name,complex_adress,company_id) values
('Nestone','49а O`zbekiston shoh ko`chasi, Tashkent','2a359ae8-5f6e-4bd0-8d56-767ec3acc1dc'),
('Millenium','89MG+JC8, Tashkent','2a359ae8-5f6e-4bd0-8d56-767ec3acc1dc'),
('Greenwich','O`zbekiston, Toshkent, MIROBOD TUMANI, ko`chasi YANGI ZAMON','c6e34136-d8dd-4338-8e65-35f8eab30978'),
('Infinity','30-34 Istiqbol ko`chasi, Тошкент','c6e34136-d8dd-4338-8e65-35f8eab30978'),
('Manzara','Yunusobod Manzara','84443b54-f608-460f-81e8-e418230413eb'),
('Olmazor City','Tashkent,Olmazor','84443b54-f608-460f-81e8-e418230413eb'),
('Residence','Toshkent shahar, Sergeli tuman, Birlik kocha','20af60d3-ccf0-45b6-b5cc-b2865904c5d4'),
('Moderno','Toshkent,Yakkasaroy, Solaris','20af60d3-ccf0-45b6-b5cc-b2865904c5d4'),
('FELICITÀ','Toshkent shahar, Yakkasaroy, 25','4e4c8268-f74a-48c7-92e9-9b2177363455'),
('Do`stlar','Toshkent,Kvartal S-5','4e4c8268-f74a-48c7-92e9-9b2177363455'),
('HI-TECH APARTMENTS','Tashkent,Chilonzor','7232d650-1f7f-425c-8610-b764d874bfaf'),
('CLASSIC APARTMENTS','Tashkent,Chilonzor','7232d650-1f7f-425c-8610-b764d874bfaf');

INSERT INTO rooms(room_count,total_area,kv_metr_price,complex_id) values
(2,50,6000000,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(3,67,6000000,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(4,90,6000000,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(5,118,6000000,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(6,144,6000000,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(2,51,7500000,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(3,70,7500000,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(4,95,7500000,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(5,120,7500000,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(6,155,7500000,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(2,48,6500000,'85df2d29-b380-483c-933e-880d70622f35'),
(3,65,6500000,'85df2d29-b380-483c-933e-880d70622f35'),
(4,92,6500000,'85df2d29-b380-483c-933e-880d70622f35'),
(5,128,6500000,'85df2d29-b380-483c-933e-880d70622f35'),
(6,150,6500000,'85df2d29-b380-483c-933e-880d70622f35'),
(2,44,8000000,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(3,64,8000000,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(4,88,8000000,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(5,114,8000000,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(6,142,8000000,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(2,51,5500000,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(3,71,5500000,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(4,98,5500000,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(5,128,5500000,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(6,151,5500000,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(2,48,8500000,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(3,64,8500000,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(4,90,8500000,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(5,128,8500000,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(6,152,8500000,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(2,54, 9000000,'122af27b-7d92-43c9-b639-8929f4023a41'),
(3,70, 9000000,'122af27b-7d92-43c9-b639-8929f4023a41'),
(4,99, 9000000,'122af27b-7d92-43c9-b639-8929f4023a41'),
(5,130, 9000000,'122af27b-7d92-43c9-b639-8929f4023a41'),
(6,158, 9000000,'122af27b-7d92-43c9-b639-8929f4023a41'),
(2,49,8200000,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(3,68,8200000,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(4,93,8200000,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(5,128,8200000,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(6,150,8200000,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(2,55,10000000,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(3,73,10000000,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(4,105,10000000,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(5,139,10000000,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(6,165,10000000,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(2,52,9500000,'c7e44a50-288c-443c-a160-bdac482be265'),
(3,72,9500000,'c7e44a50-288c-443c-a160-bdac482be265'),
(4,98,9500000,'c7e44a50-288c-443c-a160-bdac482be265'),
(5,130,9500000,'c7e44a50-288c-443c-a160-bdac482be265'),
(6,158,9500000,'c7e44a50-288c-443c-a160-bdac482be265'),
(2,53,10500000,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(3,77,10500000,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(4,100,10500000,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(5,129,10500000,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(6,155,10500000,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(2,53,11000000,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(3,78,11000000,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(4,106,11000000,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(5,140,11000000,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(6,170,11000000,'56c8ce9b-ba52-49f3-a0b8-e184293527ae');


INSERT INTO banks(bank_name,starting_payment_procent,bank_img,bank_money,credit_year) values
('Ipoteka bank',18,'https://onmap.uz/blog/wp-content/uploads/2020/02/ipoteka_bank.png',700000000,ARRAY[10,12,15,18,20]),
('Asaka bank',17,'https://logobank.uz:8005/media/logos_png/Asakabank_new-01.png',800000000,ARRAY[10,15,20]),
('Agrobank',14,'https://uba.uz/upload/iblock/374/agrobank.jpg',500000000,ARRAY[5,8,12]),
('NBU O`zm bank',15,'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/NBU_new_logo.jpg/640px-NBU_new_logo.jpg',2000000000,ARRAY[10,15,20,25]),
('Hamkor bank',20,'https://bank.uz/upload/iblock/9c8/9c8fb2ccf2b5cf0e59d78c6915ba0311.png',450000000,ARRAY[5,10,15]),
('Aloqa bank',19,'https://old.aloqabank.uz/files////aloqabank20167.png',1200000000,ARRAY[10,15,20,25]),
('Xalq bank',20,'https://bank.uz/upload/iblock/43f/43f293773967dfc7bab91e8751f12d7f.png',1600000000,ARRAY[10,15,20,25]);