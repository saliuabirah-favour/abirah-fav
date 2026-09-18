// Get the dropdowns from HTML
const countrySelect = document.getElementById("Country");
const stateSelect = document.getElementById("state");
const lgaSelect = document.getElementById("lga");


// Countries, States and Local Governments
const locations = {

    Nigeria: {
        Lagos: [
            "Agege",
            "Alimosho",
            "Ikeja",
            "Surulere"
        ],

        Edo: [
            "Egor",
            "Oredo",
            "Ikpoba-Okha",
            "Ovia North-East"
        ],

        Delta: [
            "Warri South",
            "Sapele",
            "Udu",
            "Uvwie"
        ],

        Rivers: [
            "Port Harcourt",
            "Obio-Akpor",
            "Bonny",
            "Okrika"
        ]
    },


    Ghana: {
        "Greater Accra": [
            "Accra Metropolitan",
            "Ga East",
            "Ga West",
            "La Nkwantanang"
        ],

        Ashanti: [
            "Kumasi",
            "Asokwa",
            "Kwadaso",
            "Oforikrom"
        ],

        "Central Region": [
            "Cape Coast",
            "Abura-Asebu-Kwamankese",
            "Mfantseman",
            "Komenda-Edina-Eguafo-Abirem"
        ],

        "Western Region": [
            "Sekondi-Takoradi",
            "Ahanta West",
            "Tarkwa-Nsuaem",
            "Ellembelle"
        ]
    },


    Kenya: {
        Nairobi: [
            "Westlands",
            "Dagoretti",
            "Embakasi",
            "Kasarani"
        ],

        Mombasa: [
            "Mvita",
            "Likoni",
            "Kisauni",
            "Nyali"
        ],

        Kisumu: [
            "Kisumu East",
            "Kisumu West",
            "Kisumu Central",
            "Seme"
        ],

        Nakuru: [
            "Nakuru Town East",
            "Nakuru Town West",
            "Naivasha",
            "Gilgil"
        ]
    },


    "United States": {
        California: [
            "Los Angeles County",
            "San Diego County",
            "Orange County",
            "San Francisco County"
        ],

        Texas: [
            "Harris County",
            "Dallas County",
            "Tarrant County",
            "Bexar County"
        ],

        Florida: [
            "Miami-Dade County",
            "Broward County",
            "Orange County",
            "Hillsborough County"
        ],

        "New York": [
            "Kings County",
            "Queens County",
            "New York County",
            "Bronx County"
        ]
    }
};


// Add countries to the Country dropdown
for (let country in locations) {

    const option = document.createElement("option");

    option.value = country;
    option.textContent = country;

    countrySelect.appendChild(option);
}


// When a country is selected
countrySelect.addEventListener("change", function () {

    // Clear the State dropdown
    stateSelect.innerHTML = '<option value="">Select State</option>';

    // Clear the LGA dropdown
    lgaSelect.innerHTML = '<option value="">Select Local Government</option>';

    // Disable State and LGA
    stateSelect.disabled = false;
    lgaSelect.disabled = false;


    const selectedCountry = countrySelect.value;

    // If no country is selected, stop
    if (selectedCountry === "") {
        return;
    }


    // Get the states for the selected country
    const states = locations[selectedCountry];


    // Add states to the State dropdown
    for (let state in states) {

        const option = document.createElement("option");

        option.value = state;
        option.textContent = state;

        stateSelect.appendChild(option);
    }


    // Enable State dropdown
    stateSelect.disabled = false;
});


// When a State is selected
stateSelect.addEventListener("change", function () {

    // Clear the LGA dropdown
    lgaSelect.innerHTML = '<option value="">Select Local Government</option>';

    // Disable LGA
    lgaSelect.disabled = false;


    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;


    // If no state is selected, stop
    if (selectedState === "") {
        return;
    }


    // Get the LGAs for the selected state
    const lgas = locations[selectedCountry][selectedState];


    // Add LGAs to the LGA dropdown
    lgas.forEach(function (lga) {

        const option = document.createElement("option");

        option.value = lga;
        option.textContent = lga;

        lgaSelect.appendChild(option);
    });


    // Enable LGA dropdown
    lgaSelect.disabled = false;
});

const dobInput = document.querySelector("#dob");
const ageMessage = document.querySelector("#ageMessage");

dobInput.addEventListener("change", function () {

    const birthDate = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (age < 18) {
        ageMessage.textContent = "You must be at least 18 years old.";
        ageMessage.className = "text-danger mt-2";
    } else {
        ageMessage.textContent = "Age requirement satisfied.";
        ageMessage.className = "text-success mt-2";
    }
});

// password sectiom
const passwordInput = document.querySelector("#password");
const passwordMessage = document.querySelector("#passwordMessage");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    if (password.length < 8) {
        passwordMessage.textContent = "Password must be at least 8 characters.";
        passwordMessage.className = "text-danger mt-2";
        return;
    }

    if (!/[A-Z]/.test(password)) {
        passwordMessage.textContent = "Password must contain an uppercase letter.";
        passwordMessage.className = "text-danger mt-2";
        return;
    }

    if (!/[a-z]/.test(password)) {
        passwordMessage.textContent = "Password must contain a lowercase letter.";
        passwordMessage.className = "text-danger mt-2";
        return;
    }

    if (!/[0-9]/.test(password)) {
        passwordMessage.textContent = "Password must contain a number.";
        passwordMessage.className = "text-danger mt-2";
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordMessage.textContent = "Password must contain a special character.";
        passwordMessage.className = "text-danger mt-2";
        return;
    }

    passwordMessage.textContent = "Password is strong ✓";
    passwordMessage.className = "text-success mt-2";
});

// CONFIRMPASSWORD
const confirmPasswordInput = document.querySelector("#confirmPassword");
const confirmPasswordMessage = document.querySelector("#confirmPasswordMessage");

confirmPasswordInput.addEventListener("input", function () {

    if (confirmPasswordInput.value !== passwordInput.value) {

        confirmPasswordMessage.textContent = "Passwords do not match.";
        confirmPasswordMessage.className = "text-danger mt-2";

    } else {

        confirmPasswordMessage.textContent = "Passwords match ✓";
        confirmPasswordMessage.className = "text-success mt-2";
    }
});