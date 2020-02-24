
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
	var result = "<table border='1' class='inlineTable'> <tr> <th>Year #</th> <th>Month #</th>" + 
        "<th>Payment (monthly)</th> <th>Interest Paid</th> <th>Principal Paid</th> <th>Mortgage Balance</th> </tr>";
    
	var total_principal = 0;
	var total_interest = 0;	
	var balance = mortgage;
	var toogle = false;
	var year = 1;
		
    /**
     * Loop that calculates the monthly Loan amortization amounts then adds 
     * them to the return string 
     */
	for (var month = 1; month <= term; ++month)
	{ 
		//in-loop interest amount holder
		var interest = 0;
		
		//in-loop monthly principal amount holder
		var monthlyPrincipal = 0;
		
		if(month != 1 && (month-1) % 12 == 0) {
			toogle = !toogle;
			year++;
		}
		
		if(toogle == true) {
		    result += "<tr align=center bgcolor='#EEEEEE'>";
		}
		else {
		    result += "<tr align=center>";
		}
		
		result += "<td>" + year + "</td>";
		
		//display the month number in col 1 using the loop count variable
		result += "<td>" + month + "</td>";
		
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
			pmi_threshold_month = month;
		
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
	
	document.getElementById("amort_table").innerHTML = result;
	
	// ########################################################################
	
    var pmt2 = payment / 2;
    var prin2 = mortgage;
    var intPort2 = 0;
    var prinPort2 = 0;
    var accumInt2 = 0;
    var accumPrin2 = 0;
	
    var i = rate / 100.0;
    var i1 = i / 12;
    var i2 = i / 26;
    var count1 = 0;
    var week = 1;
	var month = 1;
	year = 1;
	toogle = false;
	pmi_threshold_month = 0;
	
	result = "<table border='1' class='inlineTable'> <tr> <th>Year #</th> <th>Month #</th>  <th>Week #</th>" + 
        "<th>Payment (bi-weekly)</th> <th>Interest Paid</th> <th>Principal Paid</th> <th>Mortgage Balance</th> </tr>";
    
    while (prin2 > 0) {
		
		intPort2 = prin2 * i2; // interest paid
		prinPort2 = pmt2 - intPort2; // principle paid
		prin2 = prin2 - prinPort2; // mortgage balance
				
		if(week != 1 && (week % 2) == 1) {
			month++;
		}
		
		if(week != 1 && (week-1) % 24 == 0) {
			toogle = !toogle;
			year++;
		}
		
		if(toogle == true) {
		    result += "<tr align=center bgcolor='#EEEEEE'>";
		}
		else {
		    result += "<tr align=center>";
		}
		
		result += "<td>" + year + "</td>";
		result += "<td>" + month + "</td>";
		result += "<td>" + week + "</td>";
		
		result += "<td> $" + pmt2.toFixed(2) + "</td>";					
		result += "<td> $" + intPort2.toFixed(2) + "</td>";
		result += "<td> $" + prinPort2.toFixed(2) + "</td>";
		result += "<td> $" + prin2.toFixed(2) + "</td>";
		
        accumPrin2 = accumPrin2 + prinPort2;
        accumInt2 = accumInt2 + intPort2;
        
		if(pmi_threshold_month == 0 && (down_payment + accumPrin2) >= pmi_threshold)
			pmi_threshold_month = month-1;
		
		week = week + 1;
		
		result += "</tr>";	
    }
	
	result += "</table>";
	
	header = "Down payment: $" + downpayment.toFixed(2) + "<br/><br/>" +
	
	         "Total Principal Paid: $" + accumPrin2.toFixed(2) + "<br/>" +
	         "Total Interest Paid:     $" + accumInt2.toFixed(2) +  "<br/>" +
		     "Total Interest Percentage: %" + ((accumInt2/mortgage)*100).toFixed(2) + "<br/>" +
			 "Bi-weekly Mortgage Interest Saving: " + (total_interest-accumInt2).toFixed(2) + "<br/><br/>" +
				 
			 "PMI Threshold (%20): $" + pmi_threshold + "<br/>" +
			 "Months with PMI: " + (pmi_threshold_month-1) + "<br/><br/> ";
								 
	result = header + result;
	
	document.getElementById("amort_bi_weekly_table").innerHTML = result;


     //   document.MortgageCalculator.biwkInt.value = Decimales(accumInt2, 0);
     //   document.MortgageCalculator.intSave.value = Decimales(accumInt1 - accumInt2, 0);
     //   document.MortgageCalculator.Expla1.value = Decimales(pmt1 / 26, 2);
     //   document.MortgageCalculator.Expla2.value = parseInt(week / 26 * 12, 10);
     //   document.MortgageCalculator.Expla3.value = count1;
     //   document.MortgageCalculator.Expla4.value = Decimales(accumInt1 - accumInt2, 0);
     //   document.MortgageCalculator.Expla5.value = Decimales(accumInt1 - accumInt2, 0);  
}




