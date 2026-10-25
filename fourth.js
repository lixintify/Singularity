function processInput(){
   
    const pageRedirects = [
        {input: "forsaken", URL: 'fifth.html'}
    ];

    const userInput = document.getElementById ("a4").value.trim();
     
    const match = pageRedirects.find(item => item.input.toLowerCase()=== userInput.toLowerCase());
 
    event.preventDefault();

    if (match) {
     window.location.assign ('fifth.html');
    } else {
    alert ("incorrect");
    }
}

