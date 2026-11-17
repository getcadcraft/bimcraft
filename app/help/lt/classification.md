---
title: Klasifikacijos kodai (Uniclass, OmniClass, UniFormat)
summary: Suteikite kiekvienam elementui ir tipui klasifikacijos kodą, pasirinkite, kurias sistemas naudoja projektas, ieškokite programa pateiktose Uniclass lentelėse, įkelkite savo biuro licencijuotas lenteles ir rodykite kodus žiniaraščiuose. Kodai įrašomi į IFC failą kitai programinei įrangai.
keywords: klasifikacija, klasifikuoti, kodas, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, lentelė, elemento kodas, tipo kodas, numatytasis kodas, IfcClassification, IfcClassificationReference, cobie, žiniaraščio stulpelis, csv, licencija, license
from: 222b94cd
---

## Ką darysite

Suteikite klasifikacijos kodą sienoms, grindims, stogams, durims, langams ir bet kam kitam modelyje, iki trijose sistemose vienu metu: Uniclass, OmniClass ir UniFormat. Kiti disciplinų ir programinės įrangos sprendimai remiasi kodu, o ne pavadinimu, todėl kodai įrašomi IFC faile kaip klasifikacijos nuorodos, kurias skaito bet kuri BIM programa.

## Suteikti elementui kodą

1. Pasirinkite elementą (ar kelis) ir atidarykite **Savybės**. Atidarykite skyrių {{ui:Klasifikacija}}.
2. Įveskite kodą jo sistemos lauke ir paspauskite Enter. Įkėlus kodų sąrašą, įveskite kodo dalį arba kelis žodžius („stiklinė siena“) ir pasirinkite iš atitikmenų: kodo pavadinimas užpildomas jūsų vietoje.
3. {{ui:Taikoma}} nurodo, kur eina kodas: **Šis elementas** arba **Jo tipas (kiekvienas to tipo elementas)**. Kodas sienos tipe galioja kiekvienai to tipo sienai, įskaitant tas, kurias nubrėšite vėliau.
4. {{ui:Išvalyti}} pašalina kodą.

Po kiekvienu kodu skyrius nurodo jo kilmę: nustatytas šiam elementui, paimtas iš jo tipo arba projekto numatytasis jo klasei. Paties elemento kodas visada nugali tipo kodą, o tipo kodas nugali numatytąjį. Pasirinkus kelis elementus, laukas su užrašu „varies“ reiškia, kad jie neturi bendro kodo; įvedus vieną, jis suteikiamas visiems. Kiekvienas pakeitimas yra vienas anuliavimo žingsnis.

Kodą visada galima įvesti, nepriklausomai nuo to, ar sąrašas įkeltas. Jei jis neatrodo kaip tos sistemos kodas arba nėra įkeltame sąraše, užuomina tai nurodo, o kodas išsaugomas taip, kaip įvedėte.

## Pasirinkti projekto sistemas

Modelio juostoje atidarykite **Duomenys** ir pasirinkite {{ui:Klasifikacija}} (arba {{ui:Projekto klasifikacija…}} skiltyje Savybės).

- Pažymėkite sistemas, kurias naudoja šis projektas. Savybės tada rodo tik jas.
- **Uniclass**: Elementų / funkcijų (EF), Sistemų (Ss) ir Produktų (Pr) lentelės pateikiamos su programa. Jos © NBS, licencijuotos pagal Creative Commons Attribution-NoDerivatives 4.0, ir perduodamos nepakeistos. Dialogas rodo kiekvienos lentelės leidimą ir dieną, kada ji nuskaityta. Tai nėra naujausios lentelės: leidėjas kas ketvirtį skelbia naujas savo svetainėje.
- **OmniClass** ir **UniFormat**: su programa kodų sąrašas nepateikiamas, nes jų leidėjas neleidžia lentelių perduoti be licencijos. Įveskite bet kurį kodą arba įkelkite savo biuro licencijuotą lentelę.
- {{ui:Įkelti lentelę (CSV)…}} nuskaito jūsų biuro lentelę iš CSV failo su kodo stulpeliu ir pavadinimo stulpeliu (antraštės eilutė, pavadinta Code, Number arba Identifier ir Title, Name arba Description, randama automatiškai; be jos naudojami pirmi du stulpeliai). Lentelė lieka šioje naršyklėje ir niekada nededama į projekto failą. Faile išsaugomi tik jūsų priskirti kodai. Naujesnę Uniclass lentelę galite įkelti tuo pačiu būdu.
- {{ui:Nustatyti elementams numatytąjį kodą pagal jų klasę}} suteikia kiekvienai sienai, grindims, stogui, durims, langams, laiptams, nuolydžio takams, kolonoms, sijoms ir baldų gabalui pradinį Uniclass kodą iš Elementų / funkcijų lentelės, kai jis neturi savo. Vėliau nubrėžti elementai taip pat jį gauna.
- {{ui:Rodyti kodus kaip stulpelius žiniaraščiuose}} prideda po vieną stulpelį kiekvienai sistemai žiniaraščiuose Durys, Langai, Sienos pagal tipą ir Patalpos bei jų CSV. Eilutė su keliais elementais rodo „varies“, kai jų kodai skiriasi.

## Verta žinoti

- Numatytieji kodai yra CadCraft pradinis pasirinkimas, ne leidėjo, ir jų nėra patikrinęs praktikas. Patikrinkite juos pagal savo projekto standartą.
- Faile numatytasis kodas yra tikra klasifikacija, pažymėta ryšio pavadinimu „CadCraft default“, ir jis pašalinamas, kai elementas ar jo tipas gauna savo kodą.
- Kodai, kuriuos jau turi importuotas failas, nuskaitomi ir rodomi, nepriklausomai nuo to, kaip kita programa rašė sistemos pavadinimą. Kitų sistemų kodai (biuro savi) išvardijami ir paliekami nepakeisti.
- Kodai nuskaitomi iš naujo atidarius failą čia arba kitoje programoje. Jie taip pat perkeliami į IFC5 alfa (IFCX) eksportą, kai įjungta laboratorinė parinktis, išskyrus kodą, nustatytą stogui.
- Dar neįgyvendinta: medis lentelei naršyti pagal lygius, kodai aukštams ir patalpoms kaip projekto numatytieji bei kodo tikrinimas pagal faile nurodytą leidimą.
