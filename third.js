function processInput(){
   
    const pageRedirects = [
        {input: "degenerate", URL: 'fourth.html'}
    ];

    const userInput = document.getElementById ("a3").value.trim();
     
    const match = pageRedirects.find(item => item.input.toLowerCase()=== userInput.toLowerCase());
 
    event.preventDefault();

    if (match) {
     window.location.assign ('fourth.html');
    } else {
    alert ("incorrect");
    }
}

