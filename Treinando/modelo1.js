var power = function () {
    const base = document.getElementById("base").value;
    const exp = document.getElementById("expoente").value;

    var pow = 1;
    for (var i = 0; i < exp; i++) {
      pow = pow * base;
    }

    document.getElementById("resultado").innerHTML = pow;

    return pow;
  };