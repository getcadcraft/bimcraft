---
title: Izbira programa, ki izriše sliko
summary: Izbira pogona v pogovornem oknu Upodobitev: naša dva lastna pogona, drugi programi v CadCraft Studiu in kaj namesto tega naredi splet.
keywords: upodobitev, pogon, upodabljalnik, upodobitveni pogon, vtičnik, studio, zunanji program, nariše, čakalna vrsta, pogon dodatka
from: 44a1ef5e
---

{{ui:Upodobitev}} ima izbiro **Pogon** nad možnostjo {{ui:Način}}. Naša dva lastna pogona sta vedno na voljo in delujeta povsod; dodatki lahko dodajo še več, v CadCraft Studiu pa seznam vsebuje tudi programe, ki prevzamejo prizor.

| Pogon | Kaj naredi | Kje |
|---|---|---|
| Vgrajen: Hitro | Hitra statična slika: dnevna svetloba, mehke sence, videz stekla in kovine, v nekaj sekundah | Brskalnik in Studio |
| Vgrajen: Sledilnik žarkov | Svetloba se odbija med površinami na vaši grafični kartici ali procesorju, čakalna vrsta upodobitev in drugi računalniki v vašem omrežju | Brskalnik in Studio |
| Pogon dodatka | Nariše sliko in jo vrne: glejte [Izris slike z drugim programom](topic:render-other-program) | Brskalnik (pogon, napisan v JavaScriptu) ali Studio (pogon, ki zažene program) |
| Program, ki prevzame prizor | Studio postavi prizor v svojo mapo in ga drži usklajenega | Studio |
| Odpri v … | Shrani prizor in ga odpre v programu; nič se ne vrne: glejte [Odprtje prizora v drugem programu](topic:render-open-in) | Splet shrani datoteko |

## Kako izbira deluje

- Izbira Hitro ali Sledilnika žarkov spremeni tudi {{ui:Način}}, in obratno. Nič drugega v pogovornem oknu se ne spremeni za ljudi, ki nikoli ne uporabljajo drugega pogona.
- Pogon, ki ni na voljo, ostane na seznamu z razlogom („ni najden“, „potrebuje novejšo različico“); izbrati ga ne morete. V brskalniku pogon, ki deluje samo v Studiu, prikaže „shrani datoteko“: {{ui:Upodobitev}} nato shrani prizor in njegove nastavitve v datoteko, ki jo odnesete v ta program.
- Izbira se shrani skupaj z nastavitvami upodobitve datoteke, pogon, ki ste ga nazadnje izbrali, pa je začetni pogon za datoteke brez lastne izbire.
- Slika iz drugega programa pove, kateri program jo je narisal in katero različico, v pogovornem oknu in v čakalni vrsti upodobitev. Obljube strani [Upodobitev](topic:render) veljajo samo za **naše lastne** pogone: drug program osvetljuje, uravnava tone in vzorči po svoje, zato sta dve sliki istega prizora podobni po kameri, soncu, svetilkah in izpostavljenosti, ne pa piksel za pikslom.

## Kaj dobi vsak pogon

Prizor gre drugemu programu kot **paket**: model kot datoteka USD (ista datoteka, ki jo zapiše [Shrani kot USD](topic:usd)), in datoteka z nastavitvami, ki vsebuje tisto, čemur uvoznik USD ne more zaupati: natančne vrednosti materialov, svetilke, ki so vklopljene, z močjo in profili svetlobe, sonce, nebo, izpostavljenost ter kamero, kakor jo nariše pogovorno okno. Nikamor se ne naloži ničesar.

## Čakalna vrsta upodobitev

Slika za drug program lahko čaka v [čakalni vrsti upodobitev](topic:render#the-render-queue) enako kot naše lastne; njena naloga si zapomni, za kateri pogon je.
