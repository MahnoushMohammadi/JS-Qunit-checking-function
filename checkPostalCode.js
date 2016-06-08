QUnit.module("checkPostalCode", {
  beforeEach: function() {
   
    this.alertSpy = sinon.spy(window, 'alert');

    
    var page = document.createElement("div");
    var postalcodeInput = document.createElement("input");
    postalcodeInput.id = "txtpostalcode";
    postalcodeInput.type = "text";

    document.body.appendChild(page);
    page.appendChild(postalcodeInput);
    
  },
  afterEach: function() {
    
    this.alertSpy.restore();
  }
});

QUnit.test('passes all fields are filled', function(assert) {
 
  $("#txtpostalcode").val("b3h 2g3");
    
  checkPostalCode();
  assert.equal(this.alertSpy.callCount, 0);
    
});

QUnit.test('fails if first letter does not match cases', function(assert) {
    

    $("#txtpostalcode").val("d3e 3e3");
  

    checkPostalCode();
    assert.ok(this.alertSpy.calledOnce);
    assert.ok(this.alertSpy.calledWith("This code is not for any provinces"));
});

QUnit.test('fails if first letter does not match cases', function(assert) {
    
    $("#txtpostalcode").val("d3e 3e3eee");
  

    checkPostalCode();
    assert.ok(this.alertSpy.calledOnce);
    assert.ok(this.alertSpy.calledWith("Postal code format does not match"));
});

