---
title: Crtanje zidova
summary: Crtajte zidove na osnovi nivoa klikom na njihove uglove ili unosom dužina; uglovi se spajaju sami, a zidovi se spašavaju kao IFC.
keywords: zakrivljen, luk, linija lokacije, poravnanje, zid, zidovi, crtanje, osnova, tlocrt, prostorija, ugao, spoj, tip zida, 2x6, 2x4, cmu, beton, visina, nivo, nivoi, sprat, unesena dužina, ortogonalno, hvatanje
from: 8269cd4b
---

## Šta ćete raditi

Crtajte zidove zgrade na osnovi svakog nivoa. Kliknite mjesto gdje zid počinje, pa zatim svaki ugao. BimCraft spaja uglove umjesto vas, daje svakom zidu njegove slojeve (obloga, podloga, stubovi, gips-karton …) i podiže ga do nivoa iznad. Prikaz 3D pokazuje zidove dok crtate.

## Otvorite osnovu

1. Započnite novu zgradu ([Započni novu zgradu](topic:start-a-new-building)) ili otvorite IFC model.
2. Kliknite {{ui:Crtanje}} na traci sa alatima. Nova zgrada se otvara s već uključenim crtanjem.
3. Osnova nivoa prikazuje se lijevo, a 3D prikaz desno. Izaberite nivo na listi na vrhu osnove, ili okruglim dugmetom pored nje na panelu **Nivoi**.
4. {{ui:Plan}}, {{ui:Podijeli}} i {{ui:3D}} su alati u redu {{ui:Pogled}} trake sa alatima (komande PLAN, SPLIT i tipke rade kao ranije). Koristite {{ui:Plan}} za samu osnovu, {{ui:Podijeli}} za oba prikaza, a {{ui:3D}} da zatvorite osnovu. Kada je prozor uzak (ili je veličina sučelja velika), {{ui:Podijeli}} stavlja osnovu iznad 3D prikaza umjesto pored njega.

Osnova presijeca nivo na visini 4'-0" (1200 mm) iznad njegovog poda, kao što to radi osnova sprata. Skrolujte za zumiranje, prevucite srednjim ili desnim dugmetom (ili držite {{key:Space}} i prevucite) za pomjeranje pogleda. Kada je {{ui:Odaberi}} uključeno, običan prevlak također pomjera pogled. {{key:F}} sa pokazivačem iznad osnove uklapa osnovu u prozor.

## Nacrtajte prostoriju

1. Kliknite {{ui:Zid}} (ili pritisnite {{key:W}}).
2. Izaberite tip zida na prvoj listi, na primjer **Vanjski 2×6** ili **Unutrašnji 2×4**.
3. Izaberite visinu: **Do nivoa iznad** (zid prati ako se taj nivo pomjeri), **Do** višeg nivoa za zid koji prolazi kroz više nivoa (stepenišni hol, prostorija dvostruke visine, visoki zabat), ili **Fiksna visina** i upišite je. Takav zid pripada nivou na kojem ste ga nacrtali. Osnove nivoa kroz koje prolazi prikazuju ga svjetlijim, prostorije se tu zatvaraju uz njega, a vrata i prozore možete kliknuti u njega s tih osnova (vrata stoje na podu tog nivoa). Da pomjerite ili oblikujete sam zid, idite na nivo na kojem počinje.
4. Kliknite mjesto gdje prvi zid počinje.
5. Kliknite svaki ugao. Svaki klik pravi zid, a sljedeći počinje tamo gdje je prethodni završio. Dužina i ugao prikazuju se pored pokazivača.
6. Kliknite prvu tačku ponovo da zatvorite prostoriju. Statusna linija kaže koliko zidova ima prostorija, a u načinu osovine linije svaki zid dobija svoj vanjski sloj na vanjskoj strani prostorije.
7. Pritisnite {{key:Esc}} (ili desni klik, ili dvostruki klik) da zaustavite bez zatvaranja.

