/*Contact Validation*/

const validateForm = () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')
    
    if (name.value && email.value && phone.value && message.value) {
            if (email.value.includes('@')) {
                    alert("Thanks for your message ${name.value}!")
            } 
            else {
                alert("Valid email required")
            }
            else {
                alert('Please fill out each section')
            }
        }
    }

/*Hamburger Menu*/

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        }
    }
    