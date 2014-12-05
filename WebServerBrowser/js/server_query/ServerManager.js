var ServerManager = function()
{
	this.servers = [];
	this.serversInfo = {};
	this.id = 0;
}

ServerManager.prototype = (function()
{
	function requestServerInfo(servers, callback) 
	{
		var serversRequestJson  = 'servers=' + JSON.stringify(servers);
		$.ajax({
			type: "POST",
			url: "query-servers.php",
			data: serversRequestJson,
			success: function(data) {
				var response = Utils.parseJson(data);
				if(response == undefined)
				{
					callback({
						success: false,
						reason: 'Fail to parse json.',
						data: data
					});
					return;
				}
				this.serversInfo = {};
				for(var serverIndex in response)
				{
					if(response.hasOwnProperty(serverIndex))
					{
						this.serversInfo[serverIndex] = (new ServerInfo(response[serverIndex]));
					}
				}
				callback({
					success: true,
					reason: "",
					data: this.serversInfo
				});
			}
		});
	};

	function showErrorMessage(data)
	{

	}

	function getServerHtml(id, serverInfo)
	{
		console.log("server id" + id);
		return Utils.stringFormat(SERVER_HTML_TEMPLATE, [id, serverInfo.hostname, serverInfo.description, serverInfo.port, serverInfo.isOnline() ? SUCCESS : DANGER])
	}

	function updateHtmlOfServers(data)
	{
		if(!data.success)
		{
			$('#servers-board').html(data.reason+'<\\br>'+data.data);
			return;
		}
		var SERVERS_PER_ROW = 4;
		var serversHtml = '';
		var tempRowHtml = '';
		var serversCounter = 0;
		for(var serverIndex in data.data)
		{
			if(data.data.hasOwnProperty(serverIndex))
			{
				tempRowHtml += getServerHtml(serverIndex, data.data[serverIndex]);
				serversCounter += 1;
				if(serversCounter % SERVERS_PER_ROW === 0)
				{
					serversHtml += Utils.stringFormat(ROW_DIV_TEMPLATE, [tempRowHtml]);
					tempRowHtml = '';
				}
				console.log(tempRowHtml);
			}
		}

		if(serversCounter % SERVERS_PER_ROW != 0)
		{
			serversHtml += Utils.stringFormat(ROW_DIV_TEMPLATE, [tempRowHtml]);
		}
		$('#servers-board').empty();
		$('#servers-board').html(serversHtml);
	}


	
	return {
		updateServersStatus:function(){
			if(this.servers.length > 0)
			{
				requestServerInfo(this.servers, updateHtmlOfServers);
				return true;
			}
			return false;
		},
		
		addServer:function(host, port, type){
			var verifyInput = AddServerVerifier.verify(host, port, type)
			if(!verifyInput.host
				|| !verifyInput.port
				|| !verifyInput. type)
			{
				return verifyInput;
			}
			
			var server = {
				'id' : this.id.toString(),
				'type' : type,
				'host' : (host + ':' + port.toString())
			};
			this.servers.push(server);			
			this.id += 1
			return verifyInput;
		},
		
		clearServers : function (){
			this.servers = [];
			this.serversInfo = [];
			this.id = 0;
		}
		
	};
})();