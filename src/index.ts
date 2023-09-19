import { Joueur } from "./Joueur";
import { Equipe } from "./Equipe";
import { Match } from "./Match";
import { TournoiA4 } from "./Tournoi";

const j1 = new Joueur('Kevin','Durant', 37)
const j2 = new Joueur('Victor','Wembi', 19)
const j3 = new Joueur('Victor','Wembi', 19)
const j4 = new Joueur('Victor','Wembi', 19)
const j5 = new Joueur('Victor','Wembi', 19)
const j6 = new Joueur('Victor','Wembi', 19)
const j7 = new Joueur('Victor','Wembi', 19)
const j8 = new Joueur('Victor','Wembi', 19)

const equipe1 = new Equipe([j1, j2])
const equipe2 = new Equipe([j3, j4])
const equipe3 = new Equipe([j5, j6])
const equipe4 = new Equipe([j7, j8])

const tournoi = new TournoiA4([equipe1, equipe2, equipe3, equipe4])
tournoi.tournoiType()
tournoi.afficherPodium()
const winner = tournoi.getWinner()