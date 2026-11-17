---
title: Trikčių šalinimas
summary: Pranešimai, kuriuos rodo BimCraft, jų priežastys ir ką daryti, atidarant failus, aplankus, 3D modelius, brėžinius ir keitimus.
keywords: problema, klaida, neveikia, negalima atidaryti, nepavyko, neišsamus, sugadintas, lėtas, strigtis, tuščias, trūksta, pranešimas, pagalba
from: 1e5a79fc
---

Pranešimai rodomi būsenos eilutėje, ekrano apačioje, raudonai, kai kas nors nepavyko. Raskite žemiau pranešimą.

## Failų atidarymas

**"*name* is not an IFC, RVT, RFA, DWG or DXF file."**
**„*name* nėra IFC, RVT, RFA, DWG ar DXF failas.“**
BimCraft nepažino failo. Patikrinkite plėtinį ir ar failas nėra tuščias. PDF, paveikslėliai ir biuro failai neatidaromi.

**".ifczip is not supported yet. Save or export the model as a plain .ifc file."** (taip pat `.ifcxml` atveju)
**„.ifczip dar nepalaikomas. Įrašykite arba eksportuokite modelį kaip paprastą .ifc failą.“** (taip pat `.ifcxml` atveju)
Išskleiskite `.ifczip` (tai įprastas zip archyvas, kuriame yra `.ifc`) arba eksportuokite paprastą IFC.

**"… is a project file BimCraft does not read yet."**
**„… yra projekto failas, kurio BimCraft dar neskaito.“**
Tai `.pln`, `.pla`, `.tpl` ar `.bpn` failas. Eksportuokite iš jo IFC ar DWG ir atidarykite tą: žr. [Atidaryti .pln ir .pla projekto failus](topic:pln-project-files).

**"This IFC file could not be read."**
**„Šio IFC failo nepavyko perskaityti.“**
IFC failas sugadintas arba iš tikrųjų nėra IFC. Atidarykite jį teksto redaktoriuje: tikras IFC failas prasideda `ISO-10303-21;`. Eksportuokite jį iš naujo.

**"This file is incomplete: it is … MB, but its own index points to data at least … MB in. …"**
**„Šis failas neišsamus: jis yra … MB, bet jo paties rodyklė nurodo duomenis, esančius bent … MB gylyje. …“**
Projekto ar šeimos failas buvo nukirptas kopijuojant, įkeliant ar sinchronizuojant. Debesies disko failas, kuris yra „tik internete“, atrodo taip pat. Atskirai atidarytas failas vis tiek atsidaro, su šiuo pranešimu kortelės viršuje ir tekstu „Rodoma, kas atkurta; nukopijuokite originalą iš naujo, kad gautumėte visą modelį.“: kortelėje rodomos tik tos dalys, kurių kiekvienas baitas yra faile, o likusios išvardytos skiltyje **Nėra faile**. Padarykite failą pasiekiamą neprisijungus savo debesies diske arba nukopijuokite originalą iš naujo ir atidarykite dar kartą. Aplanke BimCraft vietoj to rodo naujausią pilną atsarginę kopiją.

**"… The file's own list of contents is in the missing part too, so nothing in it can be opened."**
**„… Paties failo turinio sąrašas taip pat yra trūkstamoje dalyje, todėl nieko jame negalima atidaryti.“**
Failas nukirstas taip anksti, kad net jo turinio sąrašo nėra. Iš šios kopijos nieko atkurti negalima. Nukopijuokite originalą iš naujo ir atidarykite dar kartą.

**"This compound file has no BasicFileInfo stream, so it is not a Revit file."**
**„Šiame sudėtiniame faile nėra BasicFileInfo srauto, todėl tai nėra Revit failas.“**
Tai kito tipo sudėtinis failas (senesni biuro dokumentai naudoja tą patį konteinerį). Patikrinkite, ar pasirinkote tinkamą failą.

**"Still working on the last one…"**
**„Vis dar dirbama su paskutiniuoju…“**
BimCraft vis dar užsiėmęs ankstesniu failu ar aplanku. Palaukite, kol būsenos eilutė baigs, tada bandykite dar kartą.

**The file chooser greys out my file.**
**Failų pasirinkimo langas išjungia mano failą.**
Pasirinkimo langas siūlo tik `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` ir `.dxf`. Vietoj to vilkite kitus failus į puslapį, o BimCraft pasakys, ar gali juos perskaityti.

## Aplankų atidarymas

**"This folder has more than 20,000 files. Pick a smaller folder, such as one project."**
**„Šiame aplanke daugiau nei 20 000 failų. Pasirinkite mažesnį aplanką, pavyzdžiui, vieno projekto.“**
Pasirinkote per aukštą aplanką, pavyzdžiui, visą diską. Pasirinkite vieno projekto aplanką.

