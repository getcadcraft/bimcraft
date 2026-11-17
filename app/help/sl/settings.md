---
title: Nastavitve BimCraft
summary: Izberite, ali so prostori prikazani, ali se robovi rišejo in v katerem pogledu se model odpre, ter začnite s postavljanjem z vklopljenim lovljenjem zidu.
keywords: nastavitve, lastnosti, možnosti, prostori, sobe, ifcspace, robovi, črte, zmogljivost, velik model, pogled ob odpiranju, kamera, pogled od zgoraj, lovljenje zidu, lovljenje
from: 4416e64f
---

Odprite {{ui:Nastavitve}} z ikono zobnika v vrstici aplikacije ali z {{key:Mod+,}}. Prvi zavihek, {{ui:BimCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki jih delijo vse aplikacije CadCraft (tema, orodna vrstica, podokna). Nastavitve BimCraft veljajo samo v aplikaciji: spremenite jih tukaj, ta brskalnik pa si jih zapomni. {{ui:Ponastavi nastavitve BimCraft}} na dnu pogovornega okna jih, skupaj z deljenimi, vrne na začetne vrednosti.

## Meniji, tipke in miška

Slog menijev (lastna orodna vrstica BimCraft, meni za domače načrtovanje, trak BIM ali ukazna vrstica za risanje), vaše lastne tipke in meniji ter to, kaj počneta kolešček in gumbi miške. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).

## Ko se model odpre

- **Prikaži prostore** (privzeto izklopljeno): prostori so prozorne škatle, ki lahko skrijejo zidove za seboj, zato so na začetku skriti. Gumb {{ui:Prostori}} nad modelom jih še vedno vklopi ali izklopi za odprti model.
- **Robovi**: {{ui:Robovi vklopljeni}} (privzeto) riše robne črte, ki dajejo risalni videz. {{ui:Samo majhni modeli}} jih riše samo za modele s številom trikotnikov pod 300,000, kar ohranja hitrejše preklapljanje velikih modelov. {{ui:Robovi izklopljeni}} začne vsak model brez njih. Gumb {{ui:Robovi}} še vedno preklaplja robove za odprti model. Nad 1.5 milijona trikotnikov so robovi vedno izklopljeni.

## Risbe se odprejo v

Kako se risba DWG ali DXF najprej prikaže: {{ui:3D (najhitreje)}} (privzeto) hitro nariše tudi veliko risbo, ali {{ui:Model (2D)}} odpre ravni pogled prostora modela. Zavihki nad risbo kadar koli preklapljajo med {{ui:Model}}, listi in {{ui:3D}}. Risba brez ničesar v prostoru modela ali brskalnik, ki ne more prikazati 3D, se vedno odpre v 2D.

## Pogled ob odpiranju

Kamera, s katero se model odpre: {{ui:Prilagodi}} (privzeto, cel model z vogala), {{ui:Zgoraj}}, {{ui:Spredaj}} ali {{ui:Bok}}. Gumbi nad modelom kadar koli spremenijo pogled.

**Stavba, zasukana na parceli**: mnogi modeli pridejo s stavbo pod kotom glede na osi datoteke (pri geodetskih ali skupnih koordinatah). {{ui:Pravokotno na stavbo}} (privzeto) prikaže tako stavbo pravokotno: {{ui:Prilagodi}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Bok}}, ploskve pogledne kocke in vsak nov prerez sledijo njenim zidovom, kompas pogledne kocke pa še vedno kaže proti severu modela. {{ui:Kot postavljeno na parceli}} ohrani osi datoteke. Stavba, katere zidovi tečejo vzdolž osi, je videti enako v obeh primerih.

## Postavljanje elementov knjižnice

**Začnite z vklopljenim lovljenjem zidu** (privzeto izklopljeno): ko se začne postavljanje ali lepljenje elementa iz knjižnice, se njegova hrbtna stran prilepi na najbližji zid, obrnjena proti prostoru. {{key:Tab}} ali {{ui:Lovljenje zidu}} v vrstici za postavljanje ga za trenutek izklopi. Etaža brez zidov začne brez njega.

## Prerezni kvader

{{ui:Rezerva okoli izbora}} je, koliko prostora {{ui:Prerezni kvader okoli izbora}} pusti na vsaki strani izbranih elementov, v milimetrih: privzeto 300, največ 5000. Glejte [Odrežite model IFC z ravnino prereza](topic:section-plane).

## Lokacija

{{ui:Zemljepisna širina in dolžina v}} izbere sistem, v katerem {{ui:Meri}} › {{ui:Lokacija}} prikaže zemljepisne širine in dolžine: WGS 84 (EPSG:4326, privzeto, kot ju uporabljata GPS in spletni zemljevidi), {{ui:Lasten datum datoteke}} ali eden od ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 in CGCS2000. Sistem kartiranja datoteke in njen datum sta vedno prikazana tudi. Glejte [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure).

## Kazalnik v kotu

Kar je v spodnjem desnem kotu 3D pogledov (model IFC in risba, preklopljena v 3D): {{ui:Pogledna kocka}} (privzeto), {{ui:Ikona osi}} (majhen X, Y in Z) ali {{ui:Brez}}. Sprememba začne veljati takoj. Pogled 2D risbe nikoli ne prikaže nobenega.

Na pogledni kocki kliknite ploskev, rob ali oglišče, da pogledate z one strani, povlecite kocko za krožno vrtenje, povlecite obroč, da se obrnete, in kliknite hišico za začetni pogled.

## Vaše ime pri zadevah

Ob prijavi zadeve nosijo ime vašega računa, BimCraft pa ničesar ne zahteva: ta del prikazuje {{ui:Iz vašega računa (<name>)}}. {{ui:Uporabi drugo ime}} odpre polje za drugo ime, ki velja, dokler ne izberete {{ui:Uporabi ime mojega računa}}. Brez prijave obrazec za zadevo kot prej zahteva ime. Glejte [Zadeve in datoteke BCF](topic:issues-bcf).

## Pomočniki

**Naj pomočniki z umetno inteligenco in skripti uporabljajo BimCraft** (privzeto izklopljeno) omogoči pomočniku v vašem računalniku dostop do odprtega modela prek CadCraft Studio: **Preberi** najde elemente in prebere njihove lastnosti, **Spremeni pogled** pa jih izolira, skrije in prikaže. **Dejavnost** našteva njegove klice. Glejte [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants).

:::note
Druge nastavitve veljajo, ko se model odpre ali se začne postavljanje. Odprt model ohrani svoj videz, dokler ne uporabite gumbov v orodni vrstici ali ga znova ne odprete.
:::

## Povezano

- [Kopiranje, lepljenje in podvajanje elementov knjižnice](topic:copy-paste)
- [Postavljanje opreme in pohištva iz knjižnice](topic:place-from-library)
- [Zaslon BimCraft](topic:workspace)
- [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants)
