function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TJ6gxYfj5/model.json",modelLoaded);
}
function modelLoaded()
{
    model.classify(gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("detector").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("audio").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("detector").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("audio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }
}