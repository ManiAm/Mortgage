
function amort()
{	
	var price = document.getElementById("price").value;
    if (price <= 0) {
        document.getElementById("not_valid_price").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_price").innerHTML = "";
	price = parseFloat(price, 10);
	
	var getdown = document.getElementById("getdown").value;
    if (getdown <= 0) {
        document.getElementById("not_valid_getdown").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_getdown").innerHTML = "";
	getdown = parseFloat(getdown, 10);	
	
	var downpayment = 0;
	var percentdown = 0;
	if (getdown < 100) {
        percentdown = getdown;
        downpayment = (percentdown / 100) * price;
    } else {
        downpayment = getdown;
        percentdown = (1 - ((price - downpayment) / price)) * 100;
    }
	
	var rate = document.getElementById("rate").value;
    if (rate <= 0) {
        document.getElementById("not_valid_rate").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_rate").innerHTML = "";
	var interestRate = parseFloat(rate/100, 10);
	
	var term = document.getElementById("term").value;
    if (term <= 0) {
        document.getElementById("not_valid_term").innerHTML = "<b>Invalid value!</b>";
        return;
    }
	document.getElementById("not_valid_term").innerHTML = "";
	term = parseInt(term, 10);	
	
	var mortgage = price - downpayment;
	
    //Calculate the per month interest rate
	var monthlyRate = interestRate/12;
	
	//Calculate the payment
    var payment = mortgage * (monthlyRate/(1-Math.pow(1+monthlyRate, -term)));
        
	pmi_threshold = (price * 20)/100;
	down_payment = price - mortgage;
	pmi_threshold_month = 0;
	
    //add header row for table to return string
	var result = "<table border='1'> <tr> <th>Year #</th> <th>Month #</th>" + 
        "<th>Payment Amount</th> <th>Interest Paid</th> <th>Principal Paid</th> <th>Mortgage Balance</th> </tr>";
    
	var total_principal = 0;
	var total_interest = 0;	
	var balance = mortgage;
	var toogle = false;
	var year = 1;
		
    /**
     * Loop that calculates the monthly Loan amortization amounts then adds 
     * them to the return string 
     */
	for (var count = 1; count <= term; ++count)
	{ 
		//in-loop interest amount holder
		var interest = 0;
		
		//in-loop monthly principal amount holder
		var monthlyPrincipal = 0;
		
		if(count != 1 && (count-1) % 12 == 0) {
			toogle = !toogle;
			year++;
		}
		
		if(toogle == true) {
		    //start a new table row on each loop iteration
		    result += "<tr align=center bgcolor='#EEEEEE'>";
		}
		else {
			//start a new table row on each loop iteration
		    result += "<tr align=center>";
		}
		
		result += "<td>" + year + "</td>";
		
		//display the month number in col 1 using the loop count variable
		result += "<td>" + count + "</td>";
		
		result += "<td> $" + payment.toFixed(2) + "</td>";
				
		//calc the in-loop interest amount and display
		interest = balance * monthlyRate;
		result += "<td> $" + interest.toFixed(2) + "</td>";
		total_interest += interest;
		
		//calc the in-loop monthly principal and display
		monthlyPrincipal = payment - interest;
		result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";
		total_principal += monthlyPrincipal;
		
		//update the balance for each loop iteration
		balance = balance - monthlyPrincipal;
		
		//code for displaying in loop balance
		result += "<td> $" + balance.toFixed(2) + "</td>";
		
		if(pmi_threshold_month == 0 && (down_payment + total_principal) >= pmi_threshold)
			pmi_threshold_month = count;
		
		//end the table row on each iteration of the loop	
		result += "</tr>";		
	}
	
	//Final piece added to return string before returning it - closes the table
    result += "</table>";	
	
	var header = "Down payment: $" + downpayment.toFixed(2) + "<br/><br/>" +
	
	             "Total Principal Paid: $" + total_principal.toFixed(2) + "<br/>" +
	             "Total Interest Paid:     $" + total_interest.toFixed(2) +  "<br/>" +
		         "Total Interest Percentage: %" + ((total_interest/mortgage)*100).toFixed(2) + "<br/><br/>" +
				 
			     "PMI Threshold (%20): $" + pmi_threshold + "<br/>" +
				 "Months with PMI: " + (pmi_threshold_month-1) + "<br/><br/> ";
								 
	result = header + result;
	
	document.getElementById("amort_table").innerHTML = result
}