**"The browser did not give access to *name*. Choose it again with Open a folder."**
**„Naršyklė nesuteikė prieigos prie *name*. Pasirinkite jį dar kartą su Atidaryti aplanką.“**
Spustelėjote {{ui:Reopen}} neseniai naudotame aplanke, o naršyklės leidimas buvo atmestas arba nebegalioja. Pasirinkite aplanką dar kartą arba įvilkite jį.

**The browser says it will "upload" files.**
**Naršyklė sako, kad failus „įkels“.**
Tai naršyklės pačios formuluotė, reiškianti failų perdavimą puslapiui. BimCraft jų niekur nesiunčia. Kad išvengtumėte klausimo, įvilkite aplanką.

**Nothing happens on a phone or tablet.**
**Telefone ar planšetėje nieko nevyksta.**
Daugelis mobiliųjų naršyklių negali pasirinkti aplankų. Atidarykite atskirus failus arba naudokite kompiuterį.

## IFC variklis įsikrauna pirmą kartą

**The status line stays on "Starting the IFC engine…", or shows an error such as "Failed to fetch".**
**Būsenos eilutė lieka ties „Paleidžiamas IFC variklis…“ arba rodo klaidą, pavyzdžiui, „Failed to fetch“.**
IFC variklio nepavyko atsisiųsti. Galbūt esate neprisijungę, o ugniasienė ar turinio blokavimo priemonė jį blokuoja.

:::offline
Esate neprisijungę. Jei programos juostos mygtukas nerodo {{ui:Paruošta neprisijungus}}, IFC variklis šioje naršyklėje niekada nebuvo įrašytas. Prisijunkite iš naujo, atidarykite failą dar kartą, tada spustelėkite {{ui:Įrašyti neprisijungus}}, kad kitą kartą veiktų neprisijungus. Žr. [Prisijungus ir neprisijungus](topic:online-offline).
:::

:::online
Perkraukite puslapį ir bandykite dar kartą. Darbo tinkle paprašykite IT komandos leisti svetainės `.wasm` failus.
:::

## Įrašymas neprisijungus

**The button says {{ui:Could not save}}.**
**Mygtukas rodo {{ui:Nepavyko įrašyti}}.**
Kai kurie failai neatsisiųsti, dažniausiai dėl nutrūkusio ryšio. Patikrinkite ryšį ir spustelėkite mygtuką dar kartą. Ankstesnė kopija neprisijungus išlieka, kol bus baigta nauja.

**The button says {{ui:Offline not available}}.**
**Mygtukas rodo {{ui:Naudojimas neprisijungus negalimas}}.**
Šis langas negali saugoti kopijos neprisijungus, pavyzdžiui, privataus lango ar valdomo darbo kompiuterio. Žr. [Darbas neprisijungus](common:offline).

**The button stays on "Saving *n* of *m*" for a while.**
**Mygtukas kurį laiką lieka ties „Įrašoma *n* iš *m*“.**
BimCraft kopija yra apie 11 MB, didžioji dalis – IFC variklis. Palikite skirtuką atidarytą, kol jis rodys {{ui:Paruošta neprisijungus}}.

**BimCraft opened offline but looks out of date.**
**BimCraft atsidarė neprisijungus, bet atrodo pasenęs.**
Jūsų įrašyta kopija yra iš ankstesnio apsilankymo. Kai esate prisijungę, spustelėkite {{ui:Paruošta neprisijungus}} ir pasirinkite {{ui:Įrašyti dar kartą (gauti naujausią versiją)}}.

## 3D vaizdas

**The model is not where I expected, or it is tiny.**
**Modelis ne ten, kur tikėjausi, arba jis labai mažas.**
Paspauskite {{key:F}} arba spustelėkite {{ui:Tilpti}}. Funkcija {{ui:Tilpti}} visada apima visą modelį, įskaitant aukštus, kuriuos atžymėjote, ir atsitiktinius elementus toli nuo pastato, todėl pastatas gali atrodyti mažas. Tada priartinkite.

**Clicking does not pick anything.**
**Spustelėjimas nieko nepasirenka.**
Spustelėdami laikykite pelę nejudinkite: nedidelis vilkimas sukasi. Elementų atžymėtuose aukštuose pasirinkti negalima. Kai įjungta {{ui:Spaces}}, permatomos erdvės pasirenkamos anksčiau nei tai, kas jose yra.

**The {{ui:Edges}} button is greyed out: "Edges are off for very large models".**
**Mygtukas {{ui:Edges}} išjungtas: „Edges are off for very large models“.**
Modelyje yra daugiau nei 1.5 million trikampių. Kraštinės išjungtos, kad būtų taupoma atmintis.

**The tab turns slow, white, or shows the browser's crash page.**
**Skirtukas lėtėja, tampa baltas arba rodo naršyklės strigimo puslapį.**
Modelis per didelis atminčiai, kurią naršyklė skiria skirtukui. Uždarykite kitus skirtukus ir perkraukite. Eksportuokite mažesnį IFC: vieną pastatą, vieną discipliną ar mažiau aukštų. Žr. [Naršyklės, įrenginiai ir atmintis](topic:platforms).

