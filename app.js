// class Inventory{
//     name
//     items=["mango","apple","banana"]
//     totalItems=this.items.length
//     constructor(name){
//         this.name=name
//     }
//     addItem(itemName){
//         this.items.push(itemName)
//         this.totalItems++

//     }
//     removeItem(itemName){
//         this.items.pop(itemName)
//         this.totalItems--
//     }
//     showItems(){
//         console.log(`Total Availbale items are: ${this.totalItems}`)
//         for(let i=0;i<this.totalItems;i++){
// console.log(this.items[i])
//         }
//     }
//     checkAvailable(itemName){
//         for(let i=0;i<this.items.length;i++){
//             if(this.items[i]==itemName){
//                return true
//             }
//         }
//     }
// }

// class Customer extends Inventory{
//     product
//     constructor(name,product){
//         super(name)
//         this.product=product
//     }
//     buyProduct(product){
//         if(this.checkAvailable(product.toLowerCase())){
//             console.log("Thankyou for buying "+product+" See you again")
//         }
//         else{
//             console.log("Sorry, Out of stock")
//         }
//     }
// }

// const c1=new Customer()
// c1.buyProduct(prompt("Enter what you want ot buy"))


class School{
    name="Aptech"
    address="NN"
    students=["Talha","Mudassir","Shayan"]
    totalStudents=this.students.length
    constructor(){
        console.log(`A new student is enrolled in ${this.name} which is situate in ${this.address}`)
    }
    addStudent(stdName){
        this.students.push(stdName)
        this.totalStudents++
    }
    showStudents(){
        console.log(`Total Students in ${this.name} are: ${this.totalStudents}`)
        for(let i=0;i<this.totalStudents;i++){
            console.log(this.students[i])
                    }
    }
    removeStudents(stdName){
        this.students.pop(stdName)
        this.totalStudents--
    }
}

class Student extends School{
    name
    age
    gradeLevel
    constructor(name,age,gradeLevel){
        super()
        this.name=name
        this.age=age
        this.gradeLevel=gradeLevel
        console.log(`A new student added having name ${name} and age ${age} in class ${gradeLevel}`)
    }
    checkEnrollment(stdName){
    for(let i=0;i<this.students.length;i++){
        if(this.students[i]==stdName){
            console.log("Student is enrolled in the class")
            break
        }
    }

    }
}

