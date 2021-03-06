var express = require("express");
var app = express();


app.get("/test",function(req,res){

    var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
    //var fs = require('fs');

    var visualRecognition = new VisualRecognitionV3({
        version: '2018-03-19',
        iam_apikey: 'tjyfhdmVdJOBuvppvlT_r03yAyYNA6VaF-AvXya-lxgg'
    });

    //var images_file = fs.createReadStream('./picture.jpg');
    //var classifier_ids = ["food"];

    var params = {
        url:"https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg"
    };

    visualRecognition.classify(params, function(err, response) {
        if (err)
            console.log(err);
        else {
            var result = JSON.stringify(response, null, 2)
            var class_col = response.images[0].classifiers[0].classes;
            for(i=0;i<class_col.length;i++){
                res.write(class_col[i].class + "\t");
                res.write(class_col[i].score + "\n");
            }
            res.end("END");

            //res.end(result);
            console.log(result);
        }
    });

})


var listener = app.listen(process.env.PORT || 4000, process.env.IP, function(){
	console.log("server has started");
	console.log('Listening on port ' + listener.address().port);
});
