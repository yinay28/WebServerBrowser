/**
 * Created by Vasili on 11/21/2014.
 */

AddServerVerifier = (function()
{
    function checkHost(host)
    {
        return Utils.validateIP(host) ? true : Utils.validateHostname(host);
    }

    function checkPort(port)
    {
        return Utils.validatePort(port);
    }

    function checkGameType(type)
    {
        //TODO: add gametype validation so only supported game types can be added.
        return true;
    }

    return {
        verify:function(host, port, gameType)
        {
            var hostVerify = checkHost(host);
            var portVerify = checkPort(port);
            var typeVerify = checkGameType(gameType);

            return {
                host: hostVerify,
                port: portVerify,
                type: typeVerify,
                result: (hostVerify && portVerify && typeVerify)

            };
        }

    }
})()
