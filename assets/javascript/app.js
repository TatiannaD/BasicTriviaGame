$(document).ready(function() {	

	var quiz = [
			{ question: "What is Simba's Father's name?",
			  answer: "Mufasa",
			  options: ["Scar","Mufasa","Beast","Zaddy"]
			},
			{ question: "In Frozen, Elsa sings the infamous song Let It (blank)?",
			  answer: "Go",
			  options: ["Go","Flow","Not","Stop"]
			},
			{ question: "Who saved China?",
			  answer: "Mulan",
			  options: ["Mulan","Rapunzel","Aladdin","Trump"]
			},
			{ question: "Which Disney character has long hair ?",
			  answer: "Rapunzel",
			  options: ["Yo' Mama","Rapunzel","Tiana","Moana"]
			},
			{ question: "Who sailed across the sea to restore the heart of Ti Fiti?",
			  answer: "Moana",
			  options: ["Hercules","Tiana","Obama","Moana"]
			},	
	]

	var intervalId;
	var timerNum = 30;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var selectedAnswers = [];
	
	var track = {

	 	run: function() {
			intervalId = setInterval(track.decrement, 1000);
	 	},
	 	decrement: function() {
	 		timerNum--;
			$("#timer").html("<h2>" + timerNum + "<h2>");

			if (timerNum === 0) {
				track.result();
				alert("Time's Up!!")

			}
	 	},

		startTrivia: function() {
			//once we click on start we remove the start button and show the questions		
			$("#start").remove();
			track.run();
			for (i=0; i<quiz.length;i++) {
				$("#container").append('<h2>'+ quiz[i].question + '<h2>');

				for (j = 0; j < quiz[i].options.length; j++) {
					 
					$("#container").append("<input type='radio' name='question-"+[i]+"' value='"+quiz[i].options[j]+"'/>"+quiz[i].options[j]);
					
				}
			}

			$("#container").append('<br><button id="end">SUBMIT</button>');
		
		},

		done: function() {
	
			$.each($('input[name="question-1]":checked'), function(){
				if($(this).val()==quiz[1].answer){
					correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					unanswered++;
				}
				else {
					incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="question-2]":checked'), function(){
				if($(this).val()==quiz[2].answer){
					correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					unanswered++;
				}
				else {
					incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="question-3]":checked'), function(){
				if($(this).val()==quiz[3].answer){
					correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					unanswered++;
				}
				else {
					incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="question-4]":checked'), function(){
				if($(this).val()==quiz[4].answer){
					correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					unanswered++;
				}
				else {
					track.incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="question-5]":checked'), function(){
				if($(this).val()==quiz[5].answer){
					correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					unanswered++;
				}
				else {
					incorrect++;
					console.log(incorrect);
				}
			});

			this.result();
		},

		result: function() {
			clearInterval(intervalId);
			$("#container h2").remove();

			$("#container").html("<h2>ALL DONE!<h2>");
			$("#container").append("<h3>Correct Answers:"+ correct + "</h3>");
			$("#container").append("<h3>Incorrect Answers:"+ incorrect + "</h3>");
			$("#container").append("<h3>Unanswered: "+ unanswered +"</h3>");
		}		
	}
	
	
	
	$("#start").on("click", function() {
		track.startTrivia();
		
			
	});

	$(document).on('click', '#end', function() {
		track.result();
	});
		
		

});








	

	


