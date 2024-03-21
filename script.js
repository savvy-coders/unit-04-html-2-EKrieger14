<script>
    function handleFormSubmit(event)  {
    Event.preventDefault(); //Prevent form submission

        // Access form fields using their names
        var username = document.forms["myForm"]["username"].value
        var fruits = document.forms["myForm"]["fruits"].value
        var gender = document.forms["myForm"]["gender"].value
        var country = document.forms["myForm"]["country"].value

        // Perform validation or futher processing
        // ...

        // Display a success message or redirect to another page
        alert("Form submitted!");
    }
</script>