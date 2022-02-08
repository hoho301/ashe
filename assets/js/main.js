$(function(){
  //クリック
  $("#ac-menu .label").on("click", function() {
    // 詳細ページの表示、非表示の切り替え
    $(this).next().slideToggle();
    // openクラスの追加、削除でラベルの－と＋を切り替える
    $(this).toggleClass("open");
  });
});