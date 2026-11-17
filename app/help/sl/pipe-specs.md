---
title: Specifikacije cevi, ventili, zračne lopute in družine proizvajalcev
summary: Nastavite lastne specifikacije cevi (tabele dimenzij z materialom, spojem in hrapavostjo), shranjene v datoteki modela; na vode postavite ventile, filter in zračne lopute; iz modela proizvajalca ventila ali opreme uvozite kot družino s priključnimi mesti.
keywords: specifikacija cevi, specifikacije cevi, specifikacija cevovoda, razred cevovoda, cev po meri, tabela dimenzij, cevka, higienska cevka, nerjavno jeklo, razpredelnica, zunanji premer, debelina stene, notranji premer, hrapavost, tlačni razred, csv, json, uvoz, izvoz, preglednica, standard, bpe, din, en 10357, en 10255, ventil, ventili, metuljični ventil, uravnoteženjski ventil, regulacijski ventil, filter, zračna loputa, regulacijska loputa, požarna loputa, oem, proizvajalec, izdelovalec, družina, družine, priključna mesta, priključek, step, obj, gltf, ifc, radiator, konvektor, panelni grelnik, zračni agregat, difuzor, rešetka
from: bc2f7c4e
---

## Kaj boste naredili

Cev boste risali v lastni specifikaciji namesto v vgrajenih tabelah za jeklo, baker in plastiko; na vode boste postavili ventile in zračne lopute ter postavili model proizvajalca s priključnimi mesti, na katera se cevi priključijo.

:::note
Pomožno orodje za načrtovanje in usklajevanje. Specifikacija cevi vsebuje številke, ki jih vnesete ali uvozite: vsako tabelo preverite glede na svoj projektni standard. Vgrajeni ventili, filtri in zračne lopute so shematične oblike, dimenzionirane glede na vod, ne po dolžini proizvajalca ali standarda za ventile.
:::

## Nastavitev specifikacije cevi

1. Vklopite {{ui:Risanje}}, odprite {{ui:Zgradba}} in izberite {{ui:Specifikacije cevi}}. Isti gumb je na vrstici orodja Cev.
2. Izberite {{ui:Novo}} ali začnite iz datoteke, prilepka ali začetne specifikacije (spodaj).
3. Vpišite njeno ime, standard ali referenco, ki ji sledi, material ter vrsto konca ali spoja.
4. Vpišite eno vrstico za vsako dimenzijo: ime dimenzije, zunanji premer in debelino stene v milimetrih. Če imate notranji premer namesto debeline stene, vpišite notranji premer: drugi podatek se izpolni samodejno. DN, tlačni razred in teža so neobvezni.
5. Neobvezno: hrapavost v milimetrih (izračun padca tlaka jo uporablja), debelino izolacije, s katero se začnejo novi vodi, polmer kolena kot faktor zunanjega premera, ali ima specifikacija T-kose in redukcije, ter lastno barvo v 3D.
6. Označite storitve, katerih novi vodi naj se začnejo v tej specifikaciji, na primer hladna voda.
7. Izberite {{ui:Shrani v model}}.

Specifikacije so shranjene v datoteki modela. Vsak, ki odpre datoteko, jih ima, in {{ui:Razveljavi}} prekliče spremembo.

Specifikacije ali ene od njenih dimenzij ni mogoče izbrisati, dokler je v njej narisan vod. Sprememba številk dimenzije ponovno nariše vode v tej dimenziji.

## Ponovna uporaba specifikacije v drugem modelu

- {{ui:Izvozi .json}} shrani izbrano specifikacijo kot majhno datoteko; {{ui:Izvozi vse}} shrani vse specifikacije modela. {{ui:Uvozi datoteko}} jih znova prebere.
- {{ui:Izvozi .csv}} shrani tabelo dimenzij za preglednico. {{ui:Uvozi datoteko}} prebere tudi `.csv`.
- {{ui:Prilepi vrstice}} sprejme tabelo, kopirano iz preglednice. Prva vrstica poimenuje stolpce: `Size`, `OD` in `Wall` (ali `ID`), neobvezno `DN`, `Pressure`, `Weight`. Ena vrstica za vsako dimenzijo. Številke so v milimetrih, razen če izberete palce ali celica zapiše svojo enoto (`0.065 in`).

## Začetne specifikacije

{{ui:Dodaj začetno specifikacijo}} doda enega od teh v vaš model kot kopijo, ki jo lahko urejate:

| Začetna specifikacija | Dimenzije |
|---|---|
| ASME BPE cevka | 1/4" do 6" |
| EN 10357 cevka, serija A (DIN 11850, vrsta 2) | DN10 do DN200 |
| EN 10255 jeklena cevka, srednja serija | DN15 do DN150 |
| EN 10255 jeklena cevka, težka serija | DN15 do DN125 |

