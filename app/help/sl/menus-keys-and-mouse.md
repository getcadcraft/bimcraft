---
title: Meniji, tipke in miška
summary: Izberite slog menijev, ki se ujema z vašim načinom dela, dodelite poljubnemu ukazu lastno tipko, premaknite ukaze med meniji in nastavite, kaj počneta kolesce in vsak gumb miške.
keywords: slog menija, meniji, menijska vrstica, trak, ukazna vrstica, bližnjice na tipkovnici, bližnjične tipke, tipke, prilagodi, preslikaj, ponovno dodeli, miška, kolesce, obrni, smer povečave, srednji gumb, pomik, orbita, dvočrkovne tipke, izvoz, uvoz, preklapljanje, znano
from: a424e836
---

Ukazi v BimCraftu so enaki, ne glede na to, kako do njih pridete. **Slog menijev** določa le, kje so na zaslonu, kako se tam imenujejo in s katerimi tipkami se zaženejo, zato lahko ohranite navade, ki jih imate. Izberete ga v {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Meniji, tipke in miška}}; sprememba začne veljati takoj, ta brskalnik pa si jo zapomni.

## Pet slogov

| Slog | Kaj dobite |
|---|---|
| {{ui:CadCraft}} | BimCraftova lastna orodna vrstica in tipke ({{key:W}} zid, {{key:D}} vrata, {{key:N}} okno, {{key:X}} prerez, {{key:F}} prilagodi). Začetni slog. |
| {{ui:Načrtovanje doma}} | Menijska vrstica (Datoteka, Urejanje, Zgradba, Knjižnica, 3D, CAD, Orodja, Pogled) nad vrsto gradbenih orodij, tako kot so jih razporejeni programi za načrtovanje stanovanjskih hiš. Enake posamične tipke ter {{key:Mod+L}} za knjižnico, {{key:F9}} za 3D pogled, {{key:F10}} za tloris in {{key:F11}} za oba. |
| {{ui:Trak BIM}} | Zavihki velikih gumbov (Arhitektura, Vstavi, Označi, Spremeni, Pogled, Izpis) z menijem Datoteka in hitrimi gumbi na desni. Dvočrkovne tipke: {{key:W}} nato {{key:A}} za zid, {{key:D}} {{key:R}} vrata, {{key:W}} {{key:N}} okno, {{key:S}} {{key:C}} prerez, {{key:Z}} {{key:F}} prilagodi. Srednji gumb pomika; {{key:Shift}} in srednji gumb sta za orbito. |
| {{ui:Klasično risanje}} | Majhen trak in ukazna vrstica za tiste, ki vtipkajo ukaze: WALL, DOOR, WINDOW, ROOF, U (razveljavi), ZOOM, SECTION, PLOT, INSERT, HELP. Začnite tipkati kjerkoli in črke gredo v ukazno vrstico; {{key:Enter}} zažene, {{key:Enter}} na prazno ponovi zadnji ukaz, {{key:Esc}} ga počisti. |
| {{ui:Pregledovalnik}} | Za odpiranje in pregledovanje modelov, ne za risanje: meniji {{ui:Datoteka}}, {{ui:Pogled}}, {{ui:Pokaži}}, {{ui:Preveri}} in {{ui:Urejanje}} nad vrsto orodij za ogled (prilagodi, zgoraj, spredaj, stran, prerez, meri, skrij, izoliraj, prosojno, pokaži vse, sprehod). Gradbena orodja čakajo v meniju {{ui:Model}} na koncu. Enake tipke kot v BimCraftovem lastnem slogu. |

Meniji in trakovi se prikažejo, ko je model odprt ali ko začnete novo stavbo; prej levo podokno odpira datoteke in začenja stavbe.

:::tip
Tipka, ki pripada BimCraftovi lastni postavitvi, ne pa slogu, ki ste ga izbrali, ne naredi ničesar, vrstica stanja pa pove, kam je šel njen ukaz („V Trak BIM, Prerez je SC“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščice vedno ohranijo svoj pomen, teče orodje pa obdrži lastne tipke: {{key:R}} in {{key:Tab}} med postavljanjem, {{key:W}} {{key:A}} {{key:S}} {{key:D}} med sprehodom, {{key:H}} pri orodjih za vrata in okna, številke med vnosom dolžine.
:::

## Prilagodite po svojih željah

1. Izberite slog, ki je najbližje vašim željam, nato kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke in meniji}} poiščite ukaz (pomaga iskalno polje). Kliknite {{ui:Dodaj tipko}} in pritisnite tipko ali dve tipki zaporedoma za dvočrkovno tipko. Kliknite tipko, da jo odstranite.
3. Pri menijski vrstici ali traku {{ui:Kje je}} premakne ukaz v drug meni ali podokno ali na {{ui:Samo tipke}}.
4. Na {{ui:Miška}} nastavite kolesce, gumbe, ki pomikajo tloris, in kaj počne vsak gumb v 3D pogledih.
5. Dajte mu ime in kliknite {{ui:Shrani}}.

Shranjevanje vgrajenega sloga ustvari vašo lastno kopijo („Moje načrtovanje doma“); vgrajeni slog se nikoli ne spremeni. Tipka, dodeljena dvema ukazoma, ali tipka, ki bi se sprožila, preden bi lahko vnesli dvočrkovno tipko, je prikazana rdeče in jo je treba popraviti, preden lahko shranite.

## Miška

- **Kolesce miške**: {{ui:Drsenje navzgor poveča}} (začetna nastavitev) ali {{ui:Drsenje navzgor pomanjša}}, ter kako hitro. Ščip na sledilni ploščici vedno povečuje oziroma pomanjšuje v smeri gibanja prstov.
- **Pomik po tlorisu in risbah z**: katerim koli od levega, srednjega ali desnega gumba. {{key:Space}} in vlečenje prav tako pomakneta pogled; vlečenje z levim gumbom pomika samo tam, kjer klik ne bi izbral ali risal.
- **Vlečenje v 3D pogledih**: {{ui:Lastno za vsak pogled}} ohrani gumbe BimCrafta (levi vrti orbito, desni pomika). Ali pa nastavite vsak gumb na orbito, pomik, povečavo ali nič; {{key:Shift}} s tem gumbom zamenja orbito in pomik. Klik brez vlečenja še vedno izbere.

## Vzemite s seboj

{{ui:Izvozi}} shrani uporabljeni slog kot majhno datoteko `.ccinput.json`; {{ui:Uvozi…}} doda eno, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže le na BimCraftove lastne ukaze: vse ostalo v njej (ukaz, ki ga ta različica nima, tipka, ki tu ne deluje) se izpusti in prešteje v vrstici stanja. {{ui:Izbriši ta slog}} odstrani enega od vaših lastnih.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Uporabi ta slog v vseh programih}} pod karticami slogov naredi, da se vsak program odpre v ustreznem slogu (lastna orodna vrstica, menijska vrstica, trak ali Klasično risanje; {{ui:Pregledovalnik}} je samo BimCraftov in nima ustreznika drugod), s spremembami, ki ste jih naredili v vsakem programu. Program brez ustreznega sloga ohrani svojega. Izbira drugega sloga v enem programu spremeni samo ta program.
:::

Sorodno: [Tipkovnica in miška](topic:keyboard) · [Nastavitve BimCrafta](topic:settings) · [Prehod iz drugih programov za BIM in risanje](topic:coming-from)
