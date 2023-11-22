
import { createContactForm } from "../core/selectors"
import { baseUrl } from "../core/variable";

export const createContactFormHandler=async (event) => {
    event.preventDefault();

// start sending data 
 createContactForm.querySelector("[name ='name']") .disabled=true;
 createContactForm.querySelector("[name ='number']") .disabled=true;
 createContactForm.querySelector("button") .disabled=true;
 createContactForm.querySelector("button") .innerText="loading ...";





const formData=new FormData(createContactForm);



const myHeaders=new Headers();
myHeaders.append("Content-Type", "application/json");
 const raw = JSON.stringify({
    Name: formData.get("name"),
    phone: formData.get("number")
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

 const res= await fetch (`${baseUrl}/contacts`,requestOptions);
 const data= await res.json()

 createContactForm.querySelector("[name ='name']") .disabled=false;
 createContactForm.querySelector("[name ='number']") .disabled=false;
 createContactForm.querySelector("button") .disabled=false;

 createContactForm.querySelector("button") .innerText="Add New";

 createContactForm.reset();

}

