---
title: Vypracování hmoty budovy ze studie lokality
summary: Vezměte hmotu budovy studovanou v zobrazení lokality CivilCraftu a vypracujte ji na podlaží, stěny a podlahy, se zachovaným umístěním lokality na mapě.
keywords: hmota, hmota budovy, tvorba hmot, studie lokality, vypracovat, CivilCraft, předat, podlaží, stěny, podlahy, půdorys, georeferencování, IFC
from: 557b94d1
---

Zobrazení lokality v CivilCraftu umí kreslit hmoty budov na parcele a testovat je proti terénu, zadaným limitům a slunci. **Vypracovat v BimCraftu** tam otevře BimCraft v nové kartě s hmotami; **Hmoty jako IFC** je uloží jako soubor, který zde otevřete obvyklým způsobem. V obou případech každá hmota přijde jako lokalita, budova s jedním podlažím na každé patro a jeden blok (samotná hmota) nesoucí její čísla.

## Vypracovat hmotu

1. Vyberte hmotu ve 3D zobrazení. Vlastnosti ukážou její využití, počet podlaží a výšku podlaží, půdorys, hrubou podlahovou plochu, jak sedí na svahu, a svou parcelu.
2. Klikněte na **Vypracovat tuto hmotu**.

V jednom kroku zpět dostane každé podlaží té budovy stěny kolem půdorysu (půdorys je vnější líc stěn; každá stěna jde až k podlaží nad ní a nejvyšší má výšku jednoho podlaží) a podlahu pod celou budovou. Blok se nahradí a budova si ponechá čísla ze studie v sadě vlastností `CadCraft_SiteMass`, označené jako vypracované. Střecha není: střecha závisí na návrhu.

## Místo lokality

Soubor z CivilCraftu je zapsán v délkové jednotce samotného projektu a, pokud měl projekt CivilCraftu souřadnicový systém, nese jej jako převod mapy projektu. Vypracování hmoty to nemění, takže budova zůstane tam, kde ji mapa ukazuje.
