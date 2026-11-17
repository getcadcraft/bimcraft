---
title: Naj AI pomočnik dela z vašim modelom
summary: Vklopite pomočnike v Nastavitvah, da pomočnik na vašem računalniku najde elemente, prebere njihove lastnosti, jih izolira v pogledu ter riše stene, vrata, okna, tla, etaže in mreže prek CadCraft Studio. Izklopljeno, dokler ga ne vklopite.
keywords: ai, pomočnik, mcp, skripta, avtomatizacija, studio, najdi elemente, izoliraj, lastnosti, dovoljenja, prekini povezavo, dejavnost, riši stene, dodaj vrata, dodaj okna, etaže, mreže, tla, razveljavi, shrani, ukazna vrstica, cli, brez okna, uporaba z AI pomočniki
from: c5ee595b
---

## Kaj se boste naučili

Kako dovoliti AI pomočniku (vsakemu pomočniku, ki govori MCP), da pogleda v IFC model, ki ga imate odprtega, in riše vanj; kaj lahko in česa ne more; in kako ga ustaviti.

## Kaj lahko pomočnik počne v BimCraft

| Zahteva | Kaj se zgodi | Potrebuje |
|---|---|---|
| Najdi elemente | Dobi seznam elementov po razredu, etaži, imenu ali vrednosti lastnosti, kot to naredi Najdi | Branje |
| Preberi lastnosti | Dobi atribute enega elementa, tip, nabore lastnosti in količine, kot jih prikazuje **Lastnosti** | Branje |
| Opiši model, navedi stene | Dobi etaže, stene, vrata, okna, prostore, tla, mreže in stebre ter konce, tip in višino vsake stene | Branje |
| Izoliraj, prosojno, skrij ali prikaži | 3D pogled se spremeni, kot če bi uporabili meni {{ui:Show}} | Spremeni pogled in riši |
| Riši stene, vrata, okna, tla, etaže ali mrežne črte | Model se spremeni, kot če bi uporabili orodja {{ui:Draw}}: stene se stikajo, prostori, tla in strehe sledijo | Spremeni pogled in riši |
| Spremeni ime ali vrednost lastnosti | Ime, opis, vrsto objekta ali oznako enega elementa ali eno vrednost lastnosti. Vrednost, ki jo deli z drugimi elementi, se zanj najprej kopira; vrednost njegovega tipa se spremeni samo, če pomočnik to reče, ker vsak element tega tipa sledi | Spremeni pogled in riši |
| Premakni, izbriši, spremeni stene, vrata in okna | Elementi se premaknejo ali izbrišejo skupaj s tem, kar nosijo; stene, narisane z orodji {{ui:Draw}}, se spremenijo po konceh ali tipu, vrata in okna po mestu, velikosti ali tipu, prostori in stiki sledijo | Spremeni pogled in riši |
| Nastavi, uredi in preberi razpredelnico | „Razpredelnica vrat po etažah, s požarno odpornostjo in okovjem“: pomočnik poimenuje razpredelnico, njene stolpce (lastnost ali oznaka postane stolpec) in združevanje; BimCraft jo napolni iz modela in razporedi, kar pomočnik ni navedel, vzame iz standarda pisarne. Nastavitev se pridruži vašemu seznamu {{ui:Schedules}}. Vsaka vrstica, ki jo dobi nazaj, navaja svoje elemente, da jih lahko izbere | Branje za branje; Spremeni pogled in riši za shranjevanje nastavitve |
| Izvozi razpredelnico | CSV, Excel ali besedilo, ločeno s tabulatorji, za prilepiti v Google Sheets (nič se ne pošlje Googlu) | Izvoz |
| Preberi in nastavi sobne površine | Vrste površin, tla, stene in strop vsakega prostora, cone; površine, števila ploščic in prostornine podlage nato prihajajo iz razpredelnic površin | Branje; za nastavitev Spremeni pogled in riši |
| Izbere elemente, razveljavi lastne korake | Elementi se izberejo v pogledu; njen zadnji korak se razveljavi | Spremeni pogled in riši |
| Shrani | Nova IFC datoteka z vsemi spremembami, kot jo naredi {{ui:Save as IFC}} (prvotna se nikoli ne spremeni) | Shrani |
| Izvozi USD | Odprti modeli kot OpenUSD (.usda, .usdc ali .usdz), kot jih zapiše {{ui:USD}} na orodni vrstici | Izvoz |
| Upodobi sliko, zaženi vrsto upodobitev | Slika 3D pogleda, kot jo naredi pogovorno okno {{ui:Render}} z vašimi nastavitvami upodobitve, razen če zahteva druge, ali kakovostne slike, dodane v vrsto pogovornega okna, upodobljene ena za drugo (vrsta potrebuje WebGPU). Nič se v modelu ne spremeni ([Upodobite sliko](topic:render)) | Izvoz |

