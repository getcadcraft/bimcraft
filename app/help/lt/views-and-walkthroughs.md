---
title: Vaizdų ir pasivaikščiojimų įrašymas
summary: Išsaugokite modelio kamerų vaizdus pagal pavadinimą, grįžkite prie jų, leiskite juos vieną po kito ir įrašykite pasivaikščiojimą per pastatą, kad galėtumėte jį paleisti.
keywords: vaizdai, išsaugoti vaizdai, kamera, kameros, žiūros taškas, scena, scenos, ekskursija, pristatymas, pasivaikščiojimas, vaikščioti, perskristi, įrašyti, paleisti, kelias, animacija
from: 3af19a36
---

{{ui:Vaizdai}} įrankių juostoje saugo 3D vaizdo kameras modelio faile, kad jūs ir tas, kam jį išsiųsite, galėtumėte iškart grįžti prie jų.

## Išsaugoti vaizdą

1. Nustatykite 3D vaizdą: sukite, keiskite mastelį, paslėpkite tai, ko nereikia.
2. Spustelėkite {{ui:Vaizdai}}, įveskite pavadinimą (arba palikite siūlomą) ir spustelėkite {{ui:Įrašyti vaizdą}} arba paspauskite {{key:Enter}}.

Įrašius pavadinimu, kuris jau yra sąraše, tas vaizdas atnaujinamas. Spustelėkite vaizdo pavadinimą, kad grįžtumėte į jį; kamera sklandžiai nuvažiuoja ten.

Rodyklės keičia tvarką, pieštukas pervadina, šiukšliadėžė ištrina. Kiekvienas pakeitimas yra vienas veiksmas, todėl {{key:Ctrl+Z}} jį anuliuoja.

## Leisti vaizdus

{{ui:Leisti vaizdus}} pereina nuo vieno vaizdo prie kito pagal sąrašo tvarką, kiekviename trumpam sustodamas. {{key:Esc}} arba {{ui:Stabdyti}} jį baigia.

## Įrašyti pasivaikščiojimą

1. Įjunkite [Vaikščiojimas](topic:walk) ir pradėkite vaikščioti pastato viduje.
2. Spustelėkite {{ui:Vaizdai}}, tada {{ui:Įrašyti pasivaikščiojimą}}.
3. Vaikščiokite su {{key:W}} {{key:A}} {{key:S}} {{key:D}} ir žvalgykitės pele.
4. Spustelėkite {{ui:Stabdyti įrašymą}}. Pasivaikščiojimas įrašomas kaip „Walk 1“, nurodant jo ilgį.

Spustelėkite pasivaikščiojimą, kad jį paleistumėte taip, kaip vaikščiojote. {{key:Esc}} jį sustabdo.

## Pateikti pasivaikščiojimą kaip vaizdo įrašą

Spustelėkite juostelės piktogramą šalia pasivaikščiojimo. Vaizdo įrašo langas nupiešia kiekvieną pasivaikščiojimo kadrą su paskutinius kartus pasirinktais atvaizdavimo parametrais, pagal dydį, kadrų dažnį ir kokybę, kuriuos čia pasirenkate. Įrašykite jį kaip WebM ar MP4 vaizdo įrašą arba kaip ZIP archyvą su vienu paveikslėliu kiekvienam kadrui. Kadrai trunka tiek pat, kiek paveikslėliai, todėl pradėkite nuo {{ui:Greitas}}.

## Pasivaikščiojimo komentaras

Spustelėkite kalbos burbulo piktogramą šalia pasivaikščiojimo. Parašykite po vieną eilutę kiekvienam pasakytam dalykui, o eilutę pradėkite laiku, kada ji prasideda (`12`, `0:12` arba `1:02.5`); eilutė be laiko seka eilutę virš jos po to laiko, kurio jai ištarti reikia. Pasirinkite kalbą – jei žiūrovas yra klientas, tai klientui suprantama kalba. {{ui:Peržiūra}} groja žodžius šio kompiuterio balsu ir rodo juos kaip subtitrus; tas pats vyksta kiekvieną kartą, kai pasivaikščiojimas paleidžiamas. {{ui:Įrašyti kartu su pasivaikščiojimu}} išsaugo komentarą IFC faile kartu su pasivaikščiojimu.

Jūsų prijungtas asistentas gali parašyti komentarą už jus: paprašykite jo pažvelgti į pasivaikščiojimą ir išsaugotus vaizdus, o jis nustato eilutes jūsų nurodyta kalba kaip vieną anuliavimo veiksmą.

Pateiktas vaizdo įrašas neturi savo garso, nes naršyklė negali įrašyti savo balso. Išsaugokite subtitrus (`.srt` arba `.vtt`) ir pridėkite juos prie vaizdo įrašo savo vaizdo grotuvėje ar redaktoriuje. Kuriuos balsus galite pasirinkti, priklauso nuo kompiuterio: kalba, kuriai nėra įdiegto balso, vis tiek gauna subtitrus.

## Faile

Vaizdai ir pasivaikščiojimai IFC faile saugomi kaip savybių rinkinys `CadCraft_Views` projekte: paprastas IFC, kurį kitos programos ignoruoja. Jie pateikti pirmo modelio koordinatėmis, todėl po modelio perkrovimo ar pridėjus kitą modelį vis tiek tinka.

:::tip
Norėdami nupiešti paveikslėlį iš išsaugoto vaizdo, eikite į vaizdą ir spustelėkite [Atvaizdavimas](topic:render).
:::
