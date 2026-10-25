function processInput(){
   
    const pageRedirects = [
        {input: "encroach", URL: 'last.html'}
    ];

    const userInput = document.getElementById ("a5").value.trim();
     
    const match = pageRedirects.find(item => item.input.toLowerCase()=== userInput.toLowerCase());
 
    event.preventDefault();

    if (match) {
     window.location.assign ('last.html');
    } else {
    alert ("incorrect");
    }
}

