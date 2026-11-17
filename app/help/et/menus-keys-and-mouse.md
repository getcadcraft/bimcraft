---
title: Menüüd, klahvid ja hiir
summary: Vali menüüstiil, mis sobib sinu senise töövooga, anna mis tahes käsule oma klahv, too käsud teistesse menüüdesse ja määra, mida ratas ning iga hiirenupp teevad.
keywords: menüüstiil, menüüd, menüüriba, riba, käsurida, klaviatuuri otseteed, kiirklahvid, klahvid, kohandamine, ümbermääramine, hiir, ratas, pööra ümber, suumi suund, keskmine nupp, nihuta, orbiit, kahetähelised klahvid, eksport, import, vahetamine, tuttav
from: a424e836
---

BimCraft'i käsud on samad, kuidas neid ka kasutad. **Menüüstiil** määrab ainult, kus need ekraanil asuvad, mis nime all need seal on ja millise klahviga need käivituvad, nii et võid jätkata oma harjumustega. Vali see {{ui:Sätted}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menüüd, klahvid ja hiir}}; muudatus jõustub kohe ning see brauser jätab selle meelde.

## Viis stiili

| Stiil | Mida saad |
|---|---|
| {{ui:CadCraft}} | BimCraft'i enda tööriistariba ja klahvid ({{key:W}} sein, {{key:D}} uks, {{key:N}} aken, {{key:X}} lõige, {{key:F}} mahuta). Algus. |
| {{ui:Home design}} | Menüüriba (Fail, Redigeeri, Versioon, Teek, 3D, CAD, Tööriistad, Vaade) ehitustööriistade rea kohal, nagu elamuprojekteerimise programmides. Samad üksikklahvid, lisaks {{key:Mod+L}} teegile, {{key:F9}} 3D-vaatele, {{key:F10}} plaanile ja {{key:F11}} mõlemale. |
| {{ui:BIM ribbon}} | Suurte nuppude sakid (Arhitektuur, Lisa, Märgi, Muuda, Vaade, Väljund) koos menüüga Fail ja kiirnuppudega paremal. Kahetähelised klahvid: {{key:W}} siis {{key:A}} sein, {{key:D}} {{key:R}} uks, {{key:W}} {{key:N}} aken, {{key:S}} {{key:C}} lõige, {{key:Z}} {{key:F}} mahuta. Keskmine nupp nihutab vaadet; {{key:Shift}} ja keskmine nupp orbiteerivad. |
| {{ui:Drafting classic}} | Väike riba ja käsurida neile, kes käske kirjutavad: WALL, DOOR, WINDOW, ROOF, U (võta tagasi), ZOOM, SECTION, PLOT, INSERT, HELP. Alusta kirjutamist kuhu tahes ja tähed lähevad käsureale; {{key:Enter}} käivitab, {{key:Enter}} tühjalt kordab viimast käsku, {{key:Esc}} tühjendab selle. |
| {{ui:Viewer}} | Mudelite avamiseks ja kontrollimiseks, mitte joonistamiseks: menüüd {{ui:Fail}}, {{ui:Vaade}}, {{ui:Näita}}, {{ui:Kontrolli}} ja {{ui:Redigeeri}} vaatamistööriistade rea kohal (mahuta, pealtvaade, eestvaade, külgvaade, lõige, mõõda, peida, isoleeri, läbipaistev, näita kõiki, kõnni). Ehitustööriistad ootavad lõpus menüüs {{ui:Mudel}}. Samad klahvid mis BimCraft'i enda stiilis. |

Menüüd ja ribad ilmuvad, kui mudel on avatud või alustad uut hoonet; enne seda avab vasakpoolne paneel failid ja alustab hooneid.

:::tip
Klahv, mis kuulub BimCraft'i enda paigutusse, kuid mitte valitud stiili, ei tee midagi, ja olekuriba ütleb, kuhu tema käsk läks („Stiilis BIM-riba on Lõige SC“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nooled säilitavad alati oma tähenduse ning töötav tööriist kasutab oma klahve: {{key:R}} ja {{key:Tab}} paigutamise ajal, {{key:W}} {{key:A}} {{key:S}} {{key:D}} kõndimise ajal, {{key:H}} uks- ja aknatööriistaga, numbrid pikkuse sisestamisel.
:::

## Tee see enda omaks

1. Vali stiil, mis on sinu soovile kõige lähedasem, ja kliki {{ui:Kohanda…}}.
2. Vahelehel {{ui:Klahvid ja menüüd}} leia käsk (otsinguväli aitab). Kliki {{ui:Lisa klahv}} ja vajuta klahvi või kahte klahvi järjest kahetähelise klahvi jaoks. Klahvi eemaldamiseks kliki sellel.
3. Menüüriba või riba korral viib {{ui:Asukoht}} käsu teise menüüsse või paneeli või valikusse {{ui:Ainult klahvid}}.
4. Vahelehel {{ui:Hiir}} seadista ratas, nupud, mis plaani nihutavad, ja mida iga nupp 3D-vaadetes teeb.
5. Anna sellele nimi ja kliki {{ui:Salvesta}}.

Sisseehitatud stiili salvestamine teeb sinu enda koopia („Minu elamuprojekteerimine“); sisseehitatud stiil ei muutu kunagi. Klahv, mis on antud kahele käsule, või klahv, mis käivitub enne, kui kahetäheline klahv on sisestatud, on punasega ja tuleb parandada enne salvestamist.

## Hiir

- **Hiireratas**: {{ui:Ratast üles kerides suumitakse sisse}} (algus) või {{ui:Ratast üles kerides suumitakse välja}}, ja kui kiiresti. Puuteplaadi nipsutus suumib alati sõrmede liikumise suunas.
- **Plaani ja jooniste nihutamine**: mis tahes vasak, kesk- või parem nupp. {{key:Space}} ja lohistamine nihutavad samuti; vasaku nupu lohistamine nihutab ainult seal, kus klikk ei valiks ega joonistaks.
- **Lohistamine 3D-vaadetes**: {{ui:Iga vaate oma}} jätab BimCraft'i nupud (vasak orbiteerib, parem nihutab). Või sea iga nupp orbiteerimiseks, nihutamiseks, suumimiseks või tühjaks; {{key:Shift}} koos nupuga vahetab orbiidi ja nihutamise. Klikk ilma lohistamiseta valib ikka.

## Võta kaasa

{{ui:Ekspordi}} salvestab kasutusel oleva stiili väikese faili `.ccinput.json`; {{ui:Impordi…}} lisab ühe, teisest arvutist või kolleegilt. Imporditud fail saab viidata ainult BimCraft'i enda käskudele: kõik muu selles (käsk, mida see versioon ei tea, klahv, mis siin ei tööta) jäetakse välja ja loetakse olekuribal kokku. {{ui:Kustuta see stiil}} eemaldab ühe sinu enda stiilidest.

:::note
Need sätted jäävad sellesse brauserisse. {{ui:Kasuta seda stiili kõigis rakendustes}} stiilikaartide all paneb iga rakenduse avanema oma vastava stiiliga (oma tööriistariba, menüüriba, riba või {{ui:Klassikaline joonestamine}}; {{ui:Vaataja}} on ainult BimCraft'i oma ega vasta kuskil mujal), koos iga rakenduse muudatustega. Rakendus ilma vastava stiilita jääb oma juurde. Teise stiili valimine ühes rakenduses muudab ainult seda rakendust.
:::

Seotud: [Klaviatuur ja hiir](topic:keyboard) · [BimCraft'i sätted](topic:settings) · [Tulek teistest BIM- ja joonestusprogrammidest](topic:coming-from)
