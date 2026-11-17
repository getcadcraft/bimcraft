---
title: Delovni slog, podvojeni pogledi, peresa na papirju, Prijavi kot in predloge
summary: Izberite, kako se BimCraft obnaša glede na vaš način dela, podvojite kateri koli pogled kot lastno kopijo ali povezavo, shranite prepisovanja peres v datoteko in tiskajte kot prikazano ali prek tabele peres, prijavite element kot drug razred IFC in začnite projekte iz lastnih predlog.
keywords: delovni slog, podvoji pogled, podvoji, kopiraj pogled, odvisen pogled, povezan pogled, lastna kopija, kopija pogleda, prepisovanja peres, peresa, debeline črt, natisni kot prikazano, tabela peres, datoteka sloga izrisa, ctb, monokromno, sivinsko, prijavi kot, razred ifc, preoblikuj, vnaprej določena vrsta, splošni model, plošča kot cesta, stena kot plošča, streha kot rampa, predloga projekta, predloga, nov iz predloge, shrani kot predlogo, pisarniški standard
from: 231d98b0
---

## Kaj boste naredili

Nastavite BimCraft za svoj način dela, podvojite poglede, jih natisnite tako, kot pričakujete, štejte elemente kot to, kar dejansko so, in začnite vsak projekt iz predloge vaše pisarne.

## Izberite delovni slog

1. Odprite {{ui:Nastavitve}} in zavihek {{ui:BimCraft}}. Poiščite {{ui:Delovni slog}}.
2. Izberite enega:
   - {{ui:Vsak pogled svoj}} (prva izbira): podvojen pogled kopira svoje označbe, in te ostanejo njegove; listi se natisnejo, kot jih prikazuje zaslon.
   - {{ui:Skupne označbe in tabele peres}}: podvojeni pogledi delijo označbe; tiskanje gre prek tabele peres.
3. Pod izbiro so štiri stvari, ki jih nastavi. Spremenite katero koli od njih posebej; slog se nato prikaže kot {{ui:Po meri}}.

Delovni slog se hrani v tem brskalniku, podobno kot postavitev delovnega okolja. Predloga ga prenese v nove modele.

## Podvoji pogled

1. V {{ui:Brskalniku projekta}} ima vsak tloris, stropni tloris, oblaček, fasada in prerez gumb {{ui:Podvoji}} (ikona dveh listov).
2. Poimenujte kopijo in izberite, kako se obnaša:
   - {{ui:Lastna kopija}}: njeno risanje, kote, obrezovanje, skriti elementi in peresa se kopirajo in ostanejo njeni. Urejanje katerega koli pogleda nikoli ne spremeni drugega, zato pogled na izdanem listu ostane, kot je bil izdan.
   - {{ui:Povezano}}: prikaže isti pogled z enim naborom označb in nastavitev.
3. Kopija je navedena pod {{ui:Podvojeni pogledi}}. Kliknite jo, da jo odprete; vrstica nad tlorisom pove, da je kopija, z gumbom {{ui:Navzgor}} pa se vrnete na njen pogled.
4. Njen gumb z drsnikom odpre njene nastavitve: ime, {{ui:Doseg pogleda}} (lastna kopija ima svojega), {{ui:Naredi lastno kopijo}} za povezano kopijo in {{ui:Izbriši}}.

Kopije fasad in prerezov gredo na vaše liste kot pogledi, iz katerih izhajajo. Podvajanje je en korak razveljavitve, kopije pa so shranjene v IFC poleg oblačkov.

## Peresa, shranjena s pogledom, in tiskanje kot prikazano

1. Vklopite {{ui:Risanje}} in izberite {{ui:Peresa}}.
2. {{ui:Za}} zdaj našteva vsako kategorijo: stene, vrata in okna, plošče, strehe, stebre, stopnice, pohištvo in ostalo ter risanje in kote.
3. {{ui:Uporabi}} shrani pero v IFC skupaj s pogledom, ki je prikazan: tlorisom, stropnim tlorisom, oblačkom ali podvojenim pogledom. Peresa, narejena pred različico 0.9, so bila shranjena v brskalniku; {{ui:Shrani ta peresa v datoteko}} jih premakne.
4. Listi in PDF narišejo vsako pero, kot ga prikazuje zaslon.

Če želite namesto tega tiskati prek tabele peres, v vrstici Peresa nastavite {{ui:Natisni}} na {{ui:Prek tabele peres}}, nato izberite tabelo (barvna, monokromna, sivinska) ali {{ui:Uredi tabelo peres…}}: vsaka barva dobi barvo, debelino in raster, s katerim se natisne. Tabela je datoteka sloga izrisa CadCraft, zato {{ui:Uvozi…}} sprejme tabelo, narejeno v aplikaciji CadCraft, {{ui:Izvozi}} pa vrne tabelo. Model ohrani svojo izbiro; če je ni, odloči delovni slog.

## Prijavite element kot drug razred

Plošča, narisana kot cesta, stena, uporabljena kot plošča, ali streha, oblikovana kot rampa: ohranite orodje, s katerim ste jo narisali, in jo prijavite kot to, kar je.

1. Izberite element in odprite {{ui:Lastnosti}}. Odprite {{ui:Prijavi kot}}.
2. V iskalno polje vpišite razred, ki ustreza obliki, izberite ga in njegovo vnaprej določeno vrsto. Za lastno vrsto izberite USERDEFINED in ji dajte ime.
3. {{ui:Uporabi}} (en korak razveljavitve). {{ui:Počisti}} ga ponovno prijavi kot narisanega.

Še vedno ga urejate z orodjem, s katerim je bil narisan. Shranjeni IFC ga zapiše kot prijavljeni razred, zato ga drugi programi, predizmere ({{ui:Količine}}), Najdi, Barva po, preverjanja modela in {{ui:Težave}} štejejo kot tak razred. Razpredelnice izpustijo steno, prijavljeno kot plošča, iz razpredelnice sten, {{ui:Elementi po prijavljenem razredu}} pa navede vsakega. Deluje v datotekah IFC4 in IFC2X3; seznam ponuja samo razrede, ki jih podpira različica IFC datoteke. Vrata, okna, stopnice, prostori in nivoji obdržijo svoj razred.

## Shranite projekt kot predlogo in začnite iz nje

1. Z odprtim projektom kliknite {{ui:Shrani kot predlogo}} poleg {{ui:Shrani}}.
2. Poimenujte jo. Označite {{ui:Prenesi tudi datoteko predloge}}, če jo želite deliti kot datoteko IFC, in {{ui:Nove modele začni iz nje}}, če jo želite nastaviti za privzeto.
3. Predloga ohrani nivoje, predloge pogledov in nastavitve pogledov, podvojene poglede in oblačke, risanje, peresa in tabelo peres, oznake, družine in tipe, liste, velikosti listov, glave risb ter delovni slog. Stene, plošče, vrata in vsi drugi elementi modela se izpustijo.
4. Kliknite {{ui:Nova stavba}} in jo izberite pod {{ui:Začni iz}}, ali izberite {{ui:Datoteka predloge…}} za predlogo, ki ste jo prejeli. Novi projekt dobi svoje ime in svojo identiteto projekta; vse ostalo je kot v predlogi.

:::note
Predloge se hranijo v tem brskalniku. Skupne predloge, deljene prek CadCraft Studio, še niso izdelane: namesto tega pošljite datoteko predloge.
:::
