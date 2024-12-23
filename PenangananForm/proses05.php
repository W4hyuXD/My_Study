<?php
if (isset($_POST['Login'])) {
  $user = $_POST['username'];
  $pass = $_POST['password'];
  if ($user == "WahyuDin Ambia" && $pass == "111") {
    echo "<h2>Success Login</h2>";
  } else {
    echo "<h2>Login Failed</h2>";
  }
}
?>