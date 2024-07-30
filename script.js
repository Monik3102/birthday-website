document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('surpriseButton');
    const surpriseDiv = document.getElementById('surprise');

    button.addEventListener('click', function() {
        if (surpriseDiv.classList.contains('hidden')) {
            surpriseDiv.classList.remove('hidden');
            button.textContent = 'Kejutan Telah Ditampilkan!';
        } else {
            surpriseDiv.classList.add('hidden');
            button.textContent = 'Lihat Kejutan!';
        }
    });
});
