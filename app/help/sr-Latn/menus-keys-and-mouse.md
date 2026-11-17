---
title: Meniji, tasteri i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dodelite svakoj komandi sopstveni taster, premestite komande između menija i podesite šta točkić i svako dugme miša rade.
keywords: stil menija, meniji, traka menija, traka sa karticama, komandna linija, prečice na tastaturi, tasteri, prilagodi, promena tastera, miš, točkić, obrni, smer zumiranja, srednje dugme, pomeranje pogleda, orbita, dvoslovni tasteri, izvoz, uvoz, prebacivanje, poznato
from: a424e836
---

BimCraft-ove komande su iste bez obzira na to kako do njih dođete. **Stil menija** samo određuje gde se komande nalaze na ekranu, kako se zovu i kojim tasterima se pokreću, pa možete zadržati navike koje već imate. Izaberite ga u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Meniji, tasteri i miš}}; promena je odmah vidljiva, a ovaj pregledač je pamti.

## Pet stilova

| Stil | Šta dobijate |
|---|---|
| {{ui:CadCraft}} | BimCraft-ova sopstvena traka i tasteri ({{key:W}} zid, {{key:D}} vrata, {{key:N}} prozor, {{key:X}} presek, {{key:F}} uklopi u prikaz). Početak. |
| {{ui:Home design}} | Traka menija (Datoteka, Uređivanje, Verzija, Biblioteka, 3D, CAD, Alatke, Prikaz) iznad reda alata za zgradu, onako kako ih raspoređuju programi za projektovanje stambenih zgrada. Isti jednoslovni tasteri, plus {{key:Mod+L}} za biblioteku, {{key:F9}} za 3D prikaz, {{key:F10}} za osnovu i {{key:F11}} za oba. |
| {{ui:BIM ribbon}} | Kartice sa velikim dugmadima (Arhitektura, Umetanje, Napomene, Izmena, Prikaz, Izlaz) sa menijem Datoteka i brzim dugmadima desno. Dvoslovni tasteri: {{key:W}} pa {{key:A}} za zid, {{key:D}} {{key:R}} vrata, {{key:W}} {{key:N}} prozor, {{key:S}} {{key:C}} presek, {{key:Z}} {{key:F}} uklopi u prikaz. Srednje dugme pomera pogled; {{key:Shift}} i srednje dugme vrte orbitu. |
| {{ui:Drafting classic}} | Mala traka i komandna linija, za one koji kucaju komande: WALL, DOOR, WINDOW, ROOF, U (opozovi), ZOOM, SECTION, PLOT, INSERT, HELP. Počnite kucati bilo gde i slova idu u komandnu liniju; {{key:Enter}} pokreće, {{key:Enter}} bez unosa ponavlja poslednju komandu, {{key:Esc}} je briše. |
| {{ui:Viewer}} | Za otvaranje i proveru modela, a ne za crtanje: meniji {{ui:Datoteka}}, {{ui:Prikaz}}, {{ui:Prikaži}}, {{ui:Proveri}} i {{ui:Uređivanje}} iznad reda alata za pregled (uklopi, odozgo, spreda, sa strane, presek, meri, sakrij, izoluj, providnost, prikaži sve, šetnja). Alati za zgradu čekaju u meniju {{ui:Model}} na kraju. Isti tasteri kao kod BimCraft-ovog sopstvenog stila. |

Meniji i trake se pojavljuju kad otvorite model ili počnete novu zgradu; pre toga, levi panel otvara datoteke i pokreće zgrade.

:::tip
Taster koji pripada BimCraft-ovom sopstvenom rasporedu, a ne stilu koji ste izabrali, ne radi ništa, a statusna linija kaže gde je otišla njegova komanda („U BIM traci, Presek je SC“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje, a alat koji radi zadržava svoje tastere: {{key:R}} i {{key:Tab}} dok postavljate, {{key:W}} {{key:A}} {{key:S}} {{key:D}} dok šetate, {{key:H}} uz alate za vrata i prozor, brojevi dok unosite dužinu.
:::

## Prilagodite ga

1. Izaberite stil koji vam je najbliži, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tasteri i meniji}} pronađite komandu (polje za pretragu pomaže). Kliknite {{ui:Dodaj taster}} i pritisnite taster, ili dva tastera zaredom za dvoslovni taster. Kliknite taster da ga uklonite.
3. Uz traku menija ili traku sa karticama, {{ui:Gde se nalazi}} premešta komandu u drugi meni ili panel, ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesite točkić, dugmad koja pomeraju plan i šta svako dugme radi u 3D prikazima.
5. Dajte mu ime i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu kopiju („Moj kućni dizajn“); ugrađeni se nikad ne menja. Taster dodeljen dvema komandama, ili onaj koji bi se izvršio pre nego što se dvoslovni taster može ukucati, prikazuje se crveno i mora se popraviti pre čuvanja.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početak) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Štipanje na tačpedu uvek uvećava ili smanjuje u smeru kretanja prstiju.
- **Pomeranje plana i crteža pomoću**: bilo kog od levog, srednjeg i desnog dugmeta. {{key:Space}} i prevlačenje takođe pomeraju; prevlačenje levim dugmetom pomera samo tamo gde klik ne bi ništa izabrao ili nacrtao.
- **Prevlačenje u 3D prikazima**: {{ui:Svaki prikaz zasebno}} zadržava BimCraft-ova dugmad (levo vrti orbitu, desno pomera). Ili podesite svako dugme na orbitu, pomeranje, zumiranje ili ništa; {{key:Shift}} uz dugme menja orbitu i pomeranje. Klik bez prevlačenja i dalje bira.

## Ponesite ga sa sobom

{{ui:Izvezi}} čuva stil u upotrebi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da upućuje samo na BimCraft-ove sopstvene komande: sve ostalo u njoj (komanda koju ova verzija nema, taster koji ovde ne radi) se izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan vaš.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena traka alata, traka menija, traka sa karticama ili Klasični crtež; {{ui:Pregledač}} je samo BimCraft-ov i nema odgovarajući stil drugde), sa izmenama koje ste napravili u svakoj aplikaciji; aplikacija bez odgovarajućeg stila zadržava svoj. Izbor drugog stila u jednoj aplikaciji menja samo tu aplikaciju.
:::

Povezano: [Tastatura i miš](topic:keyboard) · [Podešavanja BimCraft-a](topic:settings) · [Dolazak iz drugih BIM i programa za crtanje](topic:coming-from)
