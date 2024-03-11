// Function to calculate a customer's quote

function calculateQuote(){
    
    var wantedService = document.getElementById("WantedService").value
    var cateringYes = document.getElementById("YesCatering").checked;
    var resDateFrom = document.getElementById("ResDateFrom").value;
    var resDateTill = document.getElementById("ResDateTill").value;
    var outputField = document.getElementById("QuoteOutputField");

    var fromDate = new Date(resDateFrom);
    var tillDate = new Date(resDateTill);
    var timeDifference = tillDate - fromDate;
    var daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    var catering, total, serviceQuote;

    if( isNaN(fromDate) || isNaN(tillDate) ){
        outputField.textContent = "Please Enter the start and end dates to calculate your quote! ";
        return;
    }

    if(fromDate>tillDate){
        outputField.textContent = "Please enter correct start and end dates to get a quote estimate! ";
        return
    }
    
    if (!cateringYes){
        catering = 0;
    } else{
        catering = 1;
    }

    if (wantedService == "Workspace") serviceQuote = calculateServiceQuote(daysDifference, catering, 45000, 4000, 150, 15000, 1250, 45);

    if (wantedService == "Meeting Room") serviceQuote = calculateServiceQuote(daysDifference, catering, 5500, 500, 20, 1500, 125, 5);

    if (wantedService == "Office") serviceQuote = calculateServiceQuote(daysDifference, catering, 4500, 400, 15, 100, 8, 0);
    
    total = serviceQuote.spacePrice + serviceQuote.cateringPrice;
    outputField.textContent = "The price of the space is: " + serviceQuote.spacePrice + "$\nThe catering price is: " + serviceQuote.cateringPrice + "$\nYour total is: " + total + "$";
    return total;
}


function calculateServiceQuote(daysDifference, catering, serviceYearlyPrice, serviceMonthlyPrice, serviceDailyPrice, cateringYearlyPrice, cateringMonthlyPrice, cateringDailyPrice){
    var quotientYears = 0 , quotientMonths = 0 , quotientDays = 0;

        if (daysDifference > 365){
            quotientYears = Math.floor(daysDifference / 365) ;
            daysDifference %= 365;
        }

        if((daysDifference % 365) > 30){
            quotientMonths = Math.floor(daysDifference / 30) ;
            daysDifference %= 30;
        }

        quotientDays =  daysDifference;

        var spacePrice =  (quotientYears * serviceYearlyPrice ) + (quotientMonths * serviceMonthlyPrice ) + (quotientDays * serviceDailyPrice);
        var cateringPrice = catering * ((quotientYears * cateringYearlyPrice ) + (quotientMonths * cateringMonthlyPrice ) + (quotientDays * cateringDailyPrice) );

    return {spacePrice: spacePrice, cateringPrice: cateringPrice};
}



//  Booking confirmation


document.addEventListener("DOMContentLoaded", function() {

    var submitButton = document.getElementById("book_button");

    submitButton.addEventListener("click", function(event) {

        if (!isFormValid()) {
            event.preventDefault();
            return;
        }
        
        var total = calculateQuote();
        var confirmation = confirm("Your total is: " + total + "\nAre you sure you want to book the service?");

        if (!confirmation) {
            event.preventDefault();
        }
    }, false);

    function isFormValid() {

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var telnum = document.getElementById("telnum").value;
        var email = document.getElementById("email").value;
        var companyname = document.getElementById("companyname").value;
        var address = document.getElementById("address").value;
        var service = document.getElementById("WantedService").value;
        var resDateFrom = document.getElementById("ResDateFrom").value;
        var resDateTill = document.getElementById("ResDateTill").value;
        var termsAgreed = document.getElementById("agreetoterms").checked;
        
    
        if (fname === "" || lname === "" || telnum === "" || email === "" || companyname === "" || address === "" ||
            service === "" || resDateFrom === "" || resDateTill === "" || !termsAgreed) {
            alert("Please fill in all required fields.");
            return false;
        }
        return true;
    }
});