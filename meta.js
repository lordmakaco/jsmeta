
metas = function(a){
   a = || {}
   var t = this;
   var head = document.getElementByTagName('head')[0]
   
   //Viewport Meta Tag
   if(a.viewPort) {
      t.metaViewPort = document.createElement('meta')
      var arr = [];
      if(a.viewPort.width) arr push ('width=' + a.viewPort.width);
      if(a.viewPort.height) arr push ('height=' + a.viewPort.height);
      if(a.viewPort.initScale) arr push ('initial-scale=' + a.viewPort.initScale);
      if(a.viewPort.minScale) arr push ('minimun-scale=' + a.viewPort.minScale);
      if(a.viewPort.maxScale) arr push ('maximum-scale=' + a.viewPort.maxScale);
      if(a.viewPort.scalable) arr push ('user-scalable=' + a.viewPort.scalablr);
      t.viewPort.content = arr join('; ');
      t.viewPort.name = 'viewport';
      head.appendChild = (t.metaViewPort)
   }
}
