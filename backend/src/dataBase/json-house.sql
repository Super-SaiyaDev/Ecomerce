-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2024 a las 16:51:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemacompracasas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria`
--

CREATE TABLE `auditoria` (
  `IDAuditoria` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `FechaAuditoria` date DEFAULT NULL,
  `Accion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auditoria`
--

INSERT INTO `auditoria` (`IDAuditoria`, `IDUsuario`, `FechaAuditoria`, `Accion`) VALUES
(1, 1, '2024-05-23', 'Action1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casas`
--

CREATE TABLE `casas` (
  `IDCasa` int(11) NOT NULL,
  `Ciudad` varchar(100) DEFAULT NULL,
  `Estado` varchar(100) DEFAULT NULL,
  `CodigoPostal` varchar(10) DEFAULT NULL,
  `Precio` decimal(10,2) DEFAULT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDDireccion` int(11) DEFAULT NULL,
  `IDEmpleado` int(11) DEFAULT NULL,
  `IDProveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `casas`
--

INSERT INTO `casas` (`IDCasa`, `Ciudad`, `Estado`, `CodigoPostal`, `Precio`, `IDUsuario`, `IDDireccion`, `IDEmpleado`, `IDProveedor`) VALUES
(1, 'Anytown', 'Anystate', '12345', 200000.00, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `IDCliente` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Cedula` varchar(255) DEFAULT NULL,
  `Apellido` varchar(100) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`IDCliente`, `Nombre`, `Cedula`, `Apellido`, `Correo`, `Telefono`, `Direccion`) VALUES
(1, 'Client1', '1-213341-433', 'Doe', 'johndoe@example.com', '1234567890', '123 Main St');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `IDCompra` int(11) NOT NULL,
  `IDContrato` int(11) DEFAULT NULL,
  `FechaCompra` date DEFAULT NULL,
  `monto` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`IDCompra`, `IDContrato`, `FechaCompra`, `monto`) VALUES
(1, 1, '2024-05-23', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contrato`
--

CREATE TABLE `contrato` (
  `IDContrato` int(11) NOT NULL,
  `IDCliente` int(11) DEFAULT NULL,
  `IDCasa` int(11) DEFAULT NULL,
  `FechaContrato` date DEFAULT NULL,
  `monto` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contrato`
--

INSERT INTO `contrato` (`IDContrato`, `IDCliente`, `IDCasa`, `FechaContrato`, `monto`) VALUES
(1, 1, 1, '2024-05-23', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `IDDireccion` int(11) NOT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Ciudad` varchar(100) DEFAULT NULL,
  `Estado` varchar(100) DEFAULT NULL,
  `CodigoPostal` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`IDDireccion`, `Direccion`, `Ciudad`, `Estado`, `CodigoPostal`) VALUES
(1, '456 Oak St', 'Othertown', 'Otherstate', '67890');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `IDEmpleado` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `IDProveedor` int(11) DEFAULT NULL,
  `Apellido` varchar(100) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Puesto` varchar(100) DEFAULT NULL,
  `FechaContratacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`IDEmpleado`, `Nombre`, `IDProveedor`, `Apellido`, `Correo`, `Telefono`, `Direccion`, `FechaNacimiento`, `Puesto`, `FechaContratacion`) VALUES
(1, 'Employee1', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `IDFactura` int(11) NOT NULL,
  `IDTransaccion` int(11) DEFAULT NULL,
  `FechaFactura` date DEFAULT NULL,
  `Monto` decimal(10,2) DEFAULT NULL,
  `IDCliente` int(11) DEFAULT NULL,
  `IDEmpleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`IDFactura`, `IDTransaccion`, `FechaFactura`, `Monto`, `IDCliente`, `IDEmpleado`) VALUES
(1, 1, '2024-05-23', 200000.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `IDFavorito` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDCasa` int(11) DEFAULT NULL,
  `FechaFavorito` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`IDFavorito`, `IDUsuario`, `IDCasa`, `FechaFavorito`) VALUES
(1, 1, 1, '2024-05-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `IDImagen` int(11) NOT NULL,
  `IDCasa` int(11) DEFAULT NULL,
  `URLImagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`IDImagen`, `IDCasa`, `URLImagen`) VALUES
(1, 1, 'http://example.com/image.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `indiferencia`
--

CREATE TABLE `indiferencia` (
  `IDIndiferencia` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `FechaIndiferencia` date DEFAULT NULL,
  `Comentario` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `indiferencia`
--

INSERT INTO `indiferencia` (`IDIndiferencia`, `IDUsuario`, `FechaIndiferencia`, `Comentario`) VALUES
(1, 1, '2024-05-23', 'No comment');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `IDMensajes` int(11) NOT NULL,
  `IDUsuarioEmisor` int(11) DEFAULT NULL,
  `IDUsuarioReceptor` int(11) DEFAULT NULL,
  `Mensaje` text DEFAULT NULL,
  `FechaMensaje` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`IDMensajes`, `IDUsuarioEmisor`, `IDUsuarioReceptor`, `Mensaje`, `FechaMensaje`) VALUES
(1, 1, 1, 'Hello, world!', '2024-05-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opiniones`
--

CREATE TABLE `opiniones` (
  `IDOpinion` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `Opinion` text DEFAULT NULL,
  `FechaOpinion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `opiniones`
--

INSERT INTO `opiniones` (`IDOpinion`, `IDUsuario`, `Opinion`, `FechaOpinion`) VALUES
(1, 1, 'Great house!', '2024-05-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `IdPermission` int(11) NOT NULL,
  `NamePermission` varchar(30) DEFAULT NULL,
  `Descriptions` varchar(255) DEFAULT NULL,
  `IdRole` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`IdPermission`, `NamePermission`, `Descriptions`, `IdRole`) VALUES
(1, 'Create/Read/Update/Delete', 'Todos los permisos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `IDProveedor` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `SitioWeb` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`IDProveedor`, `Nombre`, `Direccion`, `Correo`, `Telefono`, `SitioWeb`) VALUES
(1, 'Provider1', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `IDReserva` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDCasa` int(11) DEFAULT NULL,
  `FechaReserva` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`IDReserva`, `IDUsuario`, `IDCasa`, `FechaReserva`) VALUES
(1, 1, 1, '2024-05-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `IdRole` int(11) NOT NULL,
  `NameRole` varchar(50) DEFAULT NULL,
  `Descriptions` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`IdRole`, `NameRole`, `Descriptions`) VALUES
(1, 'Admin', 'Administrador del sistema');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `IDTransaccion` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDCasa` int(11) DEFAULT NULL,
  `FechaTransaccion` date DEFAULT NULL,
  `DatosPrestamo` varchar(255) DEFAULT NULL,
  `OtrosProcesos` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`IDTransaccion`, `IDUsuario`, `IDCasa`, `FechaTransaccion`, `DatosPrestamo`, `OtrosProcesos`) VALUES
(1, 1, 1, '2024-05-23', 'Loan details', 'Other processes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Apellido` varchar(100) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Contrasena` varchar(100) DEFAULT NULL,
  `IDPermisos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IDUsuario`, `Nombre`, `Apellido`, `Correo`, `Contrasena`, `IDPermisos`) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'password123', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventacasa`
--

CREATE TABLE `ventacasa` (
  `IDVenta` int(11) NOT NULL,
  `IDContrato` int(11) DEFAULT NULL,
  `FechaVenta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventacasa`
--

INSERT INTO `ventacasa` (`IDVenta`, `IDContrato`, `FechaVenta`) VALUES
(1, 1, '2024-05-23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  ADD PRIMARY KEY (`IDAuditoria`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `casas`
--
ALTER TABLE `casas`
  ADD PRIMARY KEY (`IDCasa`),
  ADD KEY `IDUsuario` (`IDUsuario`),
  ADD KEY `IDDireccion` (`IDDireccion`),
  ADD KEY `IDEmpleado` (`IDEmpleado`),
  ADD KEY `IDProveedor` (`IDProveedor`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`IDCliente`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`IDCompra`),
  ADD KEY `IDContrato` (`IDContrato`);

--
-- Indices de la tabla `contrato`
--
ALTER TABLE `contrato`
  ADD PRIMARY KEY (`IDContrato`),
  ADD KEY `IDCliente` (`IDCliente`),
  ADD KEY `IDCasa` (`IDCasa`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`IDDireccion`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`IDEmpleado`),
  ADD KEY `IDProveedor` (`IDProveedor`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`IDFactura`),
  ADD KEY `IDTransaccion` (`IDTransaccion`),
  ADD KEY `IDCliente` (`IDCliente`),
  ADD KEY `IDEmpleado` (`IDEmpleado`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`IDFavorito`),
  ADD KEY `IDUsuario` (`IDUsuario`),
  ADD KEY `IDCasa` (`IDCasa`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`IDImagen`),
  ADD KEY `IDCasa` (`IDCasa`);

--
-- Indices de la tabla `indiferencia`
--
ALTER TABLE `indiferencia`
  ADD PRIMARY KEY (`IDIndiferencia`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`IDMensajes`),
  ADD KEY `IDUsuarioEmisor` (`IDUsuarioEmisor`),
  ADD KEY `IDUsuarioReceptor` (`IDUsuarioReceptor`);

--
-- Indices de la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD PRIMARY KEY (`IDOpinion`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`IdPermission`),
  ADD KEY `FK_Permissions_Role` (`IdRole`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`IDProveedor`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`IDReserva`),
  ADD KEY `IDUsuario` (`IDUsuario`),
  ADD KEY `IDCasa` (`IDCasa`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`IdRole`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`IDTransaccion`),
  ADD KEY `IDUsuario` (`IDUsuario`),
  ADD KEY `IDCasa` (`IDCasa`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IDUsuario`),
  ADD KEY `IDPermisos` (`IDPermisos`);

--
-- Indices de la tabla `ventacasa`
--
ALTER TABLE `ventacasa`
  ADD PRIMARY KEY (`IDVenta`),
  ADD KEY `IDContrato` (`IDContrato`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  MODIFY `IDAuditoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `casas`
--
ALTER TABLE `casas`
  MODIFY `IDCasa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `IDCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `IDCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `contrato`
--
ALTER TABLE `contrato`
  MODIFY `IDContrato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `IDDireccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `IDEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `IDFactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `IDFavorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `IDImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `indiferencia`
--
ALTER TABLE `indiferencia`
  MODIFY `IDIndiferencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `IDMensajes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `opiniones`
--
ALTER TABLE `opiniones`
  MODIFY `IDOpinion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `IdPermission` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `IDProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `IDReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `IdRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `IDTransaccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventacasa`
--
ALTER TABLE `ventacasa`
  MODIFY `IDVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auditoria`
--
ALTER TABLE `auditoria`
  ADD CONSTRAINT `auditoria_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`);

--
-- Filtros para la tabla `casas`
--
ALTER TABLE `casas`
  ADD CONSTRAINT `casas_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `casas_ibfk_2` FOREIGN KEY (`IDDireccion`) REFERENCES `direccion` (`IDDireccion`),
  ADD CONSTRAINT `casas_ibfk_3` FOREIGN KEY (`IDEmpleado`) REFERENCES `empleados` (`IDEmpleado`),
  ADD CONSTRAINT `casas_ibfk_4` FOREIGN KEY (`IDProveedor`) REFERENCES `proveedor` (`IDProveedor`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`IDContrato`) REFERENCES `contrato` (`IDContrato`);

--
-- Filtros para la tabla `contrato`
--
ALTER TABLE `contrato`
  ADD CONSTRAINT `contrato_ibfk_1` FOREIGN KEY (`IDCliente`) REFERENCES `cliente` (`IDCliente`),
  ADD CONSTRAINT `contrato_ibfk_2` FOREIGN KEY (`IDCasa`) REFERENCES `casas` (`IDCasa`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`IDProveedor`) REFERENCES `proveedor` (`IDProveedor`);

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`IDTransaccion`) REFERENCES `transacciones` (`IDTransaccion`),
  ADD CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`IDCliente`) REFERENCES `cliente` (`IDCliente`),
  ADD CONSTRAINT `factura_ibfk_3` FOREIGN KEY (`IDEmpleado`) REFERENCES `empleados` (`IDEmpleado`);

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`IDCasa`) REFERENCES `casas` (`IDCasa`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`IDCasa`) REFERENCES `casas` (`IDCasa`);

--
-- Filtros para la tabla `indiferencia`
--
ALTER TABLE `indiferencia`
  ADD CONSTRAINT `indiferencia_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`IDUsuarioEmisor`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`IDUsuarioReceptor`) REFERENCES `usuarios` (`IDUsuario`);

--
-- Filtros para la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD CONSTRAINT `opiniones_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`IDCasa`) REFERENCES `casas` (`IDCasa`);

--
-- Filtros para la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD CONSTRAINT `transacciones_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `transacciones_ibfk_2` FOREIGN KEY (`IDCasa`) REFERENCES `casas` (`IDCasa`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`IDPermisos`) REFERENCES `permissions` (`IdPermission`);

--
-- Filtros para la tabla `ventacasa`
--
ALTER TABLE `ventacasa`
  ADD CONSTRAINT `ventacasa_ibfk_1` FOREIGN KEY (`IDContrato`) REFERENCES `contrato` (`IDContrato`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
