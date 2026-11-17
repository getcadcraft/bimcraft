---
title: Risanje sten
summary: Narišite stene na tlorisu nivoja tako, da kliknete njihove vogale ali vpišete dolžine; vogali se sami povežejo, stene pa se shranijo kot IFC.
keywords: ukrivljena, lok, lokacijska črta, poravnava, stena, stene, risanje, tloris, načrt, prostor, vogal, povezava, tip stene, 2x6, 2x4, cmu, beton, višina, nivo, nivoji, etaža, vpisana dolžina, ortogonalno, lovljenje
from: 8269cd4b
---

## Kaj boste naredili

Narišite stene stavbe na tlorisu vsakega nivoja. Kliknite, kje se stena začne, nato vsak vogal; BimCraft vogale poveže sam, vsaki steni doda njene plasti (zunanja obloga, opaž, stojine, mavčna plošča …) in jo dvigne do nivoja nad njo. Pogled 3D prikazuje stene sproti, med risanjem.

## Odprite tloris

1. Začnite novo stavbo ([Začnite novo stavbo](topic:start-a-new-building)) ali odprite model IFC.
2. Na orodni vrstici kliknite {{ui:Risanje}}. Odpre se nova stavba, ki je že vklopljena.
3. Tloris nivoja je prikazan na levi, pogled 3D pa na desni. Nivo izberite v seznamu na vrhu tlorisa ali z okroglim gumbom ob njem v podoknu **Nivoji**.
4. {{ui:Tloris}}, {{ui:Razdeli}} in {{ui:3D}} so orodja v vrstici {{ui:Pogled}} na orodni vrstici (ukazi PLAN, SPLIT in tipke delujejo kot prej). {{ui:Tloris}} prikaže samo tloris, {{ui:Razdeli}} oba pogleda, {{ui:3D}} pa zapre tloris. Ko je okno ozko (ali je velikost vmesnika velika), {{ui:Razdeli}} postavi tloris nad pogled 3D namesto ob njem.

Tloris prereže nivo 4'-0" (1200 mm) nad njegovo tlemi, kot to naredi tloris etaže. Za povečavo se pomikajte s kolesom miške; za pomik povlecite s srednjim ali desnim gumbom (ali držite {{key:Space}} in povlecite). Če je vklopljen {{ui:Izberi}}, pomik omogoča tudi navaden vlek. {{key:F}}, ko je kazalec nad tlorisom, ga prilagodi.

## Narišite sobo

1. Kliknite {{ui:Zid}} (ali pritisnite {{key:W}}).
2. V prvem seznamu izberite tip stene, na primer **Zunanja 2×6** ali **Notranja 2×4**.
3. Izberite višino: **Do nivoja nad njim** (stena sledi, če se ta nivo premakne), **Do** višjega nivoja za steno, ki poteka čez več nivojev (stopniščna dvorana, dvojno višja soba, visok zabat), ali **Fiksna višina** in jo vpišite. Taka stena pripada nivoju, na katerem ste jo narisali; tlorisi nivojev, skozi katere poteka, jo prikazujejo svetlejše, sobe ob njej se zaprejo, z njih pa lahko kliknete vrata in okna vanjo (vrata stojijo na tleh tega nivoja). Če želite premakniti ali oblikovati samo steno, pojdite na nivo, na katerem se začne.
4. Kliknite, kje se prva stena začne.
5. Kliknite vsak vogal. Vsak klik ustvari steno; naslednja se začne tam, kjer se je prejšnja končala. Dolžina in kot sta prikazana ob kazalcu.
6. Ponovno kliknite prvo točko, da zaprete sobo. Vrstica stanja pove, koliko sten ima soba, pri načinu središčnice pa vsaka stena dobi svojo zunanjo plast na zunanji strani sobe.
7. Pritisnite {{key:Esc}} (ali desno kliknite, ali dvakrat kliknite), da prenehate brez zaprtja.

