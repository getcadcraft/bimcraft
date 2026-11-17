---
title: Magdagdag ng render engine gamit ang add-on
summary: Ano ang maidaragdag ng add-on sa listahan ng Engine ng dialog ng Render, ang pahintulot na kailangan nito para magpatakbo ng programa, at ang tinitingnan at itinatanong ng Studio.
keywords: add-on, addon, engine, render engine, developer, engine.run, pahintulot, programa, script, nilagdaan, studio, api
from: 06295376
---

Maaaring magdagdag ng engine ang add-on (Mga setting › Mga add-on) sa listahan ng Engine ng {{ui:Render}}. Ang buong teksto para sa mga author ng add-on ay nasa seksyon 16 ng add-on specification; sa madaling sabi:

- Nagrerehistro ang add-on ng engine na may id na nagsisimula sa sarili nitong prefix, isang pangalan, opsyonal na mga setting, at **alinman** sa programang papatakbuhin **o** function sa JavaScript na gumuguhit ng larawan.
- Ang engine na nagpapatakbo ng programa ay nangangailangan ng pahintulot na **`engine.run`**, na ipinapakita bago i-install at sa Mga setting. Tumatakbo lamang ito sa Studio; sa browser, lumalabas ito bilang file na ise-save.
- Ipinapangalan ng add-on ang programa (isang plain file name lamang: hindi kailanman shell), isang script na **nasa loob ng nilagdaang add-on**, at mga argument na binubuo ng placeholder at simpleng salita. Hahanapin ng Studio ang programa, o hihingin sa iyong ituro ito nang isang beses.
- Sa unang pagpapatakbo ng add-on ng isang programa, **magtatanong ang Studio sa sarili nitong dialog**: aling add-on, aling programa, at na kayang gawin ng script ang lahat ng kayang gawin ng programa. Pahintulutan lamang ito para sa add-on na pinagkakatiwalaan mo. Maaalala ang sagot mo para sa add-on at programang iyon.
- Ang package (ang eksena bilang USD at isang settings file, kasama ang glTF file kapag hinihingi ito ng add-on) at ang script ng add-on ay inilalagay sa bagong pansamantalang folder, doon tumatakbo ang programa, at bumabalik ang larawang may markang pangalan ng engine ng add-on.

:::note
Ang mga add-on ay makapagdaragdag lamang ng render engine mula sa add-on API 1.4. Ang halimbawang gawa para sa isang open-source na command-line renderer ay nasa sarili nitong repository; hindi pa ito napapatakbo sa renderer na iyon.
:::
