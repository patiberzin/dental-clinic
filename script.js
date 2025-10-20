   document.addEventListener('DOMContentLoaded', function() {
        const phoneInput = document.getElementById('phone');

        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
                let formattedValue = '';

                if (value.length > 0) {
                    formattedValue = '(' + value.substring(0, 2);
                }
                if (value.length > 2) {
                    formattedValue += ') ' + value.substring(2, 7);
                }
                if (value.length > 7) {
                    formattedValue += '-' + value.substring(7, 11);
                }
                e.target.value = formattedValue;
            });
        }
    });
