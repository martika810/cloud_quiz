$.ajax({
		type:"GET",
		ur:"https://kyw8h96294.execute-api.eu-west-1.amazonaws.com/aws_questions_stage/",
		crossDomain: true,
		contentType: "application/json",
		beforeSend: function(xhr){
			xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
			xhr.setRequestHeader("Access-Control-Allow-Methods", "OPTIONS,GET");
			xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With,Access-Control-Allow-Headers,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
			xhr.setRequestHeader("Content-Type", "application/json");
		},
		success: function(body,statusCode){
			console.log('Request to the api');
			console.log(JSON.stringify(body));
		},
		error: function(data){
			console.log("error = "+JSON.stringify(data));
		}
});
