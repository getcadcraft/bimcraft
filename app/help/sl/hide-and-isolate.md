---
title: Skrijte, izolirajte in prikažite elemente prosojno
summary: Izberite več elementov, skrijte jih, prikažite samo njih ali jih prikažite skupaj z vsem drugim prosojno, nato vse vrnite nazaj.
keywords: skrij, izoliraj, prosojno, prozorno, duh, rentgen, pokaži vse, razkrij, izberi več, več izbir, ctrl klik, shift klik, vidnost
from: 97e98b8c
---

## Kaj boste naredili

Pogled očistite na to, kar gledate: skrijte elemente, ki so na poti, prikažite samo tiste, ki ste jih izbrali, ali ohranite vse drugo na zaslonu kot bled obris, da še vedno veste, kje ste.

## Koraki

1. Odprite model IFC. Glejte [Odprite model IFC in si oglejte stavbo v 3D](topic:open-ifc-model).
2. Kliknite element, da ga izberete. Za izbor več hkrati držite {{key:Mod}} ali {{key:Shift}} in kliknite vsakega. Če tako kliknete izbran element, ga spet odstranite iz izbora.
3. Odprite {{ui:Show}} v orodni vrstici in izberite, kaj storiti, ali pritisnite njegovo tipko:
   - {{ui:Hide}} ({{key:H}}) skrije izbrane elemente.
   - {{ui:Isolate}} ({{key:I}}) prikaže samo izbrane elemente.
   - {{ui:See-through}} ({{key:T}}) prikaže izbrane elemente, kakršni so, vse drugo pa prosojno.
4. Kliknite {{ui:Show all}} v istem meniju ali pritisnite {{key:Shift+H}}, da spet prikažete vse elemente.
5. Da namesto tega odrežete vse okoli izbranih elementov, kliknite {{ui:Section box round the pick}} v istem meniju ali pritisnite {{key:Shift+X}}. Glejte [Prerežite model IFC z ravnino prereza](topic:section-plane).

## Kaj boste videli

- Ko je izbranih več elementov, {{ui:Properties}} pove, koliko jih je, in jih našteje po razredu. Kliknite enega samega, da vidite njegove lastnosti.
- Skriti elementi ne morejo biti izbrani: klik zadane tisto, kar je za njimi.
- Tudi prosojni elementi ne morejo biti izbrani, zato lahko kliknete skozi stene do tistega, ki ste ga izolirali.
- Robovi se skrijejo skupaj z elementom in zbledijo z njim.
- Skrivanje, izolacija in prosojnost ostanejo, ko urejate, postavljate predmete iz knjižnice ali režete model z ravnino prereza. Odprtje drugega modela pokaže vse znova.

## Pogoste napake

- **Postavke menija so zatemnjene.** Nič ni izbrano. Najprej kliknite element; premaknite miško na postavko, da preberete, zakaj ne more delovati.
- **Izolacija je prikazala steno, ki sem jo skril.** Izolacija prikaže natanko to, kar ste izbrali, skrito ali ne.
- **Manjka cela etaža.** To je seznam {{ui:Storeys}}, ne {{ui:Show all}}: spet označite etažo.

## Naprej

- [Prikaz in skrivanje etaž, prostorov in robov](topic:storeys-and-spaces)
- [Prerežite model IFC z ravnino prereza](topic:section-plane)
