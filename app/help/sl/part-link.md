---
title: Pošljite element v PartCraft in ga vrnite
summary: Izberite oporo, konzolo, ograjo ali kos opreme, ga oblikujte kot del v PartCraftu skupaj z zgradbo okoli njega in sprejmite novo obliko nazaj v model.
keywords: partcraft, del, pošlji, povezava, element, opora, konzola, ograja, oprema, oblikovanje, krog, sprejmi, spremenjeno, povezave delov
from: 4ce2f449
---

## Kaj boste naredili

Oblikujte en element zgradbe kot del: pošljite ga v PartCraft, ga tam spremenite (izrežite, dodajte, izvrtajte, spremenite velikost) in novo obliko vrnite v model.

## Koraki

1. Izberite en element v modelu: splošni element, opremo, steber, nosilec, ograjo ali pohištvo.
2. Na orodni vrstici izberite {{ui:Povezave delov}} in nato {{ui:Pošlji v PartCraft}}. PartCraft se odpre na novem zavihku z elementom kot delom. Elementi v razdalji 3 m so ob njem narisani sivo, da ga lahko oblikujete na njegovem mestu. Tam jih ni mogoče spreminjati.
3. Spremenite del v PartCraftu. V PartCraftu izberite {{ui:Datoteka}} › {{ui:Izvozi}} › {{ui:Shrani nazaj v BimCraft}}. Shranite lahko, kolikorkrat želite.
4. V BimCraftu gumb {{ui:Povezave delov}} prikaže število, kartica pa navede element kot {{ui:Spremenjeno v PartCraftu}} z opisom spremembe velikosti in prostornine z besedami.
5. Izberite {{ui:Pokaži}}, da si ga ogledate, nato {{ui:Sprejmi}}, da elementu dodelite novo obliko, ali {{ui:Ohrani moje}}, da ostane takšen, kot je bil.

## Kaj morate videti

- Sprejem je en korak razveljavitve. Element ohrani svoj položaj, GlobalId, tip, material in lastnosti. Zamenja se samo njegovo telo.
- Element dobi nabor lastnosti {{ui:CadCraft_PartLink}} s povezavo, njenim stanjem in revizijo.
- {{ui:Pošlji znova}} znova odpre isti element v PartCraftu, na isti povezavi.

## Dobro je vedeti

- Stene, tla, strehe, vrata, okna, stopnišča, rampe in prostori so narisani z gradbenimi orodji iz obrisa in se po vsaki spremembi obnovijo. Telo iz druge aplikacije bi bilo prepisano, zato je takšen poskus zavrnjen z navedbo razloga.
- Oblika se vrne kot mreža (IFC tesselacija), ne kot značilnosti dela. Zgodovina dela ostane v PartCraftu.
- Če se je element v modelu spremenil, potem ko ste ga poslali, kartica to pove, preden sprejmete: sprejem zamenja te spremembe.
- Nič se ne naloži v strežnik. Obe aplikaciji sta strani enega spletnega mesta in elemente prenašata med seboj v tem brskalniku. Obe morata biti odprti v istem brskalniku.
- Element mora v PartCraftu skleniti v telo. Element z velikimi odprtinami na obliki je tam zavrnjen s številom odprtih robov.
- Za sprejem naj bo aktiven model, ki vsebuje element.
