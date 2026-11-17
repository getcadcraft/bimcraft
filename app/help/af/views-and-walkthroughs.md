---
title: Stoor aansigte en wandelinge
summary: Hou kameraaansigte van die model by naam, gaan terug na hulle, speel hulle een na die ander, en neem 'n wandeling deur die gebou op om terug te speel.
keywords: aansigte, gestoorde aansigte, kamera, kameras, aansigspunt, toneel, tonele, toer, aanbieding, wandeling, deurwandel, deurvlieg, opneem, speel, pad, animasie
from: 3af19a36
---

{{ui:Aansigte}} op die nutsbalk hou kameras van die 3D-aansig in die model se lêer, sodat jy en enigiemand aan wie jy dit stuur, direk na hulle kan teruggaan.

## Stoor 'n aansig

1. Stel die 3D-aansig op: wentel, zoem, versteek wat jy nie wil hê nie.
2. Klik {{ui:Aansigte}}, tik 'n naam (of hou die naam wat aangebied word) en klik {{ui:Stoor aansig}} of druk {{key:Enter}}.

As jy met 'n naam stoor wat reeds in die lys is, werk dit daardie aansig by. Klik 'n aansig se naam om daarna terug te gaan; die kamera beweeg glad daarheen.

Die pyltjies verander die volgorde, die potlood hernoem, die vullisbak skrap. Elke verandering is een stap, dus ontdoen {{key:Ctrl+Z}} dit.

## Speel die aansigte

{{ui:Speel die aansigte}} beweeg van een aansig na die volgende in die lys se volgorde, en bly 'n oomblik by elk stilstaan. {{key:Esc}} of {{ui:Stop}} beëindig dit.

## Neem 'n deurwandeling op

1. Skakel [Wandel](topic:walk) aan en begin binne-in die gebou loop.
2. Klik in {{ui:Aansigte}} op {{ui:Neem 'n wandeling op}}.
3. Loop met {{key:W}} {{key:A}} {{key:S}} {{key:D}} en kyk rond met die muis.
4. Klik {{ui:Hou op opneem}}. Die wandeling word gestoor as "Walk 1", met sy lengte.

Klik 'n wandeling om dit terug te speel soos jy dit geloop het. {{key:Esc}} stop dit.

## Render 'n deurwandeling as video

Klik die filmikoon langs 'n wandeling. Die videodialoog teken elke raam van die wandeling met die Render-instellings wat jy laas gekies het, by die grootte, raamtempo en gehalte wat jy hier kies. Stoor dit as 'n WebM- of MP4-video, of as 'n zip met een prent per raam. Rame neem net so lank as prente, so begin met {{ui:Vinnig}}.

## Vertel 'n deurwandeling

Klik die praatborrel-ikoon langs 'n wandeling. Skryf een reël vir elke ding wat gesê word, en begin 'n reël met die tyd waarop dit begin (`12`, `0:12` of `1:02.5`); 'n reël sonder tyd volg die reël bokant, na die tyd wat dit neem om dit te sê. Kies die taal, in die kliënt se taal as dit hulle is wat sal kyk. {{ui:Voorskou}} speel die woorde met hierdie rekenaar se eie stem en wys hulle as onderskrifte; dieselfde gebeur wanneer die wandeling speel. {{ui:Stoor saam met die wandeling}} hou die narasie in die IFC saam met die wandeling.

Jou eie gekoppelde assistent kan die narasie vir jou skryf: vra dit om na die wandeling en die gestoorde aansigte te kyk, en dit sit die reëls in die taal wat jy noem, as een ontdoen-stap.

Die weergegewe video het nie 'n eie klank nie, omdat 'n blaaier nie sy eie stem kan opneem nie. Stoor die onderskrifte (`.srt` of `.vtt`) en voeg hulle by die video in jou videospeler of -redigeerder. Watter stemme jy kan kies, hang van die rekenaar af; 'n taal sonder geïnstalleerde stem kry steeds die onderskrifte.

## In die lêer

Aansigte en wandelinge word in die IFC bewaar as die eienskapstel `CadCraft_Views` op die projek: gewone IFC wat ander programme ignoreer. Hulle is in die eerste model se koördinate, so hulle pas steeds nadat die model herlaai is of 'n ander model bygevoeg is.

:::tip
Om 'n prent uit 'n gestoorde aansig te weergee, gaan na die aansig en klik [Weergee](topic:render).
:::
