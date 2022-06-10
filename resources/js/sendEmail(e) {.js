sendEmail(e) {
 /* Je vérifie si mon formulaire est valide + regex de l'email. */
    if (this.checkForm() && this.emailIsValid()) {
        try {
            emailjs
                .sendForm(
                    "service_w94zr4t",
                    "template_ah0hnzh",
                    e.target,
                    "lTg6uB3SSqdJZhtqN",
                    {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    }
                )

/* Retour de l'api : l'email a bien été envoyé */
                .then(
                    (result) => {

/*Tu peux mettre ton code ici pour dire que l'email est bien envoyé.*/
                        this.hideForm = true;
                        console.log("Email envoyé: " + result);
                    },

/* Retour de l'api : erreur */
                    (error) => {

                        console.log("Une erreur est survenue: " + error.text);
                        this.messageError = "Une erreur inconnue est survenue.";
                    }
                );
        } catch (error) {
            this.messageError =
                "Une erreur inconnue est survenue, veuillez ressayer plus tard.";
        }
        
// Reset du formulaire
        this.name = "";
        this.email = "";
        this.message = "";
    }
}
