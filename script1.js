$(document).ready(function() {
    // Xử lý sự kiện Submit Form Đăng Ký
    $('form').on('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã đăng ký! Bộ phận CodeGym Career sẽ liên hệ lại trong thời gian sớm nhất.');
        this.reset();
    });
});