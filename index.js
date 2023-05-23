//
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul")

const todos =JSON.parse(localStorage.getItem("todos"));　//jsonから変換
if(todos ){//前のデータがあったら
    todos.forEach(todo=>{
        add(todo);
    })
}
//値の取得
form.addEventListener("submit",function(event){
    event.preventDefault();//デフォルトのイベントを発生させない
        add();
});

function add(todo){
    let todoText = input.value

    if(todo){ //前のデータがあったら追加
        todoText= todo;
    }
    if(todoText.length>0){//1文字以上入力されていれば
        const li = document.createElement("li");//liを作る
        li.innerText = todoText;//入力した値を取得
        li.classList.add("list-group-item");//list作成


        li.addEventListener("contextmenu",function(event){
            //右クリックしたら削除
            event.preventDefault();
            li.remove();
            saveDate();
        })

        li.addEventListener("click",function(){
            li.classList.toggle("text-decoration-line-through");
        })
        ul.appendChild(li);//値を追加
        input.value="";//入力画面を空に
        saveDate();
    }
}
//画面リロードしても初期化されないようにする
function saveDate(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {//リストの値すべて配列にまとめる
        todos.push(list.innerText)
    } );
    //ローカルストレージに保存
    localStorage.setItem("todos",JSON.stringify(todos));//jsonに変換し扱えるようにする　ローカルストレージに保存

}

// // let 値の再代入が可能 
// let height =168;
// height = 170
// // const 値の再代入が不可 定数の宣言
// const tax = 0.1
// //var  letとほぼ同じ　昔の記法

// 関数
// function double(num){
//     return 2*num;
// }

// addEventListener 　ターゲット/addEventListener(イベント名、関数);
// 特定のイベントが起きた時にjavaの処理を追加するためのブラウザAPI
// イベントが起きた時に処理を追加したいときに使用　javaの機能ではない

// form.addEventListener("submit",function()){

//データ型　
//プリミティブ型
// 真偽値　数値　文字列　etc
//オブジェクト
//オブジェクト、配列　関数　etc

//--- 型変換---//
// 暗黙的型変換
// データ型を意識しなくてもプログラムが書けるように
// if文の条件式→データを真偽値に変換
// falseになる値
// false 0n undefined NaN null 0 ""()空文字

// --- 配列 ---//
// const array = [
//     "one",
//     "two"
//     "three"
// ]
// array[0]; one
// array.push("four");
// array[3]; four
//lists[0].innerText

//--- ループ ---//
// forEach 配列の全要素に処理
// const array =[1,2,3];
// array.forEach(value=>{
//     console.log(value*2); 値を２倍に
// })
// 2,4,6

//--- ローカルストレージ ---//
// ブラウザにデータを保存しておく仕組み
// データの保存
// localStorage.setItem('キー','値')
// データの取得
// localStorage.getItem('キー')

//--- オブジェクト ---//
// 名前と値が対になったものの集合
// 使いどこのロ１つのものに対し、複数の属性データを持たせたいとき
// let user = {
//     name: "Yamada",
//     age: 33,
//     キー：　値
//     printAge: function(){　//メソッド
//         console.log(this.age);
//     }
// };
// user.name; //Yamada
// user.printAge() //33　メソッドの呼び出し







//---TODOに完了マークを付ける---//
//左クリックしたら取り消し線をつける