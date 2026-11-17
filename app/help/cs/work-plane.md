---
title: Pracovní rovina: nastavit, zobrazit, dívat se na ni kolmo
summary: Pracovní rovina je rovina, kterou používají čáry modelu, text modelu a Prohlížeč pracovní roviny. Nastavte ji na úroveň, plochu, pojmenovanou referenční rovinu nebo čáru; zobrazte ji v pohledech; otevřete prohlížeč a kreslete na svislou rovinu.
keywords: pracovní rovina, nastavit pracovní rovinu, zobrazit pracovní rovinu, referenční rovina, prohlížeč pracovní roviny, pojmenovaná rovina, plocha, úroveň, svislá rovina, kolmá rovina, kreslení na stěnu, výkres pohledu, uchopení, zarovnání, ref rovina
from: 8aceee1d
---

## Co uděláte

Vyberte rovinu, na kterou kreslíte, zjistěte, kde se nachází, a kreslete na svisle stojící rovinu.

## Postup

1. Zapněte **Kreslení** a otevřete nabídku **Konstrukce** (v rozvržení s pásem karet: karta Architektura, Pracovní rovina).
2. Zvolte **Nastavit pracovní rovinu**. Potom udělejte jedno z následujícího:
   - vyberte úroveň v **Nastavit na**;
   - vyberte pojmenovanou referenční rovinu v seznamu vedle;
   - klikněte na čáru v půdorysu: stěnu, osu, referenční rovinu, čáru modelu nebo systém opláštění. Pracovní rovina se stane svislou rovinou procházející touto čárou;
   - klikněte na rovnou plochu ve 3D zobrazení. Pracovní rovina leží na této ploše.
3. Zvolte **Zobrazit pracovní rovinu**, aby se zobrazila: barevně podbarvený list s mřížkou po metru ve 3D zobrazení, přerušovaný obrys nebo čára v půdorysu a přerušovaný obrys v panelu pohledů a řezů. Opětovným zvolením ji skryjete.
4. Zvolte **Prohlížeč pracovní roviny**, abyste se na rovinu podívali kolmo. Černé čáry jsou model řezaný rovinou. Jeho nástroji nakreslete na rovinu čáru modelu, text modelu nebo referenční rovinu. **Podívat se na ni ve 3D** otočí 3D zobrazení tak, aby bylo čelem k rovině.

## Referenční roviny

Referenční rovina je pojmenovaná rovina, kterou nakreslíte jako čáru.

1. Zvolte **Referenční rovina**. Pokud ji chcete pojmenovat, napište do jejího řádku název (jinak dostane název automaticky) a výšku.
2. Klikněte, kde začíná a kde končí. V půdorysu vznikne svislá rovina. V prohlížeči pracovní roviny vznikne rovina kolmá k pracovní rovině.
3. Zobrazí se jako přerušovaná zelená čára s názvem v půdorysu, přerušovaný obrys ve 3D zobrazení a v panelu pohledů a řezů.
4. Vyberte ji, pokud ji chcete přejmenovat, změnit její délku, výšku a počátek, nebo stiskněte **Použít jako pracovní rovinu**.

Dvě referenční roviny nemohou mít stejný název, protože podle něj ji vybíráte.

## Dobré vědět

- Model bez nastavené pracovní roviny pracuje na své nejnižší úrovni.
- Pracovní rovina se ukládá do souboru. Zobrazení nebo skrytí si pamatuje tento prohlížeč, nikoli soubor.
- Pokud pracovní rovina sleduje referenční rovinu a vy tuto rovinu přesunete, pracovní rovina se přesune s ní.
- U svisle stojící pracovní roviny otevírají nástroje Čára modelu a Text modelu prohlížeč, protože půdorys nemůže ukazovat do výšky.
- Nástroje kreslení chytají konce referenčních rovin nakreslených v půdorysu stejně, jako chytají konce jiných čar v prohlížeči.

## V souboru IFC

- Pracovní rovina je sada vlastností (CadCraft_WorkPlane) na projektu.
- Referenční rovina je IfcAnnotation s typem objektu ReferencePlane a svým názvem. Jejím tvarem je uzavřený obrys roviny, takže ji jiný program zobrazí tam, kde je. Její sada CadCraft_ReferencePlane obsahuje počátek, směr, normálu a rozsah. IFC nemá pro referenční rovinu třídu; anotace se nepočítá jako stavební prvek a neohraničuje místnosti.
