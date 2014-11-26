
var serverManager;

function onWindowLoad()
{
	serverManager = new ServerManager();

	$('.selectpicker').selectpicker();

	var typeDisplayName;
	for (var typeValue in GAME_TYPES) {
		if (GAME_TYPES.hasOwnProperty(typeValue)) {
			typeDisplayName = GAME_TYPES[typeValue];
			$('#inputType').append(Utils.stringFormat(SELECT_OPTION_TEMPLATE, [typeValue, typeDisplayName]));
		}
	}
	$('#inputType').selectpicker('refresh');

	$('#servers-board').on('click', '.server-details-button',function () {
		var thisButtonSelector = $(this);
		var serverDetailsSelector = thisButtonSelector.closest("div").children('.server-details');
		var changeLabelCallback = function()
		{
			thisButtonSelector.html(serverDetailsSelector.is(':visible') ? HIDE_SERVER_DETAILS_LABEL : SHOW_SERVER_DETAILS_LABEL);
		};
		serverDetailsSelector.fadeToggle(undefined, changeLabelCallback);

	});

	$('#update-servers-button').click(function () {
		serverManager.updateServersStatus();

	});
	$('#addServerButton').click(function () {
		var host = $('#inputHost').val();
		var port = $('#inputPort').val();
		var type = $('#inputType').val();
		var addServerResult = serverManager.addServer(host, port, type);
		$('#addServerModal').modal('hide');
		if(addServerResult.result)
		{
			serverManager.updateServersStatus();
		}

	});


}