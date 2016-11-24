// Constructor
function RequestContract(id) {
    // always initialize all instance properties
    this.id = id;
}
// class methods
RequestContract.prototype.GetId = function() {
    return id;
};
// export the class
module.exports = RequestContract;