<?php

declare(strict_types=1);

use BasicCalculator\Calculator;

require dirname(__DIR__) . '/vendor/autoload.php';

$operations = [
    'add' => ['Adição (+)', Calculator::class . '::add'],
    'subtract' => ['Subtração (−)', Calculator::class . '::subtract'],
    'multiply' => ['Multiplicação (×)', Calculator::class . '::multiply'],
    'divide' => ['Divisão (÷)', Calculator::class . '::divide'],
];
$postedA = $_POST['a'] ?? '';
$postedB = $_POST['b'] ?? '';
$a = is_string($postedA) ? $postedA : '';
$b = is_string($postedB) ? $postedB : '';
$operation = $_POST['operation'] ?? 'add';
$message = 'O resultado aparece aqui';
$isError = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numberA = is_string($a) ? str_replace(',', '.', trim($a)) : '';
    $numberB = is_string($b) ? str_replace(',', '.', trim($b)) : '';
    if (!is_numeric($numberA) || !is_numeric($numberB) || !is_string($operation) || !isset($operations[$operation])) {
        $message = 'Digite números válidos e selecione uma operação.';
        $isError = true;
    } elseif (!is_finite((float) $numberA) || !is_finite((float) $numberB)) {
        $message = 'O valor precisa ser um número finito.';
        $isError = true;
    } else {
        try {
            $value = ($operations[$operation][1])((float) $numberA, (float) $numberB);
            $message = 'Resultado: ' . rtrim(rtrim(number_format($value, 12, ',', '.'), '0'), ',');
        } catch (DivisionByZeroError $error) {
            $message = $error->getMessage();
            $isError = true;
        }
    }
}
?>
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculadora PHP</title>
    <style>
        *{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:linear-gradient(145deg,#eef4ff,#e8f7f3);font:16px system-ui,sans-serif;color:#17243a}.card{width:min(92vw,420px);padding:32px;background:white;border:1px solid #dce5f2;border-radius:22px;box-shadow:0 20px 60px #243c6020}.badge{color:#3478f6;font-size:12px;font-weight:800;letter-spacing:.16em}h1{margin:8px 0 4px;font-size:32px}.sub{margin:0 0 24px;color:#738096}label{display:block;margin:15px 0 7px;font-size:14px;font-weight:650}input,select{width:100%;padding:12px 13px;border:1px solid #ccd6e4;border-radius:10px;font:inherit;background:#fbfcff}button{width:100%;margin-top:22px;padding:13px;border:0;border-radius:11px;background:#3478f6;color:#fff;font:inherit;font-weight:700;cursor:pointer}.result{display:block;min-height:48px;margin-top:16px;padding:13px;border-radius:10px;background:#f0f5fb;font-weight:700;color:#263954}.error{color:#b42318;background:#fff1f0}
    </style>
</head>
<body><main class="card">
    <div class="badge">PHP</div><h1>Calculadora</h1><p class="sub">Operações básicas, sem complicação.</p>
    <form method="post">
        <label for="a">Primeiro número</label><input id="a" name="a" inputmode="decimal" placeholder="Ex.: 12,5" value="<?= htmlspecialchars((string) $a, ENT_QUOTES, 'UTF-8') ?>">
        <label for="operation">Operação</label><select id="operation" name="operation">
            <?php foreach ($operations as $key => [$label]): ?>
                <option value="<?= htmlspecialchars($key, ENT_QUOTES, 'UTF-8') ?>" <?= $operation === $key ? 'selected' : '' ?>><?= htmlspecialchars($label, ENT_QUOTES, 'UTF-8') ?></option>
            <?php endforeach; ?>
        </select>
        <label for="b">Segundo número</label><input id="b" name="b" inputmode="decimal" placeholder="Ex.: 2" value="<?= htmlspecialchars((string) $b, ENT_QUOTES, 'UTF-8') ?>">
        <button type="submit">Calcular</button>
    </form>
    <output class="result<?= $isError ? ' error' : '' ?>" aria-live="polite"><?= htmlspecialchars($message, ENT_QUOTES, 'UTF-8') ?></output>
</main></body></html>
