const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function (err, data1) {
    if (err) {
        return console.log("Error reading demo.txt:", err);
    }

    fs.readFile("../demo2.txt", "utf-8", function (err, data2) {
        if (err) {
            return console.log("Error reading demo2.txt:", err);
        }

        fs.writeFile("./result.txt", data1 + "\n" + data2, function (err) {
            if (err) {
                return console.log("Error writing to result.txt:", err);
            }
            console.log("Done writing to result.txt");
        });
    });
});
