var db = openDatabase('ticketsbus', '1.0', 'Banco de Dados', 2 * 1024 * 1024);


//'CREATE TABLE Adicionar_Passagens (id_adicionar_passagens INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, quantidade_passagens INT NOT NULL, adicionar_data TEXT NOT NULL)'
db.transaction(function (Adicionar_Passagens) {
	Adicionar_Passagens.executeSql(
		'CREATE TABLE Adicionar_Passagens (id_adicionar_passagens INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, quantidade_passagens INT NOT NULL, adicionar_data TEXT NOT NULL)'
	);
});


//'CREATE TABLE Configurar_Passagem (id_configurar_passagem INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, quantas_passagem INT NOT NULL, valor_passagem DOUBLE NOT NULL)'
db.transaction(function (Configurar_Passagem) {
	Configurar_Passagem.executeSql(
		'CREATE TABLE Configurar_Passagem (id_configurar_passagem INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, quantas_passagem INT NOT NULL, valor_passagem DOUBLE NOT NULL)'
	);
});


//'CREATE TABLE Recarga_Passagem (id_recarga_passagem INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, valor_recarga_passagem DOUBLE NOT NULL, recarga_data DATE NOT NULL)'
db.transaction(function (Recarga_Passagem) {
	Recarga_Passagem.executeSql(
		'CREATE TABLE Recarga_Passagem (id_recarga_passagem INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, valor_recarga_passagem DOUBLE NOT NULL, recarga_data DATE NOT NULL)'
	);
});