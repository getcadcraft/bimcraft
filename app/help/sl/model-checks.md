---
title: Preverjanje modela glede pogostih težav
summary: Poiščite elemente, ki nimajo potrebne lastnosti, GlobalId-je, uporabljene dvakrat, elemente brez etaže in kopije, zložene druga na drugo.
keywords: preveri, preverjanje modela, validacija, qa, kakovost, manjkajoča lastnost, zahtevano, podvojeno, globalid, guid, etaža, zloženo, prekrivanje
from: 4d835513
---

## Kaj boste naredili

Preglejte model, preden ga predate naprej: težave, ki kvarijo razpredelnice, količine in programsko opremo drugih.

## Koraki

1. Odprite model IFC.
2. Na levi plošči odprite {{ui:Preverjanja modela}}.
3. Pod {{ui:Zahtevane lastnosti}} je pravilo že nastavljeno (poljuben razred, Name). Spremenite njegov razred (ali {{ui:Kateri koli razred}}) in lastnost ali kliknite {{ui:Dodaj lastnost}} za drugo pravilo; x odstrani pravilo. Element ne izpolni pravila, če je lastnost manjkajoča ali prazna. Pravila ostanejo v tem brskalniku za vse modele.
4. Kliknite {{ui:Zaženi preverjanja}}.
5. Kliknite rezultat, da izberete te elemente in se približate nanje.

## Kaj morate videti

- **Manjka zahtevana lastnost**: vsako pravilo s elementi, ki zanj nimajo vrednosti.
- **GlobalId uporabljen dvakrat**: elementi, ki si delijo en GlobalId. Druga programska oprema jih obravnava kot en sam element.
- **Brez etaže**: elementi z obliko, ki je ne vsebuje nobena etaža.
- **Kopije druga na drugi**: elementi istega razreda in tipa z enako obliko na istem mestu, ki se v količinah štejejo dvakrat.

Vsaka vrstica v rezultatih je gumb: kliknite jo, da izberete te elemente in se nanje približate. Prikazanih je samo prvih 50 skupin vsakega preverjanja. Enake ugotovitve se pojavijo tudi v {{ui:Težave}}.

## Dobro je vedeti

- Preverjanja gledajo aktivni model, če je odprtih več. Glejte [Skupno si oglejte več modelov IFC](topic:several-models).
- Po urejanju ponovno zaženite preverjanja.
- V podoknu {{ui:Težave}} so dolžine, površine in prostornine v besedilu težave v enotah, izbranih v {{ui:Enote}} na orodni vrstici (vrata „800 mm“ se v čevljih in palcih prikažejo kot 2'-7 1/2"); če spremenite enoto, podokno besedilo prilagodi.

## Naslednje

- [Pregled modela: prostori, oznake, LOD, kolizije in vmesniki](topic:audit-the-model)
- [Poiščite elemente po razredu, imenu ali lastnosti](topic:find)
- [Izbriši, izreži, kopiraj in prilepi elemente](topic:copy-paste)
