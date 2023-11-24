
let i;
    let name = prompt("Enter name: ") ;
    name = name.toUpperCase();
    let len = name.length;
  
for (i = 0; i < len; i++) {
    if (name[i] == 'A' || name[i] == 'B' || name[i] == 'G' || name[i] == 'H' ||
    name[i] == 'O' || name[i] == 'P' || name[i] == 'Q' || name[i] == 'R' || name[i] == 'U' || name[i] == 'V' || name[i] == 'W') {
      console.log("      ");
    } else if (name[i] == 'C' || name[i] == 'E' || name[i] == 'F' || name[i] == 'L' || name[i] == 'S') {
      console.log("   *    ");
    } else if (name[i] == 'M') {
      console.log("   * *");
    } else if (name[i] == 'Y') {
      console.log("      ");
    } else if (name[i] == 'K') {
      console.log("      ");
    } else if (name[i] == 'I' || name[i] == 'J' || name[i] == 'T') {
      console.log("     *  ");
    } else if (name[i] == 'D') {
      console.log("       *");
    } else if (name[i] == 'N') {
      console.log("   *  ");
    } else if (name[i] == 'Z') {
      console.log("      * ");
    } else if (name[i] == 'X') {
      console.log("        ");
    }
  }

  console.log("\n");