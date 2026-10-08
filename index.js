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

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

toggleConfirmPassword.addEventListener("click", function () {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

// dark and light toggle
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.classList.remove("btn-dark");
        themeToggle.classList.add("btn-light");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.classList.remove("btn-light");
        themeToggle.classList.add("btn-dark");
    }
});