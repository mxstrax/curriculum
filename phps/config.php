<?php
declare(strict_types=1);

function getPDO(): PDO
{
    $dsn = 'mysql:host=localhost;dbname=cv_db;charset=utf8mb4';
    $user = 'cv_user';
    $pass = 'UltraSicura!2025';
    $opt  = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    return new PDO($dsn, $user, $pass, $opt);
}
