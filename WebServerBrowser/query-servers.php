<?php
require_once("./config.inc.php");
require_once("./gameq/GameQ.php");
if(isset($_POST['servers']))
{
	$serverRaw = $_POST['servers'];
	
	$servers = json_decode($serverRaw, true);
	
	// Call the class, and add your servers.
	$gq = new GameQ();
	$gq->addServers($servers);

	// You can optionally specify some settings
	$gq->setOption('timeout', 50); //in seconds

	// You can optionally specify some output filters,
	// these will be applied to the results obtained.
	$gq->setFilter('normalise'); //makes sure a fixed set of variables is always available

	// Send requests, and parse the data
	$results = $gq->requestData();

	echo json_encode(array_values($results));
	exit();
}

?>


