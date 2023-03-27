import { Casino } from "./Casino";
import { JuegoDeCasino } from "./JuegoDeCasino";
import { Poker } from "./Poker";
import { TragaMoneda } from "./TragaMoneda";

const poker = new Poker(1, 'Poker', 'Mesa', 'Piso 2',6,'Texas' );
const tm1 = new TragaMoneda(1,'Triple Lucky','Palanca','Lobby',300);

const casino = new Casino('Ocean', 2, 'Las Vegas',700)
casino.setCasinoJuego(poker);
casino.setCasinoJuego(tm1);

casino.getInfo();