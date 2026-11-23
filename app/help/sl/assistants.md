---
title: Naj AI pomočnik dela z vašim modelom
summary: Vklopite pomočnike v Nastavitvah, da lahko pomočnik na vašem računalniku najde elemente, prebere njihove lastnosti, jih izolira v pogledu ter riše zidove, vrata, okna, tla, nivoje in mreže prek CadCraft Studia. Izklopljeno, dokler ga ne vklopite.
keywords: ai, pomočnik, mcp, skript, avtomatizacija, studio, najdi elemente, izoliraj, lastnosti, dovoljenja, prekini povezavo, dejavnost, riši zidove, dodaj vrata, dodaj okna, nivoji, mreže, tla, razveljavi, shrani, ukazna vrstica, cli, brez okna, uporaba z AI pomočniki
from: 66d72742
---

## Kaj boste spoznali

Kako lahko AI pomočnik (kateri koli pomočnik, ki govori MCP) pogleda v odprti model IFC in riše vanj, kaj lahko in česa ne more, ter kako ga ustavite.

## Kaj lahko pomočnik naredi v BimCraftu

| Zahteva | Kaj se zgodi | Potrebuje |
|---|---|---|
| Najdi elemente | Dobi seznam elementov po razredu, etaži, imenu ali vrednosti lastnosti, kot to naredi **Najdi** | Branje |
| Preberi lastnosti | Dobi atribute, tip, nabore lastnosti in količine enega elementa, kot jih prikazuje **Lastnosti** | Branje |
| Opiše model, našteje zidove | Dobi nivoje, zidove, vrata, okna, prostore, tla, mreže in stebre ter konce, tip in višino vsakega zidu | Branje |
| Izolira, prosojno, skrije ali prikaže | 3D pogled se spremeni, kot če bi uporabili meni {{ui:Pokaži}} | Spreminjanje pogleda in risanje |
| Riše zidove, vrata, okna, tla, nivoje ali linije mreže | Model se spremeni, kot če bi uporabili orodja {{ui:Risanje}}: zidovi se stikajo, prostori, tla in strehe sledijo | Spreminjanje pogleda in risanje |
| Spremeni ime ali vrednost lastnosti | Ime, Opis, Vrsta objekta ali Oznako enega elementa ali vrednost ene lastnosti. Vrednost, ki jo deli z drugimi elementi, se zanj najprej kopira; vrednost njegovega tipa se spremeni samo, če pomočnik to pove, ker se vsak element tega tipa ravna po njej | Spreminjanje pogleda in risanje |
| Premakne, izbriše, spremeni zidove, vrata in okna | Elementi se premaknejo ali izbrišejo skupaj s tistim, kar gostijo; zidovi, narisani z orodji {{ui:Risanje}}, se spremenijo po koncih ali tipu, vrata in okna po mestu, velikosti ali tipu, prostori in stiki pa sledijo | Spreminjanje pogleda in risanje |
| Nastavi, uredi in prebere razpored | „Razpored vrat po etažah, s požarno odpornostjo in okovjem“: pomočnik poimenuje razpored, njegove stolpce (lastnost ali oznaka postane stolpec) in združevanje; BimCraft ga napolni iz modela in razporedi, kar pomočnik ni navedel, vzame iz pisarniškega standarda. Nastavitev se pridruži vašemu seznamu Razporedov. Vsaka vrstica, ki jo dobi nazaj, navaja svoje elemente, zato jih lahko izbere | Branje za branje; Spreminjanje pogleda in risanje za shranjevanje nastavitve |
| Izvozi razpored | CSV, Excel ali besedilo, ločeno s tabulatorji, za lepljenje v Google Sheets (nič se ne pošlje Googlu) | Izvoz |
| Prebere in nastavi končne obdelave prostorov | Tipi obdelav, tla, stene in strop vsakega prostora, cone; površine, števila ploščic in prostornine podlage se nato prevzamejo iz razpredelnic obdelav | Branje; za nastavitev Spreminjanje pogleda in risanje |
| Izbere elemente, razveljavi svoje korake | Elementi se izberejo v pogledu; njegov zadnji korak se povrne | Spreminjanje pogleda in risanje |
| Shrani | Nova datoteka IFC z vsemi spremembami, kot jo naredi {{ui:Shrani kot IFC}} (izvirnik se nikoli ne spremeni) | Shranjevanje |
| Izvozi USD | Odprti modeli kot OpenUSD (.usda, .usdc ali .usdz), kot jih zapiše gumb {{ui:USD}} na orodni vrstici | Izvoz |
| Upodobi sliko, zažene vrsto upodobitev | Slika 3D pogleda, kot jo naredi pogovorno okno {{ui:Upodobitev}} z vašimi nastavitvami upodobitve, razen če zahteva druge, ali visokokakovostne slike, dodane v vrsto pogovornega okna, ki se upodobijo ena za drugo (vrsta potrebuje WebGPU). Nič v modelu se ne spremeni ([Upodobi sliko](topic:render)) | Izvoz |

