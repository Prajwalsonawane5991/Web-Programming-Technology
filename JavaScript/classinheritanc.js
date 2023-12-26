class Car{
    carname="astar"
    constructor(brand)
    {
        this.carname=brand;
    }
    present()
    {
        return "I have"+this.carname+"car"
    }
}

class Model extends Car{
     constructor(brand,model)
     {
        super(brand)
        this.model=model
     }
     show()
     {
        return this.present()+"of type"+this.model
     }

}
let mycar=new Model("maruti","mustang")
console.log(mycar.show())
console.log( Car.carname, mycar.carname)