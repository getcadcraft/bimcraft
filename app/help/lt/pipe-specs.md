---
title: Vamzdžių specifikacijos, vožtuvai, dempferiai ir gamintojų šeimos
summary: Sukurkite savo vamzdžių specifikacijas (dydžių lentelės su medžiaga, sujungimu ir šiurkštumu), saugomas modelio faile; įdėkite į trasas vožtuvus, filtrą ir dempferius; įkelkite gamintojo vožtuvo ar įrangos modelį kaip šeimą su jungiamaisiais prievadais.
keywords: vamzdžio specifikacija, vamzdžių specifikacijos, vamzdynų specifikacija, vamzdynų klasė, pasirinktinis vamzdis, dydžių lentelė, vamzdelis, higieninis vamzdelis, nerūdijantis plienas, žiniaraštis, išorinis skersmuo, sienelės storis, vidinis skersmuo, šiurkštumas, slėgio klasė, csv, json, importas, eksportas, skaičiuoklė, standartas, bpe, din, en 10357, en 10255, vožtuvas, vožtuvai, drosselinė sklendė, balansavimo vožtuvas, reguliavimo vožtuvas, filtras, dempferis, tūrio dempferis, gaisro dempferis, oem, gamintojas, gamintojo modelis, šeima, šeimos, prievadai, jungtis, step, obj, gltf, ifc, radiatorius, konvektorius, skydelinis šildytuvas, oro apdorojimo įrenginys, difuzorius, grotelės
from: bc2f7c4e
---

## Ką darysite

Vamzdžius braižykite pagal savo specifikaciją, o ne pagal įmontuotas plieno, vario ir plastiko lenteles; trasose dėkite vožtuvus ir dempferius bei įdėkite gamintojo modelį su prievadais, prie kurių jungiasi vamzdžiai.

:::note
Braižymo ir koordinavimo priemonė. Vamzdžio specifikacija saugo skaičius, kuriuos įvedate ar įkeliate: kiekvieną lentelę patikrinkite pagal savo projekto standartą. Įmontuoti vožtuvai, filtrai ir dempferiai yra schematinės formos, kurių dydis nustatomas pagal trasą, o ne pagal gamintojo ar vožtuvų standarto ilgį.
:::

## Nustatykite vamzdžio specifikaciją

1. Įjunkite {{ui:Braižymas}}, atidarykite {{ui:Versija}} ir pasirinkite {{ui:Vamzdžių specifikacijos}}. Tas pats mygtukas yra ir vamzdžio įrankio juostoje.
2. Pasirinkite {{ui:Nauja}} arba pradėkite nuo failo, įklijavimo ar pradinės specifikacijos (žemiau).
3. Įveskite jos pavadinimą, standartą ar nuorodą, kuria ji vadovaujasi, medžiagą ir galo ar sujungimo tipą.
4. Įveskite po eilutę kiekvienam dydžiui: dydžio pavadinimą, išorinį skersmenį ir sienelę milimetrais. Jei turite vidinį skersmenį, o ne sienelę, įveskite vidinį skersmenį: kita reikšmė bus užpildyta. DN, slėgio klasė ir masė neprivalomi.
5. Neprivaloma: šiurkštumas milimetrais (slėgio nuostolių skaičiavimas jį naudoja), izoliacijos storis, nuo kurio pradeda naujos trasos, alkūnės spindulys kaip išorinio skersmens koeficientas, ar specifikacija turi trišakius ir reduktorius, bei jos spalva 3D.
6. Pažymėkite paslaugas, kurių naujos trasos turi prasidėti šioje specifikacijoje, pavyzdžiui, vėsintas vanduo.
7. Pasirinkite {{ui:Įrašyti modelyje}}.

Specifikacijos įrašomos modelio faile. Ją turi visi, kurie atidaro failą, o {{ui:Anuliuoti}} atšaukia pakeitimą.

Specifikacijos arba vieno jos dydžio negalima ištrinti, kol trasa pagal ją nubraižyta. Pakeitus dydžio skaičius, perbraižomos to dydžio trasos.

## Panaudokite specifikaciją kitame modelyje

- {{ui:Eksportuoti .json}} įrašo pasirinktą specifikaciją kaip mažą failą; {{ui:Eksportuoti visas}} įrašo visas modelio specifikacijas. {{ui:Importuoti failą}} jas vėl nuskaito.
- {{ui:Eksportuoti .csv}} įrašo dydžių lentelę skaičiuoklei. {{ui:Importuoti failą}} taip pat nuskaito `.csv`.
- {{ui:Įklijuoti eilutes}} priima lentelę, nukopijuotą iš skaičiuoklės. Pirmoje eilutėje nurodomi stulpeliai: `Size`, `OD` ir `Wall` (arba `ID`), o neprivalomai `DN`, `Pressure`, `Weight`. Po vieną eilutę kiekvienam dydžiui. Skaičiai laikomi milimetrais, nebent pasirinksite coliais arba langelis nurodys savo vienetą (`0.065 in`).

## Pradinės specifikacijos

{{ui:Pridėti pradinę specifikaciją}} prideda vieną iš šių specifikacijų į jūsų modelį kaip redaguojamą kopiją:

| Pradinė specifikacija | Dydžiai |
|---|---|
| ASME BPE vamzdelis | nuo 1/4" iki 6" |
| EN 10357 A serijos vamzdelis (DIN 11850 2 eilutė) | nuo DN10 iki DN200 |
| EN 10255 plieninis vamzdis, vidutinė serija | nuo DN15 iki DN150 |
| EN 10255 plieninis vamzdis, sunkioji serija | nuo DN15 iki DN125 |

