---
title: Crtanje zidova
summary: Crtajte zidove na tlocrtu razine klikom na njihove kutove ili upisivanjem duljina; kutovi se spajaju sami, a zidovi se spremaju kao IFC.
keywords: zakrivljeno, luk, linija lokacije, poravnanje, zid, zidovi, crtanje, tlocrt, tlocrt etaže, prostorija, kut, spajanje, tip zida, 2x6, 2x4, cmu, beton, visina, razina, razine, etaža, upisana duljina, ortogonalno, hvatanje
from: 8269cd4b
---

## Što ćete raditi

Crtajte zidove zgrade na tlocrtu svake razine. Kliknite mjesto gdje zid počinje, a zatim svaki kut. BimCraft spaja kutove za vas, daje svakom zidu njegove slojeve (vanjska obloga, podložna obloga, stupići, gips-karton …) i diže ga do razine iznad. Prikaz 3D pokazuje zidove dok crtate.

## Otvorite tlocrt

1. Započnite novu zgradu ([Započnite novu zgradu](topic:start-a-new-building)) ili otvorite IFC model.
2. Kliknite {{ui:Crtanje}} na alatnoj traci. Otvara se nova zgrada, a crtanje je već uključeno.
3. Tlocrt razine prikazuje se lijevo, a prikaz 3D desno. Odaberite razinu u popisu na vrhu tlocrta ili okruglim gumbom pokraj njega na ploči **Razine**.
4. {{ui:Tlocrt}}, {{ui:Podijeli}} i {{ui:3D}} alati su u retku {{ui:Pogled}} alatne trake (naredbe PLAN, SPLIT i tipke rade kao prije). Upotrijebite {{ui:Tlocrt}} za sam tlocrt, {{ui:Podijeli}} za oba prikaza, a {{ui:3D}} za zatvaranje tlocrta. Kad je prozor uzak (ili je veličina sučelja velika), {{ui:Podijeli}} stavlja tlocrt iznad prikaza 3D umjesto pokraj njega.

Tlocrt presijeca razinu na visini 4'-0" (1200 mm) iznad poda, kao što to čini tlocrt etaže. Pomičite kotačić za zumiranje, povucite srednjom ili desnom tipkom (ili držite {{key:Space}} i povucite) za pomicanje prikaza; uz uključeno {{ui:Odaberi}} obično povlačenje također pomiče prikaz. {{key:F}} s pokazivačem iznad tlocrta prilagođava ga prikazu.

## Crtanje prostorije

1. Kliknite {{ui:Zid}} (ili pritisnite {{key:W}}).
2. U prvom popisu odaberite tip zida, na primjer **Vanjski 2×6** ili **Unutarnji 2×4**.
3. Odaberite njegovu visinu: **Do razine iznad** (zid prati tu razinu ako se ona pomakne), **Do** razine više za zid koji prolazi kroz više razina (hodnik stubišta, prostorija dvostruke visine, visoki zabat) ili **Fiksna visina** i upišite je. Takav zid pripada razini na kojoj ste ga nacrtali. Tlocrti razina kroz koje prolazi prikazuju ga svjetlijim, prostorije se tamo naslanjaju na njega, a vrata i prozore možete kliknuti u njega s tih tlocrta (vrata stoje na podu te razine). Za pomicanje ili preoblikovanje samog zida idite na razinu na kojoj on počinje.
4. Kliknite mjesto gdje prvi zid počinje.
5. Kliknite svaki kut. Svaki klik stvara zid, a sljedeći počinje tamo gdje je prethodni završio. Duljina i kut prikazuju se uz pokazivač.
6. Kliknite prvu točku ponovno da zatvorite prostoriju. Statusna traka kaže koliko zidova ima prostorija, a u načinu Središnja linija svaki zid dobiva vanjski sloj na vanjskoj strani prostorije.
7. Pritisnite {{key:Esc}} (ili desnu tipku miša, ili dvaput kliknite) za prekid bez zatvaranja.

