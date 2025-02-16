const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
   event.preventDefault();

   const formData = new FormData(event.target);
   const formDataObj = {};

   for (const [key, value] of formData.entries()) {
       if (!value) {
           return alert('All form fields must be filled in');
       }

       formDataObj[key] = value;
   }

   console.table(formDataObj);
   event.target.reset();
});