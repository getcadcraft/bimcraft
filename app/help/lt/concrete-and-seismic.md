---
title: Betoninių elementų tikrinimas ir seisminių apkrovų sudarymas
summary: Nustatykite atidaryto modelio betoninių sijų ir kolonų armatūrą, patikrinkite pagal ACI 318-19, sudarykite ekvivalentines šonines jėgas pagal ASCE 7-22 standžiomis perdangomis ir matykite aukšto poslinkį. Pagalba inžinieriui tikrinti.
keywords: betonas, gelžbetonis, ACI 318, ACI 318-19, armatūra, sija, kolona, šlyties, kilpos, seisminis, žemės drebėjimas, ekvivalenti šoninė jėga, ELF, ASCE 7-22, poslinkis, aukšto poslinkis, perdangos, standi diafragma, aukšto svoris, panaudojimas, konstrukcinis, inžinierius, analizė
from: 2f342e72
---

Blokai {{ui:Betoniniai elementai}} ir {{ui:Seisminės apkrovos}} skirtuke {{ui:Analizė}} tikrina atidaryto IFC gelžbetonines sijas ir kolonas bei sudaro žemės drebėjimo šonines jėgas ant jo karkaso perdangų. Jie yra tie patys blokai kaip DetailCraft, paleidžiami po {{ui:Analizė}} skirtuko analizės ir įrašomi IFC kartu su kitais analizės nustatymais.

:::warning
Rezultatai yra **skirti inžinieriui tikrinti**: tai pagalba, kol kas nors jų neperžiūrėjo. Betono patikrinimai naudoja pirmos eilės jėgas (kolona karkase, kurį vadinate nesvyruojančiu, projektuojama pagal jos padidintą momentą), be svyravimo padidinimo, be sukimo projektavimo, be seisminio detalizavimo (ACI 18 skyrius) ir be kilpų detalizavimo. Seisminėse apkrovose nėra redundancijos koeficiento, vertikalaus seisminio poveikio, sukimo stiprinimo ir P-delta efektų. **Vėjo apkrovos nėra įdiegtos**: standarto vėjo skyriai nėra projekto nuorodų puslapiuose.
:::

## Ką skaito BimCraft

Analizė skaito modelio sijas, kolonas ir strypus su jų profiliais (žr. [Analizuoti konstrukcijos karkasą](topic:frame-analysis)). Blokas {{ui:Betoniniai elementai}} išvardija visus jų naudojamus pjūvius. Betoniniam pjūviui paspauskite {{ui:Nustatyti kaip betoną…}}: BimCraft paima stačiakampį iš profilio ploto ir standumo (plotį b ir gylį h, kuriuos vėliau galite pakeisti). Todėl pjūvis, kuris nėra artimas stačiakampiui (valcuotas plieninis profilis), duoda dydį, kurį reikia ištaisyti, arba paliekamas nepakeistas.

Pjūvis, nustatytas kaip betonas, ir bet kuris elementas, kurio medžiaga pavadinta betonu, analizuojamas kaip betonas: E = 4700 √f′c, 2400 kg/m³ ir pagal numatytuosius nustatymus su **įtrūkusiais pjūviais** (kolonos 0.70 Ig, sijos 0.35 Ig; ACI 318-19 lentelė 6.6.3.1.1(a)). Norėdami tai išjungti, pasirinkite {{ui:Bendrieji pjūviai}}. Be šių nustatymų modelis analizuojamas kaip anksčiau.

## Armatūra, kombinacijos, tikrinimas

Kiekvienam pjūviui nurodykite apsauginį sluoksnį, viršutinius, apatinius ir šoninius strypus (arba kolonos karkasą) bei kilpas, nustatykite f′c, fy, fyt, K ir svyravimas arba nesvyravimas. Apkrovų atvejams nurodykite jų tipą, paspauskite {{ui:Sudaryti derinius}} (ASCE 7 §5.3.1), tada {{ui:Tikrinti betoną}}: kiekvienas elementas gauna panaudojimo koeficientą, nudažytą modelyje. Elementai, viršijantys pajėgumą, ir aukšto poslinkis, viršijantis ribą, išvardijami {{ui:Problemos}} su savo punktu; spustelėkite vieną, kad pasirinktumėte elementą.

## Perdangos ir seisminės apkrovos

Bloke {{ui:Seisminės apkrovos}} {{ui:Rasti perdangas}} suranda lygius, kuriuose susitinka dvi ar daugiau sijų; kiekvienas tampa standžia diafragma. {{ui:Paimti svorius iš atvejų}} nuskaito kiekvienos perdangos seisminį svorį iš atvejų, kuriems nurodote koeficientą. Įveskite SDS, SD1, S1, R, Ie, Cd, TL, sistemą ir rizikos kategoriją, tada {{ui:Sudaryti seisminius atvejus}} (ASCE 7-22 12.8: periodas, pagrindo jėga, paskirstymas per perdangas, 5 % atsitiktinis sukimas). Aukštų jėgos ir poslinkio patikrinimas (12.12) rodomi po paleidimo. Tas pats periodas ir aukšto standumas maitina žemės drebėjimą [Paleisti potvynį, vėją ar žemės drebėjimą](topic:hazard-playback), kai kaip šaltinį pasirenkate analizės karkasą.

Betoninės perdangos ir sienos analizėje tampa plokštėmis, o blokas {{ui:Perdangos armavimas}} apskaičiuoja joms reikalingą plieną vienam metrui. Visos tikrinimo detalės yra DetailCraft to paties pavadinimo temoje.