Kutovi se spajaju sami: dva zida spajaju se pod kosim rezom (mitra), zid koji završava na drugom staje na njegovoj plohi (T-spoj), a tri ili više zidova u jednoj točki dijele kut. Zidovi koji se križaju ostaju kakvi jesu.

Cijelu prostoriju odjednom: otvorite {{ui:Oblici}} za pravokutnik, zakrenuti pravokutnik, poligon, lukove, zidove na odabranim linijama ili oko obrisa (vidi [Oblici zidova, podjela, odmak, rastezanje i zaključavanje](topic:wall-tools)).

## Odabir referentne točke crtanja

Prije prvog klika odaberite **Središnja linija**, **Unutarnja ploha** ili **Vanjska ploha**. Kad je odabrana ploha, vaši klikovi i upisane duljine opisuju tu plohu; BimCraft pomiče os zida za polovicu ukupne debljine i spaja uzastopne kutove. Odaberite **Vanjska strana lijevo** ili **Vanjska strana desno** u odnosu na smjer crtanja. Za zatvoreni obris nacrtan suprotno smjeru kazaljke na satu vanjska strana je desno; u smjeru kazaljke, lijevo. Uz **Unutarnja ploha** tijelo zida ide na vanjsku stranu vaše linije; uz **Vanjska ploha**, na drugu stranu. Crtanje po plohi zadržava odabranu vanjsku stranu kad zatvorite petlju. Na središnjoj liniji zidovi koji ne zatvaraju prostoriju zadržavaju vanjsku stranu koju ste odabrali. Zatvaranje prostorije samo postavlja vanjsku stranu svakog zida na vanjsku stranu prostorije, bez obzira na smjer kojim ste crtali.

Promjena tipa zida, referentne točke ili vanjske strane prekida trenutačni lanac. Blizu kuta s obrnutim smjerom duge mitre ograničavaju se ostavljanjem ravnih krajeva.

Dok crtate, krajnja točka preko prazne površine može se poravnati vodoravno ili okomito s krajnjom točkom zida ili ranijim kutom. Iscrtkana vodilica spaja tu točku s uhvaćenim pokazivačem. Tipka {{key:Shift}} drži smjer crtanja pravokutnim; poravnanje se tada zaustavlja duž tog smjera. Obližnje krajnje točke, polovišta i sjecišta zidova imaju prednost pred udaljenim poravnanjem.

## Linija lokacije

Kad je **Referenca** postavljena na **Vanjska ploha** ili **Unutarnja ploha**, zid zadržava tu plohu kao svoju liniju lokacije. Kasnije, ako zid postane deblji ili se njegova vanjska strana okrene, ta ploha ostaje na mjestu, a zid raste ili se okreće oko nje. Ravni zid koji se u kutu s njom spaja slijedi je, pa kut ostaje zatvoren. Liniju lokacije možete poslije promijeniti u **Svojstva**: vidi [Promjena zida, vrata ili prozora](topic:change-a-wall-or-door).

## Crtanje zakrivljenog zida

1. Kliknite {{ui:Zid}}, zatim odaberite **Zakrivljeno** u popisu **Oblik** u retku opcija.
2. Kliknite mjesto gdje zid počinje, zatim mjesto gdje završava.
3. Kliknite točku na njegovom luku ili upišite visinu luka i pritisnite {{key:Enter}}.
4. Lanac se nastavlja od kraja zida. Pritisnite {{key:Esc}} za završetak.

Zakrivljeni zid spaja se sa zidovima na svojim krajevima (kutovi i T-spojevi funkcioniraju), stvara prostorije i drži vrata i prozore duž svog luka. Oni ostaju ravne jedinice, okomite na zid na sredini, a njihova udaljenost mjeri se duž luka. Zid se može okrenuti najviše za tri četvrtine kruga. Hvata se za svoje krajeve i za sredinu svog luka.

Za zakrivljene zidove još nije izrađeno: {{ui:Skrati / produži}} i {{ui:Kut}}, uokvirivanje, automatske mjere na tlocrtu i hvatanje duž luka. Vidi [Što još nije izrađeno](topic:not-built-yet).

