---
title: Trazer os seus próprios objetos e ficheiros de famílias para a Biblioteca
summary: Leia ficheiros de família (.rfa) e ficheiros IFC, DWG, DXF, glTF ou OBJ no separador Biblioteca, coloque-os como qualquer item da biblioteca e guarde-os em Os meus objetos, uma lista privada visível apenas para o próprio utilizador.
keywords: rfa, família, famílias, biblioteca de famílias, objetos próprios, os meus objetos, objetos privados, biblioteca privada, importar objetos, conteúdo do fabricante, objetos bim, objeto ifc, gltf, obj, bloco dwg, guardar, trocar, migrar
from: 886261f8
---

## O que vai fazer

Trazer para o BimCraft objetos que já tem: uma biblioteca de famílias do Revit, um download IFC ou DWG de um fabricante, uma malha de outro modelador. O ficheiro é lido no separador {{ui:Biblioteca}}, o objeto é colocado no modelo como um elemento IFC próprio e, se o quiser voltar a usar, guarda-se em {{ui:Os meus objetos}}.

## Passos

1. Abra um modelo IFC, ou comece um edifício novo.
2. Clique no separador {{ui:Biblioteca}}, ao lado de {{ui:Propriedades}}.
3. Clique em {{ui:Ficheiros…}} e depois em {{ui:Escolher um ficheiro…}}. Escolha um ficheiro ou vários de uma vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ou `.csv`. Ou clique em {{ui:Escolher uma pasta…}} para ler uma pasta inteira e as pastas dentro dela (até 200 ficheiros de uma vez).
4. Clique num cartão para ver o que foi lido: a pré-visualização da planta, o nome, o fabricante e o modelo, os tamanhos e as notas.
5. Clique em {{ui:Colocar na planta}} ou em {{ui:Colocar no modelo}} para o colocar.
6. Para o voltar a usar noutros projetos, clique em {{ui:Guardar nos meus objetos}}. Com vários ficheiros lidos, {{ui:Guardar tudo nos meus objetos}} guarda-os todos de uma vez.
7. Mais tarde, clique em {{ui:Os meus objetos}} no separador Biblioteca para os encontrar. São colocados, trocados e atualizados como qualquer item da biblioteca.

Os ficheiros são lidos neste separador. Nada é carregado até escolher {{ui:Guardar nos meus objetos}}.

## O que se obtém de cada tipo de ficheiro

| Ficheiro | O que se obtém |
|---|---|
| IFC | Cada tipo de elemento como um objeto com a sua forma 3D real, classe IFC e conjuntos de propriedades |
| glTF, GLB, OBJ | Um objeto com a sua forma 3D real como malha. Defina primeiro as unidades e o eixo vertical. |
| DWG, DXF | Cada bloco como um objeto com o seu desenho de planta e atributos |
| Ficheiro de família (`.rfa`) | O nome, a categoria, o fabricante, o modelo, os parâmetros da família e os seus tipos. **Não a sua forma 3D:** uma caixa com a Largura, Profundidade e Altura da família faz as vezes dela. |
| CSV | Um objeto por linha: nome, tamanhos e dados, desenhado como uma caixa |

## Ficheiros de família e a sua forma 3D

A forma 3D dentro de um ficheiro `.rfa` está guardada num formato não documentado, por isso o BimCraft lê os dados da família e não adivinha a sua geometria. O cartão indica-o: «Geometria não lida desta família; uma caixa faz as vezes».

Para trazer uma família com a sua forma real, exporte-a a partir do programa que a criou (Revit):

1. Abra a família, ou um projeto com a família colocada nele.
2. Escolha **File > Export > IFC**. Ver [as definições de exportação que abrem melhor aqui](topic:rvt-to-ifc).
3. No BimCraft, leia o ficheiro `.ifc` com {{ui:Ficheiros…}}. Cada tipo de família chega como um objeto próprio, com a sua forma e conjuntos de propriedades.

Muitos fabricantes oferecem um download IFC ou DWG ao lado do ficheiro de família. Esses são lidos diretamente.

## Tipos de família

Uma família com vários tipos chega como um único item com uma escolha {{ui:Variante}}, uma variante por tipo. Cada variante tem os valores que diferem entre os tipos, e a sua própria caixa quando o tipo tem uma Largura e uma Profundidade. Uma família com um só tipo é um item simples, preenchido com os valores desse tipo.

Algumas famílias guardam os seus tipos num catálogo de tipos: um ficheiro `.txt` com o mesmo nome ao lado do ficheiro de família. Escolha os dois em conjunto, ou escolha a pasta, e as linhas do catálogo tornam-se as variantes.

## Os dados de uma família numa forma real

Se uma pasta tiver um ficheiro de família e um ficheiro IFC, glTF ou OBJ com o mesmo nome (`Chair.rfa` e `Chair.ifc`), escolha os dois em conjunto ou escolha a pasta. O BimCraft cria um só item: o ficheiro de família dá o nome, o fabricante, o modelo, os parâmetros e os tipos, e o outro ficheiro dá a forma 3D real. As notas indicam de que ficheiro vem a forma. Uma só forma é usada para todos os tipos.

Quando um ficheiro de família tem uma imagem guardada, os detalhes do item mostram essa imagem por baixo do desenho da planta. A imagem é mostrada apenas ali; não fica guardada com o item.

## Os meus objetos

{{ui:Os meus objetos}} é a lista privada na Biblioteca. Só o próprio utilizador vê o que lá está: não está na biblioteca pública, não aparece na pesquisa e não é mostrada à sua equipa. Acompanha a sua conta, por isso os mesmos objetos estão num outro computador depois de iniciar sessão na biblioteca.

- É preciso ter sessão iniciada na biblioteca para guardar um objeto. Ver [iniciar sessão na biblioteca](topic:library-credits).
- Guardar um objeto envia esse objeto, e só esse, para a sua conta. Até lá, fica no seu computador.
- {{ui:Remover dos meus objetos}} tira um objeto da lista. As cópias já colocadas em desenhos mantêm-se.
- Para partilhar um objeto com todos, carregue-o para a biblioteca pública, com a licença que escolher.

:::note
A função Os meus objetos está em teste e pode ainda não estar aberta para a sua conta. Se a origem estiver em falta, ou aparecer «Os meus objetos ainda não está aberto para esta conta», pode continuar a ler e a colocar os seus próprios ficheiros com {{ui:Ficheiros…}}; ficam guardados dentro do modelo.
:::

## Erros comuns

- **Esperar a forma real da família a partir de um `.rfa`.** Só os dados são lidos. Exporte IFC para obter a forma.
- **Dois itens quando se esperava um.** Uma família e o seu ficheiro de forma só se juntam quando os nomes coincidem exatamente, à parte a terminação, e estão na mesma pasta.
- **Uma malha chega mil vezes maior ou deitada de lado.** Defina {{ui:Unidades do ficheiro}} e {{ui:Eixo vertical de uma malha}} em {{ui:Ficheiros…}} antes de escolher o ficheiro.
- **«Sem dados de família» num ficheiro.** É um projeto (`.rvt` guardado com outra terminação) ou um modelo de família, não uma família. Ver [Ler um ficheiro de projeto ou de família](topic:read-rvt-file).
- **Guardar conteúdo que não pode armazenar.** Algumas bibliotecas pagas não permitem cópias fora do seu próprio serviço. Confirme os termos do conteúdo que não criou.
