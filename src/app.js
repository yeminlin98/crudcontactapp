import { createContactFormHandler } from "./app/contact";
import { createContactForm } from "./core/selectors";

class App {
 

listener(){
createContactForm.addEventListener("submit",createContactFormHandler)
}
    init(){
        console.log("I love you");
        this.listener();
    }

}

export default App;