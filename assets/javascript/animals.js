


//-----------------------------------------------------------------------------------------------
//      Javascript AnimalTastic Game
//------------------------------------------------------------------------------------------------


    function startProgram(){
        $('#buttonCol').empty();
        var animals = ["dog", "cat", "horse", "whale", "dolphin", "fox", "wolf", "tiger", "elephant"];
        buttonGenerator();

//-----------------------------------------------------------------------------------------------
//         Functions buttonGenerator() adds animal buttons to page
//-----------------------------------------------------------------------------------------------
     

        function buttonGenerator() {
              $('#buttonCol').empty();
              var i=0;
              for (i=0;i<animals.length;i++)  {
                  var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
                  a.addClass('aniButton'); // Added a class 
                  a.attr('data-name', animals[i]); // Added a data-attribute
                  a.text(animals[i]); // Provided the initial button text
                  $('#buttonCol').append(a); // Added the button to the HTML
                  
              } // end for loop

        }
        
        
                

//-----------------------------------------------------------------------------------------------
//         On click Functions:
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------               
// click submit to add animal to array and regenerate buttons
//-----------------------------------------------------------------------------------------------

              

                $('#addAnimal').on('click', function(){
                        
                        var newAnimal=$('#animal-input').val().trim();
                        if (newAnimal) {
                            
                            animals.push(newAnimal);
                            buttonGenerator();
                        }
                        return false;
                        

                }); // end $('#addAnimal').on('click', function()





//-----------------------------------------------------------------------------------------------               
// click animal button to show images of chosen animal
//-----------------------------------------------------------------------------------------------

                $(document).on('click', '.aniButton', function(){
                
                          var animal = $(this).attr('data-name');
                          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=10";
                          
                          $('#animalRow').empty();
                              // Creates AJAX call for the specific movie being 
                              $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                                      var results = response.data;
                                      
                                      if (results.length > 0) {
                                          for (var i = 0; i < results.length; i++) {

                                              var p = $('<p>').text('Rating: ' + results[i].rating);

                                              var animalImg = $('<img>').attr('src',results[i].images.fixed_height_still.url);
                                              
                                              animalImg.addClass('animalImage');
                                              animalImg.attr('data-still', results[i].images.fixed_height_still.url);
                                              animalImg.attr('data-animate', results[i].images.fixed_height.url);
                                              animalImg.attr('data-state','still');
                      
                                              $('#animalRow').append('<hr>').append(p).append(animalImg);
                                              
                                          }
                                      } else {
                                        $('#animalRow').append('<h3>No Results Found, try again!');
                                      }
                                 
                              }); 

                            

                }); // end $('.aniButton').on('click', function()




//-----------------------------------------------------------------------------------------------               
// click on image to animate or de-animate
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
                        
                        
                });    // end $('.animalImage').on('click', function() 
    
                                      

}  //end function startProgram()

