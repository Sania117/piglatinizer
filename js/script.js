$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function(){
            console.log("hello");
        let input = $(".input").val();
            console.log(input);

        let vowels = ["a", "e", "i", "o", "u"];

        let word = input.substr(1);

            console.log(word);

        let index = input.charAt(0);

            console.log(index);

        let isTrue = vowels.includes(index);

            console.log(isTrue);

        if (isTrue == true) {
            $(".output").html("<div>" + input + "ay" + "</div>");
        } else {
             $(".output").html("<div>" + word + index + "ay" + "</div>");
        }


       // $(".output").append("<div class = 'test'>" + input + "</div>");

        


        

        //let pig = word.concat(index);

        //$(".output").append("<div class = 'test'>" + pig + "ay" + "</div>");



        //function pigLatin(str) {

          //      str = str.toLowerCase()

            //   

              //  let vowelIndex = 0;

                //let input = input.val();

                //if (vowels.includes(str[0])) {

                  //  return str + "way";
                //} else {

                  //  for (let char of str) {

                    //    if (vowels.includes(char)) {

                      //      vowelIndex = str.indexOf(char);
                        //    break;
                        //}
                    //}

                    //return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
                    //}


     //   }



    });




});


