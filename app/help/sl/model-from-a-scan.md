---
title: Model iz skeniranja
summary: Kratek vodnik od laserskega skena do zidov: odprite oblak točk poleg nove stavbe, ga poravnajte z nivojem in zarišite njegove zidove na tloris.
keywords: skeniranje, laserski skener, oblak točk, dejansko stanje, obstoječa stavba, izmera, sledenje, skeniranje v BIM, model iz skeniranja, odsek, poravnava, pravokotno, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Kaj boste naredili

Narišite obstoječo stavbo iz njenega laserskega skena: zidovi tam, kjer jih kaže skeniranje, na pravem nivoju, pravokotno drug na drugega.

## Koraki

1. **Stavba, v kateri boste risali.** {{ui:Datoteka}} › {{ui:Nova stavba}}, s toliko etažami, kolikor jih ima stavba (etaže lahko dodate pozneje, glejte [Parcela, stavba na njej in njene etaže](topic:site-building-and-levels)). {{ui:Risanje}} se vklopi.
2. **Skeniranje.** {{ui:Pokaži}} › {{ui:Oblak točk}} in izberite datoteko (LAS, LAZ, E57, PLY, PCD, PTX ali XYZ: glejte [Prikaz oblaka točk poleg modela](topic:point-clouds)). Oblak se prikaže v 3D pogledu, tloris pa prikaže njegov **odsek**: skenirane točke 1200 mm (4 ft) nad nivojem, kot pike. To je višina, na kateri so zidovi, vrata in okna najbolje vidni.
3. **Poravnajte z nivojem.** Odprite meni {{ui:Skeniranje}} v vrstici modela in kliknite {{ui:Poravnaj njegova tla na ta nivo}}: oblak se premakne gor ali dol, dokler tla, ki jih je skeniral, ne ležijo na prikazanem nivoju. Preverite, ali odsek zdaj seka zidove.
4. **Pravokotno na stavbo.** {{ui:Skeniranje}} › {{ui:Zasukaj pravokotno na stavbo}} zasuka oblak tako, da zidovi v njegovem odseku potekajo vzdolž osi tlorisa, zato se zidovi, ki jih narišete s pridržano tipko {{key:Shift}}, poravnajo s skeniranjem. Vrti se okoli središča najdenih zidov, zato drevesa ali sosedov zid, ujet v odseku, ne odmakneta skeniranja. Najprej poravnajte tla: odsek nato seka zidove.
5. **Zarišite zidove.** Izberite {{ui:Zid}} in kliknite vzdolž pik: orodje lovi skenirane točke (oznaka lovljenja je majhen romb) in tudi zidove, ki ste jih že narisali. Zid se riše na svoji osrednji črti, zato kliknite na sredino obeh vrst pik, ki jo zid pušča; debelino vtipkajte tako, da najprej izberete vrsto zidu. Nato dodajte vrata in okna tam, kjer odsek kaže vrzeli.
6. **Naslednji nivo.** V seznamu nivojev tlorisa izberite nivo nad njim: odsek sledi višini reza nivoja. Tla znova poravnajte z ustreznim nivojem le, če tla skeniranja niso tam, kjer so vaši nivoji.

## Kaj naj bi videli

- Odsek se spremeni, ko menjate nivo, debelejši odsek ({{ui:Skeniranje}} › {{ui:Debelina odseka}}) pa pokaže več točk tam, kjer je skeniranje redko.
- {{ui:Skeniranje}} › {{ui:Razveljavi poravnavo}} vrne oblak na mesto, kjer je bil ob odprtju. Poravnava premakne oblak samo v pogledu: ni shranjena v datoteki IFC, zidovi, ki ste jih narisali, pa ostanejo na mestu. Poravnava gre z oblakom, ko spremenite {{ui:Postavi}} ali {{ui:Enote}} ali odprete drug model.
- {{ui:Skeniranje}} › {{ui:Pokaži odsek na tlorisu}} skrije ali pokaže pike.

:::tip
Veliki skeni: tloris riše do 60.000 točk odseka, 3D pogled pa nekaj milijonov točk celotnega oblaka, obe izbrani enakomerno po celotnem skenu, zato velika datoteka ostane hitra. Za sledenje v aplikaciji za risanje uporabite {{ui:Sledi v CadCraft}} v vrstici oblaka.
:::
