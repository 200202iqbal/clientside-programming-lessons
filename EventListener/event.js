//id = message_btn のHTMLをとってくる
var message_btn = document.getElementById('message_btn')

//クリックイベントを登録
message_btn.addEventListener('click', showMessage)

function showMessage() {
    alert('Click Event!!!');
}

var mouse_area = document.getElementById('mouse_area')
//マウスオーバー
mouse_area.addEventListener('mouseover', function(event) {
    //this は自分のこと(mouse_area)
    this.innerHTML = "Mouse Over!!!"
})

//マウスアウト
mouse_area.addEventListener('mouseout', function(event) {
    this.innerHTML = "Mouse Out!!!"
})

var mouse_move_area = document.getElementById('mouse_move_area')
//マウスを動かしたとき
mouse_move_area.addEventListener('mousemove', function(event) {
    var message = '(x, y) = (' + event.pageX + ',' + event.pageY + ')'
    this.innerHTML = message
})

//マウスを動かしたとき
document.addEventListener('keydown', function(event) {
    console.log(event);
    var key_code = event.keyCode;
    var action = '';
    if (key_code == 37) action = 'Left' 
    if (key_code == 38) action = 'Up' 
    if (key_code == 39) action = 'Right' 
    if (key_code == 40) action = 'Down' 
    document.getElementById('keycode_area').innerHTML = action;
})