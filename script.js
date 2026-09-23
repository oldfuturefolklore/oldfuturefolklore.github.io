// =========================
// スクリーンショットギャラリー
// =========================


// ギャラリー内の画像を取得
const galleryImages =
    document.querySelectorAll(".game-gallery img");

// モーダル
const modal =
    document.querySelector(".image-modal");

const modalImage =
    document.querySelector(".image-modal img");


// ボタン
const closeButton =
    document.querySelector(".image-modal-close");

const prevButton =
    document.querySelector(".image-modal-prev");

const nextButton =
    document.querySelector(".image-modal-next");


// 画像番号
const imageCounter =
    document.querySelector(".image-modal-counter");


// 現在表示している画像
let currentIndex = 0;


// 現在開いているギャラリー
let currentGallery = [];


// =========================
// 画像を表示する
// =========================

function showImage(index) {

    if (
        index < 0 ||
        index >= currentGallery.length
    ) {
        return;
    }


    // 現在の画像番号を保存

    currentIndex = index;


    // 画像を表示

    modalImage.src =
        currentGallery[index].src;

    modalImage.alt =
        currentGallery[index].alt;


    // 画像番号を表示

    imageCounter.textContent =
        (index + 1) +
        " / " +
        currentGallery.length;
}


// =========================
// ギャラリー画像をクリック
// =========================

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        // クリックされた画像が
        // 含まれているギャラリーを取得

        const gallery =
            image.parentElement;


        // そのギャラリーの画像だけ取得

        currentGallery =
            Array.from(
                gallery.querySelectorAll("img")
            );


        // 現在クリックした画像の番号

        currentIndex =
            currentGallery.indexOf(image);


        // 画像を表示

        showImage(currentIndex);


        // モーダルを開く

        modal.classList.add("is-open");

    });

});


// =========================
// 左ボタン
// =========================

prevButton.addEventListener("click", function () {

    let newIndex =
        currentIndex - 1;


    // 先頭なら最後へ

    if (newIndex < 0) {

        newIndex =
            currentGallery.length - 1;

    }


    showImage(newIndex);

});


// =========================
// 右ボタン
// =========================

nextButton.addEventListener("click", function () {

    let newIndex =
        currentIndex + 1;


    // 最後なら先頭へ

    if (
        newIndex >=
        currentGallery.length
    ) {

        newIndex = 0;

    }


    showImage(newIndex);

});


// =========================
// 閉じるボタン
// =========================

closeButton.addEventListener("click", function () {

    modal.classList.remove("is-open");

});


// =========================
// 背景クリックで閉じる
// =========================

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("is-open");

    }

});


// =========================
// キーボード操作
// =========================

document.addEventListener("keydown", function (event) {

    // モーダルが閉じているときは何もしない

    if (
        !modal.classList.contains("is-open")
    ) {

        return;

    }


    // Esc → 閉じる

    if (event.key === "Escape") {

        modal.classList.remove("is-open");

    }


    // ← → で画像変更

    if (event.key === "ArrowLeft") {

        prevButton.click();

    }


    if (event.key === "ArrowRight") {

        nextButton.click();

    }

});