import Head from 'next/head'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import styles from '../styles/Home.module.css'


const  ArrayOperation = () => {

  const text = [];
  text.push("テキスト","テキスト1","テキスト2")
  text[5] = "マンゴー";
  console.log(text)
  console.log(Object.keys(text))
  console.log(text[4])

  const num = [12, 5, 8, 130, 44];
  console.log('nam',num.every((x) => x >= 10)); 
  const found = num.find(element => element > 10);
  console.log(found);
  const lastFound = num.findLast((element) => element > 45);
  console.log(lastFound);
  const isLargeNumber = (element) => element > 13;
  console.log(num.findIndex(isLargeNumber));
  const isLargeLastNumber = (element) => element > 1;
  console.log(num.findLastIndex(isLargeLastNumber));

  const array1 = [1, 2, 3, 4];
  console.log(array1.fill(0, 2, 4));
  console.log(array1.fill(5,2));

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result1 = words.filter(word => word.length > 7);
  console.log(result1);

  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());
  const arr6 = [0, 1, 2, [[[3, 4]]]];
  console.log(arr6.flat(2));

  const arr3 = [1, 2, [3, 4, [5, 6]]];
  console.log(arr3.flat(Infinity));
  const arr4 = [1, 2, 3, 4];
  console.log(arr4.map((x) => [x * 2]));// [[2], [4], [6], [8]]
  console.log(arr4.flatMap((x) => [x * 2]));// [2, 4, 6, 8]

  const arr7 = [1, 2, 1];
  const result = arr7.flatMap((num) => (num === 2 ? [2, 2] : 1));
  console.log(result);

  const arrayString = ['a', 'b', 'c'];
  // 既存の配列を変更したい場合にforeachを使うのであまり使うケースは少なさそう(mapは新しく配列を作って既存の配列はそのまま)
  arrayString.forEach(element => console.log(element)); 

  console.log(Array.from('foo'));
  console.log(Array.from([1, 2, 3, 4], x => x + x));
  const set = new Set(['foo', 'bar', 'baz', 'foo']);
  console.log(Array.from(set));
  const mapper = new Map([['1', 'a', '10'], ['2', 'b', '20']]);
  console.log(Array.from(mapper.values()));
  console.log(Array.from(mapper.keys()));

  const array2 = [1, 2, 3];
  console.log(array2.includes(4));
  const pets = ['cat', 'dog', 'bat'];
  console.log(pets.includes('cat'));
  console.log(pets.includes('do'));
  console.log(pets.includes("bat", 2)); //true
  console.log(pets.includes("cat", -2)); //false

  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.indexOf('bison'));
  console.log(beasts.indexOf('bison', 2));
  console.log(beasts.indexOf('giraffe'));

  console.log(Array.isArray([1, 3, 5]));
  console.log(Array.isArray('[]'));
  console.log(Array.isArray(new Array(5)));
  console.log(Array.isArray(new Int16Array([15, 33])));

  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.join());
  console.log(elements.join(''));
  console.log(elements.join('-'));

  const array3 = ['a', 'b', 'c'];
  const iterator = array3.keys();
  for (const key of iterator) {
    console.log(key);
  }

  const arr5 = ["a", , "c"];
  console.log(Object.keys(arr5)); // ['0', '2']
  console.log([...arr5.keys()]); // [0, 1, 2]

  const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Tiger'];
  console.log(animals1.lastIndexOf('Dodo')); // 3
  console.log(animals1.lastIndexOf('Tiger')); // 4
  console.log(animals1.lastIndexOf('Tiger', 1)); // 1

  const array5 = [1, 4, 9, 16];
  const map5 = array5.map(x => x * 2);
  console.log(map5);

  console.log(Array.of('foo', 2, 'bar', true));
  console.log(Array.of());

  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
  console.log(plants.pop());
  console.log(plants);
  console.log(plants.pop());
  console.log(plants);

  const animals2 = ['pigs', 'goats', 'sheep'];
  const count = animals2.push('cows');
  console.log(count);
  console.log(animals2);
  animals2.push('chickens', 'cats', 'dogs');
  console.log(animals2);
  // pushは元の配列の末尾に追加するので、影響があるconcatは元の配列は変えずに新しく配列を作って、配列の末尾に追加する。

  const array6 = [1, 2, 3, 4];
  const initialValue = 0;
  const sumWithInitial = array6.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sumWithInitial);
  const array7 = [[0, 1], [2, 3], [4, 5]];
  const result2 = array7.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
  console.log(result2);

  const array8 = [[0, 1], [2, 3], [4, 5]];
  const result3 = array8.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
  console.log(result3);

  const array9 = ['one', 'two', 'three'];
  console.log('array9:', array9);
  const reversed = array9.reverse();
  console.log('reversed:', reversed);
  console.log('array9:', array9);  // ["three", "two", "one"]元の配列変更する形になる。

  const array10 = [1, 2, 3];
  const firstElement = array10.shift();
  console.log(array10);
  console.log(firstElement);

  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(animals.slice(2));
  console.log(animals.slice(2, 4));
  console.log(animals.slice(1, 5));
  console.log(animals.slice(-2));
  console.log(animals.slice(2, -1));
  console.log(animals.slice());
  
  const array = [1, 2, 3, 4, 5];
  const even = array.some((element) => element % 2 === 0);
  console.log(even);

  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort();
  console.log(months);// ["Dec", "Feb", "Jan", "March"]
  const array11 = [1, 30, 4, 21, 100000];
  array11.sort();
  console.log(array11);// [1, 100000, 21, 30, 4]

  const stringArray = ["Blue", "Humpback", "Beluga"];
  const numberArray = [40, 1, 5, 200];
  const numericStringArray = ["80", "9", "700"];
  const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
  function compareNumbers(a, b) {
    return b - a; //　昇順
    // return a - b; //　降順
  }
  console.log(stringArray.sort(compareNumbers));
  console.log(numberArray.sort(compareNumbers));
  console.log(numericStringArray.sort(compareNumbers));
  console.log(mixedNumericArray.sort(compareNumbers));

  const months1 = ['Jan', 'March', 'April', 'June'];
  months1.splice(1, 0, 'Feb');
  console.log(months1);
  months1.splice(5, 0, 'May');
  console.log(months1);
  months1.splice(2, 3, 'May');
  console.log(months1); // ['Jan', 'Feb', 'March', 'April', 'June', 'May']と['Jan', 'Feb', 'May', 'May']

  const array12 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
  const localeString = array12.toLocaleString('en', { timeZone: 'UTC' });
  console.log(localeString);
  const prices = ["￥7", 500, 8123, 12];
  console.log(prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));

  const array13 = [1, 2, 3];
  console.log(array13.unshift(4, 5));
  console.log(array13);

  const array14 = ['a', 'b', 'c'];
  const iterator1 = array14.values();
  for (const value1 of iterator1) {
    console.log(value1);
  }

  const arr8 = [1, 2, 3, 4, 5];
  console.log(arr8.with(2, "d")); // [1, 2, "d", 4, 5]
  console.log(arr8); // [1, 2, 3, 4, 5]

  return (
    <div className={styles.container}>
      <Head>
        <title>Array Operation Page</title>
      </Head>
      <Header />
      <Footer />
    </div>
  )
}

export default ArrayOperation