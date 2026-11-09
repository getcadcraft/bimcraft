---
title: Zaslon BimCraft
summary: Ogled vsake vrstice, okna in gumba po njegovem imenu na zaslonu ter kako se zaslon spremeni za vsako vrsto datoteke.
keywords: zaslon, postavitev, okna, orodna vrstica, vmesnik, ui, ogled, okno lastnosti, brskalnik, vrstica aplikacije
from: 2eb01ec2
---

Zaslon BimCraft ima vrstico čez vrh in pod njo tri območja: okno na levi, oder na sredini in okno {{ui:Lastnosti}} na desni. Kaj se pojavi v vsakem območju, je odvisno od tega, kar ste odprli: model IFC, datoteko projekta ali družine, risbo ali mapo.

## Vrstica aplikacije

Tanka vrstica čez vrh pripada spletnemu mestu CadCraft, ne samemu BimCraftu. Od leve proti desni:

- Znak CadCraft: pelje na domačo stran CadCraft.
- Ime aplikacije in meni različic. V notranji izdaji pokaže, katero različico zaganjate, in omogoča preklop na izdano različico.
- {{ui:O programu BimCraft}}: stran aplikacije na spletnem mestu.
- {{ui:Nastavitve}}: lastne nastavitve BimCraft in tiste, ki jih delijo vse aplikacije. Glejte [Nastavitve BimCraft](topic:settings).
- {{ui:Celozaslonski način}}: preklaplja načine zaslona. Glejte [Načini zaslona](topic:workspace#screen-modes) spodaj.
- {{ui:Papir}} in {{ui:Model}}: svetla in temna tema. Pogled 3D in 2D risbe sledita temi, ki jo izberete.

## Levo okno

Levo okno se vedno začne z **Odprite datoteko ali mapo**:

- Območje za spuščanje, {{ui:Izberi datoteko ali sem spustite datoteko ali mapo}}. Kliknite ga, da izberete eno datoteko, ali spustite datoteko ali mapo nanj (ali kamor koli na strani).
- {{ui:Odpri mapo}}: izberite celotno mapo projekta. Glejte [Odpiranje celotne mape projekta](topic:open-project-folder).
- {{ui:Nedavne mape}}: prikaže se v Chromu in Edgeu, potem ko odprete mapo z izbirnikom map ali s spuščanjem. Kliknite {{ui:Ponovno odpri}} in ime mape, da jo znova odprete, ali majhen × , da jo pozabite.

Pod njim se odseki prikažejo, kadar veljajo:

| Odsek | Kdaj se prikaže | Kaj je v njem |
|---|---|---|
| {{ui:Spremembe}} | Odprt je model IFC | Vaša neshranjena urejanja, najnovejša najprej, z {{ui:Razveljavi}} in {{ui:Shrani kot IFC}} |
| {{ui:Datoteka}} | Odprt je model ali kartica datoteke | Podatki o datoteki: velikost, shema ali različica, projekt, avtor, število elementov |
| {{ui:Risba}} | Odprta je DWG ali DXF | Format, enote, števila elementov in slojev, listi, povezane risbe, oprema |
| {{ui:Mapa}} | Odprta je mapa | Števila datotek in modelov, velikost, najdene težave |
| {{ui:Nazaj na mapo}} | Datoteko ste odprli iz mape | Vrne na poročilo mape |
| {{ui:Sloji}} | Odprta je risba | Potrditveno polje za vsak sloj, z {{ui:Vsi vklopljeni}} in {{ui:Vsi izklopljeni}} |
| {{ui:Etaže}} | Odprt je model IFC | Potrditveno polje za vsako etažo, najvišja najprej |
| {{ui:Elementi}} | Odprt je model IFC | Koliko elementov vsake vrste model vsebuje (30 najpogostejših) |

## Oder

Sredina zaslona prikazuje odprto datoteko.

- **Prazno**: „Odprite model stavbe.“ z {{ui:Izberi datoteko}} in {{ui:Odpri mapo}} ter kratek opis vsakega formata.
- **Model IFC**: pogled 3D z orodno vrstico na vrhu v imenovanih skupinah, podobno kot v risalni aplikaciji CadCraft; ikona vsakega orodja je nad njegovim imenom: {{ui:Pogled}} ({{ui:Prilagodi}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Bok}}, {{ui:Robovi}}, {{ui:Prostori}}); {{ui:Urejanje}} ({{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}} in {{ui:Več}}, glejte [Kopiranje, prilepljanje in podvajanje elementov knjižnice](topic:copy-paste)); {{ui:Model}} ({{ui:Enote}} in {{ui:Risanje}}); {{ui:Knjižnica}} ({{ui:Knjižnica}}, {{ui:Oprema}}, {{ui:Posodobitve}}, {{ui:Zasluge}}); {{ui:Pregled}} ({{ui:Pokaži}}, {{ui:Prerez}}, {{ui:Sprehod}}, {{ui:Meri}}; glejte [Rez modela IFC z ravnino reza](topic:section-plane)); in {{ui:Izhod}} (upodobitev, pogled v živo, VR, izvozi, barvanje in shranjeni pogledi). Ko je {{ui:Risanje}} vklopljeno, ima vrstica Risanje pod njo enak videz: {{ui:Pogled}} (nivo in vrsta tlorisa), {{ui:Risanje}}, {{ui:Urejanje}} in {{ui:Knjižnica}}. Kocka pogleda je v spodnjem desnem kotu. Glejte [Odpiranje modela IFC in ogled v 3D](topic:open-ifc-model). {{ui:Nastavitve}}, {{ui:Splošno}} določa, ali so ikone, napisi ali oboje na teh gumbih, prikaže ali skrije imena skupin, z desno tipko kliknite orodno vrstico, da uredite njena orodja in skupine. V nizkem oknu orodna vrstica pod ikonami izpusti imena.
- **Datoteka projekta ali družine**: kartica datoteke s predogledno sliko, podatki o projektu in povezanimi datotekami. Glejte [Branje datoteke projekta ali družine](topic:read-rvt-file).
- **DWG ali DXF**: vrsta zavihkov ({{ui:Model}}, nato po en za vsak list, {{ui:Oprema}}, kadar ima risba označeno opremo, {{ui:3D}}, {{ui:Prilagodi}} in {{ui:Pogled tiska}}), risba ter žive koordinate X in Y v kotu. Glejte [Ogled risbe DWG ali DXF](topic:view-dwg) in [Ogled risbe DWG ali DXF v 3D](topic:dwg-in-3d).
- **Mapa**: poročilo mape s poljem {{ui:Začnite tukaj}} in tabelami modelov, povezav, modelov IFC in risb. Glejte [Odpiranje celotne mape projekta](topic:open-project-folder).