Vogali se povežejo sami: dve steni se stakneta s poševnim spojem, stena, ki se konča ob drugi, se ustavi ob njeni površini (T-spoj), tri ali več sten v eni točki pa si delijo vogal. Stene, ki se križajo, ostanejo, kakršne so.

Celotno sobo naenkrat: odprite {{ui:Oblike}} za pravokotnik, zasukan pravokotnik, mnogokotnik, loke, stene na izbranih črtah ali okoli obrisa (glejte [Oblike sten, razdelitev, odmik, raztegovanje in zaklepanje](topic:wall-tools)).

## Izberite referenco risanja

Pred prvim klikom izberite **Središčnica**, **Notranja ploskev** ali **Zunanja ploskev**. Če je izbrana ploskev, vaši kliki in vpisane dolžine opisujejo to ploskev; BimCraft središčnico stene zamakne za polovico skupne debeline in poveže zaporedne vogale. Izberite **Zunaj levo** ali **Zunaj desno** glede na smer risanja. Pri zaprtem obrisu, narisanem v nasprotni smeri urnega kazalca, je zunaj desno; v smeri urnega kazalca pa levo. Pri **Notranja ploskev** je telo stene na zunanji strani vaše črte, pri **Zunanja ploskev** pa na drugi strani. Risanje po ploskvah ohrani izbrano zunanjo stran, ko zaprete zanko. Na središčnici stene, ki ne zapirajo sobe, dobijo zunanjo stran, ki ste jo izbrali; zapiranje sobe pa vsaki steni samodejno nastavi zunanjo stran na zunanjo stran sobe, ne glede na to, v katero smer ste risali.

Sprememba tipa stene, reference ali zunanje strani konča trenutno verigo. Blizu obratnega vogala se dolgi poševni spoji omejijo, tako da pustijo ravne konce.

Med risanjem se končna točka čez prazen prostor lahko poravna vodoravno ali navpično s končno točko stene ali s prejšnjim vogalom. Črtkana vodilna črta povezuje to točko s pritrjenim kazalcem. {{key:Shift}} ohrani smer risanja pravokotno; poravnava se nato ustavi vzdolž te smeri. Bližnje končne točke, sredine in presečišča sten imajo prednost pred oddaljeno poravnavo.

## Lokacijska črta

Pri **Referenca**, nastavljeni na **Zunanja ploskev** ali **Notranja ploskev**, stena to ploskev ohrani kot svojo lokacijsko črto. Če stena pozneje postane debelejša ali se njena zunanja stran obrne, ta ploskev ostane na mestu, stena pa raste ali se obrne okoli nje. Ravna stena, ki se ob njej stakne v vogalu, sledi, zato se vogal še vedno zapre. Lokacijsko črto lahko pozneje spremenite v podoknu **Lastnosti**: glejte [Spreminjanje stene, vrat ali okna](topic:change-a-wall-or-door).

## Narišite ukrivljeno steno

1. Kliknite {{ui:Zid}} in nato v seznamu **Oblika** v vrstici z možnostmi izberite **Ukrivljena**.
2. Kliknite, kje se stena začne, nato, kje se konča.
3. Kliknite točko na njenem loku. Ali vpišite višino loka in pritisnite {{key:Enter}}.
4. Veriga se nadaljuje od konca stene. Za konec pritisnite {{key:Esc}}.

Ukrivljena stena se na koncih poveže s stenami (delujeta vogalni in T-spoji), ustvarja sobe in drži vrata ter okna vzdolž svojega loka. Ostanejo ravne enote, pravokotne na steno na sredini, njihova razdalja pa se meri vzdolž loka. Stena se lahko zavije največ za tri četrtine kroga. Pripenja se na svoja konca in na sredino svojega loka.

Za ukrivljene stene še ni izdelano: {{ui:Prirezi / podaljšaj}} in {{ui:Vogal}}, ogrodje, samodejne kote na tlorisu in pripenjanje vzdolž loka. Glejte [Kaj še ni izdelano](topic:not-built-yet).

## Vpišite dolžino namesto klikanja

Po prvem kliku vpišite in pritisnite {{key:Enter}}:

