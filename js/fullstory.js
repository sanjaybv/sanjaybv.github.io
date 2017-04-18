(function () {
    var identity = document.getElementById('identity'),
        identify = document.getElementById('identify'),
        email = document.getElementById('email'),
        form = document.getElementById('idForm'),
        msg = document.getElementById('thanksMsg'),
        identified = document.getElementById('identified');

    identify.addEventListener('click', function (e) {
        var nameValue = identity.value.toString();
        var emailValue = email.value.toString();
        if (nameValue) {
            identified.textContent = nameValue;
            if (FS) {
                FS.clearUserCookie();
                FS.identify(naiveId(), { displayName: nameValue, email: emailValue });
            }
            form.classList.add("hide");
            msg.classList.remove("hide");
        } else {
            return;
        }

        e.preventDefault();
    }, false);

    function naiveId() {
        return Math.random().toString(36).substr(2, 9);
    }
})();
