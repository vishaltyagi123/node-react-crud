-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 20, 2022 at 12:46 PM
-- Server version: 8.0.31-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `full_name`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'vishal', 'vishaltyagi.webdev@gmail.com', '7302925202', '2022-12-20 11:56:53', '2022-12-20 11:57:08'),
(2, 'vishal Tyagi', 'vishaltyagi.gh@gmail.comm', '7302925202', '2022-12-20 06:31:51', '2022-12-20 06:38:21'),
(3, 'nasir', 'nasir@gmail.com', '123456789', '2022-12-20 06:34:20', '2022-12-20 06:34:20');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_categories_data`
--

CREATE TABLE `pim_categories_data` (
  `id_category` int NOT NULL,
  `source_category_id` int DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `url_key` varchar(100) DEFAULT NULL,
  `meta_title` text,
  `meta_description` text,
  `meta_keyword` text,
  `page_type` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `mobile_image` varchar(100) DEFAULT NULL,
  `hero_content` varchar(100) DEFAULT NULL,
  `bottom_content` varchar(100) DEFAULT NULL,
  `is_images` varchar(100) DEFAULT NULL,
  `images_count` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `include_in_menu` varchar(100) DEFAULT NULL,
  `position` int DEFAULT NULL,
  `landing_page` varchar(100) DEFAULT NULL,
  `breadcrumb` varchar(100) DEFAULT NULL,
  `store` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_flat_catalog`
--

CREATE TABLE `pim_flat_catalog` (
  `id_product` int NOT NULL,
  `source_product_id` int DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `selling_price` text,
  `discount` text,
  `stock_status` text,
  `quantity` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `url_key` varchar(100) DEFAULT NULL,
  `visibility` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `fynd_size` varchar(100) DEFAULT NULL,
  `fynd_uid` varchar(100) DEFAULT NULL,
  `group_id` varchar(100) DEFAULT NULL,
  `promotional_tags` int DEFAULT NULL,
  `is_trending` varchar(100) DEFAULT NULL,
  `cod_block` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `store` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_product_attribute`
--

CREATE TABLE `pim_product_attribute` (
  `id_product_attribute` int NOT NULL,
  `source_attribute_id` int DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `is_in_filter` enum('yes','no') DEFAULT NULL,
  `is_in_search` enum('yes','no') DEFAULT NULL,
  `is_in_sort` enum('yes','no') DEFAULT NULL,
  `is_visible` enum('yes','no') DEFAULT NULL,
  `is_metrological` enum('yes','no') DEFAULT NULL,
  `value_type` enum('int','float','text','timestamp','varchar') DEFAULT NULL,
  `position` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_product_attribute_value`
--

CREATE TABLE `pim_product_attribute_value` (
  `id_product_attribute_value` int NOT NULL,
  `id_product` int DEFAULT NULL,
  `id_product_attribute` int DEFAULT NULL,
  `value` varchar(100) DEFAULT NULL,
  `value_type_integer` int DEFAULT NULL,
  `value_type_float` int DEFAULT NULL,
  `value_type_text` text,
  `value_type_timestamp` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_product_categories`
--

CREATE TABLE `pim_product_categories` (
  `id_product_category` int NOT NULL,
  `id_catetory` int DEFAULT NULL,
  `id_product` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pim_product_gallery`
--

CREATE TABLE `pim_product_gallery` (
  `id_product_gallery` int NOT NULL,
  `id_product` int DEFAULT NULL,
  `position` int DEFAULT NULL,
  `image` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pim_categories_data`
--
ALTER TABLE `pim_categories_data`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `pim_flat_catalog`
--
ALTER TABLE `pim_flat_catalog`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `pim_product_attribute`
--
ALTER TABLE `pim_product_attribute`
  ADD PRIMARY KEY (`id_product_attribute`);

--
-- Indexes for table `pim_product_attribute_value`
--
ALTER TABLE `pim_product_attribute_value`
  ADD PRIMARY KEY (`id_product_attribute_value`);

--
-- Indexes for table `pim_product_categories`
--
ALTER TABLE `pim_product_categories`
  ADD PRIMARY KEY (`id_product_category`);

--
-- Indexes for table `pim_product_gallery`
--
ALTER TABLE `pim_product_gallery`
  ADD PRIMARY KEY (`id_product_gallery`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_categories_data`
--
ALTER TABLE `pim_categories_data`
  MODIFY `id_category` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_flat_catalog`
--
ALTER TABLE `pim_flat_catalog`
  MODIFY `id_product` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_product_attribute`
--
ALTER TABLE `pim_product_attribute`
  MODIFY `id_product_attribute` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_product_attribute_value`
--
ALTER TABLE `pim_product_attribute_value`
  MODIFY `id_product_attribute_value` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_product_categories`
--
ALTER TABLE `pim_product_categories`
  MODIFY `id_product_category` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pim_product_gallery`
--
ALTER TABLE `pim_product_gallery`
  MODIFY `id_product_gallery` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
