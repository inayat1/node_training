module.exports = class Service {
    constructor() {
        this.customer = [{
            id:1,
            name:'inayat'
        },{
            id:2,
            name:'amit'
        }];
    }
    getById(id) {
       return this.customer.filter(cust => cust.id == id);
    }
}

//module.exports = function Servive1() {
  //  this.getById =function(id) {
   //     return customer.filter(cust => cust.id === id)
  //  };
//} 