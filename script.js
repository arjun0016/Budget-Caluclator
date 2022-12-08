function submit(){
  Name = uname.value;
  income = mon_inc.value;

  details = {
    Name,
    income,
  };
  if (Name ==""&& income =="") {
    alert("enter name and Income");
  }else{
    expense=parseInt(rm_rent.value)+parseInt(ec_bill.value)+parseInt(food.value)+parseInt(insur.value)+parseInt(others.value);
    console.log(expense);
    balance=income-expense;
    console.log(balance);
    i.innerHTML=`${balance}`


  }
  
};
