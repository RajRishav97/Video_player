function myFunction(x) {
  
    x.setAttribute("controls", "controls");
    var parent = document.getElementById("content");
    var child = document.getElementById("new_video");
    var par=document.getElementById("video_content");
    var par2=document.getElementById("video_content2");
    child.appendChild(x);
    parent.removeChild(par);
    parent.removeChild(par2);
  }
  function myFunction1()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/1.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction2()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/2.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction3()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/3.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction4()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/4.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction5()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/5.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction6()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/6.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction7()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/7.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction8()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/8.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction9()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/9.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
  function myFunction10()
  {
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","Videos/10.mp4");
    } else {
      x.setAttribute("src","video.ogg");
    }
    myFunction(x);
  }
