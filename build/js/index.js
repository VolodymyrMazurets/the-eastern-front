(function (factory) {
  typeof define === 'function' && define.amd ? define('index', factory) :
  factory();
}((function () { 'use strict';

  var navBar = document.getElementById("nav-bar");
  var toTop = document.getElementById("to-top");
  document.addEventListener("scroll", function () {
    if (window.pageYOffset < navBar.clientHeight) {
      navBar.classList.remove("fixed");
      toTop.style = 'display: none';
    } else {
      navBar.classList.add("fixed");
      toTop.style = 'display: flex';
    }
  });

})));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYXJcIik7XHJcbmNvbnN0IHRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0by10b3BcIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgbmF2QmFyLmNsaWVudEhlaWdodCkge1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcclxuICAgIHRvVG9wLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpO1xyXG4gICAgdG9Ub3Auc3R5bGUgPSAnZGlzcGxheTogZmxleCc7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIm5hdkJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b1RvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsaWVudEhlaWdodCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7OztFQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWY7RUFDQSxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFkO0VBRUFELFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtFQUN4QyxNQUFJQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJOLE1BQU0sQ0FBQ08sWUFBaEMsRUFBOEM7RUFDNUNQLElBQUFBLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsT0FBeEI7RUFDQU4sSUFBQUEsS0FBSyxDQUFDTyxLQUFOLEdBQWMsZUFBZDtFQUNELEdBSEQsTUFHTztFQUNMVixJQUFBQSxNQUFNLENBQUNRLFNBQVAsQ0FBaUJHLEdBQWpCLENBQXFCLE9BQXJCO0VBQ0FSLElBQUFBLEtBQUssQ0FBQ08sS0FBTixHQUFjLGVBQWQ7RUFDRDtFQUNGLENBUkQ7Ozs7In0=
