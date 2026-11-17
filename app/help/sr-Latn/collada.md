---
title: Izvoz modela kao Collada ili za Google Earth
summary: Zapiši otvorene IFC modele kao Collada (.dae) datoteku za Blender i druge 3D programe, ili kao paket za Google Earth (.kmz) postavljen tamo gde je model na karti.
keywords: collada, dae, kmz, kml, google earth, blender, izvoz, geolokacija, georeferenca, geografska širina, geografska dužina, lokacija, 3d programi
from: 81cfec09
---

{{ui:Collada}} na traci sa alatkama (ili {{ui:Izvezi Collada (.dae, .kmz)…}} u meniju Datoteka u stilovima menija i trake) zapisuje ono što je otvoreno kao Collada 1.4.1: svaki model koji je prikazan, a povezane modele tamo gde ste ih postavili.

## Izvoz

1. Izaberi {{ui:Collada}}.
2. Izaberi format:
   - {{ui:Collada datoteka (.dae), za Blender i druge 3D programe}}.
   - {{ui:Paket za Google Earth (.kmz): model postavljen tamo gde je na karti}}. Nudi se samo kada model ima lokaciju.
3. Izaberi opcije, zatim {{ui:Izvezi}}. Datoteka se preuzima, a statusna traka kaže koliko je elemenata ušlo.

| Opcija | Šta radi |
|---|---|
| {{ui:Zapiši lokaciju u datoteku}} | Dodaje geografsku širinu, geografsku dužinu, visinu i pravac početka datoteke u .dae |
| {{ui:Visina}} | {{ui:Na terenu: nulti nivo modela leži na terenu}}, ili {{ui:Sopstvena visina modela iznad nivoa mora}} |
| {{ui:Uključi prostorije i prostore}} | Prostori se takođe upisuju (podrazumevano su izostavljeni) |
| {{ui:Uključi skrivene elemente}} | Elementi koje ste sakrili se takođe upisuju (podrazumevano se upisuje samo ono što vidite) |

## Šta je u datoteci

| U modelu | U Collada datoteci |
|---|---|
| Zgrada, spratovi | Ugnježdeni čvorovi, spratovi po redosledu visine; elementi bez sprata pod „Nepostavljeno” |
| Svaki element | Jedan čvor sa sopstvenom mrežom, nazvan kao u modelu (njegov naziv, inače klasa i oznaka) |
| Klasa, GlobalId, unapred određen tip | U dodatnim podacima čvora (profil IFC), tačnim nazivom (profil ModelCraft) |
| Boje | Materijali, sa providnošću |
| Jedinice i ose | Metri, Z gore. Nulti nivo modela ispred je na visini 0 |

Model ostaje blizu početka na tlu, pa programi koji rade sa jednostrukom preciznošću prikazuju ga bez treperenja. ModelCraft piše svoje Collada datoteke istim pisačem i otvara ove datoteke sa njihovim nazivima elemenata.

## Odakle dolazi lokacija

Model ispred daje lokaciju, na isti način na koji {{ui:Izmeri}} računa geografsku širinu i dužinu tačke:

- Konverzija karte (IFC4 IfcMapConversion, ili skupovi svojstava IFC2X3) kroz koordinatni sistem modela. Sistem koji ste izabrali za model ima prednost nad onim koji datoteka navodi.
- Inače geografska širina i dužina lokacije gradilišta (približno: dovoljno za celo gradilište).

Pravac se meri, ne pretpostavlja: uzima u obzir rotaciju karte, pravi sever i konvergenciju karte. Da biste modelu dali lokaciju, koristite {{ui:Početak na mapi…}} u Izmeri.

## U drugim programima

- **Google Earth** čita .kmz: model se pojavljuje na lokaciji, okrenut ka severu. Običan .dae nema mesto iz kog Google Earth čita lokaciju; koristite .kmz.
- **Blender** (4.x i ranije): File, Import, Collada (.dae). Svaki element se uvozi kao zaseban objekat sa svojim materijalom. Lokacija se čuva u dodatnim podacima datoteke, koje Blender ne čita. Blender 5.0 je izbacio ugrađeni Collada uvoznik; tamo koristite {{ui:USD}} ili glTF izvoz, ili otvorite .dae u Blenderu 4.5 i sačuvajte .blend.

Naši testovi proveravaju svaku datoteku prema Collada 1.4.1 šemi i čitaju je nazad nezavisnim Collada čitačem. Nisu je otvarali u Blenderu ili Google Earth-u.
