function processInput(){
   
    const pageRedirects = [
        {input: "anomie", URL: 'second.html'}
    ];

    const userInput = document.getElementById ("a1").value.trim();
     
    const match = pageRedirects.find(item => item.input.toLowerCase()=== userInput.toLowerCase());
 
    event.preventDefault();

    if (match) {
     window.location.assign ('second.html');
    } else {
    alert ("incorrect");
    }
}

