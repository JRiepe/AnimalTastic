


//-----------------------------------------------------------------------------------------------
//      Javascript AnimalTastic Game
//------------------------------------------------------------------------------------------------


    function startProgram(){
        var animals = ["dog", "cat", "horse", "whale", "dolphin", "fox", "wolf", "tiger", "elephant"];
        var newAnimal;
        var animalImg;
        var results;      
        var i=0;
      

        for (i=0;i<animals.length;i++)  {
            
            var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('aniButton'); // Added a class 
            a.attr('data-name', animals[i]); // Added a data-attribute
            a.text(animals[i]); // Provided the initial button text
            $('#buttonCol').append(a); // Added the button to the HTML
            console.log('add button this: '+animals[i]);
        } // end for loop
        
                




//-----------------------------------------------------------------------------------------------
//         On click Functions:
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------               
// click submit to add animal
//-----------------------------------------------------------------------------------------------

              

                $('#addAnimal').on('click', function(){
                        
                        newAnimal=$('#animal-input').val().trim();
                      
                        console.log('add animal this: '+newAnimal);
                        var b = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
                        b.attr('class', 'aniButton'); // Added a class 
                        b.attr('data-name', newAnimal); // Added a data-attribute
                        b.text(newAnimal); // Provided the initial button text
                        $('#buttonCol').append(b);

                        return false;
                        

                }); // end $('#addAnimal').on('click', function()





//-----------------------------------------------------------------------------------------------               
// click button to show images of 
//-----------------------------------------------------------------------------------------------
                $(document).on('click', '.aniButton', function(){
                
                          console.log($(this).attr('data-name'));
                          var animal = $(this).attr('data-name');
                          console.log(animal);
                          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
                          $('#animalRow').empty();
                              // Creates AJAX call for the specific movie being 
                              $.ajax({url: queryURL, method: 'GET'}).done(function(response) {



                              results = response.data;

                              //--------------------------------

                              for (var i = 0; i < results.length; i++) {

                                  var animalDiv = "" // $('<div class="animalDiv">');
                                  var p = $('<p>').text('Rating: ' + results[i].rating);

                                  animalImg = $('<img>').attr('src',results[i].images.fixed_height_still.url);
                                  
                                  animalImg.addClass('animalImage');
                                  animalImg.attr('data-still', results[i].images.fixed_height_still.url);
                                  animalImg.attr('data-animate', results[i].images.fixed_height.url);
                                  animalImg.attr('data-state','still');
                                  
                                  // animalDiv.append(p).append(animalImg);
                                  $('#animalRow').append(p).append(animalImg);   // prepend(animalDiv);
                                  
                                 }
                                 //return false;
                               }); 

                            //return false;

                }); // end $('.aniButton').on('click', function()




//-----------------------------------------------------------------------------------------------               
// click image to animate
//-----------------------------------------------------------------------------------------------

                  $(document).on('click', '.animalImage', function(){
                 
                    
                        var state = $(this).attr("data-state");
                        
                        if (state == 'still') {
                            $(this).attr('src',$(this).attr('data-animate'));
                            $(this).attr('data-state','animate');
                            
                        }

                        else  {
                            $(this).attr('src',$(this).attr('data-still'));
                            $(this).attr('data-state','still');
                            
                        }
                        //----------------------------------------------------

                        
                });    // end $('.animalImage').on('click', function() 
    
                                      

}  //end function startProgram()

