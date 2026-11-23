---
title: Prinesite lastne objekte in datoteke družin v knjižnico
summary: Preberite datoteke družin (.rfa) ter datoteke IFC, DWG, DXF, glTF ali OBJ na zavihku Knjižnica, jih postavite kot katerikoli element knjižnice in jih hranite v Moji objekti, zasebnem seznamu, ki ga vidite samo vi.
keywords: rfa, družina, družine, knjižnica družin, lastni objekti, moji objekti, zasebni objekti, zasebna knjižnica, uvoz objektov, vsebina proizvajalca, bim objekti, objekt ifc, gltf, obj, blok dwg, shrani, preklopi, preseli
from: 886261f8
---

## Kaj boste naredili

Prinesite v BimCraft objekte, ki jih že imate: knjižnico družin iz Revita, prenos IFC ali DWG proizvajalca, mrežo iz drugega modelirnika. Datoteko preberete na zavihku {{ui:Knjižnica}}, objekt postavite v model kot pravi element IFC in, če ga želite pozneje znova, ga shranite v {{ui:Moji objekti}}.

## Koraki

1. Odprite model IFC ali začnite novo stavbo.
2. Kliknite zavihek {{ui:Knjižnica}} poleg {{ui:Lastnosti}}.
3. Kliknite {{ui:Datoteke …}}, nato {{ui:Izberi datoteko …}}. Izberite eno ali več datotek naenkrat: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ali `.csv`. Ali kliknite {{ui:Izberite mapo…}}, da preberete celotno mapo in mape znotraj nje (do 200 datotek naenkrat).
4. Kliknite kartico, da vidite, kaj je bilo prebrano: predogled tlorisa, ime, proizvajalca in model, velikosti ter opombe.
5. Kliknite {{ui:Vstavi v tloris}} ali {{ui:Vstavi v model}}, da ga postavite.
6. Da ga boste uporabljali v drugih projektih, kliknite {{ui:Shrani v moje objekte}}. Če ste prebrali več datotek, {{ui:Shrani vse v moje objekte}} shrani vse naenkrat.
7. Pozneje kliknite {{ui:Moji objekti}} na zavihku Knjižnica, da jih poiščete. Postavljajo se, zamenjujejo in posodabljajo kot vsak element knjižnice.

Datoteke se berejo na tem zavihku. Nič se ne naloži, dokler ne izberete {{ui:Shrani v moje objekte}}.

## Kaj se prebere iz vsake vrste datoteke

| Datoteka | Kaj dobite |
|---|---|
| IFC | Vsak tip elementa kot objekt s pravo 3D obliko, razredom IFC in nabori lastnosti |
| glTF, GLB, OBJ | En objekt s pravo 3D obliko kot mreža. Najprej nastavite enote in smer navzgor. |
| DWG, DXF | Vsak blok kot objekt z njegovo risbo tlorisa in atributi |
| Datoteka družine (`.rfa`) | Ime družine, kategorija, proizvajalec, model, parametri in njeni tipi. **Ne njena 3D oblika:** namesto nje stoji škatla iz širine, globine in višine družine. |
| CSV | En objekt na vrstico: ime, velikosti in podatki, narisani kot škatla |

## Datoteke družin in njihova 3D oblika

3D oblika v datoteki `.rfa` je shranjena v nedokumentiranem formatu, zato BimCraft prebere podatke družine in ne ugiba njene geometrije. Kartica to pove: „Geometrija iz te družine ni prebrana; namesto nje stoji škatla.“

Če želite družino uvoziti z njeno pravo obliko, jo izvozite iz programa, ki jo je naredil (Revit):

1. Odprite družino ali projekt, v katerem je družina postavljena.
2. Izberite **File > Export > IFC**. Glejte [nastavitve izvoza, ki se tu najbolje odprejo](topic:rvt-to-ifc).
3. V BimCraftu preberite datoteko `.ifc` z {{ui:Datoteke …}}. Vsak tip družine pride kot svoj objekt, z obliko in nabori lastnosti.

Mnogi proizvajalci ponujajo prenos IFC ali DWG poleg datoteke družine. Ti se preberejo neposredno.

## Tipi družin

Družina z več tipi pride kot en element z izbiro {{ui:Različica}}, po ena različica za vsak tip. Vsaka različica ima vrednosti, ki se med tipi razlikujejo, in svojo škatlo, kadar ima tip širino in globino. Družina z enim tipom je običajen element, napolnjen z vrednostmi tega tipa.

Nekatere družine hranijo svoje tipe v katalogu tipov: datoteka `.txt` z istim imenom ob datoteki družine. Izberite obe skupaj ali izberite mapo, in vrstice kataloga postanejo različice.

## Podatki družine na pravi obliki

Če mapa hrani datoteko družine in datoteko IFC, glTF ali OBJ z istim imenom (`Chair.rfa` in `Chair.ifc`), izberite obe skupaj ali izberite mapo. BimCraft naredi en element: datoteka družine da ime, proizvajalca, model, parametre in tipe, druga datoteka pa pravo 3D obliko. Opombe povedo, iz katere datoteke prihaja oblika. Ena oblika se uporabi za vse tipe.

Če ima datoteka družine shranjeno sliko, podrobnosti elementa pod risbo tlorisa prikažejo to sliko. Slika je prikazana samo tam; z elementom se ne hrani.

## Moji objekti

{{ui:Moji objekti}} je vaš lasten zasebni seznam v knjižnici. Samo vi vidite, kaj je v njem: ni v javni knjižnici, ni v iskanju in ni prikazan vaši ekipi. Sledi vašemu računu, zato so isti objekti na drugem računalniku, ko se prijavite v knjižnico.

- Za shranjevanje objekta se morate prijaviti v knjižnico. Glejte [prijava v knjižnico](topic:library-credits).
- Shranjevanje objekta pošlje ta en objekt na vaš račun. Do takrat ostane v vašem računalniku.
- {{ui:Odstrani iz mojih objektov}} vzame objekt s seznama. Kopije, ki so že postavljene v risbe, ostanejo.
- Če želite objekt deliti z vsemi, ga namesto tega naložite v javno knjižnico pod licenco, ki jo izberete.

:::note
Moji objekti je v preizkusu in morda še ni odprt za vaš račun. Če manjka vir ali piše „Moji objekti še niso odprti za ta račun“, lahko še vedno preberete in postavite svoje datoteke z {{ui:Datoteke …}}; shranjene so znotraj vašega modela.
:::

## Pogoste napake

- **Pričakovanje prave oblike družine iz `.rfa`.** Prebrani so samo njeni podatki. Za obliko izvozite IFC.
- **Dva elementa tam, kjer ste pričakovali enega.** Družina in njena datoteka oblike se združita samo, če se imeni ujemata natanko, razen končnice, in ležita v isti mapi.
- **Mreža pride tisočkrat prevelika ali leži na boku.** Pred izbiro datoteke nastavite {{ui:Enote datoteke}} in {{ui:Os navzgor mreže}} pod {{ui:Datoteke …}}.
- **„Ni podatkov o družini“ pri datoteki.** Gre za projekt (`.rvt`, shranjen z drugo končnico) ali predlogo družine, ne za družino. Glejte [Branje datoteke projekta ali družine](topic:read-rvt-file).
- **Shranjevanje vsebine, ki je ne smete hraniti.** Nekatere plačljive knjižnice ne dovoljujejo kopij zunaj svoje storitve. Preverite pogoje vsebine, ki je niste ustvarili sami.
