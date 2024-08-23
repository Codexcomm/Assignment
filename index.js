// target the form and add submit event listener to it
const loan_form = document.querySelector("form")

loan_form.addEventListener("submit", calculateLoan)


function calculateLoan(event){
      // stopping the form from reloading the page automatically
      event.preventDefault()

      // grab the amount the person wants to borrow
      let borrowed_money = document.querySelector(".borrowed-amount").value
      // grab the payment duration
      let payment_duration = document.querySelector(".duration").value

      // cross checking if user enter any borrowed amount
      if(borrowed_money === ""){ 
            alert("oops! borrowed money cannot be empty!")
      }else{
              if(payment_duration === ""){
                  alert("Ooops! duration field cannot be empty")
              }else{
                   let interest = (Number(borrowed_money) * Number(payment_duration) * 0.2) / 12
                   let amount = interest + Number(borrowed_money)

            //      target the small element that will display the interest
                document.querySelector(".interest").innerHTML = interest.toFixed(1)
                document.querySelector(".amount").innerHTML = amount.toFixed(1)

              }
      }
      
}


const reset_btn = document.querySelector(".reset-btn")

reset_btn.addEventListener("click", clearApp)

function clearApp(){
      document.querySelector(".interest").innerHTML = "0.0"
      document.querySelector(".amount").innerHTML = "0.0"

}

