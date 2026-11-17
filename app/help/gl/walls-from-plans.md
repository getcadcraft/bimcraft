---
title: Muros a partir dun conxunto de planos (PDF ou escaneado)
summary: Convirta as páxinas dun PDF, ou dun debuxo escaneado, en muros, portas e xanelas, cun nivel por cada páxina, coa páxina conservada debaixo de cada planta.
keywords: pdf, planos, conxunto de planos, escaneado, debuxo escaneado, tiff, calcar, muros a partir dun pdf, muros a partir dun escaneado, niveis, páxinas, escala, portas, xanelas, sentido de apertura, peitoril, subxacente
from: b70d9db7
---

## Que vai facer

Comece un modelo a partir dos planos que ten en papel: un PDF (debuxado como liñas, ou un escaneado dentro dun PDF) ou un escaneado (PNG, JPEG, TIFF cunha ou varias páxinas). Cada páxina convértese nos muros, portas e xanelas dun nivel.

## Pasos

1. Active {{ui:Debuxar}}. Escolla {{ui:Compilación}} › {{ui:Desde un debuxo…}}, despois {{ui:Escoller un debuxo…}} e escolla o PDF ou o escaneado.
2. **Páxinas e niveis.** Cada páxina aparece listada co que é (**debuxo de liñas**, ou **unha imaxe (calcada)**) e o nivel ao que vai: un dos niveis que xa ten, **un nivel novo por encima dos demais**, ou **deixar esta páxina fóra**. As páxinas emparéllanse cos seus niveis por orde; cambie calquera delas.
3. **Escala.** Para un PDF, indique como foi debuxado (**1 : 100**, **1 : 50**…). Para calquera outro caso, ou cando non o sabe, escolla **desde unha distancia que coñezo**: prema os dous extremos dunha cota ou dunha barra de escala na vista previa, e logo escriba a distancia real. Todas as páxinas usan unha mesma escala.
4. Escolla o **tipo de muro** e a **altura dun nivel novo**. Deixe marcado **Manter cada páxina debaixo da planta do seu nivel** para ver cada páxina como liñas finas debaixo da súa planta.
5. A liña debaixo das opcións indica cantos muros, portas e xanelas vai facer, e en cantos niveis. Prema {{ui:Facelas}}.

## Como le unha páxina

- **Os muros** saen de pares de liñas paralelas a menos de 600 mm (as dúas caras dun muro); o muro é tan grosor como a separación. Os trazos de trama e as letras quedan fóra.
- **Portas e xanelas.** Un oco nun muro (de 500 a 2600 mm) cun arco de apertura da porta debuxado ao lado é unha porta, con bisagra nun extremo do oco e abrindo cara ao lado do arco. Un oco ou un muro con liñas de peitoril é unha xanela. Un oco sen ningunha das dúas cousas é unha porta ata 1300 mm e unha xanela a partir de aí.
- **Un escaneado** endereitase primeiro se se escaneou torto (o diálogo di se pasou), pásase a branco e negro, límpase de manchas e calcase; unha **páxina dun PDF que é unha imaxe** debúxase primeiro e trátase despois do mesmo xeito. O calco atopa o centro de cada trazo e axusta liñas rectas e arcos a el; non usa rede nin modelo adestrado.
- **Os espazos** seguen por si mesmos dos bucles pechados que forman os muros. Cando o PDF ten texto, un espazo toma o nome da letra que hai dentro (a máis grande; unha cota, unha escala ou un número de folla non é un nome). Un escaneado non ten texto, así que os seus espazos conservan os nomes que lles dá o programa.
- **Todo o que se le da páxina queda marcado como sen verificar**: cada muro, porta, xanela e espazo ten unha caixa de trazos e un «?» na planta ata que o comprobe. Escolla o que xa comprobou e use {{ui:Herramentas}} › {{ui:Marcar como comprobado}}. Vexa [Marcar elementos como comprobados ou verificados en obra](topic:verification).

## Que debería ver

- Os muros, portas, xanelas e espazos de cada nivel, e os novos niveis que se engadan, todo como un só paso: {{key:Mod+Z}} desfai todo.
- Cada páxina como liñas finas debaixo da planta do seu nivel, listada en {{ui:Compilación}} › {{ui:Desde un debuxo…}} con {{ui:Eliminar}}.

:::note
Isto é o que deron as liñas, coa precisión da páxina. Un escaneado pode perder un muro tenue, unir dous muros moi próximos ou atopar un muro nunha mancha; un sentido de apertura que o debuxo non mostra converte un oco nunha porta simple. Comprobe cada nivel contra a páxina antes de fiarse del, e corrixa o que estea mal coas ferramentas {{ui:Muro}}, {{ui:Porta}} e {{ui:Xanela}}.
:::