Uglovi se spajaju sami: dva zida spajaju se na gerung, zid koji završava na drugom staje uz njegovu površinu (T spoj), a tri ili više zidova u jednoj tački dijele ugao. Zidovi koji se ukrštaju ostaju kakvi jesu.

Cijelu prostoriju odjednom: otvorite {{ui:Oblici}} za pravougaonik, zarotirani pravougaonik, poligon, lukove, zidove po odabranim linijama ili po obrisu (vidi [Oblici zidova, presijecanje, pomak, rastezanje i zaključavanje](topic:wall-tools)).

## Odaberite referencu crtanja

Izaberite **Osovina**, **Unutrašnja površina** ili **Vanjska površina** prije prvog klika. Kada je odabrana površina, vaši klikovi i uneseni dužine opisuju tu površinu. BimCraft pomjera osovinu zida za polovinu ukupne debljine i spaja uzastopne uglove. Izaberite **Vanjski lijevo** ili **Vanjski desno** u odnosu na smjer kojim crtate. Za zatvoreni obris nacrtan suprotno kazaljci na satu vanjska strana je desno; u smjeru kazaljke, lijevo. Uz **Unutrašnju površinu** tijelo zida ide na vanjsku stranu vaše linije; uz **Vanjsku površinu**, na drugu stranu. Crtanje po površini zadržava vašu odabranu vanjsku stranu kada zatvorite petlju. Na osovini, zidovi koji ne zatvaraju prostoriju preuzimaju vanjsku stranu koju ste izabrali. Zatvaranje prostorije sam postavlja vanjsku stranu svakog zida na vanjsku stranu prostorije, bez obzira na smjer kojim ste crtali.

Promjena tipa zida, reference ili vanjske strane prekida trenutni niz. Blizu povratnog ugla, duga gerunga se ograničavaju ostavljanjem ravnih krajeva.

Dok crtate, krajnja tačka preko praznog prostora može se poravnati horizontalno ili vertikalno s krajnjom tačkom zida ili ranijim uglom. Isprekidana vodilica spaja tu tačku s pokazivačem koji se hvata. Shift održava smjer crtanja pod pravim uglom; poravnanje se tada zaustavlja duž tog smjera. Bliske krajnje tačke, sredine i presjeci zidova imaju prednost nad udaljenim poravnanjem.

## Linija lokacije

Uz **Referencu** na **Vanjskoj površini** ili **Unutrašnjoj površini**, zid zadržava tu površinu kao svoju liniju lokacije. Kasnije, ako zid postane deblji ili mu se vanjska strana okrene, ta površina ostaje na mjestu, a zid raste ili se okreće oko nje. Ravan zid koji se na njoj sastaje u uglu prati je, pa se ugao i dalje zatvara. Liniju lokacije možete promijeniti kasnije u **Svojstvima**: vidi [Promjena zida, vrata ili prozora](topic:change-a-wall-or-door).

## Nacrtajte zakrivljeni zid

1. Kliknite {{ui:Zid}}, zatim izaberite **Zakrivljen** na listi **Oblik** u redu opcija.
2. Kliknite mjesto gdje zid počinje, pa gdje završava.
3. Kliknite tačku na njegovom luku. Ili upišite visinu luka i pritisnite {{key:Enter}}.
4. Niz se nastavlja od kraja zida. Pritisnite {{key:Esc}} da ga završite.

Zakrivljeni zid spaja zidove na svojim krajevima (uglovi i T spojevi rade), pravi prostorije i drži vrata i prozore duž svog luka. Oni ostaju ravne jedinice, okomite na zid na sredini, a njihovo rastojanje mjeri se duž luka. Zid može skrenuti najviše tri četvrtine kruga. Hvata se za svoje krajeve i za sredinu luka.

Još nije izgrađeno za zakrivljene zidove: {{ui:Odsijeci / produži}} i {{ui:Ugao}}, okvirna konstrukcija, automatske kote na osnovi i hvatanje duž luka. Vidi [Šta još nije urađeno](topic:not-built-yet).

## Unesite dužinu umjesto klika

