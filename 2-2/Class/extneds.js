class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
/*
class function {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
*/

class Position3D extends Position {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
}

const p3 = new Position3D(0, 0, 0);
console.log(p3);
