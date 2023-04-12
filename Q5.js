function towerOfHanoi(n, fromPeg, toPeg, auxPeg) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromPeg} to ${toPeg}`);
      return;
    }
  
    towerOfHanoi(n - 1, fromPeg, auxPeg, toPeg);
    console.log(`Move disk ${n} from ${fromPeg} to ${toPeg}`);
    towerOfHanoi(n - 1, auxPeg, toPeg, fromPeg);
  }
  towerOfHanoi(3, 'A', 'C', 'B');