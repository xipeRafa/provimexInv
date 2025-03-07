
import { AuctionBody } from "./components/auctions/AuctionBody";
import { NavComp } from "./authentication/NavComp";
import AuthProvider from "./context/AuthContext";
import FireStoreDataProvider from "./context/FireStoreDataContext";


// localStorage.newArrProvimex=JSON.stringify(
// [{"codigo":"6222 C3 FAG","stock":0,"precio":"","di":110,"de":200,"ancho":38,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6222 M-C3 FAG","stock":1,"precio":"","di":110,"de":200,"ancho":38,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6224 C3 FAG","stock":3,"precio":"","di":120,"de":215,"ancho":40,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6224-M-C3 FAG","stock":1,"precio":"","di":120,"de":215,"ancho":40,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6226 C3 FAG","stock":2,"precio":"","di":130,"de":230,"ancho":40,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6226-M-C3 FAG","stock":1,"precio":"","di":130,"de":230,"ancho":40,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6228 C3 FAG","stock":2,"precio":"","di":140,"de":250,"ancho":42,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6228-M-C3 FAG","stock":1,"precio":"","di":140,"de":250,"ancho":42,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6324 C3 FAG","stock":2,"precio":"","di":120,"de":260,"ancho":55,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6324 M-C3 FAG","stock":2,"precio":"","di":120,"de":260,"ancho":55,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6326 C3 FAG","stock":0,"precio":"","di":130,"de":280,"ancho":58,"description":"RODAMIENTO RIGIDO DE BOLAS"},{"codigo":"6326 M -C3 FAG","stock":2,"precio":"","di":130,"de":280,"ancho":58,"description":"RODAMIENTO RIGIDO DE BOLAS"}]
// )

export const App = () => {
  return (
    <>
      <AuthProvider>
        <FireStoreDataProvider>
          <NavComp />
          <AuctionBody />
        </FireStoreDataProvider>
      </AuthProvider>
    </>

  );
};
