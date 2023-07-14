// Get a reference to the form element
const form = document.getElementById('myForm');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const firstName = form.elements['firstname'].value;
    const lastName = form.elements['lastname'].value;
    const email = form.elements['email'].value;
    const model = form.elements['model'].value;
    const year = form.elements['year'].value;
    const kilometers = form.elements['kilometers'].value;

    // Create your request URL with the input values as parameters
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSdDO92FUN9RTJLxUQweDsknSfemC9u2xn7o9YKO8izXnw2bfQ/formResponse?usp=pp_url
                &entry.1053032572=${encodeURIComponent(firstName)}
                &entry.2129691190=${encodeURIComponent(lastName)}
                &entry.1444325560=${encodeURIComponent(email)}
                &entry.351726810=${encodeURIComponent(model)}
                &entry.228892489=${encodeURIComponent(year)}
                &entry.1359120550=${encodeURIComponent(kilometers)}`;


    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || model.trim() === '' || year.trim() === '' || kilometers.trim() === '') {
        // Show an error message or perform any necessary validation handling
        console.log('Please fill in all fields');
        formMessage.removeAttribute("hidden");
        return; // Stop further execution
    }else{
        let formMessage = document.getElementById("formMessage");
        formMessage.setAttribute("hidden", "hidden");
    }

    // Send your web request using the URL
    fetch(url)
        .then(response => {
            // Handle the response here
        })
        .catch(error => {
            // Handle any error that occurs during the request
        });
});