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
var Computador = /** @class */ (function () {
    function Computador() {
    }
    Object.defineProperty(Computador.prototype, "proces", {
        get: function () {
            return this.processador;
        },
        set: function (proces) {
            this.processador = proces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "mem", {
        get: function () {
            return this.memoria;
        },
        set: function (mem) {
            this.memoria = mem;
        },
        enumerable: false,
        configurable: true
    });
    return Computador;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bateria_watts = 0;
        return _this;
    }
    Object.defineProperty(Laptop.prototype, "bat", {
        get: function () {
            return this.bateria_watts;
        },
        set: function (bat) {
            this.bateria_watts = bat;
        },
        enumerable: false,
        configurable: true
    });
    Laptop.prototype.exib = function () {
        console.log("Processador: ".concat(this.processador, ", Mem\u00F3ria: ").concat(this.memoria, "\n        Bateria: ").concat(this.bateria_watts));
    };
    return Laptop;
}(Computador));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cabinenete = "";
        return _this;
    }
    Object.defineProperty(Desktop.prototype, "cab", {
        get: function () {
            return this.cabinenete;
        },
        set: function (cab) {
            this.cabinenete = cab;
        },
        enumerable: false,
        configurable: true
    });
    Desktop.prototype.exib = function () {
        console.log("Processador: ".concat(this.processador, ", Mem\u00F3ria: ").concat(this.memoria, "\n        Cabinete: ").concat(this.cabinenete));
    };
    return Desktop;
}(Computador));
var d = new Laptop();
d.exib();
