---
title: Izvezi model kao Collada ili za Google Earth
summary: Zapiši otvorene IFC modele kao Collada (.dae) datoteku za Blender i druge 3D programe ili kao Google Earth paket (.kmz) postavljen tamo gdje je model na karti.
keywords: collada, dae, kmz, kml, google earth, blender, izvoz, geolokacija, georeferenca, geografska širina, geografska dužina, lokacija, 3D programi
from: 81cfec09
---

{{ui:Collada}} na traci sa alatima (ili {{ui:Izvezi Collada (.dae, .kmz)…}} u meniju Datoteka u stilovima menija i trake) zapisuje ono što je otvoreno kao Collada 1.4.1: svaki model koji je prikazan, a povezane modele tamo gdje ste ih postavili.

## Izvoz

1. Odaberi {{ui:Collada}}.
2. Odaberi format:
   - {{ui:Collada datoteka (.dae), za Blender i druge 3D programe}}.
   - {{ui:Google Earth paket (.kmz): model postavljen tamo gdje je na karti}}. Nudi se samo kad model ima lokaciju.
3. Odaberi opcije, zatim {{ui:Izvezi}}. Datoteka se preuzima, a statusna traka kaže koliko je elemenata ušlo.

| Opcija | Šta radi |
|---|---|
| {{ui:Upiši lokaciju u datoteku}} | Dodaje geografsku širinu, dužinu, visinu i smjer početka datoteke u .dae |
| {{ui:Visina}} | {{ui:Na terenu: nivo 0 modela leži na terenu}} ili {{ui:Vlastita visina modela iznad nivoa mora}} |
| {{ui:Uključi prostorije i prostore}} | Prostori također ulaze (podrazumijevano su izostavljeni) |
| {{ui:Uključi skrivene elemente}} | Elementi koje ste sakrili također se zapisuju (podrazumijevano se zapisuje samo ono što vidite) |

## Šta je u datoteci

| U modelu | U Collada datoteci |
|---|---|
| Zgrada, spratovi | Ugniježđeni čvorovi, spratovi po redu visine; elementi bez sprata pod „Nesmješteno“ |
| Svaki element | Jedan čvor sa vlastitom mrežom, nazvan kao u modelu (naziv, inače klasa i oznaka) |
| Klasa, GlobalId, unaprijed definisan tip | U dodatnim podacima čvora (profil IFC), sa tačnim nazivom (profil ModelCraft) |
| Boje | Materijali, sa providnošću |
| Jedinice i osi | Metri, Z gore. Nivo 0 modela ispred je na visini 0 |

Model ostaje blizu ishodišta na terenu, pa programi koji rade sa jednostrukom preciznošću prikazuju ga bez treperenja. ModelCraft piše svoje Collada datoteke istim pisačem i otvara ove datoteke sa njihovim nazivima elemenata.

## Odakle dolazi lokacija

Model ispred daje lokaciju, na isti način kao što {{ui:Mjeri}} računa geografsku širinu i dužinu tačke:

- Konverzija karte (IFC4 IfcMapConversion, ili skupovi svojstava IFC2X3) kroz koordinatni sistem modela. Sistem koji ste odabrali za model ima prednost nad onim koji navodi datoteka.
- Inače geografska širina i dužina lokacije (približno: dovoljno je za cijelu lokaciju).

Smjer se mjeri, ne pretpostavlja: uzima u obzir rotaciju karte, pravi sjever i konvergenciju karte. Da biste modelu dali lokaciju, koristite {{ui:Početak na karti…}} u meniju Mjeri.

## U drugim programima

- **Google Earth** čita .kmz: model se pojavljuje na lokaciji, okrenut prema sjeveru. Običan .dae nema mjesto iz kojeg Google Earth čita lokaciju; koristite .kmz.
- **Blender** (4.x i ranije): Datoteka, Uvezi, Collada (.dae). Svaki element se uvozi kao zaseban objekt sa svojim materijalom. Lokacija je zapisana u dodatnim podacima datoteke, koje Blender ne čita. Blender 5.0 je izbacio ugrađeni Collada uvoznik; tamo koristite {{ui:USD}} ili glTF izvoz, ili otvorite .dae u Blenderu 4.5 i spasite .blend.

Naši testovi provjeravaju svaku datoteku prema Collada 1.4.1 šemi i čitaju je nazad nezavisnim Collada čitačem. Nisu je otvarali u Blenderu ni Google Earthu.
