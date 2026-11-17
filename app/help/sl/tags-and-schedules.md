---
title: Oznake elementov in razpredelnice po oznakah
summary: Določite lastne oznake (ime, tip, dovoljene vrednosti, razredi), označite veliko elementov naenkrat in naredite razpredelnice, katerih stolpci, filtri in skupine berejo oznake. Oznake so shranjene v IFC.
keywords: oznake, oznaka, označevanje, lastne lastnosti, parametri, skupni parametri, nabor lastnosti, pset, razpredelnica, filter, združi po, zaključek, požarna odpornost, množično urejanje, csv
from: 9cc7c90d
---

## Kaj boste naredili

Oznaka je vaša lastnost, na primer *Zaključek* ali *Požarna odpornost*. Enkrat jo določite za projekt, nastavite na veliko elementov naenkrat, vsaka razpredelnica v BimCraft pa jo lahko prebere: tu razpredelnica oznak, {{ui:Quantities}}, Iskanje, Barvanje po lastnosti in [Dokumenti iz modela](topic:documents-from-the-model).

## Koraki

1. Odprite model IFC ali začnite novo stavbo.
2. V levem podoknu, pod {{ui:Quantities}}, odprite {{ui:Tags}}.
3. Kliknite {{ui:Add a tag}}. Dajte ji ime, izberite njen tip, po želji naštejte dovoljene vrednosti (z vejicami) in razrede, za katere je (`IfcDoor`, `IfcWall` …). Kliknite {{ui:Add the tag}}.
4. Izberite elemente v modelu (Iskanje pomaga: izberete lahko naenkrat vsa vrata).
5. Pod {{ui:Tag the selection}} izberite ali vpišite vrednost za vsako oznako, ki jo želite nastaviti, ostale pustite, kakor so, in kliknite {{ui:Uporabi za … izbrane elemente}}.
6. Pod {{ui:Tag schedule}} označite stolpce, dodajte filtre, izberite {{ui:Group by}} in nato {{ui:Download CSV}}.

## Kaj boste videli

- Korak v seznamu sprememb za vsako shranjeno določitev in vsako označitev; {{ui:Undo}} ga povrne.
- Elementi razreda, za katerega oznaka ni namenjena, se izpustijo iz te oznake, vrstica stanja pa pove, koliko jih je.
- Razpredelnica oznak navede eno vrstico na element, združeno po polju, ki ste ga izbrali; kliknite prvo celico vrstice, da izberete ta element.
- {{ui:Quantities}} našteje oznake pod `CadCraft_Tags`, tako da lahko tam seštejete površine ali števila po oznaki.

## Tipi

Tipi so enaki seznamu družinskih parametrov: Dolžina (milimetri), Kot (stopinje), Število, Celo število, Da / Ne, Pero (1–16), Besedilo, Material in Polnilo. Vrednost, ki ne ustreza svojemu tipu ali ni ena izmed dovoljenih vrednosti, je zavrnjena s sporočilom, nič pa se ne spremeni.

## Dobro je vedeti

- Vse je navaden IFC, zato druge programe berejo vrednosti: določitve so v naboru lastnosti `CadCraft_TagDefs` na projektu, vrednosti pa v naboru lastnosti `CadCraft_Tags` pri vsakem elementu (ena lastnost za vsako oznako). Dolžine so zapisane v enoti dolžine datoteke.
- `IfcWall` v razredih oznake zajame tudi stene standardnega primera in elementirane stene.
- Preimenovanje oznake preimenuje njene vrednosti na vsakem elementu v istem koraku. Odstranitev oznake odstrani samo njeno določitev: vrednosti, ki so že nastavljene, ostanejo na elementih kot navadne lastnosti. Najprej jih počistite (izberite {{ui:Clear}}), če jih želite odstraniti.
- Oznake v risalnem programu CadCraft (atributi blokov) še niso izdelane.
