-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2022-10-10 04:15:41
-- サーバのバージョン： 10.4.24-MariaDB
-- PHP のバージョン: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `mini_full_stack_react_redux_express_mysql`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `goal`
--

CREATE TABLE `goal` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `text` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `goal`
--

INSERT INTO `goal` (`id`, `user_id`, `text`, `createdAt`, `updatedAt`) VALUES
(2, NULL, 'abc', '2022-10-10 00:00:00', '2022-10-10 00:00:00'),
(3, NULL, 'efg', '2022-10-10 00:00:00', '2022-10-10 00:00:00'),
(4, NULL, 'efg', '2022-10-10 01:25:30', '2022-10-10 00:00:00'),
(5, NULL, 'efg', '2022-10-10 01:26:11', '2022-10-10 01:26:11');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `goal`
--
ALTER TABLE `goal`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `goal`
--
ALTER TABLE `goal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
