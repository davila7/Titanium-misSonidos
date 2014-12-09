function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClickEstupido() {
        estupido.play();
    }
    function doClickAsiNoMasPo() {
        asiNoMasPo.play();
    }
    function doClickHomeroCerveza() {
        homeroCerveza.play();
    }
    function doClickHomeroLisa() {
        homeroLisa.play();
    }
    function doClickRisaMala() {
        risaMala.play();
    }
    function doClickGrito() {
        grito.play();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Mis Sonidos",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "Así no mas po!",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    doClickAsiNoMasPo ? $.__views.__alloyId2.addEventListener("click", doClickAsiNoMasPo) : __defers["$.__views.__alloyId2!click!doClickAsiNoMasPo"] = true;
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "Estupido!",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    doClickEstupido ? $.__views.__alloyId3.addEventListener("click", doClickEstupido) : __defers["$.__views.__alloyId3!click!doClickEstupido"] = true;
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Homero Cerveza",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    doClickHomeroCerveza ? $.__views.__alloyId4.addEventListener("click", doClickHomeroCerveza) : __defers["$.__views.__alloyId4!click!doClickHomeroCerveza"] = true;
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Homero Lisa",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    doClickHomeroLisa ? $.__views.__alloyId5.addEventListener("click", doClickHomeroLisa) : __defers["$.__views.__alloyId5!click!doClickHomeroLisa"] = true;
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Risa Malvada",
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    doClickRisaMala ? $.__views.__alloyId6.addEventListener("click", doClickRisaMala) : __defers["$.__views.__alloyId6!click!doClickRisaMala"] = true;
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Grito",
        id: "__alloyId7"
    });
    __alloyId1.push($.__views.__alloyId7);
    doClickGrito ? $.__views.__alloyId7.addEventListener("click", doClickGrito) : __defers["$.__views.__alloyId7!click!doClickGrito"] = true;
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var homeroCerveza = Titanium.Media.createSound({
        url: "http://www.sonidosmp3gratis.com/sounds/homero22.mp3",
        preload: true
    });
    var homeroLisa = Titanium.Media.createSound({
        url: "http://www.sonidosmp3gratis.com/sounds/homero16.mp3",
        preload: true
    });
    var risaMala = Titanium.Media.createSound({
        url: "http://www.sonidosmp3gratis.com/sounds/008621579_prev.mp3",
        preload: true
    });
    var grito = Titanium.Media.createSound({
        url: "http://www.sonidosmp3gratis.com/sounds/009269148_prev.mp3",
        preload: true
    });
    var asiNoMasPo = Titanium.Media.createSound({
        url: "sounds/Asi+nomas+po+Ruperto.mp3",
        preload: true
    });
    var estupido = Titanium.Media.createSound({
        url: "sounds/Estupido+Rupertina.mp3",
        preload: true
    });
    $.index.open();
    __defers["$.__views.__alloyId2!click!doClickAsiNoMasPo"] && $.__views.__alloyId2.addEventListener("click", doClickAsiNoMasPo);
    __defers["$.__views.__alloyId3!click!doClickEstupido"] && $.__views.__alloyId3.addEventListener("click", doClickEstupido);
    __defers["$.__views.__alloyId4!click!doClickHomeroCerveza"] && $.__views.__alloyId4.addEventListener("click", doClickHomeroCerveza);
    __defers["$.__views.__alloyId5!click!doClickHomeroLisa"] && $.__views.__alloyId5.addEventListener("click", doClickHomeroLisa);
    __defers["$.__views.__alloyId6!click!doClickRisaMala"] && $.__views.__alloyId6.addEventListener("click", doClickRisaMala);
    __defers["$.__views.__alloyId7!click!doClickGrito"] && $.__views.__alloyId7.addEventListener("click", doClickGrito);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;