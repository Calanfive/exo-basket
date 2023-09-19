import { Equipe } from "./Equipe";

export class Match {
    public ekip1 : Equipe
    public ekip2 : Equipe
    public score1 : number
    public score2 : number

    constructor(
        equipes : Equipe[],
        score : number[]
    ) {
      this.ekip1 = equipes[0]
      this.ekip2 = equipes[1]
      this.score1 = score[0]
      this.score2 = score[1]
    }

    public jouerMatch(): void {
        this.score1 = 20
        this.score2 = 13
    }

    public recupererGagnant(): Equipe {
        if (this.score1 > this.score2) {
            return this.ekip1
        }
        else {
        return this.ekip2
        }
    }
}
