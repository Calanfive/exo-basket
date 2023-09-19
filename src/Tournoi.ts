import { log } from "console";
import { Equipe } from "./Equipe";
import { Match } from "./Match";

export class TournoiA4 {
    public equipes: Equipe[]
    public result: Equipe[]
        
    constructor(
        equipes: Equipe[],
        result: Equipe[] = []
    ) {
        this.equipes = equipes
        this.result = result
    }
    
    public tournoiType() {
        const match1 = new Match([this.equipes[0], this.equipes[1]])
        const match2 = new Match([this.equipes[2], this.equipes[3]])
        match1.jouerMatch();
        match2.jouerMatch();

        const petiteFinale = new Match([match1.recupererPerdant(), match2.recupererPerdant()])
        const finale = new Match([match1.recupererGagnant(), match2.recupererGagnant()])
        petiteFinale.jouerMatch();
        finale.jouerMatch();
        this.result = [finale.recupererGagnant(), finale.recupererPerdant(), petiteFinale.recupererGagnant(), petiteFinale.recupererPerdant()];
    }
    
    public getWinner(): Equipe {
        return this.result[0]
    }

    public afficherPodium(): void {
        console.log(`1ere equipe: ${this.result[0].j1.nom} ${this.result[0].j1.prenom}`)
        console.log(`2eme equipe: ${this.result[0].j1.nom} ${this.result[0].j1.prenom}`)
        console.log(`3eme equipe: ${this.result[0].j1.nom} ${this.result[0].j1.prenom}`)
    }

    public getAverageAgeOfWinners(){
        return (this.getWinner().j1.age + this.getWinner().j2.age) / 2
    }
}

