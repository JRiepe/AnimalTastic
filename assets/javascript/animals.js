


//-----------------------------------------------------------------------------------------------
//      Javascript AnimalTastic Game
//------------------------------------------------------------------------------------------------


    function startProgram(){
        addArray();



//-----------------------------------------------------------------------------------------------
//              Functions:
//-----------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------
// Function: addArray() - adds buttons for each animal in initial array 
//-----------------------------------------------------------------------------------------------

        function addArray() {
              //$('#buttonCol').empty();
              var i=0;
              var animals = ["dog", "cat", "horse", "whale", "dolphin", "fox", "wolf", "tiger", "elephant"];

              for (i=0;i<animals.length;i++)  {
                  
                  var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
                  a.addClass('aniButton'); // Added a class 
                  a.attr('data-name', animals[i]); // Added a data-attribute
                  a.text(animals[i]); // Provided the initial button text
                  $('#buttonCol').append(a); // Added the button to the HTML
              }  // end for loop
        } // end function addArray()


//-----------------------------------------------------------------------------------------------       
// Function: addAnimal() - adds a new animal button for searching
//-----------------------------------------------------------------------------------------------

        function addNewAnimal() {
                  var newAnimal=$('#animal-input').val().trim();
                  var b = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
                  b.addClass('aniButton'); // Added a class 
                  b.attr('data-name', newAnimal); // Added a data-attribute
                  b.text(newAnimal); // Provided the initial button text
                  $('#buttonCol').append(b); // Added the button to others

        } // end addAnimal()


//-----------------------------------------------------------------------------------------------
// Function: displayAnimalInfo() - displays the search query results for animal selected
//-----------------------------------------------------------------------------------------------

         function displayAnimalInfo(){

            var animal = $(this).attr('data-name');
            console.log(animal);
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
            $('#animalRow').empty();
                // Creates AJAX call for the specific movie being 
                $.ajax({url: queryURL, method: 'GET'}).done(function(response) {



                var results = response.data;

                //--------------------------------

                for (var i = 0; i < results.length; i++) {

                    var animalDiv = $('<div class="animalDiv">')
                    var p = $('<p>').text('Rating: ' + results[i].rating);

                    var animalImage = $('<img>').attr('src',results[i].images.fixed_height.url);
                    animalImage.attr('data-still', results[i].images.fixed_height.url);
                    animalImage.attr('data-animate', results[i].images.fixed_height_downsampled.url);
                    animalImage.attr('data-state','still');
                    $('.animalDiv').append(p).append(animalImage);
                    $('#animalRow').prepend(animalDiv);
 
                   }
                 }); 

  } // end displayAnimalInfo()


//-----------------------------------------------------------------------------------------------
//         On click Functions:
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------               
// click button
//-----------------------------------------------------------------------------------------------

                $('.aniButton').on('click', function(){
                        displayAnimalInfo();
                        return false;

                }); // end $('.animalImage').on('click', function()



//-----------------------------------------------------------------------------------------------               
// click submit
//-----------------------------------------------------------------------------------------------

                $('#addAnimal').on('click', function(){
                        addNewAnimal();
                        return false;

                }); // end $('.animalImage').on('click', function()

//-----------------------------------------------------------------------------------------------               
// click image
//-----------------------------------------------------------------------------------------------


                $('.animalImage').on('click', function(){
                    
                        var state = $(this).attr("data-state");
                        console.log(state);
      
                        if (state == 'still') {
                            $(this).attr("src",$(this).attr("data-animate"));
                             $(this).attr("data-state","animate"); // n
                        }

                        else  {
                            $(this).attr("src",$(this).attr("data-still"));
                            $(this).attr("data-state","still");
                        }
                        //----------------------------------------------------

                        return false;
                });    // end $('.animalImage').on('click', function()
                   


}  //end function startProgram()

