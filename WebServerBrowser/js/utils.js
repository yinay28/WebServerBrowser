Utils = (function(){

	var MAX_PORT_VALUE = 65535;
	var MIN_PORT_VALUE = 0;
	
	var typesMap = {
		'arma3':'source',
		'arma2':'source',
		'arma2oa':'source',
		'dayz':'source',
		'minecraft':'minecraft'
	};
	
	return {
		validateIP:function(ip)
		{
			return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
		},

		validateHostname:function(hostname)
		{
			return /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname);
		},
			
		validatePort:function(port)
		{
			var portNumber = parseInt(port);
			
			return portNumber >= MIN_PORT_VALUE
			&& portNumber <= MAX_PORT_VALUE
			&& port === portNumber.toString();
		},
		parseJson:function(jsonString)
		{
			var result = undefined;
			try {
				result = JSON.parse(jsonString);
			} catch (e) {}
			return result;
		},
		stringFormat:function(template, strings)
		{
			var currentToReplace;
			var outputString = template;
			for(var currentStringIndex = 0; currentStringIndex < strings.length; currentStringIndex++)
			{
				currentToReplace = "{" + currentStringIndex + "}";
				outputString = outputString.replace(currentToReplace, strings[currentStringIndex]);
			}
			return outputString;
		}
	}	
})();