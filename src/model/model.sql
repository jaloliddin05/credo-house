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
total_area decimal(10,2) not null,
kv_metr_price numeric not null,
complex_id uuid not null,
FOREIGN KEY(complex_id) REFERENCES complexes(complex_id) ON DELETE CASCADE
);

CREATE TABLE banks(
bank_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
bank_name text not null,
starting_payment_procent decimal(10,2) not null,
bank_img text not null,
bank_money numeric not null
);



INSERT INTO companies(company_name) values
('Murad buildings'),
('Golden House'),
('Bizning Uylar'),
('Olmazor City'),
('Tashkent City'),
('Akay City'),
('Trilion');

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
(2,,,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(3,,,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(4,,,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(5,,,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(6,,,'bfa90250-470d-4bf1-a4d3-798f992c11db'),
(2,,,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(3,,,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(4,,,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(5,,,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(6,,,'92c35feb-525a-44e6-9b0b-66d07c99ea01'),
(2,,,'85df2d29-b380-483c-933e-880d70622f35'),
(3,,,'85df2d29-b380-483c-933e-880d70622f35'),
(4,,,'85df2d29-b380-483c-933e-880d70622f35'),
(5,,,'85df2d29-b380-483c-933e-880d70622f35'),
(6,,,'85df2d29-b380-483c-933e-880d70622f35'),
(2,,,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(3,,,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(4,,,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(5,,,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(6,,,'850c22dc-746d-4798-bdb3-0cfe7706ab95'),
(2,,,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(3,,,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(4,,,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(5,,,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(6,,,'b6e156e5-2e2c-43bb-9151-1f7602f62256'),
(2,,,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(3,,,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(4,,,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(5,,,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(6,,,'77c091cc-44cc-44ca-a52e-8328bceb99ed'),
(2,,,'122af27b-7d92-43c9-b639-8929f4023a41'),
(3,,,'122af27b-7d92-43c9-b639-8929f4023a41'),
(4,,,'122af27b-7d92-43c9-b639-8929f4023a41'),
(5,,,'122af27b-7d92-43c9-b639-8929f4023a41'),
(6,,,'122af27b-7d92-43c9-b639-8929f4023a41'),
(2,,,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(3,,,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(4,,,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(5,,,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(6,,,'d3b87313-49cd-46a2-b66e-994f15d57346'),
(2,,,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(3,,,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(4,,,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(5,,,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(6,,,'64cc179a-e99f-443a-a98c-65e35a04e9d2'),
(2,,,'c7e44a50-288c-443c-a160-bdac482be265'),
(3,,,'c7e44a50-288c-443c-a160-bdac482be265'),
(4,,,'c7e44a50-288c-443c-a160-bdac482be265'),
(5,,,'c7e44a50-288c-443c-a160-bdac482be265'),
(6,,,'c7e44a50-288c-443c-a160-bdac482be265'),
(2,,,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(3,,,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(4,,,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(5,,,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(6,,,'91c99fc5-35aa-4f8c-af46-2d6a010173d7'),
(2,,,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(3,,,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(4,,,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(5,,,'56c8ce9b-ba52-49f3-a0b8-e184293527ae'),
(6,,,'56c8ce9b-ba52-49f3-a0b8-e184293527ae');