**Vrstica stanja** na dnu odra pove, kaj BimCraft počne („Branje modela…“, „Gradnja geometrije: 1200 od 5400 elementov“), in kaj je šlo narobe, rdeče, ko se nekaj ne uspe. Sporočila o uspehu po nekaj sekundah zbledijo.

## Okno Lastnosti

Desno okno prikazuje:

- Za model IFC: element, na katerega ste kliknili, z imenom, vrsto, oznako, GlobalId in vsakim naborom lastnosti. Vrednosti, ki jih lahko spremenite, izgledajo kot gumbi. Glejte [Polja okna Lastnosti](topic:properties-panel).
- Za risbo: kako se premikati, povezane risbe in slike risbe ter ali je bila vsaka najdena, in seznam, kar je **še ni narisano**.
- Za kartico datoteke ali mapo: kratek opis, kaj odpreti naslednje.

## Na majhnem zaslonu

Ko je okno ožje od zaslona prenosnika, BimCraft zloži svoja območja: oder zgoraj, pod njim okna. Pomaknite stran, da pridete do oken. Na telefonu tvorijo en stolpec; na tabličnem računalniku dva.

## Načini zaslona

Gumb {{ui:Celozaslonski način}} v vrstici aplikacije ali {{key:Ctrl+Shift+F}} na vseh platformah preklaplja med tremi načini:

1. Normalni.
2. Celozaslonski, z vidnimi vrsticami.
3. Celozaslonski z skrito vrstico aplikacije. Premaknite kazalec na zgornji rob ali tapnite tam, da se vrne.

Pritisnite {{key:Esc}}, da se vrnete v normalni način. Brskalniki brez podpore za celozaslonski način (na primer na iPhonu) preklapljajo le med normalnim in skritim prikazom vrstic.

## Povezano

- [Tipke in miška](topic:keyboard)
- [Datoteke, ki jih BimCraft odpre in shrani](topic:files)