Te tabele so zunanji premeri in debeline sten, ki jih za standard navajata dve ali več objavljenih strani dobaviteljev in se v njih ujemajo. Niso vzete iz samih standardov. Dimenzije, ki jih navaja le ena stran, so izpuščene. Vsaka začetna specifikacija prikazuje svoje vire in je označena „preverite glede na svoj projektni standard“. Hrapavost, tlačni razred ali teža niso navedeni.

## Narišite vod v specifikaciji

1. Izberite {{ui:Cev}}. Storitev, ki ste jo označili v specifikaciji, se začne v njej. Za vse druge vode izberite specifikacijo v seznamu materialov: specifikacije so navedene za vgrajenimi materiali kot „Spec: ime“.
2. Seznam dimenzij zdaj vsebuje samo dimenzije te specifikacije. Izberite eno in narišite vod.

Če želite pozneje premakniti vod v specifikacijo, ga izberite in v Lastnostih spremenite **Material**. Njegova dimenzija postane najbližja dimenzija specifikacije glede na zunanji premer.

V datoteki IFC cev nosi ime specifikacije, standard, material, spoj in dimenzije (`CadCraft_PipeSpec` in `Pset_PipeSegmentTypeCommon`, na cevi in na njenem tipu).

Izračuna dimenzioniranja in padca tlaka berejo notranji premer specifikacije. Če ima specifikacija hrapavost, se trenje voda izračuna z njo (Darcy-Weisbach); brez nje se uporabi običajna privzeta vrednost izračuna.

## Ventili, filter in zračne lopute

1. Izberite {{ui:Ventil}} in v vrstici izberite vrsto: zasunski, kroglični, metuljični, sedežni, protipovratni, uravnoteženjski ali regulacijski ventil ali filter za cevi; regulacijsko loputo ali požarno loputo za kanale.
2. Kliknite na vod, kjer naj bo. Vod se prereže okoli njega, obe strani ostaneta povezani. Ventil dobi dimenzijo voda in se premika z vodom.

Lastnosti voda naštevajo vsakega z gumbom {{ui:Odstrani}}; vod se znova zaključi.

Izračun padca tlaka upošteva izgubo na fitingu samo za zasunske, kroglične, sedežne in protipovratne ventile. Druge vrste, lopute in družine proizvajalcev tam ne dodajo izgube: upoštevajte jih v lastnem preverjanju. Štejejo se v razpredelnici **Fitingi in ventili** ter v predizmerah, v IFC pa so zapisani kot ventili, filter (filter) in zračne lopute z dvema povezanima priključkoma.

## Model proizvajalca kot družina

1. Odprite {{ui:Zgradba}} in izberite {{ui:Družine}}, nato {{ui:Uvozi model}}. Berejo se datoteke IFC, STEP, OBJ, STL, glTF in elementi knjižnice. Pri OBJ in STL najprej nastavite enote datoteke in os navzgor.
2. V pogovornem oknu priključkov vpišite ime, proizvajalca in številko modela.
3. Izberite, ali gre **Na vod** (ventil, filter ali loputa) ali je **Oprema**, in kako se zapiše.
4. Dodajte mu priključna mesta. Vsako ima ime, cev ali kanal, medij, dimenzijo v milimetrih (pri cevi zunanji premer), nazivno dimenzijo, kot jo navaja vaša specifikacija, vrsto konca, položaj in smer, v katero gleda. {{ui:Na ploskvi}} postavi priključno mesto v središče ploskve škatle modela. Majhen pogled od zgoraj prikazuje priključna mesta.
5. Izberite {{ui:Shrani družino v model}}.

Družina, ki gre na vod, potrebuje natanko dve priključni mesti, ki gledata vsako stran, na eni črti. Izberite jo na seznamu orodja Ventil in kliknite na vod: postavi se na svojo dolžino, cevi pa se priključijo na njeni priključni mesti.

Družine ni nikoli raztegnjene. Če njena priključna mesta niso dimenzije voda, boste ob postavitvi obveščeni, {{ui:Preveri povezave}} pa jo navede.

Družina opreme se postavi z {{ui:Oprema}}, vrsta **Družina proizvajalca**. Cevi in kanali se pripnejo na njena priključna mesta.

{{ui:Prenesi kot element knjižnice}} shrani družino s priključnimi mesti kot datoteko, ki jo lahko pošljete v knjižnico.

## Radiatorji in konvektorji

{{ui:Oprema}} ima tudi **Radiator** in **Konvektor / panelni grelnik**: splošna telesa s pretočnim in povratnim priključkom za ogrevalno vodo. Glejte [Oprema MEP s priključki](topic:mep-equipment).
