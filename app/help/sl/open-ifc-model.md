---
title: Odprite model IFC in si oglejte 3D
summary: Odprite datoteko IFC, vrtite, pomikajte in povečujte pogled ter uporabite Prilagodi, Zgoraj, Spredaj in Bok, da se orientirate.
keywords: ifc, 3d, vrtenje, pomik, povečava, prilagodi, pogled od zgoraj, pogled od spredaj, pogled z boka, krmarjenje, kocka pogleda, kamera
from: 68b460dd
---

## Kaj boste naredili

Odprite model IFC, se premikajte po njem v 3D in pojdite na standardne poglede. Približno pet minut.

Potrebujete datoteko `.ifc`. Večina programov za BIM jo izvozi; v Revitu je to **Datoteka > Izvozi > IFC**. Glejte [Projektna datoteka v 3D prek IFC](topic:rvt-to-ifc).

## Koraki

1. Kliknite {{ui:Izberi datoteko}} (ali območje za spuščanje zgoraj levo).
2. Izberite datoteko `.ifc` in potrdite.
3. Počakajte, da vrstica stanja konča. Najprej pokaže „Zaganjanje motorja IFC …“, nato „Branje modela …“ in „Gradnja geometrije: … od … elementov“.
4. Oglejte si model: odpre se v tričetrtinskem pogledu, prilagojen zaslonu.
5. Kliknite {{ui:Zgoraj}} v orodni vrstici nad modelom, da pogledate naravnost navzdol.
6. Kliknite {{ui:Spredaj}}, da pogledate spredaj, nato {{ui:Bok}}, da pogledate z boka.
7. Kliknite {{ui:Prilagodi}} ali pritisnite {{key:F}}, da se vrnete na tričetrtinski pogled celotnega modela.

## Kaj naj bi videli

- Model na sredini s tankimi temnimi robovi za videz risbe.
- Plošča {{ui:Datoteka}} na levi: ime datoteke, velikost, shema IFC (na primer IFC2X3 ali IFC4), ime projekta, faza, program, iz katerega je bil izvožen, avtor, datum izvoza ter števila elementov in trikotnikov.
- Seznama {{ui:Etaže}} in {{ui:Elementi}} pod njo.
- Vrstica stanja: „Odprto *ime datoteke*: *n* elementov v *s* s“.

## Premikanje

:::mouse
| Za | Naredite to |
|---|---|
| Vrtenje | Povlecite z levo tipko |
| Pomik | Povlecite z desno tipko ali držite {{key:Shift}} (ali {{key:Mod}}) in povlecite z levo tipko |
| Povečava | Pomaknite kolesce ali povlecite s srednjo tipko |
| Oglejte si vse | Pritisnite {{key:F}} ali kliknite {{ui:Prilagodi}} |
:::

:::mac mouse
Na sledilni ploščici: povlecite z enim prstom, pritisnjenim, za vrtenje; držite {{key:Shift}} ali {{key:Mod}} in povlecite za pomik; pomaknite z dvema prstoma ali stisnite za povečavo. Klik z dvema prstoma je desni klik; z njim lahko povlečete za pomik, vendar je {{key:Shift}} in povleči lažje.
:::

:::touch
| Za | Naredite to |
|---|---|
| Vrtenje | Povlecite z enim prstom |
| Povečava | Stisnite z dvema prstoma |
| Pomik | Premaknite oba prsta skupaj |
| Oglejte si vse | Tapnite {{ui:Prilagodi}} |
:::

Vrtenje se vedno zasuka okoli točke v sredini modela. Pomik to točko premakne, zato je po dolgem pomiku vrtenje lahko izven središča: kliknite {{ui:Prilagodi}}, da ga ponastavite.

## Senčeno, robovi ali žični model

Trije majhni gumbi tik nad kocko pogleda določajo, kako je model narisan: {{ui:Osenčeno}}, {{ui:Osenčeno z robovi}} (privzeto) in {{ui:Žični model}}. So tudi ukazi (Pogled v menijih in v seznamu za prilagajanje), zato imajo lahko lastne tipke. {{ui:Tloris}}, {{ui:Razdeli}} in {{ui:3D}} so v vrstici {{ui:Pogled}} orodne vrstice.

## Pogoste napake

- **Pričakovanje poimenovanih pogledov.** BimCraft ima štiri fiksne poglede ({{ui:Prilagodi}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Bok}}), kocko pogleda v spodnjem desnem kotu in prosto vrtenje. Pogledov ne shranjuje.
- **Iskanje tlorisov in prerezov.** V tej izdaji ni 2D tlorisov ali prereznih škatel. Model prerežite z eno ravnino {{ui:Prerez}} ([Rez modela IFC z ravnino prereza](topic:section-plane)) ali izklopite etaže: [Prikaz in skrivanje etaž, prostorov in robov](topic:storeys-and-spaces).
- **Odpiranje projektne datoteke in pričakovanje 3D.** Projektna datoteka se odpre kot kartica datoteke. Najprej izvozite IFC.
- **Odpiranje `.ifczip`.** Razpakirajte ga ali izvozite navaden `.ifc`.
- **Zelo velik model upočasni zavihek ali ga zruši.** Glejte [Brskalniki, naprave in pomnilnik](topic:platforms).

## Naprej

[Izberite element in preberite njegove lastnosti](topic:inspect-element).
