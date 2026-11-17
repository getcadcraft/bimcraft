---
title: Preverjanje ogrevanja in hlajenja z EnergyPlus
summary: Zapišite model kot datoteko EnergyPlus ali nanj v brskalniku zaženite EnergyPlus različice 26.2.0 in primerjajte njegove projektne obremenitve s hitrim pripomočkom za ogrevanje in hlajenje. Drugo mnenje za zgodnje načrtovanje, ne izračun skladnosti.
keywords: energyplus, energijska simulacija, projektni dan, obremenitev ogrevanja, obremenitev hlajenja, vremenska datoteka, epw, idf, toplotna masa, letna energija, simulacija
from: b82a5bf2
---

## Kaj boste naredili

Podokno **Preverjanje z EnergyPlus** zapiše odprt model kot vhodno datoteko EnergyPlus (IDF): ena cona na sobo, stene, plošče, strehe in okna z njihovimi vrednostmi U, izmenjava zraka ter idealno ogrevanje in hlajenje. Datoteko lahko vedno **shranite** in jo zaženete v svojem EnergyPlus.

Če tudi nastavite motor, lahko podokno simulira takoj in poleg hitrega pripomočka prikaže projektno ogrevanje in hlajenje EnergyPlus, sobo za sobo.

To je projektni pripomoček. Energijski predpisi, certifikacija in dovoljenja zahtevajo odobreno orodje in podatke o podnebju, ki jih zahteva, rezultat pa mora pregledati oseba, ki za njega odgovarja.

## Nastavitev motorja

BimCraft ne vsebuje EnergyPlus. Gre za velik gradnik WebAssembly (približno 6 MB stisnjen ter še datoteka s podatki 4.6 MB), zato ga gostite sami in v podokno vpišete njegov naslov. Stran ga naloži šele, ko pritisnete gumb za simulacijo, nikoli ob zagonu. Naslov mora biti https, pot na tem spletnem mestu ali localhost.

## Projektni dnevi ali leto

- **Simuliraj projektne dneve** ne potrebuje vremenske datoteke. Zažene hladen zimski dan brez sonca in vroč jasen poletni dan pri temperaturah iz vhodnih podatkov za ogrevanje in hlajenje na zavihku Dnevna svetloba ter za vsako sobo poroča obremenitev v vatih.
- **Simuliraj leto** potrebuje vremensko datoteko v formatu EPW, ki jo izberete. Doda ljudi, luči in opremo iz istih vhodnih podatkov (vedno vklopljeno, ker urnik ni izmišljen) in za vsako sobo poroča energijo ogrevanja in hlajenja v kWh. Vremenske datoteke imajo svoje licence, zato uporabite tisto, ki jo smete uporabljati.

## Toplotna masa

Označite **Stenam z znanimi plastmi daj toplotno maso**: stene, strehe in plošče, katerih plasti materiala so znane, se zapišejo plast za plastjo, z gostoto in specifično toploto iz kratke tabele tipičnih vrednosti po imenu materiala. Plasti se najprej vzamejo od zunaj, v vrstnem redu, kot jih navaja datoteka. Elementi brez plasti ostanejo pri svoji vrednosti U brez mase.

## Branje primerjave

Obe metodi odgovarjata na malo različni vprašanji. Hitri pripomoček ohrani vsak element; datoteka EnergyPlus povpreči vrednosti U vsake sobe po vrsti površine. Razlika nad 15 % v projektnem ogrevanju sobe je navedena kot opomba v podoknu ⚠, z obema številkama. Hlajenje se po zasnovi razlikuje bolj: hitri pripomoček izračuna vrh iz sonca na enem datumu, EnergyPlus pa dimenzionira po svojem projektnem dnevu.
