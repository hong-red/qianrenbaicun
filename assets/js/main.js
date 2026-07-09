// 打开弹窗
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
    // 移动端菜单切换
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // 弹窗关闭按钮
    var closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = this.getAttribute('data-close');
            closeModal(targetId);
        });
    });

    // 点击弹窗背景关闭
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });

    // ESC 键关闭弹窗
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modals.forEach(function (modal) {
                if (modal.classList.contains('active')) {
                    closeModal(modal.id);
                }
            });
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var offset = 80;
                var top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });

                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
