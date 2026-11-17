---
title: Dokumenti in revizije (shramba)
summary: Korak za korakom skozi en pravi posel: postavite mapo projekta z modeli IFC pod nadzor, prevzemite model, ga spremenite, oddajte z opombo, pošljite v pregled, odobrite in izdajte, si oglejte zgodovino in kaj uporablja, kaj vidi druga oseba, ko je datoteka zaklenjena, in kako to deluje z oblačnimi mapami.
keywords: shramba, dokumenti, vodnik, učni primer, prevzem, oddaja, revizija, izdaja, odobritev, zaklep, zgodovina, IFC, model, oblačna mapa, mapa projekta, dva človeka, skupna mapa
from: 0a753f25
---

## Kaj boste naredili

Vi ste Ana, delate na Riverside Clinic s sodelavcem Benom. Modeli IFC projekta so v eni mapi, do katere oba dostopata (skupni pogon, sinhronizirana mapa ali oblačna mapa). Na koncu bo ena datoteka prešla od prve kopije do izdane revizije **A**, bila spet spremenjena kot **B.1**, videli boste, kdo je kaj naredil, in videli boste, kaj vidi Ben, ko imate vi datoteko.

Vse se hrani v skriti mapi `.ccvault` poleg vaših datotek: brez strežnika, nič se ne naloži (izjema je oblačna mapa, glejte zadnji korak). Za vsak gumb in pravilo na enem mestu glejte temo *Dokumenti: prevzem, revizije in izdaja*, kjer jo vaša aplikacija ima.

## 1. Nastavite mapo projekta

1. Izberite {{ui:Dokumenti}} poleg {{ui:Odpri mapo}} na začetnem zaslonu ali {{ui:Dokumenti…}} v meniju **Datoteka**.
2. Izberite {{ui:Izberite projektno mapo}} in izberite mapo, ki hrani modele IFC projekta. (Mape projektov delujejo v Studio in v brskalnikih, ki znajo odpreti mapo, kot sta Chrome in Edge. V drugih brskalnikih to podokno pove.)
3. Izberite {{ui:Sprememba}} poleg **Vi:** in vpišite svoje ime, `Ana` (če vpraša, tudi ime tega računalnika). Podokno zdaj pravi *Vi: Ana na* in vaš računalnik. Vaše ime gre na vse, kar naredite.
4. Izberite {{ui:Začni shrambo v tej mapi}} in vpišite ime projekta, `Riverside clinic`. Podokno pravi *Shramba je začeta za Riverside clinic.*

## 2. Datoteko postavite pod nadzor

1. Odprite **Datoteke zunaj shrambe** in izberite {{ui:Dodaj}} poleg `models/House.ifc`.
2. Prikaže se pod **Datoteke v shrambi** pri reviziji **A.1**, stanje **V delu**. A.1 je njena prva kopija; shramba hrani kopijo vsake revizije.

## 3. Prevzemite, spremenite, oddajte

1. Izberite {{ui:Odprto}} poleg `models/House.ifc`. Model se odpre v BimCraft, podokno se zapre, da lahko vidite model. Podokno znova odprite iz {{ui:Dokumenti}}.
2. Znova odprite podokno in izberite {{ui:Prevzemi}}. Vrstica zdaj pravi **Prevzeto na vas**. Zaklepna datoteka je narejena v `.ccvault/locks`; nihče drug te datoteke ne more prevzeti, dokler je ne oddate.
3. Spremenite model: premaknite steno, dodajte vrata. Shranjevanje je zavrnjeno, razen če je model prevzet na vas, in pove zakaj; Shrani kot vedno deluje za kopijo vašega.
4. Odprite podokno, izberite {{ui:Oddaj}} in vpišite, kaj se je spremenilo (`Premaknil vrata`). Podokno pravi *oddano kot A.2*. Datoteka v mapi projekta je zdaj model, ki ste ga imeli odprtega, zaklep pa je odstranjen. Oddaja brez spremembe ohrani revizijo.

Če se premislite, {{ui:Prekliči prevzem}} vrne datoteko brez nove revizije.

## 4. Pregled in izdaja

1. Izberite {{ui:Pošlji v pregled}}. Stanje postane **Za pregled**, datoteka pa samo za branje.
2. Pred odobritvijo izberite {{ui:Nastavitve projekta}} in navedite, kdo lahko odobri (eno ime v vrstici), na primer `Ben` in `Carla`, ter označite pravilo, da mora odobritelj biti nekdo drug kot avtor. Izberite {{ui:Shrani nastavitve}}. Zdaj shramba sama zavrne vse druge.
3. Ben (ali Carla) izbere {{ui:Odobri}} in vpiše ime odobritelja. Stanje postane **Izdano**, revizija pa **A**, z *odobril* in imenom. Izdana datoteka je samo za branje. {{ui:Vrni}} bi jo vrnil v V delu z razlogom.