Nakon prvog klika upišite i pritisnite {{key:Enter}}:

| Unos | Crta |
|---|---|
| `12'6"` ili `3810` | zid te dužine, u smjeru koji pokazuje pokazivač |
| `12'6"<90` | te dužine, pod tim uglom (stepeni, suprotno kazaljci na satu od desne strane) |
| `@3000,0` | do tačke koja je toliko udaljena od posljednje, preko i gore |
| `1200,3400` | do te tačke na osnovi |

Unos broja dok je alat Zid uključen ide direktno u polje {{ui:Dužina}}. U stopama i inčima običan broj znači inče; u milimetrima znači milimetre. Jedinicu uvijek možete upisati: `3.5 m`, `10 ft`, `6 1/2"`.

## Hvatanja

- Krajevi zidova, njihovi uglovi lica i sredine zidova hvataju se kada je pokazivač blizu njih (kvadrat, trougao).
- Pokazivač se hvata za osu zida ili za bilo koju od njegovih površina (krst).
- Od posljednje tačke smjer se drži na svakih 15° kada je blizu. Držite {{key:Shift}} da ga zadržite na 0°, 90°, 180° ili 270°.
- Slobodni smjerovi zaokružuju dužinu na 1/2" (ili 10 mm).

## Promjena, poništavanje, brisanje

- Svaki zid je jedan korak u {{ui:Promjene}}: {{ui:Poništi}} i {{ui:Ponovi}} vraćaju zidove i ponovo ih postavljaju.
- Uz {{ui:Odaberi}} uključeno, kliknite zid na osnovi da ga odaberete. 3D prikaz i **Svojstva** prate izbor. {{key:Delete}} briše odabrane zidove, a zidovi koje su spajali ponovo se čiste.

## Nivoi

Panel **Nivoi** navodi svaki nivo s njegovom kotom i visinom.

- Upišite novi naziv, kotu ili visinu i pritisnite {{key:Enter}}. Promjena visine (ili kote) nivoa pomjera nivoe iznad njega za isti iznos, a zidovi koji idu do nivoa prate ga.
- {{ui:Dodaj nivo na vrh}} dodaje nivo iznad najvišeg, jednake visine.
- {{ui:Dodaj nivo ispod}} dodaje nivo ispod najnižeg (podrum), jednake visine kao taj: kota je negativna kada je najniži nivo na 0, a nijedan drugi nivo se ne pomjera. {{ui:Poništi}} ga ponovo uklanja.
- {{ui:Kopiraj ovaj nivo…}} ponovo crta ono što je na nivou koji gledate, na drugom nivou ili na novom na vrhu: njegove zidove sa vratima i prozorima, podove i plafone (ne krovove). Zidovi koji su išli do nivoa iznad idu do nivoa iznad novog, a prostorije se pojavljuju same. Jedno {{ui:Poništi}} vraća sve. Ako drugi nivo već ima zidove, kopija se dodaje njima.
- {{ui:Jedinice}} na traci sa alatima bira jedinice (stope i inči, inči, decimalne stope, milimetri, centimetri ili metri) za sve što alati za crtanje prikazuju i čitaju.

## Spašavanje

Kliknite {{ui:Spasi kao IFC}}. Svaki zid je IFC zid sa svojom osovinom, svojim spojenim oblikom, svojim tipom i slojevima, `Pset_WallCommon` i osnovnim količinama (dužina, visina, površine i zapremine), pa ga drugi BIM programi mogu otvoriti i uvrstiti u specifikaciju.

## Korisno znati

- Zidovi se crtaju po svojoj osovini. Debljina dolazi iz tipa zida.
- Osnova prikazuje zidove nacrtane ovdje kao ispunjene, a sve ostalo (stavke iz biblioteke, modeli iz drugih programa) presječeno istom ravninom, s onim što leži ispod presjeka prikazano tankim linijama.
- Zidovi napravljeni u drugim programima prikazuju se na osnovi, ali se još ne mogu mijenjati ovim alatima.
