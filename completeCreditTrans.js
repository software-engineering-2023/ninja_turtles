
    // Generate dummy credit card transactions
    function generateTransactions(numTransactions) {
      var transactions = [];
      var merchants = ["Supermarket", "Restaurant", "Online Shopping", "Pharmacy"];
      
      for (var i = 0; i < numTransactions; i++) {
        var date = generateRandomDate();
        var merchant = merchants[Math.floor(Math.random() * merchants.length)];
        var amount = (Math.random() * 1000).toFixed(2);
        
        var transaction = {
          date: date,
          merchant: merchant,
          amount: amount
        };
        
        transactions.push(transaction);
      }
      
      return transactions;
    }

    // Generate a random date between January 1, 2022 and December 31, 2022
    function generateRandomDate() {
      var start = new Date(2022, 0, 1);
      var end = new Date(2022, 11, 31);
      var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      return randomDate.toDateString();
    }

    // Populate the table with transactions
    function populateTable(transactions) {
      var tableBody = document.getElementById("transactionTableBody");
      
      for (var i = 0; i < transactions.length; i++) {
        var row = document.createElement("tr");
        var dateCell = document.createElement("td");
        var merchantCell = document.createElement("td");
        var amountCell = document.createElement("td");
        
        dateCell.textContent = transactions[i].date;
        merchantCell.textContent = transactions[i].merchant;
        amountCell.textContent = "$" + transactions[i].amount;
        
        row.appendChild(dateCell);
        row.appendChild(merchantCell);
        row.appendChild(amountCell);
        
        tableBody.appendChild(row);
      }
    }

    // Generate and populate the table with 50 transactions
    var transactions = generateTransactions(50);
    populateTable(transactions);
  