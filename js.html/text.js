var header = document.getElementById('header')
        var mobileMenu = document.getElementById('mobile-menu')
        var headerHeight = header.clientHeight
        mobileMenu.onclick = function () {
            var isClosed = header.clientHeight === headerHeight;
            if (isClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }
console.log("Bonjour nouvelle branche!")
console.log("coucou")
console.log("je garde")