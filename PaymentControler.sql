USE ExpensesController;

  CREATE TABLE pagamento (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      tipo VARCHAR(45) NOT NULL
  );
  
  INSERT INTO pagamento (tipo)
	VALUES
    ('Dinheiro'),
    ('Débito'),
    ('Crédito'),
    ('Pix');
    
  CREATE TABLE categorias (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      descricao VARCHAR(100) NOT NULL
  );
  
  INSERT INTO categorias (nome, descricao)
	VALUES
    ('Casa', 'Despesas fixas como condomínio'),
    ('Filhos', 'Despesas fixas como escola e plano de saúde'),
    ('Supermercado', 'Despesas fixas como alimentação e produtos de limpeza'),
    ('Variáiveis', 'Despesas não programadas como comer fora e viagens');
    
CREATE TABLE despesas (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      valor INT NOT NULL,
      data_da_compra DATE,
      descricao VARCHAR(100) NOT NULL,
      tipo_pagamento_id INT NOT NULL,
      categoria_id INT NOT NULL,
      FOREIGN KEY  (tipo_pagamento_id) REFERENCES pagamento (id),
      FOREIGN KEY  (categoria_id) REFERENCES categorias (id)
);