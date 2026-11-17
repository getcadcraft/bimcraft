---
title: Izvoz modela kao Collada ili za Google Earth
summary: Zapišite otvorene IFC modele kao Collada (.dae) datoteku za Blender i druge 3D programe ili kao paket Google Earth (.kmz) postavljen tamo gdje se model nalazi na karti.
keywords: collada, dae, kmz, kml, google earth, blender, izvoz, geolokacija, georeferenciranje, geografska širina, geografska dužina, lokacija, 3D programi
from: 81cfec09
---

{{ui:Collada}} na alatnoj traci (ili {{ui:Izvezi Collada (.dae, .kmz)…}} u izborniku Datoteka u stilovima izbornika i vrpce) zapisuje što je otvoreno kao Collada 1.4.1: svaki model koji se prikazuje, a povezane modele tamo gdje ste ih postavili.

## Izvoz

1. Odaberite {{ui:Collada}}.
2. Odaberite format:
   - {{ui:Collada datoteka (.dae), za Blender i druge 3D programe}}.
   - {{ui:Paket za Google Earth (.kmz): model postavljen tamo gdje se nalazi na karti}}. Nudi se samo kada model ima lokaciju.
3. Odaberite mogućnosti, zatim {{ui:Izvezi}}. Datoteka se preuzima, a statusna traka navodi koliko je elemenata uključeno.

| Opcija | Što radi |
|---|---|
| {{ui:Upiši lokaciju u datoteku}} | Dodaje geografsku širinu, geografsku dužinu, visinu i smjer ishodišta datoteke u .dae |
| {{ui:Visina}} | {{ui:Na tlu: razina 0 modela leži na terenu}}, ili {{ui:Vlastita visina modela iznad razine mora}} |
| {{ui:Uključi prostorije i prostore}} | Prostori se također zapisuju (inače su izostavljeni) |
| {{ui:Uključi skrivene elemente}} | Elementi koje ste sakrili također se zapisuju (inače se zapisuje samo ono što vidite) |

## Što je u datoteci

| U modelu | U Collada datoteci |
|---|---|
| Zgrada, etaže | Ugniježđeni čvorovi, etaže poredane po visini; elementi bez etaže pod „Nepostavljeno“ |
| Svaki element | Jedan čvor s vlastitom mrežom, nazvan kao u modelu (naziv, inače klasa i oznaka) |
| Klasa, GlobalId, predefinirani tip | U dodatnim podacima čvora (profil IFC), s točnim nazivom (profil ModelCraft) |
| Boje | Materijali, s prozirnošću |
| Jedinice i osi | Metri, Z prema gore. Razina 0 modela ispred je na visini 0 |

Model ostaje blizu ishodišta na tlu, pa programi koji rade s jednostrukom preciznošću prikazuju ga bez treperenja. ModelCraft piše svoje Collada datoteke istim zapisivačem i otvara ove datoteke s njihovim nazivima elemenata.

## Odakle dolazi lokacija

Model ispred daje lokaciju, na isti način na koji {{ui:Mjeri}} izračunava geografsku širinu i dužinu točke:

- Pretvorba karte (IFC4 IfcMapConversion ili skupovi svojstava IFC2X3) kroz koordinatni sustav modela. Sustav koji ste odabrali za model ima prednost pred onim koji navodi datoteka.
- Inače geografska širina i dužina lokacije (približno: dovoljno dobro za cijelu lokaciju).

Smjer se mjeri, a ne pretpostavlja: uzima se u obzir rotacija karte, pravi sjever i konvergencija karte. Za zadavanje lokacije modelu upotrijebite {{ui:Ishodište na karti…}} u Mjeri.

## U drugim programima

- **Google Earth** čita .kmz: model se pojavljuje na lokaciji, okrenut prema sjeveru. Običan .dae nema mjesto iz kojeg Google Earth čita lokaciju; upotrijebite .kmz.
- **Blender** (4.x i ranije): File, Import, Collada (.dae). Svaki element ulazi kao zaseban objekt sa svojim materijalom. Lokacija se čuva u dodatnim podacima datoteke, koje Blender ne čita. Blender 5.0 je izbacio ugrađeni uvoznik Collada; tamo upotrijebite {{ui:USD}} ili izvoz glTF, ili otvorite .dae u Blenderu 4.5 i spremite .blend.

Naši testovi provjeravaju svaku datoteku prema shemi Collada 1.4.1 i čitaju je natrag nezavisnim Collada čitačem. Nisu je otvorili u Blenderu ni u Google Earthu.
