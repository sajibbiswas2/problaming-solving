// #include<stdio.h>
// #include<string.h>
// #include<stdlib.h>
// function main()
// {
//  let i,len;
//  let name=[30];
//   console.log("enter name: ");
//   fgets(name,30,stdin);
//   let=strlen(name);
//   for(i=0;i<len;i++)
//   {
//     name[i]=toupper(name[i]);
//   }
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B' || name[i]=='C'|| name[i]=='E'|| name[i]=='F' || name[i]=='G'|| name[i]=='I'|| name[i]=='J' || name[i]=='O'|| name[i]=='P'|| name[i]=='Q' || name[i]=='R'|| name[i]=='S'|| name[i]=='T'|| name[i]=='Z')
//     {
//       console.log("   ***");
//     }
//     else if(name[i]=='H' || name[i]=='K'|| name[i]=='M' || name[i]=='N' || name[i]=='U'|| name[i]=='V'|| name[i]=='W'|| name[i]=='X'|| name[i]=='Y')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='D')
//     {
//       console.log("       *");
//     }
//     else if(name[i]=='L')
//     {
//       console.log("   *    ");
//     }
//   }
//   console.log("\n");
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B' || name[i]=='G'|| name[i]=='H'|| name[i]=='O' || name[i]=='P'|| name[i]=='Q'|| name[i]=='R' || name[i]=='U'|| name[i]=='V'|| name[i]=='W')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='C'|| name[i]=='E' || name[i]=='F'|| name[i]=='L'|| name[i]=='S')
//     {
//       console.log("   *    ");
//     }
//     if(name[i]=='M')
//     {
//       console.log("   * *");
//     }
//     else if(name[i]=='Y')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='K')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='I'||name[i]=='J'||name[i]=='T')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='D')
//     {
//       console.log("       *");
//     }
//     else if(name[i]=='N')
//     {
//       console.log("   *  ");
//     }
//     else if(name[i]=='Z')
//     {
//       console.log("      * ");
//     }
//     else if(name[i]=='X')
//     {
//       console.log("        ");
//     }
//   }
//   console.log("\n");
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B' || name[i]=='G'|| name[i]=='H'||name[i]=='N'|| name[i]=='O' || name[i]=='P'|| name[i]=='Q'|| name[i]=='R' || name[i]=='U'|| name[i]=='V'|| name[i]=='W')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='C'|| name[i]=='E' || name[i]=='F'|| name[i]=='L'|| name[i]=='S')
//     {
//       console.log("   *    ");
//     }
//     if(name[i]=='M')
//     {
//       console.log("     *");
//     }
//     else if(name[i]=='Y')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='K')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='I'||name[i]=='J'||name[i]=='T')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='D')
//     {
//       console.log("       *");
//     }
//     else if(name[i]=='X')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='Z')
//     {
//       console.log("        ");
//     }
//   }
//   console.log("\n");
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B'|| name[i]=='D'|| name[i]=='E' || name[i]=='F'|| name[i]=='G'|| name[i]=='H'|| name[i]=='P'|| name[i]=='Q'|| name[i]=='R'|| name[i]=='S' )
//     {
//       console.log("   ***");
//     }
//     else if(name[i]=='C')
//     {
//       console.log("   *    ");
//     }
//     if(name[i]=='M'|| name[i]=='O'|| name[i]=='V'|| name[i]=='W'|| name[i]=='U')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='Z')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='K')
//     {
//       console.log("   **   ");
//     }
//     else if(name[i]=='I'||name[i]=='J'||name[i]=='T'|| name[i]=='Y')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='L')
//     {
//       console.log("   *    ");
//     }
//     else if(name[i]=='N')
//     {
//       console.log("     *");
//     }
//     else if(name[i]=='X')
//     {
//       console.log("     *  ");
//     }
//   }
//   console.log("\n");
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B'|| name[i]=='D'|| name[i]=='H' || name[i]=='M'|| name[i]=='N'|| name[i]=='O'||name[i]=='U'|| name[i]=='V')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='C'|| name[i]=='E'|| name[i]=='F'|| name[i]=='L'|| name[i]=='P')
//     {
//       console.log("   *    ");
//     }
//     if(name[i]=='G'|| name[i]=='Q'|| name[i]=='S')
//     {
//       console.log("       *");
//     }
//     else if(name[i]=='K')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='I'||name[i]=='J'||name[i]=='T'|| name[i]=='Y')
//     {
//       console.log("     *  ");
//     }
//     else if(name[i]=='R')
//     {
//     console.log("      ");
//     }
//     else if(name[i]=='W')
//     {
//       console.log("     *");
//     }
//     else if(name[i]=='X')
//     {
//     console.log("      ");
//     }
//     else if(name[i]=='Z')
//     {
//       console.log("        ");
//     }
//   }
//   string("\n");
//   for(i=0;i<len;i++)
//   {
//     if(name[i]=='A'|| name[i]=='B'|| name[i]=='D'|| name[i]=='H' || name[i]=='M'|| name[i]=='O'||name[i]=='U'|| name[i]=='V')
//     {
//       console.log("      ");
//     }
//     else if(name[i]=='C'|| name[i]=='E'|| name[i]=='F'|| name[i]=='L'|| name[i]=='P')
//     {
//       console.log("   *    ");
//     }
//     if(name[i]=='G'|| name[i]=='Q'|| name[i]=='S')
//     {
//     console.log("       *");
//     }
    
