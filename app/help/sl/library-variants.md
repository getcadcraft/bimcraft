---
title: Postavitev in zamenjava elementa knjižnice z različicami
summary: Nekateri elementi knjižnice so na voljo v več velikostih ali možnostih. Izberite različico, preden ga postavite, preverite, katera različica je postavljeni element, ga z enim klikom zamenjajte z drugo različico in ohranite, ko se element posodobi.
keywords: različica, različice, velikosti, možnosti, konfiguracija, knjižnica, librarycraft, postavi, zamenjaj, konfigurator, družina, tip, posodobitev, priključki
from: c05f0af3
---

## Kaj boste naredili

Postavite element knjižnice v velikosti ali možnosti, ki jo potrebujete, in si pozneje premislite, ne da bi ga znova postavili. Element z različicami je en element v knjižnici (eno ime, ena licenca, ena različica) s tabelo različic, v katerih je na voljo: na primer montažna plošča v velikostih Majhna, Srednja in Velika, ali ista plošča brez lukenj.

## Izberite različico in jo postavite

1. Odprite zavihek {{ui:Knjižnica}} in kliknite kartico elementa.
2. Pod imenom izbira {{ui:Različica}} našteje vsako različico z njeno velikostjo. Privzeta različica elementa je izbrana najprej.
3. Izberite eno. Tloris, velikost in vrstica 3D telesa sledijo vaši izbiri.
4. Kliknite {{ui:Vstavi v tloris}} (ali {{ui:Vstavi v model}} v 3D pogledu) in ga postavite kot vsak element: glejte [Vstavljanje opreme in pohištva iz knjižnice](topic:place-from-library).

Postavljeni element je poimenovan po elementu in različici, na primer *Montažna plošča — Velika*, da ga razpredelnica {{ui:Oprema}} in drevo ločita. Vsaka različica je svoj tip IFC: postavitev iste različice dvakrat deli en tip, druga različica dobi svojega.

## Preverite, katera različica je postavljeni element

Izberite element. V {{ui:Lastnosti}} ima polje **Element knjižnice** vrstico **Različica**. IFC to hrani v `CadCraft_LibraryItem`: `Variant` (id različice), `VariantName` in `VariantValues` (vrednosti možnosti, kot besedilo), da jih lahko drugi programi preberejo.

## Zamenjajte z drugo različico

1. Izberite postavljeni element in kliknite {{ui:Zamenjaj element …}} v polju **Element knjižnice**. Odpre se zavihek {{ui:Knjižnica}}.
2. Na vrhu **Druge različice elementa** *element* našteje vsako različico z njeno velikostjo. Postavljena je označena in je ni mogoče izbrati.
3. Kliknite {{ui:Zamenjaj z …}} pri različici, ki jo želite.

Element ohrani svoj položaj, zasuk, etažo, številko elementa, količino in opombe; njegov tip, oblika in podatki se spremenijo v drugo različico. {{key:Mod+Z}} vrne prvo. Še vedno lahko izberete katerikoli drug element s seznama spodaj, kot prej: glejte [Zamenjava postavljenega elementa in posodobitev elementov iz knjižnice](topic:swap-and-update-library-items).

## Kopiranje, lepljenje in posodobitve

- Kopija postavljene različice je ista različica: v tem modelu in v drugem modelu, odprtem v istem zavihku brskalnika, prek {{ui:Kopiraj}} in {{ui:Prilepi}}.
- **Posodobitve** ohranijo različico: če novejša različica elementa še vedno ima to različico, postavitev postane ta različica nove različice. Če je nova različica nima več, postavitev vzame privzeto različico elementa.

## Dobro je vedeti

- Samo nekateri elementi knjižnice imajo različice. Kartice tega ne povedo; izbiro {{ui:Različica}} vidite, ko eno odprete.
- Element lahko na različico našteje **priključke** (točke povezave za cevi in kanale). Zavihek Knjižnica prikaže, koliko jih ima različica. Ko element postavite z zavihka Knjižnica, se še **ne** zapišejo v IFC.
- Različica brez 3D telesa se postavi z nadomestno škatlo, kot vsak 2D simbol.
- Velikosti v izbiri so v mm, kot jih zapiše knjižnica.
