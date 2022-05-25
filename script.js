// Variáveis de substituição de nome
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");

function check() {
  var inputText = inputArea.value;
  var outputText = [];

  for (let index = 0; index < Array.from(inputText).length; index++) {
    switch (Array.from(inputText)[index]) {
      // Letras em caixa baixa
      case "a":
        outputText.push("c");
        break;
      case "b":
        outputText.push("d");
        break;
      case "c":
        outputText.push("e");
        break;
      case "d":
        outputText.push("f");
        break;
      case "e":
        outputText.push("g");
        break;
      case "f":
        outputText.push("h");
        break;
      case "g":
        outputText.push("i");
        break;
      case "h":
        outputText.push("j");
        break;
      case "i":
        outputText.push("k");
        break;
      case "j":
        outputText.push("l");
        break;
      case "k":
        outputText.push("m");
        break;
      case "l":
        outputText.push("n");
        break;
      case "m":
        outputText.push("o");
        break;
      case "n":
        outputText.push("p");
        break;
      case "o":
        outputText.push("q");
        break;
      case "p":
        outputText.push("r");
        break;
      case "q":
        outputText.push("s");
        break;
      case "r":
        outputText.push("t");
        break;
      case "s":
        outputText.push("u");
        break;
      case "t":
        outputText.push("v");
        break;
      case "u":
        outputText.push("w");
        break;
      case "v":
        outputText.push("x");
        break;
      case "w":
        outputText.push("y");
        break;
      case "x":
        outputText.push("z");
        break;
      case "y":
        outputText.push("a");
        break;
      case "z":
        outputText.push("b");
        break;

      // Letras em caixa alta
      case "A":
        outputText.push("C");
        break;
      case "B":
        outputText.push("D");
        break;
      case "C":
        outputText.push("E");
        break;
      case "D":
        outputText.push("F");
        break;
      case "E":
        outputText.push("G");
        break;
      case "F":
        outputText.push("H");
        break;
      case "G":
        outputText.push("I");
        break;
      case "H":
        outputText.push("J");
        break;
      case "I":
        outputText.push("K");
        break;
      case "J":
        outputText.push("L");
        break;
      case "K":
        outputText.push("M");
        break;
      case "L":
        outputText.push("N");
        break;
      case "M":
        outputText.push("O");
        break;
      case "N":
        outputText.push("P");
        break;
      case "O":
        outputText.push("Q");
        break;
      case "P":
        outputText.push("R");
        break;
      case "Q":
        outputText.push("S");
        break;
      case "R":
        outputText.push("T");
        break;
      case "S":
        outputText.push("U");
        break;
      case "T":
        outputText.push("V");
        break;
      case "U":
        outputText.push("W");
        break;
      case "V":
        outputText.push("X");
        break;
      case "W":
        outputText.push("Y");
        break;
      case "X":
        outputText.push("Z");
        break;
      case "Y":
        outputText.push("A");
        break;
      case "Z":
        outputText.push("B");
        break;

      // Demais caracteres
      default:
        outputText.push(Array.from(inputText)[index]);
        break;
    }
  }
  outputArea.value = outputText.join("");
}//
