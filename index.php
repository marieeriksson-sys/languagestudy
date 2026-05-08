<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli("localhost" , "Marie" , "4653Zs7U" , "databas" );
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email = $_POST['email'];
$password = $_POST['password'];
 $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
 if ($conn->query($sql) === TRUE) {
    echo "<div class='success'>Användaren har sparats</div>";
 } else {
   echo "Fel: " . $conn->error;
   }
}
?>


<!DOCTYPE html>
<html lang="sv">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>hemsida</title>
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gorditas:wght@400;700&family=Updock&display=swap" rel="stylesheet">
<style>
.success {
    text-align: center;
    padding: 10px;
}
form {
text-align: center;
margin-top:20px;
}
input[type="password"],
input[type="email"]
{
width: 200px;
text-align: center;
align-items: center;
margin:auto;
padding:10px 15px;
display: block;
font-size: 10px;
cursor: pointer;
border-radius: 5px;
background: transparent;
backdrop-filter: blur(20px);
border: 1px solid black;
}
input[type="submit"] {
width: 200px;
text-align: center;
align-items: center;
margin:auto;
padding:10px 15px;
display: block;
font-size: 10px;
cursor: pointer;
border-radius: 5px;
background: transparent;
backdrop-filter: blur(20px);
border: 1px solid black;
}
</style>
</head>
<body>
<div class= "startbild">
<img src="Lär dig språk (1).jpg" class="startbild1">
</div>
<p class="information">Här kan du studera Spanska, Franska, Japanska och Engelska, genom att spela. 
    För att kunna spela behövs grundkunskaperna.</p>
<p class="välj">Välj språket du vill studera nedanför</p>
<ul class="topnav">
    <li><a href="Japanska.html" class="Japanska-länk">Japanska <img src="torii.png" class="nav-icon"></a></li>
    <li><a href="Engelska.html" class="Engelska-länk">Engelska <img src="3504837.png" class="nav-icon"></a></li>
    <li><a href="Spanska.html" class="Spanska-länk">Spanska <img src="flamenco.png" class="nav-icon"></a></li>
    <li><a href="Franska.html" class="Franska-länk">Franska <img src="food.png" class="nav-icon"></a></li>
</ul>
<form method="POST">
    E-post: <input type="email" name="email" required><br><br>
    Lössenord: <input type="password" name="password" required><br><br>
    <input type="submit" value="Skapa konto">
</form> 
<h1 class="varför">Varför ska du använda vår webbsida för att lära dig språk?</h1>
<p class="merinfo">Vår webbsida använder spel genom att lära sig språk. När du har kul när du lär dig so producerar din hjärna mer dopamin som ökar fokusetet, motivationen och högre retention (förmåga att komma ihåg över tid).  </p>
</body>
</html>
