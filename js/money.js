/*
১. একটা প্রাকটিস প্রজেক্ট দেখানো হয়েছে। সেখানে Calculate বাটনে চাপ দিলে তুমি food , Rent এবং clothes এর ইনপুট ফিল্ড এ কত লেখা আছে সেগুলা যোগ করে যোগফল নিচে Total Expense এর পাশে লিখতে পারো 

২. সেই একটু সাথে Calculate বাটনে চাপ দিলে তুমি Balance এর পাশে কত ব্যালেন্স থাকে সেটা লিখতে পারো। Balance হবে। একদম সবার উপরে Income বক্স এর ইনপুট ফিল্ডে কত আছে সেটা থেকে তোমার total expense বিয়োগ করে কত হয়। সেই সংখ্যা নিচে দেখাবে। 

৩. আবার নিচে আরেকটি বাটন আছে Save নাম এ। Save এ বামে আরেকটা ফিল্ড আছে। ধরো, save এর পাশের ইনপুট ফিল্ড এ ২০ লেখা আছে। তাহলে এই ২০% এর হিসাব বের করতে হবে। এই ২০$% হবে তোমার একদম উপরে income এর ঘরে যত লেখা আছে সেটার ২০% সেটা নিচে save Amount এর পাশের ঘরে লিখবে। 

৪. একদম সবার নিচে Remaining Balance এর পাশে। তোমার Balance থেকে save amount বিয়োগ করে ফাইনাল যত থাকে সেটা লিখবে। অর্থাৎ খেয়াল করলে বুঝতে পারবে। তোমার টোটাল ইনকাম থেকে প্রথমে তোমার খরচ পাতি বিয়োগ হবে (ফুড, রেন্ট, ক্লোথ) সেটা বাদ দিলে ব্যালেন্স তৈরী হবে। আবার ব্যালেন্স থেকে সেইভিং বাদ দিলে তোমার Remaining Amount হবে। 

৫. এই সাইট নেটলিফাই তে ডেপ্লয় দিবে। 

চ্যালেঞ্জিং:

৬. চ্যালেঞ্জ: কোন ফিল্ড এ কোন ভ্যালু না থাকলে বা সংখ্যা ছাড়া কথা লেখা থাকলে তুমি alert ওয়ার্নিং দিবে। যে অনলি সংখ্যা দেখাও 

৭. চ্যালেঞ্জ: কোন ইনপুট ফিল্ডে নেগেটিভ সংখ্যা দিলে তুমি ওয়ার্নিং দিবে 

৮. চ্যালেঞ্জ: যদি তোমার খরচ ইনকাম এর চাইতে বেশি হয়ে যায়। তাহলে একটা alert দিবে-- ইনকাম এর চাইতে বেশি খরচ করা যাবে না 

৯. চ্যালেঞ্জ: একইভাবে, যদি save amount তোমার balance এর চাইতে বেশি হয়ে যায়। তাহলে একটা alert দিয়ে বলবে-- তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না।  

১০. চ্যালেঞ্জ: যদি save এর পার্সেন্ট এর ঘরে ১০০ এর বেশি বড় কোন সংখ্যা লিখে। তাহলে তুমি alert দিবে--১০০% এর বেশি save করা সম্ভব না।
*/

function getCalculation(elementId) {
    // income field
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeTotal = parseFloat(incomeFieldString);

    // save amount calcultoin
    const saveTotalElement = document.getElementById('save-total');
    const saveTotalString = saveTotalElement.value;
    const saveNumber = parseFloat(saveTotalString);
    // =============
    if (incomeField.value === "") {
        alert('Please enter your number in the income field')
        return;
    }
    else if (saveTotalElement.value === "") {
        alert('অনলি সংখ্যা দেখাও')
        return;
    }
    else if (saveNumber > 100) {
        alert('১০০% এর বেশি save করা সম্ভব না।')
        return;
    }

    else if (saveTotalString.startsWith('-')) {
        alert('Enter your positive number')
        return;
    }


    const correntSaving = (saveNumber / 100) * incomeTotal;

    // saving amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = correntSaving;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalString);
    // Remaining Balance
    const remainingBalanceTotal = balanceTotalAmount - correntSaving;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingBalanceTotal;

}


document.getElementById('btn-calculate').addEventListener('click', function () {
    // income field
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeTotal = parseFloat(incomeFieldString);

    console.log(typeof incomeField)

    // food calculation
    const foodField = document.getElementById('food');
    const foodFieldString = foodField.value;
    const foodTotal = parseFloat(foodFieldString);


    // rent calculation
    const rentField = document.getElementById('rent');
    const rentFieldString = rentField.value;
    const rentTotal = parseFloat(rentFieldString);


    // clothes calculation
    const clothesField = document.getElementById('clothes');
    const clothesFieldString = clothesField.value;
    const clothesTotal = parseFloat(clothesFieldString);

    if (incomeField.value === "" || foodField.value === "" || rentField.value === "" || clothesField.value === "") {
        alert('অনলি সংখ্যা দেখাও')
        return;
    }
    else if (incomeFieldString.startsWith('-') || foodFieldString.startsWith('-') || rentFieldString.startsWith('-') || clothesFieldString.startsWith('-')) {
        alert('Enter your positive number')
        return;
    }

    // input field not is value alert
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';

    // total sum
    const sumTotal = foodTotal + rentTotal + clothesTotal;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = sumTotal;

    // income calculate
    const correntBalance = incomeTotal - sumTotal;
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = correntBalance;

})

// save button
document.getElementById('btn-save').addEventListener('click', function () {
    getCalculation()
})