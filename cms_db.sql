-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Mar-2020 às 20:57
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cms_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bateria`
--

CREATE TABLE `bateria` (
  `id` int(11) NOT NULL,
  `Surfista1` int(11) DEFAULT NULL,
  `Surfista2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `bateria`
--

INSERT INTO `bateria` (`id`, `Surfista1`, `Surfista2`) VALUES
(7, 5, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nota`
--

CREATE TABLE `nota` (
  `id` int(11) NOT NULL,
  `notaParcial1` decimal(10,5) DEFAULT NULL,
  `notaParcial2` decimal(10,5) DEFAULT NULL,
  `notaParcial3` decimal(10,5) DEFAULT NULL,
  `Onda` int(11) DEFAULT NULL,
  `DATA` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `nota`
--

INSERT INTO `nota` (`id`, `notaParcial1`, `notaParcial2`, `notaParcial3`, `Onda`, `DATA`) VALUES
(10, '10.00000', '9.00000', '10.00000', 1, '2020-03-30 18:38:36'),
(12, '10.00000', '10.00000', '10.00000', 1, '2020-03-30 18:39:29'),
(13, '9.00000', '9.00000', '9.00000', 1, '2020-03-30 18:40:02'),
(14, '10.00000', '10.00000', '10.00000', 2, '2020-03-30 18:40:23'),
(16, '10.00000', '10.00000', '10.00000', 2, '2020-03-30 18:46:46'),
(17, '10.00000', '10.00000', '10.00000', 2, '2020-03-30 18:49:53');

-- --------------------------------------------------------

--
-- Estrutura da tabela `onda`
--

CREATE TABLE `onda` (
  `id` int(11) NOT NULL,
  `Bateria` int(11) DEFAULT NULL,
  `Surfista` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `onda`
--

INSERT INTO `onda` (`id`, `Bateria`, `Surfista`) VALUES
(1, 7, 6),
(2, 7, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `surfista`
--

CREATE TABLE `surfista` (
  `numero` int(11) NOT NULL,
  `nome` varchar(254) NOT NULL,
  `pais` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `surfista`
--

INSERT INTO `surfista` (`numero`, `nome`, `pais`) VALUES
(5, 'Iago', 'Brasil'),
(6, 'Neves', 'Espanha');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `bateria`
--
ALTER TABLE `bateria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Bateria_Surfista1` (`Surfista1`),
  ADD KEY `FK_Bateria_Surfista2` (`Surfista2`);

--
-- Índices para tabela `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Nota_Onda` (`Onda`);

--
-- Índices para tabela `onda`
--
ALTER TABLE `onda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Onda_Bateria` (`Bateria`),
  ADD KEY `FK_Onda_Surfista` (`Surfista`);

--
-- Índices para tabela `surfista`
--
ALTER TABLE `surfista`
  ADD PRIMARY KEY (`numero`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `bateria`
--
ALTER TABLE `bateria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `onda`
--
ALTER TABLE `onda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `surfista`
--
ALTER TABLE `surfista`
  MODIFY `numero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `bateria`
--
ALTER TABLE `bateria`
  ADD CONSTRAINT `FK_Bateria_Surfista1` FOREIGN KEY (`Surfista1`) REFERENCES `surfista` (`numero`),
  ADD CONSTRAINT `FK_Bateria_Surfista2` FOREIGN KEY (`Surfista2`) REFERENCES `surfista` (`numero`);

--
-- Limitadores para a tabela `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `FK_Nota_Onda` FOREIGN KEY (`Onda`) REFERENCES `onda` (`id`);

--
-- Limitadores para a tabela `onda`
--
ALTER TABLE `onda`
  ADD CONSTRAINT `FK_Onda_Bateria` FOREIGN KEY (`Bateria`) REFERENCES `bateria` (`id`),
  ADD CONSTRAINT `FK_Onda_Surfista` FOREIGN KEY (`Surfista`) REFERENCES `surfista` (`numero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