| Vpis | Nariše |
|---|---|
| `12'6"` ali `3810` | steno te dolžine v smeri, ki jo kaže kazalec |
| `12'6"<90` | to dolžino pod tem kotom (stopinje, v nasprotni smeri urnega kazalca od desne) |
| `@3000,0` | do točke, ki je toliko oddaljena od zadnje, vodoravno in navzgor |
| `1200,3400` | do te točke na tlorisu |

Če vpišete število, medtem ko je orodje Zid vklopljeno, se vpis takoj vnese v polje {{ui:Dolžina}}. V čevljih in palcih je navadno število palec; v milimetrih je milimeter. Enoto lahko vedno vpišete: `3.5 m`, `10 ft`, `6 1/2"`.

## Lovljenje

- Končne točke sten, njihovi vogali ploskev in sredine sten se pripnejo, ko je kazalec blizu njih (kvadrat, trikotnik).
- Kazalec se pripne na središčno črto stene ali na katero koli od ploskev (križec).
- Od zadnje točke smer ostane vsakih 15°, kadar je blizu; držite {{key:Shift}}, da ostane pri 0°, 90°, 180° ali 270°.
- Proste smeri zaokrožijo dolžino na 1/2" (ali 10 mm).

## Spreminjanje, razveljavitev, brisanje

- Vsaka stena je en korak v {{ui:Spremembe}}: {{ui:Razveljavi}} in {{ui:Uveljavi}} stene vzameta nazaj in jih vrneta.
- Ko je vklopljen {{ui:Izberi}}, kliknite steno na tlorisu, da jo izberete; pogled 3D in **Lastnosti** sledita izbiri. {{key:Delete}} izbriše izbrane stene, stene, ki so se nanje stikale, pa se spet očistijo.

## Nivoji

Podokno **Nivoji** navede vsak nivo z njegovo koto in višino.

- Vpišite novo ime, koto ali višino in pritisnite {{key:Enter}}. Če spremenite višino (ali koto) nivoja, se nivoji nad njim premaknejo za enako vrednost, stene, ki segajo do nivoja, pa sledijo.
- {{ui:Dodaj nivo na vrh}} doda nivo nad najvišjim, enako visok.
- {{ui:Dodaj nivo spodaj}} doda nivo pod najnižjim (klet), enako visok kot ta: njegova kota je negativna, če je najnižji nivo na 0, drugi nivoji pa se ne premaknejo. {{ui:Razveljavi}} ga odstrani.
- {{ui:Kopiraj ta nivo …}} znova nariše, kar je na nivoju, ki ga gledate, na drug nivo ali na nov nivo na vrhu: njegove stene z vrati in okni, tla in stropove (ne strehe). Stene, ki so segale do nivoja nad njim, segajo do nivoja nad novim; sobe se pojavijo same. En {{ui:Razveljavi}} vse to vrne nazaj. Če drugi nivo že ima stene, se kopija doda k njim.
- {{ui:Enote}} na orodni vrstici izbere enote (čevlji in palci, palci, decimalni čevlji, milimetri, centimetri ali metri) za vse, kar orodja za risanje prikazujejo in berejo.

## Shranjevanje

Kliknite {{ui:Shrani kot IFC}}. Vsaka stena je stena IFC s svojo središčnico, sklenjeno obliko, tipom in plastmi, `Pset_WallCommon` ter osnovnimi količinami (dolžina, višina, površine in prostornine), zato jo odprejo drugi programi BIM in jo lahko uvrstijo v razpredelnico.

## Dobro je vedeti

- Stene se rišejo na njihovi središčni črti. Debelina izhaja iz tipa stene.
- Tloris prikazuje stene, narisane tukaj, polnjene, vse drugo (elementi knjižnice, modeli iz drugih programov), ki jih prereže ista ravnina, pa s tankimi črtami tega, kar leži pod prerezom.
- Stene, ki jih naredijo drugi programi, so na tlorisu vidne, vendar jih s temi orodji še ni mogoče spreminjati.
