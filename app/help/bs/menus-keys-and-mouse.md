---
title: Meniji, tipke i miš
summary: Odaberi stil menija koji odgovara načinu na koji već radiš, dodijeli bilo kojoj komandi vlastitu tipku, premjesti komande između menija i podesi šta rade točkić i svako dugme miša.
keywords: stil menija, meniji, traka menija, traka, komandna linija, prečice na tastaturi, tipke, prilagodi, ponovno dodijeli, miš, točkić, obrni, smjer zumiranja, srednje dugme, pomjeri pogled, orbitiraj, dvoslovne tipke, izvezi, uvezi, prebacivanje, poznato
from: a424e836
---

Komande u BimCraftu su iste bez obzira na to kako do njih dođeš. **Stil menija** samo određuje gdje se nalaze na ekranu, kako se zovu i kojim tipkama se pokreću, pa možeš zadržati navike koje već imaš. Izaberi ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah vidljiva, a ovaj pregledač je pamti.

## Pet stilova

| Stil | Šta dobijaš |
|---|---|
| {{ui:CadCraft}} | BimCraftov vlastiti alatni okvir i tipke ({{key:W}} zid, {{key:D}} vrata, {{key:N}} prozor, {{key:X}} presjek, {{key:F}} uklopi). Početak. |
| {{ui:Home design}} | Traka menija (Datoteka, Uredi, Verzija, Biblioteka, 3D, CAD, Alati, Pogled) iznad reda alata za zgradu, kako ih razmještaju programi za stambeni dizajn. Iste jednoslovne tipke, plus {{key:Mod+L}} za biblioteku, {{key:F9}} za 3D pogled, {{key:F10}} za osnovu i {{key:F11}} za oba. |
| {{ui:BIM ribbon}} | Kartice velikih dugmadi (Arhitektura, Umetanje, Anotacija, Izmjena, Pogled, Izlaz) s menijem Datoteka i brzim dugmadima s desne strane. Dvoslovne tipke: {{key:W}} pa {{key:A}} za zid, {{key:D}} {{key:R}} vrata, {{key:W}} {{key:N}} prozor, {{key:S}} {{key:C}} presjek, {{key:Z}} {{key:F}} uklopi. Srednje dugme pomjera pogled; {{key:Shift}} i srednje dugme orbitiraju. |
| {{ui:Drafting classic}} | Mala traka i komandna linija, za one koji kucaju komande: WALL, DOOR, WINDOW, ROOF, U (poništi), ZOOM, SECTION, PLOT, INSERT, HELP. Počni kucati bilo gdje i slova idu na komandnu liniju; {{key:Enter}} pokreće, {{key:Enter}} bez unosa ponavlja posljednju komandu, {{key:Esc}} je briše. |
| {{ui:Viewer}} | Za otvaranje i provjeru modela, a ne za crtanje: meniji {{ui:File}}, {{ui:View}}, {{ui:Show}}, {{ui:Check}} i {{ui:Edit}} iznad reda alata za pregled (uklopi, gore, sprijeda, sa strane, presjek, mjeri, sakrij, izoliraj, providno, prikaži sve, šetnja). Alati za zgradu čekaju u meniju {{ui:Model}} na kraju. Iste tipke kao u BimCraftovom vlastitom stilu. |

Meniji i trake se pokazuju kad je model otvoren ili kad započneš novu zgradu; prije toga panel lijevo otvara datoteke i pokreće zgrade.

:::tip
Tipka koja pripada BimCraftovom vlastitom rasporedu, a ne stilu koji si izabrao, ne radi ništa, a statusna linija kaže gdje je njena komanda otišla („U BIM traci, Presjek je SC”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, a alat koji radi zadržava vlastite tipke: {{key:R}} i {{key:Tab}} dok postavljaš, {{key:W}} {{key:A}} {{key:S}} {{key:D}} dok hodaš, {{key:H}} s alatima za vrata i prozor, brojevi dok kucaš dužinu.
:::

## Prilagodi po svojoj mjeri

1. Izaberi stil koji je najbliži onome što želiš, pa klikni {{ui:Customize…}}.
2. Na {{ui:Keys and menus}} nađi komandu (pomaže polje za pretragu). {{ui:Add a key}} i pritisni tipku, ili dvije tipke jednu za drugom za dvoslovnu tipku. Klikni tipku da je skineš.
3. Uz traku menija ili traku, {{ui:Where it sits}} premješta komandu u drugi meni ili panel, ili na {{ui:Keys only}}.
4. Na {{ui:Mouse}} podesi točkić, dugmad koja pomjeraju osnovu i šta svako dugme radi u 3D pogledima.
5. Daj mu ime i klikni {{ui:Save}}.

Spašavanje ugrađenog stila pravi tvoju vlastitu kopiju („Moj kućni dizajn”); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema komandama, ili ona koja bi se izvršila prije nego što se dvoslovna tipka može ukucati, prikazuje se crveno i mora se popraviti prije spašavanja.

## Miš

- **Točkić**: {{ui:Scroll up zooms in}} (početak) ili {{ui:Scroll up zooms out}}, i koliko brzo. Štipanje na touchpadu uvijek zumira u smjeru kojim se kreću prsti.
- **Pomjeri osnovu i crteže pomoću**: bilo kojeg od lijevog, srednjeg i desnog dugmeta. {{key:Space}} i prevlačenje također pomjeraju; prevlačenje lijevim dugmetom pomjera samo tamo gdje klik ne bi ništa izabrao ili nacrtao.
- **Prevlačenje u 3D pogledima**: {{ui:Each view's own}} zadržava BimCraftova dugmad (lijevo orbitira, desno pomjera). Ili podesi svako dugme na orbitiranje, pomjeranje, zumiranje ili ništa; {{key:Shift}} uz dugme mijenja orbitiranje i pomjeranje. Klik bez prevlačenja i dalje bira.

## Ponesi sa sobom

{{ui:Export}} sprema stil u upotrebi kao mali fajl `.ccinput.json`; {{ui:Import…}} dodaje jedan, s drugog računara ili od kolege. Uvezeni fajl može upućivati samo na BimCraftove vlastite komande: sve drugo u njemu (komanda koju ova verzija nema, tipka koja ovdje ne radi) se izostavlja i broji u statusnoj liniji. {{ui:Delete this style}} uklanja jedan tvoj vlastiti.

:::note
Ove postavke ostaju u ovom pregledaču. {{ui:Use this style in every app}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (njen vlastiti alatni okvir, traka menija, traka ili Drafting classic; {{ui:Viewer}} je samo BimCraftov i nema odgovarajući u drugim aplikacijama), s promjenama koje si napravio u svakoj aplikaciji; aplikacija bez odgovarajućeg stila zadržava svoj. Izbor drugog stila u jednoj aplikaciji mijenja samo tu aplikaciju.
:::

Povezano: [Tastatura i miš](topic:keyboard) · [Postavke BimCraft](topic:settings) · [Prelazak s drugih BIM i programa za crtanje](topic:coming-from)
