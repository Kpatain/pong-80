/**
 * La classe Partie répresente un échange
 */
class Partie {
    constructor() {
        let me=this;
        /**
         * La partie est elle en pause ou non
         * @type {boolean} 
         */
        this.paused = true;
        this.$ecranDebut = $(".ecran-debut");
        this.$btnGo = $(".btn-go");

        this.$btnGo.click(function (e) {
            me.demarreNouveauJeu();
            //plein écran
            $body[0].requestFullscreen();
        });
        //une boucle qui fait tourner notre jeu
        setInterval(() => {
            joueur1.bouge();
            joueur2.bouge();
            if (!me.paused) {
                balle.bouge();
            }
        }, 10);
        //une boucle toutes les 3 secondes qui recalculte les positions et dimenssions au cas où l'écran change de tailleaa
        setInterval(
            function () {
                terrain.calculeTailles();
                joueur1.calculeTailles();
                joueur2.calculeTailles();
                joueur1.calculePositions();
                joueur2.calculePositions();
                balle.calculeTailles();
                balle.calculePositions();
                
            }, 3000
        );
    }
    /**
     * Masque l'écran de début, fait une pause de 3 secondes et lance la balle !
     */
    demarreNouveauJeu() {
        //masque ecran de début
        this.$ecranDebut.addClass("invisible");
        this.paused = true;
        balle.bougePas();
        //balle devient rouge
        terrain.affichePause();
        let me = this;
        //stope pendant 3 secondes
        setTimeout(
            function () {
                terrain.affichePlay();
                me.paused = false;
                balle.gauche = terrain.largeur / 2 - balle.largeur/2;
                balle.haut = terrain.hauteur / 2 - balle.hauteur/2;;
                balle.vitesse = balle.vitesseDepart;
                //balle.directionY=0.5;
                if (Math.random() > 0.5) {
                    //balle.inverseDirectionY();
                }
                //direction de la balle en aléatoire
                if (Math.random() > 0.5) {
                    balle.vaVersLaGauche();
                }else{
                    balle.vaVersLaDroite();
                }
            },
            3000
        );

    }
}