Vsaka sprememba, ki jo naredi pomočnik, je en korak v **Spremembe**, z imenom „Pomočnik: …“ (na primer „Pomočnik: dodaj 4 stene“). Tako {{key:Mod+Z}} razveljavi celotno njegovo dejanje, in vidite, čigav je bil korak. V oknu ne more odpirati datotek: vi odprete model, pomočnik pa dela z odprtim.

## Vklop

Pomočniki dosežejo BimCraft prek CadCraft Studio na vašem računalniku; navaden brskalnik nima poti vanj.

1. Odprite {{ui:Settings}} in izberite zavihek **BimCraft**.
2. Pod **Pomočniki** obkljukajte **Dovoli AI pomočnikom in skriptam uporabo BimCraft**.
3. **Branje** je za vas že obkljukano. Obkljukajte tudi **Spremeni pogled in riši**, če lahko pomočnik izolira in skrije elemente ter riše, in **Shrani**, če lahko shrani model kot novo datoteko.
4. Povežite pomočnika v Studio (Studio prikaže naslov in nastavitve, ki jih prilepite vanj).

## Ko je pomočnik povezan

Opomba na vrhu desnega podokna pove, kateri pomočnik je povezan in kaj lahko počne. Kliknite {{ui:Disconnect}}, da takoj končate njegovo sejo; da nadaljuje, se mora znova povezati.

**{{ui:Activity}}** pod **Pomočniki** v Nastavitvah našteje vsak klic, ki ga je pomočnik naredil, najnovejšega zgoraj, z oznako, ali je uspel.

:::tip
Vprašajte z navadnimi besedami, na primer „izoliraj zunanje stene na etaži 1“, „katera vrata nimajo požarne odpornosti?“ ali „nariši prostor 6 na 4 metre na etaži 1 z vrati v južni steni“. Pomočnik najde elemente in jih pokaže v pogledu ali jih nariše.
:::

## Brez okna: skripte in ukazna vrstica

Enaka orodja za risanje delujejo na IFC datotekah v mapah, ki jih navedete, brez odprtega okna: strežnik MCP in ukazna vrstica CadCraft lahko začneta novo stavbo ali odpreta IFC datoteko, jo opišeta, dodata stene, vrata, okna, tla, etaže in mreže, razveljavita in shranita kot novo datoteko `.ifc`. Vi odločite, katere mape sme uporabljati in ali sme karkoli spreminjati ali shranjevati.

## Izklop

Odkljukajte **Dovoli AI pomočnikom in skriptam uporabo BimCraft**. Vsak pomočnik se takoj odklopi, nastavitev pa se shrani za naslednjič.

## Glejte tudi

- [Recepti za AI pomočnike](common:assistants-recipes): delovni primeri, vsak s orodji, ki jih kliče.
- [Najdite elemente po razredu, imenu ali lastnosti](topic:find)
- [Skrijte, izolirajte in prosojno prikažite elemente](topic:hide-and-isolate)
- [Nastavitve BimCraft](topic:settings)
