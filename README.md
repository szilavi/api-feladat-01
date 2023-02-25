# api-feladat-01

Gyakorlófeladat - API 01

Készíts egy egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást, amellyel nyilvántarthatjuk, melyik személy milyen védőoltást kapott az országban.

1. Készíts egy ideiglenes JSON fájl adatbázist, amely a személyeket tartalmazza, minden személy rendelkezzen az alábbi adatokkal:

   - id: egyedi azonosító (number)
   - firstName: keresztnév (string)
   - lastName: vezetéknév (string)
   - vaccine: milyen típusú oltást kapott a személy (string) (elhagyható, ha valaki még nem kapott oltást)

2. Implementáld a GET /person/count végpontot, amely visszaadja az oltott személyek számát!

3. Implementáld a GET /person/vaccinated végpontot, amely csak a beoltott személyek adatait adja vissza!

4. Készíts egy egyszerű Swagger dokumentációt az elkészült API alkalmazáshoz!

   - Az útvonalválasztást express.Router segítségével old meg!
   - Az adatbázis egy darab JSON fájl legyen!
   - Minden elkészült végpontot tesztelj böngésző segítségével!

5. Egészítsd ki az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást CRUD műveletekkel!

Implementáld a GET /person/:id/vaccinated végpontot, amely visszaadja, hogy az adott id-val rendelkező személy rendelkezik-e oltással! (Tipp: használd a parseInt() függvényt!)
Implementáld a POST /person végpontot, amellyel új személyt vehetünk fel a nyilvántartásba! (Ne felejtsd el telepíteni a body-parser csomagot!)
Implementáld a PUT /person/:id/:vaccine végpontot, amellyel megadhatjuk, hogy az adott id-val rendelkező személy vaccine típusú oltást kapott.
Implementáld a DELETE /person/:vaccine végpontot, amely a vaccine típusú oltással rendelkező személyeket törli az adatbázisból.

6. Folytassuk az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást!

Implementálj egy hibakezelő middleware függvényt, amely kilogolja a valódi hibát a konzolra, majd a kliens számára valamilyen - a hibától független - átlátszó kifogást küld vissza üzenetben. Ha nincs más státuszkód definiálva, akkor adjon 500-as hibakódot.
Végezd el az eddig elkészült végpontok id path paramétereinek a validációját. Amennyiben hibásak ezek a paraméterek, a tanult módon add át a hibát a hibakezelő middleware-nek.
A hibakezeléshez használd a http-errors csomagot! Teszteld a végpontokat hibás bemenettel, böngésző segítségével!