**The 3D view stays blank.**
**3D vaizdas lieka tuščias.**
WebGL gali būti išjungtas arba užblokuotas. Naršyklės nustatymuose įjunkite aparatinį spartinimą (ar grafikos spartinimą) ir paleiskite naršyklę iš naujo.

## IFC redagavimas

**"Use a number."**
**„Naudokite skaičių.“**
Reikšmė skaitinė. Įveskite paprastą skaičių be vienetų, pavyzdžiui, `2.4`.

**"Use a whole number."**
**„Naudokite sveikąjį skaičių.“**
Reikšmė yra kiekis ar sveikasis skaičius. Pašalinkite dešimtainę dalį.

**"Only single-value properties can be edited."**
**„Redaguoti galima tik vienos reikšmės savybes.“**
Sąrašai, išvardijimai ir kiekiai tik skaitomi.

**{{key:Mod+S}} opens the browser's "Save page" window.**
**{{key:Mod+S}} atidaro naršyklės langą „Įrašyti puslapį“.**
Neįrašytų pakeitimų nėra, todėl BimCraft šį klavišą paliko naršyklei. Uždarykite langą.

**{{key:Mod+Z}} does nothing.**
**{{key:Mod+Z}} nieko nedaro.**
Veikia tik tada, kai yra neįrašytų pakeitimų ir nerašote laukelyje. Po įrašymo nieko anuliuoti nebelieka.

**The {{ui:Changes}} list still shows edits after I discarded them and opened a drawing or a folder.**
**Sąraše {{ui:Pakeitimai}} vis dar rodomi redagavimai, nors jų atsisakėte ir atidarėte brėžinį ar aplanką.**
Kai į klausimą „Atmesti juos?“ atsakote Gerai ir tada atidarote ką nors kita nei IFC modelį, seni redagavimai išlieka atmintyje, ir {{ui:Įrašyti kaip IFC}} vis tiek juos įrašytų. Kad tikrai pradėtumėte iš naujo, atidarykite originalų IFC dar kartą arba perkraukite puslapį.

**My edit changed more elements than I picked.**
**Mano redagavimas pakeitė daugiau elementų, nei pasirinkau.**
Pakeitėte savybę rinkinyje, pažymėtame „(tipas)“. Tipo savybės taikomos kiekvienam to tipo elementui. Spustelėkite {{ui:Anuliuoti}}. Žr. [Pakeisti tipo savybę kiekvienam to tipo elementui](topic:type-vs-instance).

## Brėžiniai

**"*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet (…)."**
**„*name* nepavyko perskaityti. Jis gali būti sugadintas arba įrašytas formatu, kurio skaitytuvas dar neapdoroja (…).“**
Įrašykite brėžinį iš programos, kuri jį sukūrė, kaip senesnį DWG (2018 ar ankstesnį) arba kaip DXF, ir bandykite dar kartą.

**"This drawing has nothing to show."** or **"*name* is an empty drawing: it holds no lines, text or blocks."**
**„Šiame brėžinyje nėra ko rodyti.“** arba **„*name* yra tuščias brėžinys: jame nėra linijų, teksto ar blokų.“**
Brėžinys tuščias arba jame yra tik tai, ko BimCraft dar nebraižo (žr. dešinėje **Dar nenubraižyta**).

**"This drawing is very large; only part of it is shown."**
**„Šis brėžinys labai didelis; rodoma tik jo dalis.“**
BimCraft nustojo braižyti, kad išliktų jautrus. Išjunkite nereikalingus sluoksnius arba atidarykite reikalingus lapus iš mažesnio brėžinio.

**Parts of a sheet are missing.**
**Lapo dalių trūksta.**
Gali trūkti susietų brėžinių: žiūrėkite dešinėje skiltyje **Susieti brėžiniai**. Žr. [Raskite susietus brėžinius ir paveikslėlius](topic:dwg-linked-files). Sluoksniai taip pat gali būti išjungti: spustelėkite {{ui:All on}}.

**A picture shows as an empty frame.**
**Paveikslėlis rodomas kaip tuščias rėmelis.**
Jo failas nerastas arba tai TIFF („TIFF cannot be shown in a browser“). Pridėkite PNG ar JPEG kopiją su {{ui:Pridėti paveikslėlius…}}.

**Scrolling on my trackpad zooms instead of moving the drawing.**
**Slinkimas jutiklinėje dalyje keičia mastelį, o ne perkelia brėžinį.**
Taip brėžiniai veikia BimCraft. Spustelėkite ir vilkite, kad slinktumėte.

## Vis dar nepavyksta

Perskaitykite [Kas dar nepadaryta](topic:not-built-yet): ieškomo dalyko gali nebūti šioje versijoje.
