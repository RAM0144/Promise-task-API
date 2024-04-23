const homeEelemnt =  document.querySelector('.loading');
 
const getCountries= async()=>{
 

            try {
               const response = await fetch(`https://restcountries.com/v3.1/all`);
              
               
               let data = await response.json();
               
               
               const list = document.createElement('ul')
               
               homeEelemnt.innerHTML = '';

               data.forEach(country => {
                  const li = document.createElement('li')
                  li.textContent = country.name.common;
                  list.appendChild(li);
               });
                homeEelemnt.appendChild(list);
              
               
            } catch(error) {
               console.log('error fetching',error)
            }

           
         }
  
        setTimeout(()=>{
         getCountries();
        },2000);  
         
            
  












  