---
title: Desenarea imaginii cu alt program
summary: Trasorul nostru de cale desenează imaginea Randare; un alt program o poate desena doar printr-un supliment de motor de randare în CadCraft Studio. Ce se transmite și de ce unele programe nu sunt oferite niciodată.
keywords: randare, motor, program extern, motor din supliment, studio, fundal, coadă, usd, gltf, desenată de, blender, gpl
from: 652b413c
---

Imaginea din {{ui:Randare}} este desenată de **motoarele noastre**: Rapid și Trasorul de cale, în browser și în CadCraft Studio. Un alt program o poate desena doar când un **supliment de motor de randare** o aduce: vezi [Adăugarea unui motor de randare cu un supliment](topic:render-engine-addons). Pentru a duce scena într-un alt program și a continua lucrul acolo, folosiți [Deschiderea scenei într-un alt program](topic:render-open-in) sau [Trimiterea scenei către un motor de joc](topic:render-unreal).

## Desenarea unei imagini cu motorul unui supliment

1. Porniți suplimentul în Setări › Suplimente. Motorul lui apare în lista Motor a {{ui:Randare}}.
2. Alegeți-l. Setările lui proprii se afișează sub lista Motor.
3. Faceți clic pe {{ui:Randare}}. În Studio, prima dată când un supliment rulează un program, Studio întreabă în propria casetă de dialog. Progresul se afișează cât timp desenează; {{ui:Oprire}} îl încheie. Imaginea apare marcată cu motorul care a desenat-o.

Un motor scris în JavaScript rulează și în browser. Un motor care rulează un program pe acest calculator rulează doar în Studio; în browser apare ca un fișier de salvat.

## Ce se transmite

Motorul primește un **pachet**: modelul ca fișier USD (și un fișier glTF, dacă îl cere), și un fișier de setări cu valorile exacte ale materialelor, soarele și cerul, fiecare lampă aprinsă cu puterea și profilul ei de lumină, camera și expunerea. Fiecare program luminează, tonifică și eșantionează în felul său, deci imaginile sunt asemănătoare ca cameră, soare, lămpi și expunere, dar nu pixel cu pixel.

## Programe pe care CadCraft nu le rulează niciodată

CadCraft nu pornește niciodată un program sub licența GNU GPL și nu îl listează niciodată ca motor sau ca țintă Deschidere în. Blender este unul dintre ele, deci nu este în lista Motor. Un fișier USD sau glTF salvat din {{ui:Randare}} se poate deschide în el ca în orice program care citește aceste fișiere.

:::note
Camerele panoramice și stereo și o imagine de cer (se folosesc în schimb culorile cerului) nu se transmit unui alt program. Nimic făcut într-un alt program nu revine în model.
:::
