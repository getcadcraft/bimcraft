---
title: Strechy: sklon pre každú stenu, štíty, pultové strechy a roviny strechy
summary: Nastavte každú stenu pod strechou na sklonenú, štítovú alebo žiadnu, použite predvoľby valbovej, štítovej a pultovej strechy, zdvihnite strechu výškou pätky, pridajte čelnú dosku a podhľad a kreslite jednotlivé roviny strechy tam, kde automatická strecha nesedí.
keywords: zmeniť strechu, upraviť strechu, vybraná strecha, vlastnosti strechy, späť strecha, strecha, sklon, pre každú stenu, štít, štítová stena, pultová strecha, valbová strecha, údolnica, hrebeň, výška pätky, pätka, čelná doska, podhľad, okap, štítová hrana, presah, rovina strechy, strecha vstupu, vikier, štítový vikier, pultový vikier
from: 096084a7
---

## Čo urobíte

Tvarujte strechu podľa stien pod ňou. Každá stena dostane vlastné nastavenie, takže jedna strecha môže byť vpredu valbová, na koncoch so štítmi a vzadu sa zastaviť naplocho pri vyššej stene. Pre vstupnú strechu alebo akúkoľvek plochu, ktorú automatická strecha nezvládne, nakreslite rovinu strechy podľa jej rohov.

## Položenie strechy

1. Na podlaží, ktorého steny nesú strechu, kliknite na {{ui:Strecha}}.
2. Zadajte **Sklon** (`6/12`, alebo stupne, napríklad `30`) a **Presah**.
3. Vyberte predvoľbu: **Valbová strecha**, **Štíty na kratších stranách**, **Štíty na dlhších stranách**, alebo **Pultová strecha** (strana najbližšie ku kurzoru je nízky okap; ostatné strany sú štíty).
4. Nechajte zaškrtnuté **Čelná doska a podhľad** pre uzavretý okap s čelnou doskou, alebo ho odškrtnite pre holý okraj strechy.
5. Ukážte vnútri budovy: okap, hrebeň, valbové hrany a údolnice sa zobrazia na pôdoryse. Kliknite.

Funguje akýkoľvek obrys: tvary L, T, U a plus, šikmé rohy a výrezy. Valbové hrany, hrebene a údolnice sa nájdu tam, kde sa roviny strechy stretávajú.

## Jedna stena naraz

Vyberte strechu (na podlaží nad stenami kliknite dovnútra jej obrysu) a pozrite sa pod **Každá stena** vo **Vlastnostiach**. Ukázanie na riadok označí túto stenu na pôdoryse.

- **Sklonená**: nad stenou je šikmá rovina strechy. Vedľa zadajte jej vlastný sklon, napríklad `12/12` pre strmé konce na streche `6/12`.
- **Štítový koniec**: strecha končí zvislým štítom nad touto stenou, stena je vyplnená až po strechu a strecha presahuje za ňu o **Presah štítu**.
- **Žiadna (zarovnaná)**: strecha sa zastaví pri tejto stene bez presahu a bez štítovej steny, pre strechu pri vyššej stene.

Zoznam **Konce** hore nastaví všetky steny naraz; **Nastaviť pre každú stenu** sa zobrazí, keď steny už nezodpovedajú predvoľbe.

## Zmena už položenej strechy

Vyberte strechu a **Vlastnosti** zobrazia rovnaké nastavenia ako nástroj {{ui:Strecha}}: **Sklon**, **Presah**, **Presah štítu**, **Výška pätky**, **Výška čelnej dosky**, **Uzavreté okapy** a **Hrúbka**. Každá zmena sa hneď zobrazí na pôdoryse aj v 3D, s rovnakými kontrolami ako nástroj (sklon 80 stupňov alebo viac sa odmietne, rovnako aj nastavenie, ktoré nemôže vytvoriť strechu). Zadajte hodnotu a stlačte {{key:Enter}}, alebo opustite políčko.

