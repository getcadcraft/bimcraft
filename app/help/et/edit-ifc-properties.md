---
title: IFC omaduste muutmine ja muudetud koopia salvestamine
summary: Muuda elemendi nime, silti, kirjeldust või omaduse väärtust, võta tagasi ja laadi alla uus IFC-fail, samal ajal kui originaal jääb samaks.
keywords: muuda, muutmine, omadused, parameetrid, silt, nimi, ümber nimetamine, märgis, salvesta nimega, allalaadimine, tagasivõtmine, koopia, ifc, kirjutamine
from: f8035d62
---

## Mida teete

Paranda andmeid IFC-mudelis: nimeta element ümber, paranda selle silt või muuda omaduse väärtust. Seejärel salvesta uus IFC-fail oma muudatustega. Avatud faili ei puututa kunagi.

## Mida saad muuta

| Väli | Muudetav |
|---|---|
| Nimi, Objekti tüüp, Silt, Kirjeldus | Jah |
| Üksikud omaduse väärtused (tekst, arvud, Jah/Ei) | Jah |
| Tüübi omadused (hulgad, mis on märgitud „(tüüp)“) | Jah, ja muudatus kehtib iga selle tüübi elemendi kohta |
| Tüüp, GlobalId, Rida | Ei |
| Kogused (pikkused, pindalad, mahud, arvud) | Ei |
| Loendid, valikud ja muud mitmeosalised väärtused | Ei |
| Geomeetria, asend, elementide lisamine või kustutamine | Ei |

## Sammud

1. Ava IFC-mudel ja klõpsa elemendil, mida soovid muuta.
2. Paneelis {{ui:Omadused}} klõpsa väärtusel, mida soovid muuta. See muutub tekstikastiks. Tühi väärtus näitab *tühi*.
3. Sisesta uus väärtus.
4. Vajuta {{key:Enter}} või klõpsa mujale, et see säilitada. Vajuta {{key:Esc}}, et tühistada.
5. Vaata väärtust: see on nüüd paksus kirjas ja selle kõrval on sinine riba, mis tähistab muudetud väärtust.
6. Vaata vasakul jaotist {{ui:Muudatused}}: muudatus on loetletud kujul *element*: *väli*, vanast väärtusest uueks väärtuseks.
7. Korda teiste väärtuste või teiste elementide puhul.
8. Klõpsa {{ui:Salvesta IFC-na}} (see näitab ootel muudatuste arvu, näiteks „Salvesta IFC-na (3)“) või vajuta {{key:Mod+S}}.
9. Leia oma allalaadimiste kaustast „*originaalnimi* (edited).ifc“.

## Mida peaksid nägema

Olekurida ütleb „Salvestatud *nimi* (edited).ifc *n* muudatusega (… baiti). Sinu originaalfail on muutmata.“ Loend {{ui:Muudatused}} tühjeneb järgmise ringi jaoks.

## Väärtuste liigid

- **Tekst:** kõik, mida kirjutad, säilib nii nagu on. Nime, Objekti tüübi, Sildi või Kirjelduse tühjendamine eemaldab väärtuse.
- **Arvud:** sisesta lihtne arv, näiteks `2.4` või `1200`, faili enda ühikutes. Ühikumärke ei lisata. Muu puhul näitab „Kasuta arvu.“
- **Täisarvud** (loendid, täisarvud): „Kasuta täisarvu.“, kui sisestad komakoha.
- **Jah/Ei:** väärtus muutub menüüks Jah ja Ei.

Iga väärtus säilitab oma IFC-tüübi, nii et arv jääb arvuks ja teised programmid loevad seda õigesti.

## Tagasivõtmine

1. Klõpsa jaotises {{ui:Muudatused}} {{ui:Võta tagasi}} või vajuta {{key:Mod+Z}}, kui sa ei kirjuta väljale.
2. Korda, et võtta rohkem tagasi. Iga tagasivõtmine eemaldab uusima muudatuse.

Salvestamise taha tagasi ei saa minna: pärast salvestamist loend algab uuesti. Salvestatud fail säilitab kõik.

## Miks sinu muudatus mõjutab ainult ühte elementi

Eksportijad säästavad ruumi, jagades andmeid. Üks omadusehulk võib olla jagatud kahekümne ukse vahel ning üks väärtus („Tuleohutus: 60 min“) võib olla loetletud üheksakümnes hulgas. Kui BimCraft muudaks lihtsalt jagatud väärtust, muutuks ka iga element, mis seda jagab.

Seetõttu BimCraft kopeerib enne kirjutamist:

- Kui omadusehulk, mida muudad, on jagatud teiste elementidega, saab sinu element oma koopia hulgast ja muutub ainult koopia.
- Kui väärtus on jagatud teiste hulkadega, saab sinu hulk oma koopia väärtusest.

Naabrid säilitavad oma vanad andmed. Seda nimetatakse *kopeeri-enne-kirjutamist* (copy-on-write). See lisab failile mõned väikesed kirjed, mida iga IFC-programm loeb tavaliselt.

**Tüübiomadused on tahtlik erand.** Hulk, mis on märgitud „(tüüp)“, kuulub elemendi tüübile ning IFC-s loeb iga selle tüübi element seda sealt. Selle muutmine muudab tüüpi, nii et iga selle tüübi element näitab uut väärtust. Loend {{ui:Muudatused}} märgib sellised muudatused märkega „(tüüp)“. Vaata [Tüübiomaduse muutmine kõigi tüübi elementide jaoks](topic:type-vs-instance).

## Hoiatused enne töö kaotamist

- Teise faili avamine, kui sul on salvestamata muudatusi, küsib „Sul on *n* salvestamata muudatust failis *fail*. Kas visata need ära?“ Klõpsa {{ui:Loobu}}, et jätkata töötamist, ja salvesta siis.
- Vahekaardi sulgemine või laadimine koos salvestamata muudatustega paneb brauseri küsima, kas lahkuda.

## Levinud vead

- **Ühikute sisestamine.** `2400 mm` on keelatud. Sisesta `2400`.
- **Tüübiomaduse muutmine, kui mõtlesid ühte elementi.** Vaata enne sisestamist märget „(tüüp)“. Kui soovid, et üks element erineks, muuda eksemplari omadust või selle silti või nime.
- **Originaalfaili muutumise ootamine.** Salvestamine laadib alati alla uue faili. Asenda originaal ise, kui seda soovid, ja hoia koopiat.
- **Vajutamine {{key:Mod+S}} ilma muudatusteta.** BimCraft salvestab ainult siis, kui on midagi salvestada; muidu võib avaneda brauseri oma „Salvesta leht“. Sulge see.
- **Kahekordne salvestamine ja kahe väikese faili oodatud.** Iga salvestus hoiab kõiki muudatusi alates mudeli avamisest.
- **Muudatuste oodatud tagasi projektifaili.** BimCraft kirjutab ainult IFC-d. Too muudetud IFC oma autoriprogrammi nii, nagu impordid mis tahes IFC-d.
