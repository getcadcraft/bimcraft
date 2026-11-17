---
title: Põrgete lahendamine iga eriala parandustega
summary: Põrkekontrolli tulemustest koostab nupp Paku parandusi iga põrke kohta nimekirja sellest, mida iga eriala selle vastu teha saaks — kanal kõrvale talast, toru nihutatud, post teisaldatud, ava talas. Iga parandus proovitakse mudeli koopial koos oma kompromissidega, et sina saaksid aktsepteerida või tagasi lükata. Aktsepteeritud parandused lähevad sisse ühe tagasivõtmise sammuna.
keywords: põrge, põrke parandus, põrgete lahendamine, koordineerimine, paku parandusi, ümbersuunamine, kõrvalekalle, kanal, toru, kaabliredel, tala, post, ava, hülss, kompromiss, eriala, konstruktsioon, mehaanika, santehnika, elekter, arhitektuur, assistent
from: f7bafdd9
---

## Mida sa teed

Muuda põrgete nimekiri otsusteks. Iga eriala (konstruktsioon, mehaanika, santehnika, elekter, arhitektuur) pakub parandusi ainult oma elementidele, iga ettepanek kontrollitakse mudeli koopial ja valid sina.

## Sammud

1. Käivita esmalt põrkekontroll. Vaata [Põrgete kontrollimine](topic:clash-check) ja [Kontrolli torusid ja kanaleid konstruktsiooni vastu](topic:mep-against-structure).
2. Tulemuste all klõpsa {{ui:Paku parandusi}}. Paneel **Pakutud parandused** avaneb mudeli kõrvale.
3. Iga põrke kohta näed iga eriala ettepanekuid, parimad esimesena. Iga rida ütleb, mida see teeb, ja selle kompromisse: kas see lahendab põrke, mitu uut põrget see tekitab, millised reeglid see rikub, kui palju jooksu lisab või kui kaugele see liigub, mitu liitmikku ning kulu hinnangu.
4. Klõpsa {{ui:Näita}}, et näha elemente 3D-s. Klõpsa soovitud parandusel {{ui:Aktsepteeri}} (üks iga põrke kohta) või {{ui:Lükka tagasi}}.
5. Rea all olev rida ütleb, mida kõik sinu aktsepteeritud parandused koos teevad: mitu põrget on lahendatud, mitu on alles ja kas midagi uut põrkab.
6. Klõpsa {{ui:Rakenda aktsepteeritud parandused (üks tagasivõtmise samm)}}. Põrkekontroll jookseb uuesti. {{ui:Võta tagasi}} võtab kõik korraga tagasi.

## Mida iga eriala tohib teha

- **Mehaanika** (kanalid, küte- ja jahutustorud): mööda minna üle või alt selle haru, mis põrkab, tõsta või langetada kogu jooks, nihutada külgsuunas, muuta ristkülikukujuline kanal sama pindalaga lamedamaks.
- **Santehnika** (vesi, kanalisatsioon, gaas, tuletõrje): samad liigutused, välja arvatud see, et gravitatsioonilist äravoolu ei anta kunagi kõrvalekaldeks; seda saab nihutada ainult tervikuna, säilitades kalde.
- **Elekter** (kaabliredelid ja kaitsetorud): samad liigutused; redel peab jätma kaabli paigaldamiseks 150 mm vaba ruumi kohal.
- **Konstruktsioon**: teisalda post (kuni 300 mm) või tala seina või plaadi ava sellele jooksule, mis läbib. Iga konstruktsiooniparandus ütleb, et konstruktor peab selle heaks kiitma.
- **Arhitektuur**: hülss seinas läbiva jooksu jaoks või teisalda sein, mis on teadaolevalt koormust mitte kandev.

## Mida peaksid nägema

- Parandused, mis rikuvad reeglit, on märgitud: lähemal kui 25 mm vahe millegi muuga, alla 2 100 mm vaba kõrguse piiri, tala seina ava suurem kui 40 % tala kõrgusest või liiga lähedal selle otstele, tala, mis muudaks ulatust.
- BimCraft saab teha parandusi mudelile: jooksud, mille joonistasid toru- ja kanalitööriistadega, ning postid, mille joonistasid. Teised on märgitud **Ainult soovitus**: nende aktsepteerimine lisab hoopis probleemi vahekaardile Probleemid.

## Hea teada

- Parandused tulevad rakenduse sisseehitatud reeglitest; nende jaoks ei kasutata tehisintellekti.
- Kui ühendad abilise (vaata [Lase tehisintellekti abilisel töötada koos sinu mudeliga](topic:assistants)), saab see lugeda põrkeid ja lisada avatud paneelile oma ettepanekud ühe eriala jaoks. Neid kontrollitakse samamoodi, märgitud abilise nimega, ning midagi ei muudeta enne, kui aktsepteerid ja rakendad.
- Koopiat kontrollitakse, tõmmates kasti iga elemendi ja iga jooksu haru ümber, nii et kaldu jooks võib näidata põrget, mida põrkekontroll ei näitaks. Käivita pärast rakendamist põrkekontroll uuesti: see on lõplik.
- Piirangud (kui kaugele jooks võib liikuda, kui kõrgele kõrvalekaldumine võib ronida, vahe) on paneelis kirjutatud vaikeväärtused.

## Edasi

- [Probleemid ja BCF-failid](topic:issues-bcf)
- [Joonista toru- ja kanalijooksud](topic:pipes-and-ducts)
