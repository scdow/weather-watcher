-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 19, 2020 at 08:17 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `COMP333`
--

-- --------------------------------------------------------

--
-- Table structure for table `userweatherjoin`
--

CREATE TABLE `userweatherjoin` (
  `uwid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `wid` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userweatherjoin`
--

INSERT INTO `userweatherjoin` (`uwid`, `uid`, `wid`) VALUES
(1, 1, 1),
(3, 1, 4),
(4, 1, 5),
(5, 2, 2),
(6, 2, 6),
(8, 3, 4),
(10, 4, 2),
(11, 4, 4),
(12, 4, 5),
(13, 4, 6),
(15, 3, 1),
(19, 3, 6),
(20, 3, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userweatherjoin`
--
ALTER TABLE `userweatherjoin`
  ADD PRIMARY KEY (`uwid`),
  ADD UNIQUE KEY `uwid` (`uwid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userweatherjoin`
--
ALTER TABLE `userweatherjoin`
  MODIFY `uwid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;