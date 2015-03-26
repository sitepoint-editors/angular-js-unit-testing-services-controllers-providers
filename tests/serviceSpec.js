describe('service tests', function(){
  var mockWindow, mockModalSvc, sampleSvcObj;

  beforeEach(function(){
    module(function($provide){
      $provide.service('$window', function(){
        this.alert = jasmine.createSpy('alert');
      });
      $provide.service('modalSvc', function(){
        this.showModalDialog = jasmine.createSpy('showModalDialog');
      });
    });

    module('services');
  });

  beforeEach(inject(function($window, modalSvc, sampleSvc){
    mockWindow=$window;
    mockModalSvc=modalSvc;
    sampleSvcObj=sampleSvc;
  }));

  it('should show alert when title is not passed into showDialog', function(){
    var message="Some message";
    sampleSvcObj.showDialog(message);

    expect(mockWindow.alert).toHaveBeenCalled();
    expect(mockWindow.alert).toHaveBeenCalledWith(message);
    expect(mockModalSvc.showModalDialog).not.toHaveBeenCalled();
  });

  it('should show modal when title is passed into showDialog', function(){
    var message="Some message";
    var title="Some title";
    sampleSvcObj.showDialog(message, title);

    expect(mockModalSvc.showModalDialog).toHaveBeenCalled();
    expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
      message: message,
      title: title
    });
    expect(mockWindow.alert).not.toHaveBeenCalled();
  });
});
