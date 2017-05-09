"use strict";

$(function () {

    var html = $("#test").html();

    var testData = {
        header: "Тест по программированию",
        questions: [
            "Вопрос_1",
            "Вопрос_2",
            "Вопрос_3",
            "Вопрос_4",
            "Вопрос_5"],
        answers: [
            ["Ответ_1 Вопрос_1", "Ответ_2 Вопрос_1", "Ответ_3 Вопрос_1", "Ответ_4 Вопрос_1"],
            ["Ответ_1 Вопрос_2", "Ответ_2 Вопрос_2", "Ответ_3 Вопрос_2", "Ответ_4 Вопрос_2"],
            ["Ответ_1 Вопрос_3", "Ответ_2 Вопрос_3", "Ответ_3 Вопрос_3", "Ответ_4 Вопрос_3"],
            ["Ответ_1 Вопрос_4", "Ответ_2 Вопрос_4", "Ответ_3 Вопрос_4", "Ответ_4 Вопрос_4"],
            ["Ответ_1 Вопрос_5", "Ответ_2 Вопрос_5", "Ответ_3 Вопрос_5", "Ответ_4 Вопрос_5"]
        ],
        correct_answers: [
            " Ответ_1 Вопрос_1 ",
            " Ответ_2 Вопрос_2 ",
            " Ответ_4 Вопрос_3 ",
            " Ответ_2 Вопрос_4 ",
            " Ответ_3 Вопрос_5 "
        ],
        button: "Проверить мои результаты"

    };

    $(".test-form").hide();

    $('#toLocalStorage').click(function () {
        try {
            localStorage.setItem('testData', JSON.stringify(testData));
            $(this).addClass('btn-success');
            $(this).addClass('disabled');
            $(this).attr('disabled', "");
            $("#fromLocalStorage").removeClass('disabled');
            $("#fromLocalStorage").removeAttr('disabled');
        } catch (err) {
            alert('ERROR: "' + err.name + err.message);
            $(this).addClass('btn-danger');
        }
    });

    $('#fromLocalStorage').click(function () {
        try {
            $(".test-form").show();
            var parseTestData = JSON.parse(localStorage['testData']);
            var content = tmpl(html, {data: parseTestData});
            $("body").append(content);



            $('#testButton').click( function(event){
                event.preventDefault();
                $('#overlay').fadeIn(400,
                    function(){
                        $('#modal_form')
                            .css('display', 'block')
                            .animate({opacity: 1, top: '50%'}, 200);
                    });
            });

            $('#modal_close, #overlay').click( function(){
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,
                        function(){
                            $(this).css('display', 'none');
                            $('#overlay').fadeOut(400);
                        }
                    );
            });

            $(this).addClass('btn-success');
            $(this).addClass('disabled');
            $(this).attr('disabled', "");
            $('#testButton').click(function () {
                var input = $('input');
                var answersArray = [];
                for (var i = 0; i < input.length; i++) {
                    if (input[i].checked) {
                        answersArray.push(input[i].nextSibling.nodeValue);
                    }
                }
                localStorage.setItem('answers', JSON.stringify(answersArray));
                $(".test-form").hide(500);
                var parseAnswers = JSON.parse(localStorage['answers']);


                var correctAnswers = [];
                for (var i = 0; i < testData.correct_answers.length; i++) {
                    for (var j = 0; j < parseAnswers.length; j++) {
                        if (testData.correct_answers[i] == parseAnswers[j]) {
                            correctAnswers.push(testData.correct_answers[i]);
                        }
                    }
                }

                $("#modal_text").html("Правильных ответов: " + correctAnswers.length);

                $("#reload").removeClass('disabled');
                $("#reload").removeAttr('disabled');

            });
            localStorage.clear();
        } catch (err) {
            alert('ERROR: "' + err.name + err.message);
            $(this).addClass('btn-danger');
        }
    });

    $("#reload").click(function () {
        location.reload();
    })

});