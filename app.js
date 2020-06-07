// Listen for submit 
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate results
function calculateResults(e){
    console.log('Calculating...');
    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // Compute monthly payment 
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly* calculatedPayment)- principal).toFixed(2)
    }else {
        console.log('Please check your numbers')
        showError('Please check your numbers ')
    }




    e.preventDefault();
}

// Error function 
function showError(error){
    //Create div
    const errorDiv = document.createElement('div')
    // get Elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add bootstrap class
    errorDiv.className = 'alert alert-danger';
    // create alert text 
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);


    // clear error after 3 seconds 
    setTimeout(clearError, 3000);
}

// clear error 
function clearError(){
    document.querySelector('.alert').remove();
}