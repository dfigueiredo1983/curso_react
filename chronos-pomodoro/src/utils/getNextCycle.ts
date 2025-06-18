export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle == 8 ? 1 : currentCycle + 1;
}

/*
1 -> 2
2 -> 3
...
7 -> 8
8 -> 1
*/
