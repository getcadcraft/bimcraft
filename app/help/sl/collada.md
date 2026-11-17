---
title: Izvoz modela kot Collada ali za Google Earth
summary: Zapišite odprte modele IFC kot datoteko Collada (.dae) za Blender in druge 3D programe ali kot paket za Google Earth (.kmz), postavljen tam, kjer je model na zemljevidu.
keywords: collada, dae, kmz, kml, google earth, blender, izvoz, geolokacija, georeferenciranje, zemljepisna širina, zemljepisna dolžina, lokacija, 3D programi
from: 81cfec09
---

{{ui:Collada}} na orodni vrstici (ali {{ui:Izvozi Collada (.dae, .kmz)…}} v meniju Datoteka v slogih menija in traku) zapiše, kar je odprto, kot Collada 1.4.1: vsak prikazani model, združene modele pa tam, kjer ste jih postavili.

## Izvoz

1. Izberite {{ui:Collada}}.
2. Izberite obliko:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Ponujeno je le, kadar model ima lokacijo.
3. Izberite možnosti, nato {{ui:Izvozi}}. Datoteka se prenese, vrstica stanja pa pove, koliko elementov je vključenih.

| Možnost | Kaj naredi |
|---|---|
| {{ui:Zapiši lokacijo v datoteko}} | Doda zemljepisno širino, dolžino, višino in smer izhodišča datoteke v .dae |
| {{ui:Višina}} | {{ui:Na tleh: etaža 0 modela leži na terenu}} ali {{ui:Lastna višina modela nad morsko gladino}} |
| {{ui:Vključi sobe in prostore}} | Prostori so vključeni tudi (privzeto so izpuščeni) |
| {{ui:Vključi skrite elemente}} | Skriti elementi se zapišejo prav tako (privzeto se zapiše samo to, kar vidite) |

## Kaj je v datoteki

| V modelu | V datoteki Collada |
|---|---|
| Stavba, etaže | Gnezdena vozlišča, etaže po višini; elementi brez etaže pod „Neuvrščeno“ |
| Vsak element | Eno vozlišče z lastno mrežo, poimenovano kot v modelu (ime, sicer razred in oznaka) |
| Razred, GlobalId, vnaprej določen tip | V dodatnih podatkih vozlišča (profil IFC), s točnim imenom (profil ModelCraft) |
| Barve | Materiali s prosojnostjo |
| Enote in osi | Metri, Z navzgor. Nivo 0 modela spredaj je na višini 0 |

Model ostane blizu izhodišča na tleh, zato ga programi, ki delajo z enojno natančnostjo, prikažejo brez tresenja. ModelCraft piše svoje datoteke Collada z istim zapisovalnikom in te datoteke odpre z imeni elementov.

## Od kod pride lokacija

Lokacijo da model, ki je v ospredju, na enak način, kot {{ui:Meri}} izračuna zemljepisno širino in dolžino točke:

- Pretvorba v zemljevid (IFC4 IfcMapConversion ali nabori lastnosti IFC2X3) prek koordinatnega sistema modela. Sistem, ki ste ga izbrali za model, ima prednost pred tistim, ki ga navaja datoteka.
- Sicer zemljepisna širina in dolžina mesta (približno, dovolj za celoten teren).

Smer je izmerjena, ne predpostavljena: upošteva zasuk zemljevida, pravi sever in konvergenco zemljevida. Če modelu želite dati lokacijo, uporabite {{ui:Izhodišče na zemljevidu…}} v meniju Meri.

## V drugih programih

- **Google Earth** prebere .kmz: model se prikaže na lokaciji, obrnjen proti severu. Navadna .dae nima mesta, iz katerega bi Google Earth prebral lokacijo; uporabite .kmz.
- **Blender** (4.x in starejši): File, Import, Collada (.dae). Vsak element pride kot svoj objekt z lastnim materialom. Lokacija je shranjena v dodatnih podatkih datoteke, ki jih Blender ne bere. Blender 5.0 je opustil vgrajen uvoznik Collada; tam uporabite {{ui:USD}} ali izvoz glTF, ali pa odprite .dae v Blenderju 4.5 in shranite .blend.

Naši testi preverijo vsako datoteko glede na shemo Collada 1.4.1 in jo preberejo z neodvisnim bralnikom Collada. V Blenderju ali Google Earthu je še nismo odprli.
