    const step1Button = document.getElementById("step1");
    const step2Button = document.getElementById("step2");
    const step3Button = document.getElementById("step3");
    const progressBar = document.querySelector(".progress-bar");
    const continueButton1 = document.getElementById("continueButton"); // Button in the first form
    const continueButton2 = document.getElementById("continueButton2"); // Button in the second form
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");


    // Function to enable the "Next" button
    const enableNextButton = (nextButton) => {
        nextButton.disabled = false;
        nextButton.classList.remove("btn-secondary");
        nextButton.classList.add("btn-primary");
    };

    // Function to update the progress bar
    const updateProgressBar = (width) => {
        progressBar.style.width = width;
    };

    // Function to check if all required fields are filled in
    const isFormValid = (form) => {
        const requiredFields = [
            "inputEmail4",
            "inputPassword4",
            "inputAddress",
            "inputCity",
            "inputState",
            "inputZip"
        ];

        for (const fieldId of requiredFields) {
            const field = form.querySelector(`#${fieldId}`);
            if (field.value.trim() === "") {
                return false;
            }
        }

        return true;
    };

    // Function to check if at least one checkbox in form2 is checked
    const isForm2Valid = () => {
        const checkboxes = form2.querySelectorAll('input[type="checkbox"]');
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                return true;
            }
        }
        return false;
    };

    // Event listener for the "1" button
    step1Button.addEventListener("click", () => {
        if (isFormValid(form1)) {
            enableNextButton(step2Button);
            updateProgressBar("50%");
        } else {
            alert("Please fill in all required fields before continuing.");
        }
    });

    // Event listener for the "2" button
    step2Button.addEventListener("click", () => {
        if (isFormValid(form2)) {
            enableNextButton(step3Button);
            updateProgressBar("100%");
        } else {
            alert("Please fill in all required fields before continuing.");
        }
    });

const setButtonOpacity = (button, opacity) => {
    button.style.opacity = opacity;
};
setButtonOpacity(step2Button, 0.7); // Button 2 with low opacity
setButtonOpacity(step3Button, 0.4); // Button 3 with low opacity

    // Event listener for the "Continue" button in the first form
    continueButton1.addEventListener("click", () => {
        if (isFormValid(form1)) {
            form1.style.display = "none";
            form2.style.display = "block";
            updateProgressBar("50%")
            step2Button.disabled = false; // Enable button 2
            setButtonOpacity(step2Button, 1);

        } else {
            alert("Please fill in all required fields before continuing.");
        }
    });

    // Event listener for the "Continue" button in the second form
    continueButton2.addEventListener("click", () => {
        if (isForm2Valid()) {
            form2.style.display = "none";
            form3.style.display = "block";
            updateProgressBar("100%");

            step3Button.disabled = false; // Enable button 3
            setButtonOpacity(step3Button, 1);

        } else {
            alert("Please select at least one language before continuing.");
        }
    });

const doneButton = document.getElementById("doneButton");

doneButton.addEventListener("click", () => {
    // Redirect to the index.html page
    window.location.href = "Language.html";
});