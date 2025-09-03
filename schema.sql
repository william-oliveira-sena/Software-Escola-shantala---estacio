-- Tabela para gerenciar os alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco TEXT,
    status ENUM('ativo', 'inativo', 'formado') DEFAULT 'ativo'
);

-- Tabela para gerenciar os cursos oferecidos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    duracao_horas INT,
    preco DECIMAL(10, 2)
);

-- Tabela para gerenciar as turmas
CREATE TABLE turmas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    id_curso INT,
    professor VARCHAR(255),
    data_inicio DATE,
    data_fim DATE,
    FOREIGN KEY (id_curso) REFERENCES cursos(id)
);

-- Tabela que representa a inscrição de alunos em turmas
-- Esta tabela cria uma relação N:N (Muitos para Muitos) entre alunos e turmas
CREATE TABLE matriculas (
    id_aluno INT,
    id_turma INT,
    PRIMARY KEY (id_aluno, id_turma),
    FOREIGN KEY (id_aluno) REFERENCES alunos(id),
    FOREIGN KEY (id_turma) REFERENCES turmas(id)
);

-- Tabela para armazenar as notas e avaliações dos alunos
CREATE TABLE avaliacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT,
    id_turma INT,
    materia VARCHAR(255) NOT NULL,
    nota DECIMAL(4, 2) NOT NULL,
    data DATE,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id),
    FOREIGN KEY (id_turma) REFERENCES turmas(id)
);

-- Tabela para registrar alunos formados
-- Isso pode ser gerenciado por queries, mas uma tabela dedicada pode ser útil
CREATE TABLE formandos (
    id_aluno INT PRIMARY KEY,
    data_formatura DATE NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id)
);