Šios lentelės yra išorinių skersmenų ir sienelių, kuriuos du ar daugiau paskelbtų tiekėjų puslapių nurodo tam standartui ir su jais sutinka. Jos nėra paimtos iš pačių standartų. Dydžiai, kuriuos nurodo tik vienas puslapis, praleisti. Kiekviena pradinė specifikacija rodo savo šaltinio puslapius ir pažymėta „patikrinkite pagal savo projekto standartą“. Šiurkštumas, slėgio klasė ar masė nepateikiami.

## Braižykite trasą pagal specifikaciją

1. Pasirinkite {{ui:Vamzdis}}. Paslauga, kurią pažymėjote specifikacijoje, prasideda joje. Bet kuriai kitai trasai medžiagų sąraše pasirinkite specifikaciją: specifikacijos nurodomos po įmontuotų medžiagų kaip „Specifikacija: pavadinimas“.
2. Dydžių sąraše dabar yra tik tos specifikacijos dydžiai. Pasirinkite vieną ir nubraižykite trasą.

Norėdami vėliau perkelti trasą į specifikaciją, ją pažymėkite ir pakeiskite **Medžiaga** skiltyje Savybės. Jos dydis tampa artimiausiu specifikacijos dydžiu pagal išorinį skersmenį.

IFC faile vamzdis turi specifikacijos pavadinimą, standartą, medžiagą, sujungimą ir matmenis (`CadCraft_PipeSpec` ir `Pset_PipeSegmentTypeCommon`, ant vamzdžio ir jo tipo).

Dydžių ir slėgio nuostolių skaičiavimai naudoja specifikacijos vidinį skersmenį. Kai specifikacijoje yra šiurkštumas, trasos trintis skaičiuojama su juo (Darcy-Weisbach); be jo naudojama įprasta skaičiavimo numatytoji reikšmė.

## Vožtuvai, filtras ir dempferiai

1. Pasirinkite {{ui:Vožtuvas}} ir juostoje pasirinkite rūšį: šiebtuvas, rutulinis, drosselinė sklendė, ventilis, atbulinis, balansavimo ar reguliavimo vožtuvas arba filtras vamzdžiams; tūrio dempferis ar gaisro dempferis orkliams.
2. Spustelėkite trasą, kur jis turi būti. Trasa perkertama aplink jį, o abi pusės lieka sujungtos. Jis įgauna trasos dydį ir juda kartu su ja.

Trasos savybėse išvardytas kiekvienas jų su {{ui:Pašalinti}}; trasa vėl susijungia.

Slėgio nuostolių skaičiavimas įskaičiuoja jungiamųjų detalių nuostolį tik šiebtuvams, rutuliniams, ventiliams ir atbulinams vožtuvams. Kitos rūšys, dempferiai ir gamintojų šeimos ten nuostolio nepridės: įskaitykite juos savo patikroje. Jie įskaičiuojami lentelėje **Jungiamosios detalės ir vožtuvai**, kiekių skaičiavime ir įrašomi į IFC kaip vožtuvai, filtras ir dempferiai su dviem sujungtais prievadais.

## Gamintojo modelis kaip šeima

1. Atidarykite {{ui:Versija}} ir pasirinkite {{ui:Šeimos}}, tada {{ui:Importuoti modelį}}. Skaitomi IFC, STEP, OBJ, STL, glTF ir bibliotekos elementų failai. OBJ ir STL atveju pirmiausia nustatykite failo vienetus ir aukščio ašį.
2. Prievadų dialoge įveskite pavadinimą, gamintoją ir modelio numerį.
3. Pasirinkite, ar ji eina **Ant trasos** (vožtuvas, filtras ar dempferis), ar yra **Įranga**, ir kaip ji įrašoma.
4. Nustatykite jos prievadus. Kiekvienas turi pavadinimą, vamzdį ar orklį, paslaugą, dydį milimetrais (vamzdžio išorinį skersmenį), nominalų dydį pagal jūsų specifikaciją, galo tipą, padėtį ir kryptį, į kurią jis nukreiptas. {{ui:Ant paviršiaus}} padeda prievadą modelio dėžės paviršiaus centre. Mažame vaizde iš viršaus matomi prievadai.
5. Pasirinkite {{ui:Įrašyti šeimą į modelį}}.

Šeima, kuri eina į trasą, turi tiksliai du prievadus, nukreiptus vienas nuo kito vienoje linijoje. Pasirinkite ją vožtuvo įrankio sąraše ir spustelėkite trasą: ji įdedama savo ilgiu, o vamzdžiai prisijungia prie jos prievadų.

Šeima niekada netempiama. Jei jos prievadai neatitinka trasos dydžio, apie tai pranešama ją įdedant, o {{ui:Patikrinti jungtis}} ją išvardija.

Įrangos šeima įdedama su {{ui:Įranga}}, rūšis **Gamintojo šeima**. Vamzdžiai ir orkliai prisitraukia prie jos prievadų.

{{ui:Atsisiųsti kaip Bibliotekos elementą}} įrašo šeimą su prievadais kaip failą, kurį galite pateikti bibliotekai.

## Radiatoriai ir konvektoriai

{{ui:Įranga}} taip pat turi **Radiatorius** ir **Konvektorius / skydelinis šildytuvas**: bendrinius korpusus su tiekimo ir grąžos jungtimis šildymo vandeniui. Žr. [MEP įranga su prievadais](topic:mep-equipment).
