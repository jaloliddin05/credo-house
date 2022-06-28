CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE companies(
company_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
company_name text not null
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