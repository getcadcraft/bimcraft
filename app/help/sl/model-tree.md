---
title: Iskanje poti z drevesom modela
summary: Brskajte po modelu IFC po projektu, lokaciji, stavbi, etaži in prostoru, z elementi, razvrščenimi po vrsti; kljukice za prikaz in skrivanje, klik na vrstico izbere, dvojni klik približa.
keywords: drevo modela, drevo, struktura, prostorska struktura, brskalnik, pregled, krmar, etaža, nivo, tla, prostor, soba, skupina, razred, skrij, prikaži, izberi, povečaj
from: 69de4ab7
---

## Kaj boste naredili

Oglejte si, kako je model sestavljen, in pridite do katerega koli elementa, ne da bi ga iskali v 3D: stavbo, njene etaže, prostore na vsaki etaži in elemente v njih, razvrščene po vrsti (zidovi, vrata, plošče …).

## Koraki

1. Odprite model IFC. {{ui:Drevo modela}} na levi se odpre do etaž.
2. Kliknite puščico ob vrstici, da jo odprete ali zaprete. Etaža ima najprej svoje prostore, nato svoje elemente po vrsti s številom. Element iz delov, kot je stopnišče, ima svoje dele.
3. Odznačite polje vrstice, da skrijete vse v njej; označite ga, da spet prikažete. Polje s pomišljajem pomeni, da je prikazan samo del vsebine.
4. Kliknite ime vrstice, da izberete, kar predstavlja: en element ali vse elemente skupine, etaže ali prostora. {{key:Mod}}+klik jih doda izboru ali jih iz njega odstrani.
5. Kliknite gumb {{ui:i}} ob etaži, prostoru ali stavbi, da vidite njihove lastnosti.
6. Dvakrat kliknite vrstico, da jo približate.

## Kaj naj bi videli

- Ko v 3D pogledu izberete element, se drevo odpre do njega in ga označi.
- Skriti elementi so prečrtani. Polja drevesa in {{ui:Pokaži}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) delujejo skupaj: glejte [Skrivanje, izolacija in prosojnost elementov](topic:hide-and-isolate).
- Elementi, ki jih model ne postavi v nobeno etažo, so na koncu v skupini **Ni v prostorski strukturi**.
- Dolga skupina prikaže 200 vrstic naenkrat; za ostale kliknite **Pokaži več** pod njo.

## Tipke

Ko je ime vrstice v fokusu: {{key:Up}} in {{key:Down}} premikata, {{key:Right}} odpre, {{key:Left}} zapre ali gre gor, {{key:Space}} označi polje, {{key:Enter}} izbere.

## Pogoste napake

- **Polje etaže je označeno, a nič se ne prikaže.** Seznam {{ui:Etaže}} pod drevesom samodejno izklopi cele etaže: označite tudi tam.
- **Vrstica nič ne izbere.** Nekatere vrstice, na primer prazen prostor, nimajo elementov, ki bi jih bilo mogoče narisati; vrstica stanja to pove.

## Naprej

- [Brisanje, rezanje, kopiranje in lepljenje gradbenih elementov](topic:edit-elements)
- [Prikaz in skrivanje etaž, prostorov in robov](topic:storeys-and-spaces)
