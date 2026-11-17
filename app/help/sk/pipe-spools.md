---
title: Oceľové potrubie, montážne celky a listy montážnych celkov
summary: Rozrežte úsek oceľového potrubia so zvarom na tupo na montážne celky najviac do zvolenej dĺžky a na zvary na stavbe, ktoré umiestnite, očíslujte ich a stiahnite list montážneho celku pre každý z nich (3D pohľad, dĺžky rezov, tvarovky, zvary, kusovník) ako PDF a CSV; vzduchotechnické potrubia dostanú zoznam rezov rovných kusov.
keywords: montážny celok, montážne celky, list montážneho celku, izometria, výroba, prefabrikácia, zvar na stavbe, dielenský zvar, zvar na tupo, dĺžka rezu, zoznam rezov, kusovník, bom, oceľové potrubie, schedule 40, číslo vedenia, zoznam rezov VZT potrubia, kusy vzduchotechnického potrubia
from: 539f51de
---

## Čo urobíte

Premeňte úsek oceľového potrubia na kusy, ktoré dielňa zvára a montér osadí: montážne celky nie dlhšie než zvolená dĺžka, rozdelené tam, kde umiestnite zvary na stavbe, každý s vlastným listom.

Na montážne celky sa rozrezáva iba **oceľové potrubie so zvarom na tupo** (rozmery rúrok podľa ASME B36.10M, kolená s dlhým polomerom podľa ASME B16.9). Spoje z medi, PVC a PEX nie sú zvary na tupo, takže ich úseky nemajú montážne celky.

## Rozrez úseku na montážne celky

1. Vyberte oceľový úsek potrubia. Vo {{ui:Vlastnosti}} zaškrtnite **Rozdeliť na montážne celky**.
2. **Najdlhší montážny celok**: najväčšia dĺžka po osi trasy, ktorú môže mať jeden montážny celok (na začiatok 6 m, asi 20 ft).
3. **Číslo vedenia**: časť každého čísla montážneho celku. Nový rozdelený úsek dostane najbližšie voľné číslo svojho systému.

Montážne celky sú očíslované pozdĺž úseku od jeho prvého bodu: `CHW-12-S01`, `CHW-12-S02` … (systém, číslo vedenia, montážny celok). Montážny celok rastie po častiach; časť, ktorá by ho urobila príliš dlhým, začína ďalší. Priama dĺžka dlhšia než montážny celok sa rozreže tam, kde je montážny celok plný.

## Umiestnenie zvarov na stavbe

1. Otvorte {{ui:Zostava}} a vyberte {{ui:Zvar na stavbe}}.
2. Kliknite na rozdelené potrubie tam, kde má zvar na stavbe byť. V priamej dĺžke sa potrubie na tom mieste preruší; vnútri tvarovky alebo ventilu sa zvar presunie k bližšiemu spoju.

Vo {{ui:Vlastnosti}} sú uvedené zvary na stavbe úseku, každý s tlačidlom {{ui:Odstrániť}}. Každá zmena je jedným krokom {{ui:Späť}}.

## Listy montážnych celkov

Vo {{ui:Vlastnosti}} rozdeleného úseku:

- {{ui:Listy montážnych celkov (PDF)}}: jedna strana na montážny celok. Vľavo montážny celok v izometrickom pohľade 30°: jeho priame dĺžky očíslované, dielenské zvary ako bodky, zvary na stavbe označené FW a sever pôdorysu. Vpravo číslo montážneho celku, rozmer, schedule a dĺžka, potom jeho **dĺžky rezov**, **tvarovky**, **zvary** (dielenský zvar na tupo v každom spoji vnútri montážneho celku, zvar na stavbe tam, kde nadväzuje na ďalší montážny celok) a jeho **kusovník** s hmotnosťou potrubia (hmotnosť s hladkými koncami podľa ASME B36.10M).
- {{ui:Zoznam montážnych celkov (CSV)}}: to isté, blok na každý montážny celok.

:::note
Dĺžky rezov sú od konca ku koncu podľa výkresu: nič sa neodpočíta za koreňovú medzeru ani prídavok na zvar. Kolená sú podľa B16.9 s dlhým polomerom; T-kusy, redukcie a ventily sú všeobecné, dimenzované podľa potrubia, nie podľa B16.9 ani výrobcu, a list to uvádza. Hmotnosti tvaroviek nie sú uvedené. Pomôcka pre návrh a koordináciu, dimenzovaná inžinierom.
:::

## V súbore IFC

Každá časť rozdeleného úseku nesie **CadCraft_Spool** s jeho SpoolId, úsekom, číslom montážneho celku v úseku a miestom, kde začína a končí pozdĺž úseku. Úsek si ponecháva svoje pravidlá (najdlhší montážny celok, zvary na stavbe, číslo vedenia) vo vlastnej sade, takže sa montážne celky po opätovnom otvorení súboru vrátia rovnaké.

## Vzduchotechnické potrubia: zoznam rezov

Otvorte {{ui:Zostava}} a kliknite na {{ui:Zoznam rezov VZT potrubia}}: CSV rovných kusov vzduchotechnického potrubia podľa systému, tvaru a rozmeru. Každá rovná dĺžka sa rozreže na kusy s **Dĺžka kusu** z lišty {{ui:VZT potrubie}} (na začiatok 1500 mm, asi 5 ft), a zvyšok. Iba dĺžky: bez spojov, hrúbok plechu a spojok.
