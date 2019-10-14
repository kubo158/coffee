'use strict'; {

//○○○○○○○○○○○○○   カート始め   ○○○○○○○○○○○○○

//＊＊＊＊＊  商品追加開始  ＊＊＊＊＊
window.addEventListener('DOMContentLoaded', () => {

  const buyEver = document.getElementById('buyEver');
  const buyWashed = document.getElementById('buyWashed');
  const buyHoney = document.getElementById('buyHoney');
  const buyNatural = document.getElementById('buyNatural');

  const todoList = document.getElementById('todoList');


  //＊＊＊＊＊  商品追加関数始め  ＊＊＊＊＊
    function addCart(nameID, itemID, setID) {
      const name = document.getElementById(nameID);
      const item = document.getElementById(itemID);
      const set = document.getElementById(setID);

      const nameText = name.text;

      const idx = item.selectedIndex;
      const itemName = item.options[idx].text;

      const itemValue = item.value;

      //▲▲▲▲　tr エレメントを新規作成(ただ生成するだけ)　▲▲▲▲
      const taskElement = document.createElement('tr');


      //---- td 商品名エレメントを新規作成 ----
      const goodsElement = document.createElement('td');
      goodsElement.classList.add('goods');
      const setValue = set.value;


      goodsElement.textContent = nameText;

      //---- div 数量・単価エレメントを新規作成 ----
      const unitElement = document.createElement('div');
      unitElement.classList.add('unit');
      unitElement.textContent = itemName;


      //---- td qtyエレメントを新規作成 ----
      const qtyElement = document.createElement('td');
      qtyElement.classList.add('qty');
      if (setValue == '') {
        return false;
      } else {
        qtyElement.textContent = setValue;
      }

      //---- td subtotalエレメントを新規作成 ----
      const subTotalElement = document.createElement('td');
      subTotalElement.classList.add('total-box');

      const subTotal = itemValue * setValue;

      subTotalElement.textContent = `${subTotal}円`;

      exTotal(subTotal);
      groundTotal(totalExTax);

      //---- td removeBtnエレメントを新規作成 ----
      const removeBtnElement = document.createElement('td');
      removeBtnElement.classList.add('amend');
      const removeBtn = createRemoveBtn();
      removeBtnElement.appendChild(removeBtn);

      //生成したtrをtodolistにセット
      todoList.appendChild(taskElement);

      //生成したtdをtrにセット
      taskElement.appendChild(goodsElement);
      taskElement.appendChild(qtyElement);
      taskElement.appendChild(subTotalElement);
      taskElement.appendChild(removeBtnElement);

      //生成したdivをtdにセット
      goodsElement.appendChild(unitElement);
  //＊＊＊＊＊  商品追加関数終り  ＊＊＊＊＊
    }

    //----------------------------------------
    // removeBtnを生成する関数
    // [引数]
    //   なし
    // [戻り値]
    //   removeBtn：タスクを削除するボタン
    //----------------------------------------
    const createRemoveBtn = function() {
      const removeBtn = document.createElement('button');
      removeBtn.textContent = `削除`;

      //●●●●　removeBtn押下時のイベントを追加　●●●●
      removeBtn.addEventListener('click', (e) => {
        removeBtn.parentNode.parentNode.parentNode.removeChild(removeBtn.parentNode.parentNode);

        //＊＊＊＊＊  税抜合計からマイナスする関数  ＊＊＊＊＊
        console.log(removeBtn.parentNode.parentNode)
        console.log(removeBtn.parentNode.parentNode.children)
        console.log(removeBtn.parentNode.parentNode.children[2])
        console.log(removeBtn.parentNode.parentNode.children[2].textContent)

        const subTotalText = removeBtn.parentNode.parentNode.children[2].textContent;
        const subTotalValue = parseFloat(subTotalText);

        removeExTax(subTotalValue);
        groundTotal(totalExTax);
      });

      return removeBtn;
    }

    //＊＊＊＊＊  エバーグリーン  ＊＊＊＊＊
    buyEver.addEventListener('click', () => {
      addCart('nameEver', 'itemEver', 'setEver');
    });

    //＊＊＊＊＊  ウォッシュド  ＊＊＊＊＊
    buyWashed.addEventListener('click', () => {
      addCart('nameWashed', 'itemWashed', 'setWashed');
    });

    //＊＊＊＊＊  ハニー  ＊＊＊＊＊
    buyHoney.addEventListener('click', () => {
      addCart('nameHoney', 'itemHoney', 'setHoney');
    });

    //＊＊＊＊＊  ナチュラル  ＊＊＊＊＊
      buyNatural.addEventListener('click', () => {
        addCart('nameNatural', 'itemNatural', 'setNatural');
      });

  //＊＊＊＊＊  商品追加終了  ＊＊＊＊＊
  });


  let totalExTax = 0;
  let shippingCharge = 0;

  //＊＊＊＊＊  税別合計始め  ＊＊＊＊＊
  function exTotal(price) {
    const exTax = document.getElementById('exTax');
    totalExTax += price;

    exTax.textContent = `${totalExTax}円`;
  }
    //＊＊＊＊＊  税別合計終り  ＊＊＊＊＊


    //＊＊＊＊＊  税別合計マイナス  ＊＊＊＊＊
    function removeExTax(subTotalID) {
      const exTax = document.getElementById('exTax');

      totalExTax -= subTotalID;

      exTax.textContent = `${totalExTax}円`;
    }

    //＊＊＊＊＊  税別合計マイナス  ＊＊＊＊＊


    function groundTotal(totalExTax) {
    //＊＊＊＊＊    送料始め    ＊＊＊＊＊
    const shipping = document.getElementById('shipping');

    switch (true) {
      case (totalExTax > 0 && totalExTax < 5000):
      shippingCharge = 690;
      shipping.textContent = `${shippingCharge}円`;
      break;

      case (totalExTax >= 5000):
      shippingCharge = 0;
      shipping.textContent = `${shippingCharge}円`;
      break;

      default:
      shippingCharge = 0;
      shipping.textContent = `円`;
      break;
    }
    //＊＊＊＊＊    送料終り    ＊＊＊＊＊

    //＊＊＊＊＊   消費税始め   ＊＊＊＊＊
    const vat = document.getElementById('vat');
    const totalVat = Math.ceil((totalExTax + shippingCharge) * 0.1);
    vat.textContent = `${totalVat}円`;
    //＊＊＊＊＊   消費税終り   ＊＊＊＊＊

    //＊＊＊＊＊   総合計始め   ＊＊＊＊＊
    const inTax = document.getElementById('inTax');
    const totalInTax = totalExTax + shippingCharge + totalVat;
    inTax.textContent = `${totalInTax}円`;
    //＊＊＊＊＊   総合計終り   ＊＊＊＊＊

  }








//○○○○○○○○○○○○○   カート終り   ○○○○○○○○○○○○○

  // 'use strict'の終わり
}
