function processInput(){
   
    const pageRedirects = [
        {input: "immoral", URL: 'third.html'}
    ];

    const userInput = document.getElementById ("a2").value.trim();
     
    const match = pageRedirects.find(item => item.input.toLowerCase()=== userInput.toLowerCase());
 
    event.preventDefault();

    if (match) {
     window.location.assign ('third.html');
    } else {
    alert ("incorrect");
    }




}

