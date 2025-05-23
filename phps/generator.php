<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://yourdomain.com');

$pdo = getPDO();

function all(string $table, array $fields, PDO $pdo): array {
    $cols = implode(',', $fields);
    $stmt = $pdo->prepare("SELECT $cols FROM $table ORDER BY sort_idx ASC, id ASC");
    $stmt->execute();
    return $stmt->fetchAll();
}

$response = [
    'about'         => $pdo->query('SELECT description, about FROM personal_info ORDER BY id DESC LIMIT 1')->fetch() ?: new stdClass(),
    'skills'        => all('skills',
                          ['name','level','category'], $pdo),
    'experiences'   => all('experiences',
                          ['title','company','start_year','end_year','description'], $pdo),
    'education'     => all('education',
                          ['title','institution','start_year','end_year','description'], $pdo),
    'certifications'=> all('certifications',
                          ['name','valid_from','valid_to','file_url'], $pdo),
    'contacts'      => all('contacts',
                          ['type','label','value'], $pdo),
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
