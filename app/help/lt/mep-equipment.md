---
title: MEP įranga su prievadais
summary: Statykite bendruosius oro tiekimo įrenginius, ventiliatorius, siurblius, katilus, vandens šildytuvus, galinius įrenginius, difuzorius, groteles ir talpas, kurių dydžius nustatote patys, kiekvieną su vamzdžių ir ortakių jungtimis, prie kurių prisijungia kitos linijos.
keywords: mep, įranga, oro tiekimo įrenginys, ahu, ventiliatorius, linijinis ventiliatorius, siurblys, katilas, vandens šildytuvas, galinis įrenginys, vav, difuzorius, grotelės, registras, talpa, prievadas, prievadai, jungtis, angos dydis, hvac, santechnika, mechaninė, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ką darysite

Pastatykite įrangą vamzdžių ir ortakių galuose. Kiekvienas gabalas yra bendra forma, kurios dydį nustatote patys, o jo jungtys yra **prievadai**: kur prie jo prisijungia vamzdis ar ortakis, kokia sistema, kuria kryptimi teka srautas ir koks dydis. Vamzdžiai ir ortakiai, nubrėžti nuo prievado, perima jo dydį ir sistemą bei lieka su juo susieti: žr. [Vamzdžių ir ortakių prijungimas prie įrangos](topic:mep-connections).

:::note
Tai projektavimo ir koordinavimo pagalbinė priemonė, dimensionuojama inžinieriaus. Įranga nėra gamintojo gaminys: be pajėgumų, svorių ar gamintojo jungčių dydžių. Kai reikia, į savo MEP programą įkelkite gamintojo modelį kaip IFC.
:::

## Pastatyti gabalą

1. Įjunkite {{ui:Braižymas}}, atverkite {{ui:Versija}} ir pasirinkite {{ui:Įranga}}.
2. Juostoje pasirinkite tipą ir įveskite jo dydžius. Kiekvienam tipui reikia savų:

| Tipas | Įvedate | Jo prievadai |
|---|---|---|
| Oro tiekimo įrenginys | ilgis, plotis, aukštis; tiekimo ir grąžinimo angos; ritės vamzdžio dydis ir sistema; kondensato dydis | tiekimo ortakis išeina, grąžinimo ortakis įeina, ritė įeina ir išeina, kondensato nuleidimas |
| Linijinis ventiliatorius | skersmuo, ilgis, sistema | ortakis įeina ir išeina |
| Siurblys | vamzdžio dydis, sistema | įėjimas ir išėjimas |
| Katilas | ilgis, plotis, aukštis, vamzdžio dydis, dujų dydis, dūmtraukio skersmuo | šildymo tiekimas išeina ir grąžinimas įeina, dujos įeina, dūmai išeina |
| Vandens šildytuvas | skersmuo, aukštis, vamzdžio dydis, dujos arba elektra | šaltas vanduo įeina, karštas vanduo išeina (ir dujos įeina bei dūmtraukis, kai kūrenama dujomis) |
| Galinis įrenginys | ilgis, plotis, aukštis, apvalus įvadas, išvado plotis ir aukštis | tiekiamas oras įeina ir išeina |
| Difuzorius | priekis, kaklelis, sistema | jo kaklelis (oras įeina) |
| Grotelės | priekio plotis ir aukštis, kaklelio plotis ir aukštis, sistema | jo kaklelis (oras išeina į grąžinimo ar išmetimo ortakį) |
| Talpa | skersmuo, aukštis, vamzdžio dydis, sistema | įvadas viršuje, išvadas arti apačios |
| Radiatorius | ilgis, aukštis, gylis, vamzdžio dydis, sistema | tėkmė įeina viršutiniame vieno galo kampe, grąžinimas išeina apatiniame kito galo kampe |
| Konvektorius / skydelinis šildytuvas | ilgis, aukštis, gylis, vamzdžio dydis, sistema | tėkmė įeina viename gale, grąžinimas išeina kitame |
| Gamintojo šeima | šeima (žr. [Vamzdžių specifikacijos, vožtuvai, sklendės ir gamintojų šeimos](topic:pipe-specs)) | prievadai, kuriuos suteikė jos šeima |

3. Nustatykite **Aukštį** – jo pagrindo aukštį virš lygio. Difuzoriaus ar grotelių aukštis yra jų priekis: įveskite lubų aukštį.
4. Jei norite, įveskite **Žymę** (`AHU-1`); kitas to paties tipo gabalas gaus kitą numerį.
5. Perkelkite žymeklį virš plano: jo kontūras ir prievadai seka paskui. Paspauskite {{key:R}}, kad pasuktumėte 90°. Spustelėkite, kur jis turi stovėti.

Vamzdžių dydžiai yra plieninių vamzdžių nominalūs dydžiai (ASME B36.10M). Vamzdis, nubrėžtas nuo siurblio kita medžiaga, perima tą patį nominalų dydį savo medžiagoje.

## Keisti ar pašalinti

Pasirinkite jį plane arba 3D vaizde. Savybės rodo visus jūsų įvestus dydžius, jo žymę, X, Y, aukštį ir pasukimą bei kiekvieną prievadą: jo dydį, sistemą, kuria kryptimi teka srautas ir ar kas nors prijungta. Kiekvienas pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis; linijos, fiksuotos prie jo prievadų, juda kartu. {{key:Delete}} pašalina jį; linijos, buvusios prie jo fiksuotos, lieka, o Jungčių patikra jas išvardija.

## IFC faile

Kiekvienas tipas išsaugomas kaip savo IFC klasė: IfcUnitaryEquipment (oro tiekimo įrenginys), IfcFan (ventiliatorius), IfcPump (siurblys), IfcBoiler (katilas; vandens šildytuvas yra IfcBoiler su vandens tipu ir objekto tipu „Water heater“), IfcAirTerminalBox (galinis įrenginys), IfcAirTerminal (difuzorius, grotelės) ir IfcTank (talpa), su tipu, bendru visiems to paties tipo gabalams, ir dydžiais. IFC2X3 failai gauna IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal ir IfcFlowStorageDevice su atitinkamais tipais. Kiekvienas prievadas yra IfcDistributionPort, padėtas ten, kur yra jungtis, nukreiptas į išorę, su savo srauto kryptimi ir sistema; kitos programos skaito, kuri linija prijungta prie kurio prievado. Gabalas prisijungia prie kiekvieno savo prievado sistemos ir turi visus bibliotekos elementų rinkinius, kuriuos turi kiekvienas įdėtas bibliotekos elementas.
