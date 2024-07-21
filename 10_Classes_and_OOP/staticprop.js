class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ // static prevents data replication by its instances by not giving access to any instances of the class but just the class itself has its access
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

console.log(iphone.createId());