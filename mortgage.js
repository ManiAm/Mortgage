function calculate() {

    var price = document.getElementById("price").value;
    if (price <= 0) {
        document.getElementById("not_valid_price").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_price").innerHTML = "";

    var getdown = document.getElementById("getdown").value;
    if (getdown <= 0) {
        document.getElementById("not_valid_getdown").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_getdown").innerHTML = "";

    var rate = document.getElementById("rate").value;
    if (rate <= 0) {
        document.getElementById("not_valid_rate").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_rate").innerHTML = "";

    var points = document.getElementById("points").value;
    if (points < 0) {
        document.getElementById("not_valid_points").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_points").innerHTML = "";
	
	var hoa = document.getElementById("hoa").value;
    if (hoa < 0) {
        document.getElementById("not_valid_hoa").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_hoa").innerHTML = "";
	hoa = parseInt(hoa, 10);	
	
	var extra_monthly_costs = document.getElementById("extra_monthly_costs").value;
    if (extra_monthly_costs < 0) {
        document.getElementById("not_valid_extra_monthly_costs").innerHTML = "<b>Invalid value!</b>";
        return;
    }
    document.getElementById("not_valid_extra_monthly_costs").innerHTML = "";
	extra_monthly_costs = parseInt(extra_monthly_costs, 10);

	var base_closing_cost = document.getElementById("base_closing").value;
    if (base_closing_cost < 0) {
        document.getElementById("not_valid_closing").innerHTML = "<b>Invalid value!</b>";
        return;
    }
	document.getElementById("not_valid_closing").innerHTML = "";
	base_closing_cost = parseInt(base_closing_cost, 10);
	
    var term = document.getElementById("term").value;
    if (term <= 0) {
        document.getElementById("not_valid_term").innerHTML = "<b>Invalid value!</b>";
        return;
    }
	document.getElementById("not_valid_term").innerHTML = "";
		
	var pmi = document.getElementById("pmi").value;
    if (pmi < 0) {
        document.getElementById("not_valid_pmi").innerHTML = "<b>Invalid value!</b>";
        return;
    }
	document.getElementById("not_valid_pmi").innerHTML = "";
	
	if(getdown >= 20 && pmi != 0) {
		document.getElementById("not_valid_pmi").innerHTML = "<b>Set PMI rate to zero for down payments >= 20%</b>";
        return;
	}
		
    if (getdown < 100) {
        percentdown = getdown;
        downpayment = (percentdown / 100) * price;
    } else {
        downpayment = getdown;
        percentdown = (1 - ((price - downpayment) / price)) * 100;
    }

    var mortgage = price - downpayment;
	// loan to value ratio
    var ltv = (mortgage / price) * 100;
	mortgage = Math.round(mortgage * 100) / 100;

    var propTax;
    var propHz;

    var state = document.getElementById("state").value;

    // Estimate Escrow Factor
    if (state == 1) {
        propTax = .15;
        propHz = .045;
    } else if (state == 2) {
        propTax = .1;
        propHz = .035;
    } else if (state == 3) {
        propTax = .1;
        propHz = .035;
    } else if (state == 4) {
        propTax = .1;
        propHz = .035;
    } else if (state == 5) { // CA
        propTax = .1;
        propHz = .06;
    } else if (state == 6) {
        propTax = .1;
        propHz = .035;
    } else if (state == 7) {
        propTax = .1;
        propHz = .035;
    } else if (state == 8) {
        propTax = .154;
        propHz = .025;
    } else if (state == 9) {
        propTax = .1;
        propHz = .035;
    } else if (state == 10) {
        propTax = .15;
        propHz = .08;
    } else if (state == 11) {
        propTax = .1;
        propHz = .035;
    } else if (state == 12) {
        propTax = .225;
        propHz = .045;
    } else if (state == 13) {
        propTax = .1;
        propHz = .035;
    } else if (state == 14) {
        propTax = .15;
        propHz = .035;
    } else if (state == 15) {
        propTax = .2;
        propHz = .03;
    } else if (state == 16) {
        propTax = .1;
        propHz = .035;
    } else if (state == 17) {
        propTax = .15;
        propHz = .05;
    } else if (state == 18) {
        propTax = .1;
        propHz = .035;
    } else if (state == 19) {
        propTax = .1;
        propHz = .035;
    } else if (state == 20) {
        propTax = .1;
        propHz = .06;
    } else if (state == 21) {
        propTax = .12;
        propHz = .025;
    } else if (state == 22) {
        propTax = .1;
        propHz = .03;
    } else if (state == 23) {
        propTax = .1;
        propHz = .019;
    } else if (state == 24) {
        propTax = .15;
        propHz = .03;
    } else if (state == 25) {
        propTax = .1;
        propHz = .045;
    } else if (state == 26) {
        propTax = .1;
        propHz = .035;
    } else if (state == 27) {
        propTax = .1;
        propHz = .035;
    } else if (state == 28) {
        propTax = .1;
        propHz = .029;
    } else if (state == 29) {
        propTax = .15;
        propHz = .03;
    } else if (state == 30) {
        propTax = .1;
        propHz = .051;
    } else if (state == 31) {
        propTax = .15;
        propHz = .045;
    } else if (state == 32) {
        propTax = .25;
        propHz = .035;
    } else if (state == 33) {
        propTax = .125;
        propHz = .035;
    } else if (state == 34) {
        propTax = .1;
        propHz = .035;
    } else if (state == 35) {
        propTax = .25;
        propHz = .035;
    } else if (state == 36) {
        propTax = .1;
        propHz = .034;
    } else if (state == 37) {
        propTax = .09;
        propHz = .09;
    } else if (state == 38) {
        propTax = .18;
        propHz = .035;
    } else if (state == 39) {
        propTax = .15;
        propHz = .04;
    } else if (state == 40) {
        propTax = .1;
        propHz = .035;
    } else if (state == 41) {
        propTax = .1;
        propHz = .05;
    } else if (state == 42) {
        propTax = .1;
        propHz = .049;
    } else if (state == 43) {
        propTax = .1;
        propHz = .04;
    } else if (state == 44) {
        propTax = .30;
        propHz = .080;
    } else if (state == 45) {
        propTax = .1;
        propHz = .035;
    } else if (state == 46) {
        propTax = .15;
        propHz = .025;
    } else if (state == 47) {
        propTax = .1;
        propHz = .035;
    } else if (state == 48) {
        propTax = .15;
        propHz = .035;
    } else if (state == 49) {
        propTax = .15;
        propHz = .03;
    } else if (state == 50) {
        propTax = .1;
        propHz = .035;
    } else if (state == 51) {
        propTax = .1;
        propHz = .035;
    }

    var taxes_yearly = (propTax * price) / 10;
	var taxes = taxes_yearly / 12;
	
	// note: californians who have a mortgage are required to have homeowners insurance
    var insurance_yearly = (propHz * price) / 100; // TODO: changed from 10
	var insurance = insurance_yearly / 12;
		
    var tax_insurance = taxes + insurance;
	tax_insurance_yearly = taxes_yearly + insurance_yearly;

	// The amount of money that you are paying for points in order to get a lower 
	// interest rate from your lender or the credit that your lender is providing 
	// you in exchange for taking a higher interest rate. Each point is typically 
	// 1% of your loan amount
    var pointsPaid = mortgage * points / 100

    var closingCost;
	
	// base closing cost covers the following:
	
	// 1. Origination fees (775): this is the amount charged by your lender for administrative costs 
	// associated with mortgage application and processing.

    // 2. Appraisal fee (461): often paid to the lender as part of closing costs to have an appraiser 
	// determine the value of the home in question.

    // 3. Credit Report Fee (33)

    // 4. Flood certification (18): Documentation confirming the property’s status within a flood 
	// zone from the Federal Emergency Management Agency (FEMA).

    // 5. Title Search and Lender’s Title Insurance (693): Cost associated with having a company research 
	// a home’s title and purchasing an insurance policy to cover the lender in case the title is 
	// later found to be defective.

    // 6. Home Inspection (pest, etc.) (203): Required by the lender to ensure that a house is free 
	// of any major structural or other issues.
	
	// 7. Postage/Courier (100)
	
	// 8. Survey (406): The detailed assessment that discloses the exact boundaries of the property, 
	// as well as things like gas lines, roads, walls, easements, encroachments, etc.

    // 9. Attorney, closing and settlement fees (984): Legal fees accrued by an attorney reviewing 
	// documents and agreements during the process of closing on a home, as well as escrow fees.

    // 10. Government Recording Fee (206): Paid to the government to officially record the change of ownership of the home.

    //// CLOSING COSTS
    if (state == 1) {
        closingCost = (base_closing_cost + pointsPaid + 400 + (mortgage / 1000));
    } else if (state == 2) {
        closingCost = (base_closing_cost + pointsPaid + 800 + (mortgage * .0015));
    } else if (state == 3) {
        closingCost = (base_closing_cost + pointsPaid + 630 + (price * .0016));
    } else if (state == 4) {
        closingCost = (base_closing_cost + pointsPaid + 335);
    } else if (state == 5) { // CA
        closingCost = (base_closing_cost + pointsPaid + 300 + (price / 1000) + (mortgage * .0056));
    } else if (state == 6) {
        closingCost = (base_closing_cost + pointsPaid + 400);
    } else if (state == 7) {
        closingCost = (base_closing_cost + pointsPaid + 1115);
    } else if (state == 8) {
        closingCost = (base_closing_cost + pointsPaid + 825 + (mortgage * .0025) + (price * .0083));
    } else if (state == 9) {
        closingCost = (base_closing_cost + pointsPaid + 750 + (mortgage * .0035) + (price * .015));
    } else if (state == 10) {
        closingCost = (base_closing_cost + pointsPaid + 1015 + (mortgage * .0055));
    } else if (state == 11) {
        closingCost = (base_closing_cost + pointsPaid + 700 + (mortgage * .004) + (price * .00325));
    } else if (state == 12) {
        closingCost = (base_closing_cost + pointsPaid + 700 + (mortgage * .0024));
    } else if (state == 13) {
        closingCost = (base_closing_cost + pointsPaid + 1148 + (mortgage * .0033));
    } else if (state == 14) {
        closingCost = (base_closing_cost + pointsPaid + 325);
    } else if (state == 15) {
        closingCost = (base_closing_cost + pointsPaid + 771);
    } else if (state == 16) {
        closingCost = (base_closing_cost + pointsPaid + 745);
    } else if (state == 17) {
        closingCost = (base_closing_cost + pointsPaid + 495 + (price * .00465) + (mortgage * .0026));
    } else if (state == 18) {
        closingCost = (base_closing_cost + pointsPaid + 574 + (mortgage * .002));
    } else if (state == 19) {
        closingCost = (base_closing_cost + pointsPaid + 965);
    } else if (state == 20) {
        closingCost = (base_closing_cost + pointsPaid + 853 + (mortgage * .0025));
    } else if (state == 21) {
        closingCost = (base_closing_cost + pointsPaid + 850 + (mortgage * .00325) + (price * .0152));
    } else if (state == 22) {
        closingCost = (base_closing_cost + pointsPaid + 1065 + (price * .0047));
    } else if (state == 23) {
        closingCost = (base_closing_cost + pointsPaid + 530);
    } else if (state == 24) {
        closingCost = (base_closing_cost + pointsPaid + 940 + (mortgage * .0054));
    } else if (state == 25) {
        closingCost = (base_closing_cost + pointsPaid + 475 + (price * .0035));
    } else if (state == 26) {
        closingCost = (base_closing_cost + pointsPaid + 605 + (mortgage * .003));
    } else if (state == 27) {
        closingCost = (base_closing_cost + pointsPaid + 490);
    } else if (state == 28) {
        closingCost = (base_closing_cost + pointsPaid + 925 + (price * .002));
    } else if (state == 29) {
        closingCost = (base_closing_cost + pointsPaid + 675 + (mortgage * .003));
    } else if (state == 30) {
        closingCost = (base_closing_cost + pointsPaid + 535 + (price * .00159));
    } else if (state == 31) {
        closingCost = (base_closing_cost + pointsPaid + 975 + (mortgage * .0025) + (price * .0067));
    } else if (state == 32) {
        closingCost = (base_closing_cost + pointsPaid + 1225 + (mortgage * .00475));
    } else if (state == 33) {
        closingCost = (base_closing_cost + pointsPaid + 490);
    } else if (state == 34) {
        closingCost = (base_closing_cost + pointsPaid + 530);
    } else if (state == 35) {
        closingCost = (base_closing_cost + pointsPaid + 1475 + (mortgage * .0015) + (price * .00743));
    } else if (state == 36) {
        closingCost = (base_closing_cost + pointsPaid + 905 + (mortgage * .0035));
    } else if (state == 37) {
        closingCost = (base_closing_cost + pointsPaid + 1010 + (mortgage * .0045));
    } else if (state == 38) {
        closingCost = (base_closing_cost + pointsPaid + 590 + (price * .00217));
    } else if (state == 39) {
        closingCost = (base_closing_cost + pointsPaid + 285 + (mortgage * .00439) + (price * .02));
    } else if (state == 40) {
        closingCost = (base_closing_cost + pointsPaid + 684 + (mortgage * .0025));
    } else if (state == 41) {
        closingCost = (base_closing_cost + pointsPaid + 970 + (price * .0065));
    } else if (state == 42) {
        closingCost = (base_closing_cost + pointsPaid + 375 + (price * .00395));
    } else if (state == 43) {
        closingCost = (base_closing_cost + pointsPaid + 610 + (mortgage * .0025) + (price * .00485));
    } else if (state == 44) {
        closingCost = (base_closing_cost + pointsPaid + 775);
    } else if (state == 45) {
        closingCost = (base_closing_cost + pointsPaid + 435);
    } else if (state == 46) {
        closingCost = (base_closing_cost + pointsPaid + 1355 + (price * .0025) + (mortgage * .004));
    } else if (state == 47) {
        closingCost = (base_closing_cost + pointsPaid + 825 + (price * .008));
    } else if (state == 48) {
        closingCost = (base_closing_cost + pointsPaid + 585);
    } else if (state == 49) {
        closingCost = (base_closing_cost + pointsPaid + 955 + (mortgage * .0054));
    } else if (state == 50) {
        closingCost = (base_closing_cost + pointsPaid + 810 + (price * .0039));
    } else if (state == 51) {
        closingCost = (base_closing_cost + pointsPaid + 285 + (mortgage * .0039));
    }

    //// PREPAIDS: payments made in advance of the monies due to obtain your new loan.
    var prePaids = (price * rate / 100 / 365 * 30) + (taxes) * 3 + (insurance) * 14;

    //// TOTAL CASH
    totalCash = downpayment + closingCost + prePaids;

	totalCashPercent = ((totalCash / price) * 100).toFixed(2);
	
    // monthly payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))	
    var intr = rate / 100 / 12;
    var monthly_pay = mortgage * intr / (1 - (Math.pow(1 / (1 + intr), term)));	
	
	// pmi
	monthly_pmi = (mortgage * pmi) / 100 / 12;
	
	var monthly_pay_tax_insurance = monthly_pay + tax_insurance;
	var monthly_pay_tax_insurance_pmi = monthly_pay_tax_insurance + monthly_pmi;
    var monthly_pay_tax_insurance_pmi_hoa = monthly_pay_tax_insurance_pmi + hoa;
	var monthly_pay_tax_insurance_pmi_hoa_extra = monthly_pay_tax_insurance_pmi_hoa + extra_monthly_costs;
		
    //// FORMAT RESULTS
	mortgage_formatted = formatUSCurrency(mortgage)
    downpayment = formatUSCurrency(downpayment)
	pointsPaid = formatUSCurrency(pointsPaid)
	closingCost = formatUSCurrency(closingCost)
	insurance = formatUSCurrency(insurance)
	insurance_yearly = formatUSCurrency(insurance_yearly)
    taxes = formatUSCurrency(taxes)
	taxes_yearly = formatUSCurrency(taxes_yearly)
	tax_insurance = formatUSCurrency(tax_insurance)
	tax_insurance_yearly = formatUSCurrency(tax_insurance_yearly)
	prePaids = formatUSCurrency(prePaids)
    totalCash = formatUSCurrency(totalCash)
	monthly_pmi = formatUSCurrency(monthly_pmi)
	monthly_pay = formatUSCurrency(monthly_pay)
	monthly_pay_tax_insurance = formatUSCurrency(monthly_pay_tax_insurance)
	monthly_pay_tax_insurance_pmi = formatUSCurrency(monthly_pay_tax_insurance_pmi)
	monthly_pay_tax_insurance_pmi_hoa = formatUSCurrency(monthly_pay_tax_insurance_pmi_hoa)
	monthly_pay_tax_insurance_pmi_hoa_extra = formatUSCurrency(monthly_pay_tax_insurance_pmi_hoa_extra)
	
    //// DISPLAY RESULTS
    document.getElementById("Output1").innerHTML = mortgage_formatted;
	document.getElementById("Output2").innerHTML = ltv.toFixed(2) + "%";
    document.getElementById("Output3").innerHTML = downpayment;
	document.getElementById("Output3a").innerHTML = pointsPaid;
    document.getElementById("Output4").innerHTML = closingCost;	
	document.getElementById("Output4a").innerHTML = insurance + "/month" + " = " + insurance_yearly + "/year"
    document.getElementById("Output4b").innerHTML = taxes + "/month" + " = " + taxes_yearly + "/year"
	document.getElementById("Output4c").innerHTML = tax_insurance + "/month" + " = " + tax_insurance_yearly + "/year"		
    document.getElementById("Output5").innerHTML = prePaids;
    document.getElementById("Output6").innerHTML = totalCash + " (" + totalCashPercent + "% of price)";	
	document.getElementById("Output8").innerHTML = monthly_pay + "/month";
	document.getElementById("Output9").innerHTML  = "+" + tax_insurance + " = " + monthly_pay_tax_insurance + "/month";
	document.getElementById("Output10").innerHTML = "+" + monthly_pmi + " = " + monthly_pay_tax_insurance_pmi + "/month";
	document.getElementById("Output11").innerHTML = "+" + formatUSCurrency(hoa) + " = " + monthly_pay_tax_insurance_pmi_hoa + "/month";
	document.getElementById("Output12").innerHTML = "+" + formatUSCurrency(extra_monthly_costs) + " = " + monthly_pay_tax_insurance_pmi_hoa_extra + "/month";
			
    var e = document.getElementById("state");
    var state_str = e.options[e.selectedIndex].text;

    var el = document.getElementById("insurance_comm");
	el.getAttribute("title").innerHTML = " Hazard insurance of " + state_str + " is " + propHz;
	
	var e2 = document.getElementById("tax_comm");
	e2.getAttribute("title").innerHTML = " Property tax of " + state_str + " is " + propTax;
}

function formatUSCurrency(theNumber) {
    var isNegative = 0

    if (theNumber != "") {
        var workingNumber = theNumber + ""; // Evaluate to a string
        if (workingNumber.charAt(0) == "-") {
            isNegative = 1;
            workingNumber = workingNumber.substring(1, workingNumber.length)
        }
        var withoutChars = "";

        for (x = 0; x <= ((workingNumber.length) - 1); x++) {
            thisChar = workingNumber.charAt(x);
            charAsNum = parseInt(thisChar);
            if (((thisChar >= "0") & (thisChar <= "9")) || (thisChar == ".")) {
                withoutChars += workingNumber.charAt(x)
            }
        }
        workingNumber = withoutChars;
        decimalPoint = workingNumber.indexOf(".");

        if (decimalPoint == -1) {
            dollarValue = workingNumber;
            centsValue = "00";
        } else if (decimalPoint == 0) {
            dollarValue = "0";
            centsValue = workingNumber.substring(decimalPoint + 1, workingNumber.length);
        } else {
            dollarValue = workingNumber.substring(0, decimalPoint);
            if (decimalPoint == (workingNumber.length - 1)) {
                centsValue = "00";
            } else {
                centsValue = getValue(workingNumber.substring(decimalPoint + 1, workingNumber.length));
                centsValue += "0";
                centsValue = centsValue.charAt(0) + centsValue.charAt(1);
            }
        }

        var theString = dollarValue;
        var totalCommas = Math.floor((theString.length - 1) / 3);
        var dollarAmt = "";
        x = dollarValue.length;
        position = 0;

        while (x > 0) {
            x = x - 1;
            thisChar = dollarValue.charAt(x);
            rounded = Math.round(position / 3);
            if ((position / 3 == rounded) & (position != 0)) {
                dollarAmt = "," + dollarAmt;
            }
            dollarAmt = thisChar + dollarAmt;
            position = position + 1;
        }

        if (isNegative) {
            theString = "$" + dollarAmt + "." + centsValue;
        } else {
            theString = "$" + dollarAmt + "." + centsValue;
        }
        return (theString);
    } else {
        return ("$0.00");
    }
}

function removeCents(theNumber) {
    var isNegative = 0
    if (theNumber != "") {
        var workingNumber = theNumber + ""; // Evaluate to a string
        if (workingNumber.charAt(0) == "-") {
            isNegative = 1;
            workingNumber = workingNumber.substring(1, workingNumber.length);
        }
        theNumber = getValue(workingNumber);
        theNumber = Math.round(theNumber * 100) / 100;
        theNumber = theNumber + "";
        decimalPoint = theNumber.indexOf(".");

        if (decimalPoint == -1) {
            dollarValue = theNumber
        } else if (decimalPoint == 0) {
            dollarValue = 0
        } else {
            dollarValue = theNumber.substring(0, decimalPoint)
        }

        var dollarAmt = "";
        x = dollarValue.length;
        position = 0;

        while (x > 0) {
            x = x - 1;
            thisChar = dollarValue.charAt(x);
            rounded = Math.round(position / 3);

            if ((position / 3 == rounded) & (position != 0)) {
                dollarAmt = "," + dollarAmt;
            }
            dollarAmt = thisChar + dollarAmt;
            position = position + 1;
        }

        if (isNegative == 1) {
            theString = "-$" + dollarAmt;
        } else {
            theString = "$" + dollarAmt;
        }
        dollarValue = "$" + dollarAmt;
        return (theString);
    } else {
        return ("$0");
    }
}

function getValue(theString) {
    var noJunk = "";
    var withDollar = "";
    var foundDecimal = 0;
    var foundAlphaChar = 0;
    theString += "";

    for (i = 0; i <= theString.length; i++) {
        var thisChar = theString.substring(i, i + 1);
        if (thisChar == ".") {
            foundDecimal = 1;
            noJunk = noJunk + thisChar;
        }
		
        if ((thisChar < "0") || (thisChar > "9")) {
            if (thisChar != "$" &&
                thisChar != "." &&
                thisChar != "," &&
                thisChar != " " &&
                thisChar != ""
            ) {
                foundAlphaChar = 1;
            }
        } else {
            withDollar = withDollar + thisChar
            noJunk = noJunk + thisChar
        }

        if (thisChar == "$" || thisChar == "." || thisChar == ",") {
            withDollar = withDollar + thisChar;
        }
    }
	
    if (foundDecimal) {
        return parseFloat(noJunk);
    } else if (noJunk.length > 0) {
        return parseInt(noJunk);
    } else {
        return 0;
    }
}

window.onload = function() {
  calculate();
};
