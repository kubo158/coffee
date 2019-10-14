'use strict'; {

  //○○○○○○○○○○○○○  ヘッダー始め  ○○○○○○○○○○○○○
  const header = document.querySelector('header');
  const hSection = document.createElement('section');
  hSection.id = 'hWrapper';
  const h6 = document.createElement('h6');

  const divHInner = document.createElement('div');
  divHInner.classList.add('h-inner');
  const pHInner = document.createElement('p');
  pHInner.textContent = 'こちらは練習用サイトです。店舗は実在しません。';

  const divHTitle = document.createElement('div');
  divHTitle.classList.add('h-title');
  const pHTitle = document.createElement('p');

  const imgHTitle = document.createElement('img');
  imgHTitle.id = 'companyLogo';
  imgHTitle.setAttribute('src', 'img/company_logo.png');
  imgHTitle.setAttribute('alt', 'logo');

  const h1 = document.createElement('h1');
  h1.textContent = '🇻🇳ベトナム珈琲 焙煎豆販売所🇻🇳';

  const nav = document.createElement('nav');
  nav.classList.add('h-nav');
  const ul = document.createElement('ul');

  const liHome = document.createElement('li');
  const aHomeTag = document.createElement('a');
  aHomeTag.href = 'index.html';
  aHomeTag.textContent = 'ホーム';

  const liVCafe = document.createElement('li');
  const aVCafeTag = document.createElement('a');
  aVCafeTag.href = '#';
  aVCafeTag.textContent = 'ベトナム珈琲のお話';

  const liGoods = document.createElement('li');
  const aGoods = document.createElement('a');
  aGoods.href = '#';
  aGoods.textContent = '商品一覧';

  const liSend = document.createElement('li');
  const aSend = document.createElement('a');
  aSend.href = 'shoppingCart.html';
  aSend.textContent = 'ご購入';

  const liCont = document.createElement('li');
  liCont.classList.add('h-contact');
  const aCont = document.createElement('a');
  aCont.href = 'contact.html';
  aCont.textContent = 'お問い合わせ';


  header.appendChild(hSection);
  hSection.appendChild(h6);

  hSection.appendChild(divHInner);
  divHInner.appendChild(pHInner);

  divHInner.appendChild(divHTitle);
  divHTitle.appendChild(pHTitle);
  pHTitle.appendChild(imgHTitle);

  divHTitle.appendChild(h1);


  hSection.appendChild(nav);
  nav.appendChild(ul);

  ul.appendChild(liHome);
  liHome.appendChild(aHomeTag);

  ul.appendChild(liVCafe);
  liVCafe.appendChild(aVCafeTag);

  ul.appendChild(liGoods);
  liGoods.appendChild(aGoods);

  ul.appendChild(liSend);
  liSend.appendChild(aSend);

  ul.appendChild(liCont);
  liCont.appendChild(aCont);
  //○○○○○○○○○○○○○  ヘッダー終り  ○○○○○○○○○○○○○

  //○○○○○○○○○○○○○  フッター始め  ○○○○○○○○○○○○○

  const footer = document.querySelector('footer');
  const pCopyRight = document.createElement('p');
  const smallCopyRight = document.createElement('small');
  smallCopyRight.innerHTML = '&copy; Yasuhiro Kubota 2019 All Right Reserved';

  footer.appendChild(pCopyRight);
  pCopyRight.appendChild(smallCopyRight);

  //○○○○○○○○○○○○○  フッター終り  ○○○○○○○○○○○○○






  // 'use strict'の終わり
}
