---
title: Iškirskite IFC modelį pjūvio plokštuma
summary: Pjaustykite 3D modelį iš viršaus, priekio ar šono arba palikite tik tai, kas yra pjūvio dėžėje ar kelių dėžių tūryje su pasvirusiais paviršiais, kad pamatytumėte vidų; perkelkite pjūvį vilkdami ar įvesdami, apverskite jį ir pasirinkite, ką rodo pjūvis.
keywords: pjūvis, pjūvio plokštuma, pjūvio dėžė, rankenėlės, vilkimas, paraštė, pasirinkimo dėžė, apkarpymas, pjaustymas, plano pjūvis, grindų planas, fasadas, viduje, interjeras, apversti, poslinkis, pjūvio tūris, laiptuotas pjūvis, L formos, pasvirimas, įstrižas pjūvis, papildoma plokštuma
from: 6315e71a
---

## Ką darysite

Pjaukite IFC modelį viena plokštuma, kad pamatytumėte jo vidų: iš viršaus – plano pjūviu, o iš priekio ar šono – pastato pjūviu.

## Žingsniai

1. Atidarykite IFC modelį. Žr. [Atidarykite IFC modelį ir apžiūrėkite jį 3D](topic:open-ifc-model).
2. Spustelėkite {{ui:Pjūvis}} įrankių juostoje arba paspauskite {{key:X}}. Modelis perpjaunamas per pusę aukščio, o po įrankių juosta atsiranda juosta.
3. Pasirinkite, iš kur pjauti: {{ui:Viršus}}, {{ui:Priekis}} arba {{ui:Iš šono}}. {{ui:Priekis}} ir {{ui:Iš šono}} taip pat pasuka vaizdą, kad žiūrėtumėte į pjūvį.
4. Perkelkite pjūvį: vilkite slankiklį **Poslinkis** arba įveskite atstumą metrais į langelį ir paspauskite {{key:Enter}}. Galite įvesti ir milimetrus, pavyzdžiui, `1200 mm`.
5. Spustelėkite {{ui:Apversti}}, kad paliktumėte kitą pjūvio pusę.
6. Spustelėkite elementą pjūvyje, kad pamatytumėte jo savybes.
7. Spustelėkite {{ui:Išjungta}}, spustelėkite {{ui:Pjūvis}} dar kartą arba paspauskite {{key:X}}, kad pašalintumėte pjūvį.

## Pjūvio dėžė

Spustelėkite {{ui:Dėžė}} toje pačioje juostoje, kad paliktumėte tik tai, kas yra dėžėje. Kiekviena iš {{ui:X}}, {{ui:Y}} ir {{ui:Z}} turi du slankiklius: kur dėžė prasideda ir kur baigiasi, metrais nuo modelio krašto. Reikšmės rodomos šalia jų.

- {{ui:Dėžė aplink pasirinkimą}} apgaubia pasirinktus elementus dėže ir priartina prie jų. Iš kiekvienos pusės palieka 300 mm; tai keičiama {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Vieta aplink pasirinkimą}}.
- Pasirinkus elementus, {{ui:Rodyti}} › {{ui:Pjūvio dėžė aplink pasirinkimą}} arba {{key:Shift+X}} daro tą patį vienu žingsniu, net kai pjūvis neįjungtas.
- **Rankenėlės** ant dėžės ją perkelia pele: vilkite kvadratą paviršiaus viduryje, kad perkeltumėte tą paviršių, kvadratą krašto viduryje, kad perkeltumėte du paviršius, kurie ten susiliečia, arba kampą, kad perkeltumėte tris. Slankikliai seka. {{ui:Viršus}} režime kampas perkelia dėžę plane, {{ui:Priekis}} ar {{ui:Iš šono}} režime – fasade.
- {{ui:Visas modelis}} vėl išplečia dėžę iki viso modelio.
- {{ui:Viršus}}, {{ui:Priekis}} arba {{ui:Iš šono}} grąžina į vieną plokštumą.

## Tūris iš kelių dėžių, pasvirę paviršiai ir papildomos plokštumos

Dėžė ne visada yra reikiama forma: laiptuotas pjūvis, L formos sparnas ar pjūvis palei sieną, kuri nėra statmena tinkleliui.

