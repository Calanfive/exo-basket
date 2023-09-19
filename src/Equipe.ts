import { Joueur } from "./Joueur"

export class Equipe {
    public j1 : Joueur
    public j2 : Joueur

    constructor(
        joueurs : Joueur[]
    ) {
      this.j1 = joueurs[0]
      this.j2 = joueurs[1]
    }

    public afficheNBRjoueurs(): void{
        console.log(`Nombre de joueurs : 2`);
    }
}