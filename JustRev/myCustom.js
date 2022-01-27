function showAgePrompt() {
    var age = prompt('whats your age buddy !');
    var h1 = document.createElement('h1');
    var dynamicView = document.getElementById('custom_div');
    h1.appendChild(document.createTextNode(age));
    dynamicView.appendChild(h1).innerHTML;
}

function resetData() {
    var dynamicView = document.getElementById('custom_div');
    dynamicView.remove(document.getElementById('h1'));
}

function addimagesdynamically() {

    var img = document.createElement('img');
    img.src = "https://freepngimg.com/thumb/pizza/2-pizza-png-image-thumb.png";
    document.getElementById('img_div_dynamic').appendChild(img).innerHTML;

}

function getInputValues() {
    var email = document.getElementById('email_value').value;
    var pass = document.getElementById('password_value').value;
    alert('enter' + " " + email + " " + pass);
}