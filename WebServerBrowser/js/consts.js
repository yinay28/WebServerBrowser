var GAME_TYPES = {
    arma3: "Arma 3",
    arma2: "Arma 2",
    arma2ao: "Arma 2 Arrowhead Operation",
    dayz: "Dayz mod",
    cs16: "Counter Strike 1.6",
    csgo: "Counter Strike Global Offence"
};

var SELECT_OPTION_TEMPLATE = '<option value="{0}">{1}</option>';

var SHOW_SERVER_DETAILS_LABEL = "View details &raquo;";
var HIDE_SERVER_DETAILS_LABEL = "Hide details &laquo;";

var ROW_DIV_TEMPLATE = '<div class="row">{0}</div>';

var SERVER_HTML_TEMPLATE =
    '<div class="col-md-3" id="server-{0}">' +
        '<div class="server-info bg-{4}">' +
            '<h4>{1}</h4>' +
            '<p>{2}</p>' +
            '<p><button class="btn btn-default server-details-button" role="button">View details &raquo;</button></p>' +
            '<div class="server-details">' +
                '<p>{3}</p>' +
            '</div>' +
        '</div>' +
    '</div>';

var SUCCESS = 'success';
var DANGER = 'danger';