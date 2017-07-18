$(document).ready(function() {	
var timer;

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

	var track = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		timerNum: 30,

		count: function() {
			track.timerNum--;

			$('#countdown').html(track.timerNum);
			//won't stop
			if (track.timerNum <= 0) {
				console.log("Time's UP.");
				track.done();
			}
		},

		startTrivia: function() {
			//once we click on start we remove the start button and show the questions		
			timer = setInterval(track.count,1000);
			$('#timer').prepend('<h2>Time Remaining: <span id="countdown">30</span> Seconds</h2>');
			$("#start").remove();
			for (i=0; i<quiz.length;i++) {
				$("#container").append('<h2>'+ quiz[i].question + '<h2>');

				for (j = 0; j < quiz[i].options.length; j++) {
					$("#container").append("<input type='radio' name='quiz-"+i+"' value='"+quiz[i].options[j]+"'>"+quiz[i].options[j]);
				}
			}

			$("#container").append('<br><button id="end">SUBMIT</button>');
		
		},

		done: function() {
	
			$.each($('input[name="quiz-0]":checked'), function() {
				if($(this).val()==quiz[0].answer){
					track.correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					track.unanswered++;
				}
				else {
					track.incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="quiz-1]":checked'), function() {
				if($(this).val()==quiz[1].answer){
					track.correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					track.unanswered++;
				}
				else {
					track.incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="quiz-2]":checked'), function() {
				if($(this).val()==quiz[2].answer){
					track.correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					track.unanswered++;
				}
				else {
					track.incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="quiz-3]":checked'), function() {
				if($(this).val()==quiz[3].answer){
					track.correct++;
					console.log(correct);
					
				}
				else if ($(this).val() === '') {
					track.unanswered++;
				}
				else {
					track.incorrect++;
					console.log(incorrect);
				}
			});
			$.each($('input[name="quiz-4]":checked'), function() {
				console.log("hi");
				if($(this).val()==quiz[4].answer){
					track.correct++;
					
				}
				else if ($(this).val() === '') {
					track.unanswered++;
				}
				else {
					track.incorrect++;
					console.log(track.incorrect);
				}
			});

			this.result();
		},

		result: function() {
			clearInterval(timer);
			$("#result h2").remove();

			$("#container").html("<h2>ALL DONE!<h2>");
			$("#container").append("<h3>Correct Answers:"+ this.correct + "</h3>");
			$("#container").append("<h3>Incorrect Answers:"+ this.incorrect + "</h3>");
			$("#container").append("<h3>Unanswered: "+ this.unanswered +"</h3>");
		}		
	}
	
	
	
	$("#start").on("click", function() {
		track.startTrivia();
			
	});

	$(document).on('click', '#end', function() {
		track.result();
	});
		
		

});








	

	


