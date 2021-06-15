-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2021 at 09:03 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cat_station`
--

-- --------------------------------------------------------

--
-- Table structure for table `catfeeder`
--

CREATE TABLE `catfeeder` (
  `feederID` varchar(10) NOT NULL,
  `catName` varchar(20) NOT NULL,
  `feed` tinyint(1) NOT NULL,
  `feednum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catfeeder`
--

INSERT INTO `catfeeder` (`feederID`, `catName`, `feed`, `feednum`) VALUES
('firstcat0', 'Lynx', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `catmovement`
--

CREATE TABLE `catmovement` (
  `id` int(11) NOT NULL,
  `feederID` varchar(10) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catmovement`
--

INSERT INTO `catmovement` (`id`, `feederID`, `time`) VALUES
(1, 'firstcat0', '2021-02-08 00:41:51'),
(2, 'firstcat0', '2021-02-08 00:42:41');

-- --------------------------------------------------------

--
-- Table structure for table `feederlog`
--

CREATE TABLE `feederlog` (
  `id` int(11) NOT NULL,
  `feederId` varchar(10) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feederlog`
--

INSERT INTO `feederlog` (`id`, `feederId`, `time`) VALUES
(1, 'firstcat0', '2021-02-08 00:46:02'),
(2, 'firstcat0', '2021-02-08 00:46:10'),
(4, 'firstcat0', '2021-02-08 00:46:33'),
(5, 'firstcat0', '2021-02-10 08:24:51'),
(6, 'firstcat0', '2021-02-10 08:36:22'),
(7, 'firstcat0', '2021-02-10 08:41:50'),
(8, 'firstcat0', '2021-02-10 08:43:16'),
(9, 'firstcat0', '2021-02-10 09:28:28'),
(10, 'firstcat0', '2021-02-10 11:50:10'),
(11, 'firstcat0', '2021-02-10 11:57:44'),
(12, 'firstcat0', '2021-02-10 11:58:53'),
(13, 'firstcat0', '2021-02-10 12:02:33');

-- --------------------------------------------------------

--
-- Table structure for table `feedertemperature`
--

CREATE TABLE `feedertemperature` (
  `id` int(11) NOT NULL,
  `feederId` varchar(10) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `temperature` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedertemperature`
--

INSERT INTO `feedertemperature` (`id`, `feederId`, `time`, `temperature`) VALUES
(1, 'firstcat0', '2021-02-08 01:35:11', 21.6),
(12, 'firstcat0', '2021-02-10 09:41:52', 21.1),
(13, 'firstcat0', '2021-02-10 09:42:09', 21.1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catfeeder`
--
ALTER TABLE `catfeeder`
  ADD PRIMARY KEY (`feederID`);

--
-- Indexes for table `catmovement`
--
ALTER TABLE `catmovement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feederID` (`feederID`);

--
-- Indexes for table `feederlog`
--
ALTER TABLE `feederlog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feederId` (`feederId`);

--
-- Indexes for table `feedertemperature`
--
ALTER TABLE `feedertemperature`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feederId` (`feederId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catmovement`
--
ALTER TABLE `catmovement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feederlog`
--
ALTER TABLE `feederlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `feedertemperature`
--
ALTER TABLE `feedertemperature`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `catmovement`
--
ALTER TABLE `catmovement`
  ADD CONSTRAINT `catmovement_ibfk_1` FOREIGN KEY (`feederID`) REFERENCES `catfeeder` (`feederID`);

--
-- Constraints for table `feederlog`
--
ALTER TABLE `feederlog`
  ADD CONSTRAINT `feederlog_ibfk_1` FOREIGN KEY (`feederId`) REFERENCES `catfeeder` (`feederID`);

--
-- Constraints for table `feedertemperature`
--
ALTER TABLE `feedertemperature`
  ADD CONSTRAINT `feedertemperature_ibfk_1` FOREIGN KEY (`feederId`) REFERENCES `catfeeder` (`feederID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
