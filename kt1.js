var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, login, password, grade) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            throw new Error("Невозможно изменить логин!");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return "********";
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "grade", {
        get: function () {
            return "Неизвестное свойство grade";
        },
        set: function (value) {
            throw new Error("Неизвестное свойство grade");
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.showInfo = function () {
        console.log("Name: ".concat(this._name, " Password: ").concat(this._password, "."));
    };
    User.prototype.eq = function (user) {
        return this._grade === user._grade;
    };
    User.prototype.lt = function (user) {
        return this._grade < user._grade;
    };
    User.prototype.gt = function (user) {
        return this._grade > user._grade;
    };
    User.count = 0;
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, login, password, role, grade) {
        var _this = _super.call(this, name, login, password, grade) || this;
        _this._role = role;
        SuperUser.count++;
        return _this;
    }
    Object.defineProperty(SuperUser.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    SuperUser.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, " Password: ").concat(this.password, " Role: ").concat(this._role));
    };
    SuperUser.count = 0;
    return SuperUser;
}(User));
var user1 = new User('Paul McCartney', 'paul', '1234', 3);
var user2 = new User('George Harrison', 'george', '5678', 2);
var user3 = new User('Richard Starkey', 'ringo', '8523', 3);
var admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5);
user1.showInfo();
admin.showInfo();
var users = User.count;
var admins = SuperUser.count;
console.log("\u0412\u0441\u0435\u0433\u043E \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(users));
console.log("\u0412\u0441\u0435\u0433\u043E \u0441\u0443\u043F\u0435\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(admins));
console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));
user3.name = 'Ringo Star';
user1.password = 'Pa$$w0rd';
console.log(user3.name);
console.log(user2.password);
console.log(user2.login);
try {
    user2.login = 'geo';
}
catch (e) {
    console.log(e);
}
console.log(user3.grade);
try {
    admin.grade = '10';
}
catch (e) {
    console.log(e);
}
