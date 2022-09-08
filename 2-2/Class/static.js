//선언문
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //static property
  static typeName = "Reactangle";

  //static method
  static info() {
    return `Type : ${Rectangle.typeName}`;
  }

  //instance method
  getArea() {
    return this.width * this.height;
  }
}

const r = new Rectangle(10, 10);
console.log(r.getArea()); //100
console.log(Rectangle.typeName); //Reactangle
console.log(Rectangle.info()); //Type : Reactangle
