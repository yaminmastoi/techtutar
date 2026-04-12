import emailjs from "@emailjs/browser";

export const sendUserEmail = (data) => {

emailjs.send(
"mastoi-ai_services",   // SERVICE ID
"template_aaq222n",   // TEMPLATE ID
{
firstName: data.firstName,
lastName: data.lastName,
email: data.email,
country: data.country,
city: data.city,
dob: data.dob
},
"KfSECGyPo3kSLadvq"     // PUBLIC KEY
)

.then(() => {
console.log("Email sent successfully");
})

.catch((error) => {
console.log("Email error:", error);
});

};