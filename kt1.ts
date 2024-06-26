class User{
    private _name : string;
    private _login : string;
    private _password : string;
    private _grade : number;
    static count : number = 0;

    constructor(name : string, login : string, password : string, grade : number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }
    set name(value : string){
        this._name = value;
    }
    set login(value : string){
        throw new Error("Невозможно изменить логин!");
    }
    set password(value : string){
        this._password = value;
    }
    set grade(value : string){
        throw new Error("Неизвестное свойство grade");
    }
    get name() : string{
        return this._name;
    }
    get login() : string{
        return this._login;
    }
    get password() : string{
        return "********";
    }
    get grade(){
        return "Неизвестное свойство grade";
    }
    showInfo() : void{
        console.log(`Name: ${this._name} Password: ${this._password}.`)
    }
    eq(user : User) : boolean{
        return this._grade === user._grade;
    }
    lt(user : User) : boolean{
        return this._grade < user._grade;
    }
    gt(user : User) : boolean{
        return this._grade > user._grade;
    }
}
class SuperUser extends User{
    private _role : string;
    static count : number = 0;
    constructor(name : string, login : string, password : string, role : string, grade : number) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }
    set role(value : string){
        this._role = value;
    }
    get role() : string{
        return this._role;
    }
    showInfo() : void {
        console.log(`Name: ${this.name} Password: ${this.password} Role: ${this._role}`)
    }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3)
const user2 = new User('George Harrison', 'george', '5678', 2)
const user3 = new User('Richard Starkey', 'ringo', '8523', 3)
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5)

user1.showInfo()
admin.showInfo()

let users = User.count
let admins = SuperUser.count

console.log(`Всего обычных пользователей: ${users}`)
console.log(`Всего супер-пользователей: ${admins}`)

console.log( user1.lt(user2) )
console.log( admin.gt(user3) )
console.log( user1.eq(user3) )

user3.name = 'Ringo Star'
user1.password = 'Pa$$w0rd'

console.log(user3.name)
console.log(user2.password)
console.log(user2.login)
try{
    user2.login = 'geo'
}catch (e){
    console.log(e)
}

console.log(user3.grade)

try{
    admin.grade = '10'
}catch (e){
    console.log(e)
}
