class Car {

    constructor(brand) {
         this.carname = brand;
    }

    position() {
          return 'This is' + this.carname;
    }

}

class Model extends Car {

     constructor(brand, mod) {
          super(brand);
             this.model = mod;
    }

    show(){

        return this.position() + ' , and it is ' + this.model;
    }
}

    const myCar = new Model(" Tata", "Mahindra");
        document.getElementById("demo").innerHTML = myCar.show();

