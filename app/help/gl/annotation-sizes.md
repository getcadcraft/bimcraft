---
title: Debuxar a tamaño real, anotar por escala
summary: O edificio debúxase sempre a tamaño real. O texto, as cotas, as etiquetas, os nomes de cuartos, as burbullas de cuadrícula e os símbolos dimensiónanse en papel, en milímetros tal como se imprimen, e conservan ese tamaño cando a escala dun debuxo cambia de 1:100 a 1:50.
keywords: escala de anotación, anotativo, tamaño do texto, altura do texto, altura en papel, tamaño do texto das cotas, tamaño da etiqueta, tamaño do nome de cuarto, burbulla de cuadrícula, tamaño do símbolo, escala do debuxo, 1:50, 1:100, estándar da oficina, rotulación, debuxar a 1:1, tamaño real, texto da folla
from: 94118788
---

## O que vai facer

Estableza unha vez, para o edificio, a altura das letras dos seus debuxos no papel. Nunca escala o modelo nin cambia o tamaño do texto para unha escala: BimCraft calcula o tamaño a partir da altura en papel e da escala do debuxo.

## Como funciona

- O modelo está a tamaño real. Un muro de 10 m de lonxitude mide 10 000 mm de lonxitude en calquera escala.
- Unha anotación ten unha **altura en papel**: a altura dunha maiúscula na folla impresa, en milímetros.
- A unha escala de 1:100, un texto de 2,5 mm mide 250 mm de altura no modelo; a 1:50 mide 125 mm. No papel mide 2,5 mm nos dous casos.
- Os símbolos de planta (electricidade, fontanería) debúxanse en milímetros de papel e seguen a mesma regra.

## Pasos

1. Abra o navegador de proxectos. Baixo {{ui:Follas}} prema en {{ui:Tamaños das anotacións…}}.
2. Escriba unha altura en milímetros para os tipos que quere fixar: {{ui:Notas e etiquetas}}, {{ui:Texto das cotas}}, {{ui:Etiquetas e nomes de nivel}}, {{ui:Nomes de cuartos}}, {{ui:Letras das burbullas de cuadrícula}}, {{ui:Títulos de vistas nas follas}} e {{ui:Texto dos cadros}}. Unha caixa baleira mantén o tamaño propio de BimCraft, que se mostra en gris.
3. Prema en {{ui:Gardar}}. É un único paso que se pode desfacer.

A partir de entón, todas as follas, o conxunto de debuxos, o PDF da planta e os alzados e seccións usan estes tamaños. A distancia entre a liña de cota e o seu texto, o tamaño dunha burbulla de cuadrícula e a altura dunha fila do cadro medran co seu texto.

## Unha planta con escala propia

Dálle a unha planta unha {{ui:Escala}} no seu rango de vista (ver [Vistas e follas](topic:views-and-sheets)). Entón:

- na pantalla, os nomes de cuartos, as etiquetas, o texto das cotas e as burbullas de cuadrícula debúxanse co seu tamaño impreso fronte ao modelo, así que o que ve é o que mostrará a folla;
- os símbolos de planta e as súas etiquetas dimensiónanse para esa escala. Se cambia a escala de 1:100 a 1:50, son a metade de grandes no modelo e iguais no papel.

Unha planta sen escala propia conserva o seu texto fixo en pantalla, e os seus símbolos dimensiónanse para 1:50 (1/4" = 1'-0" en pés e polgadas), como antes.

## Os tamaños da súa oficina

Con o complemento Default Policies activado, estableza as alturas da oficina en Configuración › Global › Default Policies › {{ui:Tamaños das anotacións en papel}}. Un edificio novo tómaos ao premer en Crear. Nun edificio que xa comezou, o diálogo ten {{ui:Usar os tamaños da miña oficina}}. Ver [Default Policies](topic:default-policies).

## Os tamaños dun paquete normativo

Un paquete normativo pode dar as alturas de texto que pide o seu lugar (o complemento Building regulations, convencións de debuxo). Marque o paquete en Configuración › Building regulations e, despois, no diálogo prema en {{ui:Usar os tamaños dun paquete normativo}}: as caixas énchense, e vostede compróbaas e garda. Un tamaño que un paquete dá en puntos é un tamaño de letra, e convértese nunha altura de maiúscula, polo que hai que comprobalo. Non se fixa nada ata que garde.

## O que debe ver

- A mesma altura de texto en milímetros nunha folla a 1:100 e nunha folla a 1:50, mentres que a propia planta é o dobre de grande a 1:50.
- Os tamaños acompañan o edificio: gárdanse no seu ficheiro IFC.

## Cousas que conviña saber

- Os tamaños propios de BimCraft son os que as súas follas usaron sempre (preto de 1,5 mm de maiúsculas para o texto das cotas). Non son un estándar de debuxo: estableza os da súa oficina.
- Unha altura debe estar entre 0,5 e 50 mm.
- A rotulación do caixetín e as lendas das notas clave non entran aquí: conservan os seus propios tamaños.
