-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 19, 2020 at 08:16 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `COMP333`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather`
--

CREATE TABLE `weather` (
  `wid` int(11) NOT NULL,
  `town` varchar(50) NOT NULL,
  `currTemp` int(11) NOT NULL,
  `summary` varchar(30) NOT NULL,
  `min_temp` int(11) NOT NULL DEFAULT '0',
  `max_temp` int(11) NOT NULL DEFAULT '0',
  `outlook` varchar(100) NOT NULL,
  `tomorrow` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ascii;

--
-- Dumping data for table `weather`
--

INSERT INTO `weather` (`wid`, `town`, `currTemp`, `summary`, `min_temp`, `max_temp`, `outlook`, `tomorrow`) VALUES
(1, 'Hamilton', 27, 'sunny', 8, 28, 'Mostly sunny with clouds developing', 'Cloud increasing, chance of rain'),
(2, 'Auckland', 26, 'raining', 8, 27, 'Showers throughout the day', 'Showers increasing in morning'),
(3, 'Christchurch', 22, 'fine', 5, 23, 'Morning cloud clearing later', 'Increasing southerly winds'),
(4, 'Dunedin', 21, 'sunny', 12, 21, 'Overcast with sunny spells', 'Cloudy with rain developing'),
(5, 'Tauranga', 23, 'sunny', 7, 24, 'Fine and clear all day', 'Fine with some cloud later'),
(6, 'Wellington', 20, 'windy', 7, 21, 'Winds increasing throughout the day', 'Cloud clearing by lunch time');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weather`
--
ALTER TABLE `weather`
  ADD PRIMARY KEY (`wid`);
