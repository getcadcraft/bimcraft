---
title: Samodejno vodite kanale, odvode, vodo in cevi za hladilno sredstvo
summary: V preverjanju trkov BimCraft poišče pot okoli odprtega modela za kanale, gravitacijski odvod, hladno in toplo vodo ter cevi za hladilno sredstvo za sisteme split in multi-split, in nariše vode z ojačitvami v enem koraku razveljavitve. Pripomoček za risanje: dimenzije, nakloni in preverbe prihajajo iz tabel v programu in številk, ki jih vpišete; nič tukaj ne pomeni, da zasnova ustreza predpisu.
keywords: samodejno vodenje, avtomatsko vodenje, vodenje kanalov, vodenje cevi, odvod, sanitarno, gravitacija, stojna cev, prezračevanje, sifon, voda, topla voda, povratna zanka, recirkulacija, hladilno sredstvo, split, multi-split, VRF, enakovredna dolžina, komplet razvejitve, Y kos
from: 5841d513
---

## Kaj boste naredili

Naj BimCraft razporedi mrežo vodov med priključki, ki so že v modelu, okoli sten in nosilcev, nato pa jo preverite z številkami, ki jih vidite.

## Koraki

1. Odprite model in preverjanje trkov. Pod **Samodejno vodi kanale** izberite prezračevalno napravo in njene izpuste ali pod **Samodejno vodi druge sisteme** izberite sistem.
2. **Gravitacijsko sanitarno odvodnjavanje.** Vpišite položaj iztoka in, če jih imate, položaje stojnih cevi. Označite **Vodi vse etaže naenkrat**, da vzamete vsako etažo z napravami: odtoki vsake etaže se stikajo s stojno cevjo na svoji ravni, stojna cev pa teče od nad najvišjo pipo do svojega podnožja. Pritisnite {{ui:Speljí}}.
3. **Sifon do prezračevanja.** Plošča navede razdaljo od vsakega sifona do njegovega prezračevanja. V **Največja razdalja od sifona do prezračevanja** vpišite največ, kar dovoljuje vaš predpis; vsaka naprava, ki je čez to mejo, je navedena kot neopravljena, s številom milimetrov čez. Označite **Prezrači skozi stojno cev**, kadar naprave nimajo lastnega prezračevalnega nastavka: razdalja se nato meri do stojne cevi. BimCraft ne prinaša tabele predpisa za to: število vpišete vi.
4. **Hladna in topla voda.** Izberite vir, vpišite tlak na viru in tlak, ki ga potrebujete na napravi. Označite **Topla voda**, izberite vroči priključek grelnika in označite **Povratna zanka**, da povratni vod konča pri priključku grelnika **hot-return** ali pri katerem koli drugem priključku, ki ga izberete (ta se konča 150 mm prej, odprt, da ga sami povežete).
5. **Split, multi-split in VRF.** Izberite zunanjo enoto, označite notranje enote in vpišite zmogljivost vsake. Vpišite omejitve iz podatkov proizvajalca. Vpišite **enakovredno dolžino** kolena in kompleta razvejitve (vrednosti proizvajalca), nato se najdaljša in skupna dolžina preverita na enakovrednih dolžinah.
6. Pritisnite {{ui:Speljí}}. Plošča pove, koliko vodov je narisala, in kaj ni mogla narediti ter zakaj. {{ui:Razveljavi}} vse povrne v enem koraku.

## Kaj naj bi videli

Cevi s kolenami, T-kosi in redukcijami; odvodi, ki padajo vsaj za najmanjši nagib za svojo velikost; prezračevalni nastavki pri napravah; vodi za hladilno sredstvo kot par tekočina in plin, ki na vsakem ovinku zavije enako, z označenim kompletom razvejitve tam, kjer se veja odcepi od glavnega voda.

## Dobro je vedeti

- Kjer se odtok stika z drugim odtokom, model nariše T-kos. Tloris ta mesta imenuje 45-stopinjski Y-spoji, da lahko spremenite fitting.
- Topla voda uporabi lastni vroči priključek naprave, če ga njena družina ima, in priključek 100 mm poleg hladnega, če ga nima.
- Vodi za hladilno sredstvo se začnejo med obema priključkoma vsake enote. Kadar sta priključka enote preblizu za koleno, par ostane središčen med njima.
- Vodovodno omrežje uporablja krivuljo porabe in številke trenja, prikazane v izračunih; pred zanašanjem na tlake jih zamenjajte s predpisovimi.
- Večje hiše lahko vzamejo pol minute ali več, predvsem toplo omrežje.
- To je pripomoček za risanje. Usposobljena oseba preveri dimenzije, nagibe, prezračevanje in tlake glede na veljaven predpis.

## Naprej

[Preverite trke](topic:clash-check) · [Preverite cevi in kanale glede na konstrukcijo](topic:mep-against-structure) · [Povezave med cevmi in opremo](topic:mep-connections)
