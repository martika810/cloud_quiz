$.ajax({
		type:"GET",
		ur:"https://kyw8h96294.execute-api.eu-west-1.amazonaws.com/aws_questions_stage/",
		crossDomain: true,
		contentType: "application/json",
		success: function(body,statusCode){
			console.log('Request to the api');
			console.log(JSON.stringify(body));
		}
});
