---
title: Povežite cevi in zračne kanale z opremo
summary: Začnite ali končajte cev ali zračni kanal na priključku, da prevzame velikost in sistem priključka ter ostane nanj pritrjen, nato preverite povezave — odprte priključke, neujemanja velikosti in sistema ter odseke brez vira.
keywords: mep, povezava, povezave, priključek, priključki, odprt priključek, neujemanje velikosti, neujemanje sistema, vir, preveri povezave, pritrjeno, sledi, premik opreme, ifcrelconnectsports, koordinacija
from: 29144fb0
---

## Kaj boste naredili

Povežite odseke z opremo, da je model en povezan sistem: iztok črpalke z ceveju, ki iz nje izstopa, vrat difuzorja z odcepnim zračnim kanalom. Nato naj BimCraft navede, kar ni povezano.

## Risanje z priključka

1. Izberite {{ui:Cev}} ali {{ui:Zračni kanal}}.
2. Premaknite kazalec na priključek kosa opreme (majhni krogci; odprt priključek je narisan v barvi opozorila). Kazalec se pritrdi nanj in pove **na priključku**.
3. Kliknite: odsek se začne na višini priključka in **prevzame njegovo velikost in sistem** (cev prevzame tudi običajni material sistema). Vrstica stanja pove, kaj je prevzel.
4. Rišite naprej kot običajno. Če odsek končate na drugem priključku, pritrdite tudi ta konec.

Konec odseka na priključku je **pritrjen** nanj: premaknete ali obrnete opremo (v Lastnostih) in konec odseka gre z njo; odsek uredite, konec pa ostane na priključku. Ostali vogali odseka ostanejo, kjer so, zato se lahko po velikem premiku prvi del odtrga od priključka pod kotom: premaknite tudi naslednji vogal.

## Preverite povezave

Odprite {{ui:Zgradba}} in kliknite {{ui:Preveri povezave}}. Seznam pod vrstico prikazuje:

| Vrstica | Kaj pomeni |
|---|---|
| Priključek ni povezan | Kos opreme ima povezavo, na katero ni nič narisanega |
| Na koncu ni ničesar | Odsek se konča v zraku |
| Povezana priključka različnih velikosti | Odsek ene velikosti se srečuje s priključkom ali odsekom druge velikosti brez redukcije (nazivna velikost cevi, oblika in stranice zračnega kanala) |
| Povezana priključka različnih sistemov | Na primer odvodni zračni kanal na dovodnem difuzorju |
| Cev, povezana z zračnim kanalom | Dve povezavi različnih vrst se srečata |
| V njegovem omrežju ga nobena oprema ne oskrbuje | Nič, s čimer je odsek povezan, ne glede na to, kako daleč po poti, nima iztoka. Odtokov, kanalizacije in odzračevanj se to ne sprašuje: njihova voda prihaja iz armatur |
| Pritrjeno na priključek opreme, ki ni več v modelu | Oprema je bila izbrisana; ponovno narišite konec ali izbrišite odsek |

Napake so najprej. Kliknite vrstico, da izberete, kar navaja. {{ui:Zapri}} skrije seznam. Preverjanje bere model, kakor je narisan: preverja povezave in velikosti, nikoli pa pretokov, tlakov ali uravnoteženja.
