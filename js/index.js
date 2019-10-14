'use strict'; {

  //○○○○○○○○○○○○○   カウンドダウン始め   ○○○○○○○○○○○○○

  //オファー終りのDateオブジェクトを生成。(月はマイナス１)
  let timeUp = new Date(2019, 10, 1);

  //ミリ秒を取得
  let timeUpMills = timeUp.getTime();

  function countDown() {
    //現在の日時を取得し表示。
    let now = Date.now();

    // timeUpとnowのミリ秒差分を計算
    let diffMills = timeUpMills - now;

    // ミリ秒を日数に直す計算
    const d = diffMills / (1000 * 60 * 60 * 24);
    const days = Math.floor(d);

    const h = ((d - days) * 24);
    const hours = Math.floor(h);

    const m = ((h - hours) * 60);
    const minutes = Math.floor(m);


    const s = ((m - minutes) * 60);
    const seconds = Math.floor(s);

    timer.textContent =
      `${String(days).padStart(2, '0')}日
    ${String(hours).padStart(2, '0')}時間
    ${String(minutes).padStart(2, '0')}分
    ${String(seconds).padStart(2, '0')}秒`;


    let timeoutId = setTimeout(() => {
      countDown();
    }, 1000);

    //カウントダウンを止める
    if ((hours == 0) && (hours == 0) && (minutes == 0) && (seconds == 0)) {
      clearTimeout(timeoutId)
    };

  }

  countDown();

  //○○○○○○○○○○○○○   カウンドダウン終り   ○○○○○○○○○○○○○


};