Každá zmena je jeden krok späť. Viacero zmien v tom istom políčku za sebou (zadáte `6/12`, potom `7/12`, potom `8/12`) sa spojí do jedného kroku, takže jedno {{key:Ctrl}}+{{key:Z}} vráti to, čo strecha mala pred sériou; zmena iného políčka začne nový krok.

## Výška pätky, čelná doska a podhľad

- **Výška pätky** je miesto, kde sa roviny strechy stretajú s vonkajšou stranou stien, meraná od podlahy podlažia. Nechajte ju prázdnu, aby strecha sedela na vrchu stien; zadajte väčšiu hodnotu pre zdvihnutú pätku.
- **Výška čelnej dosky** je doska pozdĺž okapov a po štítových hranách. Zadajte `0`, ak žiadnu nechcete.
- **Uzavreté okapy** dá vodorovný podhľad pod každý okap, od steny po zadnú stranu čelnej dosky.

Každá rovina sa stretáva so stenou vo výške pätky, takže steny s rôznym sklonom si zachovajú jednu líniu pätky a ich okapy končia v rôznych výškach, tak ako by boli zarámované.

## Kreslenie roviny strechy

1. Na podlaží, na ktorého stenách rovina leží, otvorte {{ui:Zostava}} a vyberte {{ui:Rovina strechy}}.
2. Zadajte **Sklon** a, ak to nie je vrch stien, **Výšku okapu**.
3. Kliknite na rohy. Prvá strana, ktorú nakreslíte, je okap; rovina z nej stúpa smerom k zvyšku tvaru.
4. Prvý roh kliknite znova, dvakrát kliknite alebo stlačte {{key:Enter}} na dokončenie. {{key:Esc}} zahodí rohy.

Rovina strechy nesleduje steny. Vyberte ju na podlaží nad ňou (kliknite dovnútra), aby ste zmenili jej sklon, výšku okapu alebo hrúbku, alebo stlačte {{key:Delete}} na jej odstránenie.

## Pridanie vikiera

1. Zobrazte podlažie, na ktorom je strecha.
2. Otvorte {{ui:Zostava}} a vyberte {{ui:Vikier}}.
3. V riadku možností vyberte **Druh vikiera** (**Štítový** alebo **Pultový**) a nastavte **Šírku**, **Predná stena** (výška prednej steny od vrchu strechy po okap vikiera), **Sklon** a **Presah**.
4. Kliknite na plochu strechy, kam má prísť stred prednej časti vikiera.

BimCraft postaví prednú stenu, dve bočné steny a strechu vikiera a vedie ju dozadu, kým nenarazí na strechu. Štítový vikier má dve roviny, ktoré sa stretávajú v hrebeni. Pultový vikier má jednu rovinu, ktorá musí byť menej strmá ako strecha. Strecha pod vikierom sa vyreže. Vikier sleduje strechu, keď sa steny pohnú.

Vyberte ho, ak chcete zmeniť jeho druh, šírku, prednú stenu, sklon alebo presah vo **Vlastnostiach**. {{key:Delete}} ho odstráni a strechu znova uzavrie. Musí sa zmestiť na jednu plochu strechy, mimo valbových hrán, údolníc a hrebeňa. Vikiere sa dajú pridať iba na strechy vytvorené nástrojom {{ui:Strecha}}, nie na roviny strechy kreslené ručne. Ešte nie je hotové: okno v prednej časti vikiera a vikiere na ručne nakreslených rovinách strechy.

## Čo sa ukladá

Strechy sú strechy IFC zložené z jednej dosky strechy na rovinu, štítových stien, jedného prvku čelnej dosky a jedného krytia podhľadu. Strecha nesie dĺžky svojho hrebeňa, valbových hrán, údolníc, okapov a štítových hrán a svoje plochy pre výkazy výmer. Rovina strechy je strecha IFC s jednou doskou.

:::tip
Späť vráti každú zmenu strechy jedným krokom, vrátane predvoľby, ktorá mení každú stenu.
:::
