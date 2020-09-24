'use strict';

{

  //4.新しいワードがセットされる時に、loc(正解)が0になるようにする
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words = [
    'red',
    'blue',
    'pink',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');

  //4-2セットワードを起動する
  // setWord();

  document.addEventListener('click', () =>{
    if(isPlaying === true){
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  })


  //1.キーダウンした時にtarget(タイピング出力)に文字が出力されるようにする
  document.addEventListener('keydown', e => {
    //3.早期リターン。リターンは以降の処理が必要ない時に使う。
    if (e.key !== word[loc]) {
      return;
    }
      //2.N番目の文字が一致した時に文字列が++され、_が追加されるとともに、その次の値が出力される
      loc++;

      target.textContent = '_'.repeat(loc) + word.substring(loc);

      // 4-3.全部正解したときの条件
      if(loc === word.length) {
        if(words.length === 0){
          const elapsedTime = ((Date.now() -startTime)/ 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = `Finished! ${elapsedTime} seconds`;
          return;
        }
        setWord();
      }
  });
}