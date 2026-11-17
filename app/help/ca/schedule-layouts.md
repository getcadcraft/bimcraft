---
title: Disposa, desa i exporta un quadre
summary: Agrupeu un quadre, doneu-li subtotals i totals, afegiu una columna llegida d'una propietat, deseu-lo com a configuració al fitxer, i exporteu-lo com a llibre de full de càlcul (.xlsx), com a text per enganxar en un full en línia, o com a CSV. L'estàndard de l'oficina omple el que un quadre no indica.
keywords: disposició de quadres, agrupa per, subtotal, total, encapçalaments, estàndard de l'oficina, polítiques per defecte, configuració, quadre de portes per planta, resistència al foc, ferreteria, xlsx, llibre, full en línia, enganxa, csv, exporta, full de càlcul, elements, selecciona des del quadre, xifra
from: 95dfd801
---

## Què farà

Convertiu un quadre simple en el que la vostra oficina emet: agrupat per planta, tipus o sala, amb subtotals i un total, amb les columnes que necessiteu, i amb el seu propi nom. Després envieu-lo a un full de càlcul. Cada fila i cada xifra encara sap els elements d'on surt.

## Passos

1. Activeu {{ui:Dibuixa}} i obriu **Quadres** al tauler de l'esquerra. Trieu un quadre, per exemple **Portes**.
2. Sobre la taula, trieu **Agrupa per** (una columna del quadre, com Planta o Tipus, o **Sense agrupació**) i **Totals** (**Sense totals**, **Un total**, o **Subtotals i un total**). **Tal com s'ha definit** deixa l'elecció a la configuració desada o a l'estàndard de l'oficina.
3. Per afegir una columna llegida dels elements, escriviu sota la taula un nom de propietat o d'etiqueta (per exemple `FireRating`, `Pset_DoorCommon.FireRating` o el nom d'una etiqueta com `Ironmongery`) i feu clic a **Afegeix una columna**. BimCraft llegeix primer els conjunts de propietats de l'element i després els del seu tipus. Quan cap element encara té un valor, ho indica; la columna s'omple sola quan s'estableixi un valor.
4. Escriviu un nom (per exemple "Quadre de portes per planta") i feu clic a **Desa com a configuració**. La configuració es guarda al fitxer de l'edifici i s'afegeix a la llista de Quadres amb el seu nom. Segueix tots els canvis del model. **Treu aquesta configuració** la retira. Totes dues són un sol pas de Desfés.

## Feu clic a una xifra per seleccionar d'on ve

Feu clic a qualsevol fila, o a qualsevol xifra individual, per seleccionar els elements que hi ha darrere al plànol i en 3D:

- una fila selecciona els elements d'aquella fila;
- un subtotal o un total selecciona tot el que suma, i un encapçalament de grup selecciona el seu grup;
- una xifra amb elements propis selecciona aquests: els **Descomptes** d'un tipus de mur seleccionen les seves portes i finestres, i l'àrea de paret d'una sala, els seus murs.

El mateix funciona en un document fet del model: a la vista prèvia, feu clic en una xifra d'un quadre.

## Exporta

- **Baixa Excel** desa un llibre .xlsx. Les longituds, àrees, volums i recomptes són nombres reals, en la unitat que mostra la columna (els peus i polzades continuen sent text). Un segon full, **Elements**, llista per a cada línia els GlobalId dels elements que hi ha darrere.
- **Copia per a Google Sheets** posa el quadre al porta-retalls com a text separat per tabulacions. En un full de Google, feu clic a la cel·la A1 i enganxeu. **Obre un full nou de Google** obre `sheets.new`, l'adreça pròpia de Google per a un full buit, al vostre compte de Google. BimCraft no inicia sessió a Google i no envia res allà: l'enganxada la feu vosaltres.
- **Baixa CSV** desa la taula tal com està disposada a la pantalla.

## L'estàndard de l'oficina

Una oficina pot indicar una vegada com es disposen els seus quadres. Activeu el complement **Polítiques per defecte** ([Polítiques per defecte](topic:default-policies)) i definiu, a **Configuració › Global › Polítiques per defecte › Disposició de quadres (l'estàndard de l'oficina)**:

| Política | Què fa |
|---|---|
| Agrupa els quadres per | Planta, Tipus, Sala o cap agrupació, per a tots els quadres que tinguin aquesta columna |
| Totals als quadres | Cap total, un total al final, o un subtotal sota cada grup i un total |
| Títol del quadre | Un patró, per exemple `{project}: {schedule}` |
| Encapçalaments de columna | Tal com s'escriuen, EN MAJÚSCULES o Amb Majúscules |

L'estàndard s'aplica a tots els quadres, qui sigui qui els configuri: els quadres simples del tauler, una configuració desada, un quadre que configura un assistent, les exportacions i els quadres d'un document. Una configuració que indica el seu propi agrupament, totals o títol els conserva; l'estàndard completa la resta. El tauler indica quines parts ha definit l'estàndard de l'oficina. Les polítiques viatgen al fitxer de Polítiques per defecte amb les altres.

## Bo de saber

- Una configuració indica el seu quadre d'origen i les seves columnes; no conté xifres. Les xifres es llegeixen del model cada vegada.
- Les llistes que no són files d'elements (els conjunts de murs i la llegenda de materials) no tenen disposició ni exportació aquí.
- Un assistent pot fer tot això per a vosaltres: vegeu [Deixa que un assistent d'IA treballi amb el vostre model](topic:assistants).