// }
// }

//=========================================================

function main() {
    let i;
    let name = prompt("Enter name: ") ;
    name = name.toUpperCase();
    let len = name.length
  ;
    for (i = 0; i < len; i++) {
      if (name[i] == 'A' || name[i] == 'B' || name[i] == 'C' || name[i] == 'E' || 
       name[i] == 'F' || name[i] == 'G' || name[i] == 'I' || name[i] == 'J' || name[i] == 'O' ||
        name[i] == 'P' || name[i] == 'Q' || name[i] == 'R' || name[i] == 'S' || name[i] == 'T' || name[i] == 'Z') {
        console.log("   ***");
      } else if (name[i] == 'H' || name[i] == 'K' || name[i] == 'M' || name[i] == 'N' || 
      name[i] == 'U' || name[i] == 'V' || name[i] == 'W' || name[i] == 'X' || name[i] == 'Y') {
        console.log("      ");
      } else if (name[i] == 'D') {
        console.log("       *");
      } else if (name[i] == 'L') {
        console.log("   *    ");
      }
    }
  
    console.log("\n");
  
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
  
    for (i = 0; i < len; i++) {
      if (name[i] == 'A' || name[i] == 'B' || name[i] == 'G' || name[i] == 'H' || 
      name[i] == 'N' || name[i] == 'O' || name[i] == 'P' || name[i] == 'Q' || name[i] == 'R' || name[i] == 'U' || name[i] == 'V' || name[i] == 'W') {
        console.log("      ");
      } else if (name[i] == 'C' || name[i] == 'E' || name[i] == 'F' || name[i] == 'L' || name[i] == 'S') {
        console.log("   *    ");
      } else if (name[i] == 'M') {
        console.log("     *");
      } else if (name[i] == 'Y') {
        console.log("     *  ");
      } else if (name[i] == 'K') {
        console.log("      ");
      } else if (name[i] == 'I' || name[i] == 'J' || name[i] == 'T') {
        console.log("     *  ");
      } else if (name[i] == 'D') {
        console.log("       *");
      } else if (name[i] == 'X') {
        console.log("      ");
      } else if (name[i] == 'Z') {
        console.log("        ");
      }
    }
  
    console.log("\n");
  
    for (i = 0; i < len; i++) {
      if (name[i] == 'A' || name[i] == 'B' || name[i] == 'D' || name[i] == 'E' || 
       name[i] == 'F' || name[i] == 'G' || name[i] == 'H' || name[i] == 'P' || name[i] == 'Q' || name[i] == 'R' || name[i] == 'S') {
        console.log("   ***");
      } else if (name[i] == 'C') {
        console.log("   *    ");
      } else if (name[i] == 'M' || name[i] == 'O' || name[i] == 'V' || name[i] == 'W' || name[i] == 'U') {
        console.log("      ");
      } else if (name[i] == 'Z') {
        console.log("     *  ");
      } else if (name[i] == 'K') {
        console.log("   **   ");
      } else if (name[i] == 'I' || name[i] == 'J' || name[i] == 'T' || name[i] == 'Y') {
        console.log("     *  ");
      } else if (name[i] == 'L') {
        console.log("   *    ");
      } else if (name[i] == 'N') {
        console.log("     *");
      } else if (name[i] == 'X') {
        console.log("     *  ");
      }
    }
  
    console.log("\n");
  
    for (i = 0; i < len; i++) {
      if (name[i] == 'A' || name[i] == 'B' || name[i] == 'D' || name[i] == 'H' ||
        name[i] == 'M' || name[i] == 'N' || name[i] == 'O' || name[i] == 'U' || name[i] == 'V') {
        console.log("      ");
      } else if (name[i] == 'C' || name[i] == ''){
        console.log(" * ")
      }
    }
}

main();