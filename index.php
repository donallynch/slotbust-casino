<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/* Casino by Donal Lynch | Software Engineer */
include 'vendor/autoload.php';
include 'config/config.php';

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

echo $twig->render('index/index.html.twig');

