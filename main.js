var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
    return Serie;
}());
var series = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Stranger Things", "Netflix", 4),
    new Serie(3, "Game of Thrones", "HBO", 8),
    new Serie(4, "The Big Bang Theory", "CBS", 12),
    new Serie(5, "Sherlock", "BBC", 4)
];
function mostrarTabla() {
    var cuerpo = document.getElementById("tablaSeries");
    var html = "";
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        html += "\n        <tr>\n          <td>".concat(s.id, "</td>\n          <td>").concat(s.name, "</td>\n          <td>").concat(s.channel, "</td>\n          <td>").concat(s.seasons, "</td>\n        </tr>\n      ");
    }
    cuerpo.innerHTML = html;
}
function calcularPromedio() {
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var s = series_2[_i];
        total += s.seasons;
    }
    return total / series.length;
}
function mostrarPromedio() {
    var p = document.getElementById("promedio");
    p.textContent = "promedio de temporadas: " + calcularPromedio().toFixed(2);
}
mostrarTabla();
mostrarPromedio();
