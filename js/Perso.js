class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Je préfère apashe"
            ,"C'est un bug ou la musique est comme ça ?"
            ,"Ah mais c'est Bigflo et Oli"
            ,"..."
            ,"Is that a Tron reference"
            ,"Allé Guy-Manuel de Homem-Christo ! C'est quoi ce nom en vrai ?"
            ,"nul Germain"
            ,"J'adore le drop"
            ,"Not verry faster and stronger à ce que je vois..."
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}