Vsaka sprememba, ki jo naredi pomočnik, je en korak v **Spremembah** z imenom „Pomočnik: …“ (na primer „Pomočnik: dodaj 4 zidove“), zato {{key:Mod+Z}} povrne celotno njegovo dejanje, in vidite, čigav korak je bil. V oknu ne more odpirati datotek: vi odprete model, delo opravi z odprtim.

## Vklopite ga

Pomočniki dosežejo BimCraft prek CadCraft Studia v vašem računalniku; navadni brskalnik nima poti do njega.

1. Odprite {{ui:Nastavitve}} in izberite zavihek **BimCraft**.
2. Pod **Pomočniki** označite **Dovoli AI pomočnikom in skriptam uporabo BimCraft**.
3. **Branje** je označeno za vas. Označite tudi **Spreminjanje pogleda in risanje**, če sme pomočnik izolirati in skrivati elemente ter risati, in **Shrani**, če sme model shraniti kot novo datoteko.
4. Povežite pomočnika v Studiu (Studio prikaže naslov in nastavitve, ki jih prilepite vanj).

## Ko je pomočnik povezan

Opomba na vrhu desnega podokna pove, kateri pomočnik je povezan in kaj lahko naredi. Kliknite {{ui:Prekini povezavo}}, da takoj končate njegovo sejo; za nadaljevanje se mora znova povezati.

**Dejavnost** pod **Pomočniki** v Nastavitvah našteje vsak klic, ki ga je pomočnik naredil, od najnovejšega, z navedbo, ali je uspel.

:::tip
Vprašajte z navadnimi besedami, na primer »izoliraj zunanje zidove na Nivoju 1«, »katera vrata nimajo požarne odpornosti?« ali »nariši sobo 6 na 4 metre na Nivoju 1 z vrati v južnem zidu«. Pomočnik poišče elemente in jih prikaže v pogledu ali jih nariše.
:::

## Brez okna: skripti in ukazna vrstica

Enaka orodja za risanje delujejo na datotekah IFC v mapah, ki jih navedete, brez odprtega okna: strežnik MCP in ukazna vrstica CadCraft lahko začneta novo stavbo ali odpreta datoteko IFC, jo opišeta, dodata zidove, vrata, okna, tla, nivoje in mreže, razveljavita in shranita kot novo datoteko `.ifc`. Še štiri orodja so primerna za skripte: `ifc_batch` izvede do 200 korakov urejanja kot enega (vse ali nič: en korak razveljavitve povrne celoten sveženj, zavrnjeni korak pa razveljavi ostale in navede korak); `ifc_describe` našteje nivoje in vsak zid z njegovimi vrati in okni; `ifc_render_png` brez okna zapiše ploskovno senčeno sliko za preverjanje modela (brez materialov, tekstur in senc); `usd_export` zapiše `.usda`, `.usdc` ali `.usdz`. V ukazni vrstici `cadcraft bim script.json --from model.ifc -o out.ifc` zažene skript korakov, `--usd`, `--png` in `--plan` pa iz istega zagona zapišejo datoteko USD, sliko ali tloris. Vi določite, katere mape sme uporabljati in ali sme karkoli spreminjati ali shraniti.

## Izklopite ga

Odznačite **Dovoli AI pomočnikom in skriptam uporabo BimCraft**. Vsak pomočnik se takoj odklopi, nastavitev pa se shrani za naslednjič.

## Glejte tudi

- [Recepti za AI pomočnike](common:assistants-recipes): zgledi, vsak z orodji, ki jih kliče.
- [Iskanje elementov po razredu, imenu ali lastnosti](topic:find)
- [Skrivanje, izolacija in prosojnost elementov](topic:hide-and-isolate)
- [Nastavitve BimCraft](topic:settings)
