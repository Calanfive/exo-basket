import { Equipe } from "./Equipe";

export class Match {
    public ekip1 : Equipe
    public ekip2 : Equipe
    public scores : number []

    constructor(
        equipes : Equipe[],
        scores : number [] = [0, 0]
    ) {
      this.ekip1 = equipes[0],
      this.ekip2 = equipes[1],
      this.scores = scores
    }

    public jouerMatch(): void {
        while (this.scores[0] < 20 && this.scores[1] < 20) {
            const indexEkip = Math.floor(Math.random() * 2)
            this.scores[indexEkip] += Math.floor(Math.random() * 3) + 1
        }
    }

    public recupererGagnant(): Equipe {
        if (this.scores[0] > this.scores[1]) {
            return this.ekip1
        }
        else {
        return this.ekip2
        }
    }
    public recupererPerdant(): Equipe {
        if (this.scores[1] > this.scores[0]) {
            return this.ekip2
        }
        else {
        return this.ekip1
        }
    }
}