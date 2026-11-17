---
title: Definições do BimCraft
summary: Escolha se os compartimentos e os espaços aparecem, se as arestas são desenhadas e em que vista abre um modelo, e comece a colocar com o snap à parede ativado.
keywords: definições, preferências, opções, espaços, compartimentos, ifcspace, arestas, linhas, desempenho, modelo grande, vista de abertura, câmara, vista de topo, snap à parede, snap
from: 4416e64f
---

Abra {{ui:Definições}} com a engrenagem na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:BimCraft}}, contém as definições desta aplicação; {{ui:Geral}} contém as que todas as aplicações do CadCraft partilham (tema, barra de ferramentas, painéis). As definições do BimCraft existem só na aplicação: alteram-se aqui, e este navegador guarda-as. {{ui:Repor definições do BimCraft}}, na parte inferior da caixa de diálogo, repõe-nas, e também as partilhadas, para o estado inicial.

## Menus, teclas e rato

O estilo do menu (a barra de ferramentas própria do BimCraft, uma barra de menus de design de habitações, um friso BIM ou uma linha de comandos de desenho), as suas próprias teclas e menus, e o que a roda e os botões do rato fazem. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse).

## Ao abrir um modelo

- **Mostrar compartimentos e espaços** (desligado no início): os compartimentos e os espaços são caixas transparentes que podem ocultar as paredes atrás deles, por isso começam ocultos. O botão {{ui:Espaços}} acima do modelo continua a ligá-los e desligá-los no modelo aberto.
- **Arestas**: {{ui:Arestas ligadas}} (o valor inicial) desenha as linhas de aresta que dão o aspeto de desenho técnico. {{ui:Só modelos pequenos}} desenha-as apenas em modelos com menos de 300,000 triângulos, o que mantém os modelos grandes mais rápidos de rodar. {{ui:Arestas desligadas}} inicia todos os modelos sem elas. O botão {{ui:Arestas}} continua a ligá-las e desligá-las no modelo aberto. Acima de 1.5 milhões de triângulos, as arestas estão sempre desligadas.

## Os desenhos abrem em

Como aparece primeiro um desenho DWG ou DXF: {{ui:3D (mais rápido)}} (o valor inicial) desenha depressa mesmo um desenho grande, ou {{ui:Modelo (2D)}} abre a vista plana do espaço modelo. Os separadores acima do desenho alternam entre {{ui:Modelo}}, as {{ui:Folhas}} e {{ui:3D}} a qualquer momento. Um desenho sem nada no espaço modelo, ou um navegador que não consegue mostrar 3D, abre sempre em 2D.

## Vista de abertura

A câmara com que um modelo abre: {{ui:Ajustar}} (o valor inicial, o modelo inteiro a partir de um canto), {{ui:Superior}}, {{ui:Frontal}} ou {{ui:Lado}}. Os botões acima do modelo mudam a vista a qualquer momento.

**Um edifício rodado no seu terreno**: muitos modelos chegam com o edifício num ângulo em relação aos eixos do ficheiro (em coordenadas de levantamento ou partilhadas). {{ui:Em esquadria com o edifício}} (o valor inicial) mostra esse edifício em esquadria: {{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lado}}, as faces do cubo de vistas e cada novo corte seguem as suas paredes, e a bússola do cubo de vistas continua a apontar para o norte do modelo. {{ui:Tal como colocado no terreno}} mantém os eixos do ficheiro. Um edifício cujas paredes seguem os eixos tem o mesmo aspeto em qualquer dos casos.

## Colocar itens da biblioteca

**Comece com o snap à parede ativado** (desativado no início): quando começar a colocar ou a colar um item da biblioteca, a sua parte de trás encaixa na parede mais próxima, virada para o compartimento. {{key:Tab}} ou {{ui:Snap à parede}} na barra de colocação desliga-o de momento. Um piso sem paredes começa sem ele.

## Caixa de corte

{{ui:Folga à volta da escolha}} é o espaço que a {{ui:Caixa de corte à volta da escolha}} deixa em cada lado dos elementos escolhidos, em milímetros: 300 no início, até 5000. Ver [Cortar um modelo IFC com um plano de corte](topic:section-plane).

## Localização

{{ui:Latitude e longitude em}} escolhe o sistema em que {{ui:Medir}} › {{ui:Localização}} indica as latitudes e longitudes: WGS 84 (EPSG:4326, o valor inicial, como usam o GPS e os mapas da web), {{ui:O datum do próprio ficheiro}}, ou um de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 e CGCS2000. O sistema de mapa e o datum do próprio ficheiro são sempre mostrados também. Ver [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).

## Indicador de canto

O que fica no canto inferior direito das vistas 3D (um modelo IFC, e um desenho passado para 3D): {{ui:Cubo de vistas}} (o valor inicial), {{ui:Ícone de eixos}} (um pequeno X, Y e Z) ou {{ui:Nenhum}}. Muda de imediato. A vista 2D de desenho nunca mostra nenhum.

No cubo de vistas, clique numa face, numa aresta ou num canto para ver a partir desse lado, arraste o cubo para orbitar, arraste o anel para rodar e clique na casa para a vista inicial.

## O seu nome nas questões

Com sessão iniciada, as questões levam o nome da sua conta e o BimCraft não pede nada: esta parte mostra {{ui:Da sua conta (<name>)}}. {{ui:Usar outro nome}} abre uma caixa para outro nome, que prevalece até escolher {{ui:Usar o nome da minha conta}}. Sem sessão iniciada, o formulário da questão pede um nome como antes. Ver [Questões e ficheiros BCF](topic:issues-bcf).

## Assistentes

**Permitir que assistentes de IA e scripts usem o BimCraft** (desativado no início) permite que um assistente no seu computador chegue ao modelo aberto através do CadCraft Studio: **Ler** encontra elementos e lê as suas propriedades, **Alterar a vista** isola, oculta e mostra-os. **Atividade** lista as suas chamadas. Ver [Deixar um assistente de IA trabalhar com o seu modelo](topic:assistants).

:::note
As outras definições aplicam-se quando um modelo abre ou quando começa a colocação. Um modelo já aberto mantém o seu aspeto até usar os botões da barra de ferramentas ou voltar a abri-lo.
:::

## Relacionados

- [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste)
- [Colocar equipamento e mobiliário a partir da biblioteca](topic:place-from-library)
- [O ecrã do BimCraft](topic:workspace)
- [Deixar um assistente de IA trabalhar com o seu modelo](topic:assistants)
