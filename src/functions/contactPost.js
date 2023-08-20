import { toast } from "react-hot-toast";

export default function contactPost(event){
    event.preventDefault();

    const name = event.target.elements.firstName.value;
    const surname = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const title = event.target.elements.title.value;
    const message = event.target.elements.message.value;

    const data = {
      name,
      surname,
      email,
      title,
      message,
    };
    
    fetch("https://localhost:7281/api/Contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then(toast.success("Mesajınız Başarıyla Gönderilmiştir"))
      .catch((err) => console.log(err));
}