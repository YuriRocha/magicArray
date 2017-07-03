magicArray
===================

> GUR NYY VF ZVAQ. GUR HAVIREFR VF ZRAGNY.

Do que se trata?
-------------

É um módulo que trata operações não-usuais em arrays. Em construção.

> **Como usar:**

> - Copie o arquivo magicArray.js para uma pasta dentro do seu projeto.
> - Use **require('./magicArray.js')** para importar o módulo para o seu código.(Se estiver na pasta raiz do projeto)

----------


Documentação
-------------------
Esta seção contém uma breve descrição das funções contidas no módulo magicArray.



#### <i class="icon-refresh"></i> .sym()
A função .sym() recebe dois ou mais arrays como argumentos e retorna a diferença simétrica entre eles.
	Exemplo:

    var magicArray = require('./magicArray.js');
    var result = magicArray.sym([1, 2, 3, 'magic' ], [1,3]);
    //result: [ 2, 'magic' ]

#### <i class="icon-refresh"></i> .sumRange()
Retorna a soma entre todos os números contidos na sequência(range) entre os dois primeiros índices de um array. Recomendo utilizar um array com apenas dois elementos, caso o array possua mais de 2 elementos, ele funcionará normalmente, porém, sumRange atuará somente entre os dois primeiros índices do array passado por parâmetro. Não importa se o primeiro índice é maior ou menor do que o segundo índice.
Exemplo:

    var result = magicArray.sumRange([1, 4]);
    //result: 10
    var result2 = magicArray.sumRange([4, 1]);
    //result2: 10

#### <i class="icon-refresh"></i> .getRange()
Retorna todos os números contidos no range entre dois números. A função recebe um array populado com os dois números que formarão o range.
Exemplo:

    var result = magicArray.getRange([1, 10]);
    //result: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

#### <i class="icon-refresh"></i> .bouncer()
Remove todo os valores falsos(falsy values) de um array. Os falsy values em javascript são: `false, null, 0, "", undefined` e `NaN`.
Exemplo:

    var result = magicArray.bouncer([7, "magic", "", false, 9, 0, 1, undefined, null, NaN]);
    //result: [ 7, 'magic', 9, 1 ]

#### <i class="icon-refresh"></i> .groups()
A função groups agrupa elementos de um array em sub-arrays(grupos). Dois parâmetros são enviados para a função: o array e um size representando o tamanho dos grupos.
Exemplo:

    var result = magicArray.groups([1,'magic', 'array', 2, 3, 4], 2);
    //result: [ [ 1, 'magic' ], [ 'array', 2 ], [ 3, 4 ] ]

#### <i class="icon-refresh"></i> .cut()
A função cut recebe um array e uma lista de itens que devem ser deletados do array. O primeiro argumento é o array e os argumentos seguintes são os itens que serão deletados.
Exemplo:

    var result = magicArray.cut(["tree", "hamburger", 53], "tree", 53);
    //result: [ 'hamburger' ]

#### <i class="icon-refresh"></i> .indexInserted()
Ordena um array, insere um novo elemento e retorna o índice desse elemento inserido. Recebe dois parâmetros: o primeiro é o array e o segundo é o número a ser inserido.
Exemplo:

    var arr = [5, 3, 20, 21, 3];
    var result = magicArray.indexInserted(arr, 4);
    //arr: [ 3, 3, 4, 5, 20, 21 ]
    //result: 2
#### <i class="icon-refresh"></i> .subMaxNumber()
Retorna o maior número contido em cada um dos sub-arrays de um array.
Exemplo:

    var result = magicArray.subMaxNumber([[5, 3, 20, 21, 3], [4,1,2],[10,1]]);
    //result: [ 21, 4, 10 ]

#### <i class="icon-refresh"></i> .isMutation()
Retorna `true` se a string do primeiro elemento de um array contém todas as letras de uma string no segundo elemento. Recebe um array com dois elementos.
Exemplo:

    var result = magicArray.isMutation(["Alien", "line"]);
    //result: true
    var result2 = magicArray.isMutation(["hello", "hey"]);
    //result: false
#### <i class="icon-refresh"></i> .slash()
Corta os n primeiros elementos de um array. Recebe dois parâmetros: um array e a quantidade de itens, n.
Exemplo:

    var result = magicArray.slash([1, 2, 3, 1, 5], 2);
    //result: [ 3, 1, 5 ]

#### <i class="icon-refresh"></i> .getObject()
Recebe um array de objetos(primeiro argumento) e retorna um array de objetos que correspondem as propriedades e valores do segundo argumento. Por exemplo, se o primeiro argumento for igual a`[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]` e o segundo argumento for igual a `{ last: "Capulet" }`, então a função deve retornar um array com o terceiro objeto da coleção: `{ first: "Tybalt", last: "Capulet" }`, pois é o único elemento da coleção de objetos que possui a string `"Capulet"` na propriedade `last`.

Exemplo:

    var arr = [{ first: "Romeo", last: "Montague" },
              { first: "Mercutio", last: "Capulet" },
              { first: "Tybalt", last: "Capulet" }]

    var result = magicArray.getObject(arr, { last: "Capulet" });

    //result: [ { first: 'Mercutio', last: 'Capulet' },
    	        { first: 'Tybalt', last: 'Capulet' } ]

#### <i class="icon-refresh"></i> .rangeAlphabet()
Recebe dois caracteres e retorna um array de caracteres em ordem alfabética da sequência contida entre os dois caracteres.
Exemplo:

    var result = magicArray.rangeAlphabet('a', 'f');
    //result: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### <i class="icon-refresh"></i> .uniteUnique()

Une sub-arrays de um array e remove os elementos repetidos, retornando o resultado em um único array.
Exemplo:

    var result = magicArray.uniteUnique([1,2], [4,2], [3, 6, 1], [9]);
    //result: [ 1, 2, 4, 3, 6, 9 ]

#### <i class="icon-refresh"></i> .findElement()
Recebe dois argumentos: um array e uma função callback para procurar o primeiro elemento que bate com o critério passado na função callback.
Exemplo:

    var result = magicArray.findElement([1, 3, 4, 5, 8, 9, 10], function(num) {
      return num % 2 === 0;
    });
    //result: 4

#### <i class="icon-refresh"></i> .findAndRemove()
Recebe dois argumentos: um array e o elemento que deve ser removido.
Remove o elemento do array e retorna o array após a remoção.
Exemplo:
 			var myArray = [2,5,10,55];
 			magicArray.findAndRemove(myArray, 10);
			//result: [2,5,55]
