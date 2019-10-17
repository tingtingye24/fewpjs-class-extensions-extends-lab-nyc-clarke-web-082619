// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides
    }
    
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(side, total){
            return total+side;
        },0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        // console.log(this.sides)
        // console.log(this.sides[0])
        if((this.sides[0] === this.sides[1])&& (this.sides[1] === this.sides[2]) || (this.sides[0]**2 +this.sides[1]**2 === this.sides[2]**2)){
            return true;
        }else{
            return false;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        console.log(this.sides)
        if((this.sides[0]=== this.sides[1])&&(this.sides[1]===this.sides[2])&& (this.sides[1]===this.sides[3])){
            return true;
        }else{
            return false;
        }

    }
    get area(){
        return this.sides[0]**2
    }
}