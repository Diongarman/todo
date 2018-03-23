var configValues = require("./config");

module.exports = {
    getDbConnectionString: function() {
        return "mongodb://" + configValues.uname + ":"
        + configValues.pword +"@ds121299.mlab.com:21299/nodetodosample";
    }
}

