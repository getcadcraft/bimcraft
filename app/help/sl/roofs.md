---
title: Strehe: naklon za vsak zid, zabati, enokapnice in strešne ploskve
summary: Vsak zid pod streho nastavite na nagnjeno, zabatni konec ali brez; uporabite prednastavitve čopaste, zabatne in enokapne streha, dvignite streho z višino venca, dodajte čelno desko in podboj ter narišite posamezne strešne ploskve tam, kjer samodejna streha ne ustreza.
keywords: spremeni streho, uredi streho, izbrana streha, lastnosti strehe, razveljavi streho, streha, naklon, za vsak zid, zabat, zabatni konec, enokapnica, prislonjena streha, čop, dolina, slemen, višina venca, peta, čelna deska, podboj, napušč, zabatni rob, previs, strešna ploskev, frčada, zabatna frčada, enokapna frčada
from: 096084a7
---

## Kaj boste naredili

Oblikujte streho iz zidov pod njo. Vsak zid dobi svojo nastavitev, tako da je lahko ena streha čopasta spredaj, zabatna na koncih in se pri zadnjem zidu ustavi ravno ob višjem zidu. Za nadstrešek ali katerokoli površino, ki je samodejna streha ne zmore, narišite strešno ploskev po njenih ogliščih.

## Postavitev strehe

1. Na etaži, katere zidovi nosijo streho, kliknite {{ui:Streha}}.
2. Vpišite **Naklon** (`6/12` ali stopinje, kot `30`) in **Previs**.
3. Izberite prednastavitev: **Čopasta streha**, **Zabati na krajših stranicah**, **Zabati na daljših stranicah** ali **Enokapnica** (stran, najbližja kazalcu, je nizek napušč; druge strani so zabatni konci).
4. Pustite **Čelna deska in podboj** označeno za zaprt napušč s čelno desko ali odznačite za golo strešno robo.
5. Kazalec postavite v stavbo: napušč, sleme, čopi in doline so prikazani na tlorisu. Kliknite.

Deluje vsak obris: oblike L, T, U in plus, poševni vogali ter zarezi. Čopi, slemena in doline se najdejo tam, kjer se srečajo strešne ploskve.

## En zid naenkrat

Izberite streho (na etaži nad zidovi kliknite znotraj njenega obrisa) in poglejte pod **Vsak zid** v **Lastnostih**. Kazalec na vrstico označi ta zid na tlorisu.

- **Nagnjeno**: zid ima nad seboj poševno strešno ploskev. Vpišite njen lastni naklon poleg, na primer `12/12` za strme konce na strehi `6/12`.
- **Zabatni konec**: streha se konča v navpičnem koncu nad tem zidom, zid je zapolnjen do strehe, streha pa gre čez njega za **previs zabata**.
- **Brez (poravnano)**: streha se ustavi ob tem zidu brez previsa in brez zabatnega zidu, na primer za streho ob višjem zidu.

Seznam **Konci** na vrhu nastavi vse zidove hkrati; **Nastavi po zidu** se prikaže, ko se zidovi ne ujemajo več s prednastavitvijo.

## Spremenite streho, ki ste jo že postavili

Izberite streho in **Lastnosti** prikažejo iste nastavitve kot orodje Streha: **Naklon**, **Previs**, **Previs zabata**, **Višina venca**, **Višina čelne deske**, **Zaprt napušč** in **Debelina**. Vsaka sprememba se takoj pokaže na tlorisu in v 3D, z istimi preverbami kot pri orodju (naklon 80 stopinj ali več je zavrnjen, prav tako nastavitev, ki ne more narediti strehe). Vpišite vrednost in pritisnite {{key:Enter}} ali pustite polje.

Vsaka sprememba je en korak razveljavitve. Več zaporednih sprememb istega polja (vpišete `6/12`, nato `7/12`, nato `8/12`) se združi v en korak, tako da en {{key:Ctrl}}+{{key:Z}} vrne, kar je streha imela pred nizom; sprememba drugega polja začne nov korak.

## Višina venca, čelna deska in podboj

- **Višina venca** je mesto, kjer se strešne ploskve srečajo z zunanjostjo zidov, merjeno od tal etaže. Pustite prazno, da streha sedi na vrhu zidov; vpišite večjo vrednost za dvignjeno peto.
- **Višina čelne deske** je deska ob napušču in navzgor po zabatnih robovih. Vpišite `0`, če je ni.
- **Zaprt napušč** postavi vodoravni podboj pod vsak napušč, od zidu do zadnje strani čelne deske.

Vsaka ploskev se pri višini venca stika s svojim zidom, zato zidovi z različnimi nakloni ohranijo eno črto venca, njihovi napušči pa se končajo na različnih višinah, kakor bi bili postavljeni pri gradnji.

## Narišite strešno ploskev

1. Na etaži, na zidovih katere sedi ploskev, odprite {{ui:Zgradba}} in izberite {{ui:Strešna ploskev}}.
2. Vpišite **Naklon** in, če ni na vrhu zidov, **Višino napušča**.
3. Kliknite oglišča. Prva stran, ki jo narišete, je napušč; ploskev se dviga od nje proti preostanku oblike.
4. Kliknite prvo oglišče znova, dvakrat kliknite ali pritisnite {{key:Enter}}, da končate. {{key:Esc}} zavrže oglišča.

Strešna ploskev ne sledi zidovom. Izberite jo na etaži nad njo (kliknite znotraj nje), da spremenite njen naklon, višino napušča ali debelino, ali pritisnite {{key:Delete}}, da jo odstranite.

## Dodajte frčado

1. Prikažite etažo, na kateri je streha.
2. Odprite {{ui:Zgradba}} in izberite {{ui:Frčada}}.
3. V vrstici možnosti izberite **Vrsta frčade** (**Zabatna** ali **Enokapna**) in nastavite **Širina**, **Sprednji zid** (višino sprednjega zidu od vrha strehe do napušča frčade), **Naklon** in **Previs**.
4. Kliknite na strešno površino, kjer gre sredina sprednje strani frčade.

BimCraft zgradi sprednji zid, dve bočni steni in streho frčade ter jo zavrti nazaj, dokler se ne sreča s streho. Zabatna frčada ima dve ploskvi, ki se srečata v slemenu. Enokapna frčada ima eno ploskev, ki mora biti manj strma od strehe. Streha pod frčado je izrezana. Frčada sledi strehi, ko se zidovi premaknejo.

Izberite jo, da v **Lastnostih** spremenite vrsto, širino, sprednji zid, naklon ali previs. {{key:Delete}} jo odstrani in ponovno zapre streho. Mora se prilegati ene strešne površine, stran od čopov, dolin in slemena; frčade sprejmejo samo strehe, narejene z orodjem {{ui:Streha}}, ne strešnih ploskev, narisanih ročno. Še ni izdelano: okno v sprednji strani frčade in frčade na ročno narisanih strešnih ploskvah.

## Kaj se shrani

Strehe so strehe IFC iz ene strešne plošče na ploskev, zabatnih zidov, enega elementa čelne deske in enega pokrova podboja. Streha nosi dolžine svojih sleme, čopov, dolin, napuščev in zabatnih robov ter svoje površine za predizmere.

:::tip
Razveljavitev vzame nazaj katerokoli spremembo strehe v enem koraku, vključno s prednastavitvijo, ki spremeni vsak zid.
:::
