import throttle from 'lodash.throttle';

 
    const STORAGE_KEY = "feedback-form-state"

    const inputRef = document.querySelector('input');
    inputRef.setAttribute("id", "email");
     

    const inputTextarea = document.querySelector('textarea');
    inputTextarea.setAttribute('id', 'message');

     
    document.addEventListener('DOMContentLoaded', () => {
       
      let savedFormData = localStorage.getItem(STORAGE_KEY);
      console.log( JSON.parse(savedFormData))

      if (savedFormData) {                                   
        savedFormData = JSON.parse(savedFormData);            
        document.getElementById('email').value = savedFormData.email; 
        document.getElementById('message').value = savedFormData.message; 
         localStorage.removeItem(STORAGE_KEY) ;                  
      }
    })


    window.addEventListener('beforeunload', e => {
      let emailInput = document.querySelector('input').value,
          msg = document.querySelector('textarea').value;
      
      if (emailInput.length || msg.length) {
        let formData = {
          email: emailInput,
          message: msg
        };
        const formDat = localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
         
      }
    })


    

     
       
    
     
    
     
     

    
     
     

      

     
