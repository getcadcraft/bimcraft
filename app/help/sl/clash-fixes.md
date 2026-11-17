---
title: Reševanje kolizij s popravki posameznih strok
summary: Pri rezultatih kolizij Predlagaj popravke za vsako kolizijo našteje, kaj lahko naredi vsaka stroka (kanal obide pod gredo, cev premaknjena vstran, steber premaknjen, odprtina v gredi), vsak popravek pa je preizkušen na kopiji modela s svojimi kompromisi, da ga sprejmete ali zavrnete. Sprejeti popravki gredo v model kot en korak razveljavitve.
keywords: kolizija, popravek kolizije, reševanje kolizij, usklajevanje, predlagani popravki, obhod, odmik, kanal, cev, nosilec, steber, odprtina, tulec, kompromis, stroka, konstrukcija, strojništvo, vodovod, elektrika, arhitektura, pomočnik
from: f7bafdd9
---

## Kaj boste naredili

Spremenite seznam kolizij v odločitve. Vsaka stroka (konstrukcija, strojništvo, vodovod, elektrika, arhitektura) predlaga popravke samo za svoje elemente, vsak predlog se preveri na kopiji modela, odločate pa vi.

## Koraki

1. Najprej zaženite preverjanje kolizij. Glejte [Preverjanje kolizij](topic:clash-check) in [Preverjanje cevi in kanalov glede na konstrukcijo](topic:mep-against-structure).
2. Pod rezultati kliknite {{ui:Propose fixes}}. Podokno **Predlagani popravki** se odpre ob modelu.
3. Za vsako kolizijo vidite predloge vsake stroke, najboljši najprej. Vsaka vrstica pove, kaj naredi, in njene kompromise: ali kolizijo reši, koliko novih kolizij ustvari, katera pravila krši, koliko poti doda ali koliko se premakne, koliko fitingov je in oceno stroška.
4. Kliknite {{ui:Show}}, da vidite elemente v 3D. Kliknite {{ui:Accept}} pri popravku, ki ga želite (en na kolizijo), ali {{ui:Reject}}.
5. Vrstica na dnu pove, kaj vsi vaši sprejeti popravki skupaj naredijo: koliko kolizij je rešenih, koliko jih ostane in ali se kakšna nova pojavi.
6. Kliknite {{ui:Apply accepted fixes (one undo step)}}. Preverjanje kolizij se zažene znova. {{ui:Undo}} jih vse hkrati vrne nazaj.

## Kaj sme posamezna stroka

- **Strojništvo** (kanali, cevi za ogrevanje in hlajenje): obhod nad ali pod potjo na strani, kjer zadene, dvig ali spust celotne poti, premik vstran, sploščitev pravokotnega kanala z enako površino.
- **Vodovod** (voda, odtoki, plin, požar): enako, razen da se gravitacijskega odtoka nikoli ne obide; lahko se premakne le kot celota, ob ohranjenem padcu.
- **Elektrika** (kabelski nosilci in cevi): enako; nosilec mora imeti nad seboj 150 mm prostora za polaganje kablov.
- **Konstrukcija**: premik stebra (do 300 mm) ali odprtine v rebru grede ali plošči za pot, ki gre skozi. Vsak konstrukcijski popravek mora odobriti statik.
- **Arhitektura**: tulec v steni za pot, ki gre skozi, ali premik stene, za katero je znano, da ne nosi obtežbe.

## Kaj boste videli

- Popravki, ki kršijo pravilo, so označeni: reža do česa drugega manjša od 25 mm, pod črto svetle višine 2,100 mm, odprtina v rebru večja od 40 % višine grede ali preblizu njenih koncev, greda, ki bi spremenila razpon.
- Popravke, ki jih BimCraft lahko izvede, se uporabijo na modelu: poti, ki ste jih narisali z orodjema Cev in Kanal, ter stebri, ki ste jih narisali. Drugi pišejo **Samo nasvet**: sprejem namesto tega doda zadevo v zavihku Zadeve.

## Dobro je vedeti

- Popravki prihajajo iz vgrajenih pravil v aplikaciji; umetna inteligenca zanje ni uporabljena.
- Če povežete pomočnika z umetno inteligenco (glejte [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants)), lahko prebere kolizije in v odprto podokno doda svoje predloge za eno stroko. Preverijo se na enak način, označeni so z imenom pomočnika, dokler jih ne sprejmete in uporabite, pa se ne spremeni nič.
- Kopija se preveri z okvirji okoli vsakega elementa in vsakega dela poti, zato lahko nagnjena pot pokaže kolizijo, ki je preverjanje kolizij ne bi. Po uporabi zaženite preverjanje kolizij znova: to je zadnja beseda.
- Omejitve (kako daleč se pot lahko premakne, kako visoko se lahko obhod dvigne, reža) so privzete vrednosti, zapisane v podoknu.

## Naslednje

- [Zadeve in datoteke BCF](topic:issues-bcf)
- [Risanje poti cevi in kanalov](topic:pipes-and-ducts)
