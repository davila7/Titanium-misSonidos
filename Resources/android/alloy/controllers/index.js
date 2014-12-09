function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClickAh() {
        ahha.play();
    }
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
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "black",
        layout: "vertical",
        id: "__alloyId1"
    });
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "ahh haaa!!",
        height: "50",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    doClickAh ? $.__views.__alloyId3.addEventListener("click", doClickAh) : __defers["$.__views.__alloyId3!click!doClickAh"] = true;
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Así no mas po!",
        height: "50",
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    doClickAsiNoMasPo ? $.__views.__alloyId4.addEventListener("click", doClickAsiNoMasPo) : __defers["$.__views.__alloyId4!click!doClickAsiNoMasPo"] = true;
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Estupido!",
        height: "50",
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    doClickEstupido ? $.__views.__alloyId5.addEventListener("click", doClickEstupido) : __defers["$.__views.__alloyId5!click!doClickEstupido"] = true;
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Homero Cerveza",
        height: "50",
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    doClickHomeroCerveza ? $.__views.__alloyId6.addEventListener("click", doClickHomeroCerveza) : __defers["$.__views.__alloyId6!click!doClickHomeroCerveza"] = true;
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Homero Lisa",
        height: "50",
        id: "__alloyId7"
    });
    __alloyId2.push($.__views.__alloyId7);
    doClickHomeroLisa ? $.__views.__alloyId7.addEventListener("click", doClickHomeroLisa) : __defers["$.__views.__alloyId7!click!doClickHomeroLisa"] = true;
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        title: "Risa Malvada",
        height: "50",
        id: "__alloyId8"
    });
    __alloyId2.push($.__views.__alloyId8);
    doClickRisaMala ? $.__views.__alloyId8.addEventListener("click", doClickRisaMala) : __defers["$.__views.__alloyId8!click!doClickRisaMala"] = true;
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        title: "Grito",
        height: "50",
        id: "__alloyId9"
    });
    __alloyId2.push($.__views.__alloyId9);
    doClickGrito ? $.__views.__alloyId9.addEventListener("click", doClickGrito) : __defers["$.__views.__alloyId9!click!doClickGrito"] = true;
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2,
        id: "table",
        backgroundColor: "#02026B"
    });
    $.__views.__alloyId1.add($.__views.table);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "tab1",
        title: "Mis Sonidos"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "Tab 2"
    });
    $.__views.label2 = Ti.UI.createLabel({
        text: "Carga de sonidos de Galería",
        id: "label2",
        color: "#999"
    });
    $.__views.win2.add($.__views.label2);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.win2,
        id: "tab2",
        title: "Galería"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
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
        url: "http://paginasprueba.netau.net/sites/Asi+nomas+po+Ruperto.mp3",
        preload: true
    });
    var estupido = Titanium.Media.createSound({
        url: "http://paginasprueba.netau.net/sites/Estupido+Rupertina.mp3",
        preload: true
    });
    var ahha = Titanium.Media.createSound({
        url: "http://paginasprueba.netau.net/sites/AHAA.mp3",
        preload: true
    });
    $.index.open();
    __defers["$.__views.__alloyId3!click!doClickAh"] && $.__views.__alloyId3.addEventListener("click", doClickAh);
    __defers["$.__views.__alloyId4!click!doClickAsiNoMasPo"] && $.__views.__alloyId4.addEventListener("click", doClickAsiNoMasPo);
    __defers["$.__views.__alloyId5!click!doClickEstupido"] && $.__views.__alloyId5.addEventListener("click", doClickEstupido);
    __defers["$.__views.__alloyId6!click!doClickHomeroCerveza"] && $.__views.__alloyId6.addEventListener("click", doClickHomeroCerveza);
    __defers["$.__views.__alloyId7!click!doClickHomeroLisa"] && $.__views.__alloyId7.addEventListener("click", doClickHomeroLisa);
    __defers["$.__views.__alloyId8!click!doClickRisaMala"] && $.__views.__alloyId8.addEventListener("click", doClickRisaMala);
    __defers["$.__views.__alloyId9!click!doClickGrito"] && $.__views.__alloyId9.addEventListener("click", doClickGrito);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;