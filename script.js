const username = document.getElementById("username");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const email = document.getElementById("email");

        username.addEventListener('input', function () {
            let reg = /^[a-zA-Z0-9_]{5,15}$/;
            let str = username.value;
            if (reg.test(str)) {
                username.classList.remove('is-invalid');
            } else {
                username.classList.add('is-invalid');
            }
        });

        password.addEventListener('input', function () {
            let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let str = password.value;
            if (reg.test(str)) {
                password.classList.remove('is-invalid');
            } else {
                password.classList.add('is-invalid');
            }
        });

        confirmPassword.addEventListener('input', function () {
            if (confirmPassword.value === password.value) {
                confirmPassword.classList.remove('is-invalid');
            } else {
                confirmPassword.classList.add('is-invalid');
            }
        });

        email.addEventListener('input', function () {
            let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let str = email.value;
            if (reg.test(str)) {
                email.classList.remove('is-invalid');
            } else {
                email.classList.add('is-invalid');
            }
        });