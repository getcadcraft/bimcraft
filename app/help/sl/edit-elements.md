---
title: Brisanje, izrezovanje, kopiranje in lepljenje elementov zgradbe
summary: Izberite stene, vrata, pohištvo ali kaj drugega v modelu IFC; izbrišite jih, izrežite ali kopirajte in prilepite tja, kamor kliknete, na istem mestu ali na drugi etaži.
keywords: izbriši, odstrani, pobriši, izreži, kopiraj, prilepi, podvoji, premakni, izberi vse, element zgradbe, zid, vrata, okno, stopnišče, odprtina, razveljavi
from: d9eec37f
---

## Kaj boste naredili

Spremenite, kaj je v modelu IFC: odstranite elemente, ki jih ne potrebujete, kopirajte steno ali sklop pohištva na drugo mesto ali premaknite elemente z izrezovanjem in lepljenjem. Vsaka sprememba je en korak, ki ga lahko razveljavite, shranjevanje pa ustvari novo datoteko, zato vaša izvirna datoteka ostane nespremenjena.

## Koraki

1. Odprite model IFC. Glejte [Odprite model IFC in si oglejte 3D](topic:open-ifc-model).
2. Izberite, kar želite spremeniti: kliknite element, držite {{key:Mod}} ali {{key:Shift}} in kliknite, da izberete še več elementov, ali pritisnite {{key:Mod+A}} ({{ui:Več}}, {{ui:Izberi vse}}), da izberete vse prikazane elemente.
3. Nato:
   - **Izbriši:** pritisnite {{key:Delete}} ali {{ui:Več}}, {{ui:Izbriši}}.
   - **Kopiraj:** pritisnite {{key:Mod+C}} ali kliknite {{ui:Kopiraj}}.
   - **Izreži:** pritisnite {{key:Mod+X}} ali {{ui:Več}}, {{ui:Izreži}}. Elementi izginejo, vi pa jih lahko prilepite.
4. Za lepljenje pritisnite {{key:Mod+V}} ali kliknite {{ui:Prilepi}}. Prozoren okvir velikosti kopiranega sledi kazalcu na etaži, izbrani v vrstici za postavljanje. Pritisnite {{key:R}}, da ga zasukate za 90°, nato kliknite, kjer naj bo. Vsak klik postavi še eno kopijo; za konec pritisnite {{key:Esc}}.
5. Ali pritisnite {{key:Mod+Shift+V}} ({{ui:Več}}, {{ui:Prilepi na isto mesto}}): po izrezovanju se elementi vrnejo točno tja, kjer so bili; po kopiranju se kopija postavi tik ob izvirnike.
6. Kliknite {{ui:Shrani kot IFC}}, da prenesete urejeni model.

## Kaj spada k elementu

- **Deli:** stopnišče vzame svoje tekove, zavesna stena svoje panele, vse, kar je sestavljeno iz delov, vzame vse svoje dele.
- **Odprtine:** stena vzame odprtine, izrezane vanjo. Brisanje vrat ali okna odstrani tudi odprtino, ki jo je zapolnjevala, zato se stena zapre, kot se v avtorskih programih. Brisanje stene, narisane v BimCraftu, izbriše tudi njena vrata in okna ter poveže preostale stene. Brisanje stene iz datoteke, narejene drugje, pusti njena vrata in okna na mestu.
- **Podatki:** kopija ima isti tip, materiale, nabore lastnosti in količine kot izvirnik ter nov GlobalId. Kasnejša sprememba vrednosti na kopiji ne vpliva na izvirnik.
- **Elementi knjižnice** ohranijo podatke knjižnice; kopija dobi naslednjo prosto številko elementa, izrezan element pa po vrnitvi z lepljenjem obdrži svojo.

## Kaj morate videti

- „Izbrisano: …“ ali „Prilepljeno: …“ na seznamu {{ui:Spremembe}}. {{key:Mod+Z}} vrne zadnjo spremembo nazaj; {{key:Mod+Y}} jo znova uveljavi.
- Po brisanju vrstica stanja pove, koliko delov in odprtin je bilo odstranjenih.
- Prilepljeni elementi so izbrani, zato lahko znova prilepite na isto mesto in tako ustvarite vrsto ali pa jih izbrišete.

## Dobro je vedeti

- Kopije uporabljajo isto geometrijo kot izvirnik (IFC dovoli, da elementi delijo geometrijo), zato datoteka le malo naraste.
- Elementi zgradbe se prilepijo v model, iz katerega so bili kopirani, na istem zavihku. Če želite postavljene elemente knjižnice uporabiti v drugem modelu, kopirajte en element naenkrat: glejte [Kopiranje, lepljenje in podvajanje elementov knjižnice](topic:copy-paste).
- Etaž, prostorov, stavb in lokacije ni mogoče izbrisati ali kopirati. Namesto tega izberite elemente v njih. Prostor, narisan v BimCraftu, nastane iz sten okoli njega: če izbrišete steno, se dva prostora združita.
- Stene, vrata in okna, narisana z lastnimi orodji BimCrafta za stene, vrata in okna, zaenkrat ni mogoče kopirati, izrezati ali podvojiti; vrstica stanja to pove. Narišite jih znova. Brisanje deluje.
- Kopiranje na odložišče poleg elementov kot besedilo shrani tudi njihova imena in lastnosti, da jih lahko prilepite v preglednico ali e-poštno sporočilo.

## Pogoste napake

- **{{ui:Izbriši}} je zasivljen.** Nič ni izbrano ali so izbrane samo etaže ali prostori. Pokažite nanj, da preberete razlog.
- **Lepljenje pravi, da so elementi iz drugega modela.** Od kopiranja ste odprli drug model. Ponovno odprite prvi model in tam kopirajte elemente.
- **Prilepljena kopija je na drugi etaži.** {{ui:Etaža}} v vrstici za postavljanje določi, kam gre; pred klikom izberite etažo.

## Povezano

- [Skrijte, izolirajte in prosojno prikažite elemente](topic:hide-and-isolate)
- [Tipke in miška](topic:keyboard#edit)