Ime odobritelja je ime, vpisano v podokno; je zapis, kdo je podpisal, ne dokaz identitete.

## 5. Nova revizija

1. Na izdani datoteki izberite {{ui:Nova revizija}}. Zadržite jo za naslednjo črko.
2. Spremenite jo, nato {{ui:Oddaj}}. Revizija je **B.1**, v delu. Izdajte jo enako in postane **B**. {{ui:Prekliči prevzem}} pred prvo oddajo jo pusti pri **A**.

Črke revizij tečejo A, B … Z, AA, AB. Če vaš standard nekatere črke izpušča, nastavitev projekta *Uporabi zaporedje ASME Y14.35* za naslednje revizije preskoči I, O, Q, S, X in Z.

## 6. Oglejte si, kaj se je zgodilo

Izberite ime datoteke, da odprete njene podrobnosti:

- {{ui:Zgodovina}}: vsak dogodek, najnovejši najprej, s tem, kdo, kateri računalnik in kdaj: *Oddano A.2* od Ane, *Izdano* od Bena in tako naprej.
- {{ui:Revizije}}: tabela revizij: vsaka ohranjena revizija, z datumom, kdo jo je oddal, opombo in kdo jo je odobril. Shramba hrani kopijo vsake v `.ccvault/revs`.
- {{ui:Uporablja}}: dokumenti, na katere kaže model IFC.
- {{ui:Uporablja}}: našteje vsak model v shrambi, ki kaže na to datoteko.

## Modeli, ki kažejo na druge dokumente

Model IFC, ki kaže na druge dokumente v mapi (risbe, razpredelnice), jih prikaže pod **Uporablja**, vsak od teh pa pod **Uporabljena v** prikaže model. Ko dokument oddate, vidite, kateri modeli se nanj sklicujejo.

## 7. Kaj vidi Ben, ko imate vi datoteko

Zdaj datoteko znova prevzemite in prosite Bena, naj na svojem računalniku odpre isto mapo projekta in odpre podokno. Na vrstici datoteke vidi **Prevzeto s strani Ane na** vaš računalnik **od** časa, in nobenega gumba {{ui:Prevzemi}}. Če poskusi vseeno, shramba zavrne: zaklep je datoteka, ki je sistem ne ustvari dvakrat, tako da obe osebi nista mogli imeti datoteke, tudi v isti sekundi, kadar je mapa na disku v Studio. (V brskalniku mapa dovoli samo najboljši poskus, podokno pa to pove pod **Mapa**.)

Če je Ana odsotna in Ben potrebuje datoteko, {{ui:Prekini prevzem}} jo sprosti. Vpisati je treba razlog; ta gre v dnevnik skupaj s tem, čigav je bil prevzem. Kadar projekt navaja skrbnike, lahko to storijo samo oni. Prevzem, starejši od roka zastaranja (privzeto 14 dni), je označen kot *predolgo*. Po prekinitvi je Anina zakasnela oddaja zavrnjena, tako da si drug drugega ne moreta prepisati.

## 8. Oblačne mape

Oblačna mapa je mapa projekta, shranjena v oblačni shrambi vaše ekipe, tako da ekipa ne potrebuje skupnega pogona. V Studio, prijavljeni v vaš račun CadCraft, podokno prikaže {{ui:Odpri oblačno mapo}} poleg {{ui:Izberite projektno mapo}}. Izberite jo in izberite mapo, navedeno kot delovni prostor / mapa. Lastnik delovnega prostora mora mapo najprej ustvariti, oblačna shramba ekipe pa mora biti v veljavi. Vse zgoraj deluje enako; strežnik ustvari zaklep, ki je strog med ljudmi. Če niste prijavljeni, podokno zahteva prijavo. V navadnem zavihku brskalnika gumb za oblak ni ponujen; uporabite Studio.

## Preizkusite

Naredite osem korakov zgoraj s kopijo prave datoteke. Za korake z dvema osebama potrebujete drugo osebo ali dve okni z dvema imenoma. Če to poskusite s pravo skupno mapo, stran Preizkušanje v skupnosti navaja preverjanje, ki sprašuje prav to, in sprejema rezultate.
