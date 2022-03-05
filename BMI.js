var height1 = document.getElementById('height')
var weight1 = document.getElementById('weight')
var btn = document.getElementById('btn')
function calculate(height, weight) {
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Vui lòng nhập lại');
    } else {
        height = height / 100; 
        let BMI = weight / (height**2);
        console.log(BMI);
        return BMI;
    }
}
btn.onclick = function result() {
    var height = height1.value;
    var weight = weight1.value;
    var BMI = calculate(height, weight);
    if (BMI < 18.5) {
        alert('Bạn bị gầy, nguy cơ phát bệnh thấp');
    } else if (BMI >= 18.5 && BMI < 25) {
        alert('Bạn bình thường, nguy cơ phát triển bệnh trung bình');
    }
    else if (BMI >= 25.0 && BMI < 30) {
        alert('Bạn hơi béo, nguy cơ phát triển bệnh cao');
    } else if (BMI >= 30 && BMI < 35) {
        alert('Bạn béo phì cấp độ 1, nguy cơ phát triển bệnh cao');
    } else if (BMI >= 35 && BMI < 40) {
        alert('Bạn béo phì cấp độ 2, nguy cơ phát triển bệnh rất cao');
    } else if (BMI > 40) {
        alert('Bạn béo phì cấp độ 3, nguy cơ phát triển bệnh nguy hiểm');
    }
}

