function route( handle, pathname )
{
	console.log("About to route request for " + pathname);
	if (typeof handle[pathname] === 'function')
	{
		handle[pathname]();
	}
	else
	{
		console.log("No request handler for "+ pathname);
	}
	
}

exports.route = route;
