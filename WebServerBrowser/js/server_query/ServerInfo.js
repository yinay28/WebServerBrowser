function Player(player)
{
	this.name = player.name;
	this.score = player.score;
}

function ServerInfo(server, type)
{
	this.online = server.gq_online;
	this.description = server.game_descr;
	this.hostname = server.hostname;
	this.address = server.gq_address;
	this.port = server.gq_port;
	this.map = server.gq_mapname;
	this.maxPlayers = server.gq_maxplayers;
	this.numberOfPlayer = server.gq_numplayers;
	this.password = server.gq_password;
	this.players = [];
	
	if(server.players instanceof Array)
	{
		for(var i = 0; i < server.players.length; i++)
		{
			this.players.push(new Player(server.players[i]));
		}
	}
	
	this.type = type;
}

ServerInfo.prototype = (function()
{
	

	var EMPTY_FIELD_VALUE = 'n/a';
	return {
		getMaxPlayers: function()
		{
			if(this.maxPlayers == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.maxPlayers;
		},
		getPlayersCount: function()
		{
			if(this.numberOfPlayer == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.numberOfPlayer;
		},
		getPlayers: function()
		{
			if(this.players == undefined)
			{
				return [];
			}
			return this.players;
		},
		getAddress: function()
		{
			if(this.address == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.address;
		},
		getDescription: function()
		{
			if(this.description == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.description;
		},
		getPort: function()
		{
			if(this.port == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.port;
		},
		hasPassword: function()
		{
			if(this.password == undefined)
			{
				return EMPTY_FIELD_VALUE;
			}
			return this.password != "0";
		},
		isOnline: function()
		{
			if(this.online == undefined)
			{
				return false;
			}
			return this.online;
		}
	};
})();