1. {{ui:Dėžė}} režime spustelėkite {{ui:Pridėti dėžę}}. Pjūvis dabar palieka tai, kas yra **bet kurioje** iš dėžių, todėl dvi dėžės sudaro laiptuotą ar L formos tūrį. Šalia jo esantis sąrašas nurodo, kurią dėžę keičia slankikliai ({{ui:Dėžė 1}}, {{ui:Dėžė 2}}…); {{ui:Pašalinti šią dėžę}} pašalina pasirinktą. Tūris turi iki 8 dėžių.
2. Atidarykite {{ui:Posvyris ir plokštumos}}, kad suformuotumėte pasirinktą dėžę:
   - Pasirinkite {{ui:Paviršius}} ir įveskite, kiek laipsnių jis pasvyra į kiekvieną pusę (iki 80). Paviršius sukasi apie savo vidurį; kiti paviršiai lieka ten, kur nustatė slankikliai. {{ui:Statmenai}} grąžina jį atgal.
   - {{ui:Pridėti plokštumą}} perkerta dėžę dar viena plokštuma. {{ui:Paviršiai}} yra kryptis, į kurią nukreiptas nukirstas šonas, laipsniais nuo X link Y; {{ui:Nuolydis}} yra tai, kiek ji pakyla aukštyn (0 – vertikali plokštuma, 90 – horizontali); {{ui:Poslinkis}} yra atstumas nuo plokštumos iki dėžės vidurio, metrais. × ją pašalina. Dėžė turi iki 6 papildomų plokštumų.
3. Kur tūris kerta kietus kūnus, pjūvio paviršiai užpildomi kaip anksčiau, taip pat ten, kur dvi dėžės susiliečia laiptuke.

:::tip
Jei kontūras išnyksta ir nieko nelieka, posvyriai ar plokštumos nepalieka nieko tos dėžės viduje; juosta tai nurodo. Pasvirkite paviršių atgal arba pakeiskite plokštumos poslinkį.
:::

## Pastatas pasuktas savo vietoje

Daugelis modelių pastatą pastato kampu failo ašims (tikrasis šiaurė, bendros koordinatės). Kai sienos eina kampu, naujas pjūvis pradedamas statmenai pastatui: {{ui:Priekis}}, {{ui:Iš šono}} ir dėžė eina palei savo sienas, o pjūvio juostoje įjungtas {{ui:Lygiagrečiai pastatui}}. Spustelėkite jį, kad grįžtumėte prie modelio ašių, ir dar kartą, kad grįžtumėte atgal (būsenos eilutė nurodo, kiek pastatas pasuktas). Su **{{ui:Parametrai}} › {{ui:BimCraft}} › Pastatas pasuktas savo vietoje › Kaip padėta vietoje** pjūviai ir vaizdai pradedami nuo modelio ašių. Žr. [Parametrai](topic:settings).

## Ką turėtumėte matyti

- **Viršus** palieka tai, kas yra po pjūviu, todėl žiūrite į kambarius iš viršaus. Poslinkis matuojamas aukštyn nuo modelio apačios.
- **Priekis** palieka tai, kas yra už pjūvio, matoma iš priekio; **Iš šono** palieka tai, kas yra už jo, matoma iš šono. Poslinkis matuojamas nuo modelio priekio ar šono.
- Plona spalvota linija rodo, kur yra plokštuma.
- Kur plokštuma kerta sieną, perdangą ar kitą kietą kūną, pjūvio paviršius užpildomas tamsia spalva, kaip nubraižytas pjūvis. {{ui:Užpildas}} juostoje tai išjungia ir įjungia.
- Vaizdo kubas apatiniame dešiniajame kampe pasuka modelį, kad pjūvį galėtumėte žiūrėti iš bet kurios pusės.
- Spustelėjimas pasirenka tai, ką matote: nupjauto negalima pasirinkti.

## Dažnos klaidos

- **Niekas nepasikeitė.** Pjūvis gali būti virš stogo ar už modelio ribų. Vilkite slankiklį arba įveskite mažesnį poslinkį.
- **Poslinkis grįžo atgal.** Atstumas už modelio ribų perkeliamas į jo galą, ir būsenos eilutė tai nurodo.
- **Problema rodo tik dalį mano tūrio.** BCF problema išsaugo vieną dėžę su jos pasvirusiais paviršiais ir plokštumomis: pirmąją tūrio dėžę. Būsenos eilutė tai nurodo, kai sukuriate problemą.
- **Pjūvis tuščias.** {{ui:Užpildas}} juostoje išjungtas: spustelėkite jį, kad užpildytumėte sienų, perdangų ir kitų kietų kūnų pjūvio paviršius.
- **Užpildytas pjūvis atrodo dėmėtas ar praleidžia gabalą.** Užpildymui reikia uždarų kietų kūnų; elementas, kurio forma faile nėra uždara (viena lakšto dalis, medžių lapija), paliekamas neužpildytas, o ne perdažomas. Elementas, sudarytas iš skirtingų spalvų dalių (rėmas ir jo stiklas), užpildomas, kai jo dalys susiglaudžia.
- **Kur pjūvio juosta?** Ji yra viršuje to 3D vaizdo, kurį pjauna: {{ui:Skaidyti}} režime – ant 3D pusės, {{ui:Planas}} vieno – po brėžinių juosta. Trumpame vaizde ji slenka.

## Toliau

- [Rodykite ir slėpkite aukštus, erdves ir kraštus](topic:storeys-and-spaces)
- [Žiūrėkite DWG ar DXF brėžinį 3D](topic:dwg-in-3d) — brėžiniai 3D turi tą pačią pjūvio plokštumą
