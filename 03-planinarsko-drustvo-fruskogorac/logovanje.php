<?php
session_start();
include("db.php");

if(isset($_POST['f_prijavi'])){
 $sql="select * from korisnici where korisnik='".$_POST['f_korisnik']."' and lozinka='".$_POST['f_lozinka']."'";
 $result=mysqli_query($conn,$sql);
 if(!$result){
   die("greska korisnik");
 }
 
 if(mysqli_num_rows($result)==1){
   $_SESSION['korisnik']=$_POST['f_korisnik'];
   $_SESSION['ulogovan']="da";
 } else {
   $_SESSION['poruka']="Nepostojeći korisnik";
 } 
}
header("location: index.php");
?>