## Upisivanje duljine umjesto klikanja

Nakon prvog klika upišite i pritisnite {{key:Enter}}:

| Upis | Crta |
|---|---|
| `12'6"` ili `3810` | zid te duljine, u smjeru koji pokazuje pokazivač |
| `12'6"<90` | tu duljinu, pod tim kutom (stupnjevi, suprotno kazaljci na satu od desne strane) |
| `@3000,0` | do točke udaljene toliko od posljednje, preko i gore |
| `1200,3400` | do te točke na tlocrtu |

Upisivanje broja dok je alat Zid uključen ide izravno u okvir {{ui:Duljina}}. U stopama i palcima običan broj znači palce; u milimetrima znači milimetre. Jedinicu uvijek možete upisati: `3.5 m`, `10 ft`, `6 1/2"`.

## Hvatanje

- Krajevi zidova, njihovi kutovi plohe i sredine zidova hvataju se kad je pokazivač blizu njih (kvadrat, trokut).
- Pokazivač se hvata za središnju liniju zida ili bilo koju od ploha (križić).
- Od zadnje točke smjer se drži na svakih 15° kad je blizu; držite {{key:Shift}} da ga zadržite na 0°, 90°, 180° ili 270°.
- Slobodni smjerovi zaokružuju duljinu na 1/2" (ili 10 mm).

## Promjena, poništavanje, brisanje

- Svaki zid je jedan korak u **Promjene**: {{ui:Poništi}} i {{ui:Ponovi}} vraćaju zidove natrag i ponovno ih postavljaju.
- Uz uključeno {{ui:Odaberi}} kliknite zid na tlocrtu da ga odaberete; prikaz 3D i **Svojstva** prate odabir. {{key:Delete}} briše odabrane zidove, a zidovi koje su spajali ponovno se srede.

## Razine

Ploča **Razine** navodi svaku razinu s njezinom kotom i visinom.

- Upišite novi naziv, kotu ili visinu i pritisnite {{key:Enter}}. Promjena visine razine (ili kote) pomiče razine iznad nje za isti iznos, a zidovi koji se dižu do razine slijede je.
- {{ui:Dodaj razinu na vrh}} dodaje razinu iznad najviše, jednako visoku.
- {{ui:Dodaj razinu ispod}} dodaje razinu ispod najniže (podrum), jednako visoku kao ona: kota joj je negativna kad je najniža razina na 0, a nijedna druga razina se ne pomiče. Poništavanje je ponovno uklanja.
- {{ui:Kopiraj ovu razinu…}} ponovno crta ono što je na razini koju gledate, na drugoj razini ili na novoj razini na vrhu: njezine zidove s vratima i prozorima, podove i stropove (ne krovove). Zidovi koji su se dizali do razine iznad dižu se do razine iznad nove. Prostorije se pojavljuju same. Jedno {{ui:Poništi}} vraća sve natrag. Ako druga razina već ima zidove, kopija se dodaje njima.
- {{ui:Jedinice}} na alatnoj traci bira jedinice (stope i palci, palci, decimalne stope, milimetri, centimetri ili metri) za sve što alati prikazuju i čitaju.

## Spremanje

Kliknite {{ui:Spremi kao IFC}}. Svaki zid je IFC zid s njegovom središnjom linijom, spojenim oblikom, tipom i slojevima, `Pset_WallCommon` i osnovnim količinama (duljina, visina, površine i volumeni), tako da ga drugi BIM programi mogu otvoriti i izraditi mu tablicu.

## Dobro je znati

- Zidovi se crtaju na svojoj središnjoj liniji. Debljina dolazi iz tipa zida.
- Tlocrt prikazuje zidove nacrtane ovdje ispunjene, a sve ostalo (stavke knjižnice, modele iz drugih programa) presječeno istom ravninom, s onim što je ispod presjeka prikazano tankim linijama.
- Zidovi nastali u drugim programima prikazuju se na tlocrtu, ali se još ne mogu mijenjati ovim alatima.
