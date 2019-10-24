$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function(){

        let input = $(".input").val();
       // $(".output").append("<div class = 'test'>" + input + "</div>");

        let word = input.substr(1);


        let index = input.charAt(0);

        let pig = word.concat(index);

        $(".output").append("<div class = 'test'>" + pig + "ay" + "</div>");



    });




});


